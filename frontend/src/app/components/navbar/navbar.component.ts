import {Component, OnInit} from '@angular/core';
import {ClassListService} from "../../services/class-list.service";
import Clazz from "../../models/Clazz";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public data: ClassListService) {
  }

  ngOnInit(): void {
  }

  setClazz(clazz: Clazz) {
    this.data.setSelectedClazz(clazz);
  }
}
