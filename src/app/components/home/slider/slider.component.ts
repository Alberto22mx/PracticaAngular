import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images: string[] = [
    '../../../../assets/img/banner-1.jpg',
    '../../../../assets/img/banner-2.jpg',
    '../../../../assets/img/banner-3.jpg'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
