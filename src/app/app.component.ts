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
  answers = ["eyeball","butterfly","fireman","hotdog","starfish"];
  userAnswer = " ";
  correctAnswers = 0;
  imageList =[
    ['../assets/eye.png', "../assets/dribbble-logo.png"],
    ["https://api.creativecommons.engineering/v1/thumbs/73e672b8-6cf5-47b4-a77f-6065947619fa","https://pixy.org/download/4463580/"],
    ["https://api.creativecommons.engineering/v1/thumbs/82b88d62-a5e8-41fc-975c-c1603f0219c3","../assets/man.png"],
    ["https://api.creativecommons.engineering/v1/thumbs/82b88d62-a5e8-41fc-975c-c1603f0219c3", "https://api.creativecommons.engineering/v1/thumbs/3993ab41-7fcb-4dc9-828c-3cbe538075e9"],
    ["https://api.creativecommons.engineering/v1/thumbs/aeec847a-b751-48c3-95ab-a5460f39b096","https://api.creativecommons.engineering/v1/thumbs/ed2305f0-9a9f-47e1-8607-e2848e676136"]
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
    this.userAnswer = "";
  }

}
