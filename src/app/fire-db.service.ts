import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {ServicioDeAutentService} from './servicio-de-autent.service';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(public db: AngularFireDatabase,
              public auth: ServicioDeAutentService) {
  }

  altausuario(usuarioNuevoCorreo: string, usuarioNuevoUID: string) {
    this.db.object('users/userUID/' + usuarioNuevoUID.toString()).update({correo: usuarioNuevoCorreo});
    console.log('Insertado uid');
  }

  bajausuario(uidBorrar: string) {
    // borra entrada
    this.db.object('users/userUID/' + uidBorrar).remove();
  }

  guardarProdsOnClick(nomProd: string, comprado: boolean) {
    // se ejecuta cada vez que hacemos clic en un producto, este se guarda en la bd
    this.db.object('users/userUID/' + this.auth.authUser.uid + '/correo').update({
      correo: this.auth.authUser.email
    });

    this.db.object('users/userUID/' + this.auth.authUser.uid + '/productos').update({
      [nomProd]: comprado
    });
    // si queremos filtrar por si fue comprado o no
    /*
    if (!comprado) {
      this.db.object('users/userUID/' + usuarioNuevoUID.toString() + '/productos/' + nomProd.toString()).remove();
    }
     */
  }

  guardarProdsInit(nomProd: string, comprado: boolean) {
    // se ejecuta cada vez que se inicia el componente y guarda el estado de TODOS los productos
    this.db.object('users/userUID/' + this.auth.authUser.uid + '/correo').update({
      correo: this.auth.authUser.email});

    this.db.object('users/userUID/' + this.auth.authUser.uid + '/productos').update({
      [nomProd]: comprado
    });
  }
}
