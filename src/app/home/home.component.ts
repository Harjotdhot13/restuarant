import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Item } from '../model/item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.items$ = this.homeService.getMenuItems();
  }

}
