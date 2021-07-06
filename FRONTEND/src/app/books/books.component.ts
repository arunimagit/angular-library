
import { Component } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl:'./books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  pageTitle: string = 'Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  books=[{
  
    title:'',
    author:'',
    genre:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private bookService: BookserviceService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.bookService.getBooks().subscribe((data:any)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
 
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data:any) => {
        this.books = this.books.filter(b => b !== book);
      })
  

  }
}