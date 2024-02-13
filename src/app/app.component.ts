import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angthecompguide';
  serverName: string = '';
  outputserver: string = 'No server was created';
  servercreated: boolean = false;
  selectedTab: string = 'receipes';
  serverElements: any[] = [];

  onAddServer() {
    this.servercreated = true;
    this.outputserver = 'server was created ' + this.serverName;
  }
  onInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onServerAdded(event: Event) {
    console.log(event);
  }

  onBlueprintAdded(event: string) {
    console.log(event);
  }

  onTabSelection(event: string){
    console.log(event);
    this.selectedTab = event;
  }
}
