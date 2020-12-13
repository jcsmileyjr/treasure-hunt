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
  answers = ["eyeball","butterfly"];
  userAnswer = " ";
  correctAnswers = 0;
  imageList =[
    ['../assets/eye.png', "../assets/dribbble-logo.png"],
    ["https://api.creativecommons.engineering/v1/thumbs/73e672b8-6cf5-47b4-a77f-6065947619fa","https://pixy.org/download/4463580/"]
  ];

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
    if((this.userAnswer).trim() === this.answers[this.correctAnswers]){
      this.score += 100;
      this.timer = 60;
      this.correctAnswers += 1;
    }
  }

}
