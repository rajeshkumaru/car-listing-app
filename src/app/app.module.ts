import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/reducers/app.reducer';
import { CarEffects } from './store/effects/car.effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list/list.component';
import { HeaderModule } from './core/header/header/header.module';
import { SharedModule } from './shared/shared.module';
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CarEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
