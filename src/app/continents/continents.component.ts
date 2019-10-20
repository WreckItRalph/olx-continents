import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  public continents$;
  selectedContinent;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.continents$ = this.appService.continentsList();
  }

  getContinentDetails(continent) {
    this.selectedContinent = continent;
    this.appService.displayContinentDetails(continent.code);
  }

}
