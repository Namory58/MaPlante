import { Component, OnInit, Input } from '@angular/core';
import { PlantItemComponent } from '../plant-item/plant-item.component';
import { PlantItem } from '../modules/plantItem';
import { PlantItemsService } from '../services/plantItems.service';

@Component({
  selector: 'app-home',
  imports: [PlantItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  @Input() plantItems !: PlantItem[];

  constructor(private plantItemsLists: PlantItemsService) { }

  ngOnInit(): void {
    this.plantItems = this.plantItemsLists.getPlantItems();
  }
}
