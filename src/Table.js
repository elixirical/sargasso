import React from "react";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export function GameBoard ({ctx, G, moves}) {
  if (G.doom == -1){
    return([
      SetDoomScreen({ctx, G, moves}),
      PlayersPanel({ctx, G, moves}),
      BottomPanel({ctx, G, moves})
    ]);
  } else return([
      MainPanel({ctx, G, moves}),
      PlayersPanel({ctx, G, moves}),
      BottomPanel({ctx, G, moves})
  ]);
}

function MainPanel ({ctx, G, moves}) {
  let body = [];

  let cells = [];
  for (let n = 0; n <=3; n++) {
    cells.push(<td>{G.board[n].name}</td>);
  }
  body.push(<tr>{cells}</tr>)

  return(
    <div class="left">
      <table id="board">
        <tbody>{body}</tbody>
      </table>
    </div>
  );
}

function PlayersPanel ({ctx, G, moves}) {
  return(<div class="right">test</div>);
}

function BottomPanel ({ctx, G, moves}) {
  return(<div class="bottom">1 2 3 4 5 6 7</div>);
}

function SetDoomScreen ({ctx, G, moves}) {

  const setDoom = (n) => moves.SetDoom(n);

  return(
    <div class="left">
      <div class="DoomSetContainer">
        Choose your initial Doom...<br></br>
        <ButtonGroup>
          <Button onClick={() => setDoom(0)} variant="info">0</Button>
          <Button onClick={() => setDoom(2)} variant="info">II</Button>
          <Button onClick={() => setDoom(4)} variant="info">IV</Button>
          <Button onClick={() => setDoom(6)} variant="info">VI</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

class CardImage extends React.Component {
  render() {
    return(
      <img src={require('./images/'+this.props.value+".png")}/>
    )
  }
}

// Doom_clock deck                        |   Player 1 counters
// card1      card2     card3     card4   |   Player 2 counters
//                                        |   Player 3 counters
// fate1....->                            |   Player 4 counters
//                                        |
//________________________________________|____________________
//
// your tokens
// your counters
