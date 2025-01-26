import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  constructor(private router: Router) {}

  navigateToDetails(programId: string) {
    this.router.navigate(['/program-details', programId]);
  }

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    const slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach((slideshow) => {
      const images = slideshow.querySelectorAll('.program-image');
      const dotsContainer = slideshow.querySelector('.slideshow-dots') as HTMLElement;
      let index = 0;

      images.forEach(() => {
        const dot = document.createElement('div');
        dot.classList.add('slideshow-dot');
        dotsContainer.appendChild(dot);
      });

      const dots = dotsContainer.querySelectorAll('.slideshow-dot');

      setInterval(() => {
        images.forEach((img, i) => {
          img.classList.add('hidden');
        });
        dots.forEach((dot) => dot.classList.remove('active'));

        images[index].classList.remove('hidden');
        dots[index].classList.add('active');

        index = (index + 1) % images.length;
      }, 2000);
    });
  }
}
