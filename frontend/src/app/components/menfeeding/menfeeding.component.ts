import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-menfeeding',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent ],
  templateUrl: './menfeeding.component.html',
  styleUrl: './menfeeding.component.css'
})
export class MenfeedingComponent {

}
