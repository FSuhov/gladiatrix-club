import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  girls = [ {name:'Ashley', description: 'Brunette', type: 'defender'} ];


  onAttackerAdded(girlData: {name: string, description: string }) {
    this.girls.push({
      type: 'attacker',
      name: girlData.name,
      description: girlData.description
    });
  }

  onDefenderAdded(girlData: {name: string, description: string }) {
    this.girls.push({
      type: 'defender',
      name: girlData.name,
      description: girlData.description
    });
  }
}
