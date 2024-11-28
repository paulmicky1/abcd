import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isRed: boolean = false;
  text1: string = "texttt";
  text2: string = "text will change press click me";

  toggleTextAndColor() {
    this.isRed = !this.isRed;

    if (this.text1 === "texttt") {
      this.text1 = "The text has now been changed!";
      this.text2 = "Click the button again.";
    } else {
      this.text1 = "texttt";
      this.text2 = "text will change press click me";
    }
  }
}
