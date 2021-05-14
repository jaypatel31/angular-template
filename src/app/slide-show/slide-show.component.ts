import { Component, OnInit } from '@angular/core';
import { GeneralServices } from '../general.services';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {




	constructor(
		private generalServices: GeneralServices
	){}
	
	afterLoad(){
		this.generalServices.carousel();
		console.log("Hello");
	}
	
	
}
