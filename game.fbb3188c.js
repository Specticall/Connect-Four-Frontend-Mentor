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
})({"lWQBG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
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

},{}],"bDbGG":[function(require,module,exports) {
var _webImmediateJs = require("core-js/modules/web.immediate.js"); // if (module.hot) module.hot.accept();
 /*
TODO :
*/ 
var _regeneratorRuntime = require("regenerator-runtime");
var _logicJs = require("./logic.js");
var _gameboardJs = require("./gameboard.js");
var _gameJs = require("./game.js");
var _navigationJs = require("./navigation.js");
var _aiJs = require("./ai.js");

},{"core-js/modules/web.immediate.js":"49tUX","regenerator-runtime":"dXNgZ","./logic.js":"dZozM","./gameboard.js":"f6lhA","./game.js":"cMznl","./navigation.js":"bGbYY","./ai.js":"l8Mbd"}],"dZozM":[function(require,module,exports) {
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

},{}],"f6lhA":[function(require,module,exports) {
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
    // ONLY FOR DEV PURPOSES
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
    async dropCell(y, x, player, render = false) {
        this.#canInputCells = false;
        // The i >= -1 is so that the loop will go from the height -> -1
        // If it ever hits -1 it means that there are no longer any available space on the column
        // Checks for the highest available spot on the column
        for(let i = this.#height - 1; i >= -1; i--){
            // This breaks the height check operation when we
            // are trying to print manually
            if (render) break;
            // Checks if the board is already filled to the top
            if (i === -1) {
                this.#canInputCells = true;
                return;
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
        if (!cell || !this.#canInputCells) return;
        const [y, x] = cell.dataset.coords.split(",").map((el)=>Number(el));
        this.dropCell(y, x, (0, _game.game).player);
    }
    // ////////////////////////////////
    //prettier-ignore
    #checkWin(recentPlacement) {
        const [y, x] = recentPlacement;
        // Checks winning conditions.
        const result = (0, _logic.logics).containsWinningPosition(this.#rowOf(y, x)) || (0, _logic.logics).containsWinningPosition(this.#columnOf(y, x)) || (0, _logic.logics).containsWinningPosition(this.#diagonalRightOf(y, x)) || (0, _logic.logics).containsWinningPosition(this.#diagonalLeftOf(y, x)) || false;
        const draw = this.#checkDraw();
        if (draw) return;
        return result;
    }
    async #showWin(winner = "tie") {
        // If the game results in a draw :
        if (winner === "tie") {
            (0, _game.game).displayWinScreen();
            return;
        }
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
    #checkDraw() {
        if (!this.gameboard.every((el)=>el.every((el)=>el !== " "))) return;
        this.#showWin();
        return true;
    }
    ///////////////////// DEV ////////////////////
    //(Used for development purposes only)
    printGame(board) {
        const newboard = board.map((el, y)=>el.map((el, x)=>{
                if (el === " ") return " ";
                else return new (0, _images.cellValue)(+el, [
                    y,
                    x
                ]);
            }));
        newboard.forEach((current)=>{
            current.forEach((el)=>{
                if (el === " ") return;
                const { player, coords } = el;
                const [y, x] = coords;
                this.dropCell(y, x, player, true);
            });
        });
    }
    get height() {
        return this.#height;
    }
    get width() {
        return this.#width;
    }
}
const gameboard = new GameboardClass();

},{"./logic":"dZozM","./images":"jizV2","./game":"cMznl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jizV2":[function(require,module,exports) {
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

},{"../images/counter-red-large.svg":"3BNS2","../images/counter-yellow-large.svg":"bRjQs","../images/counter-red-small.svg":"aN7Md","../images/counter-yellow-small.svg":"fD6QC","../images/board-layer-white-large.svg":"GFDuY","../images/board-layer-white-small.svg":"lvHTR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3BNS2":[function(require,module,exports) {
module.exports = require("6078bfa173bedf30").getBundleURL("1pq9E") + "counter-red-large.d5444057.svg" + "?" + Date.now();

},{"6078bfa173bedf30":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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

},{}],"bRjQs":[function(require,module,exports) {
module.exports = require("ff65a9bd8d677a32").getBundleURL("1pq9E") + "counter-yellow-large.70f6c099.svg" + "?" + Date.now();

},{"ff65a9bd8d677a32":"lgJ39"}],"aN7Md":[function(require,module,exports) {
module.exports = require("edbdd0c6a6c7651e").getBundleURL("1pq9E") + "counter-red-small.1bbde5eb.svg" + "?" + Date.now();

},{"edbdd0c6a6c7651e":"lgJ39"}],"fD6QC":[function(require,module,exports) {
module.exports = require("29042d7111ca51fc").getBundleURL("1pq9E") + "counter-yellow-small.472593a9.svg" + "?" + Date.now();

},{"29042d7111ca51fc":"lgJ39"}],"GFDuY":[function(require,module,exports) {
module.exports = require("ad954f6dfdda4238").getBundleURL("1pq9E") + "board-layer-white-large.147d7a98.svg" + "?" + Date.now();

},{"ad954f6dfdda4238":"lgJ39"}],"lvHTR":[function(require,module,exports) {
module.exports = require("e3ddaa9774facd65").getBundleURL("1pq9E") + "board-layer-white-small.f9200141.svg" + "?" + Date.now();

},{"e3ddaa9774facd65":"lgJ39"}],"cMznl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "game", ()=>game);
var _ai = require("./ai");
var _gameboard = require("./gameboard");
var _turnBackgroundRedSvg = require("../images/turn-background-red.svg");
var _turnBackgroundRedSvgDefault = parcelHelpers.interopDefault(_turnBackgroundRedSvg);
var _turnBackgroundYellowSvg = require("../images/turn-background-yellow.svg");
var _turnBackgroundYellowSvgDefault = parcelHelpers.interopDefault(_turnBackgroundYellowSvg);
var _markerRedSvg = require("../images/marker-red.svg");
var _markerRedSvgDefault = parcelHelpers.interopDefault(_markerRedSvg);
var _markerYellowSvg = require("../images/marker-yellow.svg");
var _markerYellowSvgDefault = parcelHelpers.interopDefault(_markerYellowSvg);
var _cpuSvg = require("../images/cpu.svg");
var _cpuSvgDefault = parcelHelpers.interopDefault(_cpuSvg);
var _playerTwoSvg = require("../images/player-two.svg");
var _playerTwoSvgDefault = parcelHelpers.interopDefault(_playerTwoSvg);
class GameClass {
    // At the start of the game, it is player 1's turn
    #boardInput = document.querySelector(".board__input");
    #playerTimer = document.querySelector(".current__player--timer");
    #playerTurnText = document.querySelector(".current__player--indicator");
    #playerTurnImage = document.querySelector(".current__player--image");
    #playerTurnContainer = document.querySelector(".current__player");
    #dropIndicator = document.querySelector(".drop-indicator");
    #backdrop = document.querySelector(".backdrop");
    #backdropBottom = document.querySelector(".backdrop__bottom");
    #player1PointDOM = document.querySelector(".score[data-player='1']");
    #player2PointDOM = document.querySelector(".score[data-player='2']");
    #playerWinScreen = document.querySelector(".player__winner");
    #restartBtn = document.querySelector(".btn__restart[data-where='nav']");
    #playAgainBtn = document.querySelector(".btn__again");
    // Player state
    #currentPlayer = 1;
    //Timer
    #time = 30;
    #timer;
    // Points
    #pointPlayer1 = 0;
    #pointPlayer2 = 0;
    // Game type
    #gameType;
    constructor(){
        this.#restartBtn.addEventListener("click", this.#resetGame.bind(this));
        this.#playAgainBtn.addEventListener("click", this.#restartGame.bind(this));
        // Start game after everything finishes loading.
        window.addEventListener("DOMContentLoaded", ()=>{
            this.loadGameType();
            this.startGame();
        });
    }
    loadGameType() {
        this.#gameType = sessionStorage.getItem("selectedGame");
    }
    startGame() {
        // Clears the board
        (0, _gameboard.gameboard).init(6, 7);
        // Sets the timer
        this.#playerTimer.textContent = `${this.#time}S`;
        // set current player to 1
        this.#currentPlayer = 1;
        // Sets the timer
        this.startTimer();
        this.#setTurnIndicator();
        // Display the drop indicator
        this.#dropIndicator.classList.remove("hidden");
        // set backdrop color to default
        this.#backdrop.classList.remove("yellow");
        this.#backdrop.classList.remove("red");
        this.#backdropBottom.classList.remove("yellow");
        this.#backdropBottom.classList.remove("red");
        // Sets the player score
        this.#player1PointDOM.textContent = this.#pointPlayer1;
        this.#player2PointDOM.textContent = this.#pointPlayer2;
        // Change text & image for the second player in accordance to the selected mode (cpu / pvp)
        document.querySelector("[data-player='2']").querySelector("p").textContent = this.#gameType === "vsCPU" ? "CPU" : "PLAYER 2";
        document.querySelector("[data-player='2']").querySelector("img").src = this.#gameType === "vsCPU" ? (0, _cpuSvgDefault.default) : (0, _playerTwoSvgDefault.default);
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
            if (this.#time === -1) {
                this.stopTimer();
                this.switchTurns();
            }
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.#timer);
    }
    #restartGame() {
        // Resets the timer to default position
        this.stopTimer();
        this.#time = 30;
        this.#playerTimer.textContent = `${this.#time}S`;
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
        if (this.#currentPlayer === 2 && this.#gameType === "vsCPU") {
            const { coords } = (0, _ai.cpu).getBestMove((0, _gameboard.gameboard).gameboard);
            const [y, x] = coords;
            (0, _gameboard.gameboard).dropCell(y, x, 2, true);
        }
    }
    addPointToPlayer(player) {
        player === 1 ? this.#pointPlayer1++ : this.#pointPlayer2++;
        // Sets the player score
        this.#player1PointDOM.textContent = this.#pointPlayer1;
        this.#player2PointDOM.textContent = this.#pointPlayer2;
    }
    // Switch the turn indicator to current player
    #setTurnIndicator() {
        // Change text
        this.#playerTurnText.textContent = `PLAYER ${this.#currentPlayer}'S TURN`;
        this.#playerTurnText.style.color = this.#currentPlayer === 1 ? "var(--clr-white)" : "var(--clr-black)";
        this.#playerTimer.style.color = this.#currentPlayer === 1 ? "var(--clr-white)" : "var(--clr-black)";
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
    displayWinScreen(playerWinner = "tie") {
        // switch from turn display to win display
        this.#playerTurnContainer.classList.add("hidden");
        this.#playerWinScreen.classList.remove("hidden");
        if (playerWinner === "tie") {
            this.#playerWinScreen.querySelector("p").textContent = `IT'S A`;
            this.#playerWinScreen.querySelector("h2").textContent = "DRAW";
            return;
        }
        // Change the players name
        this.#playerWinScreen.querySelector("p").textContent = `PLAYER ${playerWinner}`;
        this.#backdrop.classList.add(playerWinner === 1 ? "red" : "yellow");
        this.#backdropBottom.classList.add(playerWinner === 1 ? "red" : "yellow");
        this.#playerWinScreen.querySelector("h2").textContent = "WINS";
        // Animate Player Icon Bouncing
        const icon = document.querySelector(`.player__score[data-player="${playerWinner}"] > .player__icon`);
        icon.classList.add("iconAnimate");
    }
    get player() {
        return this.#currentPlayer;
    }
}
const game = new GameClass();

},{"./ai":"l8Mbd","./gameboard":"f6lhA","../images/turn-background-red.svg":"9WewK","../images/turn-background-yellow.svg":"f2BuL","../images/marker-red.svg":"2abKV","../images/marker-yellow.svg":"4c9gt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../images/cpu.svg":"9gVDk","../images/player-two.svg":"bdYKJ"}],"l8Mbd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cpu", ()=>cpu);
var _game = require("./game");
var _gameboard = require("./gameboard");
//prettier-ignore
const board = [
    [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
    ],
    [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
    ],
    [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
    ],
    [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
    ],
    [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
    ],
    [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " "
    ]
];
// const board = [
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
class AIClass {
    constructor(){
        window.addEventListener("DOMContentLoaded", ()=>{
        // setTimeout(() => {
        //   gameboard.printGame(board);
        //   console.log(this.getBestMove(gameboard.gameboard));
        // }, 300);
        });
    //prettier-ignore
    // console.log(
    //   this.#offenseTwoAdjacent5([" ", " ", 2, 1, "@", " ", 2])
    // );
    }
    // ENTRY POINT // API :
    getBestMove(board) {
        const movesPoints = this.#checkScore(this.#getPossibleMoves(board), board);
        let bestMoves = [];
        const randomInt = (min, max)=>Math.trunc(Math.random() * (max - min + 1) + min);
        // const movesPoints = [
        //   { coords: [1, 2], score: 0 },
        //   { coords: [2, 2], score: 6 },
        //   { coords: [3, 2], score: 5 },
        //   { coords: [4, 2], score: 27 },
        //   { coords: [5, 2], score: 27 },
        //   { coords: [6, 2], score: 27 },
        //   { coords: [7, 2], score: 0 },
        // ];
        movesPoints.sort((a, b)=>b.score - a.score);
        for(let i = 0; i < movesPoints.length; i++){
            if (movesPoints[i - 1] && movesPoints[i - 1].score === movesPoints[i].score || i === 0) bestMoves.push(movesPoints[i]);
            else break;
        }
        return bestMoves[randomInt(0, bestMoves.length - 1)];
    }
    #getPossibleMoves(board) {
        const moves = {};
        for(let y = board.length - 1; y >= 0; y--){
            for(let x = 0; x < board[0].length; x++)if (board[y][x] === " " && !moves[x]) moves[x] = [
                y,
                x
            ];
        }
        return moves;
    }
    #checkScore(moves, board) {
        const scores = [];
        Object.values(moves).forEach((move)=>{
            const [y, x] = move;
            const orientations = this.pulse(y, x, board);
            // console.log(orientations);
            const score = orientations.reduce((score, orient)=>{
                // Prioritize center
                score += this.#defense50(orient) || this.#defenseThreeAdjacent25(orient) || this.#defenseTwoAdjacent2(orient);
                score += this.#win(orient) || this.#offenseThreeAdjacent25(orient) || this.#offenseTwoAdjacent5(orient);
                return score;
            }, x === 3 ? 5 : 0);
            // Initial score is 5 if it's from the center board.
            // console.log([y, x], score);
            // console.log("===========");
            scores.push({
                coords: move,
                score
            });
        });
        return scores;
    }
    // Most of these algos uses two pointer / sliding window technique.
    // Defensive move (50 points) -> O, O, O, X
    // returns 50 if valid, 0 if not.
    #defense50(lines) {
        const currentIndex = lines.indexOf("@");
        let l, r, validLength = 1;
        l = r = currentIndex;
        while(lines[r]){
            r++;
            if (!lines[r] || lines[r] === " " || lines[r] === 2) break;
            // console.log(lines[r]);
            validLength++;
        }
        while(lines[l]){
            l--;
            if (!lines[l] || lines[l] === " " || lines[l] === 2) break;
            // console.log(lines[l]);
            validLength++;
        }
        return validLength === 4 ? 50 : 0;
    }
    // Win move (infinity points)
    #win(lines) {
        const currentIndex = lines.indexOf("@");
        let l, r, validLength = 1;
        l = r = currentIndex;
        while(lines[r]){
            r++;
            if (!lines[r] || lines[r] === " " || lines[r] === 1) break;
            // console.log(lines[r]);
            validLength++;
        }
        while(lines[l]){
            l--;
            if (!lines[l] || lines[l] === " " || lines[l] === 1) break;
            // console.log(lines[l]);
            validLength++;
        }
        return validLength === 4 ? Infinity : 0;
    }
    //prettier-ignore
    // Three adjacent (25 points) -> X, X, X, _
    #offenseThreeAdjacent25(lines) {
        const currentIndex = lines.indexOf("@");
        let l, r, validLength = 1;
        l = r = currentIndex;
        while(lines[r]){
            r++;
            if (!lines[r] || lines[r] === " " || lines[r] === 1 || validLength > 3) break;
            // console.log(lines[r]);
            validLength++;
        }
        while(lines[l] && validLength < 3){
            l--;
            if (!lines[l] || lines[l] === " " || lines[l] === 1 || validLength > 3) break;
            // console.log(lines[l]);
            validLength++;
        }
        return validLength === 3 ? 25 : 0;
    }
    //prettier-ignore
    #defenseThreeAdjacent25(lines) {
        const currentIndex = lines.indexOf("@");
        let l, r, validLength = 1;
        l = r = currentIndex;
        while(lines[r]){
            r++;
            if (!lines[r] || lines[r] === " " || lines[r] === 2 || validLength > 3) break;
            // console.log(lines[r]);
            validLength++;
        }
        while(lines[l] && validLength < 3){
            l--;
            if (!lines[l] || lines[l] === " " || lines[l] === 2 || validLength > 3) break;
            // console.log(lines[l]);
            validLength++;
        }
        return validLength === 3 ? 25 : 0;
    }
    // offense two adjacent (X,X)
    #offenseTwoAdjacent5(lines) {
        const currentIndex = lines.indexOf("@");
        if (lines[currentIndex + 1] === 2 || lines[currentIndex - 1] === 2) return 5;
        else return 0;
    }
    // defense two adjacent (X, O)
    #defenseTwoAdjacent2(lines) {
        const currentIndex = lines.indexOf("@");
        if (lines[currentIndex + 1] === 1 || lines[currentIndex - 1] === 1) return 2;
        else return 0;
    }
    // Two in  -> 5 points e.g. -> X,X,_,_ // X,_,X,_ // X,_,_,X
    #twoInFour5(lines) {}
    // (get col, row, diags, in 1 function)
    pulse(y, x, board) {
        // get row
        const row = board[y].map((cell, i, row)=>i === x ? "@" : cell.player || " ");
        // get col
        const col = [
            ...Array(board.length)
        ].map((_, i)=>{
            return i === y ? "@" : board[i][x].player || " ";
        });
        //prettier-ignore
        const diagRight = [
            ""
        ].reduce((result)=>{
            let _y = y, _x = x;
            // Iterate until topleft -> input (unshift) into array
            while(_x > 0 && _y > 0){
                _y--;
                _x--;
                result.unshift(board[_y][_x].player || " ");
            }
            // Resets the position variables
            _y = y;
            _x = x;
            // Iterate until bottomright ->  input (push) into array
            while(_x < board[0].length - 1 && _y < board.length - 1){
                _y++;
                _x++;
                result.push(board[_y][_x].player || " ");
            }
            return result;
        }, [
            "@"
        ]);
        const diagLeft = [
            ""
        ].reduce((result)=>{
            let _y = y, _x = x;
            // Iterate until top right
            while(_x < board[0].length - 1 && _y > 0){
                _y--;
                _x++;
                result.unshift(board[_y][_x].player || " ");
            }
            // Resets the position variables
            _y = y;
            _x = x;
            // Iterate until bottom left
            while(_x > 0 && _y < board.length - 1){
                _y++;
                _x--;
                result.push(board[_y][_x].player || " ");
            }
            return result;
        }, [
            "@"
        ]);
        return [
            row,
            col,
            diagRight,
            diagLeft
        ];
    }
}
const cpu = new AIClass();

},{"./game":"cMznl","./gameboard":"f6lhA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9WewK":[function(require,module,exports) {
module.exports = require("801f43f910993e0e").getBundleURL("1pq9E") + "turn-background-red.5baf717f.svg" + "?" + Date.now();

},{"801f43f910993e0e":"lgJ39"}],"f2BuL":[function(require,module,exports) {
module.exports = require("909720f903c6359f").getBundleURL("1pq9E") + "turn-background-yellow.ab77be01.svg" + "?" + Date.now();

},{"909720f903c6359f":"lgJ39"}],"2abKV":[function(require,module,exports) {
module.exports = require("4ce28751e3923d3d").getBundleURL("1pq9E") + "marker-red.9e67b2d9.svg" + "?" + Date.now();

},{"4ce28751e3923d3d":"lgJ39"}],"4c9gt":[function(require,module,exports) {
module.exports = require("414d0e33b69a62fb").getBundleURL("1pq9E") + "marker-yellow.7493b4d4.svg" + "?" + Date.now();

},{"414d0e33b69a62fb":"lgJ39"}],"9gVDk":[function(require,module,exports) {
module.exports = require("7fcc8c46f5ceddaf").getBundleURL("1pq9E") + "cpu.876e7281.svg" + "?" + Date.now();

},{"7fcc8c46f5ceddaf":"lgJ39"}],"bdYKJ":[function(require,module,exports) {
module.exports = require("3f11b42b8f80cbb9").getBundleURL("1pq9E") + "player-two.e29f2214.svg" + "?" + Date.now();

},{"3f11b42b8f80cbb9":"lgJ39"}],"bGbYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "menuPause", ()=>menuPause);
var _game = require("./game");
class PauseClass {
    #btnContinue = document.querySelector(".btn__continue");
    #btnRestart = document.querySelector(".btn__restart[data-where='pause-menu']");
    #btnMenu = document.querySelector(".btn__menu");
    #dropIndicator = document.querySelector(".drop-indicator");
    #pauseMenu = document.querySelector(".pause");
    constructor(){
        this.#btnMenu.addEventListener("click", this.togglePauseMenu.bind(this));
        this.#pauseMenu.addEventListener("click", this.closePauseMenu.bind(this));
        this.#btnContinue.addEventListener("click", this.togglePauseMenu.bind(this));
        this.#btnRestart.addEventListener("click", this.resetGame.bind(this));
    }
    togglePauseMenu() {
        this.#pauseMenu.classList.contains("pause-game") ? (0, _game.game).startTimer() : (0, _game.game).stopTimer();
        this.#pauseMenu.classList.toggle("pause-game");
        this.#dropIndicator.classList.toggle("oscilates");
    }
    closePauseMenu(e) {
        if (!e.target.classList.contains("pause")) return;
        this.togglePauseMenu();
    }
    resetGame() {
        (0, _game.game).reset();
        this.#pauseMenu.classList.toggle("pause-game");
        this.#dropIndicator.classList.toggle("oscilates");
    }
}
const menuPause = new PauseClass();

},{"./game":"cMznl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lWQBG","bDbGG"], "bDbGG", "parcelRequire1811")

//# sourceMappingURL=game.fbb3188c.js.map
