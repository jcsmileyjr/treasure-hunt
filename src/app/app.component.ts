import { Component } from '@angular/core';
import Swal from 'sweetalert2';

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
  answers = ["eyeball","butterfly","doghouse" ,"cupcake","hotdog","starfish", "catfish", "sunflower", "rainbow", "watermelon", "football"];
  userAnswer = " ";
  correctAnswers = 0;
  imageList =[
    ['https://live.staticflickr.com/2/3038523_c3c16960cd_b.jpg', "https://api.creativecommons.engineering/v1/thumbs/603da40d-9622-491f-bf63-d0bccb879123"],
    ["https://api.creativecommons.engineering/v1/thumbs/73e672b8-6cf5-47b4-a77f-6065947619fa","https://pixy.org/download/4463580/"],
    ["https://live.staticflickr.com/51/142520422_6ad756ddf6_b.jpg", "https://live.staticflickr.com/5218/5483846837_cb3973cb07.jpg"],
    ["https://api.creativecommons.engineering/v1/thumbs/7e44be50-e587-49d5-8f96-c2e462023bbb","https://live.staticflickr.com/3067/2760578911_7f682250c3_b.jpg"],
    ["https://api.creativecommons.engineering/v1/thumbs/82b88d62-a5e8-41fc-975c-c1603f0219c3","https://api.creativecommons.engineering/v1/thumbs/3993ab41-7fcb-4dc9-828c-3cbe538075e9"],
    ["https://lh3.googleusercontent.com/proxy/V9B_7IhHJ6iRl3z8h2NbpuJPutclpSJ_2mYszECJg14jQ-HL_wYq_7qwX3BzwBssFG2KNaRm7VQTcXhzolbl-DQ","https://api.creativecommons.engineering/v1/thumbs/ed2305f0-9a9f-47e1-8607-e2848e676136"],
    ["https://api.creativecommons.engineering/v1/thumbs/b9bbd2be-a68e-4d2c-ad85-f43000cb8d55","https://api.creativecommons.engineering/v1/thumbs/33ef99cc-64a1-4112-aa6d-2584ca748d3a"],
    ["https://cdn.pixabay.com/photo/2013/07/12/17/12/sun-151763_960_720.png","https://cdn.pixabay.com/photo/2013/07/13/10/08/flower-156608_960_720.png"],
    ["https://api.creativecommons.engineering/v1/thumbs/16a80c95-779f-4d30-9ca8-22f7b313d4a9","https://api.creativecommons.engineering/v1/thumbs/068c0384-c985-41c5-8e56-a8e03e8b2469"],
    ["https://api.creativecommons.engineering/v1/thumbs/bbc81f99-a9a9-48cd-988c-1c9302218f19","https://api.creativecommons.engineering/v1/thumbs/b7601da3-44f2-46fb-8adb-4c5fbf387ecc"],
    ["http://clipart-library.com/data_images/122614.png","https://api.creativecommons.engineering/v1/thumbs/d3a26ed2-1b0b-4ad3-90bc-8eb3e1a581e1"]
  ];
  canvas;
  interval;

  constructor(){
    this.interval = setInterval(()=> this.countdown(), 1000);
  }

  // Countdown timer that ends game
  countdown(){
    this.timer = this.timer - 1;
    if(this.timer <= 0){
      this.gameOver = true;
      clearInterval(this.interval);
    }
  }

  // FIX BUG: You can't call a event.target.value in the HTML cause of typescript null check. 
  getValue(event: any){
    this.userAnswer = event.target.value;
  }

  // When the user click the submit button, check if submitted answer is correct and reset timer
  submitAnswer(){
    if((this.userAnswer).trim().toLowerCase() === this.answers[this.correctAnswers]){
      this.score += 100;
      this.timer = 60;
      this.correctAnswers += 1;
    }else{
      Swal.fire({
        title: 'Sorry, try again',
        text:"Tip: Answer is one word like 'goldfish' ",
        icon:'warning'
      });
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
    clearInterval(this.interval); 
    this.interval = setInterval(()=> this.countdown(), 1000); // reset the timer
    this.gameOver = false; // Remove the end game screen and show the game screen

  }

  skip() {
    if(this.correctAnswers <10){
      this.correctAnswers += 1;
      this.userAnswer = "";
    }else{
      this.win = true;
    }

  }

}
