import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-menconference',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent],
  templateUrl: './menconference.component.html',
  styleUrl: './menconference.component.css'
})
export class MenconferenceComponent {

}
