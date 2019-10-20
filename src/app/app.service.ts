import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, ObservedValueOf, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  graphQLApi = `https://countries.trevorblades.com`;
  continentsList$: BehaviorSubject<any>;
  continentDetail$: BehaviorSubject<any>;

  listSub;
  detailSub: Subscription;
  constructor(private http: HttpClient, private router: Router) {
    this.continentsList$ = new BehaviorSubject(undefined);
    this.continentDetail$ = new BehaviorSubject(undefined);
    this.getContinents();
  }

  getContinents() {
    const getContinents = { query: '{continents{name code}}' };
    this.http.post(this.graphQLApi, getContinents).subscribe((list: any) => {
      this.continentsList$.next(list.data.continents);
    });
  }

  getContinentDetails(continentCode) {
    const getContinents = { query: `{continent(code:\"${continentCode}\") {name code countries{name}}}` };
    if (this.detailSub) {
      this.detailSub.unsubscribe();
    }
    this.detailSub = this.http.post(this.graphQLApi, getContinents).subscribe((list: any) => {
      this.continentDetail$.next(list.data.continent);
      this.router.navigateByUrl(`continent/${continentCode}`);
    });
  }

  continentsList(): Observable<any> {
    return this.continentsList$.asObservable();
  }

  continentDetail(): Observable<any> {
    return this.continentDetail$.asObservable();
  }

  displayContinentDetails(continent) {
    this.getContinentDetails(continent);
  }
}
