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
  constructor(){
    setInterval(()=> this.countdown(), 1000);
  }

  countdown(){
    this.timer = this.timer - 1;
    if(this.timer <= 0){
      this.gameOver = true;
    }
  }

}
