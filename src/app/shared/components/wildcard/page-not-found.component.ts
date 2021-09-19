import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let timer: any;
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    timer = setTimeout(() => {
      this.router.navigateByUrl('/cars');
    }, 1000);
  }

  ngOnDestroy(): void {
    clearTimeout(timer);
  }
}
