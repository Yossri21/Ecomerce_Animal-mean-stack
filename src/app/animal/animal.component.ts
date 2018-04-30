import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  animals: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/animal').subscribe(data => {
      this.animals = data;
    });
  }

}
