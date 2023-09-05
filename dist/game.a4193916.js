function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},n=r.parcelRequire1811;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},r.parcelRequire1811=n),n.register("27Lyk",function(t,r){e(t.exports,"register",()=>i,e=>i=e),e(t.exports,"resolve",()=>s,e=>s=e);var i,s,n={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},s=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("27Lyk").register(JSON.parse('{"jafTj":"game.a4193916.js","fwfJW":"counter-red-large.1b4f990d.svg","cx2Hk":"counter-yellow-large.93af5fd3.svg","934QX":"counter-red-small.ae91ef0e.svg","4dB29":"counter-yellow-small.a6641bf4.svg","gUdph":"board-layer-white-large.ecccfb19.svg","9ppCi":"board-layer-white-small.a9fe7f83.svg","1mcSd":"turn-background-red.e290ee2b.svg","6bKVC":"turn-background-yellow.06d012d8.svg","gsDR2":"marker-red.a1d62ded.svg","azkAt":"marker-yellow.e5fb14af.svg","2w5Dh":"rules.b0ba6b5e.js"}')),n("ic7rk"),n("9NZOq");const a=new class{constructor(){}// Returns an array of indexes of same
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
this.#t.src=this.boardWhite}get boardWhite(){return"DESKTOP"===this.#r?/*@__PURE__*/t(h):/*@__PURE__*/t(u)}get redCell(){return"DESKTOP"===this.#r?/*@__PURE__*/t(o):/*@__PURE__*/t(c)}get yellowCell(){return"DESKTOP"===this.#r?/*@__PURE__*/t(l):/*@__PURE__*/t(d)}}class m{constructor(e,t){this.player=e,this.coords=t}}const y=new p;var g={};g=new URL(n("27Lyk").resolve("1mcSd"),import.meta.url).toString();var b={};b=new URL(n("27Lyk").resolve("6bKVC"),import.meta.url).toString();var w={};w=new URL(n("27Lyk").resolve("gsDR2"),import.meta.url).toString();var _={};_=new URL(n("27Lyk").resolve("azkAt"),import.meta.url).toString();class v{// At the start of the game, it is player 1's turn
#n=document.querySelector(".board__input");#a=document.querySelector(".current__player--timer");#o=document.querySelector(".current__player--indicator");#l=document.querySelector(".current__player--image");#c=document.querySelector(".current__player");#d=document.querySelector(".drop-indicator");#h=document.querySelector(".backdrop");#u=document.querySelector(".backdrop__bottom");#p=document.querySelector(".score[data-player='1']");#m=document.querySelector(".score[data-player='2']");#y=document.querySelector(".player__winner");#g=document.querySelectorAll(".btn__restart");#b=document.querySelector(".btn__again");// Player state
#w=1;//Timer
#_=30;#v;// Points
#f=0;#S=0;constructor(){this.#g.forEach(e=>e.addEventListener("click",this.#L.bind(this))),this.#b.addEventListener("click",this.#P.bind(this)),// Start game after everything finishes loading.
window.addEventListener("DOMContentLoaded",()=>{this.startGame()})}startGame(){L.init(6,7),// Sets the timer
this.#a.textContent=`${this.#_}S`,// Sets the timer
this.startTimer(),this.#T(),// Display the drop indicator
this.#d.classList.remove("hidden"),// set backdrop color to default
this.#h.classList.remove("yellow"),this.#h.classList.remove("red"),this.#u.classList.remove("yellow"),this.#u.classList.remove("red"),// Sets the player score
this.#p.textContent=this.#f,this.#m.textContent=this.#S,// Adds the move event listener (for top indicator)
this.#n.addEventListener("mousemove",this.#k.bind(this))}startTimer(){this.#v=setInterval(()=>{// Reduce timer
this.#_--,// Updates the DOM timer with the object timer
this.#a.textContent=`${this.#_}S`,-1===this.#_&&(this.stopTimer(),this.switchTurns())},1e3)}stopTimer(){clearInterval(this.#v)}#P(){// Resets the timer to default position
this.#_=30,this.#a.textContent=`${this.#_}S`,this.stopTimer(),// Initializes the game
this.startGame(),// Toggle from the botto win screen to the turn screen
this.#c.classList.remove("hidden"),this.#c.classList.remove("disappear"),this.#y.classList.add("hidden"),this.#y.classList.remove("appear"),// Remove player icon animation
//prettier-ignore
document.querySelector('.player__score[data-player="1"] > .player__icon').classList.remove("iconAnimate"),//prettier-ignore
document.querySelector('.player__score[data-player="2"] > .player__icon').classList.remove("iconAnimate")}// Restart + Reset score
#L(){this.#f=0,this.#S=0,this.#P()}// API purposes
restart(){this.#P()}reset(){this.#L()}switchTurns(){// Switch player turn
this.#w=1===this.#w?2:1,// Restarts the timer
clearInterval(this.#v),this.#_=30,this.#a.textContent=`${this.#_}S`,this.startTimer(),// Display the current player
this.#T()}addPointToPlayer(e){1===e?this.#f++:this.#S++,// Sets the player score
this.#p.textContent=this.#f,this.#m.textContent=this.#S}// Switch the turn indicator to current player
#T(){// Change text
this.#o.textContent=`PLAYER ${this.#w}'S TURN`,this.#o.style.color=1===this.#w?"var(--clr-white)":"var(--clr-black)",this.#a.style.color=1===this.#w?"var(--clr-white)":"var(--clr-black)",// Change image
this.#l.src=1===this.#w?/*@__PURE__*/t(g):/*@__PURE__*/t(b),this.#d.src=1===this.#w?/*@__PURE__*/t(w):/*@__PURE__*/t(_)}#k(e){let t=e.target.closest(".cell__hidden");if(!t)return;let r=t.dataset.coords.split(",")[1];this.#d.style.setProperty("--x",r)}displayWinScreen(e="tie"){if(// switch from turn display to win display
this.#c.classList.add("hidden"),this.#y.classList.remove("hidden"),"tie"===e){this.#y.querySelector("p").textContent="IT'S A",this.#y.querySelector("h2").textContent="DRAW";return}// Change the players name
this.#y.querySelector("p").textContent=`PLAYER ${e}`,this.#h.classList.add(1===e?"red":"yellow"),this.#u.classList.add(1===e?"red":"yellow");// Animate Player Icon Bouncing
let t=document.querySelector(`.player__score[data-player="${e}"] > .player__icon`);t.classList.add("iconAnimate")}get player(){return this.#w}}const f=new v;class S{#C=document.querySelector(".board__content");#E=document.querySelector(".board__input");#d=document.querySelector(".drop-indicator");gameboard;// Used to stop inputs from happening whenever there is an animation.
#q=!0;constructor(){// this.init(6, 7);
// Event listener that registers input
this.#E.addEventListener("click",this.#R.bind(this));// //////// DEV CODE ///////////////
// this.dropCell(3, 1, 2);
////////////////////////////////////
}// Initialize the board.
// Note that height and width SHOULD NOT BE CHANGED.
async init(e,t){await this.#H(),// Initialize empty gameboard
this.gameboard=[...Array(e)].map(e=>Array(t).fill(" "));// Automatically div elements that can be clicked.
for(let r=0;r<e;r++)for(let e=0;e<t;e++){let t=`
        <div class="cell__hidden" data-coords="${r},${e}"></div>
        `;this.#E.insertAdjacentHTML("beforeend",t)}// Enables cell input
this.#q=!0}#H(){return new Promise(async e=>{this.#E.innerHTML="",[...this.#C.children].forEach(e=>{e.style.opacity="0"}),await a.wait(.25),this.#C.innerHTML="",e()})}////////////////////////////////////
// ONLY FOR DEV PURPOSES
get #A(){return this.gameboard.length}get #M(){return this.gameboard[0].length}#O(e,t){return this.gameboard[e]}#x(e,t){return[...Array(this.#A)].map((e,r)=>this.gameboard[r][t])}// Diagonal right is "\" (Down + Right)
#I(e,t){let r=[this.gameboard[e][t]],i=e,s=t;// Iterate until topleft -> input (unshift) into array
for(;s>0&&i>0;)i--,s--,r.unshift(this.gameboard[i][s]);// Iterate until bottomright ->  input (push) into array
for(// Resets the position variables
i=e,s=t;s<this.#M-1&&i<this.#A-1;)i++,s++,r.push(this.gameboard[i][s]);return r}// Diagonal left is "/" (Down + Left)
#W(e,t){let r=[this.gameboard[e][t]],i=e,s=t;// Iterate until top right
for(;s<this.#M-1&&i>0;)i--,s++,r.unshift(this.gameboard[i][s]);// Iterate until bottom left
for(// Resets the position variables
i=e,s=t;s>0&&i<this.#A-1;)i++,s--,r.push(this.gameboard[i][s]);return r}////////////////////////////////////
// NOTE : New Cells will always fill the bottom of the column first
async dropCell(e,t,r){this.#q=!1;// The i >= -1 is so that the loop will go from the height -> -1
// If it ever hits -1 it means that there are no longer any available space on the column
// Checks for the highest available spot on the column
for(let r=this.#A-1;r>=-1;r--){// Checks if the board is already filled to the top
if(-1===r){this.#q=!0;return}// If current el on column is empty the continue
if(" "===this.gameboard[r][t]){// If current el IS NOT empty then set it to the y position
e=r;break}}// Insert the player input into the object array
this.gameboard[e][t]=new m(r,[e,t]),// Waits for cell render animation to finish
await this.#D(e,t,r);// Checks if the recent move created a winning position
// 0 -> Player // 1 -> Winning Cell Coords
let i=this.#$([e,t]);i?this.#F(i):(// Re-enable input
this.#q=!0,f.switchTurns())}async #D(e,t,r){return new Promise(i=>{let s=1===r?y.redCell:y.yellowCell,n=`
      <div class="cell" data-coords="${e},${t}" data-x="${t}", data-y="${e}" data-player="${r}">
        <img src=${s} alt="cell"/>
      </div>
      `;this.#C.insertAdjacentHTML("afterbegin",n);let o=document.querySelector(`[data-coords="${e},${t}"]`);o.style.setProperty("--x",t),o.style.setProperty("--y",e),o.style.setProperty("--fall-time",`${a.calcFallTime(e)}s`),o.addEventListener("animationend",i)})}#R(e){let t=e.target.closest(".cell__hidden");if(!t||!this.#q)return;let[r,i]=t.dataset.coords.split(",").map(e=>Number(e));this.dropCell(r,i,f.player)}// ////////////////////////////////
//prettier-ignore
#$(e){let[t,r]=e,i=a.containsWinningPosition(this.#O(t,r))||a.containsWinningPosition(this.#x(t,r))||a.containsWinningPosition(this.#I(t,r))||a.containsWinningPosition(this.#W(t,r))||!1,s=this.#U();if(!s)return i}async #F(e="tie"){// If the game results in a draw :
if("tie"===e){f.displayWinScreen();return}// creates an array with the only the coordinates of the winning cells.
let t=e.map(e=>e[1]);// Hide dropIndicator
this.#d.classList.add("hidden"),// Mark & animate the winning cells
await this.#G(t),await a.wait(.2);// Add point
let r=e[0][0];f.addPointToPlayer(r),f.stopTimer(),f.displayWinScreen(r)}#G(e){return new Promise(t=>{let r=e.length-1,i=setInterval(()=>{// get data
let[s,n]=e[r],a=document.querySelector(`[data-coords="${s},${n}"]`);// add class
a.classList.add("cell__win"),--r>=0||(clearInterval(i),t())},200)})}#U(){if(this.gameboard.every(e=>e.every(e=>" "!==e)))return this.#F(),!0}// USED BY CPU AI (get col, row, diag, in 1 function)
pulse(e,t){return{row:this.#O(e,t),col:this.#x(e,t),diagonalRight:this.diagonalRight(e,t),digonalLeft:this.#W(e,t)}}printGame(e){let t=e.map((e,t)=>e.map((e,r)=>" "===e?" ":new m(+e,[t,r])));t.forEach(e=>{e.forEach(e=>{if(" "===e)return;let{player:t,coords:r}=e,[i,s]=r;this.dropCell(i,s,t)})})}get height(){return this.#A}get width(){return this.#M}}const L=new S;class P{#B=document.querySelector(".btn__continue");#V=document.querySelector(".btn__restart");#j=document.querySelector(".btn__menu");#d=document.querySelector(".drop-indicator");#K=document.querySelector(".pause");constructor(){this.#j.addEventListener("click",this.togglePauseMenu.bind(this)),this.#K.addEventListener("click",this.closePauseMenu.bind(this)),this.#B.addEventListener("click",this.togglePauseMenu.bind(this)),this.#V.addEventListener("click",this.restartGame.bind(this))}togglePauseMenu(){this.#K.classList.contains("pause-game")?f.startTimer():f.stopTimer(),this.#K.classList.toggle("pause-game"),this.#d.classList.toggle("oscilates")}closePauseMenu(e){e.target.classList.contains("pause")&&this.togglePauseMenu()}restartGame(){f.reset(),this.togglePauseMenu()}}new P;// import "./ai.js";
// if (module.hot) module.hot.accept();
/*
TODO :
*///# sourceMappingURL=game.a4193916.js.map

//# sourceMappingURL=game.a4193916.js.map
