//import { INVALID_MOVE } from 'boardgame.io/core';
import { Cards } from "./cards";
import { Tokens, PlayerTokens } from "./tokens";

//const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//const tokens = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]

export const Sargasso = {
  setup: (G) => ({
    deck: Cards,
    tokenPile: Tokens,
    doom: -1,
    score: 0,
    board: [],
    fades: [],
  }),

  minPlayers: 1,
  maxPlayers: 5,

  //turn: {

  //},

  moves: {
    SetDoom: (G, ctx, n) => {
      G.doom = n;
    },
    drawFate: (G, ctx) => {
        
    },
    playFate: (G, ctx) => {},
    predict: (G, ctx) => {},
    fadeArcana: (G, ctx) => {},
    flipCounter: (G, ctx) => {},
  },

  phases: {
    setup: {
      start: true,
      onBegin: (G, ctx) => {
        G.deck = ctx.random.Shuffle(G.deck);
        G.tokenPile = ctx.random.Shuffle(G.tokenPile);
        for (let n = 0; n <= 3; n++) {
          G.board.push(G.deck.pop());
        }
      },
      endIf: (G) => G.doom >= 0 /*, { next: '0' }*/,
      //next: '0',
    },
  },
};
