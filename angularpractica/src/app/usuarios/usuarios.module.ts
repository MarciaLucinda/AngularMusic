import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
export interface Personas {
  
  artistName: string;
  releaseDate : string;
  name : string;
  artworkUrl100 : string;
  copyright : string;
  kind :string;




}