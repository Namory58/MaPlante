import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-care-scale',
  imports: [],
  templateUrl: './care-scale.component.html',
  styleUrl: './care-scale.component.scss'
})
export class CareScaleComponent {

  @Input() type!: 'water' | 'light';
  @Input() value: number = 1;

  rang: number[] = [1, 2, 3];

}
