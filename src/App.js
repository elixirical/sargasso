import { Client } from 'boardgame.io/react';
import { Sargasso } from './Game';
import { GameBoard } from './Table.js'
import { Local } from 'boardgame.io/multiplayer'

const SargassoClient = Client({
  game: Sargasso,
  board: GameBoard,
  multiplayer: Local(),
});

const App = () => (
  <div>
    <SargassoClient playerID="0" />
    <SargassoClient playerID="1" />
  </div>
);

export default App;
