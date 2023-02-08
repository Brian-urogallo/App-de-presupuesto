import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  fomularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) { 
    this.nombreGasto ='';
    this.cantidad = 0;
    this.fomularioIncorrecto = false;
    this.textIncorrecto = '';
  }

  ngOnInit(): void {

  }

  agregarGasto(){

    if(this.cantidad > this._presupuestoService.restante){
      this.fomularioIncorrecto = true;
      this.textIncorrecto = 'La cantidad ingresada es mayor al restante';
      return;
    }
    if(this.nombreGasto === '' || this.cantidad <= 0){
     this.fomularioIncorrecto = true;
     this.textIncorrecto = 'Nombre, gasto o cantidad incorrecta';
       
    }else{

      //creamos el objeto

      const GASTO={
        nombre: this.nombreGasto,
        cantidad: this.cantidad,
      }


      //enviamos el objeto a los subscritores via subjet

      this._presupuestoService.agregarGasto(GASTO);

      // resest formulario 
      this.fomularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }

}
