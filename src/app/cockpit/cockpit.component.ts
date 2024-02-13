import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ServerModel } from '../models/server-model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Input() serverElm: ServerModel = new ServerModel();

  constructor(){
    this.serverElm = new ServerModel();
    this.serverElm.name = "First Server";
    this.serverElm.type = "server";
    this.serverElm.content = "server content";
  }
}
