import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  layout = 'layout-blue';

  layoutMode = 'horizontal';

  wrapperMode = false;

  inputStyle = 'outlined';

  ripple!: boolean;

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.ripple = true;
  }
}
