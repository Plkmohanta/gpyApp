import { Component, OnInit } from '@angular/core';
import { GpyService } from '../services/gpy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gpy-home',
  templateUrl: './gpy-home.component.html',
  styleUrls: ['./gpy-home.component.scss']
})
export class GpyHomeComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  showSpinner: boolean = true;
  value = 50;
  listGpys: any;
  searchVal = 'nature';
  constructor(private gpyservices: GpyService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (data) => {
        let id = data['params'].id;
        if (id) {
          this.getGpy(data['params'].id);
        } else {
          this.getGpy(this.searchVal);

        }

      }
    )




  }

  getGpy(val) {
    this.gpyservices.getAllGpy(val).subscribe(
      (data) => {
        this.listGpys = data.data;
        this.showSpinner = false;
      },
      (err) => {
        console.log(err);
        this.showSpinner = false;
      }
    );
  }
}
