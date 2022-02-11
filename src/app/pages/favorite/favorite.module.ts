import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritePageRoutingModule } from './favorite-routing.module';

import { FavoritePage } from './favorite.page';
//Components
import { PiecesOfWorkListComponent } from '../../components/pieces-of-work-list/pieces-of-work-list.component';

const declarations = [FavoritePage,PiecesOfWorkListComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePageRoutingModule
  ],
  declarations: declarations
})
export class FavoritePageModule {}
