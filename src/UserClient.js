import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export function GameBoard({ ctx, G, moves }) {
  if (G.doom == -1) {
    return [
      SetDoomScreen({ ctx, G, moves }),
      PlayersPanel({ ctx, G, moves }),
      BottomPanel({ ctx, G, moves }),
    ];
  } else
    return [
      MainPanel({ ctx, G, moves }),
      PlayersPanel({ ctx, G, moves }),
      BottomPanel({ ctx, G, moves }),
    ];
}

function MainPanel({ ctx, G, moves }) { // this panel draws the primary game board where the arcana and played fate tokens are 

  var cells = G.board.map((x) => <td key={x.name}>{CardImage(x.name)}</td>);
  cells.unshift(CardImage("clock"))

  return (
    <div key={"mainpanel"} className="left">
      <table id="board">
        <tbody>
          <tr key={"cardsdrawn"}>{cells}</tr>
        </tbody>
      </table>
    </div>
  );
}

function PlayersPanel({ ctx, G, moves }) { // this panel on the right shows the other players in the game and their counters
  return (
    <div key={"playerpanel"} className="right">
      test
    </div>
  );
}

function BottomPanel({ ctx, G, moves }) { // this component draws the bottom panel where ones fates and counters are
  return (
    <div key={"bottompanel"} className="bottom">
      1 2 3 4 5 6 7
    </div>
  );
}

function drawnFates({ ctx, G }) {
  return(
    <>
    </>
  );
}


function SetDoomScreen({ ctx, G, moves }) { // this component draws the initial phase of the game where difficulty (ie. doom) is selected
  const setDoom = (n) => moves.SetDoom(n);

  return (
    <div key={"doomscreen"} className="left">
      <div className="DoomSetContainer">
        Choose your initial Doom...<br></br>
        <ButtonGroup>
          <Button key={"button1"} onClick={() => setDoom(0)} variant="info">
            0
          </Button>
          <Button key={"button2"} onClick={() => setDoom(2)} variant="info">
            II
          </Button>
          <Button key={"button3"} onClick={() => setDoom(4)} variant="info">
            IV
          </Button>
          <Button key={"button4"} onClick={() => setDoom(6)} variant="info">
            VI
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

function CardImage(filename) {
  return(
    <img className="cardpic" src={require("./images/" + filename + ".png")} />
  )
}

// class CardImage extends React.Component {
//   render() {
//     return <img src={require("./images/" + this.props.value + ".png")} />;
//   }
// }

// Doom_clock deck                        |   Player 1 counters
// card1      card2     card3     card4   |   Player 2 counters
//                                        |   Player 3 counters
// fate1....->                            |   Player 4 counters
//                                        |
//________________________________________|____________________
//
// your tokens
// your counters
