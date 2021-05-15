import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeneralServices {


  constructor(
    private http: HttpClient,
    ){}

 myIndex = 0;

 carousel() {
   var i:any;
   var x:any;
   x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   this.myIndex++;
   if (this.myIndex > x.length) {this.myIndex = 1}
   x[this.myIndex-1].style.display = "block";  
 }
 
 startCarousel() {
	this.carousel();
	setInterval(()=>{ this.carousel();},4000);
 } 


}