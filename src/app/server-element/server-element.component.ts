import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ServerModel } from '../models/server-model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  @Output() serverCreated = new EventEmitter<ServerModel>();
  @Output() bpCreated = new EventEmitter<ServerModel>();
  
  newServerName = '';
  newServerContent = '';

  @ViewChild('serverContent') serverContent: ElementRef = new ElementRef<any>(null);
  
  onAddServer(serverName: HTMLInputElement) {
    console.log(serverName.value);
    let serverModel = new ServerModel();
    serverModel.name = serverName.value;
    serverModel.content = this.serverContent.nativeElement.value;
    serverModel.type = 'server';
    this.serverCreated.emit(serverModel);    
  }

  onAddBlueprint() {
    let serverModel = new ServerModel();
    serverModel.content = this.serverContent.nativeElement.value;
    serverModel.name = this.newServerName;
    serverModel.type = 'blueprint';
    this.bpCreated.emit(serverModel);
  }
}
