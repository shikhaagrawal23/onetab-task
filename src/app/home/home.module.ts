import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuickAddComponent } from './../quick-add/quick-add.component';
import { HomeService } from './home.service';


@NgModule({
  declarations: [HomeComponent,QuickAddComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
