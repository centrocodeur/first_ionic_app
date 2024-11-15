import { AfterViewInit, Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit{

  constructor(private animationCtrl: AnimationController) {}


  ngAfterViewInit(): void {
    const animation= this.animationCtrl.create("loading-animation")
          .addElement(document.querySelector("#animation")!)
          .easing("ease-in-out")
          .duration(1000)
          .direction("alternate")
          .iterations(Infinity)
          .keyframes([
            {offset:0, transform:"scale(1)", opacity:"1", color:"white"},  // propriété de l'animation au départ
            {ffset:0, transform:"scale(1.5)", opacity:"0.5", color:"#69bb7b"} // propriété de l'animation à a fin
          ]);
    animation.play();
  }

}
