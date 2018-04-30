import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css'],
})
export class AnimalDetailsComponent implements OnInit {
  animal={};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {
    this.getAnimalDetails(this.route.snapshot.params['id']);

  }

  getAnimalDetails(id){
    this.http.get('/animal/'+id).subscribe(data=>{this.animal = data ;});
  }

  deleteAnimal(id) {
    this.http.delete('/animal/'+id)
      .subscribe(res => {
          this.router.navigate(['/animals']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
