import { Component, OnInit } from '@angular/core';
import {EloService} from '../shared/elo.service';

@Component({
  selector: 'app-elo-simulation',
  templateUrl: './elo-simulation.component.html',
  styleUrls: ['./elo-simulation.component.scss']
})
export class EloSimulationComponent implements OnInit {

  simulation: any;

  constructor(private eloService: EloService) { }

  ngOnInit() {
    this.getSimulation();
  }

  getSimulation() {
    this.eloService.getSimulation().subscribe(simulation => {
      this.simulation = simulation;
      this.simulation.historyGames = this.simulation.historyGames.reverse();
    });
  }

}
