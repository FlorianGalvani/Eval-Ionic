import { Component, OnInit } from '@angular/core';
import { PiecesOfWorkService } from 'src/app/services/api/piecesOfWork/pieces-of-work.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PiecesOfWork } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  piecesOfWork:Array<PiecesOfWork>;
  constructor(private piecesOfWorkService:PiecesOfWorkService,private route: ActivatedRoute) {}
  ngOnInit(){
    this.route.params.subscribe(() => {
      this.piecesOfWorkService.fetchAll().subscribe(async (res: any) => {
        this.piecesOfWork = res;
      });
    });
  }

}
