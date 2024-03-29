import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-circle',
  templateUrl: './rating-circle.component.html',
  styleUrls: ['./rating-circle.component.scss']
})
export class RatingCircleComponent {
  constructor() {
    let number = document.getElementById('number');
    let counter = 0;


    let interval = setInterval(() => {
      if (counter == 65) {
        clearInterval(interval);
      } else {
        counter += 1;
        if (number != null) {
          number.innerHTML = counter + '%'
        }
      }
    }, 20)
  }
}
