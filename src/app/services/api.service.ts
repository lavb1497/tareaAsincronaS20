import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getMostrar();
  }

  getMostrar(){
    return this.http.get<any>(this.url);
  }
}
