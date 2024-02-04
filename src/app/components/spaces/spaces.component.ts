import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.scss'
})
export class SpacesComponent {

  // dataSets: { rows: number, columns: number, data: number[] }[] = [
  //   { rows: 19.92, columns: 25, data: [] },
  //   { rows: 2, columns: 3, data: [] },
  //   { rows: 7.32, columns: 25, data: [] },
  //   { rows: 4, columns: 4, data: [] }
  // ];

  // constructor(private router: Router) {
  //   this.initializeData();
  // }

  // initializeData(): void {
  //   this.dataSets.forEach((dataSet) => {
  //     dataSet.data = Array.from({ length: dataSet.rows * dataSet.columns }, (_, i) => i + 1);
  //   });
  // }

  // goToSpace(id: number): void {
  //   this.router.navigate(['space', id]);
  // }

  rows: number = 19.92;
  columns: number = 25;
  data: any[] = Array.from({ length: this.rows * this.columns }, 
    (_, index) => ( index + 1))


  rows1: number = 2;
  columns1: number = 3;
  data1: any[] = Array.from({ length: this.rows1 * this.columns1 }, 
    (_, index) => ( index + 1))


  rows2: number = 7.32;
  columns2: number = 25;
  data2: any[] = Array.from({ length: this.rows2 * this.columns2 }, 
    (_, index) => ( index + 1))

  
  rows3: number = 4;
  columns3: number = 4;
  data3: any[] = Array.from({ length: this.rows3 * this.columns3 }, 
    (_, index) => ( index + 1))



    constructor(private router: Router) {}

    goToSpace(id:number): void {
      this.router.navigate(['space', id])
    }

    
}
