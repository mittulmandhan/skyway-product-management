import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatMenu, MatMenuItem} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
