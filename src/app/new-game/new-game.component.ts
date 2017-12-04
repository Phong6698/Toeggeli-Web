import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})

export class NewGameComponent implements OnInit {

  players = [
    {name: 'Player1'},
    {name: 'Player2'},
    {name: 'Player3'},
    {name: 'Player4'},
    {name: 'Player5'},
    {name: 'Player6'},
    {name: 'Player7'},
    {name: 'Player8'},
    {name: 'Player9'},
  ]

  ngOnInit(): void {
  }

}
