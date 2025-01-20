import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  constructor() {}
  
  ngOnInit(){
    let numero = 0;
    console.log('Hola mundo');
    numero = 5;
    numero = 2;
    numero = 7;
    console.log('ABCDEFG');
    console.log('Hola yo soy Mateo');
    console.log('lol');
    console.log('AAAAAAA');
  }
}