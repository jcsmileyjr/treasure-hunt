import { Component } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Treasure Hunt';
  score = 0;
  timer =60;
  gameOver = false;
  answers = ["eyeball"];
  userAnswer = " ";

  constructor(){
    setInterval(()=> this.countdown(), 1000);
  }

  // Countdown timer that ends game
  countdown(){
    this.timer = this.timer - 1;
    if(this.timer <= 0){
      this.gameOver = true;
    }
  }

  // When the user click the submit button, check if submitted answer is correct and reset timer
  submitAnswer(){
    if((this.userAnswer).trim() === this.answers[0]){
      this.score += 100;
      this.timer = 60
    }
  }

}
