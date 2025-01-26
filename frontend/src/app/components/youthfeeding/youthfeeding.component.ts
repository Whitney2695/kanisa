import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-youthfeeding',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent ],
  templateUrl: './youthfeeding.component.html',
  styleUrl: './youthfeeding.component.css'
})
export class YouthfeedingComponent {

}
