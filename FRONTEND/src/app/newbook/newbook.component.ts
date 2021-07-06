
import { Component, OnInit } from '@angular/core';
import {IBook} from '../bookmodel';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookserviceService,private router: Router){  } 
  bookItem= {
     title:'',
     author:'',
     genre:'',
     imageUrl:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddBook()
  {    
    this.bookService.newBook(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
