import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sam-logs',
  templateUrl: './sam-logs.component.html',
  styleUrls: ['./sam-logs.component.css']
})
export class SamLogsComponent implements OnInit {

  @Input()
  logText: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
