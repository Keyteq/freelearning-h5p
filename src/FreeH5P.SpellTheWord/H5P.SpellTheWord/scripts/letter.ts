class Letter {
  letter: string;
  truePosition: number;
  randomPosition: number;
  constructor(letter: string, truePosition?: number) {
    this.letter = letter;
    this.truePosition = truePosition;
  }
}

export default Letter;
