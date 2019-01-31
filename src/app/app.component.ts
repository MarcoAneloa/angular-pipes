import { Component } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre= 'Marco';
  title = 'pipes';
  arreglo=[1,2,3,4,5,6,7,8];
  PI=Math.PI;
  a=0.34343;
  salario=1234.5;

  heroe ={
    nombre:"Logan",
    clave:"Wolvwrine",
    edad:"500",
    direccion:{
      calle:"primera",
      casa:"fgf-45"
    }
  }

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Llego data'),3500);
  });

  fecha= new Date();

  nombre2= "marco antonio aNeLoa ChiPANTAXi";

  video="RS-Ql-6mCCk";

  estado= true;
}
