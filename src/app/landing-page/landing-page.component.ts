import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeautyItem, IItems } from './langind-page.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  beautyItems: IBeautyItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IItems>('assets/data/data.json').subscribe(data => {
      this.beautyItems = data.items;
    });
  }
}
