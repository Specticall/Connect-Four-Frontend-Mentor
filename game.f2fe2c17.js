function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},n=r.parcelRequire1811;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},r.parcelRequire1811=n),n.register("27Lyk",function(t,r){e(t.exports,"register",()=>i,e=>i=e),e(t.exports,"resolve",()=>s,e=>s=e);var i,s,n={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},s=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("27Lyk").register(JSON.parse('{"jafTj":"game.f2fe2c17.js","fwfJW":"counter-red-large.1b4f990d.svg","cx2Hk":"counter-yellow-large.93af5fd3.svg","934QX":"counter-red-small.ae91ef0e.svg","4dB29":"counter-yellow-small.a6641bf4.svg","gUdph":"board-layer-white-large.ecccfb19.svg","9ppCi":"board-layer-white-small.a9fe7f83.svg","1mcSd":"turn-background-red.e290ee2b.svg","6bKVC":"turn-background-yellow.06d012d8.svg","gsDR2":"marker-red.a1d62ded.svg","azkAt":"marker-yellow.e5fb14af.svg","bbjDE":"cpu.d579db6b.svg","kjfca":"player-two.2d875cdf.svg","c9sNp":"rules.2546a2af.js"}')),n("ic7rk"),n("9NZOq");const a=new class{constructor(){}// Returns an array of indexes of same
// and consecutive elements (also the string);
// If not found return false
// Uses sliding window technique
containsWinningPosition(e,t=4){// Cleans the array
// const cleanedArr = arr.filter(
//   (element) => element !== " "
// );
let r=[];for(let i=0;i<e.length&&r.length!==t;i++){if(" "===e[i]){r=[];continue}if(0===i||e[i-1].player===e[i].player){r.push([e[i].player,e[i].coords]);continue}(r=[]).push([e[i].player,e[i].coords])}return r.length===t&&r}calcFallTime(e){return Math.sqrt(2*e)/7}wait(e){return new Promise(t=>{setTimeout(t,1e3*e)})}};var o={};o=new URL(n("27Lyk").resolve("fwfJW"),import.meta.url).toString();var l={};l=new URL(n("27Lyk").resolve("cx2Hk"),import.meta.url).toString();var c={};c=new URL(n("27Lyk").resolve("934QX"),import.meta.url).toString();var d={};d=new URL(n("27Lyk").resolve("4dB29"),import.meta.url).toString();var h={};h=new URL(n("27Lyk").resolve("gUdph"),import.meta.url).toString();var u={};u=new URL(n("27Lyk").resolve("9ppCi"),import.meta.url).toString();// Handles the images (changes on certain viewports)
class p{#e=document.querySelector(".board__content");#t=document.querySelector(".board__white");#r;constructor(){this.#i(),// Listen to any change in viewport
window.addEventListener("resize",this.#i.bind(this))}#i(){let e=window.innerWidth<500?"MOBILE":"DESKTOP";this.#r!==e&&(// Sets the viewport on the object itself
this.#r=e,// Change the cell image based on the viewport size
this.#s())}#s(){// Change Cells
[...this.#e.children].forEach(e=>{let t=e.dataset.player;e.children[0].src="1"===t?this.redCell:this.yellowCell}),// Change board
this.#t.src=this.boardWhite}get boardWhite(){return"DESKTOP"===this.#r?/*@__PURE__*/t(h):/*@__PURE__*/t(u)}get redCell(){return"DESKTOP"===this.#r?/*@__PURE__*/t(o):/*@__PURE__*/t(c)}get yellowCell(){return"DESKTOP"===this.#r?/*@__PURE__*/t(l):/*@__PURE__*/t(d)}}class m{constructor(e,t){this.player=e,this.coords=t}}const y=new p,g=new // const board = [
//   [" ", " ", " ", " "," "," ", " "],
//   [" ", "2", " ", "1","1"," ", " "],
//   [" ", "1", "1", "2","1"," ", " "],
//   [" ", "2", "2", "1","1"," ", " "],
//   ["2", "1", "1", "2","2","2", "1"],
//   ["2", "2", "1", "2","2","2", "1"],
// ]
// const board = [
//   ["1", "2", "1", "2","1","2", "1"],
//   ["2", "1", "2", "1","2","1", "2"],
//   ["1", "2", "1", "2","1","2", "1"],
//   ["2", "1", "2", "1","2","1", "2"],
//   ["1", "2", "1", "2","1","2", "1"],
//   ["2", "1", "2", "1","2","1", "2"],
// ]
// BUG : PAS LAGI WIN ANIMATION PENCET RESTART JADI RUSAK.
// AI IS PLAYER 2 <=============
class{constructor(){window.addEventListener("DOMContentLoaded",()=>{// setTimeout(() => {
//   gameboard.printGame(board);
//   console.log(this.getBestMove(gameboard.gameboard));
// }, 300);
});//prettier-ignore
// console.log(
//   this.#offenseTwoAdjacent5([" ", " ", 2, 1, "@", " ", 2])
// );
}// ENTRY POINT // API :
getBestMove(e){let t=this.#n(this.#a(e),e),r=[];// const movesPoints = [
//   { coords: [1, 2], score: 0 },
//   { coords: [2, 2], score: 6 },
//   { coords: [3, 2], score: 5 },
//   { coords: [4, 2], score: 27 },
//   { coords: [5, 2], score: 27 },
//   { coords: [6, 2], score: 27 },
//   { coords: [7, 2], score: 0 },
// ];
t.sort((e,t)=>t.score-e.score);for(let e=0;e<t.length&&(t[e-1]&&t[e-1].score===t[e].score||0===e);e++)r.push(t[e]);return r[Math.trunc(Math.random()*(r.length-1-0+1)+0)]}#a(e){let t={};for(let r=e.length-1;r>=0;r--)for(let i=0;i<e[0].length;i++)" "!==e[r][i]||t[i]||(t[i]=[r,i]);return t}#n(e,t){let r=[];return Object.values(e).forEach(e=>{let[i,s]=e,n=this.pulse(i,s,t),a=n.reduce((e,t)=>e+=(this.#o(t)||this.#l(t)||this.#c(t))+(this.#d(t)||this.#h(t)||this.#u(t)),3===s?5:0);// Initial score is 5 if it's from the center board.
// console.log([y, x], score);
// console.log("===========");
r.push({coords:e,score:a})}),r}// Most of these algos uses two pointer / sliding window technique.
// Defensive move (50 points) -> O, O, O, X
// returns 50 if valid, 0 if not.
#o(e){let t=e.indexOf("@"),r,i,s=1;for(r=i=t;e[i]&&e[++i]&&" "!==e[i]&&2!==e[i];)// console.log(lines[r]);
s++;for(;e[r]&&e[--r]&&" "!==e[r]&&2!==e[r];)// console.log(lines[l]);
s++;return 4===s?50:0}// Win move (infinity points)
#d(e){let t=e.indexOf("@"),r,i,s=1;for(r=i=t;e[i]&&e[++i]&&" "!==e[i]&&1!==e[i];)// console.log(lines[r]);
s++;for(;e[r]&&e[--r]&&" "!==e[r]&&1!==e[r];)// console.log(lines[l]);
s++;return 4===s?1/0:0}//prettier-ignore
// Three adjacent (25 points) -> X, X, X, _
#h(e){let t=e.indexOf("@"),r,i,s=1;for(r=i=t;e[i]&&e[++i]&&" "!==e[i]&&1!==e[i]&&!(s>3);)// console.log(lines[r]);
s++;for(;e[r]&&s<3&&e[--r]&&" "!==e[r]&&1!==e[r]&&!(s>3);)// console.log(lines[l]);
s++;return 3===s?25:0}//prettier-ignore
#l(e){let t=e.indexOf("@"),r,i,s=1;for(r=i=t;e[i]&&e[++i]&&" "!==e[i]&&2!==e[i]&&!(s>3);)// console.log(lines[r]);
s++;for(;e[r]&&s<3&&e[--r]&&" "!==e[r]&&2!==e[r]&&!(s>3);)// console.log(lines[l]);
s++;return 3===s?25:0}// offense two adjacent (X,X)
#u(e){let t=e.indexOf("@");return 2===e[t+1]||2===e[t-1]?5:0}// defense two adjacent (X, O)
#c(e){let t=e.indexOf("@");return 1===e[t+1]||1===e[t-1]?2:0}// Two in  -> 5 points e.g. -> X,X,_,_ // X,_,X,_ // X,_,_,X
#p(e){}// (get col, row, diags, in 1 function)
pulse(e,t,r){// get row
let i=r[e].map((e,r,i)=>r===t?"@":e.player||" "),s=[...Array(r.length)].map((i,s)=>s===e?"@":r[s][t].player||" "),n=[""].reduce(i=>{let s=e,n=t;// Iterate until topleft -> input (unshift) into array
for(;n>0&&s>0;)s--,n--,i.unshift(r[s][n].player||" ");// Iterate until bottomright ->  input (push) into array
for(// Resets the position variables
s=e,n=t;n<r[0].length-1&&s<r.length-1;)s++,n++,i.push(r[s][n].player||" ");return i},["@"]),a=[""].reduce(i=>{let s=e,n=t;// Iterate until top right
for(;n<r[0].length-1&&s>0;)s--,n++,i.unshift(r[s][n].player||" ");// Iterate until bottom left
for(// Resets the position variables
s=e,n=t;n>0&&s<r.length-1;)s++,n--,i.push(r[s][n].player||" ");return i},["@"]);return[i,s,n,a]}};var f={};f=new URL(n("27Lyk").resolve("1mcSd"),import.meta.url).toString();var b={};b=new URL(n("27Lyk").resolve("6bKVC"),import.meta.url).toString();var v={};v=new URL(n("27Lyk").resolve("gsDR2"),import.meta.url).toString();var w={};w=new URL(n("27Lyk").resolve("azkAt"),import.meta.url).toString();var S={};S=new URL(n("27Lyk").resolve("bbjDE"),import.meta.url).toString();var _={};_=new URL(n("27Lyk").resolve("kjfca"),import.meta.url).toString();class L{// At the start of the game, it is player 1's turn
#m=document.querySelector(".board__input");#y=document.querySelector(".current__player--timer");#g=document.querySelector(".current__player--indicator");#f=document.querySelector(".current__player--image");#b=document.querySelector(".current__player");#v=document.querySelector(".drop-indicator");#w=document.querySelector(".backdrop");#S=document.querySelector(".backdrop__bottom");#_=document.querySelector(".score[data-player='1']");#L=document.querySelector(".score[data-player='2']");#P=document.querySelector(".player__winner");#T=document.querySelector(".btn__restart[data-where='nav']");#k=document.querySelector(".btn__again");// Player state
#C=1;//Timer
#E=30;#q;// Points
#R=0;#A=0;// Game type
#x;constructor(){this.#T.addEventListener("click",this.#H.bind(this)),this.#k.addEventListener("click",this.#M.bind(this)),// Start game after everything finishes loading.
window.addEventListener("DOMContentLoaded",()=>{this.loadGameType(),this.startGame()})}loadGameType(){this.#x=sessionStorage.getItem("selectedGame")}startGame(){k.init(6,7),// Sets the timer
this.#y.textContent=`${this.#E}S`,// set current player to 1
this.#C=1,// Sets the timer
this.startTimer(),this.#O(),// Display the drop indicator
this.#v.classList.remove("hidden"),// set backdrop color to default
this.#w.classList.remove("yellow"),this.#w.classList.remove("red"),this.#S.classList.remove("yellow"),this.#S.classList.remove("red"),// Sets the player score
this.#_.textContent=this.#R,this.#L.textContent=this.#A,// Change text & image for the second player in accordance to the selected mode (cpu / pvp)
document.querySelector("[data-player='2']").querySelector("p").textContent="vsCPU"===this.#x?"CPU":"PLAYER 2",document.querySelector("[data-player='2']").querySelector("img").src="vsCPU"===this.#x?/*@__PURE__*/t(S):/*@__PURE__*/t(_),// Adds the move event listener (for top indicator)
this.#m.addEventListener("mousemove",this.#I.bind(this))}startTimer(){this.#q=setInterval(()=>{// Reduce timer
this.#E--,// Updates the DOM timer with the object timer
this.#y.textContent=`${this.#E}S`,-1===this.#E&&(this.stopTimer(),this.switchTurns())},1e3)}stopTimer(){clearInterval(this.#q)}#M(){// Resets the timer to default position
this.stopTimer(),this.#E=30,this.#y.textContent=`${this.#E}S`,// Initializes the game
this.startGame(),// Toggle from the botto win screen to the turn screen
this.#b.classList.remove("hidden"),this.#b.classList.remove("disappear"),this.#P.classList.add("hidden"),this.#P.classList.remove("appear"),// Remove player icon animation
//prettier-ignore
document.querySelector('.player__score[data-player="1"] > .player__icon').classList.remove("iconAnimate"),//prettier-ignore
document.querySelector('.player__score[data-player="2"] > .player__icon').classList.remove("iconAnimate")}// Restart + Reset score
#H(){this.#R=0,this.#A=0,this.#M()}// API purposes
restart(){this.#M()}reset(){this.#H()}switchTurns(){if(// Switch player turn
this.#C=1===this.#C?2:1,// Restarts the timer
clearInterval(this.#q),this.#E=30,this.#y.textContent=`${this.#E}S`,this.startTimer(),// Display the current player
this.#O(),2===this.#C&&"vsCPU"===this.#x){let{coords:e}=g.getBestMove(k.gameboard),[t,r]=e;k.dropCell(t,r,2,!0)}}addPointToPlayer(e){1===e?this.#R++:this.#A++,// Sets the player score
this.#_.textContent=this.#R,this.#L.textContent=this.#A}// Switch the turn indicator to current player
#O(){// Change text
this.#g.textContent=`PLAYER ${this.#C}'S TURN`,this.#g.style.color=1===this.#C?"var(--clr-white)":"var(--clr-black)",this.#y.style.color=1===this.#C?"var(--clr-white)":"var(--clr-black)",// Change image
this.#f.src=1===this.#C?/*@__PURE__*/t(f):/*@__PURE__*/t(b),this.#v.src=1===this.#C?/*@__PURE__*/t(v):/*@__PURE__*/t(w)}#I(e){let t=e.target.closest(".cell__hidden");if(!t)return;let r=t.dataset.coords.split(",")[1];this.#v.style.setProperty("--x",r)}displayWinScreen(e="tie"){if(// switch from turn display to win display
this.#b.classList.add("hidden"),this.#P.classList.remove("hidden"),"tie"===e){this.#P.querySelector("p").textContent="IT'S A",this.#P.querySelector("h2").textContent="DRAW";return}// Change the players name
this.#P.querySelector("p").textContent=`PLAYER ${e}`,this.#w.classList.add(1===e?"red":"yellow"),this.#S.classList.add(1===e?"red":"yellow"),this.#P.querySelector("h2").textContent="WINS";// Animate Player Icon Bouncing
let t=document.querySelector(`.player__score[data-player="${e}"] > .player__icon`);t.classList.add("iconAnimate")}get player(){return this.#C}}const P=new L;class T{#W=document.querySelector(".board__content");#D=document.querySelector(".board__input");#v=document.querySelector(".drop-indicator");gameboard;// Used to stop inputs from happening whenever there is an animation.
#U=!0;constructor(){// this.init(6, 7);
// Event listener that registers input
this.#D.addEventListener("click",this.#$.bind(this));// //////// DEV CODE ///////////////
// this.dropCell(3, 1, 2);
////////////////////////////////////
}// Initialize the board.
// Note that height and width SHOULD NOT BE CHANGED.
async init(e,t){await this.#j(),// Initialize empty gameboard
this.gameboard=[...Array(e)].map(e=>Array(t).fill(" "));// Automatically div elements that can be clicked.
for(let r=0;r<e;r++)for(let e=0;e<t;e++){let t=`
        <div class="cell__hidden" data-coords="${r},${e}"></div>
        `;this.#D.insertAdjacentHTML("beforeend",t)}// Enables cell input
this.#U=!0}#j(){return new Promise(async e=>{this.#D.innerHTML="",[...this.#W.children].forEach(e=>{e.style.opacity="0"}),await a.wait(.25),this.#W.innerHTML="",e()})}////////////////////////////////////
// ONLY FOR DEV PURPOSES
get #F(){return this.gameboard.length}get #G(){return this.gameboard[0].length}#B(e,t){return this.gameboard[e]}#V(e,t){return[...Array(this.#F)].map((e,r)=>this.gameboard[r][t])}// Diagonal right is "\" (Down + Right)
#N(e,t){let r=[this.gameboard[e][t]],i=e,s=t;// Iterate until topleft -> input (unshift) into array
for(;s>0&&i>0;)i--,s--,r.unshift(this.gameboard[i][s]);// Iterate until bottomright ->  input (push) into array
for(// Resets the position variables
i=e,s=t;s<this.#G-1&&i<this.#F-1;)i++,s++,r.push(this.gameboard[i][s]);return r}// Diagonal left is "/" (Down + Left)
#K(e,t){let r=[this.gameboard[e][t]],i=e,s=t;// Iterate until top right
for(;s<this.#G-1&&i>0;)i--,s++,r.unshift(this.gameboard[i][s]);// Iterate until bottom left
for(// Resets the position variables
i=e,s=t;s>0&&i<this.#F-1;)i++,s--,r.push(this.gameboard[i][s]);return r}////////////////////////////////////
// NOTE : New Cells will always fill the bottom of the column first
async dropCell(e,t,r,i=!1){this.#U=!1;// The i >= -1 is so that the loop will go from the height -> -1
// If it ever hits -1 it means that there are no longer any available space on the column
// Checks for the highest available spot on the column
for(let r=this.#F-1;// This breaks the height check operation when we
// are trying to print manually
r>=-1&&!i;r--){// Checks if the board is already filled to the top
if(-1===r){this.#U=!0;return}// If current el on column is empty the continue
if(" "===this.gameboard[r][t]){// If current el IS NOT empty then set it to the y position
e=r;break}}// Insert the player input into the object array
this.gameboard[e][t]=new m(r,[e,t]),// Waits for cell render animation to finish
await this.#z(e,t,r);// Checks if the recent move created a winning position
// 0 -> Player // 1 -> Winning Cell Coords
let s=this.#J([e,t]);s?this.#Y(s):(// Re-enable input
this.#U=!0,P.switchTurns())}async #z(e,t,r){return new Promise(i=>{let s=1===r?y.redCell:y.yellowCell,n=`
      <div class="cell" data-coords="${e},${t}" data-x="${t}", data-y="${e}" data-player="${r}">
        <img src=${s} alt="cell"/>
      </div>
      `;this.#W.insertAdjacentHTML("afterbegin",n);let o=document.querySelector(`[data-coords="${e},${t}"]`);o.style.setProperty("--x",t),o.style.setProperty("--y",e),o.style.setProperty("--fall-time",`${a.calcFallTime(e)}s`),o.addEventListener("animationend",i)})}#$(e){let t=e.target.closest(".cell__hidden");if(!t||!this.#U)return;let[r,i]=t.dataset.coords.split(",").map(e=>Number(e));this.dropCell(r,i,P.player)}// ////////////////////////////////
//prettier-ignore
#J(e){let[t,r]=e,i=a.containsWinningPosition(this.#B(t,r))||a.containsWinningPosition(this.#V(t,r))||a.containsWinningPosition(this.#N(t,r))||a.containsWinningPosition(this.#K(t,r))||!1,s=this.#Q();if(!s)return i}async #Y(e="tie"){// If the game results in a draw :
if("tie"===e){P.displayWinScreen();return}// creates an array with the only the coordinates of the winning cells.
let t=e.map(e=>e[1]);// Hide dropIndicator
this.#v.classList.add("hidden"),// Mark & animate the winning cells
await this.#X(t),await a.wait(.2);// Add point
let r=e[0][0];P.addPointToPlayer(r),P.stopTimer(),P.displayWinScreen(r)}#X(e){return new Promise(t=>{let r=e.length-1,i=setInterval(()=>{// get data
let[s,n]=e[r],a=document.querySelector(`[data-coords="${s},${n}"]`);// add class
a.classList.add("cell__win"),--r>=0||(clearInterval(i),t())},200)})}#Q(){if(this.gameboard.every(e=>e.every(e=>" "!==e)))return this.#Y(),!0}///////////////////// DEV ////////////////////
//(Used for development purposes only)
printGame(e){let t=e.map((e,t)=>e.map((e,r)=>" "===e?" ":new m(+e,[t,r])));t.forEach(e=>{e.forEach(e=>{if(" "===e)return;let{player:t,coords:r}=e,[i,s]=r;this.dropCell(i,s,t,!0)})})}get height(){return this.#F}get width(){return this.#G}}const k=new T;class C{#Z=document.querySelector(".btn__continue");#ee=document.querySelector(".btn__restart[data-where='pause-menu']");#et=document.querySelector(".btn__menu");#v=document.querySelector(".drop-indicator");#er=document.querySelector(".pause");constructor(){this.#et.addEventListener("click",this.togglePauseMenu.bind(this)),this.#er.addEventListener("click",this.closePauseMenu.bind(this)),this.#Z.addEventListener("click",this.togglePauseMenu.bind(this)),this.#ee.addEventListener("click",this.resetGame.bind(this))}togglePauseMenu(){this.#er.classList.contains("pause-game")?P.startTimer():P.stopTimer(),this.#er.classList.toggle("pause-game"),this.#v.classList.toggle("oscilates")}closePauseMenu(e){e.target.classList.contains("pause")&&this.togglePauseMenu()}resetGame(){P.reset(),this.#er.classList.toggle("pause-game"),this.#v.classList.toggle("oscilates")}}new C;// if (module.hot) module.hot.accept();
/*
TODO :
*///# sourceMappingURL=game.f2fe2c17.js.map

//# sourceMappingURL=game.f2fe2c17.js.map
