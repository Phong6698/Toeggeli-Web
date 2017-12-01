import {Component, OnInit} from '@angular/core';
import 'hammerjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Töggeli';
  navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/new-game', label: 'New Game' }
  ];



  ngOnInit(): void {

  }
}
