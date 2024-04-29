import { Component, OnInit } from '@angular/core';
import { ITienda } from 'src/app/interfaces/itienda';
import { StiendasService } from 'src/app/services/stiendas.service';
import { ITiendas } from 'src/app/interfaces/itiendas';

@Component({
  selector: 'app-registro-local',
  templateUrl: './registro-local.page.html',
  styleUrls: ['./registro-local.page.scss'],
})
export class RegistroLocalPage implements OnInit {

  newTienda: ITienda= {
    rut:       "",
    nombre:    "",
    direccion: "",
    link:      "",      
    }
    
      constructor(private tiendaServ:StiendasService){}
    
    
      ngOnInit() {
      }
    
      crearTienda(){
        this.tiendaServ.crearTienda(this.newTienda).subscribe()
    
    
      }
    }