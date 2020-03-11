import {Component} from '@angular/core';
import {ServicioDeAutentService} from './servicio-de-autent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-compra';

  constructor( public authComponent: ServicioDeAutentService ) {
  }
}
