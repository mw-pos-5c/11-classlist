import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "../../services/data-provider.service";
import Clazz from "../../models/Clazz";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  clazzs: Clazz[] = [];

  constructor(private data: DataProviderService) {
  }

  ngOnInit(): void {
    this.data.getClazzes().subscribe(value => {
      this.clazzs = value;

    });
  }

}
