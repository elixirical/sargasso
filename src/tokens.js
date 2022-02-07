export const Tokens = [
  1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7,
];
export class PlayerTokens {
  constructor() {
    this.list = [false, false, false, false, false, false, false];
  }
  flipToken(n) {
    this.list[n - 1] = !this.list[n - 1];
  }
}
//export function
