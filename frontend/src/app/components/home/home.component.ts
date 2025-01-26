import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    
    'assets/church/church1.JPG',
    'assets/church/church3.JPG'
  ];
  currentImageIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startImageCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Clean up interval on component destroy
  }

  startImageCarousel() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds
  }
}
