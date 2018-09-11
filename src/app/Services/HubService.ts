import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Injectable()
export class HubConnectionService {
  private _hubConnection: HubConnection;

  constructor() {
    this.init();
  }

  update() {
    this._hubConnection.invoke('SendToAll'); 
  }
  private init() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/serve')
      .configureLogging(signalR.LogLevel.Information).build();

    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :'));
    this._hubConnection.on('send', () => { });
  }
}
