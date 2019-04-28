import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3> Department List </h3>

    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge"> {{department.id}} </span>
        <span> {{department.name}} </span>
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  selectedId: number;

  departments = [
            {'id': 1, 'name': 'Angular'},
            {'id': 2, 'name': 'Node'},
            {'id': 3, 'name': 'MongoDB'},
            {'id': 4, 'name': 'PHP'},
            {'id': 5, 'name': '.Net'},
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      const id = parseInt(params.get('id'), 10);
      this.selectedId = id;
    });
  }

  onSelect(department: any): void {

  // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.activatedRoute});
  }

  isSelected(department: any): boolean {

    return department.id === this.selectedId;
  }

}
