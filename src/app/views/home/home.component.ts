import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { WebStorageUtil } from '../../util/web-storage-util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  formulario: FormGroup;
 
  opcoes = ['Boi', 'Frango', 'Porco', 'Cerveja', 'Suco', 'Refrigerante'];

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      celular: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")]),
      opcoes: this.builtOpcoes(),
    });
  }

  builtOpcoes() {
    const values = this.opcoes.map(v => new FormControl(false));
    return this.formBuilder.array(values);
  }

  ngOnInit(): void {}

  get nome(){
    return this.formulario.get('nome')!;
  }

  get celular(){
    return this.formulario.get('celular')!;
  }

  get email(){
    return this.formulario.get('email')!;
  }

  get itens(){
    return this.formulario.get('opcoes') as FormArray;
  }

  getErroMessageNome(){
    if(this.formulario.get('nome')!.hasError('required')) {
      return "Nome é obrigatório.";
    }
    return "Nome inválido.";
  }

  getErroMessagePhone(){
    if(this.formulario.get('celular')!.hasError('required')) {
      return "Telefone é obrigatório.";
    }
    return;
  }

  getErroMessageEmail(){
    if(this.formulario.get('email')!.hasError('required')) {
      return "E-mail é obrigatório.";
    }
    return "E-mail invalido.";
  }
  
  onSubmit() {

    let valueSubmit = Object.assign({}, this.formulario.value);
    
    valueSubmit = Object.assign(valueSubmit, {
      opcoes: valueSubmit.opcoes
        .map((v: any, i: any) => v ? this.opcoes[i] : null)
        .filter((v: any) => v !== null)
    });
    
    WebStorageUtil.set("form-dados", valueSubmit);

    this.resetForm();
  }

  resetForm() {
    this.formulario.reset();
    this.formulario.pristine;
  }

  onCancel() {
    this.formulario.reset();
  }

}
