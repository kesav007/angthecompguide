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

  onAddServer() {
    this.servercreated = true;
    this.outputserver = 'server was created ' + this.serverName;
  }
  onInput(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
