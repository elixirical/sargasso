//import { INVALID_MOVE } from 'boardgame.io/core';

const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const tokens = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]

export const Sargasso = {
    setup: G => ({
        deck: cards,
        tokenPile: tokens,
        doom: -1,
        score: 0,
        board: [],
        fades: [],
    }),

    //turn: {

    //},

    moves: {
      SetDoom: (G, ctx, n) => {
          G.doom = n;
      },
    },

    phases: {
        setup: {
            start: true,
            onBegin: (G, ctx) => {
                G.deck = ctx.random.Shuffle(G.deck);
                G.tokenPile = ctx.random.Shuffle(G.tokenPile);
                for (let n = 0; n <=3; n++) {
                    G.board.push(G.deck.pop())
                }
            },
            endIf: G => (G.doom >= 0),
        },
    },
}
