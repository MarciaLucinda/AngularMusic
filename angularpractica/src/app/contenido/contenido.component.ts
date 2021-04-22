import { Component, OnInit } from '@angular/core';
import {Personas} from './../usuarios/usuarios.module';
import {UsuariosService} from './../usuarios.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {ModalComponent} from './../modal/modal.component'

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  users: any;
  listado = [];
  info:any={};

  constructor(private usuariosService: UsuariosService) {
    
   }

  ngOnInit(): void {

   this.usuariosService.getMusic2().subscribe(data => {
    this.info = Object.values(data)     
    this.users = this.info[0];

    console.log(this.info[0])
      console.log(this.info[0][0]['artistName'])
  });
  }

  
}
