import {Camera, CameraResultType } from "@capacitor/camera";
import { Plugins } from "@capacitor/core";



export class PhotoService{
    /*	items= [
		{
			id: 1,
			title: "Miami Beach",
			description: "Plage de Miami aux us",
			location: "Floride, US",
			image: "../../assets/images/plage.jpg"
		},

		{
			id: 2,
			title: "Biblioteque",
			description: "Biblioteque minicipale de Blois",
			location: "Blois",
			image: "../../assets/images/biblioteque.jpg"
		},

		{
			id: 3,
			title: "Tour effel",
			description: "Photo panoramique de la tour effel",
			location: "Paris",
			image: "../../assets/images/paris.jpg"
		},

	] */

	public items: Item[]=[];

	public photos: Photo[] =[];

	constructor(){}

	addItem(Item:Item){
		this.items.push(Item);
		return this.items;
	}

	getItems(){
     return this.items;
	}
	getItemById(id:number){
		return this.items.find(x=>x.id===id);
	}

	public takePicture = async () => {
		const image = await Camera.getPhoto({
		  quality: 90,
		  allowEditing: true,
		  resultType: CameraResultType.Uri
		});
	  
		this.photos.unshift(
			{
			filepath: "img-"+ Date.now(),
	        webviewPath: image.webPath! 

		})
		
	  		
	  };

	 
	  
}

export interface Photo{
	filepath:string;
	webviewPath:string;
	
}

export interface Item{
	id:number;
	title:string;
	description:string;
	location:string;
	image: Photo[]
}