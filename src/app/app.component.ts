import {Component, OnInit} from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/new-match', label: 'Neues Spiel' },
    { path: '/statistic', label: 'Statistiken' }
  ];

  ngOnInit(): void {

  }
}
