import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-instant',
  templateUrl: './details-instant.page.html',
  styleUrls: ['./details-instant.page.scss'],
})
export class DetailsInstantPage implements OnInit {

  item;
 // itemId:number;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) { 
    const id =  this.route.snapshot.paramMap.get('id')!;
    this.item=this.photoService.getItemById(+id); // récuperation de l'objet par id
    //this.itemId= this.route.snapshot.params["itemId"]
    //this.item =this.photoService.getItemById(this.itemId)
  }

  ngOnInit() {
  }

}
