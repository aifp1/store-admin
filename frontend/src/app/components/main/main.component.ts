import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  componentCase: number = 0;

  showComponent(opc: number){
    this.componentCase = opc;
  }

}
