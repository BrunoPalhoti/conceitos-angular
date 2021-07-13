import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErroFieldMessagesComponent } from './components/erro-field-messages/erro-field-messages.component';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [
    ErroFieldMessagesComponent,
    CpfPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErroFieldMessagesComponent,
    CpfPipe
  ]
})
export class SharedModule { }
