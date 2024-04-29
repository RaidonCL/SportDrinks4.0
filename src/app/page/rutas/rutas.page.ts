import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage {
  isLiked1: boolean = false; // Estado de si se ha dado like o no para la primera ruta
  isLiked2: boolean = false; // Estado de si se ha dado like o no para la segunda ruta

  constructor(private toastController: ToastController) { }

  likePost(routeNumber: number) {
    // Cambiar el estado de isLiked correspondiente al número de ruta
    if (routeNumber === 1) {
      this.isLiked1 = !this.isLiked1;
    } else if (routeNumber === 2) {
      this.isLiked2 = !this.isLiked2;
    }

    // Aquí puedes implementar la lógica para incrementar el contador de "Me gusta"
    // Por ejemplo, mostrar un mensaje de confirmación con un Toast
    this.presentToast(routeNumber);
  }

  async presentToast(routeNumber: number) {
    const routeName = routeNumber === 1 ? 'Puente Alto, Ciudad del Sol' : 'Puente Alto, Ciudad del Sol, Los Manios, Concha y Toro';
    const likeStatus = routeNumber === 1 ? this.isLiked1 : this.isLiked2;
    const message = likeStatus ? `Te gusta la ruta ${routeName}` : `Ya no te gusta la ruta ${routeName}`;

    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

}