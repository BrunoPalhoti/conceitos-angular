import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BuscaCepService } from '../busca-cep.service';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  meuForm: FormGroup | any = null;
  cep: any;

  constructor(private cepService: BuscaCepService) { }


  ngOnInit(): void {
    this.tratamentoErro();
  }

  tratamentoErro(){ // tratamento de erro e mandando os valores pro html
    this.meuForm =  new FormGroup(
      {
        email:      new FormControl(null, [Validators.required, Validators.email, Validators.minLength(7)]),
        senha:      new FormControl(null, [Validators.required]),
        cep:        new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(9)]),
        logradouro: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        bairro:     new FormControl(null, [Validators.required]),
        localidade: new FormControl(null, [Validators.required]),
        uf:         new FormControl(null, [Validators.required])
      }
    );
  }

  onBuscarCep(){ // buscando o cep na API
    if(this.meuForm.controls.cep.value.length == 8 && this.isSomenteNumero(this.meuForm.controls.cep.value)){

    this.cepService.getCep(this.meuForm.controls.cep.value)
    .subscribe((data: any) => {
      this.meuForm.patchValue(
        data
        );
      },
      (error: any)=> {
        console.log(error);
        alert("Erro");
         },
         () =>{
           console.log("Sempre entra aqui ....")
        });
     }
  }

  isSomenteNumero(value:any){
    return ((value != null) &&
    (value !== '') &&
    !isNaN(Number(value.toString())));
  }
}
