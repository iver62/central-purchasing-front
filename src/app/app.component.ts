import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'central-purchasing-front';
  // messages: string[] = [];
  // sub: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.sub = this.getMessages().subscribe(
    //   {
    //     next: data => {
    //       console.log('EVENT', data);
    //       this.addMessage(data);
    //     },
    //     error: err => console.error(err)
    //   });

    // // Declare an EventSource
    // const eventSource = new EventSource('http://localhost:8080/api/route/stream-sse');
    // // Handler for events without an event type specified
    // eventSource.onmessage = (e) => {
    //   console.log(e.data);

    //   this.addMessage(e.data);
    //   console.log(this.messages);

    //   // Do something - event data etc will be in e.data
    // };
    // // Handler for events of type 'eventType' only
    // eventSource.addEventListener('EVENT_TYPE', e => {
    //   console.log(e);
    //   this.addMessage(e.data);
    //   console.log(this.messages);
    // });
  }

  // private loadMap(): void {
  //   this.map = L.map('map').setView([0, 0], 1);
  //   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //     maxZoom: 18,
  //     id: 'mapbox/streets-v11',
  //     tileSize: 512,
  //     zoomOffset: -1,
  //   }).addTo(this.map);

  //   this.getCurrentPosition()
  //     .subscribe((position: any) => {
  //       this.map.flyTo([position.latitude, position.longitude], 13);

  //       const icon = L.icon({
  //         iconUrl: 'assets/images/marker-icon.png',
  //         shadowUrl: 'assets/images/marker-shadow.png',
  //         popupAnchor: [13, 0],
  //       });

  //       const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
  //       marker.addTo(this.map);
  //     });
  // }

  // getMessages() {
  //   return new Observable((observer: any) => {
  //     let source = new EventSource("http://localhost:8080/api/route/stream-sse");
  //     console.log(source);

  //     source.onopen = event => {
  //       this.zone.run(() => {
  //         console.log('ONOPEN', event);
  //       })
  //     }
  //     source.onmessage = event => {
  //       this.zone.run(() => {
  //         console.log('EVENT', event);

  //         observer.next(event)
  //       })
  //     }
  //     source.onerror = event => {
  //       this.zone.run(() => {
  //         observer.error(event)
  //       })
  //     }
  //   })
  // }

  // addMessage(msg: any) {
  //   this.messages = [...this.messages, msg];
  // }

  // ngOnDestroy(): void {
  //   this.sub && this.sub.unsubscribe();
  // }

}
