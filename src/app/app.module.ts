import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CapitalListPageComponent } from './capital-list-page/capital-list-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MenuComponent } from './menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EditCapitalModalComponent } from './edit-capital-modal/edit-capital-modal.component';
import { AddCapitalModalComponent } from './add-capital-modal/add-capital-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CapitalListPageComponent,
    MapPageComponent,
    MenuComponent,
    EditCapitalModalComponent,
    AddCapitalModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GoogleMapsModule, FormsModule],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
