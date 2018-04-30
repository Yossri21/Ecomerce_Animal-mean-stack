import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  animal={};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveanimal() {
    this.http.post('/animal', this.animal)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/animal-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
