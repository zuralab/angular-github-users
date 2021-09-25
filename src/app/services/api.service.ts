import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public httpClient: HttpClient) {
  }

  private static getHeaders() {
    return new HttpHeaders().append('Authorization', 'token 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');
  }

  public getUser(name: string) {
    let headers = APIService.getHeaders();
    return this.httpClient.get('https://api.github.com/users/' + name, {headers: headers});

  }

  public getUserFollowers(name: string) {
    let headers = APIService.getHeaders();
    return this.httpClient.get('https://api.github.com/users/' + name + '/followers', {headers: headers});

  }

  public getUserFollowing(name: string) {
    let headers = APIService.getHeaders();
    return this.httpClient.get('https://api.github.com/users/' + name + '/following', {headers: headers});
  }

  public getUserRepository(name: string) {
    let headers = APIService.getHeaders();
    return this.httpClient.get('https://api.github.com/users/' + name + '/repos', {headers: headers});
  }

}
