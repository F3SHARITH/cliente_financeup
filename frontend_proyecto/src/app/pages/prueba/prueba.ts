import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header';
import { FooterComponent } from '../../layout/footer/footer';

@Component({
  selector: 'app-prueba',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './prueba.html',
  styleUrl: './prueba.css',
})
export class Prueba {}
