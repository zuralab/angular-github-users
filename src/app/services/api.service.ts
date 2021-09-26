import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public httpClient: HttpClient) {
  }

  private static getHeaders() {

    return new HttpHeaders().append('Authorization', 'token ' + environment.git_hub_token);
  }

  public getUsers() {
    let headers = APIService.getHeaders();
    return this.httpClient.get(environment.git_hub_api_url + 'users', {headers: headers});

  }

  public getUser(name: string) {
    let headers = APIService.getHeaders();
    return this.httpClient.get(environment.git_hub_api_url + 'users/' + name, {headers: headers});
  }

  public getUserFollowers(name: string) {
    let headers = APIService.getHeaders();
    return this.httpClient.get(environment.git_hub_api_url + 'users/' + name + '/followers', {headers: headers});

  }

  public getUserFollowing(name: string) {
    let headers = APIService.getHeaders();
    return this.httpClient.get(environment.git_hub_api_url + 'users/' + name + '/following', {headers: headers});
  }

  public getUserRepository(name: string) {
    let headers = APIService.getHeaders();
    return this.httpClient.get(environment.git_hub_api_url + 'users/' + name + '/repos', {headers: headers});
  }

}
