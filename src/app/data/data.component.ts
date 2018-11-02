import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';
import { structure } from '../structure.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
 studentdetails:structure[];
  constructor(private coreservice:CoreService) { }

  ngOnInit() {
    this.coreservice.getdata().subscribe(
      data => this.studentdetails = data

      
    )
    console.log(this.studentdetails);
  }

}
