import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GpyService {
  apiKey = '5AyFzeBVe2XSgwpkBOg3qRX56bTvNyWJ';
  mainUrl = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) { }

  public getAllGpy(val): Observable<any> {
    const newUrl = `${this.mainUrl}/search?api_key=${this.apiKey}&q=${val}&limit=8&offset=0&rating=G&lang=en`;
    return this.http.get(newUrl);
  }
  public getGpyById(id: string): Observable<any> {
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=5AyFzeBVe2XSgwpkBOg3qRX56bTvNyWJ`
    return this.http.get(url);
  }
}
