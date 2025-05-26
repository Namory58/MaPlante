import { Component, Input, OnInit } from '@angular/core';
import { PlantItem } from '../modules/plantItem';
 import { CareScaleComponent } from '../care-scale/care-scale.component';

@Component({
  selector: 'app-plant-item',
  imports: [CareScaleComponent],
  templateUrl: './plant-item.component.html',
  styleUrl: './plant-item.component.scss'
})
export class PlantItemComponent implements OnInit {

  @Input() listsplantItems !: PlantItem; 

  ngOnInit(): void {
    console.log(this.listsplantItems);
  }
}
