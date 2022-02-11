import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PiecesOfWorkService } from 'src/app/services/api/piecesOfWork/pieces-of-work.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
//Interfaces
import {PiecesOfWork} from '../../interfaces/interfaces'
@Component({
  selector: 'app-pieces-of-work-list',
  templateUrl: './pieces-of-work-list.component.html',
  styleUrls: ['./pieces-of-work-list.component.scss'],
})

export class PiecesOfWorkListComponent implements OnInit {
  @Input() piecesOfWork:Array<PiecesOfWork>
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @Input() showFavoriteButton: any;
  constructor(private piecesOfWorkService:PiecesOfWorkService,private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.piecesOfWork.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
