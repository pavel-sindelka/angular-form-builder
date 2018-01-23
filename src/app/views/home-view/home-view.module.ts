import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';
import { HomeRoutingModule } from './home-view-routing.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeViewComponent]
})
export class HomeViewModule {}
