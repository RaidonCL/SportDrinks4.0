import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
  likeColor: string = 'primary'; // Color inicial del botón
  isLiked: boolean = false; // Estado de si se ha dado like o no

  constructor(private toastController: ToastController) { }

  likePost() {
    // Cambiar el color del botón y el estado de isLiked al hacer clic
    if (this.isLiked) {
      this.likeColor = 'primary'; // Volver al color inicial si ya se dio like antes
      this.isLiked = false; // Cambiar el estado a no haber dado like
    } else {
      this.likeColor = 'success'; // Cambiar el color al dar like
      this.isLiked = true; // Cambiar el estado a haber dado like
    }

    // Aquí puedes implementar la lógica para incrementar el contador de "Me gusta"
    // Por ejemplo, mostrar un mensaje de confirmación con un Toast
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.isLiked ? 'Te gusta' : 'Ya no te gusta',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

}