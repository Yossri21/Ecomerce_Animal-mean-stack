import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  animal: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAnimal(this.route.snapshot.params['id']);
  }

  getAnimal(id) {
    this.http.get('/animal/'+id).subscribe(data => {
      this.animal = data;
    });
  }

  updateAnimal(id) {
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    this.animal.Created = Date.now();
    this.http.put('/animal/'+id + token, this.animal)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/animal-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
