export interface SomeModel {
  randomNumberMsg: string;
}

export class AppModel {
  model: SomeModel = <SomeModel>{
    randomNumberMsg: ''
  };

  setRandomNumberMsg(msg: string) {
    this.model.randomNumberMsg = msg;
  }
}
