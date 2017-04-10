import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../services/source-link-service.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.less']
})
export class TemplateComponent implements OnInit {

  value = 'Hello World';

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/template');
  }

  ngOnInit() {
  }


  change() {
    this.value = this.value + ' - new';
  }

  key:string;

  onEnter(){
    this.key="enter";
  }

  onAltDown(){
    this.key="alt+runter";
  }
}
