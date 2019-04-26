export class AppController {
  determineMsg() {
    const prefix = 'The random number is: ';
    const postfix = Math.floor(Math.random() * 100);
    return prefix + postfix;
  }
}
