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
  win= false;
  answers = ["eyeball","butterfly","fireman","hotdog","starfish", "catfish", "dragonfly", "rainbow", "watermelon", "football"];
  userAnswer = " ";
  correctAnswers = 0;
  imageList =[
    ['../assets/eye.png', "../assets/dribbble-logo.png"],
    ["https://api.creativecommons.engineering/v1/thumbs/73e672b8-6cf5-47b4-a77f-6065947619fa","https://pixy.org/download/4463580/"],
    ["https://api.creativecommons.engineering/v1/thumbs/82b88d62-a5e8-41fc-975c-c1603f0219c3","../assets/man.png"],
    ["https://api.creativecommons.engineering/v1/thumbs/82b88d62-a5e8-41fc-975c-c1603f0219c3", "https://api.creativecommons.engineering/v1/thumbs/3993ab41-7fcb-4dc9-828c-3cbe538075e9"],
    ["https://api.creativecommons.engineering/v1/thumbs/aeec847a-b751-48c3-95ab-a5460f39b096","https://api.creativecommons.engineering/v1/thumbs/ed2305f0-9a9f-47e1-8607-e2848e676136"],
    ["https://api.creativecommons.engineering/v1/thumbs/b9bbd2be-a68e-4d2c-ad85-f43000cb8d55","https://api.creativecommons.engineering/v1/thumbs/33ef99cc-64a1-4112-aa6d-2584ca748d3a"],
    ["https://api.creativecommons.engineering/v1/thumbs/71849d15-649e-4f8e-893d-ee9bb2966722","https://api.creativecommons.engineering/v1/thumbs/90f81ec7-6edb-412c-a6d0-de719799c102"],
    ["https://api.creativecommons.engineering/v1/thumbs/16a80c95-779f-4d30-9ca8-22f7b313d4a9","https://api.creativecommons.engineering/v1/thumbs/068c0384-c985-41c5-8e56-a8e03e8b2469"],
    ["https://api.creativecommons.engineering/v1/thumbs/bbc81f99-a9a9-48cd-988c-1c9302218f19","https://api.creativecommons.engineering/v1/thumbs/b7601da3-44f2-46fb-8adb-4c5fbf387ecc"],
    ["https://api.creativecommons.engineering/v1/thumbs/88d46878-aac4-4f3d-b537-aedb9f84373c","https://api.creativecommons.engineering/v1/thumbs/d3a26ed2-1b0b-4ad3-90bc-8eb3e1a581e1"]
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

  // FIX BUG: You can't call a event.target.value in the HTML cause of typescript null check. 
  getValue(event: any){
    this.userAnswer = event.target.value;
  }

  // When the user click the submit button, check if submitted answer is correct and reset timer
  submitAnswer(){
    if((this.userAnswer).trim() === this.answers[this.correctAnswers]){
      this.score += 100;
      this.timer = 60;
      this.correctAnswers += 1;
    }
    this.userAnswer = "";
    if(this.correctAnswers >= 10){
      this.win = true;
    }
  }

  reset() {
    this.score = 0;
    this.timer = 60;
    this.correctAnswers = 0;
    this.userAnswer = "";
  }

  skip() {
    if(this.correctAnswers <10){
      this.correctAnswers += 1;
      this.userAnswer = "";
      console.log(this.correctAnswers)
    }else{
      this.win = true;
    }

  }

}
