import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {
public addpersona : FormGroup;
listadopersonas = [];
public nomb : any;

constructor() {

    this.addpersona = this.createdForm();
   
}

get no(){ return this.addpersona.get('no'); }
get ap(){ return this.addpersona.get('ap'); }
get di(){ return this.addpersona.get('di'); }
get pa(){ return this.addpersona.get('pa'); }
get co(){ return this.addpersona.get('co'); }
get ed(){ return this.addpersona.get('ed'); }
get oc(){ return this.addpersona.get('oc'); }



 
createdForm(){
 return new FormGroup({
  no: new FormControl('',[Validators.required]),
  ap: new FormControl('',[Validators.required]),
  di: new FormControl('',[Validators.required]),
  pa: new FormControl('',[Validators.required]),
  co: new FormControl('',[Validators.required]),
  ed: new FormControl('',[Validators.required]),
  oc: new FormControl('',[Validators.required])
 })

}

onResetForm(): void {
  this.addpersona.reset();
}


miSubmit() {
  console.log(this.addpersona.value);
  //console.log(this.addpersona);
  this.listadopersonas=this.addpersona.value;
 
  this.addpersona.reset();
  
}


}
