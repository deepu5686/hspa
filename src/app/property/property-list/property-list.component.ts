import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellrent=1;
  properties: Array<Iproperty>;
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
    ) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellrent = 2;
    }
    this.housingService.getAll(this.sellrent)
      .subscribe(data =>{
        this.properties = data;
      })
  }

}
