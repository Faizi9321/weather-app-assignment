import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  get = (url:string) =>{
    const promise = new Promise<void>((resolve, reject) => {
      this.http.get(url).subscribe({
        next: (response: any) => {
          resolve(response);
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
    return promise;
  }
}
