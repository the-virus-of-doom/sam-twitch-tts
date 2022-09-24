import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})
export class SamComponent implements OnInit {
  samInputText = 'Hello, my name is SAM.';
  samIsSpeaking = false;
  samLogs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSpeak(wordsToSpeak: string){
    this.samIsSpeaking = true;
    console.log(wordsToSpeak);
    this.samLogs.push(wordsToSpeak);
    // this.samLogs.push(new Date().toString());

    // TODO: implement sam speaking here
    setTimeout(() => {
      this.samIsSpeaking = false;
    }, 500)
  }
}
