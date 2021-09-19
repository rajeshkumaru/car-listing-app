import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './components/card/card.component';
import { ImageComponent } from './components/image/image.component';
import { DataFilterComponent } from './components/data-filter/data-filter.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TextFormatterPipe } from './pipes/text-formatter.pipe';
import { PaginationComponent } from './components/pagination/pagination/pagination.component';
import { PageNotFoundComponent } from './components/wildcard/page-not-found.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    CardComponent,
    ImageComponent,
    DataFilterComponent,
    LoadingComponent,
    TextFormatterPipe,
    PaginationComponent,
    PageNotFoundComponent,
  ],
  exports: [
    CardComponent,
    ImageComponent,
    DataFilterComponent,
    LoadingComponent,
    TextFormatterPipe,
    PaginationComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
