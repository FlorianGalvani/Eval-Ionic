import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

//Components
import { PiecesOfWorkListComponent } from '../../components/pieces-of-work-list/pieces-of-work-list.component';

const declarations = [HomePage,PiecesOfWorkListComponent];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: declarations
})
export class HomePageModule {}
