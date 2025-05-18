import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [BannerComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
