import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MainComponent } from '../../components/main/main.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsComponent } from '../../components/products/products.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    MainComponent,
    ProductsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
