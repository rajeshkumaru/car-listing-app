import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CarDetails } from 'src/app/shared/models/car-details.model';
import { PreviewImages } from 'src/app/shared/models/car-images.model';
import { FilterCars } from 'src/app/store/actions/car.action';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  public carDetails!: CarDetails;
  public carPreviewImgs!: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    let detailsObj = this.route.snapshot.data.carDetails;
    this.carDetails = {
      year: detailsObj.year,
      make: detailsObj.make,
      model: detailsObj.model,
      description: detailsObj.description,
      kilometers: detailsObj.kilometers,
      price: detailsObj.price,
    };
    this.carPreviewImgs = {
      previewImages: detailsObj.images.prevImg,
    };
  }

  backToListPage() {
    /*
      Resetting filter while navigating back to List page
    **/
    this.store.dispatch(new FilterCars(''));
    this.router.navigate(['/cars']);
  }
}
