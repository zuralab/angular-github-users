import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserDataModel} from "../../models/UserDataModel";


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'avatar', 'name'];
  dataSource: MatTableDataSource<UserDataModel>;

  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }

  @ViewChild(MatSort)
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  public users: UserDataModel[] = [];

  constructor(public httpClient: HttpClient, public router: Router) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.getUsers()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getUsers() {
    let headers = new HttpHeaders().append('Authorization', 'token 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');
    this.httpClient.get('https://api.github.com/users', {headers: headers}).subscribe((res: any) => {
      for (let i in res) {
        let item = new UserDataModel();
        if (res.hasOwnProperty(i)) {
          item.id = res[i]['id'];
          item.name = res[i]['login'];
          item.avatar = res[i]['avatar_url'];
        }
        this.users.push(item);
      }
      this.dataSource = new MatTableDataSource(this.users);
    });

  }

  public onItemClick(e: any) {
    this.router.navigateByUrl('details/' + e.name).then();
  }
}


