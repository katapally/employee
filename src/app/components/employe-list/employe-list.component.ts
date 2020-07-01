import { Employe } from './../../shared/employe';

import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit {
  EmployeData: any = [];
  dataSource: MatTableDataSource<Employe>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['ID', 'TASK', 'DOB', 'action'];

  constructor(private employeApi: ApiService) {
    this.employeApi.GetEmploye().subscribe(data => {
      this.EmployeData = data;
      this.dataSource = new MatTableDataSource<Employe>(this.EmployeData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deleteEmploye(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.employeApi.DeleteEmploye(e.ID).subscribe()
    }
  }


}
