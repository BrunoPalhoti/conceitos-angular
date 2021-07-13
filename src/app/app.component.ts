import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-projeto-angular';

  nome = " 'Angular 12";

  empresa : string = 'BRQ';

  salario : number = 90;

  mostrarMensagem(){
        let nome = 'Isadora';
    	return nome;
  }

  meuClique(){
    console.log("oi");
    this.title = "oi";
  }

  onKeyUp(valorDigitado : string){
    console.log(valorDigitado);
  }
}
