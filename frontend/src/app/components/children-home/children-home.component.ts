import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-children-home',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent ],
  templateUrl: './children-home.component.html',
  styleUrl: './children-home.component.css'
})
export class ChildrenHomeComponent {

}
