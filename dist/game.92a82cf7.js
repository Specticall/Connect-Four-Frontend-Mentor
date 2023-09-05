// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3qXAl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ed820c0592a82cf7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bGbYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "menuPause", ()=>menuPause);
parcelHelpers.export(exports, "menuMain", ()=>menuMain);
var _game = require("./game");
class PauseClass {
    #btnContinue = document.querySelector(".btn__continue");
    #btnRestart = document.querySelector(".btn__restart");
    #btnQuit = document.querySelector(".btn__quit");
    #btnMenu = document.querySelector(".btn__menu");
    #pauseMenu = document.querySelector(".pause");
    constructor(){
        this.#btnMenu.addEventListener("click", this.togglePauseMenu.bind(this));
        this.#pauseMenu.addEventListener("click", this.closePauseMenu.bind(this));
        this.#btnContinue.addEventListener("click", this.togglePauseMenu.bind(this));
        this.#btnRestart.addEventListener("click", this.restartGame.bind(this));
    }
    togglePauseMenu() {
        this.#pauseMenu.classList.contains("pause-game") ? (0, _game.game).startTimer() : (0, _game.game).stopTimer();
        this.#pauseMenu.classList.toggle("pause-game");
    }
    closePauseMenu(e) {
        if (!e.target.classList.contains("pause")) return;
        this.togglePauseMenu();
    }
    restartGame() {
        (0, _game.game).reset();
        this.togglePauseMenu();
    }
}
class MainMenuClass {
    constructor(){}
}
const menuPause = new PauseClass();
const menuMain = new MainMenuClass();

},{"./game":"cMznl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMznl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "game", ()=>game);
var _gameboard = require("./gameboard");
var _turnBackgroundRedSvg = require("../images/turn-background-red.svg");
var _turnBackgroundRedSvgDefault = parcelHelpers.interopDefault(_turnBackgroundRedSvg);
var _turnBackgroundYellowSvg = require("../images/turn-background-yellow.svg");
var _turnBackgroundYellowSvgDefault = parcelHelpers.interopDefault(_turnBackgroundYellowSvg);
var _markerRedSvg = require("../images/marker-red.svg");
var _markerRedSvgDefault = parcelHelpers.interopDefault(_markerRedSvg);
var _markerYellowSvg = require("../images/marker-yellow.svg");
var _markerYellowSvgDefault = parcelHelpers.interopDefault(_markerYellowSvg);
class GameClass {
    // At the start of the game, it is player 1's turn
    #boardInput = document.querySelector(".board__input");
    #playerTimer = document.querySelector(".current__player--timer");
    #playerTurnText = document.querySelector(".current__player--indicator");
    #playerTurnImage = document.querySelector(".current__player--image");
    #playerTurnContainer = document.querySelector(".current__player");
    #dropIndicator = document.querySelector(".drop-indicator");
    #backdrop = document.querySelector(".backdrop");
    #player1PointDOM = document.querySelector(".score[data-player='1']");
    #player2PointDOM = document.querySelector(".score[data-player='2']");
    #playerWinScreen = document.querySelector(".player__winner");
    #restartBtn = document.querySelector(".btn__restart");
    #playAgainBtn = document.querySelector(".btn__again");
    // Player state
    #currentPlayer = 1;
    //Timer
    #time = 30;
    #timer;
    // Points
    #pointPlayer1 = 0;
    #pointPlayer2 = 0;
    constructor(){
        this.#restartBtn.addEventListener("click", this.#resetGame.bind(this));
        this.#playAgainBtn.addEventListener("click", this.#restartGame.bind(this));
        // Start game after everything finishes loading.
        window.addEventListener("DOMContentLoaded", ()=>{
            this.startGame();
        });
    }
    startGame() {
        // Clears the board
        (0, _gameboard.gameboard).init(6, 7);
        // Sets the timer
        this.#playerTimer.textContent = `${this.#time}S`;
        // Sets the timer
        this.startTimer();
        this.#setTurnIndicator();
        // Display the drop indicator
        this.#dropIndicator.classList.remove("hidden");
        // set backdrop color to default
        this.#backdrop.classList.remove("yellow");
        this.#backdrop.classList.remove("red");
        // Sets the player score
        this.#player1PointDOM.textContent = this.#pointPlayer1;
        this.#player2PointDOM.textContent = this.#pointPlayer2;
        // Adds the move event listener (for top indicator)
        this.#boardInput.addEventListener("mousemove", this.#moveDropIndicator.bind(this));
    }
    startTimer() {
        this.#timer = setInterval(()=>{
            // Reduce timer
            this.#time--;
            // Updates the DOM timer with the object timer
            this.#playerTimer.textContent = `${this.#time}S`;
            // Stop timer if it hits 0
            if (this.#time !== -1) return;
            this.stopTimer();
            this.switchTurns();
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.#timer);
    }
    #restartGame() {
        // Resets the timer to default position
        this.#time = 30;
        this.#playerTimer.textContent = `${this.#time}S`;
        this.stopTimer();
        // Initializes the game
        this.startGame();
        // Toggle from the botto win screen to the turn screen
        this.#playerTurnContainer.classList.remove("hidden");
        this.#playerTurnContainer.classList.remove("disappear");
        this.#playerWinScreen.classList.add("hidden");
        this.#playerWinScreen.classList.remove("appear");
        // Remove player icon animation
        //prettier-ignore
        document.querySelector(`.player__score[data-player="1"] > .player__icon`).classList.remove("iconAnimate");
        //prettier-ignore
        document.querySelector(`.player__score[data-player="2"] > .player__icon`).classList.remove("iconAnimate");
    }
    // Restart + Reset score
    #resetGame() {
        this.#pointPlayer1 = 0;
        this.#pointPlayer2 = 0;
        this.#restartGame();
    }
    // API purposes
    restart() {
        this.#restartGame();
    }
    reset() {
        this.#resetGame();
    }
    switchTurns() {
        // Switch player turn
        this.#currentPlayer = this.#currentPlayer === 1 ? 2 : 1;
        // Restarts the timer
        clearInterval(this.#timer);
        this.#time = 30;
        this.#playerTimer.textContent = `${this.#time}S`;
        this.startTimer();
        // Display the current player
        this.#setTurnIndicator();
    }
    addPointToPlayer(player) {
        player === 1 ? this.#pointPlayer1++ : this.#pointPlayer2++;
        // Sets the player score
        this.#player1PointDOM.textContent = this.#pointPlayer1;
        this.#player2PointDOM.textContent = this.#pointPlayer2;
    }
    #setTurnIndicator() {
        // Change text
        this.#playerTurnText.textContent = `PLAYER ${this.#currentPlayer}'S TURN`;
        // Change image
        this.#playerTurnImage.src = this.#currentPlayer === 1 ? (0, _turnBackgroundRedSvgDefault.default) : (0, _turnBackgroundYellowSvgDefault.default);
        this.#dropIndicator.src = this.#currentPlayer === 1 ? (0, _markerRedSvgDefault.default) : (0, _markerYellowSvgDefault.default);
    }
    #moveDropIndicator(e) {
        const cell = e.target.closest(".cell__hidden");
        if (!cell) return;
        const x = cell.dataset.coords.split(",")[1];
        this.#dropIndicator.style.setProperty("--x", x);
    }
    displayWinScreen(playerWinner) {
        // switch from turn display to win display
        this.#playerTurnContainer.classList.add("hidden");
        this.#playerWinScreen.classList.remove("hidden");
        // Change the players name
        this.#playerWinScreen.querySelector("p").textContent = `PLAYER ${playerWinner}`;
        this.#backdrop.classList.add(playerWinner === 1 ? "red" : "yellow");
        // Animate Player Icon Bouncing
        const icon = document.querySelector(`.player__score[data-player="${playerWinner}"] > .player__icon`);
        icon.classList.add("iconAnimate");
    }
    // Handles the fade in / out
    //prettier-ignore
    get player() {
        return this.#currentPlayer;
    }
}
const game = new GameClass();

},{"./gameboard":"f6lhA","../images/turn-background-red.svg":"r2sEO","../images/turn-background-yellow.svg":"4bE8u","../images/marker-red.svg":"9L4Ag","../images/marker-yellow.svg":"b1yok","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f6lhA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameboard", ()=>gameboard);
var _logic = require("./logic");
var _images = require("./images");
var _game = require("./game");
class GameboardClass {
    #gameboardDOM = document.querySelector(".board__content");
    #gameboardInput = document.querySelector(".board__input");
    #dropIndicator = document.querySelector(".drop-indicator");
    gameboard;
    // Used to stop inputs from happening whenever there is an animation.
    #canInputCells = true;
    constructor(){
        // this.init(6, 7);
        // Event listener that registers input
        this.#gameboardInput.addEventListener("click", this.#clickCell.bind(this));
    // //////// DEV CODE ///////////////
    // this.dropCell(3, 1, 2);
    ////////////////////////////////////
    }
    // Initialize the board.
    // Note that height and width SHOULD NOT BE CHANGED.
    async init(height, width) {
        await this.#clearBoard();
        // Initialize empty gameboard
        this.gameboard = [
            ...Array(height)
        ].map((el)=>Array(width).fill(" "));
        // Automatically div elements that can be clicked.
        for(let y = 0; y < height; y++)for(let x = 0; x < width; x++){
            const html = `
        <div class="cell__hidden" data-coords="${y},${x}"></div>
        `;
            this.#gameboardInput.insertAdjacentHTML("beforeend", html);
        }
        // Enables cell input
        this.#canInputCells = true;
    }
    #clearBoard() {
        return new Promise(async (resolve)=>{
            this.#gameboardInput.innerHTML = "";
            [
                ...this.#gameboardDOM.children
            ].forEach((cell)=>{
                cell.style.opacity = "0";
            });
            await (0, _logic.logics).wait(0.25);
            this.#gameboardDOM.innerHTML = "";
            resolve();
        });
    }
    ////////////////////////////////////
    get #height() {
        return this.gameboard.length;
    }
    get #width() {
        return this.gameboard[0].length;
    }
    #rowOf(y, x) {
        return this.gameboard[y];
    }
    #columnOf(y, x) {
        return [
            ...Array(this.#height)
        ].map((_, i)=>this.gameboard[i][x]);
    }
    // Diagonal right is "\" (Down + Right)
    #diagonalRightOf(yCoords, xCoords) {
        let result = [
            this.gameboard[yCoords][xCoords]
        ];
        let y = yCoords, x = xCoords;
        // Iterate until topleft -> input (unshift) into array
        while(x > 0 && y > 0){
            y--;
            x--;
            result.unshift(this.gameboard[y][x]);
        }
        // Resets the position variables
        y = yCoords;
        x = xCoords;
        // Iterate until bottomright ->  input (push) into array
        while(x < this.#width - 1 && y < this.#height - 1){
            y++;
            x++;
            result.push(this.gameboard[y][x]);
        }
        return result;
    }
    // Diagonal left is "/" (Down + Left)
    #diagonalLeftOf(yCoords, xCoords) {
        let result = [
            this.gameboard[yCoords][xCoords]
        ];
        let y = yCoords, x = xCoords;
        // Iterate until top right
        while(x < this.#width - 1 && y > 0){
            y--;
            x++;
            result.unshift(this.gameboard[y][x]);
        }
        // Resets the position variables
        y = yCoords;
        x = xCoords;
        // Iterate until bottom left
        while(x > 0 && y < this.#height - 1){
            y++;
            x--;
            result.push(this.gameboard[y][x]);
        }
        return result;
    }
    ////////////////////////////////////
    // NOTE : New Cells will always fill the bottom of the column first
    async dropCell(y, x, player) {
        this.#canInputCells = false;
        // The i >= -1 is so that the loop will go from the height -> -1
        // If it ever hits -1 it means that there are no longer any available space on the column
        // Checks for the highest available spot on the column
        for(let i = this.#height - 1; i >= -1; i--){
            // Checks if the board is already filled to the top
            if (i === -1) {
                this.#canInputCells = true;
                return console.log("COLUMN IS FULL");
            }
            // If current el on column is empty the continue
            if (this.gameboard[i][x] !== " ") continue;
            // If current el IS NOT empty then set it to the y position
            y = i;
            break;
        }
        // Insert the player input into the object array
        this.gameboard[y][x] = new (0, _images.cellValue)(player, [
            y,
            x
        ]);
        // Waits for cell render animation to finish
        await this.#renderCell(y, x, player);
        // Checks if the recent move created a winning position
        // 0 -> Player // 1 -> Winning Cell Coords
        const winner = this.#checkWin([
            y,
            x
        ]);
        if (winner) this.#showWin(winner);
        else {
            // Re-enable input
            this.#canInputCells = true;
            (0, _game.game).switchTurns();
        }
    }
    async #renderCell(y, x, player) {
        return new Promise((resolve)=>{
            const cellColor = player === 1 ? (0, _images.images).redCell : (0, _images.images).yellowCell;
            const cellHtml = `
      <div class="cell" data-coords="${y},${x}" data-x="${x}", data-y="${y}" data-player="${player}">
        <img src=${cellColor} alt="cell"/>
      </div>
      `;
            this.#gameboardDOM.insertAdjacentHTML("afterbegin", cellHtml);
            const newCell = document.querySelector(`[data-coords="${y},${x}"]`);
            newCell.style.setProperty("--x", x);
            newCell.style.setProperty("--y", y);
            newCell.style.setProperty("--fall-time", `${(0, _logic.logics).calcFallTime(y)}s`);
            newCell.addEventListener("animationend", resolve);
        });
    }
    #clickCell(e) {
        const cell = e.target.closest(".cell__hidden");
        if (!cell) return;
        if (!this.#canInputCells) return;
        const [y, x] = cell.dataset.coords.split(",").map((el)=>Number(el));
        this.dropCell(y, x, (0, _game.game).player);
    }
    // ////////////////////////////////
    //prettier-ignore
    #checkWin(recentPlacement) {
        const [y, x] = recentPlacement;
        // Checks winning conditions.
        const result = (0, _logic.logics).containsWinningPosition(this.#rowOf(y, x)) || (0, _logic.logics).containsWinningPosition(this.#columnOf(y, x)) || (0, _logic.logics).containsWinningPosition(this.#diagonalRightOf(y, x)) || (0, _logic.logics).containsWinningPosition(this.#diagonalLeftOf(y, x)) || false;
        return result;
    }
    async #showWin(winner) {
        // creates an array with the only the coordinates of the winning cells.
        const winningCoords = winner.map((el)=>el[1]);
        // Hide dropIndicator
        this.#dropIndicator.classList.add("hidden");
        // Mark & animate the winning cells
        await this.#markWinningCell(winningCoords);
        await (0, _logic.logics).wait(0.2);
        // Add point
        const playerWinner = winner[0][0];
        (0, _game.game).addPointToPlayer(playerWinner);
        // Stop timer
        (0, _game.game).stopTimer();
        (0, _game.game).displayWinScreen(playerWinner);
    }
    #markWinningCell(winner) {
        return new Promise((resolve)=>{
            let i = winner.length - 1;
            const addMarkings = setInterval(()=>{
                // get data
                const [y, x] = winner[i];
                const cell = document.querySelector(`[data-coords="${y},${x}"]`);
                // add class
                cell.classList.add("cell__win");
                // decrement counter
                i--;
                // stopping condition
                if (i >= 0) return;
                clearInterval(addMarkings);
                resolve();
            }, 200);
        });
    }
}
const gameboard = new GameboardClass();

},{"./logic":"dZozM","./images":"jizV2","./game":"cMznl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZozM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logics", ()=>logics);
class Logic {
    constructor(){}
    // Returns an array of indexes of same
    // and consecutive elements (also the string);
    // If not found return false
    // Uses sliding window technique
    containsWinningPosition(arr, length = 4) {
        // Cleans the array
        // const cleanedArr = arr.filter(
        //   (element) => element !== " "
        // );
        let result = [];
        for(let r = 0, l = 0; r < arr.length; r++){
            if (result.length === length) break;
            if (arr[r] === " ") {
                result = [];
                l = r;
                continue;
            }
            if (r === 0) {
                result.push([
                    arr[r].player,
                    arr[r].coords
                ]);
                continue;
            }
            if (arr[r - 1].player === arr[r].player) {
                result.push([
                    arr[r].player,
                    arr[r].coords
                ]);
                continue;
            }
            result = [];
            l = r;
            result.push([
                arr[r].player,
                arr[r].coords
            ]);
        }
        return result.length === length ? result : false;
    }
    calcFallTime(y) {
        return Math.sqrt(2 * y) / 7;
    }
    wait(seconds) {
        return new Promise((resolve)=>{
            setTimeout(resolve, seconds * 1000);
        });
    }
}
const logics = new Logic();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jizV2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cellValue", ()=>cellValue);
parcelHelpers.export(exports, "images", ()=>images);
var _counterRedLargeSvg = require("../images/counter-red-large.svg");
var _counterRedLargeSvgDefault = parcelHelpers.interopDefault(_counterRedLargeSvg);
var _counterYellowLargeSvg = require("../images/counter-yellow-large.svg");
var _counterYellowLargeSvgDefault = parcelHelpers.interopDefault(_counterYellowLargeSvg);
var _counterRedSmallSvg = require("../images/counter-red-small.svg");
var _counterRedSmallSvgDefault = parcelHelpers.interopDefault(_counterRedSmallSvg);
var _counterYellowSmallSvg = require("../images/counter-yellow-small.svg");
var _counterYellowSmallSvgDefault = parcelHelpers.interopDefault(_counterYellowSmallSvg);
var _boardLayerWhiteLargeSvg = require("../images/board-layer-white-large.svg");
var _boardLayerWhiteLargeSvgDefault = parcelHelpers.interopDefault(_boardLayerWhiteLargeSvg);
var _boardLayerWhiteSmallSvg = require("../images/board-layer-white-small.svg");
var _boardLayerWhiteSmallSvgDefault = parcelHelpers.interopDefault(_boardLayerWhiteSmallSvg);
// Handles the images (changes on certain viewports)
class ResponsiveClass {
    #boardContent = document.querySelector(".board__content");
    #boardWhiteDOM = document.querySelector(".board__white");
    #currentViewport;
    constructor(){
        this.#detectViewport();
        // Listen to any change in viewport
        window.addEventListener("resize", this.#detectViewport.bind(this));
    }
    #detectViewport() {
        const viewportNow = window.innerWidth < 500 ? "MOBILE" : "DESKTOP";
        // If there is no change in viewport then return
        if (this.#currentViewport === viewportNow) return;
        // Sets the viewport on the object itself
        this.#currentViewport = viewportNow;
        // Change the cell image based on the viewport size
        this.#changeImages();
    }
    #changeImages() {
        // Change Cells
        [
            ...this.#boardContent.children
        ].forEach((cell)=>{
            const player = cell.dataset.player;
            cell.children[0].src = player === "1" ? this.redCell : this.yellowCell;
        });
        // Change board
        this.#boardWhiteDOM.src = this.boardWhite;
    }
    get boardWhite() {
        return this.#currentViewport === "DESKTOP" ? (0, _boardLayerWhiteLargeSvgDefault.default) : (0, _boardLayerWhiteSmallSvgDefault.default);
    }
    get redCell() {
        return this.#currentViewport === "DESKTOP" ? (0, _counterRedLargeSvgDefault.default) : (0, _counterRedSmallSvgDefault.default);
    }
    get yellowCell() {
        return this.#currentViewport === "DESKTOP" ? (0, _counterYellowLargeSvgDefault.default) : (0, _counterYellowSmallSvgDefault.default);
    }
}
class cellValue {
    constructor(player, coords){
        this.player = player;
        this.coords = coords;
    }
}
const images = new ResponsiveClass();

},{"../images/counter-red-large.svg":"1ka4D","../images/counter-yellow-large.svg":"2qK98","../images/counter-red-small.svg":"bmOQl","../images/counter-yellow-small.svg":"jo079","../images/board-layer-white-large.svg":"1uHDc","../images/board-layer-white-small.svg":"4FIQw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ka4D":[function(require,module,exports) {
module.exports = require("f4b2a0767d965836").getBundleURL("koft2") + "counter-red-large.d5444057.svg" + "?" + Date.now();

},{"f4b2a0767d965836":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"2qK98":[function(require,module,exports) {
module.exports = require("537f93c7da949577").getBundleURL("koft2") + "counter-yellow-large.70f6c099.svg" + "?" + Date.now();

},{"537f93c7da949577":"lgJ39"}],"bmOQl":[function(require,module,exports) {
module.exports = require("e3fbe476014ddb32").getBundleURL("koft2") + "counter-red-small.1bbde5eb.svg" + "?" + Date.now();

},{"e3fbe476014ddb32":"lgJ39"}],"jo079":[function(require,module,exports) {
module.exports = require("7da80ecde23ab6d3").getBundleURL("koft2") + "counter-yellow-small.472593a9.svg" + "?" + Date.now();

},{"7da80ecde23ab6d3":"lgJ39"}],"1uHDc":[function(require,module,exports) {
module.exports = require("8d5c718e2dfc22c7").getBundleURL("koft2") + "board-layer-white-large.147d7a98.svg" + "?" + Date.now();

},{"8d5c718e2dfc22c7":"lgJ39"}],"4FIQw":[function(require,module,exports) {
module.exports = require("c6346e3be96cfe48").getBundleURL("koft2") + "board-layer-white-small.f9200141.svg" + "?" + Date.now();

},{"c6346e3be96cfe48":"lgJ39"}],"r2sEO":[function(require,module,exports) {
module.exports = require("8e8a143761dba7ba").getBundleURL("koft2") + "turn-background-red.5baf717f.svg" + "?" + Date.now();

},{"8e8a143761dba7ba":"lgJ39"}],"4bE8u":[function(require,module,exports) {
module.exports = require("141cb95615b469ab").getBundleURL("koft2") + "turn-background-yellow.ab77be01.svg" + "?" + Date.now();

},{"141cb95615b469ab":"lgJ39"}],"9L4Ag":[function(require,module,exports) {
module.exports = require("2afc6a926289eda").getBundleURL("koft2") + "marker-red.9e67b2d9.svg" + "?" + Date.now();

},{"2afc6a926289eda":"lgJ39"}],"b1yok":[function(require,module,exports) {
module.exports = require("6e245a95e11571de").getBundleURL("koft2") + "marker-yellow.7493b4d4.svg" + "?" + Date.now();

},{"6e245a95e11571de":"lgJ39"}]},["3qXAl"], null, "parcelRequire1811")

//# sourceMappingURL=game.92a82cf7.js.map
