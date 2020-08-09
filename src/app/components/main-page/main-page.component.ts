import { Component, OnInit } from '@angular/core';
import { foodInterface } from 'src/app/interface/foodInterface';
import { foodData } from 'src/app/model/foodData';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  foods:foodInterface[];
  searchFood;
  category:string='';
  ngOnInit(): void {
    console.log("Food Data: ",foodData);
    this.foods = foodData;
  }
  
  setValue(dCategory:any):void{
    console.log("Dishes Category: ",dCategory);
    this.searchFood = dCategory;
    console.log(this.searchFood);
  }
}
