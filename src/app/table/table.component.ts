import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'course', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  course: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arun',course:'MEARN', symbol: 'H'},
  {position: 2, name: 'Helium', course:'MEARN', symbol: 'He'},
  {position: 3, name: 'Lithium', course:'MEARN', symbol: 'Li'},
  {position: 4, name: 'Beryllium',course:'MEARN', symbol: 'Be'},
  {position: 5, name: 'Boron', course:'MEARN', symbol: 'B'},
  {position: 6, name: 'Carbon', course:'MEARN', symbol: 'C'},
  {position: 7, name: 'Nitrogen', course:'MEARN', symbol: 'N'},
  {position: 8, name: 'Oxygen', course:'MEARN', symbol: 'O'},
  {position: 9, name: 'Fluorine', course:'MEARN', symbol: 'F'},
  {position: 10, name: 'Neon', course:'MEARN', symbol: 'Ne'},
  {position: 11, name: 'Sodium',course:'MEARN', symbol: 'Na'},
  {position: 12, name: 'Magnesium', course:'MEARN', symbol: 'Mg'},
  {position: 13, name: 'Aluminum', course:'MEARN', symbol: 'Al'},
  {position: 14, name: 'Silicon', course:'MEARN', symbol: 'Si'},
  {position: 15, name: 'Phosphorus', course:'MEARN', symbol: 'P'},
  {position: 16, name: 'Sulfur', course:'MEARN', symbol: 'S'},
  {position: 17, name: 'Chlorine', course:'MEARN', symbol: 'Cl'},
  {position: 18, name: 'Argon',course:'MEARN', symbol: 'Ar'},
  {position: 19, name: 'Potassium', course:'MEARN', symbol: 'K'},
  {position: 20, name: 'Calcium', course:'MEARN', symbol: 'Ca'},
];
