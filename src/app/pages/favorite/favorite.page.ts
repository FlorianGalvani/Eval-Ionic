import { Component, OnInit } from '@angular/core';
import { PiecesOfWorkService } from 'src/app/services/api/piecesOfWork/pieces-of-work.service';
import { PiecesOfWork } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  favoritePiecesOfWork:Array<PiecesOfWork>;
  constructor(private piecesOfWorkService:PiecesOfWorkService) {}
  ngOnInit(){
      this.piecesOfWorkService.fetchFavorite().subscribe(async (res: any) => {
       this.favoritePiecesOfWork = res
      });
  }
}
