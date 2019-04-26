import { Component } from '@angular/core';
import { AppModel } from './app.model';
import { AppController } from './app.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppModel, AppController]
})
export class AppComponent {
  constructor(public appModel: AppModel,
              private _ctrlr: AppController
  ) {}

  // Each scenario function should be a list of "instructions"
  // - All decision making should be moved in to controller functions
  //    - Any dependencies required for controller functions should be passed in
  // - Any data manipulation/preparation should be done using model functions
  onScenario() {
    const randomNumberMsg = this._ctrlr.determineMsg();
    this.appModel.setRandomNumberMsg(randomNumberMsg);
  }
}
