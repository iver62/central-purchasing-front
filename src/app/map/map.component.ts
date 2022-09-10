import { Subscription } from 'rxjs';
import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  map: any;
  sub: Subscription;
  truckIcon = L.icon({
    iconUrl: 'assets/images/truck-icon.png',
    // shadowUrl: 'assets/images/marker-shadow.png',
    popupAnchor: [13, 0],
    iconSize: [30, 30]
  });
  truckMarker: L.Marker;

  constructor() { }

  ngOnInit(): void {
    // Declare an EventSource
    const eventSource = new EventSource('http://localhost:8080/api/route/stream-sse');
    // Handler for events without an event type specified
    eventSource.onmessage = (e) => {
    };
    // Handler for events of type 'eventType' only
    eventSource.addEventListener('EVENT_TYPE', e => {
      console.log(JSON.parse(e.data));
      const geoloc = JSON.parse(e.data);
      if(this.truckMarker) {
        this.truckMarker.removeFrom(this.map);
      }
      this.truckMarker = L.marker([geoloc.latitude, geoloc.longitude], { icon: this.truckIcon }).bindPopup('Ma position');
      this.truckMarker.addTo(this.map);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [50.28811, 2.81625],
      zoom: 9
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const wareHouseIcon = L.icon({
      iconUrl: 'assets/images/warehouse-icon.png',
      // shadowUrl: 'assets/images/marker-shadow.png',
      popupAnchor: [13, 0],
      iconSize: [30, 30]
    });

    const leclercIcon = L.icon({
      iconUrl: 'assets/images/leclerc-icon.png',
      // shadowUrl: 'assets/images/marker-shadow.png',
      popupAnchor: [13, 0],
      iconSize: [30, 30]
    });

    const warehouseMarker = L.marker([50.28811, 2.81625], { icon: wareHouseIcon }).bindPopup('Mon entrepôt');
    const dainvilleMarker = L.marker([50.28179, 2.73898], { icon: leclercIcon }).bindPopup('Dainville');
    const seclinMarker = L.marker([50.54997, 3.05472], { icon: leclercIcon }).bindPopup('Seclin');
    const carvinMarker = L.marker([50.49933, 2.94599], { icon: leclercIcon }).bindPopup('Carvin');

    tiles.addTo(this.map);
    warehouseMarker.addTo(this.map);
    dainvilleMarker.addTo(this.map);
    seclinMarker.addTo(this.map);
    carvinMarker.addTo(this.map);
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }

}
