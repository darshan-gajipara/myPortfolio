import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private breakepointObserver:BreakpointObserver){}

  ngOnInit():void{

  }

}
