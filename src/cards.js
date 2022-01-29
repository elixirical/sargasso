class Arcana {
  constructor(name, text, fatesPlayable, moons, fade) {
    this.name = name;
    this.text = text;
    this.fatesPlayable = fatesPlayable;
    this.moons = moons;
    this.fade = fade;
  }
}

class Fade {
  constructor(fadeName,text, target, move) {
    this.name = fadeName;
    this.text = text;
    this.target = target; //group or active player?
  }
}

const fade147 = new Fade("1-4-7?","Before making a prediction, the group may"+
                         " discard this to ask \"Is your fate 1, 4, or 7?", 'group')
const fadeDiscardLower = new Fade("Discard Lower","After playing their fate,"+
                         "the active player may discard this to discard one "+
                         "visible fate that is lower than their remaining fate", 'active')
const fadeTwice = new Fade("Twice","Before making a prediction, the group may"+
                         " discard this to make one extra prediction this turn")


export const Cards = ["The Beast","The Belltower","The Blind Man","The Chalice",
                      "Dawn","The Deep",7,8,9,10,11,12,13,14,15,16,17,18,19,20];
