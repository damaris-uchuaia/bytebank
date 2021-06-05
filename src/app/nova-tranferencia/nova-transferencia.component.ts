import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();//criando um evento de output p/exibir os resultado do formulario no app.html

  valor: number;
  destino: number;
  codigoConta: number;

  transferir() {
    console.log('Solicitada nova transferência');
    /*console.log("Valor", this.valor)
      console.log("Destino", this.destino)*/
    const valorEmitir = { valor: this.valor, destino: this.destino, codigoConta: this.codigoConta };//invocanco o evento aoTransferir e emitindo o valor
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
    this.codigoConta = 0;
  }
}

