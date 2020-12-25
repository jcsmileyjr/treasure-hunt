import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() gameOver;
  @Input() pauseTimer;

  @Output() skip = new EventEmitter<string>();
  @Output() pause = new EventEmitter<string>();
  @Output() restart = new EventEmitter<string>();
  @Output() startTimer = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
