import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-continent-detail',
  templateUrl: './continent-detail.component.html',
  styleUrls: ['./continent-detail.component.css']
})
export class ContinentDetailComponent implements OnInit, OnDestroy {

  public continentDetail$: Observable<any>;
  public subscriptions: Subscription[];
  continentDetails;

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.continentDetail$ = this.appService.continentDetail();
    this.route.paramMap.subscribe(p => {
      this.appService.getContinentDetails(p.get('id'));
    });
    this.subscriptions.push(this.continentDetail$.subscribe(data => {
      this.continentDetails = data;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
