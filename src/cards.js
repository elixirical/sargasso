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

/*
class TheBeast extends Arcana {
  checker(x,y) { 
    return ((x == y-1) || (x == y+1));
  }
}

const theBeast = new TheBeast() */

/*
const fade147 = new Fade("1-4-7?","Before making a prediction, the group may"+
                         " discard this to ask \"Is your fate 1, 4, or 7?", 'group')
const fadeDiscardLower = new Fade("Discard Lower","After playing their fate,"+
                         "the active player may discard this to discard one "+
                         "visible fate that is lower than their remaining fate", 'active')
const fadeTwice = new Fade("Twice","Before making a prediction, the group may"+
                         " discard this to make one extra prediction this turn")
*/



var TheBeast = {
  name: "thebeast",
  moons: 1,
  fade: "twice"
}
var TheBelltower = {
  name: "thebelltower",
  moons: 2,
  fade: "discardlower"
}
var TheBlindMan = {
  name: "theblindman",
  moons: 1,
  fade: "147"
}
var TheChalice = {
  name: "thechalice",
  moons: 2,
  fade: "147"
}
var Dawn = {
  name: "dawn",
  moons: 3,
  fade: "higherthan"
}
var TheDeep = {
  name: "thedeep",
  moons: 3,
  fade: "higherthan"
}
var TheEngine = {
  name: "theengine",
  moons: 3,
  fade: "567"
}
var TheHuntress = {
  name: "thehuntress",
  moons: 1,
  fade: "twice"
}
var TheJudge = {
  name: "thejudge",
  moons: 3,
  fade: "345"
}
var TheKey = {
  name: "thekey",
  moons: 3,
  fade: "old"
}
var Leviathan = {
  name: "leviathan",
  moons: 4,
  fade: "discardlower"
}
var TheLord = {
  name: "thelord",
  moons: 3,
  fade: "567"
}
var Midnight = {
  name: "themidnight",
  moons: 3,
  fade: "higherthan"
}
var TheMirror = {
  name: "themirror",
  moons: 1,
  fade: "twice"
}
var TheNoble = {
  name: "thenoble",
  moons: 3,
  fade: "345"
}
var TheProphet = {
  name: "theprophet",
  moons: 2,
  fade: "cycle"
}
var TheRider = {
  name: "therider",
  moons: 2,
  fade: "cycle"
}
var TheServant = {
  name: "theservant",
  moons: 2,
  fade: "123"
}
var TheShore = {
  name: "theshore",
  moons: 4,
  fade: "discardlower"
}
var TheStranger = {
  name: "thestranger",
  moons: 3,
  fade: "123"
}

export const Cards = [TheBeast,TheBelltower,TheBlindMan,TheChalice,Dawn,TheDeep,
                      TheEngine,TheHuntress,TheJudge,TheKey,Leviathan,TheLord,
                      Midnight,TheMirror,TheNoble,TheProphet,TheRider,TheServant,
                      TheShore,TheStranger];