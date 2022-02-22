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
        const url = `https://localhost:7069/api/Card?noOfCards=${noOfCards}`;
        return this.http.get<string[]>(url);
    }

    getSortedCards(cards:any) : Observable<string[]>{
        const url = `https://localhost:7069/api/Card`;
        return this.http.post<string[]>(url, JSON.stringify(cards), this.httpOptions);
    }
}