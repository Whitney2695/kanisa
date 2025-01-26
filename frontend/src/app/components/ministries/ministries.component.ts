import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-ministries',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './ministries.component.html',
  styleUrl: './ministries.component.css'
})
export class MinistriesComponent {

}
