import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You selected the department with id = {{departmentId}} </h3>
    <a (click)="goPrevious()">Previous</a>
    &nbsp;
    <a (click)="goNext()">Next</a>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  departmentId: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    // this.departmentId = id;

    // As route changes so does the latest value of department id is read even
    // if the same component is being rendered with previous & next buttons.
    // This was not possible with above approach used to read the department id from params.
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      const id = parseInt(params.get('id'), 10);
      this.departmentId = id;
    });

  }

  goPrevious(): void {

    const id = this.departmentId - 1;
    this.router.navigate(['/departments', id]);
  }

  goNext(): void {

    const id = this.departmentId + 1;
    this.router.navigate(['/departments', id]);
  }

  gotoDepartments(): void {

    const selectedId = this.departmentId ? this.departmentId : null;
   // this.router.navigate(['/departments', {id: selectedId, test: 'testvalue'}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.activatedRoute});
  }

}
