import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { StiendasService } from 'src/app/services/stiendas.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.page.html',
  styleUrls: ['./tiendas.page.scss'],
})
export class TiendasPage   {
  rut: string='';
  nombre: string='';
  direccion: string='';
  tiendas: any[] = [];

  constructor(private router: Router, private tiendasServ:StiendasService, private loadingCtrl:LoadingController) { }

  ionViewWillEnter(){
    this.loadTiendas()
  }
guardarTienda(){
  console.log('Tienda Guardada');
}
  home(){
    this.router.navigateByUrl('/principal');
  }

  async loadTiendas(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    }
  );

    await loading.present();


    this.tiendasServ.listarTiendas().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.tiendas = JSON.parse(listString)
        event?.target.complete();
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }
}