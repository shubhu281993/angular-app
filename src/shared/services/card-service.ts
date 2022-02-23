import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class CardService{
    constructor(private http:HttpClient){ }
     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }  
    getSuffledCards(noOfCards:number) : Observable<string[]>{
        const url = `http://cardgameapp.centralus.cloudapp.azure.com/API/api/Card?noOfCards=${noOfCards}`;
        return this.http.get<string[]>(url);
    }

    getSortedCards(cards:any) : Observable<string[]>{
        const url = `http://cardgameapp.centralus.cloudapp.azure.com/API/api/Card`;
        return this.http.post<string[]>(url, JSON.stringify(cards), this.httpOptions);
    }
}