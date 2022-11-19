import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnggotaComponent } from './add-anggota/add-anggota.component';
import { HttpClientModule } from '@angular/common/http';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ShowAnggotaComponent } from './show-anggota/show-anggota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowDetailAnggotaComponent } from './show-detail-anggota/show-detail-anggota.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnggotaComponent,
    MainHeaderComponent,
    ShowAnggotaComponent,
    ShowDetailAnggotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
