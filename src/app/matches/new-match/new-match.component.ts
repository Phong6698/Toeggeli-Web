import {Component, OnInit, Inject} from '@angular/core';

import {trigger, transition, useAnimation} from '@angular/animations';
import {
  bounceInDown,
  bounceOutUp,
  slideInRight,
  slideOutRight,
  slideInLeft,
  slideOutLeft,
  slideOutUp,
  fadeInUp
} from 'ng-animate';
import {PlayerService} from '../../players/shared/player.service';
import {MatchService} from '../shared/match.service';
import {Player} from '../../players/shared/player.model';
import {Match} from '../shared/match.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.scss'],
  animations: [
    trigger('addBounceAnimation', [
      transition('void => *', useAnimation(bounceInDown)),
      transition('* => void', useAnimation(bounceOutUp))
    ])
    ,
    trigger('showPlayerColumn', [
      transition('void => *', useAnimation(slideInRight, {
        params: {timing: 0.3, fromOpacity: 0}
      }))
    ]),
    trigger('hidePlayerColumn', [
      transition('* => void', useAnimation(slideOutRight, {
        params: {timing: 0.3, toOpacity: 0}
      }))
    ]),
    trigger('showMatchColumn', [
      transition('void => *', useAnimation(slideInLeft, {
        params: {timing: 0.3, fromOpacity: 0}
      }))
    ]),
    trigger('hideMatchColumn', [
      transition('* => void', useAnimation(slideOutUp, {
        params: {timing: 0.3, toOpacity: 0}
      }))
    ]),
    trigger('showPoints', [
      transition('void => *', useAnimation(fadeInUp), {
        params: {timing: 0.8}
      })
    ])
  ],
})
export class NewMatchComponent implements OnInit {

  newPlayer: string;

  players: Player[];

  match: Match;

  isResultState: boolean;

  points: any;

  constructor(private playerService: PlayerService, private matchService: MatchService, public dialog: MatDialog, private router: Router) {
    this.newPlayer  = '';
    this.match = new Match();
    this.players  = [];
    this.isResultState = false;
    this.points = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
  }


  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
      this.sortPlayers();
    });
  }

  addNewPlayer() {
    this.playerService.addPlayer({id: null, name: this.newPlayer}).subscribe(player => {
      this.players.push(player);
      this.newPlayer = '';
      this.sortPlayers();
    });
  }

  addNewMatch(): void {
    this.matchService.addMatch(this.match).subscribe(() => {
      // TODO start animation
      console.log('Match saved');
      this.router.navigateByUrl('/');
    });
  }

  addPlayerToTeam(player): void {
    if (this.match.team1.player1 == null) {
      this.match.team1.player1 = player;
    } else if (this.match.team1.player2 == null) {
      this.match.team1.player2 = player;
    } else if (this.match.team2.player1 == null) {
      this.match.team2.player1 = player;
    } else if (this.match.team2.player2 == null) {
      this.match.team2.player2 = player;
    }
  }

  addPlayerToTeamRandomly(players: Player[]): void {
    const i = players.length;
    for (let count = 0; count < i; count++) {
      let player;
      player = this.getRandomPlayer(players);
      this.addPlayerToTeam(player);
      players.splice(players.indexOf(player), 1);
    }
  }

  getRandomPlayer(players: Player[]): Player {
    const randomIndex = Math.floor((Math.random() * players.length));
    return players[randomIndex];
  }

  onTeam1PointChange() {
    if (this.match.score1 !== 10) {
      this.match.score2 = 10;
    } else if (this.match.score1 === 10 && this.match.score2 === 10) {
      this.match.score2 = null;
    }
  }

  onTeam2PointChange() {
    if (this.match.score2 !== 10) {
      this.match.score1 = 10;
    } else if (this.match.score2 === 10 && this.match.score1 === 10) {
      this.match.score1 = null;
    }
  }

  sortPlayers() {
    this.players.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  checkTeamsFull() {
    if (this.match.team1.player1 === null ||
        this.match.team1.player2 === null ||
        this.match.team2.player1 === null ||
        this.match.team2.player2 === null) {
      return false;
    } else {
      return true;
    }
  }

  isPlayerInTeam(player: Player): boolean {
    if (this.match.team1.player1 === player ||
      this.match.team1.player2 === player ||
      this.match.team2.player1 === player ||
      this.match.team2.player2 === player) {
      return true;
    } else {
      return false;
    }
  }

  openRandomDialog() {
    const playersNotInTeam = [];
    for (const player of this.players) {
      if (!this.isPlayerInTeam(player)) {
        playersNotInTeam.push(player);
      }
    }
    const dialogRef = this.dialog.open(RandomPlayerSelectorDialogComponent, {
      minWidth: '400px',
      minHeight: '100px',
      maxHeight: '600px',
      data: {
        players: playersNotInTeam
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addPlayerToTeamRandomly(result);
      } else {

      }

      // TODO Animations?
    });
  }

}

@Component({
  selector: 'app-random-player-selector-dialog',
  templateUrl: 'random-player-selector-dialog.component.html',
})
export class RandomPlayerSelectorDialogComponent {

  constructor(public dialogRef: MatDialogRef<RandomPlayerSelectorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  toggleSelect(selectToggle, playerSelection) {
    if (selectToggle.checked) {
      playerSelection.selectAll();
    } else if (!selectToggle.checked) {
      playerSelection.deselectAll();
    }
  }

  submitSelectedPlayers(playerSelection) {
    if (playerSelection.selectedOptions.selected.length > 1) {
      const selectedPlayers = [];
      for (const selectOption of playerSelection.selectedOptions.selected) {
        selectedPlayers.push(selectOption.value);
      }
      this.dialogRef.close(selectedPlayers);
    }
  }
}

