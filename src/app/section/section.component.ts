import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  imagePath: string = 'assets/images/coff.png'
  constructor() { }
  ngOnInit(): void {
    const changeButton = document.getElementById('changeButton');
    const slideImage = document.getElementById('slideImage') as HTMLImageElement;
    const slideText = document.getElementById('slideText') as HTMLHeadingElement;

    if (changeButton) {
      changeButton.addEventListener('click', () => {
        // Check the current image source and change it based on some condition
        if (slideImage.src.includes('cup.png')) {
          slideImage.src = 'assets/images/cup3.png';
          if (slideText) {
            slideText.innerText = 'CAPPUCCINO'; // Change the text if needed
          }
        } else {
          slideImage.src = 'assets/images/cup.png';
          if (slideText) {
            slideText.innerText = 'MOCHA'; // Change the text if needed
          }
        }
      });
    }
  }

}
