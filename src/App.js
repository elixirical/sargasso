import { Client } from 'boardgame.io/react';
import { Sargasso } from './Game';
import { GameBoard } from './Table.js'

const App = Client({
  game: Sargasso,
  board: GameBoard,
});

export default App;
