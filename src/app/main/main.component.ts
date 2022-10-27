import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  days: string = '0';
  hours: string = '0';
  minutes: string = '0';
  raffleDay: any = new Date('Jan 1 2023 00:00:00');
  difference: number = 0;

  constructor() {}

  ngOnInit(): void {
    const timer = () => {
      const today: any = new Date();
      const days = Math.floor(this.difference / 1000 / 60 / 60 / 24);
      const hours = Math.floor(this.difference / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(this.difference / 1000 / 60) % 60;
      this.difference = this.raffleDay - today;

      if (days < 10) {
        this.days = '0' + days;
      } else {
        this.days = days.toString();
      }

      if (hours < 10) {
        this.hours = '0' + hours;
      } else {
        this.hours = hours.toString();
      }

      if (minutes < 10) {
        this.minutes = '0' + minutes;
      } else {
        this.minutes = minutes.toString();
      }
    };

    timer();
    setInterval(timer, 1000);
  }
}
