import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css'],
})
export class AnimalDetailsComponent implements OnInit {
  animal: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {
    this.getAnimalDetails(this.route.snapshot.params['id']);

  }

  getAnimalDetails(id){
    this.http.get('/animal/'+id).subscribe(data=>{console.log(data); this.animal = data ;});
  }

  deleteAnimal(id) {
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    this.http.delete('/animal/'+id + token)
      .subscribe(res => {
          this.router.navigate(['/animals']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  checkOwner() {
    return this.animal.owner._id === localStorage.getItem('userId')
  }
}
