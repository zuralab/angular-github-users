import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {APIService} from "../../services/api.service";
import {UserDataModel} from "../../models/UserDataModel";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UserRepositoryModel} from "../../models/UserRepositoryModel";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: [`./user-details.component.scss`]
})
export class UserDetailsComponent implements OnInit, AfterViewInit {
  public user: UserDataModel = new UserDataModel();
  public followers: UserDataModel[] = [];
  public following: UserDataModel[] = [];
  public repository: UserRepositoryModel[] = [];
  displayedColumns: string[] = ['id', 'avatar', 'name'];
  repoColumns: string[] = ['id','name'];
  followersSource: MatTableDataSource<any>;
  followingSource: MatTableDataSource<any>;
  repositorySource: MatTableDataSource<any>;


  @ViewChild('followersPaginator') followersPaginator: MatPaginator;
  @ViewChild('followingPaginator') followingPaginator: MatPaginator;
  @ViewChild('repositoryPaginator') repositoryPaginator: MatPaginator;


  constructor(public API: APIService, public route: ActivatedRoute, private router: Router) {
    this.getUserIDFromURL();
  }

  public getUserIDFromURL() {
    this.route.params.subscribe(params => {
      const name = params['name']
      this.getUser(name);
    })
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.getUserIDFromURL();
    this.followersSource = new MatTableDataSource();
    this.followingSource = new MatTableDataSource();
    this.repositorySource = new MatTableDataSource();
    this.followersSource.paginator = this.followersPaginator;
    this.followingSource.paginator = this.followingPaginator;
    this.repositorySource.paginator = this.repositoryPaginator;
  }

  public getUser(userName: string) {
    this.API.getUser(userName).subscribe((res: any) => {
      this.user = {
        id: res['id'],
        avatar: res['avatar_url'],
        name: res['login'],
      }
    });
    this.API.getUserFollowers(userName).subscribe((res: any) => {
      let o = [];
      for (let i in res) {
        let item = new UserDataModel();
        if (res.hasOwnProperty(i)) {
          item.id = res[i]['id'];
          item.name = res[i]['login'];
          item.avatar = res[i]['avatar_url'];
          o.push(item);
        }
      }
      this.followers = o;
      this.followersSource = new MatTableDataSource(this.followers);
      this.followersSource.paginator = this.followersPaginator;

    });
    this.API.getUserFollowing(userName).subscribe((res: any) => {
      let o = [];
      for (let i in res) {
        let item = new UserDataModel();
        if (res.hasOwnProperty(i)) {
          item.id = res[i]['id'];
          item.name = res[i]['login'];
          item.avatar = res[i]['avatar_url'];
        }
        o.push(item);
      }
      this.following = o;
      this.followingSource = new MatTableDataSource(this.following);
      this.followingSource.paginator = this.followingPaginator;
    });
    this.API.getUserRepository(userName).subscribe((res: any) => {
      console.log(res)
      let o = [];
      for (let i in res) {
        let item = new UserRepositoryModel();
        if (res.hasOwnProperty(i)) {
          item.id = res[i]['id'];
          item.name = res[i]['full_name'];
          item.url = res[i]['html_url'];
        }
        o.push(item);
      }
      this.repository = o;
      console.log( this.repository)
      this.repositorySource = new MatTableDataSource(this.repository);
      this.repositorySource.paginator = this.repositoryPaginator;
    });
  }

  public onItemClick(e: any) {
    this.router.navigateByUrl('details/' + e.name).then();
  }
}
