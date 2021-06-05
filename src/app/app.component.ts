import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any = {}; //criamos um objeto transferencia que recebe o valor que esta no nosso $event que é valor e destino.
                            // usamos {} p/ pegar qualquer informaçao que elas guardem


  transferir($event){
    console.log($event)
   this.transferencia = $event //event = valor e destino. Aqui exportamos a transferencia p/ usar no html como interpolação

  }
}
