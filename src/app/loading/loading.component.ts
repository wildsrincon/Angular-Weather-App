import { Component, OnInit } from '@angular/core';
import { loadingAnimation } from '../animations/loading.animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
  animations: [loadingAnimation()]
})
export class LoadingComponent implements OnInit {

  _elements: string[] = ['#ffe5ec', '#ff80a0', '#ff2e63', '#800020', '#1a0006'];
  elements : string[] = this._elements; 

  constructor() { }

  ngOnInit(): void {
  }

}
