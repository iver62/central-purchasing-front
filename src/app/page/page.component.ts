import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  links = [
    {
      label: 'Carte',
      route: 'map'
    },
    {
      label: 'Entrepôt',
      route: 'warehouse'
    },
    {
      label: 'Chauffeurs',
      route: 'drivers'
    },
    {
      label: 'Camions',
      route: 'trucks'
    },
    {
      label: 'Magasins',
      route: 'markets'
    },
    {
      label: 'Fournisseurs',
      route: 'suppliers'
    }
  ];
  activeLink = this.links[0].route;

  constructor() { }

  ngOnInit(): void {
  }

}
