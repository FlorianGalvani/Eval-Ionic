import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public photoService:PhotoService,private router: Router){}

  navigate(page){
    this.router.navigate([page])
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit() {}

}
