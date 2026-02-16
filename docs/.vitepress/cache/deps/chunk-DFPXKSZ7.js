import {
  assign_default,
  clone_default,
  compact_default,
  defaults_default,
  difference_default,
  dropRight_default,
  drop_default,
  every_default,
  filter_default,
  find_default,
  flatMap_default,
  flatten_default,
  forEach_default,
  groupBy_default,
  has_default,
  head_default,
  includes_default,
  indexOf_default,
  isRegExp_default,
  isString_default,
  isUndefined_default,
  keys_default,
  last_default,
  map_default,
  min_default,
  noop_default,
  pickBy_default,
  reduce_default,
  reject_default,
  some_default,
  uniqBy_default,
  uniq_default,
  values_default
} from "./chunk-JMU36AFR.js";
import {
  isEmpty_default
} from "./chunk-6FL3FPMZ.js";
import {
  identity_default,
  isArray_default,
  isFunction_default,
  isObject_default
} from "./chunk-QQQ3YQTL.js";
import {
  __commonJS,
  __export,
  __reExport,
  __toESM
} from "./chunk-IKZWERSR.js";

// node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/ral.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports.default = RAL;
  }
});

// node_modules/vscode-jsonrpc/lib/common/is.js
var require_is = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports.stringArray = stringArray;
  }
});

// node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = exports.Event = void 0;
    var ral_1 = require_ral();
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports.Event = Event = {}));
    var CallbackList = class {
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter3 = class _Emitter {
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports.Emitter = Emitter3;
    Emitter3._noop = function() {
    };
  }
});

// node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CancellationTokenSource = exports.CancellationToken = void 0;
    var ral_1 = require_ral();
    var Is2 = require_is();
    var events_1 = require_events();
    var CancellationToken11;
    (function(CancellationToken12) {
      CancellationToken12.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken12.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken12.None || candidate === CancellationToken12.Cancelled || Is2.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken12.is = is;
    })(CancellationToken11 || (exports.CancellationToken = CancellationToken11 = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource3 = class {
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken11.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken11.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports.CancellationTokenSource = CancellationTokenSource3;
  }
});

// node_modules/langium/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  AbstractAstReflection: () => AbstractAstReflection,
  AbstractCstNode: () => AbstractCstNode,
  AbstractLangiumParser: () => AbstractLangiumParser,
  AbstractParserErrorMessageProvider: () => AbstractParserErrorMessageProvider,
  AbstractThreadedAsyncParser: () => AbstractThreadedAsyncParser,
  AstUtils: () => ast_utils_exports,
  BiMap: () => BiMap,
  Cancellation: () => cancellation_exports,
  CompositeCstNodeImpl: () => CompositeCstNodeImpl,
  ContextCache: () => ContextCache,
  CstNodeBuilder: () => CstNodeBuilder,
  CstUtils: () => cst_utils_exports,
  DEFAULT_TOKENIZE_OPTIONS: () => DEFAULT_TOKENIZE_OPTIONS,
  DONE_RESULT: () => DONE_RESULT,
  DatatypeSymbol: () => DatatypeSymbol,
  DefaultAstNodeDescriptionProvider: () => DefaultAstNodeDescriptionProvider,
  DefaultAstNodeLocator: () => DefaultAstNodeLocator,
  DefaultAsyncParser: () => DefaultAsyncParser,
  DefaultCommentProvider: () => DefaultCommentProvider,
  DefaultConfigurationProvider: () => DefaultConfigurationProvider,
  DefaultDocumentBuilder: () => DefaultDocumentBuilder,
  DefaultDocumentValidator: () => DefaultDocumentValidator,
  DefaultHydrator: () => DefaultHydrator,
  DefaultIndexManager: () => DefaultIndexManager,
  DefaultJsonSerializer: () => DefaultJsonSerializer,
  DefaultLangiumDocumentFactory: () => DefaultLangiumDocumentFactory,
  DefaultLangiumDocuments: () => DefaultLangiumDocuments,
  DefaultLexer: () => DefaultLexer,
  DefaultLexerErrorMessageProvider: () => DefaultLexerErrorMessageProvider,
  DefaultLinker: () => DefaultLinker,
  DefaultNameProvider: () => DefaultNameProvider,
  DefaultReferenceDescriptionProvider: () => DefaultReferenceDescriptionProvider,
  DefaultReferences: () => DefaultReferences,
  DefaultScopeComputation: () => DefaultScopeComputation,
  DefaultScopeProvider: () => DefaultScopeProvider,
  DefaultServiceRegistry: () => DefaultServiceRegistry,
  DefaultTokenBuilder: () => DefaultTokenBuilder,
  DefaultValueConverter: () => DefaultValueConverter,
  DefaultWorkspaceLock: () => DefaultWorkspaceLock,
  DefaultWorkspaceManager: () => DefaultWorkspaceManager,
  Deferred: () => Deferred,
  Disposable: () => Disposable,
  DisposableCache: () => DisposableCache,
  DocumentCache: () => DocumentCache,
  DocumentState: () => DocumentState,
  DocumentValidator: () => DocumentValidator,
  EMPTY_SCOPE: () => EMPTY_SCOPE,
  EMPTY_STREAM: () => EMPTY_STREAM,
  EmptyFileSystem: () => EmptyFileSystem,
  EmptyFileSystemProvider: () => EmptyFileSystemProvider,
  ErrorWithLocation: () => ErrorWithLocation,
  GrammarAST: () => ast_exports,
  GrammarUtils: () => grammar_utils_exports,
  IndentationAwareLexer: () => IndentationAwareLexer,
  IndentationAwareTokenBuilder: () => IndentationAwareTokenBuilder,
  JSDocDocumentationProvider: () => JSDocDocumentationProvider,
  LangiumCompletionParser: () => LangiumCompletionParser,
  LangiumParser: () => LangiumParser,
  LangiumParserErrorMessageProvider: () => LangiumParserErrorMessageProvider,
  LeafCstNodeImpl: () => LeafCstNodeImpl,
  LexingMode: () => LexingMode,
  MapScope: () => MapScope,
  Module: () => Module,
  MultiMap: () => MultiMap,
  OperationCancelled: () => OperationCancelled,
  ParserWorker: () => ParserWorker,
  Reduction: () => Reduction,
  RegExpUtils: () => regexp_utils_exports,
  RootCstNodeImpl: () => RootCstNodeImpl,
  SimpleCache: () => SimpleCache,
  StreamImpl: () => StreamImpl,
  StreamScope: () => StreamScope,
  TextDocument: () => TextDocument2,
  TreeStreamImpl: () => TreeStreamImpl,
  URI: () => URI2,
  UriUtils: () => UriUtils,
  ValidationCategory: () => ValidationCategory,
  ValidationRegistry: () => ValidationRegistry,
  ValueConverter: () => ValueConverter,
  WorkspaceCache: () => WorkspaceCache,
  assertUnreachable: () => assertUnreachable,
  createCompletionParser: () => createCompletionParser,
  createDefaultCoreModule: () => createDefaultCoreModule,
  createDefaultSharedCoreModule: () => createDefaultSharedCoreModule,
  createGrammarConfig: () => createGrammarConfig,
  createLangiumParser: () => createLangiumParser,
  createParser: () => createParser,
  delayNextTick: () => delayNextTick,
  diagnosticData: () => diagnosticData,
  eagerLoad: () => eagerLoad,
  getDiagnosticRange: () => getDiagnosticRange,
  indentationBuilderDefaultOptions: () => indentationBuilderDefaultOptions,
  inject: () => inject,
  interruptAndCheck: () => interruptAndCheck,
  isAstNode: () => isAstNode,
  isAstNodeDescription: () => isAstNodeDescription,
  isAstNodeWithComment: () => isAstNodeWithComment,
  isCompositeCstNode: () => isCompositeCstNode,
  isIMultiModeLexerDefinition: () => isIMultiModeLexerDefinition,
  isJSDoc: () => isJSDoc,
  isLeafCstNode: () => isLeafCstNode,
  isLinkingError: () => isLinkingError,
  isNamed: () => isNamed,
  isOperationCancelled: () => isOperationCancelled,
  isReference: () => isReference,
  isRootCstNode: () => isRootCstNode,
  isTokenTypeArray: () => isTokenTypeArray,
  isTokenTypeDictionary: () => isTokenTypeDictionary,
  loadGrammarFromJson: () => loadGrammarFromJson,
  parseJSDoc: () => parseJSDoc,
  prepareLangiumParser: () => prepareLangiumParser,
  setInterruptionPeriod: () => setInterruptionPeriod,
  startCancelableOperation: () => startCancelableOperation,
  stream: () => stream,
  toDiagnosticData: () => toDiagnosticData,
  toDiagnosticSeverity: () => toDiagnosticSeverity
});

// node_modules/langium/lib/utils/cst-utils.js
var cst_utils_exports = {};
__export(cst_utils_exports, {
  DefaultNameRegexp: () => DefaultNameRegexp,
  RangeComparison: () => RangeComparison,
  compareRange: () => compareRange,
  findCommentNode: () => findCommentNode,
  findDeclarationNodeAtOffset: () => findDeclarationNodeAtOffset,
  findLeafNodeAtOffset: () => findLeafNodeAtOffset,
  findLeafNodeBeforeOffset: () => findLeafNodeBeforeOffset,
  flattenCst: () => flattenCst,
  getInteriorNodes: () => getInteriorNodes,
  getNextNode: () => getNextNode,
  getPreviousNode: () => getPreviousNode,
  getStartlineNode: () => getStartlineNode,
  inRange: () => inRange,
  isChildNode: () => isChildNode,
  isCommentNode: () => isCommentNode,
  streamCst: () => streamCst,
  toDocumentSegment: () => toDocumentSegment,
  tokenToRange: () => tokenToRange
});

// node_modules/langium/lib/syntax-tree.js
function isAstNode(obj) {
  return typeof obj === "object" && obj !== null && typeof obj.$type === "string";
}
function isReference(obj) {
  return typeof obj === "object" && obj !== null && typeof obj.$refText === "string";
}
function isAstNodeDescription(obj) {
  return typeof obj === "object" && obj !== null && typeof obj.name === "string" && typeof obj.type === "string" && typeof obj.path === "string";
}
function isLinkingError(obj) {
  return typeof obj === "object" && obj !== null && isAstNode(obj.container) && isReference(obj.reference) && typeof obj.message === "string";
}
var AbstractAstReflection = class {
  constructor() {
    this.subtypes = {};
    this.allSubtypes = {};
  }
  isInstance(node, type) {
    return isAstNode(node) && this.isSubtype(node.$type, type);
  }
  isSubtype(subtype, supertype) {
    if (subtype === supertype) {
      return true;
    }
    let nested = this.subtypes[subtype];
    if (!nested) {
      nested = this.subtypes[subtype] = {};
    }
    const existing = nested[supertype];
    if (existing !== void 0) {
      return existing;
    } else {
      const result = this.computeIsSubtype(subtype, supertype);
      nested[supertype] = result;
      return result;
    }
  }
  getAllSubTypes(type) {
    const existing = this.allSubtypes[type];
    if (existing) {
      return existing;
    } else {
      const allTypes = this.getAllTypes();
      const types = [];
      for (const possibleSubType of allTypes) {
        if (this.isSubtype(possibleSubType, type)) {
          types.push(possibleSubType);
        }
      }
      this.allSubtypes[type] = types;
      return types;
    }
  }
};
function isCompositeCstNode(node) {
  return typeof node === "object" && node !== null && Array.isArray(node.content);
}
function isLeafCstNode(node) {
  return typeof node === "object" && node !== null && typeof node.tokenType === "object";
}
function isRootCstNode(node) {
  return isCompositeCstNode(node) && typeof node.fullText === "string";
}

// node_modules/langium/lib/utils/stream.js
var StreamImpl = class _StreamImpl {
  constructor(startFn, nextFn) {
    this.startFn = startFn;
    this.nextFn = nextFn;
  }
  iterator() {
    const iterator = {
      state: this.startFn(),
      next: () => this.nextFn(iterator.state),
      [Symbol.iterator]: () => iterator
    };
    return iterator;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    const iterator = this.iterator();
    return Boolean(iterator.next().done);
  }
  count() {
    const iterator = this.iterator();
    let count = 0;
    let next = iterator.next();
    while (!next.done) {
      count++;
      next = iterator.next();
    }
    return count;
  }
  toArray() {
    const result = [];
    const iterator = this.iterator();
    let next;
    do {
      next = iterator.next();
      if (next.value !== void 0) {
        result.push(next.value);
      }
    } while (!next.done);
    return result;
  }
  toSet() {
    return new Set(this);
  }
  toMap(keyFn, valueFn) {
    const entryStream = this.map((element) => [
      keyFn ? keyFn(element) : element,
      valueFn ? valueFn(element) : element
    ]);
    return new Map(entryStream);
  }
  toString() {
    return this.join();
  }
  concat(other) {
    return new _StreamImpl(() => ({ first: this.startFn(), firstDone: false, iterator: other[Symbol.iterator]() }), (state) => {
      let result;
      if (!state.firstDone) {
        do {
          result = this.nextFn(state.first);
          if (!result.done) {
            return result;
          }
        } while (!result.done);
        state.firstDone = true;
      }
      do {
        result = state.iterator.next();
        if (!result.done) {
          return result;
        }
      } while (!result.done);
      return DONE_RESULT;
    });
  }
  join(separator = ",") {
    const iterator = this.iterator();
    let value = "";
    let result;
    let addSeparator = false;
    do {
      result = iterator.next();
      if (!result.done) {
        if (addSeparator) {
          value += separator;
        }
        value += toString(result.value);
      }
      addSeparator = true;
    } while (!result.done);
    return value;
  }
  indexOf(searchElement, fromIndex = 0) {
    const iterator = this.iterator();
    let index = 0;
    let next = iterator.next();
    while (!next.done) {
      if (index >= fromIndex && next.value === searchElement) {
        return index;
      }
      next = iterator.next();
      index++;
    }
    return -1;
  }
  every(predicate) {
    const iterator = this.iterator();
    let next = iterator.next();
    while (!next.done) {
      if (!predicate(next.value)) {
        return false;
      }
      next = iterator.next();
    }
    return true;
  }
  some(predicate) {
    const iterator = this.iterator();
    let next = iterator.next();
    while (!next.done) {
      if (predicate(next.value)) {
        return true;
      }
      next = iterator.next();
    }
    return false;
  }
  forEach(callbackfn) {
    const iterator = this.iterator();
    let index = 0;
    let next = iterator.next();
    while (!next.done) {
      callbackfn(next.value, index);
      next = iterator.next();
      index++;
    }
  }
  map(callbackfn) {
    return new _StreamImpl(this.startFn, (state) => {
      const { done, value } = this.nextFn(state);
      if (done) {
        return DONE_RESULT;
      } else {
        return { done: false, value: callbackfn(value) };
      }
    });
  }
  filter(predicate) {
    return new _StreamImpl(this.startFn, (state) => {
      let result;
      do {
        result = this.nextFn(state);
        if (!result.done && predicate(result.value)) {
          return result;
        }
      } while (!result.done);
      return DONE_RESULT;
    });
  }
  nonNullable() {
    return this.filter((e) => e !== void 0 && e !== null);
  }
  reduce(callbackfn, initialValue) {
    const iterator = this.iterator();
    let previousValue = initialValue;
    let next = iterator.next();
    while (!next.done) {
      if (previousValue === void 0) {
        previousValue = next.value;
      } else {
        previousValue = callbackfn(previousValue, next.value);
      }
      next = iterator.next();
    }
    return previousValue;
  }
  reduceRight(callbackfn, initialValue) {
    return this.recursiveReduce(this.iterator(), callbackfn, initialValue);
  }
  recursiveReduce(iterator, callbackfn, initialValue) {
    const next = iterator.next();
    if (next.done) {
      return initialValue;
    }
    const previousValue = this.recursiveReduce(iterator, callbackfn, initialValue);
    if (previousValue === void 0) {
      return next.value;
    }
    return callbackfn(previousValue, next.value);
  }
  find(predicate) {
    const iterator = this.iterator();
    let next = iterator.next();
    while (!next.done) {
      if (predicate(next.value)) {
        return next.value;
      }
      next = iterator.next();
    }
    return void 0;
  }
  findIndex(predicate) {
    const iterator = this.iterator();
    let index = 0;
    let next = iterator.next();
    while (!next.done) {
      if (predicate(next.value)) {
        return index;
      }
      next = iterator.next();
      index++;
    }
    return -1;
  }
  includes(searchElement) {
    const iterator = this.iterator();
    let next = iterator.next();
    while (!next.done) {
      if (next.value === searchElement) {
        return true;
      }
      next = iterator.next();
    }
    return false;
  }
  flatMap(callbackfn) {
    return new _StreamImpl(() => ({ this: this.startFn() }), (state) => {
      do {
        if (state.iterator) {
          const next = state.iterator.next();
          if (next.done) {
            state.iterator = void 0;
          } else {
            return next;
          }
        }
        const { done, value } = this.nextFn(state.this);
        if (!done) {
          const mapped = callbackfn(value);
          if (isIterable(mapped)) {
            state.iterator = mapped[Symbol.iterator]();
          } else {
            return { done: false, value: mapped };
          }
        }
      } while (state.iterator);
      return DONE_RESULT;
    });
  }
  flat(depth) {
    if (depth === void 0) {
      depth = 1;
    }
    if (depth <= 0) {
      return this;
    }
    const stream2 = depth > 1 ? this.flat(depth - 1) : this;
    return new _StreamImpl(() => ({ this: stream2.startFn() }), (state) => {
      do {
        if (state.iterator) {
          const next = state.iterator.next();
          if (next.done) {
            state.iterator = void 0;
          } else {
            return next;
          }
        }
        const { done, value } = stream2.nextFn(state.this);
        if (!done) {
          if (isIterable(value)) {
            state.iterator = value[Symbol.iterator]();
          } else {
            return { done: false, value };
          }
        }
      } while (state.iterator);
      return DONE_RESULT;
    });
  }
  head() {
    const iterator = this.iterator();
    const result = iterator.next();
    if (result.done) {
      return void 0;
    }
    return result.value;
  }
  tail(skipCount = 1) {
    return new _StreamImpl(() => {
      const state = this.startFn();
      for (let i = 0; i < skipCount; i++) {
        const next = this.nextFn(state);
        if (next.done) {
          return state;
        }
      }
      return state;
    }, this.nextFn);
  }
  limit(maxSize) {
    return new _StreamImpl(() => ({ size: 0, state: this.startFn() }), (state) => {
      state.size++;
      if (state.size > maxSize) {
        return DONE_RESULT;
      }
      return this.nextFn(state.state);
    });
  }
  distinct(by) {
    return new _StreamImpl(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (state) => {
      let result;
      do {
        result = this.nextFn(state.internalState);
        if (!result.done) {
          const value = by ? by(result.value) : result.value;
          if (!state.set.has(value)) {
            state.set.add(value);
            return result;
          }
        }
      } while (!result.done);
      return DONE_RESULT;
    });
  }
  exclude(other, key) {
    const otherKeySet = /* @__PURE__ */ new Set();
    for (const item of other) {
      const value = key ? key(item) : item;
      otherKeySet.add(value);
    }
    return this.filter((e) => {
      const ownKey = key ? key(e) : e;
      return !otherKeySet.has(ownKey);
    });
  }
};
function toString(item) {
  if (typeof item === "string") {
    return item;
  }
  if (typeof item === "undefined") {
    return "undefined";
  }
  if (typeof item.toString === "function") {
    return item.toString();
  }
  return Object.prototype.toString.call(item);
}
function isIterable(obj) {
  return !!obj && typeof obj[Symbol.iterator] === "function";
}
var EMPTY_STREAM = new StreamImpl(() => void 0, () => DONE_RESULT);
var DONE_RESULT = Object.freeze({ done: true, value: void 0 });
function stream(...collections) {
  if (collections.length === 1) {
    const collection = collections[0];
    if (collection instanceof StreamImpl) {
      return collection;
    }
    if (isIterable(collection)) {
      return new StreamImpl(() => collection[Symbol.iterator](), (iterator) => iterator.next());
    }
    if (typeof collection.length === "number") {
      return new StreamImpl(() => ({ index: 0 }), (state) => {
        if (state.index < collection.length) {
          return { done: false, value: collection[state.index++] };
        } else {
          return DONE_RESULT;
        }
      });
    }
  }
  if (collections.length > 1) {
    return new StreamImpl(() => ({ collIndex: 0, arrIndex: 0 }), (state) => {
      do {
        if (state.iterator) {
          const next = state.iterator.next();
          if (!next.done) {
            return next;
          }
          state.iterator = void 0;
        }
        if (state.array) {
          if (state.arrIndex < state.array.length) {
            return { done: false, value: state.array[state.arrIndex++] };
          }
          state.array = void 0;
          state.arrIndex = 0;
        }
        if (state.collIndex < collections.length) {
          const collection = collections[state.collIndex++];
          if (isIterable(collection)) {
            state.iterator = collection[Symbol.iterator]();
          } else if (collection && typeof collection.length === "number") {
            state.array = collection;
          }
        }
      } while (state.iterator || state.array || state.collIndex < collections.length);
      return DONE_RESULT;
    });
  }
  return EMPTY_STREAM;
}
var TreeStreamImpl = class extends StreamImpl {
  constructor(root, children, options) {
    super(() => ({
      iterators: (options === null || options === void 0 ? void 0 : options.includeRoot) ? [[root][Symbol.iterator]()] : [children(root)[Symbol.iterator]()],
      pruned: false
    }), (state) => {
      if (state.pruned) {
        state.iterators.pop();
        state.pruned = false;
      }
      while (state.iterators.length > 0) {
        const iterator = state.iterators[state.iterators.length - 1];
        const next = iterator.next();
        if (next.done) {
          state.iterators.pop();
        } else {
          state.iterators.push(children(next.value)[Symbol.iterator]());
          return next;
        }
      }
      return DONE_RESULT;
    });
  }
  iterator() {
    const iterator = {
      state: this.startFn(),
      next: () => this.nextFn(iterator.state),
      prune: () => {
        iterator.state.pruned = true;
      },
      [Symbol.iterator]: () => iterator
    };
    return iterator;
  }
};
var Reduction;
(function(Reduction2) {
  function sum(stream2) {
    return stream2.reduce((a, b) => a + b, 0);
  }
  Reduction2.sum = sum;
  function product(stream2) {
    return stream2.reduce((a, b) => a * b, 0);
  }
  Reduction2.product = product;
  function min(stream2) {
    return stream2.reduce((a, b) => Math.min(a, b));
  }
  Reduction2.min = min;
  function max(stream2) {
    return stream2.reduce((a, b) => Math.max(a, b));
  }
  Reduction2.max = max;
})(Reduction || (Reduction = {}));

// node_modules/langium/lib/utils/cst-utils.js
function streamCst(node) {
  return new TreeStreamImpl(node, (element) => {
    if (isCompositeCstNode(element)) {
      return element.content;
    } else {
      return [];
    }
  }, { includeRoot: true });
}
function flattenCst(node) {
  return streamCst(node).filter(isLeafCstNode);
}
function isChildNode(child, parent) {
  while (child.container) {
    child = child.container;
    if (child === parent) {
      return true;
    }
  }
  return false;
}
function tokenToRange(token) {
  return {
    start: {
      character: token.startColumn - 1,
      line: token.startLine - 1
    },
    end: {
      character: token.endColumn,
      // endColumn uses the correct index
      line: token.endLine - 1
    }
  };
}
function toDocumentSegment(node) {
  if (!node) {
    return void 0;
  }
  const { offset, end, range } = node;
  return {
    range,
    offset,
    end,
    length: end - offset
  };
}
var RangeComparison;
(function(RangeComparison2) {
  RangeComparison2[RangeComparison2["Before"] = 0] = "Before";
  RangeComparison2[RangeComparison2["After"] = 1] = "After";
  RangeComparison2[RangeComparison2["OverlapFront"] = 2] = "OverlapFront";
  RangeComparison2[RangeComparison2["OverlapBack"] = 3] = "OverlapBack";
  RangeComparison2[RangeComparison2["Inside"] = 4] = "Inside";
  RangeComparison2[RangeComparison2["Outside"] = 5] = "Outside";
})(RangeComparison || (RangeComparison = {}));
function compareRange(range, to) {
  if (range.end.line < to.start.line || range.end.line === to.start.line && range.end.character <= to.start.character) {
    return RangeComparison.Before;
  } else if (range.start.line > to.end.line || range.start.line === to.end.line && range.start.character >= to.end.character) {
    return RangeComparison.After;
  }
  const startInside = range.start.line > to.start.line || range.start.line === to.start.line && range.start.character >= to.start.character;
  const endInside = range.end.line < to.end.line || range.end.line === to.end.line && range.end.character <= to.end.character;
  if (startInside && endInside) {
    return RangeComparison.Inside;
  } else if (startInside) {
    return RangeComparison.OverlapBack;
  } else if (endInside) {
    return RangeComparison.OverlapFront;
  } else {
    return RangeComparison.Outside;
  }
}
function inRange(range, to) {
  const comparison = compareRange(range, to);
  return comparison > RangeComparison.After;
}
var DefaultNameRegexp = /^[\w\p{L}]$/u;
function findDeclarationNodeAtOffset(cstNode, offset, nameRegexp = DefaultNameRegexp) {
  if (cstNode) {
    if (offset > 0) {
      const localOffset = offset - cstNode.offset;
      const textAtOffset = cstNode.text.charAt(localOffset);
      if (!nameRegexp.test(textAtOffset)) {
        offset--;
      }
    }
    return findLeafNodeAtOffset(cstNode, offset);
  }
  return void 0;
}
function findCommentNode(cstNode, commentNames) {
  if (cstNode) {
    const previous = getPreviousNode(cstNode, true);
    if (previous && isCommentNode(previous, commentNames)) {
      return previous;
    }
    if (isRootCstNode(cstNode)) {
      const endIndex = cstNode.content.findIndex((e) => !e.hidden);
      for (let i = endIndex - 1; i >= 0; i--) {
        const child = cstNode.content[i];
        if (isCommentNode(child, commentNames)) {
          return child;
        }
      }
    }
  }
  return void 0;
}
function isCommentNode(cstNode, commentNames) {
  return isLeafCstNode(cstNode) && commentNames.includes(cstNode.tokenType.name);
}
function findLeafNodeAtOffset(node, offset) {
  if (isLeafCstNode(node)) {
    return node;
  } else if (isCompositeCstNode(node)) {
    const searchResult = binarySearch(node, offset, false);
    if (searchResult) {
      return findLeafNodeAtOffset(searchResult, offset);
    }
  }
  return void 0;
}
function findLeafNodeBeforeOffset(node, offset) {
  if (isLeafCstNode(node)) {
    return node;
  } else if (isCompositeCstNode(node)) {
    const searchResult = binarySearch(node, offset, true);
    if (searchResult) {
      return findLeafNodeBeforeOffset(searchResult, offset);
    }
  }
  return void 0;
}
function binarySearch(node, offset, closest) {
  let left = 0;
  let right = node.content.length - 1;
  let closestNode = void 0;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleNode = node.content[middle];
    if (middleNode.offset <= offset && middleNode.end > offset) {
      return middleNode;
    }
    if (middleNode.end <= offset) {
      closestNode = closest ? middleNode : void 0;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return closestNode;
}
function getPreviousNode(node, hidden = true) {
  while (node.container) {
    const parent = node.container;
    let index = parent.content.indexOf(node);
    while (index > 0) {
      index--;
      const previous = parent.content[index];
      if (hidden || !previous.hidden) {
        return previous;
      }
    }
    node = parent;
  }
  return void 0;
}
function getNextNode(node, hidden = true) {
  while (node.container) {
    const parent = node.container;
    let index = parent.content.indexOf(node);
    const last = parent.content.length - 1;
    while (index < last) {
      index++;
      const next = parent.content[index];
      if (hidden || !next.hidden) {
        return next;
      }
    }
    node = parent;
  }
  return void 0;
}
function getStartlineNode(node) {
  if (node.range.start.character === 0) {
    return node;
  }
  const line = node.range.start.line;
  let last = node;
  let index;
  while (node.container) {
    const parent = node.container;
    const selfIndex = index !== null && index !== void 0 ? index : parent.content.indexOf(node);
    if (selfIndex === 0) {
      node = parent;
      index = void 0;
    } else {
      index = selfIndex - 1;
      node = parent.content[index];
    }
    if (node.range.start.line !== line) {
      break;
    }
    last = node;
  }
  return last;
}
function getInteriorNodes(start, end) {
  const commonParent = getCommonParent(start, end);
  if (!commonParent) {
    return [];
  }
  return commonParent.parent.content.slice(commonParent.a + 1, commonParent.b);
}
function getCommonParent(a, b) {
  const aParents = getParentChain(a);
  const bParents = getParentChain(b);
  let current;
  for (let i = 0; i < aParents.length && i < bParents.length; i++) {
    const aParent = aParents[i];
    const bParent = bParents[i];
    if (aParent.parent === bParent.parent) {
      current = {
        parent: aParent.parent,
        a: aParent.index,
        b: bParent.index
      };
    } else {
      break;
    }
  }
  return current;
}
function getParentChain(node) {
  const chain = [];
  while (node.container) {
    const parent = node.container;
    const index = parent.content.indexOf(node);
    chain.push({
      parent,
      index
    });
    node = parent;
  }
  return chain.reverse();
}

// node_modules/langium/lib/utils/grammar-utils.js
var grammar_utils_exports = {};
__export(grammar_utils_exports, {
  findAssignment: () => findAssignment,
  findNameAssignment: () => findNameAssignment,
  findNodeForKeyword: () => findNodeForKeyword,
  findNodeForProperty: () => findNodeForProperty,
  findNodesForKeyword: () => findNodesForKeyword,
  findNodesForKeywordInternal: () => findNodesForKeywordInternal,
  findNodesForProperty: () => findNodesForProperty,
  getActionAtElement: () => getActionAtElement,
  getActionType: () => getActionType,
  getAllReachableRules: () => getAllReachableRules,
  getCrossReferenceTerminal: () => getCrossReferenceTerminal,
  getEntryRule: () => getEntryRule,
  getExplicitRuleType: () => getExplicitRuleType,
  getHiddenRules: () => getHiddenRules,
  getRuleType: () => getRuleType,
  getRuleTypeName: () => getRuleTypeName,
  getTypeName: () => getTypeName,
  isArrayCardinality: () => isArrayCardinality,
  isArrayOperator: () => isArrayOperator,
  isCommentTerminal: () => isCommentTerminal,
  isDataType: () => isDataType,
  isDataTypeRule: () => isDataTypeRule,
  isOptionalCardinality: () => isOptionalCardinality,
  terminalRegex: () => terminalRegex
});

// node_modules/langium/lib/utils/errors.js
var ErrorWithLocation = class extends Error {
  constructor(node, message) {
    super(node ? `${message} at ${node.range.start.line}:${node.range.start.character}` : message);
  }
};
function assertUnreachable(_) {
  throw new Error("Error! The input value was not handled.");
}

// node_modules/langium/lib/languages/generated/ast.js
var ast_exports = {};
__export(ast_exports, {
  AbstractElement: () => AbstractElement,
  AbstractRule: () => AbstractRule,
  AbstractType: () => AbstractType,
  Action: () => Action,
  Alternatives: () => Alternatives,
  ArrayLiteral: () => ArrayLiteral,
  ArrayType: () => ArrayType,
  Assignment: () => Assignment,
  BooleanLiteral: () => BooleanLiteral,
  CharacterRange: () => CharacterRange,
  Condition: () => Condition,
  Conjunction: () => Conjunction,
  CrossReference: () => CrossReference,
  Disjunction: () => Disjunction,
  EndOfFile: () => EndOfFile,
  Grammar: () => Grammar,
  GrammarImport: () => GrammarImport,
  Group: () => Group,
  InferredType: () => InferredType,
  Interface: () => Interface,
  Keyword: () => Keyword,
  LangiumGrammarAstReflection: () => LangiumGrammarAstReflection,
  LangiumGrammarTerminals: () => LangiumGrammarTerminals,
  NamedArgument: () => NamedArgument,
  NegatedToken: () => NegatedToken,
  Negation: () => Negation,
  NumberLiteral: () => NumberLiteral,
  Parameter: () => Parameter,
  ParameterReference: () => ParameterReference,
  ParserRule: () => ParserRule,
  ReferenceType: () => ReferenceType,
  RegexToken: () => RegexToken,
  ReturnType: () => ReturnType,
  RuleCall: () => RuleCall,
  SimpleType: () => SimpleType,
  StringLiteral: () => StringLiteral,
  TerminalAlternatives: () => TerminalAlternatives,
  TerminalGroup: () => TerminalGroup,
  TerminalRule: () => TerminalRule,
  TerminalRuleCall: () => TerminalRuleCall,
  Type: () => Type,
  TypeAttribute: () => TypeAttribute,
  TypeDefinition: () => TypeDefinition,
  UnionType: () => UnionType,
  UnorderedGroup: () => UnorderedGroup,
  UntilToken: () => UntilToken,
  ValueLiteral: () => ValueLiteral,
  Wildcard: () => Wildcard,
  isAbstractElement: () => isAbstractElement,
  isAbstractRule: () => isAbstractRule,
  isAbstractType: () => isAbstractType,
  isAction: () => isAction,
  isAlternatives: () => isAlternatives,
  isArrayLiteral: () => isArrayLiteral,
  isArrayType: () => isArrayType,
  isAssignment: () => isAssignment,
  isBooleanLiteral: () => isBooleanLiteral,
  isCharacterRange: () => isCharacterRange,
  isCondition: () => isCondition,
  isConjunction: () => isConjunction,
  isCrossReference: () => isCrossReference,
  isDisjunction: () => isDisjunction,
  isEndOfFile: () => isEndOfFile,
  isFeatureName: () => isFeatureName,
  isGrammar: () => isGrammar,
  isGrammarImport: () => isGrammarImport,
  isGroup: () => isGroup,
  isInferredType: () => isInferredType,
  isInterface: () => isInterface,
  isKeyword: () => isKeyword,
  isNamedArgument: () => isNamedArgument,
  isNegatedToken: () => isNegatedToken,
  isNegation: () => isNegation,
  isNumberLiteral: () => isNumberLiteral,
  isParameter: () => isParameter,
  isParameterReference: () => isParameterReference,
  isParserRule: () => isParserRule,
  isPrimitiveType: () => isPrimitiveType,
  isReferenceType: () => isReferenceType,
  isRegexToken: () => isRegexToken,
  isReturnType: () => isReturnType,
  isRuleCall: () => isRuleCall,
  isSimpleType: () => isSimpleType,
  isStringLiteral: () => isStringLiteral,
  isTerminalAlternatives: () => isTerminalAlternatives,
  isTerminalGroup: () => isTerminalGroup,
  isTerminalRule: () => isTerminalRule,
  isTerminalRuleCall: () => isTerminalRuleCall,
  isType: () => isType,
  isTypeAttribute: () => isTypeAttribute,
  isTypeDefinition: () => isTypeDefinition,
  isUnionType: () => isUnionType,
  isUnorderedGroup: () => isUnorderedGroup,
  isUntilToken: () => isUntilToken,
  isValueLiteral: () => isValueLiteral,
  isWildcard: () => isWildcard,
  reflection: () => reflection
});
var LangiumGrammarTerminals = {
  ID: /\^?[_a-zA-Z][\w_]*/,
  STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
  NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
  RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
  WS: /\s+/,
  ML_COMMENT: /\/\*[\s\S]*?\*\//,
  SL_COMMENT: /\/\/[^\n\r]*/
};
var AbstractRule = "AbstractRule";
function isAbstractRule(item) {
  return reflection.isInstance(item, AbstractRule);
}
var AbstractType = "AbstractType";
function isAbstractType(item) {
  return reflection.isInstance(item, AbstractType);
}
var Condition = "Condition";
function isCondition(item) {
  return reflection.isInstance(item, Condition);
}
function isFeatureName(item) {
  return isPrimitiveType(item) || item === "current" || item === "entry" || item === "extends" || item === "false" || item === "fragment" || item === "grammar" || item === "hidden" || item === "import" || item === "interface" || item === "returns" || item === "terminal" || item === "true" || item === "type" || item === "infer" || item === "infers" || item === "with" || typeof item === "string" && /\^?[_a-zA-Z][\w_]*/.test(item);
}
function isPrimitiveType(item) {
  return item === "string" || item === "number" || item === "boolean" || item === "Date" || item === "bigint";
}
var TypeDefinition = "TypeDefinition";
function isTypeDefinition(item) {
  return reflection.isInstance(item, TypeDefinition);
}
var ValueLiteral = "ValueLiteral";
function isValueLiteral(item) {
  return reflection.isInstance(item, ValueLiteral);
}
var AbstractElement = "AbstractElement";
function isAbstractElement(item) {
  return reflection.isInstance(item, AbstractElement);
}
var ArrayLiteral = "ArrayLiteral";
function isArrayLiteral(item) {
  return reflection.isInstance(item, ArrayLiteral);
}
var ArrayType = "ArrayType";
function isArrayType(item) {
  return reflection.isInstance(item, ArrayType);
}
var BooleanLiteral = "BooleanLiteral";
function isBooleanLiteral(item) {
  return reflection.isInstance(item, BooleanLiteral);
}
var Conjunction = "Conjunction";
function isConjunction(item) {
  return reflection.isInstance(item, Conjunction);
}
var Disjunction = "Disjunction";
function isDisjunction(item) {
  return reflection.isInstance(item, Disjunction);
}
var Grammar = "Grammar";
function isGrammar(item) {
  return reflection.isInstance(item, Grammar);
}
var GrammarImport = "GrammarImport";
function isGrammarImport(item) {
  return reflection.isInstance(item, GrammarImport);
}
var InferredType = "InferredType";
function isInferredType(item) {
  return reflection.isInstance(item, InferredType);
}
var Interface = "Interface";
function isInterface(item) {
  return reflection.isInstance(item, Interface);
}
var NamedArgument = "NamedArgument";
function isNamedArgument(item) {
  return reflection.isInstance(item, NamedArgument);
}
var Negation = "Negation";
function isNegation(item) {
  return reflection.isInstance(item, Negation);
}
var NumberLiteral = "NumberLiteral";
function isNumberLiteral(item) {
  return reflection.isInstance(item, NumberLiteral);
}
var Parameter = "Parameter";
function isParameter(item) {
  return reflection.isInstance(item, Parameter);
}
var ParameterReference = "ParameterReference";
function isParameterReference(item) {
  return reflection.isInstance(item, ParameterReference);
}
var ParserRule = "ParserRule";
function isParserRule(item) {
  return reflection.isInstance(item, ParserRule);
}
var ReferenceType = "ReferenceType";
function isReferenceType(item) {
  return reflection.isInstance(item, ReferenceType);
}
var ReturnType = "ReturnType";
function isReturnType(item) {
  return reflection.isInstance(item, ReturnType);
}
var SimpleType = "SimpleType";
function isSimpleType(item) {
  return reflection.isInstance(item, SimpleType);
}
var StringLiteral = "StringLiteral";
function isStringLiteral(item) {
  return reflection.isInstance(item, StringLiteral);
}
var TerminalRule = "TerminalRule";
function isTerminalRule(item) {
  return reflection.isInstance(item, TerminalRule);
}
var Type = "Type";
function isType(item) {
  return reflection.isInstance(item, Type);
}
var TypeAttribute = "TypeAttribute";
function isTypeAttribute(item) {
  return reflection.isInstance(item, TypeAttribute);
}
var UnionType = "UnionType";
function isUnionType(item) {
  return reflection.isInstance(item, UnionType);
}
var Action = "Action";
function isAction(item) {
  return reflection.isInstance(item, Action);
}
var Alternatives = "Alternatives";
function isAlternatives(item) {
  return reflection.isInstance(item, Alternatives);
}
var Assignment = "Assignment";
function isAssignment(item) {
  return reflection.isInstance(item, Assignment);
}
var CharacterRange = "CharacterRange";
function isCharacterRange(item) {
  return reflection.isInstance(item, CharacterRange);
}
var CrossReference = "CrossReference";
function isCrossReference(item) {
  return reflection.isInstance(item, CrossReference);
}
var EndOfFile = "EndOfFile";
function isEndOfFile(item) {
  return reflection.isInstance(item, EndOfFile);
}
var Group = "Group";
function isGroup(item) {
  return reflection.isInstance(item, Group);
}
var Keyword = "Keyword";
function isKeyword(item) {
  return reflection.isInstance(item, Keyword);
}
var NegatedToken = "NegatedToken";
function isNegatedToken(item) {
  return reflection.isInstance(item, NegatedToken);
}
var RegexToken = "RegexToken";
function isRegexToken(item) {
  return reflection.isInstance(item, RegexToken);
}
var RuleCall = "RuleCall";
function isRuleCall(item) {
  return reflection.isInstance(item, RuleCall);
}
var TerminalAlternatives = "TerminalAlternatives";
function isTerminalAlternatives(item) {
  return reflection.isInstance(item, TerminalAlternatives);
}
var TerminalGroup = "TerminalGroup";
function isTerminalGroup(item) {
  return reflection.isInstance(item, TerminalGroup);
}
var TerminalRuleCall = "TerminalRuleCall";
function isTerminalRuleCall(item) {
  return reflection.isInstance(item, TerminalRuleCall);
}
var UnorderedGroup = "UnorderedGroup";
function isUnorderedGroup(item) {
  return reflection.isInstance(item, UnorderedGroup);
}
var UntilToken = "UntilToken";
function isUntilToken(item) {
  return reflection.isInstance(item, UntilToken);
}
var Wildcard = "Wildcard";
function isWildcard(item) {
  return reflection.isInstance(item, Wildcard);
}
var LangiumGrammarAstReflection = class extends AbstractAstReflection {
  getAllTypes() {
    return [AbstractElement, AbstractRule, AbstractType, Action, Alternatives, ArrayLiteral, ArrayType, Assignment, BooleanLiteral, CharacterRange, Condition, Conjunction, CrossReference, Disjunction, EndOfFile, Grammar, GrammarImport, Group, InferredType, Interface, Keyword, NamedArgument, NegatedToken, Negation, NumberLiteral, Parameter, ParameterReference, ParserRule, ReferenceType, RegexToken, ReturnType, RuleCall, SimpleType, StringLiteral, TerminalAlternatives, TerminalGroup, TerminalRule, TerminalRuleCall, Type, TypeAttribute, TypeDefinition, UnionType, UnorderedGroup, UntilToken, ValueLiteral, Wildcard];
  }
  computeIsSubtype(subtype, supertype) {
    switch (subtype) {
      case Action:
      case Alternatives:
      case Assignment:
      case CharacterRange:
      case CrossReference:
      case EndOfFile:
      case Group:
      case Keyword:
      case NegatedToken:
      case RegexToken:
      case RuleCall:
      case TerminalAlternatives:
      case TerminalGroup:
      case TerminalRuleCall:
      case UnorderedGroup:
      case UntilToken:
      case Wildcard: {
        return this.isSubtype(AbstractElement, supertype);
      }
      case ArrayLiteral:
      case NumberLiteral:
      case StringLiteral: {
        return this.isSubtype(ValueLiteral, supertype);
      }
      case ArrayType:
      case ReferenceType:
      case SimpleType:
      case UnionType: {
        return this.isSubtype(TypeDefinition, supertype);
      }
      case BooleanLiteral: {
        return this.isSubtype(Condition, supertype) || this.isSubtype(ValueLiteral, supertype);
      }
      case Conjunction:
      case Disjunction:
      case Negation:
      case ParameterReference: {
        return this.isSubtype(Condition, supertype);
      }
      case InferredType:
      case Interface:
      case Type: {
        return this.isSubtype(AbstractType, supertype);
      }
      case ParserRule: {
        return this.isSubtype(AbstractRule, supertype) || this.isSubtype(AbstractType, supertype);
      }
      case TerminalRule: {
        return this.isSubtype(AbstractRule, supertype);
      }
      default: {
        return false;
      }
    }
  }
  getReferenceType(refInfo) {
    const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
    switch (referenceId) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef": {
        return AbstractType;
      }
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule": {
        return AbstractRule;
      }
      case "Grammar:usedGrammars": {
        return Grammar;
      }
      case "NamedArgument:parameter":
      case "ParameterReference:parameter": {
        return Parameter;
      }
      case "TerminalRuleCall:rule": {
        return TerminalRule;
      }
      default: {
        throw new Error(`${referenceId} is not a valid reference id.`);
      }
    }
  }
  getTypeMetaData(type) {
    switch (type) {
      case AbstractElement: {
        return {
          name: AbstractElement,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      }
      case ArrayLiteral: {
        return {
          name: ArrayLiteral,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      }
      case ArrayType: {
        return {
          name: ArrayType,
          properties: [
            { name: "elementType" }
          ]
        };
      }
      case BooleanLiteral: {
        return {
          name: BooleanLiteral,
          properties: [
            { name: "true", defaultValue: false }
          ]
        };
      }
      case Conjunction: {
        return {
          name: Conjunction,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      }
      case Disjunction: {
        return {
          name: Disjunction,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      }
      case Grammar: {
        return {
          name: Grammar,
          properties: [
            { name: "definesHiddenTokens", defaultValue: false },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "imports", defaultValue: [] },
            { name: "interfaces", defaultValue: [] },
            { name: "isDeclared", defaultValue: false },
            { name: "name" },
            { name: "rules", defaultValue: [] },
            { name: "types", defaultValue: [] },
            { name: "usedGrammars", defaultValue: [] }
          ]
        };
      }
      case GrammarImport: {
        return {
          name: GrammarImport,
          properties: [
            { name: "path" }
          ]
        };
      }
      case InferredType: {
        return {
          name: InferredType,
          properties: [
            { name: "name" }
          ]
        };
      }
      case Interface: {
        return {
          name: Interface,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      }
      case NamedArgument: {
        return {
          name: NamedArgument,
          properties: [
            { name: "calledByName", defaultValue: false },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      }
      case Negation: {
        return {
          name: Negation,
          properties: [
            { name: "value" }
          ]
        };
      }
      case NumberLiteral: {
        return {
          name: NumberLiteral,
          properties: [
            { name: "value" }
          ]
        };
      }
      case Parameter: {
        return {
          name: Parameter,
          properties: [
            { name: "name" }
          ]
        };
      }
      case ParameterReference: {
        return {
          name: ParameterReference,
          properties: [
            { name: "parameter" }
          ]
        };
      }
      case ParserRule: {
        return {
          name: ParserRule,
          properties: [
            { name: "dataType" },
            { name: "definesHiddenTokens", defaultValue: false },
            { name: "definition" },
            { name: "entry", defaultValue: false },
            { name: "fragment", defaultValue: false },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "inferredType" },
            { name: "name" },
            { name: "parameters", defaultValue: [] },
            { name: "returnType" },
            { name: "wildcard", defaultValue: false }
          ]
        };
      }
      case ReferenceType: {
        return {
          name: ReferenceType,
          properties: [
            { name: "referenceType" }
          ]
        };
      }
      case ReturnType: {
        return {
          name: ReturnType,
          properties: [
            { name: "name" }
          ]
        };
      }
      case SimpleType: {
        return {
          name: SimpleType,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      }
      case StringLiteral: {
        return {
          name: StringLiteral,
          properties: [
            { name: "value" }
          ]
        };
      }
      case TerminalRule: {
        return {
          name: TerminalRule,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: false },
            { name: "hidden", defaultValue: false },
            { name: "name" },
            { name: "type" }
          ]
        };
      }
      case Type: {
        return {
          name: Type,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      }
      case TypeAttribute: {
        return {
          name: TypeAttribute,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: false },
            { name: "name" },
            { name: "type" }
          ]
        };
      }
      case UnionType: {
        return {
          name: UnionType,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      }
      case Action: {
        return {
          name: Action,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      }
      case Alternatives: {
        return {
          name: Alternatives,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      }
      case Assignment: {
        return {
          name: Assignment,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      }
      case CharacterRange: {
        return {
          name: CharacterRange,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      }
      case CrossReference: {
        return {
          name: CrossReference,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: false },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      }
      case EndOfFile: {
        return {
          name: EndOfFile,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      }
      case Group: {
        return {
          name: Group,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      }
      case Keyword: {
        return {
          name: Keyword,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      }
      case NegatedToken: {
        return {
          name: NegatedToken,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      }
      case RegexToken: {
        return {
          name: RegexToken,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      }
      case RuleCall: {
        return {
          name: RuleCall,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      }
      case TerminalAlternatives: {
        return {
          name: TerminalAlternatives,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      }
      case TerminalGroup: {
        return {
          name: TerminalGroup,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      }
      case TerminalRuleCall: {
        return {
          name: TerminalRuleCall,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      }
      case UnorderedGroup: {
        return {
          name: UnorderedGroup,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      }
      case UntilToken: {
        return {
          name: UntilToken,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      }
      case Wildcard: {
        return {
          name: Wildcard,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      }
      default: {
        return {
          name: type,
          properties: []
        };
      }
    }
  }
};
var reflection = new LangiumGrammarAstReflection();

// node_modules/langium/lib/utils/ast-utils.js
var ast_utils_exports = {};
__export(ast_utils_exports, {
  assignMandatoryProperties: () => assignMandatoryProperties,
  copyAstNode: () => copyAstNode,
  findLocalReferences: () => findLocalReferences,
  findRootNode: () => findRootNode,
  getContainerOfType: () => getContainerOfType,
  getDocument: () => getDocument,
  hasContainerOfType: () => hasContainerOfType,
  linkContentToContainer: () => linkContentToContainer,
  streamAllContents: () => streamAllContents,
  streamAst: () => streamAst,
  streamContents: () => streamContents,
  streamReferences: () => streamReferences
});
function linkContentToContainer(node) {
  for (const [name, value] of Object.entries(node)) {
    if (!name.startsWith("$")) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (isAstNode(item)) {
            item.$container = node;
            item.$containerProperty = name;
            item.$containerIndex = index;
          }
        });
      } else if (isAstNode(value)) {
        value.$container = node;
        value.$containerProperty = name;
      }
    }
  }
}
function getContainerOfType(node, typePredicate) {
  let item = node;
  while (item) {
    if (typePredicate(item)) {
      return item;
    }
    item = item.$container;
  }
  return void 0;
}
function hasContainerOfType(node, predicate) {
  let item = node;
  while (item) {
    if (predicate(item)) {
      return true;
    }
    item = item.$container;
  }
  return false;
}
function getDocument(node) {
  const rootNode = findRootNode(node);
  const result = rootNode.$document;
  if (!result) {
    throw new Error("AST node has no document.");
  }
  return result;
}
function findRootNode(node) {
  while (node.$container) {
    node = node.$container;
  }
  return node;
}
function streamContents(node, options) {
  if (!node) {
    throw new Error("Node must be an AstNode.");
  }
  const range = options === null || options === void 0 ? void 0 : options.range;
  return new StreamImpl(() => ({
    keys: Object.keys(node),
    keyIndex: 0,
    arrayIndex: 0
  }), (state) => {
    while (state.keyIndex < state.keys.length) {
      const property = state.keys[state.keyIndex];
      if (!property.startsWith("$")) {
        const value = node[property];
        if (isAstNode(value)) {
          state.keyIndex++;
          if (isAstNodeInRange(value, range)) {
            return { done: false, value };
          }
        } else if (Array.isArray(value)) {
          while (state.arrayIndex < value.length) {
            const index = state.arrayIndex++;
            const element = value[index];
            if (isAstNode(element) && isAstNodeInRange(element, range)) {
              return { done: false, value: element };
            }
          }
          state.arrayIndex = 0;
        }
      }
      state.keyIndex++;
    }
    return DONE_RESULT;
  });
}
function streamAllContents(root, options) {
  if (!root) {
    throw new Error("Root node must be an AstNode.");
  }
  return new TreeStreamImpl(root, (node) => streamContents(node, options));
}
function streamAst(root, options) {
  if (!root) {
    throw new Error("Root node must be an AstNode.");
  } else if ((options === null || options === void 0 ? void 0 : options.range) && !isAstNodeInRange(root, options.range)) {
    return new TreeStreamImpl(root, () => []);
  }
  return new TreeStreamImpl(root, (node) => streamContents(node, options), { includeRoot: true });
}
function isAstNodeInRange(astNode, range) {
  var _a6;
  if (!range) {
    return true;
  }
  const nodeRange = (_a6 = astNode.$cstNode) === null || _a6 === void 0 ? void 0 : _a6.range;
  if (!nodeRange) {
    return false;
  }
  return inRange(nodeRange, range);
}
function streamReferences(node) {
  return new StreamImpl(() => ({
    keys: Object.keys(node),
    keyIndex: 0,
    arrayIndex: 0
  }), (state) => {
    while (state.keyIndex < state.keys.length) {
      const property = state.keys[state.keyIndex];
      if (!property.startsWith("$")) {
        const value = node[property];
        if (isReference(value)) {
          state.keyIndex++;
          return { done: false, value: { reference: value, container: node, property } };
        } else if (Array.isArray(value)) {
          while (state.arrayIndex < value.length) {
            const index = state.arrayIndex++;
            const element = value[index];
            if (isReference(element)) {
              return { done: false, value: { reference: element, container: node, property, index } };
            }
          }
          state.arrayIndex = 0;
        }
      }
      state.keyIndex++;
    }
    return DONE_RESULT;
  });
}
function findLocalReferences(targetNode, lookup = getDocument(targetNode).parseResult.value) {
  const refs = [];
  streamAst(lookup).forEach((node) => {
    streamReferences(node).forEach((refInfo) => {
      if (refInfo.reference.ref === targetNode) {
        refs.push(refInfo.reference);
      }
    });
  });
  return stream(refs);
}
function assignMandatoryProperties(reflection3, node) {
  const typeMetaData = reflection3.getTypeMetaData(node.$type);
  const genericNode = node;
  for (const property of typeMetaData.properties) {
    if (property.defaultValue !== void 0 && genericNode[property.name] === void 0) {
      genericNode[property.name] = copyDefaultValue(property.defaultValue);
    }
  }
}
function copyDefaultValue(propertyType) {
  if (Array.isArray(propertyType)) {
    return [...propertyType.map(copyDefaultValue)];
  } else {
    return propertyType;
  }
}
function copyAstNode(node, buildReference) {
  const copy = { $type: node.$type };
  for (const [name, value] of Object.entries(node)) {
    if (!name.startsWith("$")) {
      if (isAstNode(value)) {
        copy[name] = copyAstNode(value, buildReference);
      } else if (isReference(value)) {
        copy[name] = buildReference(copy, name, value.$refNode, value.$refText);
      } else if (Array.isArray(value)) {
        const copiedArray = [];
        for (const element of value) {
          if (isAstNode(element)) {
            copiedArray.push(copyAstNode(element, buildReference));
          } else if (isReference(element)) {
            copiedArray.push(buildReference(copy, name, element.$refNode, element.$refText));
          } else {
            copiedArray.push(element);
          }
        }
        copy[name] = copiedArray;
      } else {
        copy[name] = value;
      }
    }
  }
  linkContentToContainer(copy);
  return copy;
}

// node_modules/langium/lib/utils/regexp-utils.js
var regexp_utils_exports = {};
__export(regexp_utils_exports, {
  NEWLINE_REGEXP: () => NEWLINE_REGEXP,
  escapeRegExp: () => escapeRegExp,
  getCaseInsensitivePattern: () => getCaseInsensitivePattern,
  getTerminalParts: () => getTerminalParts,
  isMultilineComment: () => isMultilineComment,
  isWhitespace: () => isWhitespace,
  partialMatches: () => partialMatches,
  partialRegExp: () => partialRegExp,
  whitespaceCharacters: () => whitespaceCharacters
});

// node_modules/@chevrotain/regexp-to-ast/lib/src/utils.js
function cc(char) {
  return char.charCodeAt(0);
}
function insertToSet(item, set) {
  if (Array.isArray(item)) {
    item.forEach(function(subItem) {
      set.push(subItem);
    });
  } else {
    set.push(item);
  }
}
function addFlag(flagObj, flagKey) {
  if (flagObj[flagKey] === true) {
    throw "duplicate flag " + flagKey;
  }
  const x = flagObj[flagKey];
  flagObj[flagKey] = true;
}
function ASSERT_EXISTS(obj) {
  if (obj === void 0) {
    throw Error("Internal Error - Should never get here!");
  }
  return true;
}
function ASSERT_NEVER_REACH_HERE() {
  throw Error("Internal Error - Should never get here!");
}
function isCharacter(obj) {
  return obj["type"] === "Character";
}

// node_modules/@chevrotain/regexp-to-ast/lib/src/character-classes.js
var digitsCharCodes = [];
for (let i = cc("0"); i <= cc("9"); i++) {
  digitsCharCodes.push(i);
}
var wordCharCodes = [cc("_")].concat(digitsCharCodes);
for (let i = cc("a"); i <= cc("z"); i++) {
  wordCharCodes.push(i);
}
for (let i = cc("A"); i <= cc("Z"); i++) {
  wordCharCodes.push(i);
}
var whitespaceCodes = [
  cc(" "),
  cc("\f"),
  cc("\n"),
  cc("\r"),
  cc("	"),
  cc("\v"),
  cc("	"),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc("\u2028"),
  cc("\u2029"),
  cc(" "),
  cc(" "),
  cc("　"),
  cc("\uFEFF")
];

// node_modules/@chevrotain/regexp-to-ast/lib/src/regexp-parser.js
var hexDigitPattern = /[0-9a-fA-F]/;
var decimalPattern = /[0-9]/;
var decimalPatternNoZero = /[1-9]/;
var RegExpParser = class {
  constructor() {
    this.idx = 0;
    this.input = "";
    this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(newState2) {
    this.idx = newState2.idx;
    this.input = newState2.input;
    this.groupIdx = newState2.groupIdx;
  }
  pattern(input) {
    this.idx = 0;
    this.input = input;
    this.groupIdx = 0;
    this.consumeChar("/");
    const value = this.disjunction();
    this.consumeChar("/");
    const flags = {
      type: "Flags",
      loc: { begin: this.idx, end: input.length },
      global: false,
      ignoreCase: false,
      multiLine: false,
      unicode: false,
      sticky: false
    };
    while (this.isRegExpFlag()) {
      switch (this.popChar()) {
        case "g":
          addFlag(flags, "global");
          break;
        case "i":
          addFlag(flags, "ignoreCase");
          break;
        case "m":
          addFlag(flags, "multiLine");
          break;
        case "u":
          addFlag(flags, "unicode");
          break;
        case "y":
          addFlag(flags, "sticky");
          break;
      }
    }
    if (this.idx !== this.input.length) {
      throw Error("Redundant input: " + this.input.substring(this.idx));
    }
    return {
      type: "Pattern",
      flags,
      value,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const alts = [];
    const begin = this.idx;
    alts.push(this.alternative());
    while (this.peekChar() === "|") {
      this.consumeChar("|");
      alts.push(this.alternative());
    }
    return { type: "Disjunction", value: alts, loc: this.loc(begin) };
  }
  alternative() {
    const terms = [];
    const begin = this.idx;
    while (this.isTerm()) {
      terms.push(this.term());
    }
    return { type: "Alternative", value: terms, loc: this.loc(begin) };
  }
  term() {
    if (this.isAssertion()) {
      return this.assertion();
    } else {
      return this.atom();
    }
  }
  assertion() {
    const begin = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(begin)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(begin) };
      // '\b' or '\B'
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(begin)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(begin)
            };
        }
        throw Error("Invalid Assertion Escape");
      // '(?=' or '(?!'
      case "(":
        this.consumeChar("?");
        let type;
        switch (this.popChar()) {
          case "=":
            type = "Lookahead";
            break;
          case "!":
            type = "NegativeLookahead";
            break;
        }
        ASSERT_EXISTS(type);
        const disjunction = this.disjunction();
        this.consumeChar(")");
        return {
          type,
          value: disjunction,
          loc: this.loc(begin)
        };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  quantifier(isBacktracking = false) {
    let range = void 0;
    const begin = this.idx;
    switch (this.popChar()) {
      case "*":
        range = {
          atLeast: 0,
          atMost: Infinity
        };
        break;
      case "+":
        range = {
          atLeast: 1,
          atMost: Infinity
        };
        break;
      case "?":
        range = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const atLeast = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            range = {
              atLeast,
              atMost: atLeast
            };
            break;
          case ",":
            let atMost;
            if (this.isDigit()) {
              atMost = this.integerIncludingZero();
              range = {
                atLeast,
                atMost
              };
            } else {
              range = {
                atLeast,
                atMost: Infinity
              };
            }
            this.consumeChar("}");
            break;
        }
        if (isBacktracking === true && range === void 0) {
          return void 0;
        }
        ASSERT_EXISTS(range);
        break;
    }
    if (isBacktracking === true && range === void 0) {
      return void 0;
    }
    if (ASSERT_EXISTS(range)) {
      if (this.peekChar(0) === "?") {
        this.consumeChar("?");
        range.greedy = false;
      } else {
        range.greedy = true;
      }
      range.type = "Quantifier";
      range.loc = this.loc(begin);
      return range;
    }
  }
  atom() {
    let atom2;
    const begin = this.idx;
    switch (this.peekChar()) {
      case ".":
        atom2 = this.dotAll();
        break;
      case "\\":
        atom2 = this.atomEscape();
        break;
      case "[":
        atom2 = this.characterClass();
        break;
      case "(":
        atom2 = this.group();
        break;
    }
    if (atom2 === void 0 && this.isPatternCharacter()) {
      atom2 = this.patternCharacter();
    }
    if (ASSERT_EXISTS(atom2)) {
      atom2.loc = this.loc(begin);
      if (this.isQuantifier()) {
        atom2.quantifier = this.quantifier();
      }
      return atom2;
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  dotAll() {
    this.consumeChar(".");
    return {
      type: "Set",
      complement: true,
      value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
    };
  }
  atomEscape() {
    this.consumeChar("\\");
    switch (this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    const value = this.positiveInteger();
    return { type: "GroupBackReference", value };
  }
  characterClassEscape() {
    let set;
    let complement = false;
    switch (this.popChar()) {
      case "d":
        set = digitsCharCodes;
        break;
      case "D":
        set = digitsCharCodes;
        complement = true;
        break;
      case "s":
        set = whitespaceCodes;
        break;
      case "S":
        set = whitespaceCodes;
        complement = true;
        break;
      case "w":
        set = wordCharCodes;
        break;
      case "W":
        set = wordCharCodes;
        complement = true;
        break;
    }
    if (ASSERT_EXISTS(set)) {
      return { type: "Set", value: set, complement };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  controlEscapeAtom() {
    let escapeCode;
    switch (this.popChar()) {
      case "f":
        escapeCode = cc("\f");
        break;
      case "n":
        escapeCode = cc("\n");
        break;
      case "r":
        escapeCode = cc("\r");
        break;
      case "t":
        escapeCode = cc("	");
        break;
      case "v":
        escapeCode = cc("\v");
        break;
    }
    if (ASSERT_EXISTS(escapeCode)) {
      return { type: "Character", value: escapeCode };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const letter = this.popChar();
    if (/[a-zA-Z]/.test(letter) === false) {
      throw Error("Invalid ");
    }
    const letterCode = letter.toUpperCase().charCodeAt(0) - 64;
    return { type: "Character", value: letterCode };
  }
  nulCharacterAtom() {
    this.consumeChar("0");
    return { type: "Character", value: cc("\0") };
  }
  hexEscapeSequenceAtom() {
    this.consumeChar("x");
    return this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    this.consumeChar("u");
    return this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const escapedChar = this.popChar();
    return { type: "Character", value: cc(escapedChar) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "\n":
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case "]":
        throw Error("TBD");
      default:
        const nextChar = this.popChar();
        return { type: "Character", value: cc(nextChar) };
    }
  }
  characterClass() {
    const set = [];
    let complement = false;
    this.consumeChar("[");
    if (this.peekChar(0) === "^") {
      this.consumeChar("^");
      complement = true;
    }
    while (this.isClassAtom()) {
      const from = this.classAtom();
      const isFromSingleChar = from.type === "Character";
      if (isCharacter(from) && this.isRangeDash()) {
        this.consumeChar("-");
        const to = this.classAtom();
        const isToSingleChar = to.type === "Character";
        if (isCharacter(to)) {
          if (to.value < from.value) {
            throw Error("Range out of order in character class");
          }
          set.push({ from: from.value, to: to.value });
        } else {
          insertToSet(from.value, set);
          set.push(cc("-"));
          insertToSet(to.value, set);
        }
      } else {
        insertToSet(from.value, set);
      }
    }
    this.consumeChar("]");
    return { type: "Set", complement, value: set };
  }
  classAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "]":
      // istanbul ignore next
      case "\n":
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    this.consumeChar("\\");
    switch (this.peekChar()) {
      // Matches a backspace.
      // (Not to be confused with \b word boundary outside characterClass)
      case "b":
        this.consumeChar("b");
        return { type: "Character", value: cc("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let capturing = true;
    this.consumeChar("(");
    switch (this.peekChar(0)) {
      case "?":
        this.consumeChar("?");
        this.consumeChar(":");
        capturing = false;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const value = this.disjunction();
    this.consumeChar(")");
    const groupAst = {
      type: "Group",
      capturing,
      value
    };
    if (capturing) {
      groupAst["idx"] = this.groupIdx;
    }
    return groupAst;
  }
  positiveInteger() {
    let number = this.popChar();
    if (decimalPatternNoZero.test(number) === false) {
      throw Error("Expecting a positive integer");
    }
    while (decimalPattern.test(this.peekChar(0))) {
      number += this.popChar();
    }
    return parseInt(number, 10);
  }
  integerIncludingZero() {
    let number = this.popChar();
    if (decimalPattern.test(number) === false) {
      throw Error("Expecting an integer");
    }
    while (decimalPattern.test(this.peekChar(0))) {
      number += this.popChar();
    }
    return parseInt(number, 10);
  }
  patternCharacter() {
    const nextChar = this.popChar();
    switch (nextChar) {
      // istanbul ignore next
      case "\n":
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "^":
      // istanbul ignore next
      case "$":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case ".":
      // istanbul ignore next
      case "*":
      // istanbul ignore next
      case "+":
      // istanbul ignore next
      case "?":
      // istanbul ignore next
      case "(":
      // istanbul ignore next
      case ")":
      // istanbul ignore next
      case "[":
      // istanbul ignore next
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: cc(nextChar) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return true;
      default:
        return false;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return decimalPattern.test(this.peekChar(0));
  }
  isClassAtom(howMuch = 0) {
    switch (this.peekChar(howMuch)) {
      case "]":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter()) {
      return true;
    }
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      // atomEscape
      case "[":
      // characterClass
      // TODO: isAtom must be called before isAssertion - disambiguate
      case "(":
        return true;
      default:
        return false;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return true;
      // '\b' or '\B'
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return true;
          default:
            return false;
        }
      // '(?=' or '(?!'
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return false;
    }
  }
  isQuantifier() {
    const prevState = this.saveState();
    try {
      return this.quantifier(true) !== void 0;
    } catch (e) {
      return false;
    } finally {
      this.restoreState(prevState);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  parseHexDigits(howMany) {
    let hexString = "";
    for (let i = 0; i < howMany; i++) {
      const hexChar = this.popChar();
      if (hexDigitPattern.test(hexChar) === false) {
        throw Error("Expecting a HexDecimal digits");
      }
      hexString += hexChar;
    }
    const charCode = parseInt(hexString, 16);
    return { type: "Character", value: charCode };
  }
  peekChar(howMuch = 0) {
    return this.input[this.idx + howMuch];
  }
  popChar() {
    const nextChar = this.peekChar(0);
    this.consumeChar(void 0);
    return nextChar;
  }
  consumeChar(char) {
    if (char !== void 0 && this.input[this.idx] !== char) {
      throw Error("Expected: '" + char + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    }
    if (this.idx >= this.input.length) {
      throw Error("Unexpected end of input");
    }
    this.idx++;
  }
  loc(begin) {
    return { begin, end: this.idx };
  }
};

// node_modules/@chevrotain/regexp-to-ast/lib/src/base-regexp-visitor.js
var BaseRegExpVisitor = class {
  visitChildren(node) {
    for (const key in node) {
      const child = node[key];
      if (node.hasOwnProperty(key)) {
        if (child.type !== void 0) {
          this.visit(child);
        } else if (Array.isArray(child)) {
          child.forEach((subChild) => {
            this.visit(subChild);
          }, this);
        }
      }
    }
  }
  visit(node) {
    switch (node.type) {
      case "Pattern":
        this.visitPattern(node);
        break;
      case "Flags":
        this.visitFlags(node);
        break;
      case "Disjunction":
        this.visitDisjunction(node);
        break;
      case "Alternative":
        this.visitAlternative(node);
        break;
      case "StartAnchor":
        this.visitStartAnchor(node);
        break;
      case "EndAnchor":
        this.visitEndAnchor(node);
        break;
      case "WordBoundary":
        this.visitWordBoundary(node);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(node);
        break;
      case "Lookahead":
        this.visitLookahead(node);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(node);
        break;
      case "Character":
        this.visitCharacter(node);
        break;
      case "Set":
        this.visitSet(node);
        break;
      case "Group":
        this.visitGroup(node);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(node);
        break;
      case "Quantifier":
        this.visitQuantifier(node);
        break;
    }
    this.visitChildren(node);
  }
  visitPattern(node) {
  }
  visitFlags(node) {
  }
  visitDisjunction(node) {
  }
  visitAlternative(node) {
  }
  // Assertion
  visitStartAnchor(node) {
  }
  visitEndAnchor(node) {
  }
  visitWordBoundary(node) {
  }
  visitNonWordBoundary(node) {
  }
  visitLookahead(node) {
  }
  visitNegativeLookahead(node) {
  }
  // atoms
  visitCharacter(node) {
  }
  visitSet(node) {
  }
  visitGroup(node) {
  }
  visitGroupBackReference(node) {
  }
  visitQuantifier(node) {
  }
};

// node_modules/langium/lib/utils/regexp-utils.js
var NEWLINE_REGEXP = /\r?\n/gm;
var regexpParser = new RegExpParser();
var TerminalRegExpVisitor = class extends BaseRegExpVisitor {
  constructor() {
    super(...arguments);
    this.isStarting = true;
    this.endRegexpStack = [];
    this.multiline = false;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(regex) {
    this.multiline = false;
    this.regex = regex;
    this.startRegexp = "";
    this.isStarting = true;
    this.endRegexpStack = [];
  }
  visitGroup(node) {
    if (node.quantifier) {
      this.isStarting = false;
      this.endRegexpStack = [];
    }
  }
  visitCharacter(node) {
    const char = String.fromCharCode(node.value);
    if (!this.multiline && char === "\n") {
      this.multiline = true;
    }
    if (node.quantifier) {
      this.isStarting = false;
      this.endRegexpStack = [];
    } else {
      const escapedChar = escapeRegExp(char);
      this.endRegexpStack.push(escapedChar);
      if (this.isStarting) {
        this.startRegexp += escapedChar;
      }
    }
  }
  visitSet(node) {
    if (!this.multiline) {
      const set = this.regex.substring(node.loc.begin, node.loc.end);
      const regex = new RegExp(set);
      this.multiline = Boolean("\n".match(regex));
    }
    if (node.quantifier) {
      this.isStarting = false;
      this.endRegexpStack = [];
    } else {
      const set = this.regex.substring(node.loc.begin, node.loc.end);
      this.endRegexpStack.push(set);
      if (this.isStarting) {
        this.startRegexp += set;
      }
    }
  }
  visitChildren(node) {
    if (node.type === "Group") {
      const group = node;
      if (group.quantifier) {
        return;
      }
    }
    super.visitChildren(node);
  }
};
var visitor = new TerminalRegExpVisitor();
function getTerminalParts(regexp) {
  try {
    if (typeof regexp !== "string") {
      regexp = regexp.source;
    }
    regexp = `/${regexp}/`;
    const pattern = regexpParser.pattern(regexp);
    const parts = [];
    for (const alternative of pattern.value.value) {
      visitor.reset(regexp);
      visitor.visit(alternative);
      parts.push({
        start: visitor.startRegexp,
        end: visitor.endRegex
      });
    }
    return parts;
  } catch (_a6) {
    return [];
  }
}
function isMultilineComment(regexp) {
  try {
    if (typeof regexp === "string") {
      regexp = new RegExp(regexp);
    }
    regexp = regexp.toString();
    visitor.reset(regexp);
    visitor.visit(regexpParser.pattern(regexp));
    return visitor.multiline;
  } catch (_a6) {
    return false;
  }
}
var whitespaceCharacters = "\f\n\r	\v              \u2028\u2029  　\uFEFF".split("");
function isWhitespace(value) {
  const regexp = typeof value === "string" ? new RegExp(value) : value;
  return whitespaceCharacters.some((ws) => regexp.test(ws));
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getCaseInsensitivePattern(keyword) {
  return Array.prototype.map.call(keyword, (letter) => /\w/.test(letter) ? `[${letter.toLowerCase()}${letter.toUpperCase()}]` : escapeRegExp(letter)).join("");
}
function partialMatches(regex, input) {
  const partial = partialRegExp(regex);
  const match = input.match(partial);
  return !!match && match[0].length > 0;
}
function partialRegExp(regex) {
  if (typeof regex === "string") {
    regex = new RegExp(regex);
  }
  const re = regex, source = regex.source;
  let i = 0;
  function process2() {
    let result = "", tmp;
    function appendRaw(nbChars) {
      result += source.substr(i, nbChars);
      i += nbChars;
    }
    function appendOptional(nbChars) {
      result += "(?:" + source.substr(i, nbChars) + "|$)";
      i += nbChars;
    }
    while (i < source.length) {
      switch (source[i]) {
        case "\\":
          switch (source[i + 1]) {
            case "c":
              appendOptional(3);
              break;
            case "x":
              appendOptional(4);
              break;
            case "u":
              if (re.unicode) {
                if (source[i + 2] === "{") {
                  appendOptional(source.indexOf("}", i) - i + 1);
                } else {
                  appendOptional(6);
                }
              } else {
                appendOptional(2);
              }
              break;
            case "p":
            case "P":
              if (re.unicode) {
                appendOptional(source.indexOf("}", i) - i + 1);
              } else {
                appendOptional(2);
              }
              break;
            case "k":
              appendOptional(source.indexOf(">", i) - i + 1);
              break;
            default:
              appendOptional(2);
              break;
          }
          break;
        case "[":
          tmp = /\[(?:\\.|.)*?\]/g;
          tmp.lastIndex = i;
          tmp = tmp.exec(source) || [];
          appendOptional(tmp[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          appendRaw(1);
          break;
        case "{":
          tmp = /\{\d+,?\d*\}/g;
          tmp.lastIndex = i;
          tmp = tmp.exec(source);
          if (tmp) {
            appendRaw(tmp[0].length);
          } else {
            appendOptional(1);
          }
          break;
        case "(":
          if (source[i + 1] === "?") {
            switch (source[i + 2]) {
              case ":":
                result += "(?:";
                i += 3;
                result += process2() + "|$)";
                break;
              case "=":
                result += "(?=";
                i += 3;
                result += process2() + ")";
                break;
              case "!":
                tmp = i;
                i += 3;
                process2();
                result += source.substr(tmp, i - tmp);
                break;
              case "<":
                switch (source[i + 3]) {
                  case "=":
                  case "!":
                    tmp = i;
                    i += 4;
                    process2();
                    result += source.substr(tmp, i - tmp);
                    break;
                  default:
                    appendRaw(source.indexOf(">", i) - i + 1);
                    result += process2() + "|$)";
                    break;
                }
                break;
            }
          } else {
            appendRaw(1);
            result += process2() + "|$)";
          }
          break;
        case ")":
          ++i;
          return result;
        default:
          appendOptional(1);
          break;
      }
    }
    return result;
  }
  return new RegExp(process2(), regex.flags);
}

// node_modules/langium/lib/utils/grammar-utils.js
function getEntryRule(grammar) {
  return grammar.rules.find((e) => isParserRule(e) && e.entry);
}
function getHiddenRules(grammar) {
  return grammar.rules.filter((e) => isTerminalRule(e) && e.hidden);
}
function getAllReachableRules(grammar, allTerminals) {
  const ruleNames = /* @__PURE__ */ new Set();
  const entryRule = getEntryRule(grammar);
  if (!entryRule) {
    return new Set(grammar.rules);
  }
  const topMostRules = [entryRule].concat(getHiddenRules(grammar));
  for (const rule of topMostRules) {
    ruleDfs(rule, ruleNames, allTerminals);
  }
  const rules = /* @__PURE__ */ new Set();
  for (const rule of grammar.rules) {
    if (ruleNames.has(rule.name) || isTerminalRule(rule) && rule.hidden) {
      rules.add(rule);
    }
  }
  return rules;
}
function ruleDfs(rule, visitedSet, allTerminals) {
  visitedSet.add(rule.name);
  streamAllContents(rule).forEach((node) => {
    if (isRuleCall(node) || allTerminals && isTerminalRuleCall(node)) {
      const refRule = node.rule.ref;
      if (refRule && !visitedSet.has(refRule.name)) {
        ruleDfs(refRule, visitedSet, allTerminals);
      }
    }
  });
}
function getCrossReferenceTerminal(crossRef) {
  if (crossRef.terminal) {
    return crossRef.terminal;
  } else if (crossRef.type.ref) {
    const nameAssigment = findNameAssignment(crossRef.type.ref);
    return nameAssigment === null || nameAssigment === void 0 ? void 0 : nameAssigment.terminal;
  }
  return void 0;
}
function isCommentTerminal(terminalRule) {
  return terminalRule.hidden && !isWhitespace(terminalRegex(terminalRule));
}
function findNodesForProperty(node, property) {
  if (!node || !property) {
    return [];
  }
  return findNodesForPropertyInternal(node, property, node.astNode, true);
}
function findNodeForProperty(node, property, index) {
  if (!node || !property) {
    return void 0;
  }
  const nodes = findNodesForPropertyInternal(node, property, node.astNode, true);
  if (nodes.length === 0) {
    return void 0;
  }
  if (index !== void 0) {
    index = Math.max(0, Math.min(index, nodes.length - 1));
  } else {
    index = 0;
  }
  return nodes[index];
}
function findNodesForPropertyInternal(node, property, element, first2) {
  if (!first2) {
    const nodeFeature = getContainerOfType(node.grammarSource, isAssignment);
    if (nodeFeature && nodeFeature.feature === property) {
      return [node];
    }
  }
  if (isCompositeCstNode(node) && node.astNode === element) {
    return node.content.flatMap((e) => findNodesForPropertyInternal(e, property, element, false));
  }
  return [];
}
function findNodesForKeyword(node, keyword) {
  if (!node) {
    return [];
  }
  return findNodesForKeywordInternal(node, keyword, node === null || node === void 0 ? void 0 : node.astNode);
}
function findNodeForKeyword(node, keyword, index) {
  if (!node) {
    return void 0;
  }
  const nodes = findNodesForKeywordInternal(node, keyword, node === null || node === void 0 ? void 0 : node.astNode);
  if (nodes.length === 0) {
    return void 0;
  }
  if (index !== void 0) {
    index = Math.max(0, Math.min(index, nodes.length - 1));
  } else {
    index = 0;
  }
  return nodes[index];
}
function findNodesForKeywordInternal(node, keyword, element) {
  if (node.astNode !== element) {
    return [];
  }
  if (isKeyword(node.grammarSource) && node.grammarSource.value === keyword) {
    return [node];
  }
  const treeIterator = streamCst(node).iterator();
  let result;
  const keywordNodes = [];
  do {
    result = treeIterator.next();
    if (!result.done) {
      const childNode = result.value;
      if (childNode.astNode === element) {
        if (isKeyword(childNode.grammarSource) && childNode.grammarSource.value === keyword) {
          keywordNodes.push(childNode);
        }
      } else {
        treeIterator.prune();
      }
    }
  } while (!result.done);
  return keywordNodes;
}
function findAssignment(cstNode) {
  var _a6;
  const astNode = cstNode.astNode;
  while (astNode === ((_a6 = cstNode.container) === null || _a6 === void 0 ? void 0 : _a6.astNode)) {
    const assignment = getContainerOfType(cstNode.grammarSource, isAssignment);
    if (assignment) {
      return assignment;
    }
    cstNode = cstNode.container;
  }
  return void 0;
}
function findNameAssignment(type) {
  let startNode = type;
  if (isInferredType(startNode)) {
    if (isAction(startNode.$container)) {
      startNode = startNode.$container.$container;
    } else if (isParserRule(startNode.$container)) {
      startNode = startNode.$container;
    } else {
      assertUnreachable(startNode.$container);
    }
  }
  return findNameAssignmentInternal(type, startNode, /* @__PURE__ */ new Map());
}
function findNameAssignmentInternal(type, startNode, cache) {
  var _a6;
  function go(node, refType) {
    let childAssignment = void 0;
    const parentAssignment = getContainerOfType(node, isAssignment);
    if (!parentAssignment) {
      childAssignment = findNameAssignmentInternal(refType, refType, cache);
    }
    cache.set(type, childAssignment);
    return childAssignment;
  }
  if (cache.has(type)) {
    return cache.get(type);
  }
  cache.set(type, void 0);
  for (const node of streamAllContents(startNode)) {
    if (isAssignment(node) && node.feature.toLowerCase() === "name") {
      cache.set(type, node);
      return node;
    } else if (isRuleCall(node) && isParserRule(node.rule.ref)) {
      return go(node, node.rule.ref);
    } else if (isSimpleType(node) && ((_a6 = node.typeRef) === null || _a6 === void 0 ? void 0 : _a6.ref)) {
      return go(node, node.typeRef.ref);
    }
  }
  return void 0;
}
function getActionAtElement(element) {
  const parent = element.$container;
  if (isGroup(parent)) {
    const elements = parent.elements;
    const index = elements.indexOf(element);
    for (let i = index - 1; i >= 0; i--) {
      const item = elements[i];
      if (isAction(item)) {
        return item;
      } else {
        const action = streamAllContents(elements[i]).find(isAction);
        if (action) {
          return action;
        }
      }
    }
  }
  if (isAbstractElement(parent)) {
    return getActionAtElement(parent);
  } else {
    return void 0;
  }
}
function isOptionalCardinality(cardinality, element) {
  return cardinality === "?" || cardinality === "*" || isGroup(element) && Boolean(element.guardCondition);
}
function isArrayCardinality(cardinality) {
  return cardinality === "*" || cardinality === "+";
}
function isArrayOperator(operator) {
  return operator === "+=";
}
function isDataTypeRule(rule) {
  return isDataTypeRuleInternal(rule, /* @__PURE__ */ new Set());
}
function isDataTypeRuleInternal(rule, visited) {
  if (visited.has(rule)) {
    return true;
  } else {
    visited.add(rule);
  }
  for (const node of streamAllContents(rule)) {
    if (isRuleCall(node)) {
      if (!node.rule.ref) {
        return false;
      }
      if (isParserRule(node.rule.ref) && !isDataTypeRuleInternal(node.rule.ref, visited)) {
        return false;
      }
    } else if (isAssignment(node)) {
      return false;
    } else if (isAction(node)) {
      return false;
    }
  }
  return Boolean(rule.definition);
}
function isDataType(type) {
  return isDataTypeInternal(type.type, /* @__PURE__ */ new Set());
}
function isDataTypeInternal(type, visited) {
  if (visited.has(type)) {
    return true;
  } else {
    visited.add(type);
  }
  if (isArrayType(type)) {
    return false;
  } else if (isReferenceType(type)) {
    return false;
  } else if (isUnionType(type)) {
    return type.types.every((e) => isDataTypeInternal(e, visited));
  } else if (isSimpleType(type)) {
    if (type.primitiveType !== void 0) {
      return true;
    } else if (type.stringType !== void 0) {
      return true;
    } else if (type.typeRef !== void 0) {
      const ref = type.typeRef.ref;
      if (isType(ref)) {
        return isDataTypeInternal(ref.type, visited);
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function getExplicitRuleType(rule) {
  if (rule.inferredType) {
    return rule.inferredType.name;
  } else if (rule.dataType) {
    return rule.dataType;
  } else if (rule.returnType) {
    const refType = rule.returnType.ref;
    if (refType) {
      if (isParserRule(refType)) {
        return refType.name;
      } else if (isInterface(refType) || isType(refType)) {
        return refType.name;
      }
    }
  }
  return void 0;
}
function getTypeName(type) {
  var _a6;
  if (isParserRule(type)) {
    return isDataTypeRule(type) ? type.name : (_a6 = getExplicitRuleType(type)) !== null && _a6 !== void 0 ? _a6 : type.name;
  } else if (isInterface(type) || isType(type) || isReturnType(type)) {
    return type.name;
  } else if (isAction(type)) {
    const actionType = getActionType(type);
    if (actionType) {
      return actionType;
    }
  } else if (isInferredType(type)) {
    return type.name;
  }
  throw new Error("Cannot get name of Unknown Type");
}
function getActionType(action) {
  var _a6;
  if (action.inferredType) {
    return action.inferredType.name;
  } else if ((_a6 = action.type) === null || _a6 === void 0 ? void 0 : _a6.ref) {
    return getTypeName(action.type.ref);
  }
  return void 0;
}
function getRuleTypeName(rule) {
  var _a6, _b, _c;
  if (isTerminalRule(rule)) {
    return (_b = (_a6 = rule.type) === null || _a6 === void 0 ? void 0 : _a6.name) !== null && _b !== void 0 ? _b : "string";
  } else {
    return isDataTypeRule(rule) ? rule.name : (_c = getExplicitRuleType(rule)) !== null && _c !== void 0 ? _c : rule.name;
  }
}
function getRuleType(rule) {
  var _a6, _b, _c;
  if (isTerminalRule(rule)) {
    return (_b = (_a6 = rule.type) === null || _a6 === void 0 ? void 0 : _a6.name) !== null && _b !== void 0 ? _b : "string";
  } else {
    return (_c = getExplicitRuleType(rule)) !== null && _c !== void 0 ? _c : rule.name;
  }
}
function terminalRegex(terminalRule) {
  const flags = {
    s: false,
    i: false,
    u: false
  };
  const source = abstractElementToRegex(terminalRule.definition, flags);
  const flagText = Object.entries(flags).filter(([, value]) => value).map(([name]) => name).join("");
  return new RegExp(source, flagText);
}
var WILDCARD = /[\s\S]/.source;
function abstractElementToRegex(element, flags) {
  if (isTerminalAlternatives(element)) {
    return terminalAlternativesToRegex(element);
  } else if (isTerminalGroup(element)) {
    return terminalGroupToRegex(element);
  } else if (isCharacterRange(element)) {
    return characterRangeToRegex(element);
  } else if (isTerminalRuleCall(element)) {
    const rule = element.rule.ref;
    if (!rule) {
      throw new Error("Missing rule reference.");
    }
    return withCardinality(abstractElementToRegex(rule.definition), {
      cardinality: element.cardinality,
      lookahead: element.lookahead
    });
  } else if (isNegatedToken(element)) {
    return negateTokenToRegex(element);
  } else if (isUntilToken(element)) {
    return untilTokenToRegex(element);
  } else if (isRegexToken(element)) {
    const lastSlash = element.regex.lastIndexOf("/");
    const source = element.regex.substring(1, lastSlash);
    const regexFlags = element.regex.substring(lastSlash + 1);
    if (flags) {
      flags.i = regexFlags.includes("i");
      flags.s = regexFlags.includes("s");
      flags.u = regexFlags.includes("u");
    }
    return withCardinality(source, {
      cardinality: element.cardinality,
      lookahead: element.lookahead,
      wrap: false
    });
  } else if (isWildcard(element)) {
    return withCardinality(WILDCARD, {
      cardinality: element.cardinality,
      lookahead: element.lookahead
    });
  } else {
    throw new Error(`Invalid terminal element: ${element === null || element === void 0 ? void 0 : element.$type}`);
  }
}
function terminalAlternativesToRegex(alternatives) {
  return withCardinality(alternatives.elements.map((e) => abstractElementToRegex(e)).join("|"), {
    cardinality: alternatives.cardinality,
    lookahead: alternatives.lookahead
  });
}
function terminalGroupToRegex(group) {
  return withCardinality(group.elements.map((e) => abstractElementToRegex(e)).join(""), {
    cardinality: group.cardinality,
    lookahead: group.lookahead
  });
}
function untilTokenToRegex(until) {
  return withCardinality(`${WILDCARD}*?${abstractElementToRegex(until.terminal)}`, {
    cardinality: until.cardinality,
    lookahead: until.lookahead
  });
}
function negateTokenToRegex(negate) {
  return withCardinality(`(?!${abstractElementToRegex(negate.terminal)})${WILDCARD}*?`, {
    cardinality: negate.cardinality,
    lookahead: negate.lookahead
  });
}
function characterRangeToRegex(range) {
  if (range.right) {
    return withCardinality(`[${keywordToRegex(range.left)}-${keywordToRegex(range.right)}]`, {
      cardinality: range.cardinality,
      lookahead: range.lookahead,
      wrap: false
    });
  }
  return withCardinality(keywordToRegex(range.left), {
    cardinality: range.cardinality,
    lookahead: range.lookahead,
    wrap: false
  });
}
function keywordToRegex(keyword) {
  return escapeRegExp(keyword.value);
}
function withCardinality(regex, options) {
  var _a6;
  if (options.wrap !== false || options.lookahead) {
    regex = `(${(_a6 = options.lookahead) !== null && _a6 !== void 0 ? _a6 : ""}${regex})`;
  }
  if (options.cardinality) {
    return `${regex}${options.cardinality}`;
  }
  return regex;
}

// node_modules/langium/lib/languages/grammar-config.js
function createGrammarConfig(services) {
  const rules = [];
  const grammar = services.Grammar;
  for (const rule of grammar.rules) {
    if (isTerminalRule(rule) && isCommentTerminal(rule) && isMultilineComment(terminalRegex(rule))) {
      rules.push(rule.name);
    }
  }
  return {
    multilineCommentRules: rules,
    nameRegexp: DefaultNameRegexp
  };
}

// node_modules/@chevrotain/utils/lib/src/print.js
function PRINT_ERROR(msg) {
  if (console && console.error) {
    console.error(`Error: ${msg}`);
  }
}
function PRINT_WARNING(msg) {
  if (console && console.warn) {
    console.warn(`Warning: ${msg}`);
  }
}

// node_modules/@chevrotain/utils/lib/src/timer.js
function timer(func) {
  const start = (/* @__PURE__ */ new Date()).getTime();
  const val = func();
  const end = (/* @__PURE__ */ new Date()).getTime();
  const total = end - start;
  return { time: total, value: val };
}

// node_modules/@chevrotain/utils/lib/src/to-fast-properties.js
function toFastProperties(toBecomeFast) {
  function FakeConstructor() {
  }
  FakeConstructor.prototype = toBecomeFast;
  const fakeInstance = new FakeConstructor();
  function fakeAccess() {
    return typeof fakeInstance.bar;
  }
  fakeAccess();
  fakeAccess();
  if (1)
    return toBecomeFast;
  (0, eval)(toBecomeFast);
}

// node_modules/@chevrotain/gast/lib/src/model.js
function tokenLabel(tokType) {
  if (hasTokenLabel(tokType)) {
    return tokType.LABEL;
  } else {
    return tokType.name;
  }
}
function hasTokenLabel(obj) {
  return isString_default(obj.LABEL) && obj.LABEL !== "";
}
var AbstractProduction = class {
  get definition() {
    return this._definition;
  }
  set definition(value) {
    this._definition = value;
  }
  constructor(_definition) {
    this._definition = _definition;
  }
  accept(visitor2) {
    visitor2.visit(this);
    forEach_default(this.definition, (prod) => {
      prod.accept(visitor2);
    });
  }
};
var NonTerminal = class extends AbstractProduction {
  constructor(options) {
    super([]);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
  set definition(definition) {
  }
  get definition() {
    if (this.referencedRule !== void 0) {
      return this.referencedRule.definition;
    }
    return [];
  }
  accept(visitor2) {
    visitor2.visit(this);
  }
};
var Rule = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.orgText = "";
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Alternative = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.ignoreAmbiguities = false;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Option = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionMandatory = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionMandatoryWithSeparator = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Repetition = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionWithSeparator = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Alternation = class extends AbstractProduction {
  get definition() {
    return this._definition;
  }
  set definition(value) {
    this._definition = value;
  }
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    this.ignoreAmbiguities = false;
    this.hasPredicates = false;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Terminal = class {
  constructor(options) {
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
  accept(visitor2) {
    visitor2.visit(this);
  }
};
function serializeGrammar(topRules) {
  return map_default(topRules, serializeProduction);
}
function serializeProduction(node) {
  function convertDefinition(definition) {
    return map_default(definition, serializeProduction);
  }
  if (node instanceof NonTerminal) {
    const serializedNonTerminal = {
      type: "NonTerminal",
      name: node.nonTerminalName,
      idx: node.idx
    };
    if (isString_default(node.label)) {
      serializedNonTerminal.label = node.label;
    }
    return serializedNonTerminal;
  } else if (node instanceof Alternative) {
    return {
      type: "Alternative",
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Option) {
    return {
      type: "Option",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionMandatory) {
    return {
      type: "RepetitionMandatory",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionMandatoryWithSeparator) {
    return {
      type: "RepetitionMandatoryWithSeparator",
      idx: node.idx,
      separator: serializeProduction(new Terminal({ terminalType: node.separator })),
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionWithSeparator) {
    return {
      type: "RepetitionWithSeparator",
      idx: node.idx,
      separator: serializeProduction(new Terminal({ terminalType: node.separator })),
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Repetition) {
    return {
      type: "Repetition",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Alternation) {
    return {
      type: "Alternation",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Terminal) {
    const serializedTerminal = {
      type: "Terminal",
      name: node.terminalType.name,
      label: tokenLabel(node.terminalType),
      idx: node.idx
    };
    if (isString_default(node.label)) {
      serializedTerminal.terminalLabel = node.label;
    }
    const pattern = node.terminalType.PATTERN;
    if (node.terminalType.PATTERN) {
      serializedTerminal.pattern = isRegExp_default(pattern) ? pattern.source : pattern;
    }
    return serializedTerminal;
  } else if (node instanceof Rule) {
    return {
      type: "Rule",
      name: node.name,
      orgText: node.orgText,
      definition: convertDefinition(node.definition)
    };
  } else {
    throw Error("non exhaustive match");
  }
}

// node_modules/@chevrotain/gast/lib/src/visitor.js
var GAstVisitor = class {
  visit(node) {
    const nodeAny = node;
    switch (nodeAny.constructor) {
      case NonTerminal:
        return this.visitNonTerminal(nodeAny);
      case Alternative:
        return this.visitAlternative(nodeAny);
      case Option:
        return this.visitOption(nodeAny);
      case RepetitionMandatory:
        return this.visitRepetitionMandatory(nodeAny);
      case RepetitionMandatoryWithSeparator:
        return this.visitRepetitionMandatoryWithSeparator(nodeAny);
      case RepetitionWithSeparator:
        return this.visitRepetitionWithSeparator(nodeAny);
      case Repetition:
        return this.visitRepetition(nodeAny);
      case Alternation:
        return this.visitAlternation(nodeAny);
      case Terminal:
        return this.visitTerminal(nodeAny);
      case Rule:
        return this.visitRule(nodeAny);
      /* c8 ignore next 2 */
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(node) {
  }
  /* c8 ignore next */
  visitAlternative(node) {
  }
  /* c8 ignore next */
  visitOption(node) {
  }
  /* c8 ignore next */
  visitRepetition(node) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(node) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(node) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(node) {
  }
  /* c8 ignore next */
  visitAlternation(node) {
  }
  /* c8 ignore next */
  visitTerminal(node) {
  }
  /* c8 ignore next */
  visitRule(node) {
  }
};

// node_modules/@chevrotain/gast/lib/src/helpers.js
function isSequenceProd(prod) {
  return prod instanceof Alternative || prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionMandatory || prod instanceof RepetitionMandatoryWithSeparator || prod instanceof RepetitionWithSeparator || prod instanceof Terminal || prod instanceof Rule;
}
function isOptionalProd(prod, alreadyVisited = []) {
  const isDirectlyOptional = prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionWithSeparator;
  if (isDirectlyOptional) {
    return true;
  }
  if (prod instanceof Alternation) {
    return some_default(prod.definition, (subProd) => {
      return isOptionalProd(subProd, alreadyVisited);
    });
  } else if (prod instanceof NonTerminal && includes_default(alreadyVisited, prod)) {
    return false;
  } else if (prod instanceof AbstractProduction) {
    if (prod instanceof NonTerminal) {
      alreadyVisited.push(prod);
    }
    return every_default(prod.definition, (subProd) => {
      return isOptionalProd(subProd, alreadyVisited);
    });
  } else {
    return false;
  }
}
function isBranchingProd(prod) {
  return prod instanceof Alternation;
}
function getProductionDslName(prod) {
  if (prod instanceof NonTerminal) {
    return "SUBRULE";
  } else if (prod instanceof Option) {
    return "OPTION";
  } else if (prod instanceof Alternation) {
    return "OR";
  } else if (prod instanceof RepetitionMandatory) {
    return "AT_LEAST_ONE";
  } else if (prod instanceof RepetitionMandatoryWithSeparator) {
    return "AT_LEAST_ONE_SEP";
  } else if (prod instanceof RepetitionWithSeparator) {
    return "MANY_SEP";
  } else if (prod instanceof Repetition) {
    return "MANY";
  } else if (prod instanceof Terminal) {
    return "CONSUME";
  } else {
    throw Error("non exhaustive match");
  }
}

// node_modules/chevrotain/lib/src/parse/grammar/rest.js
var RestWalker = class {
  walk(prod, prevRest = []) {
    forEach_default(prod.definition, (subProd, index) => {
      const currRest = drop_default(prod.definition, index + 1);
      if (subProd instanceof NonTerminal) {
        this.walkProdRef(subProd, currRest, prevRest);
      } else if (subProd instanceof Terminal) {
        this.walkTerminal(subProd, currRest, prevRest);
      } else if (subProd instanceof Alternative) {
        this.walkFlat(subProd, currRest, prevRest);
      } else if (subProd instanceof Option) {
        this.walkOption(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionMandatory) {
        this.walkAtLeastOne(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionMandatoryWithSeparator) {
        this.walkAtLeastOneSep(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionWithSeparator) {
        this.walkManySep(subProd, currRest, prevRest);
      } else if (subProd instanceof Repetition) {
        this.walkMany(subProd, currRest, prevRest);
      } else if (subProd instanceof Alternation) {
        this.walkOr(subProd, currRest, prevRest);
      } else {
        throw Error("non exhaustive match");
      }
    });
  }
  walkTerminal(terminal, currRest, prevRest) {
  }
  walkProdRef(refProd, currRest, prevRest) {
  }
  walkFlat(flatProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    this.walk(flatProd, fullOrRest);
  }
  walkOption(optionProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    this.walk(optionProd, fullOrRest);
  }
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    const fullAtLeastOneRest = [
      new Option({ definition: atLeastOneProd.definition })
    ].concat(currRest, prevRest);
    this.walk(atLeastOneProd, fullAtLeastOneRest);
  }
  walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
    const fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
    this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
  }
  walkMany(manyProd, currRest, prevRest) {
    const fullManyRest = [
      new Option({ definition: manyProd.definition })
    ].concat(currRest, prevRest);
    this.walk(manyProd, fullManyRest);
  }
  walkManySep(manySepProd, currRest, prevRest) {
    const fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
    this.walk(manySepProd, fullManySepRest);
  }
  walkOr(orProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    forEach_default(orProd.definition, (alt) => {
      const prodWrapper = new Alternative({ definition: [alt] });
      this.walk(prodWrapper, fullOrRest);
    });
  }
};
function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
  const repSepRest = [
    new Option({
      definition: [
        new Terminal({ terminalType: repSepProd.separator })
      ].concat(repSepProd.definition)
    })
  ];
  const fullRepSepRest = repSepRest.concat(currRest, prevRest);
  return fullRepSepRest;
}

// node_modules/chevrotain/lib/src/parse/grammar/first.js
function first(prod) {
  if (prod instanceof NonTerminal) {
    return first(prod.referencedRule);
  } else if (prod instanceof Terminal) {
    return firstForTerminal(prod);
  } else if (isSequenceProd(prod)) {
    return firstForSequence(prod);
  } else if (isBranchingProd(prod)) {
    return firstForBranching(prod);
  } else {
    throw Error("non exhaustive match");
  }
}
function firstForSequence(prod) {
  let firstSet = [];
  const seq = prod.definition;
  let nextSubProdIdx = 0;
  let hasInnerProdsRemaining = seq.length > nextSubProdIdx;
  let currSubProd;
  let isLastInnerProdOptional = true;
  while (hasInnerProdsRemaining && isLastInnerProdOptional) {
    currSubProd = seq[nextSubProdIdx];
    isLastInnerProdOptional = isOptionalProd(currSubProd);
    firstSet = firstSet.concat(first(currSubProd));
    nextSubProdIdx = nextSubProdIdx + 1;
    hasInnerProdsRemaining = seq.length > nextSubProdIdx;
  }
  return uniq_default(firstSet);
}
function firstForBranching(prod) {
  const allAlternativesFirsts = map_default(prod.definition, (innerProd) => {
    return first(innerProd);
  });
  return uniq_default(flatten_default(allAlternativesFirsts));
}
function firstForTerminal(terminal) {
  return [terminal.terminalType];
}

// node_modules/chevrotain/lib/src/parse/constants.js
var IN = "_~IN~_";

// node_modules/chevrotain/lib/src/parse/grammar/follow.js
var ResyncFollowsWalker = class extends RestWalker {
  constructor(topProd) {
    super();
    this.topProd = topProd;
    this.follows = {};
  }
  startWalking() {
    this.walk(this.topProd);
    return this.follows;
  }
  walkTerminal(terminal, currRest, prevRest) {
  }
  walkProdRef(refProd, currRest, prevRest) {
    const followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name;
    const fullRest = currRest.concat(prevRest);
    const restProd = new Alternative({ definition: fullRest });
    const t_in_topProd_follows = first(restProd);
    this.follows[followName] = t_in_topProd_follows;
  }
};
function computeAllProdsFollows(topProductions) {
  const reSyncFollows = {};
  forEach_default(topProductions, (topProd) => {
    const currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
    assign_default(reSyncFollows, currRefsFollow);
  });
  return reSyncFollows;
}
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
  return inner.name + occurenceInParent + IN;
}

// node_modules/chevrotain/lib/src/scan/reg_exp_parser.js
var regExpAstCache = {};
var regExpParser = new RegExpParser();
function getRegExpAst(regExp) {
  const regExpStr = regExp.toString();
  if (regExpAstCache.hasOwnProperty(regExpStr)) {
    return regExpAstCache[regExpStr];
  } else {
    const regExpAst = regExpParser.pattern(regExpStr);
    regExpAstCache[regExpStr] = regExpAst;
    return regExpAst;
  }
}
function clearRegExpParserCache() {
  regExpAstCache = {};
}

// node_modules/chevrotain/lib/src/scan/reg_exp.js
var complementErrorMessage = "Complement Sets are not supported for first char optimization";
var failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
function getOptimizedStartCodesIndices(regExp, ensureOptimizations = false) {
  try {
    const ast = getRegExpAst(regExp);
    const firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
    return firstChars;
  } catch (e) {
    if (e.message === complementErrorMessage) {
      if (ensureOptimizations) {
        PRINT_WARNING(`${failedOptimizationPrefixMsg}	Unable to optimize: < ${regExp.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
      }
    } else {
      let msgSuffix = "";
      if (ensureOptimizations) {
        msgSuffix = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
      }
      PRINT_ERROR(`${failedOptimizationPrefixMsg}
	Failed parsing: < ${regExp.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + msgSuffix);
    }
  }
  return [];
}
function firstCharOptimizedIndices(ast, result, ignoreCase) {
  switch (ast.type) {
    case "Disjunction":
      for (let i = 0; i < ast.value.length; i++) {
        firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
      }
      break;
    case "Alternative":
      const terms = ast.value;
      for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        switch (term.type) {
          case "EndAnchor":
          // A group back reference cannot affect potential starting char.
          // because if a back reference is the first production than automatically
          // the group being referenced has had to come BEFORE so its codes have already been added
          case "GroupBackReference":
          // assertions do not affect potential starting codes
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const atom2 = term;
        switch (atom2.type) {
          case "Character":
            addOptimizedIdxToResult(atom2.value, result, ignoreCase);
            break;
          case "Set":
            if (atom2.complement === true) {
              throw Error(complementErrorMessage);
            }
            forEach_default(atom2.value, (code) => {
              if (typeof code === "number") {
                addOptimizedIdxToResult(code, result, ignoreCase);
              } else {
                const range = code;
                if (ignoreCase === true) {
                  for (let rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                    addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                  }
                } else {
                  for (let rangeCode = range.from; rangeCode <= range.to && rangeCode < minOptimizationVal; rangeCode++) {
                    addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                  }
                  if (range.to >= minOptimizationVal) {
                    const minUnOptVal = range.from >= minOptimizationVal ? range.from : minOptimizationVal;
                    const maxUnOptVal = range.to;
                    const minOptIdx = charCodeToOptimizedIndex(minUnOptVal);
                    const maxOptIdx = charCodeToOptimizedIndex(maxUnOptVal);
                    for (let currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++) {
                      result[currOptIdx] = currOptIdx;
                    }
                  }
                }
              }
            });
            break;
          case "Group":
            firstCharOptimizedIndices(atom2.value, result, ignoreCase);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const isOptionalQuantifier = atom2.quantifier !== void 0 && atom2.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          atom2.type === "Group" && isWholeOptional(atom2) === false || // If this term is not a group it may only be optional if it has an optional quantifier
          atom2.type !== "Group" && isOptionalQuantifier === false
        ) {
          break;
        }
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return values_default(result);
}
function addOptimizedIdxToResult(code, result, ignoreCase) {
  const optimizedCharIdx = charCodeToOptimizedIndex(code);
  result[optimizedCharIdx] = optimizedCharIdx;
  if (ignoreCase === true) {
    handleIgnoreCase(code, result);
  }
}
function handleIgnoreCase(code, result) {
  const char = String.fromCharCode(code);
  const upperChar = char.toUpperCase();
  if (upperChar !== char) {
    const optimizedCharIdx = charCodeToOptimizedIndex(upperChar.charCodeAt(0));
    result[optimizedCharIdx] = optimizedCharIdx;
  } else {
    const lowerChar = char.toLowerCase();
    if (lowerChar !== char) {
      const optimizedCharIdx = charCodeToOptimizedIndex(lowerChar.charCodeAt(0));
      result[optimizedCharIdx] = optimizedCharIdx;
    }
  }
}
function findCode(setNode, targetCharCodes) {
  return find_default(setNode.value, (codeOrRange) => {
    if (typeof codeOrRange === "number") {
      return includes_default(targetCharCodes, codeOrRange);
    } else {
      const range = codeOrRange;
      return find_default(targetCharCodes, (targetCode) => range.from <= targetCode && targetCode <= range.to) !== void 0;
    }
  });
}
function isWholeOptional(ast) {
  const quantifier = ast.quantifier;
  if (quantifier && quantifier.atLeast === 0) {
    return true;
  }
  if (!ast.value) {
    return false;
  }
  return isArray_default(ast.value) ? every_default(ast.value, isWholeOptional) : isWholeOptional(ast.value);
}
var CharCodeFinder = class extends BaseRegExpVisitor {
  constructor(targetCharCodes) {
    super();
    this.targetCharCodes = targetCharCodes;
    this.found = false;
  }
  visitChildren(node) {
    if (this.found === true) {
      return;
    }
    switch (node.type) {
      case "Lookahead":
        this.visitLookahead(node);
        return;
      case "NegativeLookahead":
        this.visitNegativeLookahead(node);
        return;
    }
    super.visitChildren(node);
  }
  visitCharacter(node) {
    if (includes_default(this.targetCharCodes, node.value)) {
      this.found = true;
    }
  }
  visitSet(node) {
    if (node.complement) {
      if (findCode(node, this.targetCharCodes) === void 0) {
        this.found = true;
      }
    } else {
      if (findCode(node, this.targetCharCodes) !== void 0) {
        this.found = true;
      }
    }
  }
};
function canMatchCharCode(charCodes, pattern) {
  if (pattern instanceof RegExp) {
    const ast = getRegExpAst(pattern);
    const charCodeFinder = new CharCodeFinder(charCodes);
    charCodeFinder.visit(ast);
    return charCodeFinder.found;
  } else {
    return find_default(pattern, (char) => {
      return includes_default(charCodes, char.charCodeAt(0));
    }) !== void 0;
  }
}

// node_modules/chevrotain/lib/src/scan/lexer.js
var PATTERN = "PATTERN";
var DEFAULT_MODE = "defaultMode";
var MODES = "modes";
var SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
function analyzeTokenTypes(tokenTypes, options) {
  options = defaults_default(options, {
    useSticky: SUPPORT_STICKY,
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", "\n"],
    tracer: (msg, action) => action()
  });
  const tracer = options.tracer;
  tracer("initCharCodeToOptimizedIndexMap", () => {
    initCharCodeToOptimizedIndexMap();
  });
  let onlyRelevantTypes;
  tracer("Reject Lexer.NA", () => {
    onlyRelevantTypes = reject_default(tokenTypes, (currType) => {
      return currType[PATTERN] === Lexer.NA;
    });
  });
  let hasCustom = false;
  let allTransformedPatterns;
  tracer("Transform Patterns", () => {
    hasCustom = false;
    allTransformedPatterns = map_default(onlyRelevantTypes, (currType) => {
      const currPattern = currType[PATTERN];
      if (isRegExp_default(currPattern)) {
        const regExpSource = currPattern.source;
        if (regExpSource.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." && !currPattern.ignoreCase) {
          return regExpSource;
        } else if (regExpSource.length === 2 && regExpSource[0] === "\\" && // not a meta character
        !includes_default([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], regExpSource[1])) {
          return regExpSource[1];
        } else {
          return options.useSticky ? addStickyFlag(currPattern) : addStartOfInput(currPattern);
        }
      } else if (isFunction_default(currPattern)) {
        hasCustom = true;
        return { exec: currPattern };
      } else if (typeof currPattern === "object") {
        hasCustom = true;
        return currPattern;
      } else if (typeof currPattern === "string") {
        if (currPattern.length === 1) {
          return currPattern;
        } else {
          const escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
          const wrappedRegExp = new RegExp(escapedRegExpString);
          return options.useSticky ? addStickyFlag(wrappedRegExp) : addStartOfInput(wrappedRegExp);
        }
      } else {
        throw Error("non exhaustive match");
      }
    });
  });
  let patternIdxToType;
  let patternIdxToGroup;
  let patternIdxToLongerAltIdxArr;
  let patternIdxToPushMode;
  let patternIdxToPopMode;
  tracer("misc mapping", () => {
    patternIdxToType = map_default(onlyRelevantTypes, (currType) => currType.tokenTypeIdx);
    patternIdxToGroup = map_default(onlyRelevantTypes, (clazz) => {
      const groupName = clazz.GROUP;
      if (groupName === Lexer.SKIPPED) {
        return void 0;
      } else if (isString_default(groupName)) {
        return groupName;
      } else if (isUndefined_default(groupName)) {
        return false;
      } else {
        throw Error("non exhaustive match");
      }
    });
    patternIdxToLongerAltIdxArr = map_default(onlyRelevantTypes, (clazz) => {
      const longerAltType = clazz.LONGER_ALT;
      if (longerAltType) {
        const longerAltIdxArr = isArray_default(longerAltType) ? map_default(longerAltType, (type) => indexOf_default(onlyRelevantTypes, type)) : [indexOf_default(onlyRelevantTypes, longerAltType)];
        return longerAltIdxArr;
      }
    });
    patternIdxToPushMode = map_default(onlyRelevantTypes, (clazz) => clazz.PUSH_MODE);
    patternIdxToPopMode = map_default(onlyRelevantTypes, (clazz) => has_default(clazz, "POP_MODE"));
  });
  let patternIdxToCanLineTerminator;
  tracer("Line Terminator Handling", () => {
    const lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
    patternIdxToCanLineTerminator = map_default(onlyRelevantTypes, (tokType) => false);
    if (options.positionTracking !== "onlyOffset") {
      patternIdxToCanLineTerminator = map_default(onlyRelevantTypes, (tokType) => {
        if (has_default(tokType, "LINE_BREAKS")) {
          return !!tokType.LINE_BREAKS;
        } else {
          return checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false && canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
        }
      });
    }
  });
  let patternIdxToIsCustom;
  let patternIdxToShort;
  let emptyGroups;
  let patternIdxToConfig;
  tracer("Misc Mapping #2", () => {
    patternIdxToIsCustom = map_default(onlyRelevantTypes, isCustomPattern);
    patternIdxToShort = map_default(allTransformedPatterns, isShortPattern);
    emptyGroups = reduce_default(onlyRelevantTypes, (acc, clazz) => {
      const groupName = clazz.GROUP;
      if (isString_default(groupName) && !(groupName === Lexer.SKIPPED)) {
        acc[groupName] = [];
      }
      return acc;
    }, {});
    patternIdxToConfig = map_default(allTransformedPatterns, (x, idx) => {
      return {
        pattern: allTransformedPatterns[idx],
        longerAlt: patternIdxToLongerAltIdxArr[idx],
        canLineTerminator: patternIdxToCanLineTerminator[idx],
        isCustom: patternIdxToIsCustom[idx],
        short: patternIdxToShort[idx],
        group: patternIdxToGroup[idx],
        push: patternIdxToPushMode[idx],
        pop: patternIdxToPopMode[idx],
        tokenTypeIdx: patternIdxToType[idx],
        tokenType: onlyRelevantTypes[idx]
      };
    });
  });
  let canBeOptimized = true;
  let charCodeToPatternIdxToConfig = [];
  if (!options.safeMode) {
    tracer("First Char Optimization", () => {
      charCodeToPatternIdxToConfig = reduce_default(onlyRelevantTypes, (result, currTokType, idx) => {
        if (typeof currTokType.PATTERN === "string") {
          const charCode = currTokType.PATTERN.charCodeAt(0);
          const optimizedIdx = charCodeToOptimizedIndex(charCode);
          addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
        } else if (isArray_default(currTokType.START_CHARS_HINT)) {
          let lastOptimizedIdx;
          forEach_default(currTokType.START_CHARS_HINT, (charOrInt) => {
            const charCode = typeof charOrInt === "string" ? charOrInt.charCodeAt(0) : charOrInt;
            const currOptimizedIdx = charCodeToOptimizedIndex(charCode);
            if (lastOptimizedIdx !== currOptimizedIdx) {
              lastOptimizedIdx = currOptimizedIdx;
              addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
            }
          });
        } else if (isRegExp_default(currTokType.PATTERN)) {
          if (currTokType.PATTERN.unicode) {
            canBeOptimized = false;
            if (options.ensureOptimizations) {
              PRINT_ERROR(`${failedOptimizationPrefixMsg}	Unable to analyze < ${currTokType.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
            }
          } else {
            const optimizedCodes = getOptimizedStartCodesIndices(currTokType.PATTERN, options.ensureOptimizations);
            if (isEmpty_default(optimizedCodes)) {
              canBeOptimized = false;
            }
            forEach_default(optimizedCodes, (code) => {
              addToMapOfArrays(result, code, patternIdxToConfig[idx]);
            });
          }
        } else {
          if (options.ensureOptimizations) {
            PRINT_ERROR(`${failedOptimizationPrefixMsg}	TokenType: <${currTokType.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`);
          }
          canBeOptimized = false;
        }
        return result;
      }, []);
    });
  }
  return {
    emptyGroups,
    patternIdxToConfig,
    charCodeToPatternIdxToConfig,
    hasCustom,
    canBeOptimized
  };
}
function validatePatterns(tokenTypes, validModesNames) {
  let errors = [];
  const missingResult = findMissingPatterns(tokenTypes);
  errors = errors.concat(missingResult.errors);
  const invalidResult = findInvalidPatterns(missingResult.valid);
  const validTokenTypes = invalidResult.valid;
  errors = errors.concat(invalidResult.errors);
  errors = errors.concat(validateRegExpPattern(validTokenTypes));
  errors = errors.concat(findInvalidGroupType(validTokenTypes));
  errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
  errors = errors.concat(findUnreachablePatterns(validTokenTypes));
  return errors;
}
function validateRegExpPattern(tokenTypes) {
  let errors = [];
  const withRegExpPatterns = filter_default(tokenTypes, (currTokType) => isRegExp_default(currTokType[PATTERN]));
  errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
  errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
  errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
  errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
  errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
  return errors;
}
function findMissingPatterns(tokenTypes) {
  const tokenTypesWithMissingPattern = filter_default(tokenTypes, (currType) => {
    return !has_default(currType, PATTERN);
  });
  const errors = map_default(tokenTypesWithMissingPattern, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
      type: LexerDefinitionErrorType.MISSING_PATTERN,
      tokenTypes: [currType]
    };
  });
  const valid = difference_default(tokenTypes, tokenTypesWithMissingPattern);
  return { errors, valid };
}
function findInvalidPatterns(tokenTypes) {
  const tokenTypesWithInvalidPattern = filter_default(tokenTypes, (currType) => {
    const pattern = currType[PATTERN];
    return !isRegExp_default(pattern) && !isFunction_default(pattern) && !has_default(pattern, "exec") && !isString_default(pattern);
  });
  const errors = map_default(tokenTypesWithInvalidPattern, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
      type: LexerDefinitionErrorType.INVALID_PATTERN,
      tokenTypes: [currType]
    };
  });
  const valid = difference_default(tokenTypes, tokenTypesWithInvalidPattern);
  return { errors, valid };
}
var end_of_input = /[^\\][$]/;
function findEndOfInputAnchor(tokenTypes) {
  class EndAnchorFinder extends BaseRegExpVisitor {
    constructor() {
      super(...arguments);
      this.found = false;
    }
    visitEndAnchor(node) {
      this.found = true;
    }
  }
  const invalidRegex = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    try {
      const regexpAst = getRegExpAst(pattern);
      const endAnchorVisitor = new EndAnchorFinder();
      endAnchorVisitor.visit(regexpAst);
      return endAnchorVisitor.found;
    } catch (e) {
      return end_of_input.test(pattern.source);
    }
  });
  const errors = map_default(invalidRegex, (currType) => {
    return {
      message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
      type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findEmptyMatchRegExps(tokenTypes) {
  const matchesEmptyString = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    return pattern.test("");
  });
  const errors = map_default(matchesEmptyString, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
      type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
      tokenTypes: [currType]
    };
  });
  return errors;
}
var start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(tokenTypes) {
  class StartAnchorFinder extends BaseRegExpVisitor {
    constructor() {
      super(...arguments);
      this.found = false;
    }
    visitStartAnchor(node) {
      this.found = true;
    }
  }
  const invalidRegex = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    try {
      const regexpAst = getRegExpAst(pattern);
      const startAnchorVisitor = new StartAnchorFinder();
      startAnchorVisitor.visit(regexpAst);
      return startAnchorVisitor.found;
    } catch (e) {
      return start_of_input.test(pattern.source);
    }
  });
  const errors = map_default(invalidRegex, (currType) => {
    return {
      message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
      type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findUnsupportedFlags(tokenTypes) {
  const invalidFlags = filter_default(tokenTypes, (currType) => {
    const pattern = currType[PATTERN];
    return pattern instanceof RegExp && (pattern.multiline || pattern.global);
  });
  const errors = map_default(invalidFlags, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
      type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findDuplicatePatterns(tokenTypes) {
  const found = [];
  let identicalPatterns = map_default(tokenTypes, (outerType) => {
    return reduce_default(tokenTypes, (result, innerType) => {
      if (outerType.PATTERN.source === innerType.PATTERN.source && !includes_default(found, innerType) && innerType.PATTERN !== Lexer.NA) {
        found.push(innerType);
        result.push(innerType);
        return result;
      }
      return result;
    }, []);
  });
  identicalPatterns = compact_default(identicalPatterns);
  const duplicatePatterns = filter_default(identicalPatterns, (currIdenticalSet) => {
    return currIdenticalSet.length > 1;
  });
  const errors = map_default(duplicatePatterns, (setOfIdentical) => {
    const tokenTypeNames = map_default(setOfIdentical, (currType) => {
      return currType.name;
    });
    const dupPatternSrc = head_default(setOfIdentical).PATTERN;
    return {
      message: `The same RegExp pattern ->${dupPatternSrc}<-has been used in all of the following Token Types: ${tokenTypeNames.join(", ")} <-`,
      type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: setOfIdentical
    };
  });
  return errors;
}
function findInvalidGroupType(tokenTypes) {
  const invalidTypes = filter_default(tokenTypes, (clazz) => {
    if (!has_default(clazz, "GROUP")) {
      return false;
    }
    const group = clazz.GROUP;
    return group !== Lexer.SKIPPED && group !== Lexer.NA && !isString_default(group);
  });
  const errors = map_default(invalidTypes, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
      type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findModesThatDoNotExist(tokenTypes, validModes) {
  const invalidModes = filter_default(tokenTypes, (clazz) => {
    return clazz.PUSH_MODE !== void 0 && !includes_default(validModes, clazz.PUSH_MODE);
  });
  const errors = map_default(invalidModes, (tokType) => {
    const msg = `Token Type: ->${tokType.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${tokType.PUSH_MODE}<-which does not exist`;
    return {
      message: msg,
      type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
      tokenTypes: [tokType]
    };
  });
  return errors;
}
function findUnreachablePatterns(tokenTypes) {
  const errors = [];
  const canBeTested = reduce_default(tokenTypes, (result, tokType, idx) => {
    const pattern = tokType.PATTERN;
    if (pattern === Lexer.NA) {
      return result;
    }
    if (isString_default(pattern)) {
      result.push({ str: pattern, idx, tokenType: tokType });
    } else if (isRegExp_default(pattern) && noMetaChar(pattern)) {
      result.push({ str: pattern.source, idx, tokenType: tokType });
    }
    return result;
  }, []);
  forEach_default(tokenTypes, (tokType, testIdx) => {
    forEach_default(canBeTested, ({ str, idx, tokenType }) => {
      if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
        const msg = `Token: ->${tokenType.name}<- can never be matched.
Because it appears AFTER the Token Type ->${tokType.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        errors.push({
          message: msg,
          type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
          tokenTypes: [tokType, tokenType]
        });
      }
    });
  });
  return errors;
}
function testTokenType(str, pattern) {
  if (isRegExp_default(pattern)) {
    const regExpArray = pattern.exec(str);
    return regExpArray !== null && regExpArray.index === 0;
  } else if (isFunction_default(pattern)) {
    return pattern(str, 0, [], {});
  } else if (has_default(pattern, "exec")) {
    return pattern.exec(str, 0, [], {});
  } else if (typeof pattern === "string") {
    return pattern === str;
  } else {
    throw Error("non exhaustive match");
  }
}
function noMetaChar(regExp) {
  const metaChars = [
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ];
  return find_default(metaChars, (char) => regExp.source.indexOf(char) !== -1) === void 0;
}
function addStartOfInput(pattern) {
  const flags = pattern.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${pattern.source})`, flags);
}
function addStickyFlag(pattern) {
  const flags = pattern.ignoreCase ? "iy" : "y";
  return new RegExp(`${pattern.source}`, flags);
}
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
  const errors = [];
  if (!has_default(lexerDefinition, DEFAULT_MODE)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized without a <" + DEFAULT_MODE + "> property in its definition\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
    });
  }
  if (!has_default(lexerDefinition, MODES)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized without a <" + MODES + "> property in its definition\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
    });
  }
  if (has_default(lexerDefinition, MODES) && has_default(lexerDefinition, DEFAULT_MODE) && !has_default(lexerDefinition.modes, lexerDefinition.defaultMode)) {
    errors.push({
      message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${lexerDefinition.defaultMode}>which does not exist
`,
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
    });
  }
  if (has_default(lexerDefinition, MODES)) {
    forEach_default(lexerDefinition.modes, (currModeValue, currModeName) => {
      forEach_default(currModeValue, (currTokType, currIdx) => {
        if (isUndefined_default(currTokType)) {
          errors.push({
            message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${currModeName}> at index: <${currIdx}>
`,
            type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
          });
        } else if (has_default(currTokType, "LONGER_ALT")) {
          const longerAlt = isArray_default(currTokType.LONGER_ALT) ? currTokType.LONGER_ALT : [currTokType.LONGER_ALT];
          forEach_default(longerAlt, (currLongerAlt) => {
            if (!isUndefined_default(currLongerAlt) && !includes_default(currModeValue, currLongerAlt)) {
              errors.push({
                message: `A MultiMode Lexer cannot be initialized with a longer_alt <${currLongerAlt.name}> on token <${currTokType.name}> outside of mode <${currModeName}>
`,
                type: LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
              });
            }
          });
        }
      });
    });
  }
  return errors;
}
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
  const warnings = [];
  let hasAnyLineBreak = false;
  const allTokenTypes = compact_default(flatten_default(values_default(lexerDefinition.modes)));
  const concreteTokenTypes = reject_default(allTokenTypes, (currType) => currType[PATTERN] === Lexer.NA);
  const terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
  if (trackLines) {
    forEach_default(concreteTokenTypes, (tokType) => {
      const currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
      if (currIssue !== false) {
        const message = buildLineBreakIssueMessage(tokType, currIssue);
        const warningDescriptor = {
          message,
          type: currIssue.issue,
          tokenType: tokType
        };
        warnings.push(warningDescriptor);
      } else {
        if (has_default(tokType, "LINE_BREAKS")) {
          if (tokType.LINE_BREAKS === true) {
            hasAnyLineBreak = true;
          }
        } else {
          if (canMatchCharCode(terminatorCharCodes, tokType.PATTERN)) {
            hasAnyLineBreak = true;
          }
        }
      }
    });
  }
  if (trackLines && !hasAnyLineBreak) {
    warnings.push({
      message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
      type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
    });
  }
  return warnings;
}
function cloneEmptyGroups(emptyGroups) {
  const clonedResult = {};
  const groupKeys = keys_default(emptyGroups);
  forEach_default(groupKeys, (currKey) => {
    const currGroupValue = emptyGroups[currKey];
    if (isArray_default(currGroupValue)) {
      clonedResult[currKey] = [];
    } else {
      throw Error("non exhaustive match");
    }
  });
  return clonedResult;
}
function isCustomPattern(tokenType) {
  const pattern = tokenType.PATTERN;
  if (isRegExp_default(pattern)) {
    return false;
  } else if (isFunction_default(pattern)) {
    return true;
  } else if (has_default(pattern, "exec")) {
    return true;
  } else if (isString_default(pattern)) {
    return false;
  } else {
    throw Error("non exhaustive match");
  }
}
function isShortPattern(pattern) {
  if (isString_default(pattern) && pattern.length === 1) {
    return pattern.charCodeAt(0);
  } else {
    return false;
  }
}
var LineTerminatorOptimizedTester = {
  // implements /\n|\r\n?/g.test
  test: function(text) {
    const len = text.length;
    for (let i = this.lastIndex; i < len; i++) {
      const c = text.charCodeAt(i);
      if (c === 10) {
        this.lastIndex = i + 1;
        return true;
      } else if (c === 13) {
        if (text.charCodeAt(i + 1) === 10) {
          this.lastIndex = i + 2;
        } else {
          this.lastIndex = i + 1;
        }
        return true;
      }
    }
    return false;
  },
  lastIndex: 0
};
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
  if (has_default(tokType, "LINE_BREAKS")) {
    return false;
  } else {
    if (isRegExp_default(tokType.PATTERN)) {
      try {
        canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
      } catch (e) {
        return {
          issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
          errMsg: e.message
        };
      }
      return false;
    } else if (isString_default(tokType.PATTERN)) {
      return false;
    } else if (isCustomPattern(tokType)) {
      return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
    } else {
      throw Error("non exhaustive match");
    }
  }
}
function buildLineBreakIssueMessage(tokType, details) {
  if (details.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${tokType.name}> Token Type
	 Root cause: ${details.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  } else if (details.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${tokType.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  } else {
    throw Error("non exhaustive match");
  }
}
function getCharCodes(charsOrCodes) {
  const charCodes = map_default(charsOrCodes, (numOrString) => {
    if (isString_default(numOrString)) {
      return numOrString.charCodeAt(0);
    } else {
      return numOrString;
    }
  });
  return charCodes;
}
function addToMapOfArrays(map, key, value) {
  if (map[key] === void 0) {
    map[key] = [value];
  } else {
    map[key].push(value);
  }
}
var minOptimizationVal = 256;
var charCodeToOptimizedIdxMap = [];
function charCodeToOptimizedIndex(charCode) {
  return charCode < minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
}
function initCharCodeToOptimizedIndexMap() {
  if (isEmpty_default(charCodeToOptimizedIdxMap)) {
    charCodeToOptimizedIdxMap = new Array(65536);
    for (let i = 0; i < 65536; i++) {
      charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
    }
  }
}

// node_modules/chevrotain/lib/src/scan/tokens.js
function tokenStructuredMatcher(tokInstance, tokConstructor) {
  const instanceType = tokInstance.tokenTypeIdx;
  if (instanceType === tokConstructor.tokenTypeIdx) {
    return true;
  } else {
    return tokConstructor.isParent === true && tokConstructor.categoryMatchesMap[instanceType] === true;
  }
}
function tokenStructuredMatcherNoCategories(token, tokType) {
  return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
var tokenShortNameIdx = 1;
var tokenIdxToClass = {};
function augmentTokenTypes(tokenTypes) {
  const tokenTypesAndParents = expandCategories(tokenTypes);
  assignTokenDefaultProps(tokenTypesAndParents);
  assignCategoriesMapProp(tokenTypesAndParents);
  assignCategoriesTokensProp(tokenTypesAndParents);
  forEach_default(tokenTypesAndParents, (tokType) => {
    tokType.isParent = tokType.categoryMatches.length > 0;
  });
}
function expandCategories(tokenTypes) {
  let result = clone_default(tokenTypes);
  let categories = tokenTypes;
  let searching = true;
  while (searching) {
    categories = compact_default(flatten_default(map_default(categories, (currTokType) => currTokType.CATEGORIES)));
    const newCategories = difference_default(categories, result);
    result = result.concat(newCategories);
    if (isEmpty_default(newCategories)) {
      searching = false;
    } else {
      categories = newCategories;
    }
  }
  return result;
}
function assignTokenDefaultProps(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    if (!hasShortKeyProperty(currTokType)) {
      tokenIdxToClass[tokenShortNameIdx] = currTokType;
      currTokType.tokenTypeIdx = tokenShortNameIdx++;
    }
    if (hasCategoriesProperty(currTokType) && !isArray_default(currTokType.CATEGORIES)) {
      currTokType.CATEGORIES = [currTokType.CATEGORIES];
    }
    if (!hasCategoriesProperty(currTokType)) {
      currTokType.CATEGORIES = [];
    }
    if (!hasExtendingTokensTypesProperty(currTokType)) {
      currTokType.categoryMatches = [];
    }
    if (!hasExtendingTokensTypesMapProperty(currTokType)) {
      currTokType.categoryMatchesMap = {};
    }
  });
}
function assignCategoriesTokensProp(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    currTokType.categoryMatches = [];
    forEach_default(currTokType.categoryMatchesMap, (val, key) => {
      currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);
    });
  });
}
function assignCategoriesMapProp(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    singleAssignCategoriesToksMap([], currTokType);
  });
}
function singleAssignCategoriesToksMap(path, nextNode) {
  forEach_default(path, (pathNode) => {
    nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
  });
  forEach_default(nextNode.CATEGORIES, (nextCategory) => {
    const newPath = path.concat(nextNode);
    if (!includes_default(newPath, nextCategory)) {
      singleAssignCategoriesToksMap(newPath, nextCategory);
    }
  });
}
function hasShortKeyProperty(tokType) {
  return has_default(tokType, "tokenTypeIdx");
}
function hasCategoriesProperty(tokType) {
  return has_default(tokType, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(tokType) {
  return has_default(tokType, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(tokType) {
  return has_default(tokType, "categoryMatchesMap");
}
function isTokenType(tokType) {
  return has_default(tokType, "tokenTypeIdx");
}

// node_modules/chevrotain/lib/src/scan/lexer_errors_public.js
var defaultLexerErrorProvider = {
  buildUnableToPopLexerModeMessage(token) {
    return `Unable to pop Lexer Mode after encountering Token ->${token.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(fullText, startOffset, length, line, column) {
    return `unexpected character: ->${fullText.charAt(startOffset)}<- at offset: ${startOffset}, skipped ${length} characters.`;
  }
};

// node_modules/chevrotain/lib/src/scan/lexer_public.js
var LexerDefinitionErrorType;
(function(LexerDefinitionErrorType2) {
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"] = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
var DEFAULT_LEXER_CONFIG = {
  deferDefinitionErrorsHandling: false,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: ["\n", "\r"],
  ensureOptimizations: false,
  safeMode: false,
  errorMessageProvider: defaultLexerErrorProvider,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true
};
Object.freeze(DEFAULT_LEXER_CONFIG);
var Lexer = class {
  constructor(lexerDefinition, config = DEFAULT_LEXER_CONFIG) {
    this.lexerDefinition = lexerDefinition;
    this.lexerDefinitionErrors = [];
    this.lexerDefinitionWarning = [];
    this.patternIdxToConfig = {};
    this.charCodeToPatternIdxToConfig = {};
    this.modes = [];
    this.emptyGroups = {};
    this.trackStartLines = true;
    this.trackEndLines = true;
    this.hasCustom = false;
    this.canModeBeOptimized = {};
    this.TRACE_INIT = (phaseDesc, phaseImpl) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        const indent = new Array(this.traceInitIndent + 1).join("	");
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          console.log(`${indent}--> <${phaseDesc}>`);
        }
        const { time, value } = timer(phaseImpl);
        const traceMethod = time > 10 ? console.warn : console.log;
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
        }
        this.traceInitIndent--;
        return value;
      } else {
        return phaseImpl();
      }
    };
    if (typeof config === "boolean") {
      throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
    }
    this.config = assign_default({}, DEFAULT_LEXER_CONFIG, config);
    const traceInitVal = this.config.traceInitPerf;
    if (traceInitVal === true) {
      this.traceInitMaxIdent = Infinity;
      this.traceInitPerf = true;
    } else if (typeof traceInitVal === "number") {
      this.traceInitMaxIdent = traceInitVal;
      this.traceInitPerf = true;
    }
    this.traceInitIndent = -1;
    this.TRACE_INIT("Lexer Constructor", () => {
      let actualDefinition;
      let hasOnlySingleMode = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
          this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
        } else {
          if (this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
            throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
          }
        }
        if (config.safeMode && config.ensureOptimizations) {
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        }
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);
        this.trackEndLines = /full/i.test(this.config.positionTracking);
        if (isArray_default(lexerDefinition)) {
          actualDefinition = {
            modes: { defaultMode: clone_default(lexerDefinition) },
            defaultMode: DEFAULT_MODE
          };
        } else {
          hasOnlySingleMode = false;
          actualDefinition = clone_default(lexerDefinition);
        }
      });
      if (this.config.skipValidations === false) {
        this.TRACE_INIT("performRuntimeChecks", () => {
          this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(performRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
        });
        this.TRACE_INIT("performWarningRuntimeChecks", () => {
          this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
        });
      }
      actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {};
      forEach_default(actualDefinition.modes, (currModeValue, currModeName) => {
        actualDefinition.modes[currModeName] = reject_default(currModeValue, (currTokType) => isUndefined_default(currTokType));
      });
      const allModeNames = keys_default(actualDefinition.modes);
      forEach_default(actualDefinition.modes, (currModDef, currModName) => {
        this.TRACE_INIT(`Mode: <${currModName}> processing`, () => {
          this.modes.push(currModName);
          if (this.config.skipValidations === false) {
            this.TRACE_INIT(`validatePatterns`, () => {
              this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(validatePatterns(currModDef, allModeNames));
            });
          }
          if (isEmpty_default(this.lexerDefinitionErrors)) {
            augmentTokenTypes(currModDef);
            let currAnalyzeResult;
            this.TRACE_INIT(`analyzeTokenTypes`, () => {
              currAnalyzeResult = analyzeTokenTypes(currModDef, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: config.positionTracking,
                ensureOptimizations: config.ensureOptimizations,
                safeMode: config.safeMode,
                tracer: this.TRACE_INIT
              });
            });
            this.patternIdxToConfig[currModName] = currAnalyzeResult.patternIdxToConfig;
            this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult.charCodeToPatternIdxToConfig;
            this.emptyGroups = assign_default({}, this.emptyGroups, currAnalyzeResult.emptyGroups);
            this.hasCustom = currAnalyzeResult.hasCustom || this.hasCustom;
            this.canModeBeOptimized[currModName] = currAnalyzeResult.canBeOptimized;
          }
        });
      });
      this.defaultMode = actualDefinition.defaultMode;
      if (!isEmpty_default(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const allErrMessages = map_default(this.lexerDefinitionErrors, (error) => {
          return error.message;
        });
        const allErrMessagesString = allErrMessages.join("-----------------------\n");
        throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
      }
      forEach_default(this.lexerDefinitionWarning, (warningDescriptor) => {
        PRINT_WARNING(warningDescriptor.message);
      });
      this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (SUPPORT_STICKY) {
          this.chopInput = identity_default;
          this.match = this.matchWithTest;
        } else {
          this.updateLastIndex = noop_default;
          this.match = this.matchWithExec;
        }
        if (hasOnlySingleMode) {
          this.handleModes = noop_default;
        }
        if (this.trackStartLines === false) {
          this.computeNewColumn = identity_default;
        }
        if (this.trackEndLines === false) {
          this.updateTokenEndLineColumnLocation = noop_default;
        }
        if (/full/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createFullToken;
        } else if (/onlyStart/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createStartOnlyToken;
        } else if (/onlyOffset/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createOffsetOnlyToken;
        } else {
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        }
        if (this.hasCustom) {
          this.addToken = this.addTokenUsingPush;
          this.handlePayload = this.handlePayloadWithCustom;
        } else {
          this.addToken = this.addTokenUsingMemberAccess;
          this.handlePayload = this.handlePayloadNoCustom;
        }
      });
      this.TRACE_INIT("Failed Optimization Warnings", () => {
        const unOptimizedModes = reduce_default(this.canModeBeOptimized, (cannotBeOptimized, canBeOptimized, modeName) => {
          if (canBeOptimized === false) {
            cannotBeOptimized.push(modeName);
          }
          return cannotBeOptimized;
        }, []);
        if (config.ensureOptimizations && !isEmpty_default(unOptimizedModes)) {
          throw Error(`Lexer Modes: < ${unOptimizedModes.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
        }
      });
      this.TRACE_INIT("clearRegExpParserCache", () => {
        clearRegExpParserCache();
      });
      this.TRACE_INIT("toFastProperties", () => {
        toFastProperties(this);
      });
    });
  }
  tokenize(text, initialMode = this.defaultMode) {
    if (!isEmpty_default(this.lexerDefinitionErrors)) {
      const allErrMessages = map_default(this.lexerDefinitionErrors, (error) => {
        return error.message;
      });
      const allErrMessagesString = allErrMessages.join("-----------------------\n");
      throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
    }
    return this.tokenizeInternal(text, initialMode);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(text, initialMode) {
    let i, j, k, matchAltImage, longerAlt, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match;
    const orgText = text;
    const orgLength = orgText.length;
    let offset = 0;
    let matchedTokensIndex = 0;
    const guessedNumberOfTokens = this.hasCustom ? 0 : Math.floor(text.length / 10);
    const matchedTokens = new Array(guessedNumberOfTokens);
    const errors = [];
    let line = this.trackStartLines ? 1 : void 0;
    let column = this.trackStartLines ? 1 : void 0;
    const groups = cloneEmptyGroups(this.emptyGroups);
    const trackLines = this.trackStartLines;
    const lineTerminatorPattern = this.config.lineTerminatorsPattern;
    let currModePatternsLength = 0;
    let patternIdxToConfig = [];
    let currCharCodeToPatternIdxToConfig = [];
    const modeStack = [];
    const emptyArray = [];
    Object.freeze(emptyArray);
    let getPossiblePatterns;
    function getPossiblePatternsSlow() {
      return patternIdxToConfig;
    }
    function getPossiblePatternsOptimized(charCode) {
      const optimizedCharIdx = charCodeToOptimizedIndex(charCode);
      const possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
      if (possiblePatterns === void 0) {
        return emptyArray;
      } else {
        return possiblePatterns;
      }
    }
    const pop_mode = (popToken) => {
      if (modeStack.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      popToken.tokenType.PUSH_MODE === void 0) {
        const msg2 = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
        errors.push({
          offset: popToken.startOffset,
          line: popToken.startLine,
          column: popToken.startColumn,
          length: popToken.image.length,
          message: msg2
        });
      } else {
        modeStack.pop();
        const newMode = last_default(modeStack);
        patternIdxToConfig = this.patternIdxToConfig[newMode];
        currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
        currModePatternsLength = patternIdxToConfig.length;
        const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
        if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
          getPossiblePatterns = getPossiblePatternsOptimized;
        } else {
          getPossiblePatterns = getPossiblePatternsSlow;
        }
      }
    };
    function push_mode(newMode) {
      modeStack.push(newMode);
      currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
      patternIdxToConfig = this.patternIdxToConfig[newMode];
      currModePatternsLength = patternIdxToConfig.length;
      currModePatternsLength = patternIdxToConfig.length;
      const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
      if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
        getPossiblePatterns = getPossiblePatternsOptimized;
      } else {
        getPossiblePatterns = getPossiblePatternsSlow;
      }
    }
    push_mode.call(this, initialMode);
    let currConfig;
    const recoveryEnabled = this.config.recoveryEnabled;
    while (offset < orgLength) {
      matchedImage = null;
      const nextCharCode = orgText.charCodeAt(offset);
      const chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
      const chosenPatternsLength = chosenPatternIdxToConfig.length;
      for (i = 0; i < chosenPatternsLength; i++) {
        currConfig = chosenPatternIdxToConfig[i];
        const currPattern = currConfig.pattern;
        payload = null;
        const singleCharCode = currConfig.short;
        if (singleCharCode !== false) {
          if (nextCharCode === singleCharCode) {
            matchedImage = currPattern;
          }
        } else if (currConfig.isCustom === true) {
          match = currPattern.exec(orgText, offset, matchedTokens, groups);
          if (match !== null) {
            matchedImage = match[0];
            if (match.payload !== void 0) {
              payload = match.payload;
            }
          } else {
            matchedImage = null;
          }
        } else {
          this.updateLastIndex(currPattern, offset);
          matchedImage = this.match(currPattern, text, offset);
        }
        if (matchedImage !== null) {
          longerAlt = currConfig.longerAlt;
          if (longerAlt !== void 0) {
            const longerAltLength = longerAlt.length;
            for (k = 0; k < longerAltLength; k++) {
              const longerAltConfig = patternIdxToConfig[longerAlt[k]];
              const longerAltPattern = longerAltConfig.pattern;
              altPayload = null;
              if (longerAltConfig.isCustom === true) {
                match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                if (match !== null) {
                  matchAltImage = match[0];
                  if (match.payload !== void 0) {
                    altPayload = match.payload;
                  }
                } else {
                  matchAltImage = null;
                }
              } else {
                this.updateLastIndex(longerAltPattern, offset);
                matchAltImage = this.match(longerAltPattern, text, offset);
              }
              if (matchAltImage && matchAltImage.length > matchedImage.length) {
                matchedImage = matchAltImage;
                payload = altPayload;
                currConfig = longerAltConfig;
                break;
              }
            }
          }
          break;
        }
      }
      if (matchedImage !== null) {
        imageLength = matchedImage.length;
        group = currConfig.group;
        if (group !== void 0) {
          tokType = currConfig.tokenTypeIdx;
          newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
          this.handlePayload(newToken, payload);
          if (group === false) {
            matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
          } else {
            groups[group].push(newToken);
          }
        }
        text = this.chopInput(text, imageLength);
        offset = offset + imageLength;
        column = this.computeNewColumn(column, imageLength);
        if (trackLines === true && currConfig.canLineTerminator === true) {
          let numOfLTsInMatch = 0;
          let foundTerminator;
          let lastLTEndOffset;
          lineTerminatorPattern.lastIndex = 0;
          do {
            foundTerminator = lineTerminatorPattern.test(matchedImage);
            if (foundTerminator === true) {
              lastLTEndOffset = lineTerminatorPattern.lastIndex - 1;
              numOfLTsInMatch++;
            }
          } while (foundTerminator === true);
          if (numOfLTsInMatch !== 0) {
            line = line + numOfLTsInMatch;
            column = imageLength - lastLTEndOffset;
            this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
          }
        }
        this.handleModes(currConfig, pop_mode, push_mode, newToken);
      } else {
        const errorStartOffset = offset;
        const errorLine = line;
        const errorColumn = column;
        let foundResyncPoint = recoveryEnabled === false;
        while (foundResyncPoint === false && offset < orgLength) {
          text = this.chopInput(text, 1);
          offset++;
          for (j = 0; j < currModePatternsLength; j++) {
            const currConfig2 = patternIdxToConfig[j];
            const currPattern = currConfig2.pattern;
            const singleCharCode = currConfig2.short;
            if (singleCharCode !== false) {
              if (orgText.charCodeAt(offset) === singleCharCode) {
                foundResyncPoint = true;
              }
            } else if (currConfig2.isCustom === true) {
              foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
            } else {
              this.updateLastIndex(currPattern, offset);
              foundResyncPoint = currPattern.exec(text) !== null;
            }
            if (foundResyncPoint === true) {
              break;
            }
          }
        }
        errLength = offset - errorStartOffset;
        column = this.computeNewColumn(column, errLength);
        msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);
        errors.push({
          offset: errorStartOffset,
          line: errorLine,
          column: errorColumn,
          length: errLength,
          message: msg
        });
        if (recoveryEnabled === false) {
          break;
        }
      }
    }
    if (!this.hasCustom) {
      matchedTokens.length = matchedTokensIndex;
    }
    return {
      tokens: matchedTokens,
      groups,
      errors
    };
  }
  handleModes(config, pop_mode, push_mode, newToken) {
    if (config.pop === true) {
      const pushMode = config.push;
      pop_mode(newToken);
      if (pushMode !== void 0) {
        push_mode.call(this, pushMode);
      }
    } else if (config.push !== void 0) {
      push_mode.call(this, config.push);
    }
  }
  chopInput(text, length) {
    return text.substring(length);
  }
  updateLastIndex(regExp, newLastIndex) {
    regExp.lastIndex = newLastIndex;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
    let lastCharIsLT, fixForEndingInLT;
    if (group !== void 0) {
      lastCharIsLT = lastLTIdx === imageLength - 1;
      fixForEndingInLT = lastCharIsLT ? -1 : 0;
      if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
        newToken.endLine = line + fixForEndingInLT;
        newToken.endColumn = column - 1 + -fixForEndingInLT;
      }
    }
  }
  computeNewColumn(oldColumn, imageLength) {
    return oldColumn + imageLength;
  }
  createOffsetOnlyToken(image, startOffset, tokenTypeIdx, tokenType) {
    return {
      image,
      startOffset,
      tokenTypeIdx,
      tokenType
    };
  }
  createStartOnlyToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
    return {
      image,
      startOffset,
      startLine,
      startColumn,
      tokenTypeIdx,
      tokenType
    };
  }
  createFullToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
    return {
      image,
      startOffset,
      endOffset: startOffset + imageLength - 1,
      startLine,
      endLine: startLine,
      startColumn,
      endColumn: startColumn + imageLength - 1,
      tokenTypeIdx,
      tokenType
    };
  }
  addTokenUsingPush(tokenVector, index, tokenToAdd) {
    tokenVector.push(tokenToAdd);
    return index;
  }
  addTokenUsingMemberAccess(tokenVector, index, tokenToAdd) {
    tokenVector[index] = tokenToAdd;
    index++;
    return index;
  }
  handlePayloadNoCustom(token, payload) {
  }
  handlePayloadWithCustom(token, payload) {
    if (payload !== null) {
      token.payload = payload;
    }
  }
  matchWithTest(pattern, text, offset) {
    const found = pattern.test(text);
    if (found === true) {
      return text.substring(offset, pattern.lastIndex);
    }
    return null;
  }
  matchWithExec(pattern, text) {
    const regExpArray = pattern.exec(text);
    return regExpArray !== null ? regExpArray[0] : null;
  }
};
Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
Lexer.NA = /NOT_APPLICABLE/;

// node_modules/chevrotain/lib/src/scan/tokens_public.js
function tokenLabel2(tokType) {
  if (hasTokenLabel2(tokType)) {
    return tokType.LABEL;
  } else {
    return tokType.name;
  }
}
function hasTokenLabel2(obj) {
  return isString_default(obj.LABEL) && obj.LABEL !== "";
}
var PARENT = "parent";
var CATEGORIES = "categories";
var LABEL = "label";
var GROUP = "group";
var PUSH_MODE = "push_mode";
var POP_MODE = "pop_mode";
var LONGER_ALT = "longer_alt";
var LINE_BREAKS = "line_breaks";
var START_CHARS_HINT = "start_chars_hint";
function createToken(config) {
  return createTokenInternal(config);
}
function createTokenInternal(config) {
  const pattern = config.pattern;
  const tokenType = {};
  tokenType.name = config.name;
  if (!isUndefined_default(pattern)) {
    tokenType.PATTERN = pattern;
  }
  if (has_default(config, PARENT)) {
    throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
  }
  if (has_default(config, CATEGORIES)) {
    tokenType.CATEGORIES = config[CATEGORIES];
  }
  augmentTokenTypes([tokenType]);
  if (has_default(config, LABEL)) {
    tokenType.LABEL = config[LABEL];
  }
  if (has_default(config, GROUP)) {
    tokenType.GROUP = config[GROUP];
  }
  if (has_default(config, POP_MODE)) {
    tokenType.POP_MODE = config[POP_MODE];
  }
  if (has_default(config, PUSH_MODE)) {
    tokenType.PUSH_MODE = config[PUSH_MODE];
  }
  if (has_default(config, LONGER_ALT)) {
    tokenType.LONGER_ALT = config[LONGER_ALT];
  }
  if (has_default(config, LINE_BREAKS)) {
    tokenType.LINE_BREAKS = config[LINE_BREAKS];
  }
  if (has_default(config, START_CHARS_HINT)) {
    tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
  }
  return tokenType;
}
var EOF = createToken({ name: "EOF", pattern: Lexer.NA });
augmentTokenTypes([EOF]);
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
  return {
    image,
    startOffset,
    endOffset,
    startLine,
    endLine,
    startColumn,
    endColumn,
    tokenTypeIdx: tokType.tokenTypeIdx,
    tokenType: tokType
  };
}
function tokenMatcher(token, tokType) {
  return tokenStructuredMatcher(token, tokType);
}

// node_modules/chevrotain/lib/src/parse/errors_public.js
var defaultParserErrorProvider = {
  buildMismatchTokenMessage({ expected, actual, previous, ruleName }) {
    const hasLabel = hasTokenLabel2(expected);
    const expectedMsg = hasLabel ? `--> ${tokenLabel2(expected)} <--` : `token of type --> ${expected.name} <--`;
    const msg = `Expecting ${expectedMsg} but found --> '${actual.image}' <--`;
    return msg;
  },
  buildNotAllInputParsedMessage({ firstRedundant, ruleName }) {
    return "Redundant input, expecting EOF but found: " + firstRedundant.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt, actual, previous, customUserDescription, ruleName }) {
    const errPrefix = "Expecting: ";
    const actualText = head_default(actual).image;
    const errSuffix = "\nbut found: '" + actualText + "'";
    if (customUserDescription) {
      return errPrefix + customUserDescription + errSuffix;
    } else {
      const allLookAheadPaths = reduce_default(expectedPathsPerAlt, (result, currAltPaths) => result.concat(currAltPaths), []);
      const nextValidTokenSequences = map_default(allLookAheadPaths, (currPath) => `[${map_default(currPath, (currTokenType) => tokenLabel2(currTokenType)).join(", ")}]`);
      const nextValidSequenceItems = map_default(nextValidTokenSequences, (itemMsg, idx) => `  ${idx + 1}. ${itemMsg}`);
      const calculatedDescription = `one of these possible Token sequences:
${nextValidSequenceItems.join("\n")}`;
      return errPrefix + calculatedDescription + errSuffix;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths, actual, customUserDescription, ruleName }) {
    const errPrefix = "Expecting: ";
    const actualText = head_default(actual).image;
    const errSuffix = "\nbut found: '" + actualText + "'";
    if (customUserDescription) {
      return errPrefix + customUserDescription + errSuffix;
    } else {
      const nextValidTokenSequences = map_default(expectedIterationPaths, (currPath) => `[${map_default(currPath, (currTokenType) => tokenLabel2(currTokenType)).join(",")}]`);
      const calculatedDescription = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${nextValidTokenSequences.join(" ,")}>`;
      return errPrefix + calculatedDescription + errSuffix;
    }
  }
};
Object.freeze(defaultParserErrorProvider);
var defaultGrammarResolverErrorProvider = {
  buildRuleNotFoundError(topLevelRule, undefinedRule) {
    const msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\ninside top level rule: ->" + topLevelRule.name + "<-";
    return msg;
  }
};
var defaultGrammarValidatorErrorProvider = {
  buildDuplicateFoundError(topLevelRule, duplicateProds) {
    function getExtraProductionArgument2(prod) {
      if (prod instanceof Terminal) {
        return prod.terminalType.name;
      } else if (prod instanceof NonTerminal) {
        return prod.nonTerminalName;
      } else {
        return "";
      }
    }
    const topLevelName = topLevelRule.name;
    const duplicateProd = head_default(duplicateProds);
    const index = duplicateProd.idx;
    const dslName = getProductionDslName(duplicateProd);
    const extraArgument = getExtraProductionArgument2(duplicateProd);
    const hasExplicitIndex = index > 0;
    let msg = `->${dslName}${hasExplicitIndex ? index : ""}<- ${extraArgument ? `with argument: ->${extraArgument}<-` : ""}
                  appears more than once (${duplicateProds.length} times) in the top level rule: ->${topLevelName}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    msg = msg.replace(/[ \t]+/g, " ");
    msg = msg.replace(/\s\s+/g, "\n");
    return msg;
  },
  buildNamespaceConflictError(rule) {
    const errMsg = `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${rule.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
    return errMsg;
  },
  buildAlternationPrefixAmbiguityError(options) {
    const pathMsg = map_default(options.prefixPath, (currTok) => tokenLabel2(currTok)).join(", ");
    const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
    const errMsg = `Ambiguous alternatives: <${options.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,
<${pathMsg}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
    return errMsg;
  },
  buildAlternationAmbiguityError(options) {
    const pathMsg = map_default(options.prefixPath, (currtok) => tokenLabel2(currtok)).join(", ");
    const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
    let currMessage = `Ambiguous Alternatives Detected: <${options.ambiguityIndices.join(" ,")}> in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,
<${pathMsg}> may appears as a prefix path in all these alternatives.
`;
    currMessage = currMessage + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`;
    return currMessage;
  },
  buildEmptyRepetitionError(options) {
    let dslName = getProductionDslName(options.repetition);
    if (options.repetition.idx !== 0) {
      dslName += options.repetition.idx;
    }
    const errMsg = `The repetition <${dslName}> within Rule <${options.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
    return errMsg;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(options) {
    return "deprecated";
  },
  buildEmptyAlternationError(options) {
    const errMsg = `Ambiguous empty alternative: <${options.emptyChoiceIdx + 1}> in <OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
    return errMsg;
  },
  buildTooManyAlternativesError(options) {
    const errMsg = `An Alternation cannot have more than 256 alternatives:
<OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.
 has ${options.alternation.definition.length + 1} alternatives.`;
    return errMsg;
  },
  buildLeftRecursionError(options) {
    const ruleName = options.topLevelRule.name;
    const pathNames = map_default(options.leftRecursionPath, (currRule) => currRule.name);
    const leftRecursivePath = `${ruleName} --> ${pathNames.concat([ruleName]).join(" --> ")}`;
    const errMsg = `Left Recursion found in grammar.
rule: <${ruleName}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${leftRecursivePath}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
    return errMsg;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(options) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(options) {
    let ruleName;
    if (options.topLevelRule instanceof Rule) {
      ruleName = options.topLevelRule.name;
    } else {
      ruleName = options.topLevelRule;
    }
    const errMsg = `Duplicate definition, rule: ->${ruleName}<- is already defined in the grammar: ->${options.grammarName}<-`;
    return errMsg;
  }
};

// node_modules/chevrotain/lib/src/parse/grammar/resolver.js
function resolveGrammar(topLevels, errMsgProvider) {
  const refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
  refResolver.resolveRefs();
  return refResolver.errors;
}
var GastRefResolverVisitor = class extends GAstVisitor {
  constructor(nameToTopRule, errMsgProvider) {
    super();
    this.nameToTopRule = nameToTopRule;
    this.errMsgProvider = errMsgProvider;
    this.errors = [];
  }
  resolveRefs() {
    forEach_default(values_default(this.nameToTopRule), (prod) => {
      this.currTopLevel = prod;
      prod.accept(this);
    });
  }
  visitNonTerminal(node) {
    const ref = this.nameToTopRule[node.nonTerminalName];
    if (!ref) {
      const msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
      this.errors.push({
        message: msg,
        type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: node.nonTerminalName
      });
    } else {
      node.referencedRule = ref;
    }
  }
};

// node_modules/chevrotain/lib/src/parse/grammar/interpreter.js
var AbstractNextPossibleTokensWalker = class extends RestWalker {
  constructor(topProd, path) {
    super();
    this.topProd = topProd;
    this.path = path;
    this.possibleTokTypes = [];
    this.nextProductionName = "";
    this.nextProductionOccurrence = 0;
    this.found = false;
    this.isAtEndOfPath = false;
  }
  startWalking() {
    this.found = false;
    if (this.path.ruleStack[0] !== this.topProd.name) {
      throw Error("The path does not start with the walker's top Rule!");
    }
    this.ruleStack = clone_default(this.path.ruleStack).reverse();
    this.occurrenceStack = clone_default(this.path.occurrenceStack).reverse();
    this.ruleStack.pop();
    this.occurrenceStack.pop();
    this.updateExpectedNext();
    this.walk(this.topProd);
    return this.possibleTokTypes;
  }
  walk(prod, prevRest = []) {
    if (!this.found) {
      super.walk(prod, prevRest);
    }
  }
  walkProdRef(refProd, currRest, prevRest) {
    if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
      const fullRest = currRest.concat(prevRest);
      this.updateExpectedNext();
      this.walk(refProd.referencedRule, fullRest);
    }
  }
  updateExpectedNext() {
    if (isEmpty_default(this.ruleStack)) {
      this.nextProductionName = "";
      this.nextProductionOccurrence = 0;
      this.isAtEndOfPath = true;
    } else {
      this.nextProductionName = this.ruleStack.pop();
      this.nextProductionOccurrence = this.occurrenceStack.pop();
    }
  }
};
var NextAfterTokenWalker = class extends AbstractNextPossibleTokensWalker {
  constructor(topProd, path) {
    super(topProd, path);
    this.path = path;
    this.nextTerminalName = "";
    this.nextTerminalOccurrence = 0;
    this.nextTerminalName = this.path.lastTok.name;
    this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(terminal, currRest, prevRest) {
    if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
      const fullRest = currRest.concat(prevRest);
      const restProd = new Alternative({ definition: fullRest });
      this.possibleTokTypes = first(restProd);
      this.found = true;
    }
  }
};
var AbstractNextTerminalAfterProductionWalker = class extends RestWalker {
  constructor(topRule, occurrence) {
    super();
    this.topRule = topRule;
    this.occurrence = occurrence;
    this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    this.walk(this.topRule);
    return this.result;
  }
};
var NextTerminalAfterManyWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkMany(manyProd, currRest, prevRest) {
    if (manyProd.idx === this.occurrence) {
      const firstAfterMany = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterMany === void 0;
      if (firstAfterMany instanceof Terminal) {
        this.result.token = firstAfterMany.terminalType;
        this.result.occurrence = firstAfterMany.idx;
      }
    } else {
      super.walkMany(manyProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterManySepWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkManySep(manySepProd, currRest, prevRest) {
    if (manySepProd.idx === this.occurrence) {
      const firstAfterManySep = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterManySep === void 0;
      if (firstAfterManySep instanceof Terminal) {
        this.result.token = firstAfterManySep.terminalType;
        this.result.occurrence = firstAfterManySep.idx;
      }
    } else {
      super.walkManySep(manySepProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterAtLeastOneWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    if (atLeastOneProd.idx === this.occurrence) {
      const firstAfterAtLeastOne = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterAtLeastOne === void 0;
      if (firstAfterAtLeastOne instanceof Terminal) {
        this.result.token = firstAfterAtLeastOne.terminalType;
        this.result.occurrence = firstAfterAtLeastOne.idx;
      }
    } else {
      super.walkAtLeastOne(atLeastOneProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterAtLeastOneSepWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest) {
    if (atleastOneSepProd.idx === this.occurrence) {
      const firstAfterfirstAfterAtLeastOneSep = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === void 0;
      if (firstAfterfirstAfterAtLeastOneSep instanceof Terminal) {
        this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
        this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
      }
    } else {
      super.walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest);
    }
  }
};
function possiblePathsFrom(targetDef, maxLength, currPath = []) {
  currPath = clone_default(currPath);
  let result = [];
  let i = 0;
  function remainingPathWith(nextDef) {
    return nextDef.concat(drop_default(targetDef, i + 1));
  }
  function getAlternativesForProd(definition) {
    const alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
    return result.concat(alternatives);
  }
  while (currPath.length < maxLength && i < targetDef.length) {
    const prod = targetDef[i];
    if (prod instanceof Alternative) {
      return getAlternativesForProd(prod.definition);
    } else if (prod instanceof NonTerminal) {
      return getAlternativesForProd(prod.definition);
    } else if (prod instanceof Option) {
      result = getAlternativesForProd(prod.definition);
    } else if (prod instanceof RepetitionMandatory) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: prod.definition
        })
      ]);
      return getAlternativesForProd(newDef);
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      const newDef = [
        new Alternative({ definition: prod.definition }),
        new Repetition({
          definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
        })
      ];
      return getAlternativesForProd(newDef);
    } else if (prod instanceof RepetitionWithSeparator) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
        })
      ]);
      result = getAlternativesForProd(newDef);
    } else if (prod instanceof Repetition) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: prod.definition
        })
      ]);
      result = getAlternativesForProd(newDef);
    } else if (prod instanceof Alternation) {
      forEach_default(prod.definition, (currAlt) => {
        if (isEmpty_default(currAlt.definition) === false) {
          result = getAlternativesForProd(currAlt.definition);
        }
      });
      return result;
    } else if (prod instanceof Terminal) {
      currPath.push(prod.terminalType);
    } else {
      throw Error("non exhaustive match");
    }
    i++;
  }
  result.push({
    partialPath: currPath,
    suffixDef: drop_default(targetDef, i)
  });
  return result;
}
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
  const EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
  const EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
  const EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
  let foundCompletePath = false;
  const tokenVectorLength = tokenVector.length;
  const minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
  const result = [];
  const possiblePaths = [];
  possiblePaths.push({
    idx: -1,
    def: initialDef,
    ruleStack: [],
    occurrenceStack: []
  });
  while (!isEmpty_default(possiblePaths)) {
    const currPath = possiblePaths.pop();
    if (currPath === EXIT_ALTERNATIVE) {
      if (foundCompletePath && last_default(possiblePaths).idx <= minimalAlternativesIndex) {
        possiblePaths.pop();
      }
      continue;
    }
    const currDef = currPath.def;
    const currIdx = currPath.idx;
    const currRuleStack = currPath.ruleStack;
    const currOccurrenceStack = currPath.occurrenceStack;
    if (isEmpty_default(currDef)) {
      continue;
    }
    const prod = currDef[0];
    if (prod === EXIT_NON_TERMINAL) {
      const nextPath = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: dropRight_default(currRuleStack),
        occurrenceStack: dropRight_default(currOccurrenceStack)
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof Terminal) {
      if (currIdx < tokenVectorLength - 1) {
        const nextIdx = currIdx + 1;
        const actualToken = tokenVector[nextIdx];
        if (tokMatcher(actualToken, prod.terminalType)) {
          const nextPath = {
            idx: nextIdx,
            def: drop_default(currDef),
            ruleStack: currRuleStack,
            occurrenceStack: currOccurrenceStack
          };
          possiblePaths.push(nextPath);
        }
      } else if (currIdx === tokenVectorLength - 1) {
        result.push({
          nextTokenType: prod.terminalType,
          nextTokenOccurrence: prod.idx,
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        });
        foundCompletePath = true;
      } else {
        throw Error("non exhaustive match");
      }
    } else if (prod instanceof NonTerminal) {
      const newRuleStack = clone_default(currRuleStack);
      newRuleStack.push(prod.nonTerminalName);
      const newOccurrenceStack = clone_default(currOccurrenceStack);
      newOccurrenceStack.push(prod.idx);
      const nextPath = {
        idx: currIdx,
        def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, drop_default(currDef)),
        ruleStack: newRuleStack,
        occurrenceStack: newOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof Option) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const nextPathWith = {
        idx: currIdx,
        def: prod.definition.concat(drop_default(currDef)),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof RepetitionMandatory) {
      const secondIteration = new Repetition({
        definition: prod.definition,
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([secondIteration], drop_default(currDef));
      const nextPath = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      const separatorGast = new Terminal({
        terminalType: prod.separator
      });
      const secondIteration = new Repetition({
        definition: [separatorGast].concat(prod.definition),
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([secondIteration], drop_default(currDef));
      const nextPath = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof RepetitionWithSeparator) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const separatorGast = new Terminal({
        terminalType: prod.separator
      });
      const nthRepetition = new Repetition({
        definition: [separatorGast].concat(prod.definition),
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([nthRepetition], drop_default(currDef));
      const nextPathWith = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof Repetition) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const nthRepetition = new Repetition({
        definition: prod.definition,
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([nthRepetition], drop_default(currDef));
      const nextPathWith = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof Alternation) {
      for (let i = prod.definition.length - 1; i >= 0; i--) {
        const currAlt = prod.definition[i];
        const currAltPath = {
          idx: currIdx,
          def: currAlt.definition.concat(drop_default(currDef)),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(currAltPath);
        possiblePaths.push(EXIT_ALTERNATIVE);
      }
    } else if (prod instanceof Alternative) {
      possiblePaths.push({
        idx: currIdx,
        def: prod.definition.concat(drop_default(currDef)),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      });
    } else if (prod instanceof Rule) {
      possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
    } else {
      throw Error("non exhaustive match");
    }
  }
  return result;
}
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
  const newRuleStack = clone_default(currRuleStack);
  newRuleStack.push(topRule.name);
  const newCurrOccurrenceStack = clone_default(currOccurrenceStack);
  newCurrOccurrenceStack.push(1);
  return {
    idx: currIdx,
    def: topRule.definition,
    ruleStack: newRuleStack,
    occurrenceStack: newCurrOccurrenceStack
  };
}

// node_modules/chevrotain/lib/src/parse/grammar/lookahead.js
var PROD_TYPE;
(function(PROD_TYPE2) {
  PROD_TYPE2[PROD_TYPE2["OPTION"] = 0] = "OPTION";
  PROD_TYPE2[PROD_TYPE2["REPETITION"] = 1] = "REPETITION";
  PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
  PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
  PROD_TYPE2[PROD_TYPE2["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
  PROD_TYPE2[PROD_TYPE2["ALTERNATION"] = 5] = "ALTERNATION";
})(PROD_TYPE || (PROD_TYPE = {}));
function getProdType(prod) {
  if (prod instanceof Option || prod === "Option") {
    return PROD_TYPE.OPTION;
  } else if (prod instanceof Repetition || prod === "Repetition") {
    return PROD_TYPE.REPETITION;
  } else if (prod instanceof RepetitionMandatory || prod === "RepetitionMandatory") {
    return PROD_TYPE.REPETITION_MANDATORY;
  } else if (prod instanceof RepetitionMandatoryWithSeparator || prod === "RepetitionMandatoryWithSeparator") {
    return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
  } else if (prod instanceof RepetitionWithSeparator || prod === "RepetitionWithSeparator") {
    return PROD_TYPE.REPETITION_WITH_SEPARATOR;
  } else if (prod instanceof Alternation || prod === "Alternation") {
    return PROD_TYPE.ALTERNATION;
  } else {
    throw Error("non exhaustive match");
  }
}
function getLookaheadPaths(options) {
  const { occurrence, rule, prodType, maxLookahead } = options;
  const type = getProdType(prodType);
  if (type === PROD_TYPE.ALTERNATION) {
    return getLookaheadPathsForOr(occurrence, rule, maxLookahead);
  } else {
    return getLookaheadPathsForOptionalProd(occurrence, rule, type, maxLookahead);
  }
}
function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
  const lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
  const tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
  return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher2, dynamicTokensEnabled);
}
function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
  const lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
  const tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
  return lookaheadBuilder(lookAheadPaths[0], tokenMatcher2, dynamicTokensEnabled);
}
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher2, dynamicTokensEnabled) {
  const numOfAlts = alts.length;
  const areAllOneTokenLookahead = every_default(alts, (currAlt) => {
    return every_default(currAlt, (currPath) => {
      return currPath.length === 1;
    });
  });
  if (hasPredicates) {
    return function(orAlts) {
      const predicates = map_default(orAlts, (currAlt) => currAlt.GATE);
      for (let t = 0; t < numOfAlts; t++) {
        const currAlt = alts[t];
        const currNumOfPaths = currAlt.length;
        const currPredicate = predicates[t];
        if (currPredicate !== void 0 && currPredicate.call(this) === false) {
          continue;
        }
        nextPath: for (let j = 0; j < currNumOfPaths; j++) {
          const currPath = currAlt[j];
          const currPathLength = currPath.length;
          for (let i = 0; i < currPathLength; i++) {
            const nextToken = this.LA(i + 1);
            if (tokenMatcher2(nextToken, currPath[i]) === false) {
              continue nextPath;
            }
          }
          return t;
        }
      }
      return void 0;
    };
  } else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
    const singleTokenAlts = map_default(alts, (currAlt) => {
      return flatten_default(currAlt);
    });
    const choiceToAlt = reduce_default(singleTokenAlts, (result, currAlt, idx) => {
      forEach_default(currAlt, (currTokType) => {
        if (!has_default(result, currTokType.tokenTypeIdx)) {
          result[currTokType.tokenTypeIdx] = idx;
        }
        forEach_default(currTokType.categoryMatches, (currExtendingType) => {
          if (!has_default(result, currExtendingType)) {
            result[currExtendingType] = idx;
          }
        });
      });
      return result;
    }, {});
    return function() {
      const nextToken = this.LA(1);
      return choiceToAlt[nextToken.tokenTypeIdx];
    };
  } else {
    return function() {
      for (let t = 0; t < numOfAlts; t++) {
        const currAlt = alts[t];
        const currNumOfPaths = currAlt.length;
        nextPath: for (let j = 0; j < currNumOfPaths; j++) {
          const currPath = currAlt[j];
          const currPathLength = currPath.length;
          for (let i = 0; i < currPathLength; i++) {
            const nextToken = this.LA(i + 1);
            if (tokenMatcher2(nextToken, currPath[i]) === false) {
              continue nextPath;
            }
          }
          return t;
        }
      }
      return void 0;
    };
  }
}
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher2, dynamicTokensEnabled) {
  const areAllOneTokenLookahead = every_default(alt, (currPath) => {
    return currPath.length === 1;
  });
  const numOfPaths = alt.length;
  if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
    const singleTokensTypes = flatten_default(alt);
    if (singleTokensTypes.length === 1 && isEmpty_default(singleTokensTypes[0].categoryMatches)) {
      const expectedTokenType = singleTokensTypes[0];
      const expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey;
      };
    } else {
      const choiceToAlt = reduce_default(singleTokensTypes, (result, currTokType, idx) => {
        result[currTokType.tokenTypeIdx] = true;
        forEach_default(currTokType.categoryMatches, (currExtendingType) => {
          result[currExtendingType] = true;
        });
        return result;
      }, []);
      return function() {
        const nextToken = this.LA(1);
        return choiceToAlt[nextToken.tokenTypeIdx] === true;
      };
    }
  } else {
    return function() {
      nextPath: for (let j = 0; j < numOfPaths; j++) {
        const currPath = alt[j];
        const currPathLength = currPath.length;
        for (let i = 0; i < currPathLength; i++) {
          const nextToken = this.LA(i + 1);
          if (tokenMatcher2(nextToken, currPath[i]) === false) {
            continue nextPath;
          }
        }
        return true;
      }
      return false;
    };
  }
}
var RestDefinitionFinderWalker = class extends RestWalker {
  constructor(topProd, targetOccurrence, targetProdType) {
    super();
    this.topProd = topProd;
    this.targetOccurrence = targetOccurrence;
    this.targetProdType = targetProdType;
  }
  startWalking() {
    this.walk(this.topProd);
    return this.restDef;
  }
  checkIsTarget(node, expectedProdType, currRest, prevRest) {
    if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdType) {
      this.restDef = currRest.concat(prevRest);
      return true;
    }
    return false;
  }
  walkOption(optionProd, currRest, prevRest) {
    if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
      super.walkOption(optionProd, currRest, prevRest);
    }
  }
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
      super.walkOption(atLeastOneProd, currRest, prevRest);
    }
  }
  walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
    if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
      super.walkOption(atLeastOneSepProd, currRest, prevRest);
    }
  }
  walkMany(manyProd, currRest, prevRest) {
    if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
      super.walkOption(manyProd, currRest, prevRest);
    }
  }
  walkManySep(manySepProd, currRest, prevRest) {
    if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
      super.walkOption(manySepProd, currRest, prevRest);
    }
  }
};
var InsideDefinitionFinderVisitor = class extends GAstVisitor {
  constructor(targetOccurrence, targetProdType, targetRef) {
    super();
    this.targetOccurrence = targetOccurrence;
    this.targetProdType = targetProdType;
    this.targetRef = targetRef;
    this.result = [];
  }
  checkIsTarget(node, expectedProdName) {
    if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === void 0 || node === this.targetRef)) {
      this.result = node.definition;
    }
  }
  visitOption(node) {
    this.checkIsTarget(node, PROD_TYPE.OPTION);
  }
  visitRepetition(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION);
  }
  visitRepetitionMandatory(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(node) {
    this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
  }
};
function initializeArrayOfArrays(size) {
  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = [];
  }
  return result;
}
function pathToHashKeys(path) {
  let keys = [""];
  for (let i = 0; i < path.length; i++) {
    const tokType = path[i];
    const longerKeys = [];
    for (let j = 0; j < keys.length; j++) {
      const currShorterKey = keys[j];
      longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
      for (let t = 0; t < tokType.categoryMatches.length; t++) {
        const categoriesKeySuffix = "_" + tokType.categoryMatches[t];
        longerKeys.push(currShorterKey + categoriesKeySuffix);
      }
    }
    keys = longerKeys;
  }
  return keys;
}
function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
  for (let currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++) {
    if (currAltIdx === idx) {
      continue;
    }
    const otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
    for (let searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
      const searchKey = searchPathKeys[searchIdx];
      if (otherAltKnownPathsKeys[searchKey] === true) {
        return false;
      }
    }
  }
  return true;
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
  const partialAlts = map_default(altsDefs, (currAlt) => possiblePathsFrom([currAlt], 1));
  const finalResult = initializeArrayOfArrays(partialAlts.length);
  const altsHashes = map_default(partialAlts, (currAltPaths) => {
    const dict = {};
    forEach_default(currAltPaths, (item) => {
      const keys = pathToHashKeys(item.partialPath);
      forEach_default(keys, (currKey) => {
        dict[currKey] = true;
      });
    });
    return dict;
  });
  let newData = partialAlts;
  for (let pathLength = 1; pathLength <= k; pathLength++) {
    const currDataset = newData;
    newData = initializeArrayOfArrays(currDataset.length);
    for (let altIdx = 0; altIdx < currDataset.length; altIdx++) {
      const currAltPathsAndSuffixes = currDataset[altIdx];
      for (let currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
        const currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
        const suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
        const prefixKeys = pathToHashKeys(currPathPrefix);
        const isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx);
        if (isUnique || isEmpty_default(suffixDef) || currPathPrefix.length === k) {
          const currAltResult = finalResult[altIdx];
          if (containsPath(currAltResult, currPathPrefix) === false) {
            currAltResult.push(currPathPrefix);
            for (let j = 0; j < prefixKeys.length; j++) {
              const currKey = prefixKeys[j];
              altsHashes[altIdx][currKey] = true;
            }
          }
        } else {
          const newPartialPathsAndSuffixes = possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);
          newData[altIdx] = newData[altIdx].concat(newPartialPathsAndSuffixes);
          forEach_default(newPartialPathsAndSuffixes, (item) => {
            const prefixKeys2 = pathToHashKeys(item.partialPath);
            forEach_default(prefixKeys2, (key) => {
              altsHashes[altIdx][key] = true;
            });
          });
        }
      }
    }
  }
  return finalResult;
}
function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
  const visitor2 = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
  ruleGrammar.accept(visitor2);
  return lookAheadSequenceFromAlternatives(visitor2.result, k);
}
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
  const insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
  ruleGrammar.accept(insideDefVisitor);
  const insideDef = insideDefVisitor.result;
  const afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
  const afterDef = afterDefWalker.startWalking();
  const insideFlat = new Alternative({ definition: insideDef });
  const afterFlat = new Alternative({ definition: afterDef });
  return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
}
function containsPath(alternative, searchPath) {
  compareOtherPath: for (let i = 0; i < alternative.length; i++) {
    const otherPath = alternative[i];
    if (otherPath.length !== searchPath.length) {
      continue;
    }
    for (let j = 0; j < otherPath.length; j++) {
      const searchTok = searchPath[j];
      const otherTok = otherPath[j];
      const matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== void 0;
      if (matchingTokens === false) {
        continue compareOtherPath;
      }
    }
    return true;
  }
  return false;
}
function isStrictPrefixOfPath(prefix, other) {
  return prefix.length < other.length && every_default(prefix, (tokType, idx) => {
    const otherTokType = other[idx];
    return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
  });
}
function areTokenCategoriesNotUsed(lookAheadPaths) {
  return every_default(lookAheadPaths, (singleAltPaths) => every_default(singleAltPaths, (singlePath) => every_default(singlePath, (token) => isEmpty_default(token.categoryMatches))));
}

// node_modules/chevrotain/lib/src/parse/grammar/checks.js
function validateLookahead(options) {
  const lookaheadValidationErrorMessages = options.lookaheadStrategy.validate({
    rules: options.rules,
    tokenTypes: options.tokenTypes,
    grammarName: options.grammarName
  });
  return map_default(lookaheadValidationErrorMessages, (errorMessage) => Object.assign({ type: ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION }, errorMessage));
}
function validateGrammar(topLevels, tokenTypes, errMsgProvider, grammarName) {
  const duplicateErrors = flatMap_default(topLevels, (currTopLevel) => validateDuplicateProductions(currTopLevel, errMsgProvider));
  const termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
  const tooManyAltsErrors = flatMap_default(topLevels, (curRule) => validateTooManyAlts(curRule, errMsgProvider));
  const duplicateRulesError = flatMap_default(topLevels, (curRule) => validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider));
  return duplicateErrors.concat(termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError);
}
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
  const collectorVisitor2 = new OccurrenceValidationCollector();
  topLevelRule.accept(collectorVisitor2);
  const allRuleProductions = collectorVisitor2.allProductions;
  const productionGroups = groupBy_default(allRuleProductions, identifyProductionForDuplicates);
  const duplicates = pickBy_default(productionGroups, (currGroup) => {
    return currGroup.length > 1;
  });
  const errors = map_default(values_default(duplicates), (currDuplicates) => {
    const firstProd = head_default(currDuplicates);
    const msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
    const dslName = getProductionDslName(firstProd);
    const defError = {
      message: msg,
      type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
      ruleName: topLevelRule.name,
      dslName,
      occurrence: firstProd.idx
    };
    const param = getExtraProductionArgument(firstProd);
    if (param) {
      defError.parameter = param;
    }
    return defError;
  });
  return errors;
}
function identifyProductionForDuplicates(prod) {
  return `${getProductionDslName(prod)}_#_${prod.idx}_#_${getExtraProductionArgument(prod)}`;
}
function getExtraProductionArgument(prod) {
  if (prod instanceof Terminal) {
    return prod.terminalType.name;
  } else if (prod instanceof NonTerminal) {
    return prod.nonTerminalName;
  } else {
    return "";
  }
}
var OccurrenceValidationCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.allProductions = [];
  }
  visitNonTerminal(subrule) {
    this.allProductions.push(subrule);
  }
  visitOption(option2) {
    this.allProductions.push(option2);
  }
  visitRepetitionWithSeparator(manySep) {
    this.allProductions.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.allProductions.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.allProductions.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.allProductions.push(many);
  }
  visitAlternation(or) {
    this.allProductions.push(or);
  }
  visitTerminal(terminal) {
    this.allProductions.push(terminal);
  }
};
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
  const errors = [];
  const occurrences = reduce_default(allRules, (result, curRule) => {
    if (curRule.name === rule.name) {
      return result + 1;
    }
    return result;
  }, 0);
  if (occurrences > 1) {
    const errMsg = errMsgProvider.buildDuplicateRuleNameError({
      topLevelRule: rule,
      grammarName: className
    });
    errors.push({
      message: errMsg,
      type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
      ruleName: rule.name
    });
  }
  return errors;
}
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
  const errors = [];
  let errMsg;
  if (!includes_default(definedRulesNames, ruleName)) {
    errMsg = `Invalid rule override, rule: ->${ruleName}<- cannot be overridden in the grammar: ->${className}<-as it is not defined in any of the super grammars `;
    errors.push({
      message: errMsg,
      type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
      ruleName
    });
  }
  return errors;
}
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path = []) {
  const errors = [];
  const nextNonTerminals = getFirstNoneTerminal(currRule.definition);
  if (isEmpty_default(nextNonTerminals)) {
    return [];
  } else {
    const ruleName = topRule.name;
    const foundLeftRecursion = includes_default(nextNonTerminals, topRule);
    if (foundLeftRecursion) {
      errors.push({
        message: errMsgProvider.buildLeftRecursionError({
          topLevelRule: topRule,
          leftRecursionPath: path
        }),
        type: ParserDefinitionErrorType.LEFT_RECURSION,
        ruleName
      });
    }
    const validNextSteps = difference_default(nextNonTerminals, path.concat([topRule]));
    const errorsFromNextSteps = flatMap_default(validNextSteps, (currRefRule) => {
      const newPath = clone_default(path);
      newPath.push(currRefRule);
      return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
    });
    return errors.concat(errorsFromNextSteps);
  }
}
function getFirstNoneTerminal(definition) {
  let result = [];
  if (isEmpty_default(definition)) {
    return result;
  }
  const firstProd = head_default(definition);
  if (firstProd instanceof NonTerminal) {
    result.push(firstProd.referencedRule);
  } else if (firstProd instanceof Alternative || firstProd instanceof Option || firstProd instanceof RepetitionMandatory || firstProd instanceof RepetitionMandatoryWithSeparator || firstProd instanceof RepetitionWithSeparator || firstProd instanceof Repetition) {
    result = result.concat(getFirstNoneTerminal(firstProd.definition));
  } else if (firstProd instanceof Alternation) {
    result = flatten_default(map_default(firstProd.definition, (currSubDef) => getFirstNoneTerminal(currSubDef.definition)));
  } else if (firstProd instanceof Terminal) {
  } else {
    throw Error("non exhaustive match");
  }
  const isFirstOptional = isOptionalProd(firstProd);
  const hasMore = definition.length > 1;
  if (isFirstOptional && hasMore) {
    const rest = drop_default(definition);
    return result.concat(getFirstNoneTerminal(rest));
  } else {
    return result;
  }
}
var OrCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.alternations = [];
  }
  visitAlternation(node) {
    this.alternations.push(node);
  }
};
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  const ors = orCollector.alternations;
  const errors = flatMap_default(ors, (currOr) => {
    const exceptLast = dropRight_default(currOr.definition);
    return flatMap_default(exceptLast, (currAlternative, currAltIdx) => {
      const possibleFirstInAlt = nextPossibleTokensAfter([currAlternative], [], tokenStructuredMatcher, 1);
      if (isEmpty_default(possibleFirstInAlt)) {
        return [
          {
            message: errMsgProvider.buildEmptyAlternationError({
              topLevelRule,
              alternation: currOr,
              emptyChoiceIdx: currAltIdx
            }),
            type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
            ruleName: topLevelRule.name,
            occurrence: currOr.idx,
            alternative: currAltIdx + 1
          }
        ];
      } else {
        return [];
      }
    });
  });
  return errors;
}
function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  let ors = orCollector.alternations;
  ors = reject_default(ors, (currOr) => currOr.ignoreAmbiguities === true);
  const errors = flatMap_default(ors, (currOr) => {
    const currOccurrence = currOr.idx;
    const actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
    const alternatives = getLookaheadPathsForOr(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
    const altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
    const altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
    return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);
  });
  return errors;
}
var RepetitionCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.allProductions = [];
  }
  visitRepetitionWithSeparator(manySep) {
    this.allProductions.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.allProductions.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.allProductions.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.allProductions.push(many);
  }
};
function validateTooManyAlts(topLevelRule, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  const ors = orCollector.alternations;
  const errors = flatMap_default(ors, (currOr) => {
    if (currOr.definition.length > 255) {
      return [
        {
          message: errMsgProvider.buildTooManyAlternativesError({
            topLevelRule,
            alternation: currOr
          }),
          type: ParserDefinitionErrorType.TOO_MANY_ALTS,
          ruleName: topLevelRule.name,
          occurrence: currOr.idx
        }
      ];
    } else {
      return [];
    }
  });
  return errors;
}
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
  const errors = [];
  forEach_default(topLevelRules, (currTopRule) => {
    const collectorVisitor2 = new RepetitionCollector();
    currTopRule.accept(collectorVisitor2);
    const allRuleProductions = collectorVisitor2.allProductions;
    forEach_default(allRuleProductions, (currProd) => {
      const prodType = getProdType(currProd);
      const actualMaxLookahead = currProd.maxLookahead || maxLookahead;
      const currOccurrence = currProd.idx;
      const paths = getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, actualMaxLookahead);
      const pathsInsideProduction = paths[0];
      if (isEmpty_default(flatten_default(pathsInsideProduction))) {
        const errMsg = errMsgProvider.buildEmptyRepetitionError({
          topLevelRule: currTopRule,
          repetition: currProd
        });
        errors.push({
          message: errMsg,
          type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: currTopRule.name
        });
      }
    });
  });
  return errors;
}
function checkAlternativesAmbiguities(alternatives, alternation2, rule, errMsgProvider) {
  const foundAmbiguousPaths = [];
  const identicalAmbiguities = reduce_default(alternatives, (result, currAlt, currAltIdx) => {
    if (alternation2.definition[currAltIdx].ignoreAmbiguities === true) {
      return result;
    }
    forEach_default(currAlt, (currPath) => {
      const altsCurrPathAppearsIn = [currAltIdx];
      forEach_default(alternatives, (currOtherAlt, currOtherAltIdx) => {
        if (currAltIdx !== currOtherAltIdx && containsPath(currOtherAlt, currPath) && // ignore (skip) ambiguities with this "other" alternative
        alternation2.definition[currOtherAltIdx].ignoreAmbiguities !== true) {
          altsCurrPathAppearsIn.push(currOtherAltIdx);
        }
      });
      if (altsCurrPathAppearsIn.length > 1 && !containsPath(foundAmbiguousPaths, currPath)) {
        foundAmbiguousPaths.push(currPath);
        result.push({
          alts: altsCurrPathAppearsIn,
          path: currPath
        });
      }
    });
    return result;
  }, []);
  const currErrors = map_default(identicalAmbiguities, (currAmbDescriptor) => {
    const ambgIndices = map_default(currAmbDescriptor.alts, (currAltIdx) => currAltIdx + 1);
    const currMessage = errMsgProvider.buildAlternationAmbiguityError({
      topLevelRule: rule,
      alternation: alternation2,
      ambiguityIndices: ambgIndices,
      prefixPath: currAmbDescriptor.path
    });
    return {
      message: currMessage,
      type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
      ruleName: rule.name,
      occurrence: alternation2.idx,
      alternatives: currAmbDescriptor.alts
    };
  });
  return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation2, rule, errMsgProvider) {
  const pathsAndIndices = reduce_default(alternatives, (result, currAlt, idx) => {
    const currPathsAndIdx = map_default(currAlt, (currPath) => {
      return { idx, path: currPath };
    });
    return result.concat(currPathsAndIdx);
  }, []);
  const errors = compact_default(flatMap_default(pathsAndIndices, (currPathAndIdx) => {
    const alternativeGast = alternation2.definition[currPathAndIdx.idx];
    if (alternativeGast.ignoreAmbiguities === true) {
      return [];
    }
    const targetIdx = currPathAndIdx.idx;
    const targetPath = currPathAndIdx.path;
    const prefixAmbiguitiesPathsAndIndices = filter_default(pathsAndIndices, (searchPathAndIdx) => {
      return (
        // ignore (skip) ambiguities with this "other" alternative
        alternation2.definition[searchPathAndIdx.idx].ignoreAmbiguities !== true && searchPathAndIdx.idx < targetIdx && // checking for strict prefix because identical lookaheads
        // will be be detected using a different validation.
        isStrictPrefixOfPath(searchPathAndIdx.path, targetPath)
      );
    });
    const currPathPrefixErrors = map_default(prefixAmbiguitiesPathsAndIndices, (currAmbPathAndIdx) => {
      const ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
      const occurrence = alternation2.idx === 0 ? "" : alternation2.idx;
      const message = errMsgProvider.buildAlternationPrefixAmbiguityError({
        topLevelRule: rule,
        alternation: alternation2,
        ambiguityIndices: ambgIndices,
        prefixPath: currAmbPathAndIdx.path
      });
      return {
        message,
        type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
        ruleName: rule.name,
        occurrence,
        alternatives: ambgIndices
      };
    });
    return currPathPrefixErrors;
  }));
  return errors;
}
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
  const errors = [];
  const tokenNames = map_default(tokenTypes, (currToken) => currToken.name);
  forEach_default(topLevels, (currRule) => {
    const currRuleName = currRule.name;
    if (includes_default(tokenNames, currRuleName)) {
      const errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
      errors.push({
        message: errMsg,
        type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: currRuleName
      });
    }
  });
  return errors;
}

// node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js
function resolveGrammar2(options) {
  const actualOptions = defaults_default(options, {
    errMsgProvider: defaultGrammarResolverErrorProvider
  });
  const topRulesTable = {};
  forEach_default(options.rules, (rule) => {
    topRulesTable[rule.name] = rule;
  });
  return resolveGrammar(topRulesTable, actualOptions.errMsgProvider);
}
function validateGrammar2(options) {
  options = defaults_default(options, {
    errMsgProvider: defaultGrammarValidatorErrorProvider
  });
  return validateGrammar(options.rules, options.tokenTypes, options.errMsgProvider, options.grammarName);
}

// node_modules/chevrotain/lib/src/parse/exceptions_public.js
var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
var NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
var EARLY_EXIT_EXCEPTION = "EarlyExitException";
var NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
var RECOGNITION_EXCEPTION_NAMES = [
  MISMATCHED_TOKEN_EXCEPTION,
  NO_VIABLE_ALT_EXCEPTION,
  EARLY_EXIT_EXCEPTION,
  NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
function isRecognitionException(error) {
  return includes_default(RECOGNITION_EXCEPTION_NAMES, error.name);
}
var RecognitionException = class extends Error {
  constructor(message, token) {
    super(message);
    this.token = token;
    this.resyncedTokens = [];
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var MismatchedTokenException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = MISMATCHED_TOKEN_EXCEPTION;
  }
};
var NoViableAltException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = NO_VIABLE_ALT_EXCEPTION;
  }
};
var NotAllInputParsedException = class extends RecognitionException {
  constructor(message, token) {
    super(message, token);
    this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
  }
};
var EarlyExitException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = EARLY_EXIT_EXCEPTION;
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js
var EOF_FOLLOW_KEY = {};
var IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
var InRuleRecoveryException = class extends Error {
  constructor(message) {
    super(message);
    this.name = IN_RULE_RECOVERY_EXCEPTION;
  }
};
var Recoverable = class {
  initRecoverable(config) {
    this.firstAfterRepMap = {};
    this.resyncFollows = {};
    this.recoveryEnabled = has_default(config, "recoveryEnabled") ? config.recoveryEnabled : DEFAULT_PARSER_CONFIG.recoveryEnabled;
    if (this.recoveryEnabled) {
      this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
    }
  }
  getTokenToInsert(tokType) {
    const tokToInsert = createTokenInstance(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
    tokToInsert.isInsertedInRecovery = true;
    return tokToInsert;
  }
  canTokenTypeBeInsertedInRecovery(tokType) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(tokType) {
    return true;
  }
  tryInRepetitionRecovery(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
    const reSyncTokType = this.findReSyncTokenType();
    const savedLexerState = this.exportLexerState();
    const resyncedTokens = [];
    let passedResyncPoint = false;
    const nextTokenWithoutResync = this.LA(1);
    let currToken = this.LA(1);
    const generateErrorMessage = () => {
      const previousToken = this.LA(0);
      const msg = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: expectedTokType,
        actual: nextTokenWithoutResync,
        previous: previousToken,
        ruleName: this.getCurrRuleFullName()
      });
      const error = new MismatchedTokenException(msg, nextTokenWithoutResync, this.LA(0));
      error.resyncedTokens = dropRight_default(resyncedTokens);
      this.SAVE_ERROR(error);
    };
    while (!passedResyncPoint) {
      if (this.tokenMatcher(currToken, expectedTokType)) {
        generateErrorMessage();
        return;
      } else if (lookAheadFunc.call(this)) {
        generateErrorMessage();
        grammarRule.apply(this, grammarRuleArgs);
        return;
      } else if (this.tokenMatcher(currToken, reSyncTokType)) {
        passedResyncPoint = true;
      } else {
        currToken = this.SKIP_TOKEN();
        this.addToResyncTokens(currToken, resyncedTokens);
      }
    }
    this.importLexerState(savedLexerState);
  }
  shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck) {
    if (notStuck === false) {
      return false;
    }
    if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
      return false;
    }
    if (this.isBackTracking()) {
      return false;
    }
    if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
      return false;
    }
    return true;
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(tokType, tokIdxInRule) {
    const grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
    const follows = this.getNextPossibleTokenTypes(grammarPath);
    return follows;
  }
  tryInRuleRecovery(expectedTokType, follows) {
    if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
      const tokToInsert = this.getTokenToInsert(expectedTokType);
      return tokToInsert;
    }
    if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
      const nextTok = this.SKIP_TOKEN();
      this.consumeToken();
      return nextTok;
    }
    throw new InRuleRecoveryException("sad sad panda");
  }
  canPerformInRuleRecovery(expectedToken, follows) {
    return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
  }
  canRecoverWithSingleTokenInsertion(expectedTokType, follows) {
    if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
      return false;
    }
    if (isEmpty_default(follows)) {
      return false;
    }
    const mismatchedTok = this.LA(1);
    const isMisMatchedTokInFollows = find_default(follows, (possibleFollowsTokType) => {
      return this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
    }) !== void 0;
    return isMisMatchedTokInFollows;
  }
  canRecoverWithSingleTokenDeletion(expectedTokType) {
    if (!this.canTokenTypeBeDeletedInRecovery(expectedTokType)) {
      return false;
    }
    const isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
    return isNextTokenWhatIsExpected;
  }
  isInCurrentRuleReSyncSet(tokenTypeIdx) {
    const followKey = this.getCurrFollowKey();
    const currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
    return includes_default(currentRuleReSyncSet, tokenTypeIdx);
  }
  findReSyncTokenType() {
    const allPossibleReSyncTokTypes = this.flattenFollowSet();
    let nextToken = this.LA(1);
    let k = 2;
    while (true) {
      const foundMatch = find_default(allPossibleReSyncTokTypes, (resyncTokType) => {
        const canMatch = tokenMatcher(nextToken, resyncTokType);
        return canMatch;
      });
      if (foundMatch !== void 0) {
        return foundMatch;
      }
      nextToken = this.LA(k);
      k++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1) {
      return EOF_FOLLOW_KEY;
    }
    const currRuleShortName = this.getLastExplicitRuleShortName();
    const currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
    const prevRuleShortName = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(currRuleShortName),
      idxInCallingRule: currRuleIdx,
      inRule: this.shortRuleNameToFullName(prevRuleShortName)
    };
  }
  buildFullFollowKeyStack() {
    const explicitRuleStack = this.RULE_STACK;
    const explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
    return map_default(explicitRuleStack, (ruleName, idx) => {
      if (idx === 0) {
        return EOF_FOLLOW_KEY;
      }
      return {
        ruleName: this.shortRuleNameToFullName(ruleName),
        idxInCallingRule: explicitOccurrenceStack[idx],
        inRule: this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
      };
    });
  }
  flattenFollowSet() {
    const followStack = map_default(this.buildFullFollowKeyStack(), (currKey) => {
      return this.getFollowSetFromFollowKey(currKey);
    });
    return flatten_default(followStack);
  }
  getFollowSetFromFollowKey(followKey) {
    if (followKey === EOF_FOLLOW_KEY) {
      return [EOF];
    }
    const followName = followKey.ruleName + followKey.idxInCallingRule + IN + followKey.inRule;
    return this.resyncFollows[followName];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(token, resyncTokens) {
    if (!this.tokenMatcher(token, EOF)) {
      resyncTokens.push(token);
    }
    return resyncTokens;
  }
  reSyncTo(tokType) {
    const resyncedTokens = [];
    let nextTok = this.LA(1);
    while (this.tokenMatcher(nextTok, tokType) === false) {
      nextTok = this.SKIP_TOKEN();
      this.addToResyncTokens(nextTok, resyncedTokens);
    }
    return dropRight_default(resyncedTokens);
  }
  attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
  }
  getCurrentGrammarPath(tokType, tokIdxInRule) {
    const pathRuleStack = this.getHumanReadableRuleStack();
    const pathOccurrenceStack = clone_default(this.RULE_OCCURRENCE_STACK);
    const grammarPath = {
      ruleStack: pathRuleStack,
      occurrenceStack: pathOccurrenceStack,
      lastTok: tokType,
      lastTokOccurrence: tokIdxInRule
    };
    return grammarPath;
  }
  getHumanReadableRuleStack() {
    return map_default(this.RULE_STACK, (currShortName) => this.shortRuleNameToFullName(currShortName));
  }
};
function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
  const key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
  let firstAfterRepInfo = this.firstAfterRepMap[key];
  if (firstAfterRepInfo === void 0) {
    const currRuleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[currRuleName];
    const walker = new nextToksWalker(ruleGrammar, prodOccurrence);
    firstAfterRepInfo = walker.startWalking();
    this.firstAfterRepMap[key] = firstAfterRepInfo;
  }
  let expectTokAfterLastMatch = firstAfterRepInfo.token;
  let nextTokIdx = firstAfterRepInfo.occurrence;
  const isEndOfRule = firstAfterRepInfo.isEndOfRule;
  if (this.RULE_STACK.length === 1 && isEndOfRule && expectTokAfterLastMatch === void 0) {
    expectTokAfterLastMatch = EOF;
    nextTokIdx = 1;
  }
  if (expectTokAfterLastMatch === void 0 || nextTokIdx === void 0) {
    return;
  }
  if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
    this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
  }
}

// node_modules/chevrotain/lib/src/parse/grammar/keys.js
var BITS_FOR_METHOD_TYPE = 4;
var BITS_FOR_OCCURRENCE_IDX = 8;
var BITS_FOR_ALT_IDX = 8;
var OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX;
var OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX;
var MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX;
var AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX;
var MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX;
var AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
  return occurrence | dslMethodIdx | ruleIdx;
}
var BITS_START_FOR_ALT_IDX = 32 - BITS_FOR_ALT_IDX;

// node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js
var LLkLookaheadStrategy = class {
  constructor(options) {
    var _a6;
    this.maxLookahead = (_a6 = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a6 !== void 0 ? _a6 : DEFAULT_PARSER_CONFIG.maxLookahead;
  }
  validate(options) {
    const leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
    if (isEmpty_default(leftRecursionErrors)) {
      const emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
      const ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
      const emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
      const allErrors = [
        ...leftRecursionErrors,
        ...emptyAltErrors,
        ...ambiguousAltsErrors,
        ...emptyRepetitionErrors
      ];
      return allErrors;
    }
    return leftRecursionErrors;
  }
  validateNoLeftRecursion(rules) {
    return flatMap_default(rules, (currTopRule) => validateNoLeftRecursion(currTopRule, currTopRule, defaultGrammarValidatorErrorProvider));
  }
  validateEmptyOrAlternatives(rules) {
    return flatMap_default(rules, (currTopRule) => validateEmptyOrAlternative(currTopRule, defaultGrammarValidatorErrorProvider));
  }
  validateAmbiguousAlternationAlternatives(rules, maxLookahead) {
    return flatMap_default(rules, (currTopRule) => validateAmbiguousAlternationAlternatives(currTopRule, maxLookahead, defaultGrammarValidatorErrorProvider));
  }
  validateSomeNonEmptyLookaheadPath(rules, maxLookahead) {
    return validateSomeNonEmptyLookaheadPath(rules, maxLookahead, defaultGrammarValidatorErrorProvider);
  }
  buildLookaheadForAlternation(options) {
    return buildLookaheadFuncForOr(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, buildAlternativesLookAheadFunc);
  }
  buildLookaheadForOptional(options) {
    return buildLookaheadFuncForOptionalProd(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, getProdType(options.prodType), buildSingleAlternativeLookaheadFunction);
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js
var LooksAhead = class {
  initLooksAhead(config) {
    this.dynamicTokensEnabled = has_default(config, "dynamicTokensEnabled") ? config.dynamicTokensEnabled : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
    this.maxLookahead = has_default(config, "maxLookahead") ? config.maxLookahead : DEFAULT_PARSER_CONFIG.maxLookahead;
    this.lookaheadStrategy = has_default(config, "lookaheadStrategy") ? config.lookaheadStrategy : new LLkLookaheadStrategy({ maxLookahead: this.maxLookahead });
    this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(rules) {
    forEach_default(rules, (currRule) => {
      this.TRACE_INIT(`${currRule.name} Rule Lookahead`, () => {
        const { alternation: alternation2, repetition: repetition2, option: option2, repetitionMandatory: repetitionMandatory2, repetitionMandatoryWithSeparator, repetitionWithSeparator } = collectMethods(currRule);
        forEach_default(alternation2, (currProd) => {
          const prodIdx = currProd.idx === 0 ? "" : currProd.idx;
          this.TRACE_INIT(`${getProductionDslName(currProd)}${prodIdx}`, () => {
            const laFunc = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: currProd.idx,
              rule: currRule,
              maxLookahead: currProd.maxLookahead || this.maxLookahead,
              hasPredicates: currProd.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            });
            const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[currRule.name], OR_IDX, currProd.idx);
            this.setLaFuncCache(key, laFunc);
          });
        });
        forEach_default(repetition2, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, MANY_IDX, "Repetition", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(option2, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, OPTION_IDX, "Option", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionMandatory2, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_IDX, "RepetitionMandatory", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionMandatoryWithSeparator, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionWithSeparator, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, MANY_SEP_IDX, "RepetitionWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
        });
      });
    });
  }
  computeLookaheadFunc(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
    this.TRACE_INIT(`${dslMethodName}${prodOccurrence === 0 ? "" : prodOccurrence}`, () => {
      const laFunc = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence,
        rule,
        maxLookahead: prodMaxLookahead || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType
      });
      const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
      this.setLaFuncCache(key, laFunc);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(dslMethodIdx, occurrence) {
    const currRuleShortName = this.getLastExplicitRuleShortName();
    return getKeyForAutomaticLookahead(currRuleShortName, dslMethodIdx, occurrence);
  }
  getLaFuncFromCache(key) {
    return this.lookAheadFuncsCache.get(key);
  }
  /* istanbul ignore next */
  setLaFuncCache(key, value) {
    this.lookAheadFuncsCache.set(key, value);
  }
};
var DslMethodsCollectorVisitor = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(option2) {
    this.dslMethods.option.push(option2);
  }
  visitRepetitionWithSeparator(manySep) {
    this.dslMethods.repetitionWithSeparator.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.dslMethods.repetitionMandatory.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.dslMethods.repetition.push(many);
  }
  visitAlternation(or) {
    this.dslMethods.alternation.push(or);
  }
};
var collectorVisitor = new DslMethodsCollectorVisitor();
function collectMethods(rule) {
  collectorVisitor.reset();
  rule.accept(collectorVisitor);
  const dslMethods = collectorVisitor.dslMethods;
  collectorVisitor.reset();
  return dslMethods;
}

// node_modules/chevrotain/lib/src/parse/cst/cst.js
function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
  if (isNaN(currNodeLocation.startOffset) === true) {
    currNodeLocation.startOffset = newLocationInfo.startOffset;
    currNodeLocation.endOffset = newLocationInfo.endOffset;
  } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
    currNodeLocation.endOffset = newLocationInfo.endOffset;
  }
}
function setNodeLocationFull(currNodeLocation, newLocationInfo) {
  if (isNaN(currNodeLocation.startOffset) === true) {
    currNodeLocation.startOffset = newLocationInfo.startOffset;
    currNodeLocation.startColumn = newLocationInfo.startColumn;
    currNodeLocation.startLine = newLocationInfo.startLine;
    currNodeLocation.endOffset = newLocationInfo.endOffset;
    currNodeLocation.endColumn = newLocationInfo.endColumn;
    currNodeLocation.endLine = newLocationInfo.endLine;
  } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
    currNodeLocation.endOffset = newLocationInfo.endOffset;
    currNodeLocation.endColumn = newLocationInfo.endColumn;
    currNodeLocation.endLine = newLocationInfo.endLine;
  }
}
function addTerminalToCst(node, token, tokenTypeName) {
  if (node.children[tokenTypeName] === void 0) {
    node.children[tokenTypeName] = [token];
  } else {
    node.children[tokenTypeName].push(token);
  }
}
function addNoneTerminalToCst(node, ruleName, ruleResult) {
  if (node.children[ruleName] === void 0) {
    node.children[ruleName] = [ruleResult];
  } else {
    node.children[ruleName].push(ruleResult);
  }
}

// node_modules/chevrotain/lib/src/lang/lang_extensions.js
var NAME = "name";
function defineNameProp(obj, nameValue) {
  Object.defineProperty(obj, NAME, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: nameValue
  });
}

// node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js
function defaultVisit(ctx, param) {
  const childrenNames = keys_default(ctx);
  const childrenNamesLength = childrenNames.length;
  for (let i = 0; i < childrenNamesLength; i++) {
    const currChildName = childrenNames[i];
    const currChildArray = ctx[currChildName];
    const currChildArrayLength = currChildArray.length;
    for (let j = 0; j < currChildArrayLength; j++) {
      const currChild = currChildArray[j];
      if (currChild.tokenTypeIdx === void 0) {
        this[currChild.name](currChild.children, param);
      }
    }
  }
}
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
  const derivedConstructor = function() {
  };
  defineNameProp(derivedConstructor, grammarName + "BaseSemantics");
  const semanticProto = {
    visit: function(cstNode, param) {
      if (isArray_default(cstNode)) {
        cstNode = cstNode[0];
      }
      if (isUndefined_default(cstNode)) {
        return void 0;
      }
      return this[cstNode.name](cstNode.children, param);
    },
    validateVisitor: function() {
      const semanticDefinitionErrors = validateVisitor(this, ruleNames);
      if (!isEmpty_default(semanticDefinitionErrors)) {
        const errorMessages = map_default(semanticDefinitionErrors, (currDefError) => currDefError.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${errorMessages.join("\n\n").replace(/\n/g, "\n	")}`);
      }
    }
  };
  derivedConstructor.prototype = semanticProto;
  derivedConstructor.prototype.constructor = derivedConstructor;
  derivedConstructor._RULE_NAMES = ruleNames;
  return derivedConstructor;
}
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
  const derivedConstructor = function() {
  };
  defineNameProp(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
  const withDefaultsProto = Object.create(baseConstructor.prototype);
  forEach_default(ruleNames, (ruleName) => {
    withDefaultsProto[ruleName] = defaultVisit;
  });
  derivedConstructor.prototype = withDefaultsProto;
  derivedConstructor.prototype.constructor = derivedConstructor;
  return derivedConstructor;
}
var CstVisitorDefinitionError;
(function(CstVisitorDefinitionError2) {
  CstVisitorDefinitionError2[CstVisitorDefinitionError2["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
  CstVisitorDefinitionError2[CstVisitorDefinitionError2["MISSING_METHOD"] = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
function validateVisitor(visitorInstance, ruleNames) {
  const missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
  return missingErrors;
}
function validateMissingCstMethods(visitorInstance, ruleNames) {
  const missingRuleNames = filter_default(ruleNames, (currRuleName) => {
    return isFunction_default(visitorInstance[currRuleName]) === false;
  });
  const errors = map_default(missingRuleNames, (currRuleName) => {
    return {
      msg: `Missing visitor method: <${currRuleName}> on ${visitorInstance.constructor.name} CST Visitor.`,
      type: CstVisitorDefinitionError.MISSING_METHOD,
      methodName: currRuleName
    };
  });
  return compact_default(errors);
}

// node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js
var TreeBuilder = class {
  initTreeBuilder(config) {
    this.CST_STACK = [];
    this.outputCst = config.outputCst;
    this.nodeLocationTracking = has_default(config, "nodeLocationTracking") ? config.nodeLocationTracking : DEFAULT_PARSER_CONFIG.nodeLocationTracking;
    if (!this.outputCst) {
      this.cstInvocationStateUpdate = noop_default;
      this.cstFinallyStateUpdate = noop_default;
      this.cstPostTerminal = noop_default;
      this.cstPostNonTerminal = noop_default;
      this.cstPostRule = noop_default;
    } else {
      if (/full/i.test(this.nodeLocationTracking)) {
        if (this.recoveryEnabled) {
          this.setNodeLocationFromToken = setNodeLocationFull;
          this.setNodeLocationFromNode = setNodeLocationFull;
          this.cstPostRule = noop_default;
          this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
        } else {
          this.setNodeLocationFromToken = noop_default;
          this.setNodeLocationFromNode = noop_default;
          this.cstPostRule = this.cstPostRuleFull;
          this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
        }
      } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
        if (this.recoveryEnabled) {
          this.setNodeLocationFromToken = setNodeLocationOnlyOffset;
          this.setNodeLocationFromNode = setNodeLocationOnlyOffset;
          this.cstPostRule = noop_default;
          this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
        } else {
          this.setNodeLocationFromToken = noop_default;
          this.setNodeLocationFromNode = noop_default;
          this.cstPostRule = this.cstPostRuleOnlyOffset;
          this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
        }
      } else if (/none/i.test(this.nodeLocationTracking)) {
        this.setNodeLocationFromToken = noop_default;
        this.setNodeLocationFromNode = noop_default;
        this.cstPostRule = noop_default;
        this.setInitialNodeLocation = noop_default;
      } else {
        throw Error(`Invalid <nodeLocationTracking> config option: "${config.nodeLocationTracking}"`);
      }
    }
  }
  setInitialNodeLocationOnlyOffsetRecovery(cstNode) {
    cstNode.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(cstNode) {
    cstNode.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(cstNode) {
    cstNode.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(cstNode) {
    const nextToken = this.LA(1);
    cstNode.location = {
      startOffset: nextToken.startOffset,
      startLine: nextToken.startLine,
      startColumn: nextToken.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(fullRuleName) {
    const cstNode = {
      name: fullRuleName,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(cstNode);
    this.CST_STACK.push(cstNode);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(ruleCstNode) {
    const prevToken = this.LA(0);
    const loc = ruleCstNode.location;
    if (loc.startOffset <= prevToken.startOffset === true) {
      loc.endOffset = prevToken.endOffset;
      loc.endLine = prevToken.endLine;
      loc.endColumn = prevToken.endColumn;
    } else {
      loc.startOffset = NaN;
      loc.startLine = NaN;
      loc.startColumn = NaN;
    }
  }
  cstPostRuleOnlyOffset(ruleCstNode) {
    const prevToken = this.LA(0);
    const loc = ruleCstNode.location;
    if (loc.startOffset <= prevToken.startOffset === true) {
      loc.endOffset = prevToken.endOffset;
    } else {
      loc.startOffset = NaN;
    }
  }
  cstPostTerminal(key, consumedToken) {
    const rootCst = this.CST_STACK[this.CST_STACK.length - 1];
    addTerminalToCst(rootCst, consumedToken, key);
    this.setNodeLocationFromToken(rootCst.location, consumedToken);
  }
  cstPostNonTerminal(ruleCstResult, ruleName) {
    const preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
    addNoneTerminalToCst(preCstNode, ruleName, ruleCstResult);
    this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
  }
  getBaseCstVisitorConstructor() {
    if (isUndefined_default(this.baseCstVisitorConstructor)) {
      const newBaseCstVisitorConstructor = createBaseSemanticVisitorConstructor(this.className, keys_default(this.gastProductionsCache));
      this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
      return newBaseCstVisitorConstructor;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (isUndefined_default(this.baseCstVisitorWithDefaultsConstructor)) {
      const newConstructor = createBaseVisitorConstructorWithDefaults(this.className, keys_default(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      this.baseCstVisitorWithDefaultsConstructor = newConstructor;
      return newConstructor;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const ruleStack = this.RULE_STACK;
    return ruleStack[ruleStack.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const ruleStack = this.RULE_STACK;
    return ruleStack[ruleStack.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const occurrenceStack = this.RULE_OCCURRENCE_STACK;
    return occurrenceStack[occurrenceStack.length - 1];
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js
var LexerAdapter = class {
  initLexerAdapter() {
    this.tokVector = [];
    this.tokVectorLength = 0;
    this.currIdx = -1;
  }
  set input(newInput) {
    if (this.selfAnalysisDone !== true) {
      throw Error(`Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.`);
    }
    this.reset();
    this.tokVector = newInput;
    this.tokVectorLength = newInput.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    if (this.currIdx <= this.tokVector.length - 2) {
      this.consumeToken();
      return this.LA(1);
    } else {
      return END_OF_FILE;
    }
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(howMuch) {
    const soughtIdx = this.currIdx + howMuch;
    if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
      return END_OF_FILE;
    } else {
      return this.tokVector[soughtIdx];
    }
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(newState2) {
    this.currIdx = newState2;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js
var RecognizerApi = class {
  ACTION(impl) {
    return impl.call(this);
  }
  consume(idx, tokType, options) {
    return this.consumeInternal(tokType, idx, options);
  }
  subrule(idx, ruleToCall, options) {
    return this.subruleInternal(ruleToCall, idx, options);
  }
  option(idx, actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, idx);
  }
  or(idx, altsOrOpts) {
    return this.orInternal(altsOrOpts, idx);
  }
  many(idx, actionORMethodDef) {
    return this.manyInternal(idx, actionORMethodDef);
  }
  atLeastOne(idx, actionORMethodDef) {
    return this.atLeastOneInternal(idx, actionORMethodDef);
  }
  CONSUME(tokType, options) {
    return this.consumeInternal(tokType, 0, options);
  }
  CONSUME1(tokType, options) {
    return this.consumeInternal(tokType, 1, options);
  }
  CONSUME2(tokType, options) {
    return this.consumeInternal(tokType, 2, options);
  }
  CONSUME3(tokType, options) {
    return this.consumeInternal(tokType, 3, options);
  }
  CONSUME4(tokType, options) {
    return this.consumeInternal(tokType, 4, options);
  }
  CONSUME5(tokType, options) {
    return this.consumeInternal(tokType, 5, options);
  }
  CONSUME6(tokType, options) {
    return this.consumeInternal(tokType, 6, options);
  }
  CONSUME7(tokType, options) {
    return this.consumeInternal(tokType, 7, options);
  }
  CONSUME8(tokType, options) {
    return this.consumeInternal(tokType, 8, options);
  }
  CONSUME9(tokType, options) {
    return this.consumeInternal(tokType, 9, options);
  }
  SUBRULE(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 0, options);
  }
  SUBRULE1(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 1, options);
  }
  SUBRULE2(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 2, options);
  }
  SUBRULE3(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 3, options);
  }
  SUBRULE4(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 4, options);
  }
  SUBRULE5(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 5, options);
  }
  SUBRULE6(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 6, options);
  }
  SUBRULE7(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 7, options);
  }
  SUBRULE8(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 8, options);
  }
  SUBRULE9(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 9, options);
  }
  OPTION(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 0);
  }
  OPTION1(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 1);
  }
  OPTION2(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 2);
  }
  OPTION3(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 3);
  }
  OPTION4(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 4);
  }
  OPTION5(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 5);
  }
  OPTION6(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 6);
  }
  OPTION7(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 7);
  }
  OPTION8(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 8);
  }
  OPTION9(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 9);
  }
  OR(altsOrOpts) {
    return this.orInternal(altsOrOpts, 0);
  }
  OR1(altsOrOpts) {
    return this.orInternal(altsOrOpts, 1);
  }
  OR2(altsOrOpts) {
    return this.orInternal(altsOrOpts, 2);
  }
  OR3(altsOrOpts) {
    return this.orInternal(altsOrOpts, 3);
  }
  OR4(altsOrOpts) {
    return this.orInternal(altsOrOpts, 4);
  }
  OR5(altsOrOpts) {
    return this.orInternal(altsOrOpts, 5);
  }
  OR6(altsOrOpts) {
    return this.orInternal(altsOrOpts, 6);
  }
  OR7(altsOrOpts) {
    return this.orInternal(altsOrOpts, 7);
  }
  OR8(altsOrOpts) {
    return this.orInternal(altsOrOpts, 8);
  }
  OR9(altsOrOpts) {
    return this.orInternal(altsOrOpts, 9);
  }
  MANY(actionORMethodDef) {
    this.manyInternal(0, actionORMethodDef);
  }
  MANY1(actionORMethodDef) {
    this.manyInternal(1, actionORMethodDef);
  }
  MANY2(actionORMethodDef) {
    this.manyInternal(2, actionORMethodDef);
  }
  MANY3(actionORMethodDef) {
    this.manyInternal(3, actionORMethodDef);
  }
  MANY4(actionORMethodDef) {
    this.manyInternal(4, actionORMethodDef);
  }
  MANY5(actionORMethodDef) {
    this.manyInternal(5, actionORMethodDef);
  }
  MANY6(actionORMethodDef) {
    this.manyInternal(6, actionORMethodDef);
  }
  MANY7(actionORMethodDef) {
    this.manyInternal(7, actionORMethodDef);
  }
  MANY8(actionORMethodDef) {
    this.manyInternal(8, actionORMethodDef);
  }
  MANY9(actionORMethodDef) {
    this.manyInternal(9, actionORMethodDef);
  }
  MANY_SEP(options) {
    this.manySepFirstInternal(0, options);
  }
  MANY_SEP1(options) {
    this.manySepFirstInternal(1, options);
  }
  MANY_SEP2(options) {
    this.manySepFirstInternal(2, options);
  }
  MANY_SEP3(options) {
    this.manySepFirstInternal(3, options);
  }
  MANY_SEP4(options) {
    this.manySepFirstInternal(4, options);
  }
  MANY_SEP5(options) {
    this.manySepFirstInternal(5, options);
  }
  MANY_SEP6(options) {
    this.manySepFirstInternal(6, options);
  }
  MANY_SEP7(options) {
    this.manySepFirstInternal(7, options);
  }
  MANY_SEP8(options) {
    this.manySepFirstInternal(8, options);
  }
  MANY_SEP9(options) {
    this.manySepFirstInternal(9, options);
  }
  AT_LEAST_ONE(actionORMethodDef) {
    this.atLeastOneInternal(0, actionORMethodDef);
  }
  AT_LEAST_ONE1(actionORMethodDef) {
    return this.atLeastOneInternal(1, actionORMethodDef);
  }
  AT_LEAST_ONE2(actionORMethodDef) {
    this.atLeastOneInternal(2, actionORMethodDef);
  }
  AT_LEAST_ONE3(actionORMethodDef) {
    this.atLeastOneInternal(3, actionORMethodDef);
  }
  AT_LEAST_ONE4(actionORMethodDef) {
    this.atLeastOneInternal(4, actionORMethodDef);
  }
  AT_LEAST_ONE5(actionORMethodDef) {
    this.atLeastOneInternal(5, actionORMethodDef);
  }
  AT_LEAST_ONE6(actionORMethodDef) {
    this.atLeastOneInternal(6, actionORMethodDef);
  }
  AT_LEAST_ONE7(actionORMethodDef) {
    this.atLeastOneInternal(7, actionORMethodDef);
  }
  AT_LEAST_ONE8(actionORMethodDef) {
    this.atLeastOneInternal(8, actionORMethodDef);
  }
  AT_LEAST_ONE9(actionORMethodDef) {
    this.atLeastOneInternal(9, actionORMethodDef);
  }
  AT_LEAST_ONE_SEP(options) {
    this.atLeastOneSepFirstInternal(0, options);
  }
  AT_LEAST_ONE_SEP1(options) {
    this.atLeastOneSepFirstInternal(1, options);
  }
  AT_LEAST_ONE_SEP2(options) {
    this.atLeastOneSepFirstInternal(2, options);
  }
  AT_LEAST_ONE_SEP3(options) {
    this.atLeastOneSepFirstInternal(3, options);
  }
  AT_LEAST_ONE_SEP4(options) {
    this.atLeastOneSepFirstInternal(4, options);
  }
  AT_LEAST_ONE_SEP5(options) {
    this.atLeastOneSepFirstInternal(5, options);
  }
  AT_LEAST_ONE_SEP6(options) {
    this.atLeastOneSepFirstInternal(6, options);
  }
  AT_LEAST_ONE_SEP7(options) {
    this.atLeastOneSepFirstInternal(7, options);
  }
  AT_LEAST_ONE_SEP8(options) {
    this.atLeastOneSepFirstInternal(8, options);
  }
  AT_LEAST_ONE_SEP9(options) {
    this.atLeastOneSepFirstInternal(9, options);
  }
  RULE(name, implementation, config = DEFAULT_RULE_CONFIG) {
    if (includes_default(this.definedRulesNames, name)) {
      const errMsg = defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
        topLevelRule: name,
        grammarName: this.className
      });
      const error = {
        message: errMsg,
        type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
        ruleName: name
      };
      this.definitionErrors.push(error);
    }
    this.definedRulesNames.push(name);
    const ruleImplementation = this.defineRule(name, implementation, config);
    this[name] = ruleImplementation;
    return ruleImplementation;
  }
  OVERRIDE_RULE(name, impl, config = DEFAULT_RULE_CONFIG) {
    const ruleErrors = validateRuleIsOverridden(name, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(ruleErrors);
    const ruleImplementation = this.defineRule(name, impl, config);
    this[name] = ruleImplementation;
    return ruleImplementation;
  }
  BACKTRACK(grammarRule, args) {
    return function() {
      this.isBackTrackingStack.push(1);
      const orgState = this.saveRecogState();
      try {
        grammarRule.apply(this, args);
        return true;
      } catch (e) {
        if (isRecognitionException(e)) {
          return false;
        } else {
          throw e;
        }
      } finally {
        this.reloadRecogState(orgState);
        this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return serializeGrammar(values_default(this.gastProductionsCache));
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js
var RecognizerEngine = class {
  initRecognizerEngine(tokenVocabulary, config) {
    this.className = this.constructor.name;
    this.shortRuleNameToFull = {};
    this.fullRuleNameToShort = {};
    this.ruleShortNameIdx = 256;
    this.tokenMatcher = tokenStructuredMatcherNoCategories;
    this.subruleIdx = 0;
    this.definedRulesNames = [];
    this.tokensMap = {};
    this.isBackTrackingStack = [];
    this.RULE_STACK = [];
    this.RULE_OCCURRENCE_STACK = [];
    this.gastProductionsCache = {};
    if (has_default(config, "serializedGrammar")) {
      throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
    }
    if (isArray_default(tokenVocabulary)) {
      if (isEmpty_default(tokenVocabulary)) {
        throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
      }
      if (typeof tokenVocabulary[0].startOffset === "number") {
        throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
      }
    }
    if (isArray_default(tokenVocabulary)) {
      this.tokensMap = reduce_default(tokenVocabulary, (acc, tokType) => {
        acc[tokType.name] = tokType;
        return acc;
      }, {});
    } else if (has_default(tokenVocabulary, "modes") && every_default(flatten_default(values_default(tokenVocabulary.modes)), isTokenType)) {
      const allTokenTypes2 = flatten_default(values_default(tokenVocabulary.modes));
      const uniqueTokens = uniq_default(allTokenTypes2);
      this.tokensMap = reduce_default(uniqueTokens, (acc, tokType) => {
        acc[tokType.name] = tokType;
        return acc;
      }, {});
    } else if (isObject_default(tokenVocabulary)) {
      this.tokensMap = clone_default(tokenVocabulary);
    } else {
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    }
    this.tokensMap["EOF"] = EOF;
    const allTokenTypes = has_default(tokenVocabulary, "modes") ? flatten_default(values_default(tokenVocabulary.modes)) : values_default(tokenVocabulary);
    const noTokenCategoriesUsed = every_default(allTokenTypes, (tokenConstructor) => isEmpty_default(tokenConstructor.categoryMatches));
    this.tokenMatcher = noTokenCategoriesUsed ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
    augmentTokenTypes(values_default(this.tokensMap));
  }
  defineRule(ruleName, impl, config) {
    if (this.selfAnalysisDone) {
      throw Error(`Grammar rule <${ruleName}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    }
    const resyncEnabled = has_default(config, "resyncEnabled") ? config.resyncEnabled : DEFAULT_RULE_CONFIG.resyncEnabled;
    const recoveryValueFunc = has_default(config, "recoveryValueFunc") ? config.recoveryValueFunc : DEFAULT_RULE_CONFIG.recoveryValueFunc;
    const shortName = this.ruleShortNameIdx << BITS_FOR_METHOD_TYPE + BITS_FOR_OCCURRENCE_IDX;
    this.ruleShortNameIdx++;
    this.shortRuleNameToFull[shortName] = ruleName;
    this.fullRuleNameToShort[ruleName] = shortName;
    let invokeRuleWithTry;
    if (this.outputCst === true) {
      invokeRuleWithTry = function invokeRuleWithTry2(...args) {
        try {
          this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
          impl.apply(this, args);
          const cst = this.CST_STACK[this.CST_STACK.length - 1];
          this.cstPostRule(cst);
          return cst;
        } catch (e) {
          return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      };
    } else {
      invokeRuleWithTry = function invokeRuleWithTryCst(...args) {
        try {
          this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
          return impl.apply(this, args);
        } catch (e) {
          return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      };
    }
    const wrappedGrammarRule = Object.assign(invokeRuleWithTry, { ruleName, originalGrammarAction: impl });
    return wrappedGrammarRule;
  }
  invokeRuleCatch(e, resyncEnabledConfig, recoveryValueFunc) {
    const isFirstInvokedRule = this.RULE_STACK.length === 1;
    const reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
    if (isRecognitionException(e)) {
      const recogError = e;
      if (reSyncEnabled) {
        const reSyncTokType = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
          recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
          if (this.outputCst) {
            const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
            partialCstResult.recoveredNode = true;
            return partialCstResult;
          } else {
            return recoveryValueFunc(e);
          }
        } else {
          if (this.outputCst) {
            const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
            partialCstResult.recoveredNode = true;
            recogError.partialCstResult = partialCstResult;
          }
          throw recogError;
        }
      } else if (isFirstInvokedRule) {
        this.moveToTerminatedState();
        return recoveryValueFunc(e);
      } else {
        throw recogError;
      }
    } else {
      throw e;
    }
  }
  // Implementation of parsing DSL
  optionInternal(actionORMethodDef, occurrence) {
    const key = this.getKeyForAutomaticLookahead(OPTION_IDX, occurrence);
    return this.optionInternalLogic(actionORMethodDef, occurrence, key);
  }
  optionInternalLogic(actionORMethodDef, occurrence, key) {
    let lookAheadFunc = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookAheadFunc;
        lookAheadFunc = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    if (lookAheadFunc.call(this) === true) {
      return action.call(this);
    }
    return void 0;
  }
  atLeastOneInternal(prodOccurrence, actionORMethodDef) {
    const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, prodOccurrence);
    return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
  }
  atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key) {
    let lookAheadFunc = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookAheadFunc;
        lookAheadFunc = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    if (lookAheadFunc.call(this) === true) {
      let notStuck = this.doSingleRepetition(action);
      while (lookAheadFunc.call(this) === true && notStuck === true) {
        notStuck = this.doSingleRepetition(action);
      }
    } else {
      throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
    }
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, AT_LEAST_ONE_IDX, prodOccurrence, NextTerminalAfterAtLeastOneWalker);
  }
  atLeastOneSepFirstInternal(prodOccurrence, options) {
    const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, prodOccurrence);
    this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
  }
  atLeastOneSepFirstInternalLogic(prodOccurrence, options, key) {
    const action = options.DEF;
    const separator = options.SEP;
    const firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
    if (firstIterationLookaheadFunc.call(this) === true) {
      action.call(this);
      const separatorLookAheadFunc = () => {
        return this.tokenMatcher(this.LA(1), separator);
      };
      while (this.tokenMatcher(this.LA(1), separator) === true) {
        this.CONSUME(separator);
        action.call(this);
      }
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        prodOccurrence,
        separator,
        separatorLookAheadFunc,
        action,
        NextTerminalAfterAtLeastOneSepWalker
      ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, NextTerminalAfterAtLeastOneSepWalker);
    } else {
      throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
    }
  }
  manyInternal(prodOccurrence, actionORMethodDef) {
    const laKey = this.getKeyForAutomaticLookahead(MANY_IDX, prodOccurrence);
    return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
  }
  manyInternalLogic(prodOccurrence, actionORMethodDef, key) {
    let lookaheadFunction = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookaheadFunction;
        lookaheadFunction = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    let notStuck = true;
    while (lookaheadFunction.call(this) === true && notStuck === true) {
      notStuck = this.doSingleRepetition(action);
    }
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [prodOccurrence, actionORMethodDef],
      lookaheadFunction,
      MANY_IDX,
      prodOccurrence,
      NextTerminalAfterManyWalker,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      notStuck
    );
  }
  manySepFirstInternal(prodOccurrence, options) {
    const laKey = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, prodOccurrence);
    this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
  }
  manySepFirstInternalLogic(prodOccurrence, options, key) {
    const action = options.DEF;
    const separator = options.SEP;
    const firstIterationLaFunc = this.getLaFuncFromCache(key);
    if (firstIterationLaFunc.call(this) === true) {
      action.call(this);
      const separatorLookAheadFunc = () => {
        return this.tokenMatcher(this.LA(1), separator);
      };
      while (this.tokenMatcher(this.LA(1), separator) === true) {
        this.CONSUME(separator);
        action.call(this);
      }
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        prodOccurrence,
        separator,
        separatorLookAheadFunc,
        action,
        NextTerminalAfterManySepWalker
      ], separatorLookAheadFunc, MANY_SEP_IDX, prodOccurrence, NextTerminalAfterManySepWalker);
    }
  }
  repetitionSepSecondInternal(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
    while (separatorLookAheadFunc()) {
      this.CONSUME(separator);
      action.call(this);
    }
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      prodOccurrence,
      separator,
      separatorLookAheadFunc,
      action,
      nextTerminalAfterWalker
    ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
  }
  doSingleRepetition(action) {
    const beforeIteration = this.getLexerPosition();
    action.call(this);
    const afterIteration = this.getLexerPosition();
    return afterIteration > beforeIteration;
  }
  orInternal(altsOrOpts, occurrence) {
    const laKey = this.getKeyForAutomaticLookahead(OR_IDX, occurrence);
    const alts = isArray_default(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
    const laFunc = this.getLaFuncFromCache(laKey);
    const altIdxToTake = laFunc.call(this, alts);
    if (altIdxToTake !== void 0) {
      const chosenAlternative = alts[altIdxToTake];
      return chosenAlternative.ALT.call(this);
    }
    this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    this.RULE_STACK.pop();
    this.RULE_OCCURRENCE_STACK.pop();
    this.cstFinallyStateUpdate();
    if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      const firstRedundantTok = this.LA(1);
      const errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: firstRedundantTok,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new NotAllInputParsedException(errMsg, firstRedundantTok));
    }
  }
  subruleInternal(ruleToCall, idx, options) {
    let ruleResult;
    try {
      const args = options !== void 0 ? options.ARGS : void 0;
      this.subruleIdx = idx;
      ruleResult = ruleToCall.apply(this, args);
      this.cstPostNonTerminal(ruleResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleToCall.ruleName);
      return ruleResult;
    } catch (e) {
      throw this.subruleInternalError(e, options, ruleToCall.ruleName);
    }
  }
  subruleInternalError(e, options, ruleName) {
    if (isRecognitionException(e) && e.partialCstResult !== void 0) {
      this.cstPostNonTerminal(e.partialCstResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleName);
      delete e.partialCstResult;
    }
    throw e;
  }
  consumeInternal(tokType, idx, options) {
    let consumedToken;
    try {
      const nextToken = this.LA(1);
      if (this.tokenMatcher(nextToken, tokType) === true) {
        this.consumeToken();
        consumedToken = nextToken;
      } else {
        this.consumeInternalError(tokType, nextToken, options);
      }
    } catch (eFromConsumption) {
      consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
    }
    this.cstPostTerminal(options !== void 0 && options.LABEL !== void 0 ? options.LABEL : tokType.name, consumedToken);
    return consumedToken;
  }
  consumeInternalError(tokType, nextToken, options) {
    let msg;
    const previousToken = this.LA(0);
    if (options !== void 0 && options.ERR_MSG) {
      msg = options.ERR_MSG;
    } else {
      msg = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: tokType,
        actual: nextToken,
        previous: previousToken,
        ruleName: this.getCurrRuleFullName()
      });
    }
    throw this.SAVE_ERROR(new MismatchedTokenException(msg, nextToken, previousToken));
  }
  consumeInternalRecovery(tokType, idx, eFromConsumption) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const follows = this.getFollowsForInRuleRecovery(tokType, idx);
      try {
        return this.tryInRuleRecovery(tokType, follows);
      } catch (eFromInRuleRecovery) {
        if (eFromInRuleRecovery.name === IN_RULE_RECOVERY_EXCEPTION) {
          throw eFromConsumption;
        } else {
          throw eFromInRuleRecovery;
        }
      }
    } else {
      throw eFromConsumption;
    }
  }
  saveRecogState() {
    const savedErrors = this.errors;
    const savedRuleStack = clone_default(this.RULE_STACK);
    return {
      errors: savedErrors,
      lexerState: this.exportLexerState(),
      RULE_STACK: savedRuleStack,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(newState2) {
    this.errors = newState2.errors;
    this.importLexerState(newState2.lexerState);
    this.RULE_STACK = newState2.RULE_STACK;
  }
  ruleInvocationStateUpdate(shortName, fullName, idxInCallingRule) {
    this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
    this.RULE_STACK.push(shortName);
    this.cstInvocationStateUpdate(fullName);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const shortName = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[shortName];
  }
  shortRuleNameToFullName(shortName) {
    return this.shortRuleNameToFull[shortName];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), EOF);
  }
  reset() {
    this.resetLexerState();
    this.subruleIdx = 0;
    this.isBackTrackingStack = [];
    this.errors = [];
    this.RULE_STACK = [];
    this.CST_STACK = [];
    this.RULE_OCCURRENCE_STACK = [];
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js
var ErrorHandler = class {
  initErrorHandler(config) {
    this._errors = [];
    this.errorMessageProvider = has_default(config, "errorMessageProvider") ? config.errorMessageProvider : DEFAULT_PARSER_CONFIG.errorMessageProvider;
  }
  SAVE_ERROR(error) {
    if (isRecognitionException(error)) {
      error.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: clone_default(this.RULE_OCCURRENCE_STACK)
      };
      this._errors.push(error);
      return error;
    } else {
      throw Error("Trying to save an Error which is not a RecognitionException");
    }
  }
  get errors() {
    return clone_default(this._errors);
  }
  set errors(newErrors) {
    this._errors = newErrors;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(occurrence, prodType, userDefinedErrMsg) {
    const ruleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[ruleName];
    const lookAheadPathsPerAlternative = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead);
    const insideProdPaths = lookAheadPathsPerAlternative[0];
    const actualTokens = [];
    for (let i = 1; i <= this.maxLookahead; i++) {
      actualTokens.push(this.LA(i));
    }
    const msg = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: insideProdPaths,
      actual: actualTokens,
      previous: this.LA(0),
      customUserDescription: userDefinedErrMsg,
      ruleName
    });
    throw this.SAVE_ERROR(new EarlyExitException(msg, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(occurrence, errMsgTypes) {
    const ruleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[ruleName];
    const lookAheadPathsPerAlternative = getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead);
    const actualTokens = [];
    for (let i = 1; i <= this.maxLookahead; i++) {
      actualTokens.push(this.LA(i));
    }
    const previousToken = this.LA(0);
    const errMsg = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: lookAheadPathsPerAlternative,
      actual: actualTokens,
      previous: previousToken,
      customUserDescription: errMsgTypes,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new NoViableAltException(errMsg, this.LA(1), previousToken));
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js
var ContentAssist = class {
  initContentAssist() {
  }
  computeContentAssist(startRuleName, precedingInput) {
    const startRuleGast = this.gastProductionsCache[startRuleName];
    if (isUndefined_default(startRuleGast)) {
      throw Error(`Rule ->${startRuleName}<- does not exist in this grammar.`);
    }
    return nextPossibleTokensAfter([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(grammarPath) {
    const topRuleName = head_default(grammarPath.ruleStack);
    const gastProductions = this.getGAstProductions();
    const topProduction = gastProductions[topRuleName];
    const nextPossibleTokenTypes = new NextAfterTokenWalker(topProduction, grammarPath).startWalking();
    return nextPossibleTokenTypes;
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js
var RECORDING_NULL_OBJECT = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(RECORDING_NULL_OBJECT);
var HANDLE_SEPARATOR = true;
var MAX_METHOD_IDX = Math.pow(2, BITS_FOR_OCCURRENCE_IDX) - 1;
var RFT = createToken({ name: "RECORDING_PHASE_TOKEN", pattern: Lexer.NA });
augmentTokenTypes([RFT]);
var RECORDING_PHASE_TOKEN = createTokenInstance(
  RFT,
  "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(RECORDING_PHASE_TOKEN);
var RECORDING_PHASE_CSTNODE = {
  name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
  children: {}
};
var GastRecorder = class {
  initGastRecorder(config) {
    this.recordingProdStack = [];
    this.RECORDING_PHASE = false;
  }
  enableRecording() {
    this.RECORDING_PHASE = true;
    this.TRACE_INIT("Enable Recording", () => {
      for (let i = 0; i < 10; i++) {
        const idx = i > 0 ? i : "";
        this[`CONSUME${idx}`] = function(arg1, arg2) {
          return this.consumeInternalRecord(arg1, i, arg2);
        };
        this[`SUBRULE${idx}`] = function(arg1, arg2) {
          return this.subruleInternalRecord(arg1, i, arg2);
        };
        this[`OPTION${idx}`] = function(arg1) {
          return this.optionInternalRecord(arg1, i);
        };
        this[`OR${idx}`] = function(arg1) {
          return this.orInternalRecord(arg1, i);
        };
        this[`MANY${idx}`] = function(arg1) {
          this.manyInternalRecord(i, arg1);
        };
        this[`MANY_SEP${idx}`] = function(arg1) {
          this.manySepFirstInternalRecord(i, arg1);
        };
        this[`AT_LEAST_ONE${idx}`] = function(arg1) {
          this.atLeastOneInternalRecord(i, arg1);
        };
        this[`AT_LEAST_ONE_SEP${idx}`] = function(arg1) {
          this.atLeastOneSepFirstInternalRecord(i, arg1);
        };
      }
      this[`consume`] = function(idx, arg1, arg2) {
        return this.consumeInternalRecord(arg1, idx, arg2);
      };
      this[`subrule`] = function(idx, arg1, arg2) {
        return this.subruleInternalRecord(arg1, idx, arg2);
      };
      this[`option`] = function(idx, arg1) {
        return this.optionInternalRecord(arg1, idx);
      };
      this[`or`] = function(idx, arg1) {
        return this.orInternalRecord(arg1, idx);
      };
      this[`many`] = function(idx, arg1) {
        this.manyInternalRecord(idx, arg1);
      };
      this[`atLeastOne`] = function(idx, arg1) {
        this.atLeastOneInternalRecord(idx, arg1);
      };
      this.ACTION = this.ACTION_RECORD;
      this.BACKTRACK = this.BACKTRACK_RECORD;
      this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = false;
    this.TRACE_INIT("Deleting Recording methods", () => {
      const that = this;
      for (let i = 0; i < 10; i++) {
        const idx = i > 0 ? i : "";
        delete that[`CONSUME${idx}`];
        delete that[`SUBRULE${idx}`];
        delete that[`OPTION${idx}`];
        delete that[`OR${idx}`];
        delete that[`MANY${idx}`];
        delete that[`MANY_SEP${idx}`];
        delete that[`AT_LEAST_ONE${idx}`];
        delete that[`AT_LEAST_ONE_SEP${idx}`];
      }
      delete that[`consume`];
      delete that[`subrule`];
      delete that[`option`];
      delete that[`or`];
      delete that[`many`];
      delete that[`atLeastOne`];
      delete that.ACTION;
      delete that.BACKTRACK;
      delete that.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(impl) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(grammarRule, args) {
    return () => true;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(howMuch) {
    return END_OF_FILE;
  }
  topLevelRuleRecord(name, def) {
    try {
      const newTopLevelRule = new Rule({ definition: [], name });
      newTopLevelRule.name = name;
      this.recordingProdStack.push(newTopLevelRule);
      def.call(this);
      this.recordingProdStack.pop();
      return newTopLevelRule;
    } catch (originalError) {
      if (originalError.KNOWN_RECORDER_ERROR !== true) {
        try {
          originalError.message = originalError.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording';
        } catch (mutabilityError) {
          throw originalError;
        }
      }
      throw originalError;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(actionORMethodDef, occurrence) {
    return recordProd.call(this, Option, actionORMethodDef, occurrence);
  }
  atLeastOneInternalRecord(occurrence, actionORMethodDef) {
    recordProd.call(this, RepetitionMandatory, actionORMethodDef, occurrence);
  }
  atLeastOneSepFirstInternalRecord(occurrence, options) {
    recordProd.call(this, RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
  }
  manyInternalRecord(occurrence, actionORMethodDef) {
    recordProd.call(this, Repetition, actionORMethodDef, occurrence);
  }
  manySepFirstInternalRecord(occurrence, options) {
    recordProd.call(this, RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
  }
  orInternalRecord(altsOrOpts, occurrence) {
    return recordOrProd.call(this, altsOrOpts, occurrence);
  }
  subruleInternalRecord(ruleToCall, occurrence, options) {
    assertMethodIdxIsValid(occurrence);
    if (!ruleToCall || has_default(ruleToCall, "ruleName") === false) {
      const error = new Error(`<SUBRULE${getIdxSuffix(occurrence)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(ruleToCall)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      error.KNOWN_RECORDER_ERROR = true;
      throw error;
    }
    const prevProd = last_default(this.recordingProdStack);
    const ruleName = ruleToCall.ruleName;
    const newNoneTerminal = new NonTerminal({
      idx: occurrence,
      nonTerminalName: ruleName,
      label: options === null || options === void 0 ? void 0 : options.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    prevProd.definition.push(newNoneTerminal);
    return this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
  }
  consumeInternalRecord(tokType, occurrence, options) {
    assertMethodIdxIsValid(occurrence);
    if (!hasShortKeyProperty(tokType)) {
      const error = new Error(`<CONSUME${getIdxSuffix(occurrence)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(tokType)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      error.KNOWN_RECORDER_ERROR = true;
      throw error;
    }
    const prevProd = last_default(this.recordingProdStack);
    const newNoneTerminal = new Terminal({
      idx: occurrence,
      terminalType: tokType,
      label: options === null || options === void 0 ? void 0 : options.LABEL
    });
    prevProd.definition.push(newNoneTerminal);
    return RECORDING_PHASE_TOKEN;
  }
};
function recordProd(prodConstructor, mainProdArg, occurrence, handleSep = false) {
  assertMethodIdxIsValid(occurrence);
  const prevProd = last_default(this.recordingProdStack);
  const grammarAction = isFunction_default(mainProdArg) ? mainProdArg : mainProdArg.DEF;
  const newProd = new prodConstructor({ definition: [], idx: occurrence });
  if (handleSep) {
    newProd.separator = mainProdArg.SEP;
  }
  if (has_default(mainProdArg, "MAX_LOOKAHEAD")) {
    newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
  }
  this.recordingProdStack.push(newProd);
  grammarAction.call(this);
  prevProd.definition.push(newProd);
  this.recordingProdStack.pop();
  return RECORDING_NULL_OBJECT;
}
function recordOrProd(mainProdArg, occurrence) {
  assertMethodIdxIsValid(occurrence);
  const prevProd = last_default(this.recordingProdStack);
  const hasOptions = isArray_default(mainProdArg) === false;
  const alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
  const newOrProd = new Alternation({
    definition: [],
    idx: occurrence,
    ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
  });
  if (has_default(mainProdArg, "MAX_LOOKAHEAD")) {
    newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
  }
  const hasPredicates = some_default(alts, (currAlt) => isFunction_default(currAlt.GATE));
  newOrProd.hasPredicates = hasPredicates;
  prevProd.definition.push(newOrProd);
  forEach_default(alts, (currAlt) => {
    const currAltFlat = new Alternative({ definition: [] });
    newOrProd.definition.push(currAltFlat);
    if (has_default(currAlt, "IGNORE_AMBIGUITIES")) {
      currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES;
    } else if (has_default(currAlt, "GATE")) {
      currAltFlat.ignoreAmbiguities = true;
    }
    this.recordingProdStack.push(currAltFlat);
    currAlt.ALT.call(this);
    this.recordingProdStack.pop();
  });
  return RECORDING_NULL_OBJECT;
}
function getIdxSuffix(idx) {
  return idx === 0 ? "" : `${idx}`;
}
function assertMethodIdxIsValid(idx) {
  if (idx < 0 || idx > MAX_METHOD_IDX) {
    const error = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${idx}>
	Idx value must be a none negative value smaller than ${MAX_METHOD_IDX + 1}`
    );
    error.KNOWN_RECORDER_ERROR = true;
    throw error;
  }
}

// node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js
var PerformanceTracer = class {
  initPerformanceTracer(config) {
    if (has_default(config, "traceInitPerf")) {
      const userTraceInitPerf = config.traceInitPerf;
      const traceIsNumber = typeof userTraceInitPerf === "number";
      this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : Infinity;
      this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf;
    } else {
      this.traceInitMaxIdent = 0;
      this.traceInitPerf = DEFAULT_PARSER_CONFIG.traceInitPerf;
    }
    this.traceInitIndent = -1;
  }
  TRACE_INIT(phaseDesc, phaseImpl) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      const indent = new Array(this.traceInitIndent + 1).join("	");
      if (this.traceInitIndent < this.traceInitMaxIdent) {
        console.log(`${indent}--> <${phaseDesc}>`);
      }
      const { time, value } = timer(phaseImpl);
      const traceMethod = time > 10 ? console.warn : console.log;
      if (this.traceInitIndent < this.traceInitMaxIdent) {
        traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
      }
      this.traceInitIndent--;
      return value;
    } else {
      return phaseImpl();
    }
  }
};

// node_modules/chevrotain/lib/src/parse/parser/utils/apply_mixins.js
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach((baseCtor) => {
    const baseProto = baseCtor.prototype;
    Object.getOwnPropertyNames(baseProto).forEach((propName) => {
      if (propName === "constructor") {
        return;
      }
      const basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
      if (basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set)) {
        Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
      } else {
        derivedCtor.prototype[propName] = baseCtor.prototype[propName];
      }
    });
  });
}

// node_modules/chevrotain/lib/src/parse/parser/parser.js
var END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
var DEFAULT_PARSER_CONFIG = Object.freeze({
  recoveryEnabled: false,
  maxLookahead: 3,
  dynamicTokensEnabled: false,
  outputCst: true,
  errorMessageProvider: defaultParserErrorProvider,
  nodeLocationTracking: "none",
  traceInitPerf: false,
  skipValidations: false
});
var DEFAULT_RULE_CONFIG = Object.freeze({
  recoveryValueFunc: () => void 0,
  resyncEnabled: true
});
var ParserDefinitionErrorType;
(function(ParserDefinitionErrorType2) {
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["CUSTOM_LOOKAHEAD_VALIDATION"] = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
function EMPTY_ALT(value = void 0) {
  return function() {
    return value;
  };
}
var Parser = class _Parser {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(parserInstance) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let defErrorsMsgs;
      this.selfAnalysisDone = true;
      const className = this.className;
      this.TRACE_INIT("toFastProps", () => {
        toFastProperties(this);
      });
      this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording();
          forEach_default(this.definedRulesNames, (currRuleName) => {
            const wrappedRule = this[currRuleName];
            const originalGrammarAction = wrappedRule["originalGrammarAction"];
            let recordedRuleGast;
            this.TRACE_INIT(`${currRuleName} Rule`, () => {
              recordedRuleGast = this.topLevelRuleRecord(currRuleName, originalGrammarAction);
            });
            this.gastProductionsCache[currRuleName] = recordedRuleGast;
          });
        } finally {
          this.disableRecording();
        }
      });
      let resolverErrors = [];
      this.TRACE_INIT("Grammar Resolving", () => {
        resolverErrors = resolveGrammar2({
          rules: values_default(this.gastProductionsCache)
        });
        this.definitionErrors = this.definitionErrors.concat(resolverErrors);
      });
      this.TRACE_INIT("Grammar Validations", () => {
        if (isEmpty_default(resolverErrors) && this.skipValidations === false) {
          const validationErrors = validateGrammar2({
            rules: values_default(this.gastProductionsCache),
            tokenTypes: values_default(this.tokensMap),
            errMsgProvider: defaultGrammarValidatorErrorProvider,
            grammarName: className
          });
          const lookaheadValidationErrors = validateLookahead({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: values_default(this.gastProductionsCache),
            tokenTypes: values_default(this.tokensMap),
            grammarName: className
          });
          this.definitionErrors = this.definitionErrors.concat(validationErrors, lookaheadValidationErrors);
        }
      });
      if (isEmpty_default(this.definitionErrors)) {
        if (this.recoveryEnabled) {
          this.TRACE_INIT("computeAllProdsFollows", () => {
            const allFollows = computeAllProdsFollows(values_default(this.gastProductionsCache));
            this.resyncFollows = allFollows;
          });
        }
        this.TRACE_INIT("ComputeLookaheadFunctions", () => {
          var _a6, _b;
          (_b = (_a6 = this.lookaheadStrategy).initialize) === null || _b === void 0 ? void 0 : _b.call(_a6, {
            rules: values_default(this.gastProductionsCache)
          });
          this.preComputeLookaheadFunctions(values_default(this.gastProductionsCache));
        });
      }
      if (!_Parser.DEFER_DEFINITION_ERRORS_HANDLING && !isEmpty_default(this.definitionErrors)) {
        defErrorsMsgs = map_default(this.definitionErrors, (defError) => defError.message);
        throw new Error(`Parser Definition Errors detected:
 ${defErrorsMsgs.join("\n-------------------------------\n")}`);
      }
    });
  }
  constructor(tokenVocabulary, config) {
    this.definitionErrors = [];
    this.selfAnalysisDone = false;
    const that = this;
    that.initErrorHandler(config);
    that.initLexerAdapter();
    that.initLooksAhead(config);
    that.initRecognizerEngine(tokenVocabulary, config);
    that.initRecoverable(config);
    that.initTreeBuilder(config);
    that.initContentAssist();
    that.initGastRecorder(config);
    that.initPerformanceTracer(config);
    if (has_default(config, "ignoredIssues")) {
      throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
    }
    this.skipValidations = has_default(config, "skipValidations") ? config.skipValidations : DEFAULT_PARSER_CONFIG.skipValidations;
  }
};
Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
applyMixins(Parser, [
  Recoverable,
  LooksAhead,
  TreeBuilder,
  LexerAdapter,
  RecognizerEngine,
  RecognizerApi,
  ErrorHandler,
  ContentAssist,
  GastRecorder,
  PerformanceTracer
]);
var EmbeddedActionsParser = class extends Parser {
  constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG) {
    const configClone = clone_default(config);
    configClone.outputCst = false;
    super(tokenVocabulary, configClone);
  }
};

// node_modules/chevrotain-allstar/lib/atn.js
function buildATNKey(rule, type, occurrence) {
  return `${rule.name}_${type}_${occurrence}`;
}
var ATN_BASIC = 1;
var ATN_RULE_START = 2;
var ATN_PLUS_BLOCK_START = 4;
var ATN_STAR_BLOCK_START = 5;
var ATN_RULE_STOP = 7;
var ATN_BLOCK_END = 8;
var ATN_STAR_LOOP_BACK = 9;
var ATN_STAR_LOOP_ENTRY = 10;
var ATN_PLUS_LOOP_BACK = 11;
var ATN_LOOP_END = 12;
var AbstractTransition = class {
  constructor(target) {
    this.target = target;
  }
  isEpsilon() {
    return false;
  }
};
var AtomTransition = class extends AbstractTransition {
  constructor(target, tokenType) {
    super(target);
    this.tokenType = tokenType;
  }
};
var EpsilonTransition = class extends AbstractTransition {
  constructor(target) {
    super(target);
  }
  isEpsilon() {
    return true;
  }
};
var RuleTransition = class extends AbstractTransition {
  constructor(ruleStart, rule, followState) {
    super(ruleStart);
    this.rule = rule;
    this.followState = followState;
  }
  isEpsilon() {
    return true;
  }
};
function createATN(rules) {
  const atn = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  createRuleStartAndStopATNStates(atn, rules);
  const ruleLength = rules.length;
  for (let i = 0; i < ruleLength; i++) {
    const rule = rules[i];
    const ruleBlock = block(atn, rule, rule);
    if (ruleBlock === void 0) {
      continue;
    }
    buildRuleHandle(atn, rule, ruleBlock);
  }
  return atn;
}
function createRuleStartAndStopATNStates(atn, rules) {
  const ruleLength = rules.length;
  for (let i = 0; i < ruleLength; i++) {
    const rule = rules[i];
    const start = newState(atn, rule, void 0, {
      type: ATN_RULE_START
    });
    const stop = newState(atn, rule, void 0, {
      type: ATN_RULE_STOP
    });
    start.stop = stop;
    atn.ruleToStartState.set(rule, start);
    atn.ruleToStopState.set(rule, stop);
  }
}
function atom(atn, rule, production) {
  if (production instanceof Terminal) {
    return tokenRef(atn, rule, production.terminalType, production);
  } else if (production instanceof NonTerminal) {
    return ruleRef(atn, rule, production);
  } else if (production instanceof Alternation) {
    return alternation(atn, rule, production);
  } else if (production instanceof Option) {
    return option(atn, rule, production);
  } else if (production instanceof Repetition) {
    return repetition(atn, rule, production);
  } else if (production instanceof RepetitionWithSeparator) {
    return repetitionSep(atn, rule, production);
  } else if (production instanceof RepetitionMandatory) {
    return repetitionMandatory(atn, rule, production);
  } else if (production instanceof RepetitionMandatoryWithSeparator) {
    return repetitionMandatorySep(atn, rule, production);
  } else {
    return block(atn, rule, production);
  }
}
function repetition(atn, rule, repetition2) {
  const starState = newState(atn, rule, repetition2, {
    type: ATN_STAR_BLOCK_START
  });
  defineDecisionState(atn, starState);
  const handle = makeAlts(atn, rule, starState, repetition2, block(atn, rule, repetition2));
  return star(atn, rule, repetition2, handle);
}
function repetitionSep(atn, rule, repetition2) {
  const starState = newState(atn, rule, repetition2, {
    type: ATN_STAR_BLOCK_START
  });
  defineDecisionState(atn, starState);
  const handle = makeAlts(atn, rule, starState, repetition2, block(atn, rule, repetition2));
  const sep = tokenRef(atn, rule, repetition2.separator, repetition2);
  return star(atn, rule, repetition2, handle, sep);
}
function repetitionMandatory(atn, rule, repetition2) {
  const plusState = newState(atn, rule, repetition2, {
    type: ATN_PLUS_BLOCK_START
  });
  defineDecisionState(atn, plusState);
  const handle = makeAlts(atn, rule, plusState, repetition2, block(atn, rule, repetition2));
  return plus(atn, rule, repetition2, handle);
}
function repetitionMandatorySep(atn, rule, repetition2) {
  const plusState = newState(atn, rule, repetition2, {
    type: ATN_PLUS_BLOCK_START
  });
  defineDecisionState(atn, plusState);
  const handle = makeAlts(atn, rule, plusState, repetition2, block(atn, rule, repetition2));
  const sep = tokenRef(atn, rule, repetition2.separator, repetition2);
  return plus(atn, rule, repetition2, handle, sep);
}
function alternation(atn, rule, alternation2) {
  const start = newState(atn, rule, alternation2, {
    type: ATN_BASIC
  });
  defineDecisionState(atn, start);
  const alts = map_default(alternation2.definition, (e) => atom(atn, rule, e));
  const handle = makeAlts(atn, rule, start, alternation2, ...alts);
  return handle;
}
function option(atn, rule, option2) {
  const start = newState(atn, rule, option2, {
    type: ATN_BASIC
  });
  defineDecisionState(atn, start);
  const handle = makeAlts(atn, rule, start, option2, block(atn, rule, option2));
  return optional(atn, rule, option2, handle);
}
function block(atn, rule, block2) {
  const handles = filter_default(map_default(block2.definition, (e) => atom(atn, rule, e)), (e) => e !== void 0);
  if (handles.length === 1) {
    return handles[0];
  } else if (handles.length === 0) {
    return void 0;
  } else {
    return makeBlock(atn, handles);
  }
}
function plus(atn, rule, plus2, handle, sep) {
  const blkStart = handle.left;
  const blkEnd = handle.right;
  const loop = newState(atn, rule, plus2, {
    type: ATN_PLUS_LOOP_BACK
  });
  defineDecisionState(atn, loop);
  const end = newState(atn, rule, plus2, {
    type: ATN_LOOP_END
  });
  blkStart.loopback = loop;
  end.loopback = loop;
  atn.decisionMap[buildATNKey(rule, sep ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", plus2.idx)] = loop;
  epsilon(blkEnd, loop);
  if (sep === void 0) {
    epsilon(loop, blkStart);
    epsilon(loop, end);
  } else {
    epsilon(loop, end);
    epsilon(loop, sep.left);
    epsilon(sep.right, blkStart);
  }
  return {
    left: blkStart,
    right: end
  };
}
function star(atn, rule, star2, handle, sep) {
  const start = handle.left;
  const end = handle.right;
  const entry = newState(atn, rule, star2, {
    type: ATN_STAR_LOOP_ENTRY
  });
  defineDecisionState(atn, entry);
  const loopEnd = newState(atn, rule, star2, {
    type: ATN_LOOP_END
  });
  const loop = newState(atn, rule, star2, {
    type: ATN_STAR_LOOP_BACK
  });
  entry.loopback = loop;
  loopEnd.loopback = loop;
  epsilon(entry, start);
  epsilon(entry, loopEnd);
  epsilon(end, loop);
  if (sep !== void 0) {
    epsilon(loop, loopEnd);
    epsilon(loop, sep.left);
    epsilon(sep.right, start);
  } else {
    epsilon(loop, entry);
  }
  atn.decisionMap[buildATNKey(rule, sep ? "RepetitionWithSeparator" : "Repetition", star2.idx)] = entry;
  return {
    left: entry,
    right: loopEnd
  };
}
function optional(atn, rule, optional2, handle) {
  const start = handle.left;
  const end = handle.right;
  epsilon(start, end);
  atn.decisionMap[buildATNKey(rule, "Option", optional2.idx)] = start;
  return handle;
}
function defineDecisionState(atn, state) {
  atn.decisionStates.push(state);
  state.decision = atn.decisionStates.length - 1;
  return state.decision;
}
function makeAlts(atn, rule, start, production, ...alts) {
  const end = newState(atn, rule, production, {
    type: ATN_BLOCK_END,
    start
  });
  start.end = end;
  for (const alt of alts) {
    if (alt !== void 0) {
      epsilon(start, alt.left);
      epsilon(alt.right, end);
    } else {
      epsilon(start, end);
    }
  }
  const handle = {
    left: start,
    right: end
  };
  atn.decisionMap[buildATNKey(rule, getProdType2(production), production.idx)] = start;
  return handle;
}
function getProdType2(production) {
  if (production instanceof Alternation) {
    return "Alternation";
  } else if (production instanceof Option) {
    return "Option";
  } else if (production instanceof Repetition) {
    return "Repetition";
  } else if (production instanceof RepetitionWithSeparator) {
    return "RepetitionWithSeparator";
  } else if (production instanceof RepetitionMandatory) {
    return "RepetitionMandatory";
  } else if (production instanceof RepetitionMandatoryWithSeparator) {
    return "RepetitionMandatoryWithSeparator";
  } else {
    throw new Error("Invalid production type encountered");
  }
}
function makeBlock(atn, alts) {
  const altsLength = alts.length;
  for (let i = 0; i < altsLength - 1; i++) {
    const handle = alts[i];
    let transition;
    if (handle.left.transitions.length === 1) {
      transition = handle.left.transitions[0];
    }
    const isRuleTransition = transition instanceof RuleTransition;
    const ruleTransition = transition;
    const next = alts[i + 1].left;
    if (handle.left.type === ATN_BASIC && handle.right.type === ATN_BASIC && transition !== void 0 && (isRuleTransition && ruleTransition.followState === handle.right || transition.target === handle.right)) {
      if (isRuleTransition) {
        ruleTransition.followState = next;
      } else {
        transition.target = next;
      }
      removeState(atn, handle.right);
    } else {
      epsilon(handle.right, next);
    }
  }
  const first2 = alts[0];
  const last = alts[altsLength - 1];
  return {
    left: first2.left,
    right: last.right
  };
}
function tokenRef(atn, rule, tokenType, production) {
  const left = newState(atn, rule, production, {
    type: ATN_BASIC
  });
  const right = newState(atn, rule, production, {
    type: ATN_BASIC
  });
  addTransition(left, new AtomTransition(right, tokenType));
  return {
    left,
    right
  };
}
function ruleRef(atn, currentRule, nonTerminal) {
  const rule = nonTerminal.referencedRule;
  const start = atn.ruleToStartState.get(rule);
  const left = newState(atn, currentRule, nonTerminal, {
    type: ATN_BASIC
  });
  const right = newState(atn, currentRule, nonTerminal, {
    type: ATN_BASIC
  });
  const call = new RuleTransition(start, rule, right);
  addTransition(left, call);
  return {
    left,
    right
  };
}
function buildRuleHandle(atn, rule, block2) {
  const start = atn.ruleToStartState.get(rule);
  epsilon(start, block2.left);
  const stop = atn.ruleToStopState.get(rule);
  epsilon(block2.right, stop);
  const handle = {
    left: start,
    right: stop
  };
  return handle;
}
function epsilon(a, b) {
  const transition = new EpsilonTransition(b);
  addTransition(a, transition);
}
function newState(atn, rule, production, partial) {
  const t = Object.assign({
    atn,
    production,
    epsilonOnlyTransitions: false,
    rule,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: atn.states.length
  }, partial);
  atn.states.push(t);
  return t;
}
function addTransition(state, transition) {
  if (state.transitions.length === 0) {
    state.epsilonOnlyTransitions = transition.isEpsilon();
  }
  state.transitions.push(transition);
}
function removeState(atn, state) {
  atn.states.splice(atn.states.indexOf(state), 1);
}

// node_modules/chevrotain-allstar/lib/dfa.js
var DFA_ERROR = {};
var ATNConfigSet = class {
  constructor() {
    this.map = {};
    this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(config) {
    const key = getATNConfigKey(config);
    if (!(key in this.map)) {
      this.map[key] = this.configs.length;
      this.configs.push(config);
    }
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return map_default(this.configs, (e) => e.alt);
  }
  get key() {
    let value = "";
    for (const k in this.map) {
      value += k + ":";
    }
    return value;
  }
};
function getATNConfigKey(config, alt = true) {
  return `${alt ? `a${config.alt}` : ""}s${config.state.stateNumber}:${config.stack.map((e) => e.stateNumber.toString()).join("_")}`;
}

// node_modules/chevrotain-allstar/lib/all-star-lookahead.js
function createDFACache(startState, decision) {
  const map = {};
  return (predicateSet) => {
    const key = predicateSet.toString();
    let existing = map[key];
    if (existing !== void 0) {
      return existing;
    } else {
      existing = {
        atnStartState: startState,
        decision,
        states: {}
      };
      map[key] = existing;
      return existing;
    }
  };
}
var PredicateSet = class {
  constructor() {
    this.predicates = [];
  }
  is(index) {
    return index >= this.predicates.length || this.predicates[index];
  }
  set(index, value) {
    this.predicates[index] = value;
  }
  toString() {
    let value = "";
    const size = this.predicates.length;
    for (let i = 0; i < size; i++) {
      value += this.predicates[i] === true ? "1" : "0";
    }
    return value;
  }
};
var EMPTY_PREDICATES = new PredicateSet();
var LLStarLookaheadStrategy = class extends LLkLookaheadStrategy {
  constructor(options) {
    var _a6;
    super();
    this.logging = (_a6 = options === null || options === void 0 ? void 0 : options.logging) !== null && _a6 !== void 0 ? _a6 : ((message) => console.log(message));
  }
  initialize(options) {
    this.atn = createATN(options.rules);
    this.dfas = initATNSimulator(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(options) {
    const { prodOccurrence, rule, hasPredicates, dynamicTokensEnabled } = options;
    const dfas = this.dfas;
    const logging = this.logging;
    const key = buildATNKey(rule, "Alternation", prodOccurrence);
    const decisionState = this.atn.decisionMap[key];
    const decisionIndex = decisionState.decision;
    const partialAlts = map_default(getLookaheadPaths({
      maxLookahead: 1,
      occurrence: prodOccurrence,
      prodType: "Alternation",
      rule
    }), (currAlt) => map_default(currAlt, (path) => path[0]));
    if (isLL1Sequence(partialAlts, false) && !dynamicTokensEnabled) {
      const choiceToAlt = reduce_default(partialAlts, (result, currAlt, idx) => {
        forEach_default(currAlt, (currTokType) => {
          if (currTokType) {
            result[currTokType.tokenTypeIdx] = idx;
            forEach_default(currTokType.categoryMatches, (currExtendingType) => {
              result[currExtendingType] = idx;
            });
          }
        });
        return result;
      }, {});
      if (hasPredicates) {
        return function(orAlts) {
          var _a6;
          const nextToken = this.LA(1);
          const prediction = choiceToAlt[nextToken.tokenTypeIdx];
          if (orAlts !== void 0 && prediction !== void 0) {
            const gate = (_a6 = orAlts[prediction]) === null || _a6 === void 0 ? void 0 : _a6.GATE;
            if (gate !== void 0 && gate.call(this) === false) {
              return void 0;
            }
          }
          return prediction;
        };
      } else {
        return function() {
          const nextToken = this.LA(1);
          return choiceToAlt[nextToken.tokenTypeIdx];
        };
      }
    } else if (hasPredicates) {
      return function(orAlts) {
        const predicates = new PredicateSet();
        const length = orAlts === void 0 ? 0 : orAlts.length;
        for (let i = 0; i < length; i++) {
          const gate = orAlts === null || orAlts === void 0 ? void 0 : orAlts[i].GATE;
          predicates.set(i, gate === void 0 || gate.call(this));
        }
        const result = adaptivePredict.call(this, dfas, decisionIndex, predicates, logging);
        return typeof result === "number" ? result : void 0;
      };
    } else {
      return function() {
        const result = adaptivePredict.call(this, dfas, decisionIndex, EMPTY_PREDICATES, logging);
        return typeof result === "number" ? result : void 0;
      };
    }
  }
  buildLookaheadForOptional(options) {
    const { prodOccurrence, rule, prodType, dynamicTokensEnabled } = options;
    const dfas = this.dfas;
    const logging = this.logging;
    const key = buildATNKey(rule, prodType, prodOccurrence);
    const decisionState = this.atn.decisionMap[key];
    const decisionIndex = decisionState.decision;
    const alts = map_default(getLookaheadPaths({
      maxLookahead: 1,
      occurrence: prodOccurrence,
      prodType,
      rule
    }), (e) => {
      return map_default(e, (g) => g[0]);
    });
    if (isLL1Sequence(alts) && alts[0][0] && !dynamicTokensEnabled) {
      const alt = alts[0];
      const singleTokensTypes = flatten_default(alt);
      if (singleTokensTypes.length === 1 && isEmpty_default(singleTokensTypes[0].categoryMatches)) {
        const expectedTokenType = singleTokensTypes[0];
        const expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey;
        };
      } else {
        const choiceToAlt = reduce_default(singleTokensTypes, (result, currTokType) => {
          if (currTokType !== void 0) {
            result[currTokType.tokenTypeIdx] = true;
            forEach_default(currTokType.categoryMatches, (currExtendingType) => {
              result[currExtendingType] = true;
            });
          }
          return result;
        }, {});
        return function() {
          const nextToken = this.LA(1);
          return choiceToAlt[nextToken.tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      const result = adaptivePredict.call(this, dfas, decisionIndex, EMPTY_PREDICATES, logging);
      return typeof result === "object" ? false : result === 0;
    };
  }
};
function isLL1Sequence(sequences, allowEmpty = true) {
  const fullSet = /* @__PURE__ */ new Set();
  for (const alt of sequences) {
    const altSet = /* @__PURE__ */ new Set();
    for (const tokType of alt) {
      if (tokType === void 0) {
        if (allowEmpty) {
          break;
        } else {
          return false;
        }
      }
      const indices = [tokType.tokenTypeIdx].concat(tokType.categoryMatches);
      for (const index of indices) {
        if (fullSet.has(index)) {
          if (!altSet.has(index)) {
            return false;
          }
        } else {
          fullSet.add(index);
          altSet.add(index);
        }
      }
    }
  }
  return true;
}
function initATNSimulator(atn) {
  const decisionLength = atn.decisionStates.length;
  const decisionToDFA = Array(decisionLength);
  for (let i = 0; i < decisionLength; i++) {
    decisionToDFA[i] = createDFACache(atn.decisionStates[i], i);
  }
  return decisionToDFA;
}
function adaptivePredict(dfaCaches, decision, predicateSet, logging) {
  const dfa = dfaCaches[decision](predicateSet);
  let start = dfa.start;
  if (start === void 0) {
    const closure2 = computeStartState(dfa.atnStartState);
    start = addDFAState(dfa, newDFAState(closure2));
    dfa.start = start;
  }
  const alt = performLookahead.apply(this, [dfa, start, predicateSet, logging]);
  return alt;
}
function performLookahead(dfa, s0, predicateSet, logging) {
  let previousD = s0;
  let i = 1;
  const path = [];
  let t = this.LA(i++);
  while (true) {
    let d = getExistingTargetState(previousD, t);
    if (d === void 0) {
      d = computeLookaheadTarget.apply(this, [dfa, previousD, t, i, predicateSet, logging]);
    }
    if (d === DFA_ERROR) {
      return buildAdaptivePredictError(path, previousD, t);
    }
    if (d.isAcceptState === true) {
      return d.prediction;
    }
    previousD = d;
    path.push(t);
    t = this.LA(i++);
  }
}
function computeLookaheadTarget(dfa, previousD, token, lookahead, predicateSet, logging) {
  const reach = computeReachSet(previousD.configs, token, predicateSet);
  if (reach.size === 0) {
    addDFAEdge(dfa, previousD, token, DFA_ERROR);
    return DFA_ERROR;
  }
  let newState2 = newDFAState(reach);
  const predictedAlt = getUniqueAlt(reach, predicateSet);
  if (predictedAlt !== void 0) {
    newState2.isAcceptState = true;
    newState2.prediction = predictedAlt;
    newState2.configs.uniqueAlt = predictedAlt;
  } else if (hasConflictTerminatingPrediction(reach)) {
    const prediction = min_default(reach.alts);
    newState2.isAcceptState = true;
    newState2.prediction = prediction;
    newState2.configs.uniqueAlt = prediction;
    reportLookaheadAmbiguity.apply(this, [dfa, lookahead, reach.alts, logging]);
  }
  newState2 = addDFAEdge(dfa, previousD, token, newState2);
  return newState2;
}
function reportLookaheadAmbiguity(dfa, lookahead, ambiguityIndices, logging) {
  const prefixPath = [];
  for (let i = 1; i <= lookahead; i++) {
    prefixPath.push(this.LA(i).tokenType);
  }
  const atnState = dfa.atnStartState;
  const topLevelRule = atnState.rule;
  const production = atnState.production;
  const message = buildAmbiguityError({
    topLevelRule,
    ambiguityIndices,
    production,
    prefixPath
  });
  logging(message);
}
function buildAmbiguityError(options) {
  const pathMsg = map_default(options.prefixPath, (currtok) => tokenLabel2(currtok)).join(", ");
  const occurrence = options.production.idx === 0 ? "" : options.production.idx;
  let currMessage = `Ambiguous Alternatives Detected: <${options.ambiguityIndices.join(", ")}> in <${getProductionDslName2(options.production)}${occurrence}> inside <${options.topLevelRule.name}> Rule,
<${pathMsg}> may appears as a prefix path in all these alternatives.
`;
  currMessage = currMessage + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`;
  return currMessage;
}
function getProductionDslName2(prod) {
  if (prod instanceof NonTerminal) {
    return "SUBRULE";
  } else if (prod instanceof Option) {
    return "OPTION";
  } else if (prod instanceof Alternation) {
    return "OR";
  } else if (prod instanceof RepetitionMandatory) {
    return "AT_LEAST_ONE";
  } else if (prod instanceof RepetitionMandatoryWithSeparator) {
    return "AT_LEAST_ONE_SEP";
  } else if (prod instanceof RepetitionWithSeparator) {
    return "MANY_SEP";
  } else if (prod instanceof Repetition) {
    return "MANY";
  } else if (prod instanceof Terminal) {
    return "CONSUME";
  } else {
    throw Error("non exhaustive match");
  }
}
function buildAdaptivePredictError(path, previous, current) {
  const nextTransitions = flatMap_default(previous.configs.elements, (e) => e.state.transitions);
  const nextTokenTypes = uniqBy_default(nextTransitions.filter((e) => e instanceof AtomTransition).map((e) => e.tokenType), (e) => e.tokenTypeIdx);
  return {
    actualToken: current,
    possibleTokenTypes: nextTokenTypes,
    tokenPath: path
  };
}
function getExistingTargetState(state, token) {
  return state.edges[token.tokenTypeIdx];
}
function computeReachSet(configs, token, predicateSet) {
  const intermediate = new ATNConfigSet();
  const skippedStopStates = [];
  for (const c of configs.elements) {
    if (predicateSet.is(c.alt) === false) {
      continue;
    }
    if (c.state.type === ATN_RULE_STOP) {
      skippedStopStates.push(c);
      continue;
    }
    const transitionLength = c.state.transitions.length;
    for (let i = 0; i < transitionLength; i++) {
      const transition = c.state.transitions[i];
      const target = getReachableTarget(transition, token);
      if (target !== void 0) {
        intermediate.add({
          state: target,
          alt: c.alt,
          stack: c.stack
        });
      }
    }
  }
  let reach;
  if (skippedStopStates.length === 0 && intermediate.size === 1) {
    reach = intermediate;
  }
  if (reach === void 0) {
    reach = new ATNConfigSet();
    for (const c of intermediate.elements) {
      closure(c, reach);
    }
  }
  if (skippedStopStates.length > 0 && !hasConfigInRuleStopState(reach)) {
    for (const c of skippedStopStates) {
      reach.add(c);
    }
  }
  return reach;
}
function getReachableTarget(transition, token) {
  if (transition instanceof AtomTransition && tokenMatcher(token, transition.tokenType)) {
    return transition.target;
  }
  return void 0;
}
function getUniqueAlt(configs, predicateSet) {
  let alt;
  for (const c of configs.elements) {
    if (predicateSet.is(c.alt) === true) {
      if (alt === void 0) {
        alt = c.alt;
      } else if (alt !== c.alt) {
        return void 0;
      }
    }
  }
  return alt;
}
function newDFAState(closure2) {
  return {
    configs: closure2,
    edges: {},
    isAcceptState: false,
    prediction: -1
  };
}
function addDFAEdge(dfa, from, token, to) {
  to = addDFAState(dfa, to);
  from.edges[token.tokenTypeIdx] = to;
  return to;
}
function addDFAState(dfa, state) {
  if (state === DFA_ERROR) {
    return state;
  }
  const mapKey = state.configs.key;
  const existing = dfa.states[mapKey];
  if (existing !== void 0) {
    return existing;
  }
  state.configs.finalize();
  dfa.states[mapKey] = state;
  return state;
}
function computeStartState(atnState) {
  const configs = new ATNConfigSet();
  const numberOfTransitions = atnState.transitions.length;
  for (let i = 0; i < numberOfTransitions; i++) {
    const target = atnState.transitions[i].target;
    const config = {
      state: target,
      alt: i,
      stack: []
    };
    closure(config, configs);
  }
  return configs;
}
function closure(config, configs) {
  const p = config.state;
  if (p.type === ATN_RULE_STOP) {
    if (config.stack.length > 0) {
      const atnStack = [...config.stack];
      const followState = atnStack.pop();
      const followConfig = {
        state: followState,
        alt: config.alt,
        stack: atnStack
      };
      closure(followConfig, configs);
    } else {
      configs.add(config);
    }
    return;
  }
  if (!p.epsilonOnlyTransitions) {
    configs.add(config);
  }
  const transitionLength = p.transitions.length;
  for (let i = 0; i < transitionLength; i++) {
    const transition = p.transitions[i];
    const c = getEpsilonTarget(config, transition);
    if (c !== void 0) {
      closure(c, configs);
    }
  }
}
function getEpsilonTarget(config, transition) {
  if (transition instanceof EpsilonTransition) {
    return {
      state: transition.target,
      alt: config.alt,
      stack: config.stack
    };
  } else if (transition instanceof RuleTransition) {
    const stack = [...config.stack, transition.followState];
    return {
      state: transition.target,
      alt: config.alt,
      stack
    };
  }
  return void 0;
}
function hasConfigInRuleStopState(configs) {
  for (const c of configs.elements) {
    if (c.state.type === ATN_RULE_STOP) {
      return true;
    }
  }
  return false;
}
function allConfigsInRuleStopStates(configs) {
  for (const c of configs.elements) {
    if (c.state.type !== ATN_RULE_STOP) {
      return false;
    }
  }
  return true;
}
function hasConflictTerminatingPrediction(configs) {
  if (allConfigsInRuleStopStates(configs)) {
    return true;
  }
  const altSets = getConflictingAltSets(configs.elements);
  const heuristic = hasConflictingAltSet(altSets) && !hasStateAssociatedWithOneAlt(altSets);
  return heuristic;
}
function getConflictingAltSets(configs) {
  const configToAlts = /* @__PURE__ */ new Map();
  for (const c of configs) {
    const key = getATNConfigKey(c, false);
    let alts = configToAlts.get(key);
    if (alts === void 0) {
      alts = {};
      configToAlts.set(key, alts);
    }
    alts[c.alt] = true;
  }
  return configToAlts;
}
function hasConflictingAltSet(altSets) {
  for (const value of Array.from(altSets.values())) {
    if (Object.keys(value).length > 1) {
      return true;
    }
  }
  return false;
}
function hasStateAssociatedWithOneAlt(altSets) {
  for (const value of Array.from(altSets.values())) {
    if (Object.keys(value).length === 1) {
      return true;
    }
  }
  return false;
}

// node_modules/vscode-languageserver-types/lib/esm/main.js
var DocumentUri;
(function(DocumentUri2) {
  function is(value) {
    return typeof value === "string";
  }
  DocumentUri2.is = is;
})(DocumentUri || (DocumentUri = {}));
var URI;
(function(URI3) {
  function is(value) {
    return typeof value === "string";
  }
  URI3.is = is;
})(URI || (URI = {}));
var integer;
(function(integer2) {
  integer2.MIN_VALUE = -2147483648;
  integer2.MAX_VALUE = 2147483647;
  function is(value) {
    return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
  }
  integer2.is = is;
})(integer || (integer = {}));
var uinteger;
(function(uinteger2) {
  uinteger2.MIN_VALUE = 0;
  uinteger2.MAX_VALUE = 2147483647;
  function is(value) {
    return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
  }
  uinteger2.is = is;
})(uinteger || (uinteger = {}));
var Position;
(function(Position2) {
  function create(line, character) {
    if (line === Number.MAX_VALUE) {
      line = uinteger.MAX_VALUE;
    }
    if (character === Number.MAX_VALUE) {
      character = uinteger.MAX_VALUE;
    }
    return { line, character };
  }
  Position2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
  }
  Position2.is = is;
})(Position || (Position = {}));
var Range;
(function(Range2) {
  function create(one, two, three, four) {
    if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
      return { start: Position.create(one, two), end: Position.create(three, four) };
    } else if (Position.is(one) && Position.is(two)) {
      return { start: one, end: two };
    } else {
      throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
    }
  }
  Range2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
  }
  Range2.is = is;
})(Range || (Range = {}));
var Location;
(function(Location2) {
  function create(uri, range) {
    return { uri, range };
  }
  Location2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
  }
  Location2.is = is;
})(Location || (Location = {}));
var LocationLink;
(function(LocationLink2) {
  function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
    return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
  }
  LocationLink2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
  }
  LocationLink2.is = is;
})(LocationLink || (LocationLink = {}));
var Color;
(function(Color2) {
  function create(red, green, blue, alpha) {
    return {
      red,
      green,
      blue,
      alpha
    };
  }
  Color2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
  }
  Color2.is = is;
})(Color || (Color = {}));
var ColorInformation;
(function(ColorInformation2) {
  function create(range, color) {
    return {
      range,
      color
    };
  }
  ColorInformation2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
  }
  ColorInformation2.is = is;
})(ColorInformation || (ColorInformation = {}));
var ColorPresentation;
(function(ColorPresentation2) {
  function create(label, textEdit, additionalTextEdits) {
    return {
      label,
      textEdit,
      additionalTextEdits
    };
  }
  ColorPresentation2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
  }
  ColorPresentation2.is = is;
})(ColorPresentation || (ColorPresentation = {}));
var FoldingRangeKind;
(function(FoldingRangeKind2) {
  FoldingRangeKind2.Comment = "comment";
  FoldingRangeKind2.Imports = "imports";
  FoldingRangeKind2.Region = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
var FoldingRange;
(function(FoldingRange2) {
  function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
    const result = {
      startLine,
      endLine
    };
    if (Is.defined(startCharacter)) {
      result.startCharacter = startCharacter;
    }
    if (Is.defined(endCharacter)) {
      result.endCharacter = endCharacter;
    }
    if (Is.defined(kind)) {
      result.kind = kind;
    }
    if (Is.defined(collapsedText)) {
      result.collapsedText = collapsedText;
    }
    return result;
  }
  FoldingRange2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
  }
  FoldingRange2.is = is;
})(FoldingRange || (FoldingRange = {}));
var DiagnosticRelatedInformation;
(function(DiagnosticRelatedInformation2) {
  function create(location, message) {
    return {
      location,
      message
    };
  }
  DiagnosticRelatedInformation2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
  }
  DiagnosticRelatedInformation2.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
var DiagnosticSeverity;
(function(DiagnosticSeverity2) {
  DiagnosticSeverity2.Error = 1;
  DiagnosticSeverity2.Warning = 2;
  DiagnosticSeverity2.Information = 3;
  DiagnosticSeverity2.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var DiagnosticTag;
(function(DiagnosticTag2) {
  DiagnosticTag2.Unnecessary = 1;
  DiagnosticTag2.Deprecated = 2;
})(DiagnosticTag || (DiagnosticTag = {}));
var CodeDescription;
(function(CodeDescription2) {
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.href);
  }
  CodeDescription2.is = is;
})(CodeDescription || (CodeDescription = {}));
var Diagnostic;
(function(Diagnostic2) {
  function create(range, message, severity, code, source, relatedInformation) {
    let result = { range, message };
    if (Is.defined(severity)) {
      result.severity = severity;
    }
    if (Is.defined(code)) {
      result.code = code;
    }
    if (Is.defined(source)) {
      result.source = source;
    }
    if (Is.defined(relatedInformation)) {
      result.relatedInformation = relatedInformation;
    }
    return result;
  }
  Diagnostic2.create = create;
  function is(value) {
    var _a6;
    let candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a6 = candidate.codeDescription) === null || _a6 === void 0 ? void 0 : _a6.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
  }
  Diagnostic2.is = is;
})(Diagnostic || (Diagnostic = {}));
var Command;
(function(Command2) {
  function create(title, command, ...args) {
    let result = { title, command };
    if (Is.defined(args) && args.length > 0) {
      result.arguments = args;
    }
    return result;
  }
  Command2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
  }
  Command2.is = is;
})(Command || (Command = {}));
var TextEdit;
(function(TextEdit2) {
  function replace(range, newText) {
    return { range, newText };
  }
  TextEdit2.replace = replace;
  function insert(position, newText) {
    return { range: { start: position, end: position }, newText };
  }
  TextEdit2.insert = insert;
  function del(range) {
    return { range, newText: "" };
  }
  TextEdit2.del = del;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
  }
  TextEdit2.is = is;
})(TextEdit || (TextEdit = {}));
var ChangeAnnotation;
(function(ChangeAnnotation2) {
  function create(label, needsConfirmation, description) {
    const result = { label };
    if (needsConfirmation !== void 0) {
      result.needsConfirmation = needsConfirmation;
    }
    if (description !== void 0) {
      result.description = description;
    }
    return result;
  }
  ChangeAnnotation2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
  }
  ChangeAnnotation2.is = is;
})(ChangeAnnotation || (ChangeAnnotation = {}));
var ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
  function is(value) {
    const candidate = value;
    return Is.string(candidate);
  }
  ChangeAnnotationIdentifier2.is = is;
})(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
var AnnotatedTextEdit;
(function(AnnotatedTextEdit2) {
  function replace(range, newText, annotation) {
    return { range, newText, annotationId: annotation };
  }
  AnnotatedTextEdit2.replace = replace;
  function insert(position, newText, annotation) {
    return { range: { start: position, end: position }, newText, annotationId: annotation };
  }
  AnnotatedTextEdit2.insert = insert;
  function del(range, annotation) {
    return { range, newText: "", annotationId: annotation };
  }
  AnnotatedTextEdit2.del = del;
  function is(value) {
    const candidate = value;
    return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  AnnotatedTextEdit2.is = is;
})(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
var TextDocumentEdit;
(function(TextDocumentEdit2) {
  function create(textDocument, edits) {
    return { textDocument, edits };
  }
  TextDocumentEdit2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
  }
  TextDocumentEdit2.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function(CreateFile2) {
  function create(uri, options, annotation) {
    let result = {
      kind: "create",
      uri
    };
    if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  CreateFile2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  CreateFile2.is = is;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function(RenameFile2) {
  function create(oldUri, newUri, options, annotation) {
    let result = {
      kind: "rename",
      oldUri,
      newUri
    };
    if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  RenameFile2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  RenameFile2.is = is;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function(DeleteFile2) {
  function create(uri, options, annotation) {
    let result = {
      kind: "delete",
      uri
    };
    if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  DeleteFile2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  DeleteFile2.is = is;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function(WorkspaceEdit2) {
  function is(value) {
    let candidate = value;
    return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change) => {
      if (Is.string(change.kind)) {
        return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
      } else {
        return TextDocumentEdit.is(change);
      }
    }));
  }
  WorkspaceEdit2.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
  function create(uri) {
    return { uri };
  }
  TextDocumentIdentifier2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri);
  }
  TextDocumentIdentifier2.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
var VersionedTextDocumentIdentifier;
(function(VersionedTextDocumentIdentifier2) {
  function create(uri, version) {
    return { uri, version };
  }
  VersionedTextDocumentIdentifier2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
  }
  VersionedTextDocumentIdentifier2.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
var OptionalVersionedTextDocumentIdentifier;
(function(OptionalVersionedTextDocumentIdentifier2) {
  function create(uri, version) {
    return { uri, version };
  }
  OptionalVersionedTextDocumentIdentifier2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
  }
  OptionalVersionedTextDocumentIdentifier2.is = is;
})(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
var TextDocumentItem;
(function(TextDocumentItem2) {
  function create(uri, languageId, version, text) {
    return { uri, languageId, version, text };
  }
  TextDocumentItem2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
  }
  TextDocumentItem2.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
var MarkupKind;
(function(MarkupKind2) {
  MarkupKind2.PlainText = "plaintext";
  MarkupKind2.Markdown = "markdown";
  function is(value) {
    const candidate = value;
    return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
  }
  MarkupKind2.is = is;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function(MarkupContent2) {
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
  }
  MarkupContent2.is = is;
})(MarkupContent || (MarkupContent = {}));
var CompletionItemKind;
(function(CompletionItemKind2) {
  CompletionItemKind2.Text = 1;
  CompletionItemKind2.Method = 2;
  CompletionItemKind2.Function = 3;
  CompletionItemKind2.Constructor = 4;
  CompletionItemKind2.Field = 5;
  CompletionItemKind2.Variable = 6;
  CompletionItemKind2.Class = 7;
  CompletionItemKind2.Interface = 8;
  CompletionItemKind2.Module = 9;
  CompletionItemKind2.Property = 10;
  CompletionItemKind2.Unit = 11;
  CompletionItemKind2.Value = 12;
  CompletionItemKind2.Enum = 13;
  CompletionItemKind2.Keyword = 14;
  CompletionItemKind2.Snippet = 15;
  CompletionItemKind2.Color = 16;
  CompletionItemKind2.File = 17;
  CompletionItemKind2.Reference = 18;
  CompletionItemKind2.Folder = 19;
  CompletionItemKind2.EnumMember = 20;
  CompletionItemKind2.Constant = 21;
  CompletionItemKind2.Struct = 22;
  CompletionItemKind2.Event = 23;
  CompletionItemKind2.Operator = 24;
  CompletionItemKind2.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
var InsertTextFormat;
(function(InsertTextFormat2) {
  InsertTextFormat2.PlainText = 1;
  InsertTextFormat2.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
var CompletionItemTag;
(function(CompletionItemTag2) {
  CompletionItemTag2.Deprecated = 1;
})(CompletionItemTag || (CompletionItemTag = {}));
var InsertReplaceEdit;
(function(InsertReplaceEdit2) {
  function create(newText, insert, replace) {
    return { newText, insert, replace };
  }
  InsertReplaceEdit2.create = create;
  function is(value) {
    const candidate = value;
    return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
  }
  InsertReplaceEdit2.is = is;
})(InsertReplaceEdit || (InsertReplaceEdit = {}));
var InsertTextMode;
(function(InsertTextMode2) {
  InsertTextMode2.asIs = 1;
  InsertTextMode2.adjustIndentation = 2;
})(InsertTextMode || (InsertTextMode = {}));
var CompletionItemLabelDetails;
(function(CompletionItemLabelDetails2) {
  function is(value) {
    const candidate = value;
    return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
  }
  CompletionItemLabelDetails2.is = is;
})(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
var CompletionItem;
(function(CompletionItem2) {
  function create(label) {
    return { label };
  }
  CompletionItem2.create = create;
})(CompletionItem || (CompletionItem = {}));
var CompletionList;
(function(CompletionList2) {
  function create(items, isIncomplete) {
    return { items: items ? items : [], isIncomplete: !!isIncomplete };
  }
  CompletionList2.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function(MarkedString2) {
  function fromPlainText(plainText) {
    return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  MarkedString2.fromPlainText = fromPlainText;
  function is(value) {
    const candidate = value;
    return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
  }
  MarkedString2.is = is;
})(MarkedString || (MarkedString = {}));
var Hover;
(function(Hover2) {
  function is(value) {
    let candidate = value;
    return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
  }
  Hover2.is = is;
})(Hover || (Hover = {}));
var ParameterInformation;
(function(ParameterInformation2) {
  function create(label, documentation) {
    return documentation ? { label, documentation } : { label };
  }
  ParameterInformation2.create = create;
})(ParameterInformation || (ParameterInformation = {}));
var SignatureInformation;
(function(SignatureInformation2) {
  function create(label, documentation, ...parameters) {
    let result = { label };
    if (Is.defined(documentation)) {
      result.documentation = documentation;
    }
    if (Is.defined(parameters)) {
      result.parameters = parameters;
    } else {
      result.parameters = [];
    }
    return result;
  }
  SignatureInformation2.create = create;
})(SignatureInformation || (SignatureInformation = {}));
var DocumentHighlightKind;
(function(DocumentHighlightKind2) {
  DocumentHighlightKind2.Text = 1;
  DocumentHighlightKind2.Read = 2;
  DocumentHighlightKind2.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
var DocumentHighlight;
(function(DocumentHighlight2) {
  function create(range, kind) {
    let result = { range };
    if (Is.number(kind)) {
      result.kind = kind;
    }
    return result;
  }
  DocumentHighlight2.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
var SymbolKind;
(function(SymbolKind2) {
  SymbolKind2.File = 1;
  SymbolKind2.Module = 2;
  SymbolKind2.Namespace = 3;
  SymbolKind2.Package = 4;
  SymbolKind2.Class = 5;
  SymbolKind2.Method = 6;
  SymbolKind2.Property = 7;
  SymbolKind2.Field = 8;
  SymbolKind2.Constructor = 9;
  SymbolKind2.Enum = 10;
  SymbolKind2.Interface = 11;
  SymbolKind2.Function = 12;
  SymbolKind2.Variable = 13;
  SymbolKind2.Constant = 14;
  SymbolKind2.String = 15;
  SymbolKind2.Number = 16;
  SymbolKind2.Boolean = 17;
  SymbolKind2.Array = 18;
  SymbolKind2.Object = 19;
  SymbolKind2.Key = 20;
  SymbolKind2.Null = 21;
  SymbolKind2.EnumMember = 22;
  SymbolKind2.Struct = 23;
  SymbolKind2.Event = 24;
  SymbolKind2.Operator = 25;
  SymbolKind2.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
var SymbolTag;
(function(SymbolTag2) {
  SymbolTag2.Deprecated = 1;
})(SymbolTag || (SymbolTag = {}));
var SymbolInformation;
(function(SymbolInformation2) {
  function create(name, kind, range, uri, containerName) {
    let result = {
      name,
      kind,
      location: { uri, range }
    };
    if (containerName) {
      result.containerName = containerName;
    }
    return result;
  }
  SymbolInformation2.create = create;
})(SymbolInformation || (SymbolInformation = {}));
var WorkspaceSymbol;
(function(WorkspaceSymbol2) {
  function create(name, kind, uri, range) {
    return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
  }
  WorkspaceSymbol2.create = create;
})(WorkspaceSymbol || (WorkspaceSymbol = {}));
var DocumentSymbol;
(function(DocumentSymbol2) {
  function create(name, detail, kind, range, selectionRange, children) {
    let result = {
      name,
      detail,
      kind,
      range,
      selectionRange
    };
    if (children !== void 0) {
      result.children = children;
    }
    return result;
  }
  DocumentSymbol2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
  }
  DocumentSymbol2.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
var CodeActionKind;
(function(CodeActionKind2) {
  CodeActionKind2.Empty = "";
  CodeActionKind2.QuickFix = "quickfix";
  CodeActionKind2.Refactor = "refactor";
  CodeActionKind2.RefactorExtract = "refactor.extract";
  CodeActionKind2.RefactorInline = "refactor.inline";
  CodeActionKind2.RefactorRewrite = "refactor.rewrite";
  CodeActionKind2.Source = "source";
  CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
  CodeActionKind2.SourceFixAll = "source.fixAll";
})(CodeActionKind || (CodeActionKind = {}));
var CodeActionTriggerKind;
(function(CodeActionTriggerKind2) {
  CodeActionTriggerKind2.Invoked = 1;
  CodeActionTriggerKind2.Automatic = 2;
})(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
var CodeActionContext;
(function(CodeActionContext2) {
  function create(diagnostics, only, triggerKind) {
    let result = { diagnostics };
    if (only !== void 0 && only !== null) {
      result.only = only;
    }
    if (triggerKind !== void 0 && triggerKind !== null) {
      result.triggerKind = triggerKind;
    }
    return result;
  }
  CodeActionContext2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
  }
  CodeActionContext2.is = is;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function(CodeAction2) {
  function create(title, kindOrCommandOrEdit, kind) {
    let result = { title };
    let checkKind = true;
    if (typeof kindOrCommandOrEdit === "string") {
      checkKind = false;
      result.kind = kindOrCommandOrEdit;
    } else if (Command.is(kindOrCommandOrEdit)) {
      result.command = kindOrCommandOrEdit;
    } else {
      result.edit = kindOrCommandOrEdit;
    }
    if (checkKind && kind !== void 0) {
      result.kind = kind;
    }
    return result;
  }
  CodeAction2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
  }
  CodeAction2.is = is;
})(CodeAction || (CodeAction = {}));
var CodeLens;
(function(CodeLens2) {
  function create(range, data) {
    let result = { range };
    if (Is.defined(data)) {
      result.data = data;
    }
    return result;
  }
  CodeLens2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
  }
  CodeLens2.is = is;
})(CodeLens || (CodeLens = {}));
var FormattingOptions;
(function(FormattingOptions2) {
  function create(tabSize, insertSpaces) {
    return { tabSize, insertSpaces };
  }
  FormattingOptions2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
  }
  FormattingOptions2.is = is;
})(FormattingOptions || (FormattingOptions = {}));
var DocumentLink;
(function(DocumentLink2) {
  function create(range, target, data) {
    return { range, target, data };
  }
  DocumentLink2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
  }
  DocumentLink2.is = is;
})(DocumentLink || (DocumentLink = {}));
var SelectionRange;
(function(SelectionRange2) {
  function create(range, parent) {
    return { range, parent };
  }
  SelectionRange2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
  }
  SelectionRange2.is = is;
})(SelectionRange || (SelectionRange = {}));
var SemanticTokenTypes;
(function(SemanticTokenTypes2) {
  SemanticTokenTypes2["namespace"] = "namespace";
  SemanticTokenTypes2["type"] = "type";
  SemanticTokenTypes2["class"] = "class";
  SemanticTokenTypes2["enum"] = "enum";
  SemanticTokenTypes2["interface"] = "interface";
  SemanticTokenTypes2["struct"] = "struct";
  SemanticTokenTypes2["typeParameter"] = "typeParameter";
  SemanticTokenTypes2["parameter"] = "parameter";
  SemanticTokenTypes2["variable"] = "variable";
  SemanticTokenTypes2["property"] = "property";
  SemanticTokenTypes2["enumMember"] = "enumMember";
  SemanticTokenTypes2["event"] = "event";
  SemanticTokenTypes2["function"] = "function";
  SemanticTokenTypes2["method"] = "method";
  SemanticTokenTypes2["macro"] = "macro";
  SemanticTokenTypes2["keyword"] = "keyword";
  SemanticTokenTypes2["modifier"] = "modifier";
  SemanticTokenTypes2["comment"] = "comment";
  SemanticTokenTypes2["string"] = "string";
  SemanticTokenTypes2["number"] = "number";
  SemanticTokenTypes2["regexp"] = "regexp";
  SemanticTokenTypes2["operator"] = "operator";
  SemanticTokenTypes2["decorator"] = "decorator";
})(SemanticTokenTypes || (SemanticTokenTypes = {}));
var SemanticTokenModifiers;
(function(SemanticTokenModifiers2) {
  SemanticTokenModifiers2["declaration"] = "declaration";
  SemanticTokenModifiers2["definition"] = "definition";
  SemanticTokenModifiers2["readonly"] = "readonly";
  SemanticTokenModifiers2["static"] = "static";
  SemanticTokenModifiers2["deprecated"] = "deprecated";
  SemanticTokenModifiers2["abstract"] = "abstract";
  SemanticTokenModifiers2["async"] = "async";
  SemanticTokenModifiers2["modification"] = "modification";
  SemanticTokenModifiers2["documentation"] = "documentation";
  SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
})(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
var SemanticTokens;
(function(SemanticTokens2) {
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
  }
  SemanticTokens2.is = is;
})(SemanticTokens || (SemanticTokens = {}));
var InlineValueText;
(function(InlineValueText2) {
  function create(range, text) {
    return { range, text };
  }
  InlineValueText2.create = create;
  function is(value) {
    const candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
  }
  InlineValueText2.is = is;
})(InlineValueText || (InlineValueText = {}));
var InlineValueVariableLookup;
(function(InlineValueVariableLookup2) {
  function create(range, variableName, caseSensitiveLookup) {
    return { range, variableName, caseSensitiveLookup };
  }
  InlineValueVariableLookup2.create = create;
  function is(value) {
    const candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
  }
  InlineValueVariableLookup2.is = is;
})(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
var InlineValueEvaluatableExpression;
(function(InlineValueEvaluatableExpression2) {
  function create(range, expression) {
    return { range, expression };
  }
  InlineValueEvaluatableExpression2.create = create;
  function is(value) {
    const candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
  }
  InlineValueEvaluatableExpression2.is = is;
})(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
var InlineValueContext;
(function(InlineValueContext2) {
  function create(frameId, stoppedLocation) {
    return { frameId, stoppedLocation };
  }
  InlineValueContext2.create = create;
  function is(value) {
    const candidate = value;
    return Is.defined(candidate) && Range.is(value.stoppedLocation);
  }
  InlineValueContext2.is = is;
})(InlineValueContext || (InlineValueContext = {}));
var InlayHintKind;
(function(InlayHintKind2) {
  InlayHintKind2.Type = 1;
  InlayHintKind2.Parameter = 2;
  function is(value) {
    return value === 1 || value === 2;
  }
  InlayHintKind2.is = is;
})(InlayHintKind || (InlayHintKind = {}));
var InlayHintLabelPart;
(function(InlayHintLabelPart2) {
  function create(value) {
    return { value };
  }
  InlayHintLabelPart2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
  }
  InlayHintLabelPart2.is = is;
})(InlayHintLabelPart || (InlayHintLabelPart = {}));
var InlayHint;
(function(InlayHint2) {
  function create(position, label, kind) {
    const result = { position, label };
    if (kind !== void 0) {
      result.kind = kind;
    }
    return result;
  }
  InlayHint2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
  }
  InlayHint2.is = is;
})(InlayHint || (InlayHint = {}));
var StringValue;
(function(StringValue2) {
  function createSnippet(value) {
    return { kind: "snippet", value };
  }
  StringValue2.createSnippet = createSnippet;
})(StringValue || (StringValue = {}));
var InlineCompletionItem;
(function(InlineCompletionItem2) {
  function create(insertText, filterText, range, command) {
    return { insertText, filterText, range, command };
  }
  InlineCompletionItem2.create = create;
})(InlineCompletionItem || (InlineCompletionItem = {}));
var InlineCompletionList;
(function(InlineCompletionList2) {
  function create(items) {
    return { items };
  }
  InlineCompletionList2.create = create;
})(InlineCompletionList || (InlineCompletionList = {}));
var InlineCompletionTriggerKind;
(function(InlineCompletionTriggerKind2) {
  InlineCompletionTriggerKind2.Invoked = 0;
  InlineCompletionTriggerKind2.Automatic = 1;
})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
var SelectedCompletionInfo;
(function(SelectedCompletionInfo2) {
  function create(range, text) {
    return { range, text };
  }
  SelectedCompletionInfo2.create = create;
})(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
var InlineCompletionContext;
(function(InlineCompletionContext2) {
  function create(triggerKind, selectedCompletionInfo) {
    return { triggerKind, selectedCompletionInfo };
  }
  InlineCompletionContext2.create = create;
})(InlineCompletionContext || (InlineCompletionContext = {}));
var WorkspaceFolder;
(function(WorkspaceFolder2) {
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
  }
  WorkspaceFolder2.is = is;
})(WorkspaceFolder || (WorkspaceFolder = {}));
var TextDocument;
(function(TextDocument3) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }
  TextDocument3.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
  }
  TextDocument3.is = is;
  function applyEdits(document, edits) {
    let text = document.getText();
    let sortedEdits = mergeSort2(edits, (a, b) => {
      let diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = text.length;
    for (let i = sortedEdits.length - 1; i >= 0; i--) {
      let e = sortedEdits[i];
      let startOffset = document.offsetAt(e.range.start);
      let endOffset = document.offsetAt(e.range.end);
      if (endOffset <= lastModifiedOffset) {
        text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
      } else {
        throw new Error("Overlapping edit");
      }
      lastModifiedOffset = startOffset;
    }
    return text;
  }
  TextDocument3.applyEdits = applyEdits;
  function mergeSort2(data, compare) {
    if (data.length <= 1) {
      return data;
    }
    const p = data.length / 2 | 0;
    const left = data.slice(0, p);
    const right = data.slice(p);
    mergeSort2(left, compare);
    mergeSort2(right, compare);
    let leftIdx = 0;
    let rightIdx = 0;
    let i = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      let ret = compare(left[leftIdx], right[rightIdx]);
      if (ret <= 0) {
        data[i++] = left[leftIdx++];
      } else {
        data[i++] = right[rightIdx++];
      }
    }
    while (leftIdx < left.length) {
      data[i++] = left[leftIdx++];
    }
    while (rightIdx < right.length) {
      data[i++] = right[rightIdx++];
    }
    return data;
  }
})(TextDocument || (TextDocument = {}));
var FullTextDocument = class {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      let start = this.offsetAt(range.start);
      let end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }
    return this._content;
  }
  update(event, version) {
    this._content = event.text;
    this._version = version;
    this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let lineOffsets = [];
      let text = this._content;
      let isLineStart = true;
      for (let i = 0; i < text.length; i++) {
        if (isLineStart) {
          lineOffsets.push(i);
          isLineStart = false;
        }
        let ch = text.charAt(i);
        isLineStart = ch === "\r" || ch === "\n";
        if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
          i++;
        }
      }
      if (isLineStart && text.length > 0) {
        lineOffsets.push(text.length);
      }
      this._lineOffsets = lineOffsets;
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    let lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return Position.create(0, offset);
    }
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    let line = low - 1;
    return Position.create(line, offset - lineOffsets[line]);
  }
  offsetAt(position) {
    let lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    let lineOffset = lineOffsets[position.line];
    let nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var Is;
(function(Is2) {
  const toString2 = Object.prototype.toString;
  function defined(value) {
    return typeof value !== "undefined";
  }
  Is2.defined = defined;
  function undefined2(value) {
    return typeof value === "undefined";
  }
  Is2.undefined = undefined2;
  function boolean(value) {
    return value === true || value === false;
  }
  Is2.boolean = boolean;
  function string(value) {
    return toString2.call(value) === "[object String]";
  }
  Is2.string = string;
  function number(value) {
    return toString2.call(value) === "[object Number]";
  }
  Is2.number = number;
  function numberRange(value, min, max) {
    return toString2.call(value) === "[object Number]" && min <= value && value <= max;
  }
  Is2.numberRange = numberRange;
  function integer2(value) {
    return toString2.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
  }
  Is2.integer = integer2;
  function uinteger2(value) {
    return toString2.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
  }
  Is2.uinteger = uinteger2;
  function func(value) {
    return toString2.call(value) === "[object Function]";
  }
  Is2.func = func;
  function objectLiteral(value) {
    return value !== null && typeof value === "object";
  }
  Is2.objectLiteral = objectLiteral;
  function typedArray(value, check) {
    return Array.isArray(value) && value.every(check);
  }
  Is2.typedArray = typedArray;
})(Is || (Is = {}));

// node_modules/langium/lib/parser/cst-node-builder.js
var CstNodeBuilder = class {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var _a6;
    return (_a6 = this.nodeStack[this.nodeStack.length - 1]) !== null && _a6 !== void 0 ? _a6 : this.rootNode;
  }
  buildRootNode(input) {
    this.rootNode = new RootCstNodeImpl(input);
    this.rootNode.root = this.rootNode;
    this.nodeStack = [this.rootNode];
    return this.rootNode;
  }
  buildCompositeNode(feature) {
    const compositeNode = new CompositeCstNodeImpl();
    compositeNode.grammarSource = feature;
    compositeNode.root = this.rootNode;
    this.current.content.push(compositeNode);
    this.nodeStack.push(compositeNode);
    return compositeNode;
  }
  buildLeafNode(token, feature) {
    const leafNode = new LeafCstNodeImpl(token.startOffset, token.image.length, tokenToRange(token), token.tokenType, !feature);
    leafNode.grammarSource = feature;
    leafNode.root = this.rootNode;
    this.current.content.push(leafNode);
    return leafNode;
  }
  removeNode(node) {
    const parent = node.container;
    if (parent) {
      const index = parent.content.indexOf(node);
      if (index >= 0) {
        parent.content.splice(index, 1);
      }
    }
  }
  addHiddenNodes(tokens) {
    const nodes = [];
    for (const token of tokens) {
      const leafNode = new LeafCstNodeImpl(token.startOffset, token.image.length, tokenToRange(token), token.tokenType, true);
      leafNode.root = this.rootNode;
      nodes.push(leafNode);
    }
    let current = this.current;
    let added = false;
    if (current.content.length > 0) {
      current.content.push(...nodes);
      return;
    }
    while (current.container) {
      const index = current.container.content.indexOf(current);
      if (index > 0) {
        current.container.content.splice(index, 0, ...nodes);
        added = true;
        break;
      }
      current = current.container;
    }
    if (!added) {
      this.rootNode.content.unshift(...nodes);
    }
  }
  construct(item) {
    const current = this.current;
    if (typeof item.$type === "string") {
      this.current.astNode = item;
    }
    item.$cstNode = current;
    const node = this.nodeStack.pop();
    if ((node === null || node === void 0 ? void 0 : node.content.length) === 0) {
      this.removeNode(node);
    }
  }
};
var AbstractCstNode = class {
  /** @deprecated use `container` instead. */
  get parent() {
    return this.container;
  }
  /** @deprecated use `grammarSource` instead. */
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return false;
  }
  get astNode() {
    var _a6, _b;
    const node = typeof ((_a6 = this._astNode) === null || _a6 === void 0 ? void 0 : _a6.$type) === "string" ? this._astNode : (_b = this.container) === null || _b === void 0 ? void 0 : _b.astNode;
    if (!node) {
      throw new Error("This node has no associated AST element");
    }
    return node;
  }
  set astNode(value) {
    this._astNode = value;
  }
  /** @deprecated use `astNode` instead. */
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
};
var LeafCstNodeImpl = class extends AbstractCstNode {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(offset, length, range, tokenType, hidden = false) {
    super();
    this._hidden = hidden;
    this._offset = offset;
    this._tokenType = tokenType;
    this._length = length;
    this._range = range;
  }
};
var CompositeCstNodeImpl = class extends AbstractCstNode {
  constructor() {
    super(...arguments);
    this.content = new CstNodeContainer(this);
  }
  /** @deprecated use `content` instead. */
  get children() {
    return this.content;
  }
  get offset() {
    var _a6, _b;
    return (_b = (_a6 = this.firstNonHiddenNode) === null || _a6 === void 0 ? void 0 : _a6.offset) !== null && _b !== void 0 ? _b : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var _a6, _b;
    return (_b = (_a6 = this.lastNonHiddenNode) === null || _a6 === void 0 ? void 0 : _a6.end) !== null && _b !== void 0 ? _b : 0;
  }
  get range() {
    const firstNode = this.firstNonHiddenNode;
    const lastNode = this.lastNonHiddenNode;
    if (firstNode && lastNode) {
      if (this._rangeCache === void 0) {
        const { range: firstRange } = firstNode;
        const { range: lastRange } = lastNode;
        this._rangeCache = { start: firstRange.start, end: lastRange.end.line < firstRange.start.line ? firstRange.start : lastRange.end };
      }
      return this._rangeCache;
    } else {
      return { start: Position.create(0, 0), end: Position.create(0, 0) };
    }
  }
  get firstNonHiddenNode() {
    for (const child of this.content) {
      if (!child.hidden) {
        return child;
      }
    }
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let i = this.content.length - 1; i >= 0; i--) {
      const child = this.content[i];
      if (!child.hidden) {
        return child;
      }
    }
    return this.content[this.content.length - 1];
  }
};
var CstNodeContainer = class _CstNodeContainer extends Array {
  constructor(parent) {
    super();
    this.parent = parent;
    Object.setPrototypeOf(this, _CstNodeContainer.prototype);
  }
  push(...items) {
    this.addParents(items);
    return super.push(...items);
  }
  unshift(...items) {
    this.addParents(items);
    return super.unshift(...items);
  }
  splice(start, count, ...items) {
    this.addParents(items);
    return super.splice(start, count, ...items);
  }
  addParents(items) {
    for (const item of items) {
      item.container = this.parent;
    }
  }
};
var RootCstNodeImpl = class extends CompositeCstNodeImpl {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(input) {
    super();
    this._text = "";
    this._text = input !== null && input !== void 0 ? input : "";
  }
};

// node_modules/langium/lib/parser/langium-parser.js
var DatatypeSymbol = Symbol("Datatype");
function isDataTypeNode(node) {
  return node.$type === DatatypeSymbol;
}
var ruleSuffix = "​";
var withRuleSuffix = (name) => name.endsWith(ruleSuffix) ? name : name + ruleSuffix;
var AbstractLangiumParser = class {
  constructor(services) {
    this._unorderedGroups = /* @__PURE__ */ new Map();
    this.allRules = /* @__PURE__ */ new Map();
    this.lexer = services.parser.Lexer;
    const tokens = this.lexer.definition;
    const production = services.LanguageMetaData.mode === "production";
    this.wrapper = new ChevrotainWrapper(tokens, Object.assign(Object.assign({}, services.parser.ParserConfig), { skipValidations: production, errorMessageProvider: services.parser.ParserErrorMessageProvider }));
  }
  alternatives(idx, choices) {
    this.wrapper.wrapOr(idx, choices);
  }
  optional(idx, callback) {
    this.wrapper.wrapOption(idx, callback);
  }
  many(idx, callback) {
    this.wrapper.wrapMany(idx, callback);
  }
  atLeastOne(idx, callback) {
    this.wrapper.wrapAtLeastOne(idx, callback);
  }
  getRule(name) {
    return this.allRules.get(name);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
};
var LangiumParser = class extends AbstractLangiumParser {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(services) {
    super(services);
    this.nodeBuilder = new CstNodeBuilder();
    this.stack = [];
    this.assignmentMap = /* @__PURE__ */ new Map();
    this.linker = services.references.Linker;
    this.converter = services.parser.ValueConverter;
    this.astReflection = services.shared.AstReflection;
  }
  rule(rule, impl) {
    const type = this.computeRuleType(rule);
    const ruleMethod = this.wrapper.DEFINE_RULE(withRuleSuffix(rule.name), this.startImplementation(type, impl).bind(this));
    this.allRules.set(rule.name, ruleMethod);
    if (rule.entry) {
      this.mainRule = ruleMethod;
    }
    return ruleMethod;
  }
  computeRuleType(rule) {
    if (rule.fragment) {
      return void 0;
    } else if (isDataTypeRule(rule)) {
      return DatatypeSymbol;
    } else {
      const explicit = getExplicitRuleType(rule);
      return explicit !== null && explicit !== void 0 ? explicit : rule.name;
    }
  }
  parse(input, options = {}) {
    this.nodeBuilder.buildRootNode(input);
    const lexerResult = this.lexerResult = this.lexer.tokenize(input);
    this.wrapper.input = lexerResult.tokens;
    const ruleMethod = options.rule ? this.allRules.get(options.rule) : this.mainRule;
    if (!ruleMethod) {
      throw new Error(options.rule ? `No rule found with name '${options.rule}'` : "No main rule available.");
    }
    const result = ruleMethod.call(this.wrapper, {});
    this.nodeBuilder.addHiddenNodes(lexerResult.hidden);
    this.unorderedGroups.clear();
    this.lexerResult = void 0;
    return {
      value: result,
      lexerErrors: lexerResult.errors,
      lexerReport: lexerResult.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation($type, implementation) {
    return (args) => {
      const createNode = !this.isRecording() && $type !== void 0;
      if (createNode) {
        const node = { $type };
        this.stack.push(node);
        if ($type === DatatypeSymbol) {
          node.value = "";
        }
      }
      let result;
      try {
        result = implementation(args);
      } catch (err) {
        result = void 0;
      }
      if (result === void 0 && createNode) {
        result = this.construct();
      }
      return result;
    };
  }
  extractHiddenTokens(token) {
    const hiddenTokens = this.lexerResult.hidden;
    if (!hiddenTokens.length) {
      return [];
    }
    const offset = token.startOffset;
    for (let i = 0; i < hiddenTokens.length; i++) {
      const token2 = hiddenTokens[i];
      if (token2.startOffset > offset) {
        return hiddenTokens.splice(0, i);
      }
    }
    return hiddenTokens.splice(0, hiddenTokens.length);
  }
  consume(idx, tokenType, feature) {
    const token = this.wrapper.wrapConsume(idx, tokenType);
    if (!this.isRecording() && this.isValidToken(token)) {
      const hiddenTokens = this.extractHiddenTokens(token);
      this.nodeBuilder.addHiddenNodes(hiddenTokens);
      const leafNode = this.nodeBuilder.buildLeafNode(token, feature);
      const { assignment, isCrossRef } = this.getAssignment(feature);
      const current = this.current;
      if (assignment) {
        const convertedValue = isKeyword(feature) ? token.image : this.converter.convert(token.image, leafNode);
        this.assign(assignment.operator, assignment.feature, convertedValue, leafNode, isCrossRef);
      } else if (isDataTypeNode(current)) {
        let text = token.image;
        if (!isKeyword(feature)) {
          text = this.converter.convert(text, leafNode).toString();
        }
        current.value += text;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(token) {
    return !token.isInsertedInRecovery && !isNaN(token.startOffset) && typeof token.endOffset === "number" && !isNaN(token.endOffset);
  }
  subrule(idx, rule, fragment, feature, args) {
    let cstNode;
    if (!this.isRecording() && !fragment) {
      cstNode = this.nodeBuilder.buildCompositeNode(feature);
    }
    const subruleResult = this.wrapper.wrapSubrule(idx, rule, args);
    if (!this.isRecording() && cstNode && cstNode.length > 0) {
      this.performSubruleAssignment(subruleResult, feature, cstNode);
    }
  }
  performSubruleAssignment(result, feature, cstNode) {
    const { assignment, isCrossRef } = this.getAssignment(feature);
    if (assignment) {
      this.assign(assignment.operator, assignment.feature, result, cstNode, isCrossRef);
    } else if (!assignment) {
      const current = this.current;
      if (isDataTypeNode(current)) {
        current.value += result.toString();
      } else if (typeof result === "object" && result) {
        const object = this.assignWithoutOverride(result, current);
        const newItem = object;
        this.stack.pop();
        this.stack.push(newItem);
      }
    }
  }
  action($type, action) {
    if (!this.isRecording()) {
      let last = this.current;
      if (action.feature && action.operator) {
        last = this.construct();
        this.nodeBuilder.removeNode(last.$cstNode);
        const node = this.nodeBuilder.buildCompositeNode(action);
        node.content.push(last.$cstNode);
        const newItem = { $type };
        this.stack.push(newItem);
        this.assign(action.operator, action.feature, last, last.$cstNode, false);
      } else {
        last.$type = $type;
      }
    }
  }
  construct() {
    if (this.isRecording()) {
      return void 0;
    }
    const obj = this.current;
    linkContentToContainer(obj);
    this.nodeBuilder.construct(obj);
    this.stack.pop();
    if (isDataTypeNode(obj)) {
      return this.converter.convert(obj.value, obj.$cstNode);
    } else {
      assignMandatoryProperties(this.astReflection, obj);
    }
    return obj;
  }
  getAssignment(feature) {
    if (!this.assignmentMap.has(feature)) {
      const assignment = getContainerOfType(feature, isAssignment);
      this.assignmentMap.set(feature, {
        assignment,
        isCrossRef: assignment ? isCrossReference(assignment.terminal) : false
      });
    }
    return this.assignmentMap.get(feature);
  }
  assign(operator, feature, value, cstNode, isCrossRef) {
    const obj = this.current;
    let item;
    if (isCrossRef && typeof value === "string") {
      item = this.linker.buildReference(obj, feature, cstNode, value);
    } else {
      item = value;
    }
    switch (operator) {
      case "=": {
        obj[feature] = item;
        break;
      }
      case "?=": {
        obj[feature] = true;
        break;
      }
      case "+=": {
        if (!Array.isArray(obj[feature])) {
          obj[feature] = [];
        }
        obj[feature].push(item);
      }
    }
  }
  assignWithoutOverride(target, source) {
    for (const [name, existingValue] of Object.entries(source)) {
      const newValue = target[name];
      if (newValue === void 0) {
        target[name] = existingValue;
      } else if (Array.isArray(newValue) && Array.isArray(existingValue)) {
        existingValue.push(...newValue);
        target[name] = existingValue;
      }
    }
    const targetCstNode = target.$cstNode;
    if (targetCstNode) {
      targetCstNode.astNode = void 0;
      target.$cstNode = void 0;
    }
    return target;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
};
var AbstractParserErrorMessageProvider = class {
  buildMismatchTokenMessage(options) {
    return defaultParserErrorProvider.buildMismatchTokenMessage(options);
  }
  buildNotAllInputParsedMessage(options) {
    return defaultParserErrorProvider.buildNotAllInputParsedMessage(options);
  }
  buildNoViableAltMessage(options) {
    return defaultParserErrorProvider.buildNoViableAltMessage(options);
  }
  buildEarlyExitMessage(options) {
    return defaultParserErrorProvider.buildEarlyExitMessage(options);
  }
};
var LangiumParserErrorMessageProvider = class extends AbstractParserErrorMessageProvider {
  buildMismatchTokenMessage({ expected, actual }) {
    const expectedMsg = expected.LABEL ? "`" + expected.LABEL + "`" : expected.name.endsWith(":KW") ? `keyword '${expected.name.substring(0, expected.name.length - 3)}'` : `token of type '${expected.name}'`;
    return `Expecting ${expectedMsg} but found \`${actual.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant }) {
    return `Expecting end of file but found \`${firstRedundant.image}\`.`;
  }
};
var LangiumCompletionParser = class extends AbstractLangiumParser {
  constructor() {
    super(...arguments);
    this.tokens = [];
    this.elementStack = [];
    this.lastElementStack = [];
    this.nextTokenIndex = 0;
    this.stackSize = 0;
  }
  action() {
  }
  construct() {
    return void 0;
  }
  parse(input) {
    this.resetState();
    const tokens = this.lexer.tokenize(input, { mode: "partial" });
    this.tokens = tokens.tokens;
    this.wrapper.input = [...this.tokens];
    this.mainRule.call(this.wrapper, {});
    this.unorderedGroups.clear();
    return {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(rule, impl) {
    const ruleMethod = this.wrapper.DEFINE_RULE(withRuleSuffix(rule.name), this.startImplementation(impl).bind(this));
    this.allRules.set(rule.name, ruleMethod);
    if (rule.entry) {
      this.mainRule = ruleMethod;
    }
    return ruleMethod;
  }
  resetState() {
    this.elementStack = [];
    this.lastElementStack = [];
    this.nextTokenIndex = 0;
    this.stackSize = 0;
  }
  startImplementation(implementation) {
    return (args) => {
      const size = this.keepStackSize();
      try {
        implementation(args);
      } finally {
        this.resetStackSize(size);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const size = this.elementStack.length;
    this.stackSize = size;
    return size;
  }
  resetStackSize(size) {
    this.removeUnexpectedElements();
    this.stackSize = size;
  }
  consume(idx, tokenType, feature) {
    this.wrapper.wrapConsume(idx, tokenType);
    if (!this.isRecording()) {
      this.lastElementStack = [...this.elementStack, feature];
      this.nextTokenIndex = this.currIdx + 1;
    }
  }
  subrule(idx, rule, fragment, feature, args) {
    this.before(feature);
    this.wrapper.wrapSubrule(idx, rule, args);
    this.after(feature);
  }
  before(element) {
    if (!this.isRecording()) {
      this.elementStack.push(element);
    }
  }
  after(element) {
    if (!this.isRecording()) {
      const index = this.elementStack.lastIndexOf(element);
      if (index >= 0) {
        this.elementStack.splice(index);
      }
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
};
var defaultConfig = {
  recoveryEnabled: true,
  nodeLocationTracking: "full",
  skipValidations: true,
  errorMessageProvider: new LangiumParserErrorMessageProvider()
};
var ChevrotainWrapper = class extends EmbeddedActionsParser {
  constructor(tokens, config) {
    const useDefaultLookahead = config && "maxLookahead" in config;
    super(tokens, Object.assign(Object.assign(Object.assign({}, defaultConfig), { lookaheadStrategy: useDefaultLookahead ? new LLkLookaheadStrategy({ maxLookahead: config.maxLookahead }) : new LLStarLookaheadStrategy({
      // If validations are skipped, don't log the lookahead warnings
      logging: config.skipValidations ? () => {
      } : void 0
    }) }), config));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(name, impl) {
    return this.RULE(name, impl);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(idx, tokenType) {
    return this.consume(idx, tokenType);
  }
  wrapSubrule(idx, rule, args) {
    return this.subrule(idx, rule, {
      ARGS: [args]
    });
  }
  wrapOr(idx, choices) {
    this.or(idx, choices);
  }
  wrapOption(idx, callback) {
    this.option(idx, callback);
  }
  wrapMany(idx, callback) {
    this.many(idx, callback);
  }
  wrapAtLeastOne(idx, callback) {
    this.atLeastOne(idx, callback);
  }
};

// node_modules/langium/lib/parser/parser-builder-base.js
function createParser(grammar, parser, tokens) {
  const parserContext = {
    parser,
    tokens,
    ruleNames: /* @__PURE__ */ new Map()
  };
  buildRules(parserContext, grammar);
  return parser;
}
function buildRules(parserContext, grammar) {
  const reachable = getAllReachableRules(grammar, false);
  const parserRules = stream(grammar.rules).filter(isParserRule).filter((rule) => reachable.has(rule));
  for (const rule of parserRules) {
    const ctx = Object.assign(Object.assign({}, parserContext), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    parserContext.parser.rule(rule, buildElement(ctx, rule.definition));
  }
}
function buildElement(ctx, element, ignoreGuard = false) {
  let method;
  if (isKeyword(element)) {
    method = buildKeyword(ctx, element);
  } else if (isAction(element)) {
    method = buildAction(ctx, element);
  } else if (isAssignment(element)) {
    method = buildElement(ctx, element.terminal);
  } else if (isCrossReference(element)) {
    method = buildCrossReference(ctx, element);
  } else if (isRuleCall(element)) {
    method = buildRuleCall(ctx, element);
  } else if (isAlternatives(element)) {
    method = buildAlternatives(ctx, element);
  } else if (isUnorderedGroup(element)) {
    method = buildUnorderedGroup(ctx, element);
  } else if (isGroup(element)) {
    method = buildGroup(ctx, element);
  } else if (isEndOfFile(element)) {
    const idx = ctx.consume++;
    method = () => ctx.parser.consume(idx, EOF, element);
  } else {
    throw new ErrorWithLocation(element.$cstNode, `Unexpected element type: ${element.$type}`);
  }
  return wrap(ctx, ignoreGuard ? void 0 : getGuardCondition(element), method, element.cardinality);
}
function buildAction(ctx, action) {
  const actionType = getTypeName(action);
  return () => ctx.parser.action(actionType, action);
}
function buildRuleCall(ctx, ruleCall) {
  const rule = ruleCall.rule.ref;
  if (isParserRule(rule)) {
    const idx = ctx.subrule++;
    const fragment = rule.fragment;
    const predicate = ruleCall.arguments.length > 0 ? buildRuleCallPredicate(rule, ruleCall.arguments) : () => ({});
    return (args) => ctx.parser.subrule(idx, getRule(ctx, rule), fragment, ruleCall, predicate(args));
  } else if (isTerminalRule(rule)) {
    const idx = ctx.consume++;
    const method = getToken(ctx, rule.name);
    return () => ctx.parser.consume(idx, method, ruleCall);
  } else if (!rule) {
    throw new ErrorWithLocation(ruleCall.$cstNode, `Undefined rule: ${ruleCall.rule.$refText}`);
  } else {
    assertUnreachable(rule);
  }
}
function buildRuleCallPredicate(rule, namedArgs) {
  const predicates = namedArgs.map((e) => buildPredicate(e.value));
  return (args) => {
    const ruleArgs = {};
    for (let i = 0; i < predicates.length; i++) {
      const ruleTarget = rule.parameters[i];
      const predicate = predicates[i];
      ruleArgs[ruleTarget.name] = predicate(args);
    }
    return ruleArgs;
  };
}
function buildPredicate(condition) {
  if (isDisjunction(condition)) {
    const left = buildPredicate(condition.left);
    const right = buildPredicate(condition.right);
    return (args) => left(args) || right(args);
  } else if (isConjunction(condition)) {
    const left = buildPredicate(condition.left);
    const right = buildPredicate(condition.right);
    return (args) => left(args) && right(args);
  } else if (isNegation(condition)) {
    const value = buildPredicate(condition.value);
    return (args) => !value(args);
  } else if (isParameterReference(condition)) {
    const name = condition.parameter.ref.name;
    return (args) => args !== void 0 && args[name] === true;
  } else if (isBooleanLiteral(condition)) {
    const value = Boolean(condition.true);
    return () => value;
  }
  assertUnreachable(condition);
}
function buildAlternatives(ctx, alternatives) {
  if (alternatives.elements.length === 1) {
    return buildElement(ctx, alternatives.elements[0]);
  } else {
    const methods = [];
    for (const element of alternatives.elements) {
      const predicatedMethod = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: buildElement(ctx, element, true)
      };
      const guard = getGuardCondition(element);
      if (guard) {
        predicatedMethod.GATE = buildPredicate(guard);
      }
      methods.push(predicatedMethod);
    }
    const idx = ctx.or++;
    return (args) => ctx.parser.alternatives(idx, methods.map((method) => {
      const alt = {
        ALT: () => method.ALT(args)
      };
      const gate = method.GATE;
      if (gate) {
        alt.GATE = () => gate(args);
      }
      return alt;
    }));
  }
}
function buildUnorderedGroup(ctx, group) {
  if (group.elements.length === 1) {
    return buildElement(ctx, group.elements[0]);
  }
  const methods = [];
  for (const element of group.elements) {
    const predicatedMethod = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: buildElement(ctx, element, true)
    };
    const guard = getGuardCondition(element);
    if (guard) {
      predicatedMethod.GATE = buildPredicate(guard);
    }
    methods.push(predicatedMethod);
  }
  const orIdx = ctx.or++;
  const idFunc = (groupIdx, lParser) => {
    const stackId = lParser.getRuleStack().join("-");
    return `uGroup_${groupIdx}_${stackId}`;
  };
  const alternatives = (args) => ctx.parser.alternatives(orIdx, methods.map((method, idx) => {
    const alt = { ALT: () => true };
    const parser = ctx.parser;
    alt.ALT = () => {
      method.ALT(args);
      if (!parser.isRecording()) {
        const key = idFunc(orIdx, parser);
        if (!parser.unorderedGroups.get(key)) {
          parser.unorderedGroups.set(key, []);
        }
        const groupState = parser.unorderedGroups.get(key);
        if (typeof (groupState === null || groupState === void 0 ? void 0 : groupState[idx]) === "undefined") {
          groupState[idx] = true;
        }
      }
    };
    const gate = method.GATE;
    if (gate) {
      alt.GATE = () => gate(args);
    } else {
      alt.GATE = () => {
        const trackedAlternatives = parser.unorderedGroups.get(idFunc(orIdx, parser));
        const allow = !(trackedAlternatives === null || trackedAlternatives === void 0 ? void 0 : trackedAlternatives[idx]);
        return allow;
      };
    }
    return alt;
  }));
  const wrapped = wrap(ctx, getGuardCondition(group), alternatives, "*");
  return (args) => {
    wrapped(args);
    if (!ctx.parser.isRecording()) {
      ctx.parser.unorderedGroups.delete(idFunc(orIdx, ctx.parser));
    }
  };
}
function buildGroup(ctx, group) {
  const methods = group.elements.map((e) => buildElement(ctx, e));
  return (args) => methods.forEach((method) => method(args));
}
function getGuardCondition(element) {
  if (isGroup(element)) {
    return element.guardCondition;
  }
  return void 0;
}
function buildCrossReference(ctx, crossRef, terminal = crossRef.terminal) {
  if (!terminal) {
    if (!crossRef.type.ref) {
      throw new Error("Could not resolve reference to type: " + crossRef.type.$refText);
    }
    const assignment = findNameAssignment(crossRef.type.ref);
    const assignTerminal = assignment === null || assignment === void 0 ? void 0 : assignment.terminal;
    if (!assignTerminal) {
      throw new Error("Could not find name assignment for type: " + getTypeName(crossRef.type.ref));
    }
    return buildCrossReference(ctx, crossRef, assignTerminal);
  } else if (isRuleCall(terminal) && isParserRule(terminal.rule.ref)) {
    const rule = terminal.rule.ref;
    const idx = ctx.subrule++;
    return (args) => ctx.parser.subrule(idx, getRule(ctx, rule), false, crossRef, args);
  } else if (isRuleCall(terminal) && isTerminalRule(terminal.rule.ref)) {
    const idx = ctx.consume++;
    const terminalRule = getToken(ctx, terminal.rule.ref.name);
    return () => ctx.parser.consume(idx, terminalRule, crossRef);
  } else if (isKeyword(terminal)) {
    const idx = ctx.consume++;
    const keyword = getToken(ctx, terminal.value);
    return () => ctx.parser.consume(idx, keyword, crossRef);
  } else {
    throw new Error("Could not build cross reference parser");
  }
}
function buildKeyword(ctx, keyword) {
  const idx = ctx.consume++;
  const token = ctx.tokens[keyword.value];
  if (!token) {
    throw new Error("Could not find token for keyword: " + keyword.value);
  }
  return () => ctx.parser.consume(idx, token, keyword);
}
function wrap(ctx, guard, method, cardinality) {
  const gate = guard && buildPredicate(guard);
  if (!cardinality) {
    if (gate) {
      const idx = ctx.or++;
      return (args) => ctx.parser.alternatives(idx, [
        {
          ALT: () => method(args),
          GATE: () => gate(args)
        },
        {
          ALT: EMPTY_ALT(),
          GATE: () => !gate(args)
        }
      ]);
    } else {
      return method;
    }
  }
  if (cardinality === "*") {
    const idx = ctx.many++;
    return (args) => ctx.parser.many(idx, {
      DEF: () => method(args),
      GATE: gate ? () => gate(args) : void 0
    });
  } else if (cardinality === "+") {
    const idx = ctx.many++;
    if (gate) {
      const orIdx = ctx.or++;
      return (args) => ctx.parser.alternatives(orIdx, [
        {
          ALT: () => ctx.parser.atLeastOne(idx, {
            DEF: () => method(args)
          }),
          GATE: () => gate(args)
        },
        {
          ALT: EMPTY_ALT(),
          GATE: () => !gate(args)
        }
      ]);
    } else {
      return (args) => ctx.parser.atLeastOne(idx, {
        DEF: () => method(args)
      });
    }
  } else if (cardinality === "?") {
    const idx = ctx.optional++;
    return (args) => ctx.parser.optional(idx, {
      DEF: () => method(args),
      GATE: gate ? () => gate(args) : void 0
    });
  } else {
    assertUnreachable(cardinality);
  }
}
function getRule(ctx, element) {
  const name = getRuleName(ctx, element);
  const rule = ctx.parser.getRule(name);
  if (!rule)
    throw new Error(`Rule "${name}" not found."`);
  return rule;
}
function getRuleName(ctx, element) {
  if (isParserRule(element)) {
    return element.name;
  } else if (ctx.ruleNames.has(element)) {
    return ctx.ruleNames.get(element);
  } else {
    let item = element;
    let parent = item.$container;
    let ruleName = element.$type;
    while (!isParserRule(parent)) {
      if (isGroup(parent) || isAlternatives(parent) || isUnorderedGroup(parent)) {
        const index = parent.elements.indexOf(item);
        ruleName = index.toString() + ":" + ruleName;
      }
      item = parent;
      parent = parent.$container;
    }
    const rule = parent;
    ruleName = rule.name + ":" + ruleName;
    ctx.ruleNames.set(element, ruleName);
    return ruleName;
  }
}
function getToken(ctx, name) {
  const token = ctx.tokens[name];
  if (!token)
    throw new Error(`Token "${name}" not found."`);
  return token;
}

// node_modules/langium/lib/parser/completion-parser-builder.js
function createCompletionParser(services) {
  const grammar = services.Grammar;
  const lexer = services.parser.Lexer;
  const parser = new LangiumCompletionParser(services);
  createParser(grammar, parser, lexer.definition);
  parser.finalize();
  return parser;
}

// node_modules/langium/lib/parser/langium-parser-builder.js
function createLangiumParser(services) {
  const parser = prepareLangiumParser(services);
  parser.finalize();
  return parser;
}
function prepareLangiumParser(services) {
  const grammar = services.Grammar;
  const lexer = services.parser.Lexer;
  const parser = new LangiumParser(services);
  return createParser(grammar, parser, lexer.definition);
}

// node_modules/langium/lib/parser/token-builder.js
var DefaultTokenBuilder = class {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(grammar, options) {
    const reachableRules = stream(getAllReachableRules(grammar, false));
    const terminalTokens = this.buildTerminalTokens(reachableRules);
    const tokens = this.buildKeywordTokens(reachableRules, terminalTokens, options);
    terminalTokens.forEach((terminalToken) => {
      const pattern = terminalToken.PATTERN;
      if (typeof pattern === "object" && pattern && "test" in pattern && isWhitespace(pattern)) {
        tokens.unshift(terminalToken);
      } else {
        tokens.push(terminalToken);
      }
    });
    return tokens;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(text) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const diagnostics = [...this.diagnostics];
    this.diagnostics = [];
    return diagnostics;
  }
  buildTerminalTokens(rules) {
    return rules.filter(isTerminalRule).filter((e) => !e.fragment).map((terminal) => this.buildTerminalToken(terminal)).toArray();
  }
  buildTerminalToken(terminal) {
    const regex = terminalRegex(terminal);
    const pattern = this.requiresCustomPattern(regex) ? this.regexPatternFunction(regex) : regex;
    const tokenType = {
      name: terminal.name,
      PATTERN: pattern
    };
    if (typeof pattern === "function") {
      tokenType.LINE_BREAKS = true;
    }
    if (terminal.hidden) {
      tokenType.GROUP = isWhitespace(regex) ? Lexer.SKIPPED : "hidden";
    }
    return tokenType;
  }
  requiresCustomPattern(regex) {
    if (regex.flags.includes("u") || regex.flags.includes("s")) {
      return true;
    } else if (regex.source.includes("?<=") || regex.source.includes("?<!")) {
      return true;
    } else {
      return false;
    }
  }
  regexPatternFunction(regex) {
    const stickyRegex = new RegExp(regex, regex.flags + "y");
    return (text, offset) => {
      stickyRegex.lastIndex = offset;
      const execResult = stickyRegex.exec(text);
      return execResult;
    };
  }
  buildKeywordTokens(rules, terminalTokens, options) {
    return rules.filter(isParserRule).flatMap((rule) => streamAllContents(rule).filter(isKeyword)).distinct((e) => e.value).toArray().sort((a, b) => b.value.length - a.value.length).map((keyword) => this.buildKeywordToken(keyword, terminalTokens, Boolean(options === null || options === void 0 ? void 0 : options.caseInsensitive)));
  }
  buildKeywordToken(keyword, terminalTokens, caseInsensitive) {
    const keywordPattern = this.buildKeywordPattern(keyword, caseInsensitive);
    const tokenType = {
      name: keyword.value,
      PATTERN: keywordPattern,
      LONGER_ALT: this.findLongerAlt(keyword, terminalTokens)
    };
    if (typeof keywordPattern === "function") {
      tokenType.LINE_BREAKS = true;
    }
    return tokenType;
  }
  buildKeywordPattern(keyword, caseInsensitive) {
    return caseInsensitive ? new RegExp(getCaseInsensitivePattern(keyword.value)) : keyword.value;
  }
  findLongerAlt(keyword, terminalTokens) {
    return terminalTokens.reduce((longerAlts, token) => {
      const pattern = token === null || token === void 0 ? void 0 : token.PATTERN;
      if ((pattern === null || pattern === void 0 ? void 0 : pattern.source) && partialMatches("^" + pattern.source + "$", keyword.value)) {
        longerAlts.push(token);
      }
      return longerAlts;
    }, []);
  }
};

// node_modules/langium/lib/parser/value-converter.js
var DefaultValueConverter = class {
  convert(input, cstNode) {
    let feature = cstNode.grammarSource;
    if (isCrossReference(feature)) {
      feature = getCrossReferenceTerminal(feature);
    }
    if (isRuleCall(feature)) {
      const rule = feature.rule.ref;
      if (!rule) {
        throw new Error("This cst node was not parsed by a rule.");
      }
      return this.runConverter(rule, input, cstNode);
    }
    return input;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(rule, input, cstNode) {
    var _a6;
    switch (rule.name.toUpperCase()) {
      case "INT":
        return ValueConverter.convertInt(input);
      case "STRING":
        return ValueConverter.convertString(input);
      case "ID":
        return ValueConverter.convertID(input);
    }
    switch ((_a6 = getRuleType(rule)) === null || _a6 === void 0 ? void 0 : _a6.toLowerCase()) {
      case "number":
        return ValueConverter.convertNumber(input);
      case "boolean":
        return ValueConverter.convertBoolean(input);
      case "bigint":
        return ValueConverter.convertBigint(input);
      case "date":
        return ValueConverter.convertDate(input);
      default:
        return input;
    }
  }
};
var ValueConverter;
(function(ValueConverter2) {
  function convertString(input) {
    let result = "";
    for (let i = 1; i < input.length - 1; i++) {
      const c = input.charAt(i);
      if (c === "\\") {
        const c1 = input.charAt(++i);
        result += convertEscapeCharacter(c1);
      } else {
        result += c;
      }
    }
    return result;
  }
  ValueConverter2.convertString = convertString;
  function convertEscapeCharacter(char) {
    switch (char) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return "\n";
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return char;
    }
  }
  function convertID(input) {
    if (input.charAt(0) === "^") {
      return input.substring(1);
    } else {
      return input;
    }
  }
  ValueConverter2.convertID = convertID;
  function convertInt(input) {
    return parseInt(input);
  }
  ValueConverter2.convertInt = convertInt;
  function convertBigint(input) {
    return BigInt(input);
  }
  ValueConverter2.convertBigint = convertBigint;
  function convertDate(input) {
    return new Date(input);
  }
  ValueConverter2.convertDate = convertDate;
  function convertNumber(input) {
    return Number(input);
  }
  ValueConverter2.convertNumber = convertNumber;
  function convertBoolean(input) {
    return input.toLowerCase() === "true";
  }
  ValueConverter2.convertBoolean = convertBoolean;
})(ValueConverter || (ValueConverter = {}));

// node_modules/langium/lib/utils/cancellation.js
var cancellation_exports = {};
__reExport(cancellation_exports, __toESM(require_cancellation(), 1));

// node_modules/langium/lib/utils/promise-utils.js
function delayNextTick() {
  return new Promise((resolve) => {
    if (typeof setImmediate === "undefined") {
      setTimeout(resolve, 0);
    } else {
      setImmediate(resolve);
    }
  });
}
var lastTick = 0;
var globalInterruptionPeriod = 10;
function startCancelableOperation() {
  lastTick = performance.now();
  return new cancellation_exports.CancellationTokenSource();
}
function setInterruptionPeriod(period) {
  globalInterruptionPeriod = period;
}
var OperationCancelled = Symbol("OperationCancelled");
function isOperationCancelled(err) {
  return err === OperationCancelled;
}
async function interruptAndCheck(token) {
  if (token === cancellation_exports.CancellationToken.None) {
    return;
  }
  const current = performance.now();
  if (current - lastTick >= globalInterruptionPeriod) {
    lastTick = current;
    await delayNextTick();
    lastTick = performance.now();
  }
  if (token.isCancellationRequested) {
    throw OperationCancelled;
  }
}
var Deferred = class {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (arg) => {
        resolve(arg);
        return this;
      };
      this.reject = (err) => {
        reject(err);
        return this;
      };
    });
  }
};

// node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var FullTextDocument2 = class _FullTextDocument {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      const start = this.offsetAt(range.start);
      const end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }
    return this._content;
  }
  update(changes, version) {
    for (const change of changes) {
      if (_FullTextDocument.isIncremental(change)) {
        const range = getWellformedRange(change.range);
        const startOffset = this.offsetAt(range.start);
        const endOffset = this.offsetAt(range.end);
        this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
        const startLine = Math.max(range.start.line, 0);
        const endLine = Math.max(range.end.line, 0);
        let lineOffsets = this._lineOffsets;
        const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
        if (endLine - startLine === addedLineOffsets.length) {
          for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
            lineOffsets[i + startLine + 1] = addedLineOffsets[i];
          }
        } else {
          if (addedLineOffsets.length < 1e4) {
            lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
          } else {
            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
          }
        }
        const diff = change.text.length - (endOffset - startOffset);
        if (diff !== 0) {
          for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
            lineOffsets[i] = lineOffsets[i] + diff;
          }
        }
      } else if (_FullTextDocument.isFull(change)) {
        this._content = change.text;
        this._lineOffsets = void 0;
      } else {
        throw new Error("Unknown change event received");
      }
    }
    this._version = version;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      this._lineOffsets = computeLineOffsets(this._content, true);
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    const lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return { line: 0, character: offset };
    }
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    const line = low - 1;
    offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
    return { line, character: offset - lineOffsets[line] };
  }
  offsetAt(position) {
    const lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    const lineOffset = lineOffsets[position.line];
    if (position.character <= 0) {
      return lineOffset;
    }
    const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    const offset = Math.min(lineOffset + position.character, nextLineOffset);
    return this.ensureBeforeEOL(offset, lineOffset);
  }
  ensureBeforeEOL(offset, lineOffset) {
    while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
      offset--;
    }
    return offset;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
  }
  static isFull(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
  }
};
var TextDocument2;
(function(TextDocument3) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument2(uri, languageId, version, content);
  }
  TextDocument3.create = create;
  function update(document, changes, version) {
    if (document instanceof FullTextDocument2) {
      document.update(changes, version);
      return document;
    } else {
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
  }
  TextDocument3.update = update;
  function applyEdits(document, edits) {
    const text = document.getText();
    const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
      const diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = 0;
    const spans = [];
    for (const e of sortedEdits) {
      const startOffset = document.offsetAt(e.range.start);
      if (startOffset < lastModifiedOffset) {
        throw new Error("Overlapping edit");
      } else if (startOffset > lastModifiedOffset) {
        spans.push(text.substring(lastModifiedOffset, startOffset));
      }
      if (e.newText.length) {
        spans.push(e.newText);
      }
      lastModifiedOffset = document.offsetAt(e.range.end);
    }
    spans.push(text.substr(lastModifiedOffset));
    return spans.join("");
  }
  TextDocument3.applyEdits = applyEdits;
})(TextDocument2 || (TextDocument2 = {}));
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i++] = left[leftIdx++];
    } else {
      data[i++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    if (isEOL(ch)) {
      if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
        i++;
      }
      result.push(textOffset + i + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start = range.start;
  const end = range.end;
  if (start.line > end.line || start.line === end.line && start.character > end.character) {
    return { start: end, end: start };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}

// node_modules/vscode-uri/lib/esm/index.mjs
var LIB;
(() => {
  "use strict";
  var t = { 470: (t2) => {
    function e2(t3) {
      if ("string" != typeof t3) throw new TypeError("Path must be a string. Received " + JSON.stringify(t3));
    }
    function r2(t3, e3) {
      for (var r3, n3 = "", i = 0, o = -1, s = 0, h = 0; h <= t3.length; ++h) {
        if (h < t3.length) r3 = t3.charCodeAt(h);
        else {
          if (47 === r3) break;
          r3 = 47;
        }
        if (47 === r3) {
          if (o === h - 1 || 1 === s) ;
          else if (o !== h - 1 && 2 === s) {
            if (n3.length < 2 || 2 !== i || 46 !== n3.charCodeAt(n3.length - 1) || 46 !== n3.charCodeAt(n3.length - 2)) {
              if (n3.length > 2) {
                var a = n3.lastIndexOf("/");
                if (a !== n3.length - 1) {
                  -1 === a ? (n3 = "", i = 0) : i = (n3 = n3.slice(0, a)).length - 1 - n3.lastIndexOf("/"), o = h, s = 0;
                  continue;
                }
              } else if (2 === n3.length || 1 === n3.length) {
                n3 = "", i = 0, o = h, s = 0;
                continue;
              }
            }
            e3 && (n3.length > 0 ? n3 += "/.." : n3 = "..", i = 2);
          } else n3.length > 0 ? n3 += "/" + t3.slice(o + 1, h) : n3 = t3.slice(o + 1, h), i = h - o - 1;
          o = h, s = 0;
        } else 46 === r3 && -1 !== s ? ++s : s = -1;
      }
      return n3;
    }
    var n2 = { resolve: function() {
      for (var t3, n3 = "", i = false, o = arguments.length - 1; o >= -1 && !i; o--) {
        var s;
        o >= 0 ? s = arguments[o] : (void 0 === t3 && (t3 = process.cwd()), s = t3), e2(s), 0 !== s.length && (n3 = s + "/" + n3, i = 47 === s.charCodeAt(0));
      }
      return n3 = r2(n3, !i), i ? n3.length > 0 ? "/" + n3 : "/" : n3.length > 0 ? n3 : ".";
    }, normalize: function(t3) {
      if (e2(t3), 0 === t3.length) return ".";
      var n3 = 47 === t3.charCodeAt(0), i = 47 === t3.charCodeAt(t3.length - 1);
      return 0 !== (t3 = r2(t3, !n3)).length || n3 || (t3 = "."), t3.length > 0 && i && (t3 += "/"), n3 ? "/" + t3 : t3;
    }, isAbsolute: function(t3) {
      return e2(t3), t3.length > 0 && 47 === t3.charCodeAt(0);
    }, join: function() {
      if (0 === arguments.length) return ".";
      for (var t3, r3 = 0; r3 < arguments.length; ++r3) {
        var i = arguments[r3];
        e2(i), i.length > 0 && (void 0 === t3 ? t3 = i : t3 += "/" + i);
      }
      return void 0 === t3 ? "." : n2.normalize(t3);
    }, relative: function(t3, r3) {
      if (e2(t3), e2(r3), t3 === r3) return "";
      if ((t3 = n2.resolve(t3)) === (r3 = n2.resolve(r3))) return "";
      for (var i = 1; i < t3.length && 47 === t3.charCodeAt(i); ++i) ;
      for (var o = t3.length, s = o - i, h = 1; h < r3.length && 47 === r3.charCodeAt(h); ++h) ;
      for (var a = r3.length - h, c = s < a ? s : a, f = -1, u = 0; u <= c; ++u) {
        if (u === c) {
          if (a > c) {
            if (47 === r3.charCodeAt(h + u)) return r3.slice(h + u + 1);
            if (0 === u) return r3.slice(h + u);
          } else s > c && (47 === t3.charCodeAt(i + u) ? f = u : 0 === u && (f = 0));
          break;
        }
        var l = t3.charCodeAt(i + u);
        if (l !== r3.charCodeAt(h + u)) break;
        47 === l && (f = u);
      }
      var g = "";
      for (u = i + f + 1; u <= o; ++u) u !== o && 47 !== t3.charCodeAt(u) || (0 === g.length ? g += ".." : g += "/..");
      return g.length > 0 ? g + r3.slice(h + f) : (h += f, 47 === r3.charCodeAt(h) && ++h, r3.slice(h));
    }, _makeLong: function(t3) {
      return t3;
    }, dirname: function(t3) {
      if (e2(t3), 0 === t3.length) return ".";
      for (var r3 = t3.charCodeAt(0), n3 = 47 === r3, i = -1, o = true, s = t3.length - 1; s >= 1; --s) if (47 === (r3 = t3.charCodeAt(s))) {
        if (!o) {
          i = s;
          break;
        }
      } else o = false;
      return -1 === i ? n3 ? "/" : "." : n3 && 1 === i ? "//" : t3.slice(0, i);
    }, basename: function(t3, r3) {
      if (void 0 !== r3 && "string" != typeof r3) throw new TypeError('"ext" argument must be a string');
      e2(t3);
      var n3, i = 0, o = -1, s = true;
      if (void 0 !== r3 && r3.length > 0 && r3.length <= t3.length) {
        if (r3.length === t3.length && r3 === t3) return "";
        var h = r3.length - 1, a = -1;
        for (n3 = t3.length - 1; n3 >= 0; --n3) {
          var c = t3.charCodeAt(n3);
          if (47 === c) {
            if (!s) {
              i = n3 + 1;
              break;
            }
          } else -1 === a && (s = false, a = n3 + 1), h >= 0 && (c === r3.charCodeAt(h) ? -1 == --h && (o = n3) : (h = -1, o = a));
        }
        return i === o ? o = a : -1 === o && (o = t3.length), t3.slice(i, o);
      }
      for (n3 = t3.length - 1; n3 >= 0; --n3) if (47 === t3.charCodeAt(n3)) {
        if (!s) {
          i = n3 + 1;
          break;
        }
      } else -1 === o && (s = false, o = n3 + 1);
      return -1 === o ? "" : t3.slice(i, o);
    }, extname: function(t3) {
      e2(t3);
      for (var r3 = -1, n3 = 0, i = -1, o = true, s = 0, h = t3.length - 1; h >= 0; --h) {
        var a = t3.charCodeAt(h);
        if (47 !== a) -1 === i && (o = false, i = h + 1), 46 === a ? -1 === r3 ? r3 = h : 1 !== s && (s = 1) : -1 !== r3 && (s = -1);
        else if (!o) {
          n3 = h + 1;
          break;
        }
      }
      return -1 === r3 || -1 === i || 0 === s || 1 === s && r3 === i - 1 && r3 === n3 + 1 ? "" : t3.slice(r3, i);
    }, format: function(t3) {
      if (null === t3 || "object" != typeof t3) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t3);
      return (function(t4, e3) {
        var r3 = e3.dir || e3.root, n3 = e3.base || (e3.name || "") + (e3.ext || "");
        return r3 ? r3 === e3.root ? r3 + n3 : r3 + "/" + n3 : n3;
      })(0, t3);
    }, parse: function(t3) {
      e2(t3);
      var r3 = { root: "", dir: "", base: "", ext: "", name: "" };
      if (0 === t3.length) return r3;
      var n3, i = t3.charCodeAt(0), o = 47 === i;
      o ? (r3.root = "/", n3 = 1) : n3 = 0;
      for (var s = -1, h = 0, a = -1, c = true, f = t3.length - 1, u = 0; f >= n3; --f) if (47 !== (i = t3.charCodeAt(f))) -1 === a && (c = false, a = f + 1), 46 === i ? -1 === s ? s = f : 1 !== u && (u = 1) : -1 !== s && (u = -1);
      else if (!c) {
        h = f + 1;
        break;
      }
      return -1 === s || -1 === a || 0 === u || 1 === u && s === a - 1 && s === h + 1 ? -1 !== a && (r3.base = r3.name = 0 === h && o ? t3.slice(1, a) : t3.slice(h, a)) : (0 === h && o ? (r3.name = t3.slice(1, s), r3.base = t3.slice(1, a)) : (r3.name = t3.slice(h, s), r3.base = t3.slice(h, a)), r3.ext = t3.slice(s, a)), h > 0 ? r3.dir = t3.slice(0, h - 1) : o && (r3.dir = "/"), r3;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    n2.posix = n2, t2.exports = n2;
  } }, e = {};
  function r(n2) {
    var i = e[n2];
    if (void 0 !== i) return i.exports;
    var o = e[n2] = { exports: {} };
    return t[n2](o, o.exports, r), o.exports;
  }
  r.d = (t2, e2) => {
    for (var n2 in e2) r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
  }, r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  };
  var n = {};
  (() => {
    let t2;
    if (r.r(n), r.d(n, { URI: () => f, Utils: () => P }), "object" == typeof process) t2 = "win32" === process.platform;
    else if ("object" == typeof navigator) {
      let e3 = navigator.userAgent;
      t2 = e3.indexOf("Windows") >= 0;
    }
    const e2 = /^\w[\w\d+.-]*$/, i = /^\//, o = /^\/\//;
    function s(t3, r2) {
      if (!t3.scheme && r2) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t3.authority}", path: "${t3.path}", query: "${t3.query}", fragment: "${t3.fragment}"}`);
      if (t3.scheme && !e2.test(t3.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
      if (t3.path) {
        if (t3.authority) {
          if (!i.test(t3.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test(t3.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const h = "", a = "/", c = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class f {
      static isUri(t3) {
        return t3 instanceof f || !!t3 && "string" == typeof t3.authority && "string" == typeof t3.fragment && "string" == typeof t3.path && "string" == typeof t3.query && "string" == typeof t3.scheme && "string" == typeof t3.fsPath && "function" == typeof t3.with && "function" == typeof t3.toString;
      }
      scheme;
      authority;
      path;
      query;
      fragment;
      constructor(t3, e3, r2, n2, i2, o2 = false) {
        "object" == typeof t3 ? (this.scheme = t3.scheme || h, this.authority = t3.authority || h, this.path = t3.path || h, this.query = t3.query || h, this.fragment = t3.fragment || h) : (this.scheme = /* @__PURE__ */ (function(t4, e4) {
          return t4 || e4 ? t4 : "file";
        })(t3, o2), this.authority = e3 || h, this.path = (function(t4, e4) {
          switch (t4) {
            case "https":
            case "http":
            case "file":
              e4 ? e4[0] !== a && (e4 = a + e4) : e4 = a;
          }
          return e4;
        })(this.scheme, r2 || h), this.query = n2 || h, this.fragment = i2 || h, s(this, o2));
      }
      get fsPath() {
        return m(this, false);
      }
      with(t3) {
        if (!t3) return this;
        let { scheme: e3, authority: r2, path: n2, query: i2, fragment: o2 } = t3;
        return void 0 === e3 ? e3 = this.scheme : null === e3 && (e3 = h), void 0 === r2 ? r2 = this.authority : null === r2 && (r2 = h), void 0 === n2 ? n2 = this.path : null === n2 && (n2 = h), void 0 === i2 ? i2 = this.query : null === i2 && (i2 = h), void 0 === o2 ? o2 = this.fragment : null === o2 && (o2 = h), e3 === this.scheme && r2 === this.authority && n2 === this.path && i2 === this.query && o2 === this.fragment ? this : new l(e3, r2, n2, i2, o2);
      }
      static parse(t3, e3 = false) {
        const r2 = c.exec(t3);
        return r2 ? new l(r2[2] || h, C(r2[4] || h), C(r2[5] || h), C(r2[7] || h), C(r2[9] || h), e3) : new l(h, h, h, h, h);
      }
      static file(e3) {
        let r2 = h;
        if (t2 && (e3 = e3.replace(/\\/g, a)), e3[0] === a && e3[1] === a) {
          const t3 = e3.indexOf(a, 2);
          -1 === t3 ? (r2 = e3.substring(2), e3 = a) : (r2 = e3.substring(2, t3), e3 = e3.substring(t3) || a);
        }
        return new l("file", r2, e3, h, h);
      }
      static from(t3) {
        const e3 = new l(t3.scheme, t3.authority, t3.path, t3.query, t3.fragment);
        return s(e3, true), e3;
      }
      toString(t3 = false) {
        return y(this, t3);
      }
      toJSON() {
        return this;
      }
      static revive(t3) {
        if (t3) {
          if (t3 instanceof f) return t3;
          {
            const e3 = new l(t3);
            return e3._formatted = t3.external, e3._fsPath = t3._sep === u ? t3.fsPath : null, e3;
          }
        }
        return t3;
      }
    }
    const u = t2 ? 1 : void 0;
    class l extends f {
      _formatted = null;
      _fsPath = null;
      get fsPath() {
        return this._fsPath || (this._fsPath = m(this, false)), this._fsPath;
      }
      toString(t3 = false) {
        return t3 ? y(this, true) : (this._formatted || (this._formatted = y(this, false)), this._formatted);
      }
      toJSON() {
        const t3 = { $mid: 1 };
        return this._fsPath && (t3.fsPath = this._fsPath, t3._sep = u), this._formatted && (t3.external = this._formatted), this.path && (t3.path = this.path), this.scheme && (t3.scheme = this.scheme), this.authority && (t3.authority = this.authority), this.query && (t3.query = this.query), this.fragment && (t3.fragment = this.fragment), t3;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function d(t3, e3, r2) {
      let n2, i2 = -1;
      for (let o2 = 0; o2 < t3.length; o2++) {
        const s2 = t3.charCodeAt(o2);
        if (s2 >= 97 && s2 <= 122 || s2 >= 65 && s2 <= 90 || s2 >= 48 && s2 <= 57 || 45 === s2 || 46 === s2 || 95 === s2 || 126 === s2 || e3 && 47 === s2 || r2 && 91 === s2 || r2 && 93 === s2 || r2 && 58 === s2) -1 !== i2 && (n2 += encodeURIComponent(t3.substring(i2, o2)), i2 = -1), void 0 !== n2 && (n2 += t3.charAt(o2));
        else {
          void 0 === n2 && (n2 = t3.substr(0, o2));
          const e4 = g[s2];
          void 0 !== e4 ? (-1 !== i2 && (n2 += encodeURIComponent(t3.substring(i2, o2)), i2 = -1), n2 += e4) : -1 === i2 && (i2 = o2);
        }
      }
      return -1 !== i2 && (n2 += encodeURIComponent(t3.substring(i2))), void 0 !== n2 ? n2 : t3;
    }
    function p(t3) {
      let e3;
      for (let r2 = 0; r2 < t3.length; r2++) {
        const n2 = t3.charCodeAt(r2);
        35 === n2 || 63 === n2 ? (void 0 === e3 && (e3 = t3.substr(0, r2)), e3 += g[n2]) : void 0 !== e3 && (e3 += t3[r2]);
      }
      return void 0 !== e3 ? e3 : t3;
    }
    function m(e3, r2) {
      let n2;
      return n2 = e3.authority && e3.path.length > 1 && "file" === e3.scheme ? `//${e3.authority}${e3.path}` : 47 === e3.path.charCodeAt(0) && (e3.path.charCodeAt(1) >= 65 && e3.path.charCodeAt(1) <= 90 || e3.path.charCodeAt(1) >= 97 && e3.path.charCodeAt(1) <= 122) && 58 === e3.path.charCodeAt(2) ? r2 ? e3.path.substr(1) : e3.path[1].toLowerCase() + e3.path.substr(2) : e3.path, t2 && (n2 = n2.replace(/\//g, "\\")), n2;
    }
    function y(t3, e3) {
      const r2 = e3 ? p : d;
      let n2 = "", { scheme: i2, authority: o2, path: s2, query: h2, fragment: c2 } = t3;
      if (i2 && (n2 += i2, n2 += ":"), (o2 || "file" === i2) && (n2 += a, n2 += a), o2) {
        let t4 = o2.indexOf("@");
        if (-1 !== t4) {
          const e4 = o2.substr(0, t4);
          o2 = o2.substr(t4 + 1), t4 = e4.lastIndexOf(":"), -1 === t4 ? n2 += r2(e4, false, false) : (n2 += r2(e4.substr(0, t4), false, false), n2 += ":", n2 += r2(e4.substr(t4 + 1), false, true)), n2 += "@";
        }
        o2 = o2.toLowerCase(), t4 = o2.lastIndexOf(":"), -1 === t4 ? n2 += r2(o2, false, true) : (n2 += r2(o2.substr(0, t4), false, true), n2 += o2.substr(t4));
      }
      if (s2) {
        if (s2.length >= 3 && 47 === s2.charCodeAt(0) && 58 === s2.charCodeAt(2)) {
          const t4 = s2.charCodeAt(1);
          t4 >= 65 && t4 <= 90 && (s2 = `/${String.fromCharCode(t4 + 32)}:${s2.substr(3)}`);
        } else if (s2.length >= 2 && 58 === s2.charCodeAt(1)) {
          const t4 = s2.charCodeAt(0);
          t4 >= 65 && t4 <= 90 && (s2 = `${String.fromCharCode(t4 + 32)}:${s2.substr(2)}`);
        }
        n2 += r2(s2, true, false);
      }
      return h2 && (n2 += "?", n2 += r2(h2, false, false)), c2 && (n2 += "#", n2 += e3 ? c2 : d(c2, false, false)), n2;
    }
    function v(t3) {
      try {
        return decodeURIComponent(t3);
      } catch {
        return t3.length > 3 ? t3.substr(0, 3) + v(t3.substr(3)) : t3;
      }
    }
    const b = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function C(t3) {
      return t3.match(b) ? t3.replace(b, ((t4) => v(t4))) : t3;
    }
    var A = r(470);
    const w = A.posix || A, x = "/";
    var P;
    !(function(t3) {
      t3.joinPath = function(t4, ...e3) {
        return t4.with({ path: w.join(t4.path, ...e3) });
      }, t3.resolvePath = function(t4, ...e3) {
        let r2 = t4.path, n2 = false;
        r2[0] !== x && (r2 = x + r2, n2 = true);
        let i2 = w.resolve(r2, ...e3);
        return n2 && i2[0] === x && !t4.authority && (i2 = i2.substring(1)), t4.with({ path: i2 });
      }, t3.dirname = function(t4) {
        if (0 === t4.path.length || t4.path === x) return t4;
        let e3 = w.dirname(t4.path);
        return 1 === e3.length && 46 === e3.charCodeAt(0) && (e3 = ""), t4.with({ path: e3 });
      }, t3.basename = function(t4) {
        return w.basename(t4.path);
      }, t3.extname = function(t4) {
        return w.extname(t4.path);
      };
    })(P || (P = {}));
  })(), LIB = n;
})();
var { URI: URI2, Utils } = LIB;

// node_modules/langium/lib/utils/uri-utils.js
var UriUtils;
(function(UriUtils2) {
  UriUtils2.basename = Utils.basename;
  UriUtils2.dirname = Utils.dirname;
  UriUtils2.extname = Utils.extname;
  UriUtils2.joinPath = Utils.joinPath;
  UriUtils2.resolvePath = Utils.resolvePath;
  function equals(a, b) {
    return (a === null || a === void 0 ? void 0 : a.toString()) === (b === null || b === void 0 ? void 0 : b.toString());
  }
  UriUtils2.equals = equals;
  function relative(from, to) {
    const fromPath = typeof from === "string" ? from : from.path;
    const toPath = typeof to === "string" ? to : to.path;
    const fromParts = fromPath.split("/").filter((e) => e.length > 0);
    const toParts = toPath.split("/").filter((e) => e.length > 0);
    let i = 0;
    for (; i < fromParts.length; i++) {
      if (fromParts[i] !== toParts[i]) {
        break;
      }
    }
    const backPart = "../".repeat(fromParts.length - i);
    const toPart = toParts.slice(i).join("/");
    return backPart + toPart;
  }
  UriUtils2.relative = relative;
  function normalize(uri) {
    return URI2.parse(uri.toString()).toString();
  }
  UriUtils2.normalize = normalize;
})(UriUtils || (UriUtils = {}));

// node_modules/langium/lib/workspace/documents.js
var DocumentState;
(function(DocumentState2) {
  DocumentState2[DocumentState2["Changed"] = 0] = "Changed";
  DocumentState2[DocumentState2["Parsed"] = 1] = "Parsed";
  DocumentState2[DocumentState2["IndexedContent"] = 2] = "IndexedContent";
  DocumentState2[DocumentState2["ComputedScopes"] = 3] = "ComputedScopes";
  DocumentState2[DocumentState2["Linked"] = 4] = "Linked";
  DocumentState2[DocumentState2["IndexedReferences"] = 5] = "IndexedReferences";
  DocumentState2[DocumentState2["Validated"] = 6] = "Validated";
})(DocumentState || (DocumentState = {}));
var DefaultLangiumDocumentFactory = class {
  constructor(services) {
    this.serviceRegistry = services.ServiceRegistry;
    this.textDocuments = services.workspace.TextDocuments;
    this.fileSystemProvider = services.workspace.FileSystemProvider;
  }
  async fromUri(uri, cancellationToken = cancellation_exports.CancellationToken.None) {
    const content = await this.fileSystemProvider.readFile(uri);
    return this.createAsync(uri, content, cancellationToken);
  }
  fromTextDocument(textDocument, uri, token) {
    uri = uri !== null && uri !== void 0 ? uri : URI2.parse(textDocument.uri);
    if (cancellation_exports.CancellationToken.is(token)) {
      return this.createAsync(uri, textDocument, token);
    } else {
      return this.create(uri, textDocument, token);
    }
  }
  fromString(text, uri, token) {
    if (cancellation_exports.CancellationToken.is(token)) {
      return this.createAsync(uri, text, token);
    } else {
      return this.create(uri, text, token);
    }
  }
  fromModel(model, uri) {
    return this.create(uri, { $model: model });
  }
  create(uri, content, options) {
    if (typeof content === "string") {
      const parseResult = this.parse(uri, content, options);
      return this.createLangiumDocument(parseResult, uri, void 0, content);
    } else if ("$model" in content) {
      const parseResult = { value: content.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(parseResult, uri);
    } else {
      const parseResult = this.parse(uri, content.getText(), options);
      return this.createLangiumDocument(parseResult, uri, content);
    }
  }
  async createAsync(uri, content, cancelToken) {
    if (typeof content === "string") {
      const parseResult = await this.parseAsync(uri, content, cancelToken);
      return this.createLangiumDocument(parseResult, uri, void 0, content);
    } else {
      const parseResult = await this.parseAsync(uri, content.getText(), cancelToken);
      return this.createLangiumDocument(parseResult, uri, content);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(parseResult, uri, textDocument, text) {
    let document;
    if (textDocument) {
      document = {
        parseResult,
        uri,
        state: DocumentState.Parsed,
        references: [],
        textDocument
      };
    } else {
      const textDocumentGetter = this.createTextDocumentGetter(uri, text);
      document = {
        parseResult,
        uri,
        state: DocumentState.Parsed,
        references: [],
        get textDocument() {
          return textDocumentGetter();
        }
      };
    }
    parseResult.value.$document = document;
    return document;
  }
  async update(document, cancellationToken) {
    var _a6, _b;
    const oldText = (_a6 = document.parseResult.value.$cstNode) === null || _a6 === void 0 ? void 0 : _a6.root.fullText;
    const textDocument = (_b = this.textDocuments) === null || _b === void 0 ? void 0 : _b.get(document.uri.toString());
    const text = textDocument ? textDocument.getText() : await this.fileSystemProvider.readFile(document.uri);
    if (textDocument) {
      Object.defineProperty(document, "textDocument", {
        value: textDocument
      });
    } else {
      const textDocumentGetter = this.createTextDocumentGetter(document.uri, text);
      Object.defineProperty(document, "textDocument", {
        get: textDocumentGetter
      });
    }
    if (oldText !== text) {
      document.parseResult = await this.parseAsync(document.uri, text, cancellationToken);
      document.parseResult.value.$document = document;
    }
    document.state = DocumentState.Parsed;
    return document;
  }
  parse(uri, text, options) {
    const services = this.serviceRegistry.getServices(uri);
    return services.parser.LangiumParser.parse(text, options);
  }
  parseAsync(uri, text, cancellationToken) {
    const services = this.serviceRegistry.getServices(uri);
    return services.parser.AsyncParser.parse(text, cancellationToken);
  }
  createTextDocumentGetter(uri, text) {
    const serviceRegistry = this.serviceRegistry;
    let textDoc = void 0;
    return () => {
      return textDoc !== null && textDoc !== void 0 ? textDoc : textDoc = TextDocument2.create(uri.toString(), serviceRegistry.getServices(uri).LanguageMetaData.languageId, 0, text !== null && text !== void 0 ? text : "");
    };
  }
};
var DefaultLangiumDocuments = class {
  constructor(services) {
    this.documentMap = /* @__PURE__ */ new Map();
    this.langiumDocumentFactory = services.workspace.LangiumDocumentFactory;
    this.serviceRegistry = services.ServiceRegistry;
  }
  get all() {
    return stream(this.documentMap.values());
  }
  addDocument(document) {
    const uriString = document.uri.toString();
    if (this.documentMap.has(uriString)) {
      throw new Error(`A document with the URI '${uriString}' is already present.`);
    }
    this.documentMap.set(uriString, document);
  }
  getDocument(uri) {
    const uriString = uri.toString();
    return this.documentMap.get(uriString);
  }
  async getOrCreateDocument(uri, cancellationToken) {
    let document = this.getDocument(uri);
    if (document) {
      return document;
    }
    document = await this.langiumDocumentFactory.fromUri(uri, cancellationToken);
    this.addDocument(document);
    return document;
  }
  createDocument(uri, text, cancellationToken) {
    if (cancellationToken) {
      return this.langiumDocumentFactory.fromString(text, uri, cancellationToken).then((document) => {
        this.addDocument(document);
        return document;
      });
    } else {
      const document = this.langiumDocumentFactory.fromString(text, uri);
      this.addDocument(document);
      return document;
    }
  }
  hasDocument(uri) {
    return this.documentMap.has(uri.toString());
  }
  invalidateDocument(uri) {
    const uriString = uri.toString();
    const langiumDoc = this.documentMap.get(uriString);
    if (langiumDoc) {
      const linker = this.serviceRegistry.getServices(uri).references.Linker;
      linker.unlink(langiumDoc);
      langiumDoc.state = DocumentState.Changed;
      langiumDoc.precomputedScopes = void 0;
      langiumDoc.diagnostics = void 0;
    }
    return langiumDoc;
  }
  deleteDocument(uri) {
    const uriString = uri.toString();
    const langiumDoc = this.documentMap.get(uriString);
    if (langiumDoc) {
      langiumDoc.state = DocumentState.Changed;
      this.documentMap.delete(uriString);
    }
    return langiumDoc;
  }
};

// node_modules/langium/lib/references/linker.js
var ref_resolving = Symbol("ref_resolving");
var DefaultLinker = class {
  constructor(services) {
    this.reflection = services.shared.AstReflection;
    this.langiumDocuments = () => services.shared.workspace.LangiumDocuments;
    this.scopeProvider = services.references.ScopeProvider;
    this.astNodeLocator = services.workspace.AstNodeLocator;
  }
  async link(document, cancelToken = cancellation_exports.CancellationToken.None) {
    for (const node of streamAst(document.parseResult.value)) {
      await interruptAndCheck(cancelToken);
      streamReferences(node).forEach((ref) => this.doLink(ref, document));
    }
  }
  doLink(refInfo, document) {
    var _a6;
    const ref = refInfo.reference;
    if (ref._ref === void 0) {
      ref._ref = ref_resolving;
      try {
        const description = this.getCandidate(refInfo);
        if (isLinkingError(description)) {
          ref._ref = description;
        } else {
          ref._nodeDescription = description;
          if (this.langiumDocuments().hasDocument(description.documentUri)) {
            const linkedNode = this.loadAstNode(description);
            ref._ref = linkedNode !== null && linkedNode !== void 0 ? linkedNode : this.createLinkingError(refInfo, description);
          } else {
            ref._ref = void 0;
          }
        }
      } catch (err) {
        console.error(`An error occurred while resolving reference to '${ref.$refText}':`, err);
        const errorMessage = (_a6 = err.message) !== null && _a6 !== void 0 ? _a6 : String(err);
        ref._ref = Object.assign(Object.assign({}, refInfo), { message: `An error occurred while resolving reference to '${ref.$refText}': ${errorMessage}` });
      }
      document.references.push(ref);
    }
  }
  unlink(document) {
    for (const ref of document.references) {
      delete ref._ref;
      delete ref._nodeDescription;
    }
    document.references = [];
  }
  getCandidate(refInfo) {
    const scope = this.scopeProvider.getScope(refInfo);
    const description = scope.getElement(refInfo.reference.$refText);
    return description !== null && description !== void 0 ? description : this.createLinkingError(refInfo);
  }
  buildReference(node, property, refNode, refText) {
    const linker = this;
    const reference = {
      $refNode: refNode,
      $refText: refText,
      get ref() {
        var _a6;
        if (isAstNode(this._ref)) {
          return this._ref;
        } else if (isAstNodeDescription(this._nodeDescription)) {
          const linkedNode = linker.loadAstNode(this._nodeDescription);
          this._ref = linkedNode !== null && linkedNode !== void 0 ? linkedNode : linker.createLinkingError({ reference, container: node, property }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = ref_resolving;
          const document = findRootNode(node).$document;
          const refData = linker.getLinkedNode({ reference, container: node, property });
          if (refData.error && document && document.state < DocumentState.ComputedScopes) {
            return this._ref = void 0;
          }
          this._ref = (_a6 = refData.node) !== null && _a6 !== void 0 ? _a6 : refData.error;
          this._nodeDescription = refData.descr;
          document === null || document === void 0 ? void 0 : document.references.push(this);
        } else if (this._ref === ref_resolving) {
          throw new Error(`Cyclic reference resolution detected: ${linker.astNodeLocator.getAstNodePath(node)}/${property} (symbol '${refText}')`);
        }
        return isAstNode(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return isLinkingError(this._ref) ? this._ref : void 0;
      }
    };
    return reference;
  }
  getLinkedNode(refInfo) {
    var _a6;
    try {
      const description = this.getCandidate(refInfo);
      if (isLinkingError(description)) {
        return { error: description };
      }
      const linkedNode = this.loadAstNode(description);
      if (linkedNode) {
        return { node: linkedNode, descr: description };
      } else {
        return {
          descr: description,
          error: this.createLinkingError(refInfo, description)
        };
      }
    } catch (err) {
      console.error(`An error occurred while resolving reference to '${refInfo.reference.$refText}':`, err);
      const errorMessage = (_a6 = err.message) !== null && _a6 !== void 0 ? _a6 : String(err);
      return {
        error: Object.assign(Object.assign({}, refInfo), { message: `An error occurred while resolving reference to '${refInfo.reference.$refText}': ${errorMessage}` })
      };
    }
  }
  loadAstNode(nodeDescription) {
    if (nodeDescription.node) {
      return nodeDescription.node;
    }
    const doc = this.langiumDocuments().getDocument(nodeDescription.documentUri);
    if (!doc) {
      return void 0;
    }
    return this.astNodeLocator.getAstNode(doc.parseResult.value, nodeDescription.path);
  }
  createLinkingError(refInfo, targetDescription) {
    const document = findRootNode(refInfo.container).$document;
    if (document && document.state < DocumentState.ComputedScopes) {
      console.warn(`Attempted reference resolution before document reached ComputedScopes state (${document.uri}).`);
    }
    const referenceType = this.reflection.getReferenceType(refInfo);
    return Object.assign(Object.assign({}, refInfo), { message: `Could not resolve reference to ${referenceType} named '${refInfo.reference.$refText}'.`, targetDescription });
  }
};

// node_modules/langium/lib/references/name-provider.js
function isNamed(node) {
  return typeof node.name === "string";
}
var DefaultNameProvider = class {
  getName(node) {
    if (isNamed(node)) {
      return node.name;
    }
    return void 0;
  }
  getNameNode(node) {
    return findNodeForProperty(node.$cstNode, "name");
  }
};

// node_modules/langium/lib/references/references.js
var DefaultReferences = class {
  constructor(services) {
    this.nameProvider = services.references.NameProvider;
    this.index = services.shared.workspace.IndexManager;
    this.nodeLocator = services.workspace.AstNodeLocator;
  }
  findDeclaration(sourceCstNode) {
    if (sourceCstNode) {
      const assignment = findAssignment(sourceCstNode);
      const nodeElem = sourceCstNode.astNode;
      if (assignment && nodeElem) {
        const reference = nodeElem[assignment.feature];
        if (isReference(reference)) {
          return reference.ref;
        } else if (Array.isArray(reference)) {
          for (const ref of reference) {
            if (isReference(ref) && ref.$refNode && ref.$refNode.offset <= sourceCstNode.offset && ref.$refNode.end >= sourceCstNode.end) {
              return ref.ref;
            }
          }
        }
      }
      if (nodeElem) {
        const nameNode = this.nameProvider.getNameNode(nodeElem);
        if (nameNode && (nameNode === sourceCstNode || isChildNode(sourceCstNode, nameNode))) {
          return nodeElem;
        }
      }
    }
    return void 0;
  }
  findDeclarationNode(sourceCstNode) {
    const astNode = this.findDeclaration(sourceCstNode);
    if (astNode === null || astNode === void 0 ? void 0 : astNode.$cstNode) {
      const targetNode = this.nameProvider.getNameNode(astNode);
      return targetNode !== null && targetNode !== void 0 ? targetNode : astNode.$cstNode;
    }
    return void 0;
  }
  findReferences(targetNode, options) {
    const refs = [];
    if (options.includeDeclaration) {
      const ref = this.getReferenceToSelf(targetNode);
      if (ref) {
        refs.push(ref);
      }
    }
    let indexReferences = this.index.findAllReferences(targetNode, this.nodeLocator.getAstNodePath(targetNode));
    if (options.documentUri) {
      indexReferences = indexReferences.filter((ref) => UriUtils.equals(ref.sourceUri, options.documentUri));
    }
    refs.push(...indexReferences);
    return stream(refs);
  }
  getReferenceToSelf(targetNode) {
    const nameNode = this.nameProvider.getNameNode(targetNode);
    if (nameNode) {
      const doc = getDocument(targetNode);
      const path = this.nodeLocator.getAstNodePath(targetNode);
      return {
        sourceUri: doc.uri,
        sourcePath: path,
        targetUri: doc.uri,
        targetPath: path,
        segment: toDocumentSegment(nameNode),
        local: true
      };
    }
    return void 0;
  }
};

// node_modules/langium/lib/utils/collections.js
var MultiMap = class {
  constructor(elements) {
    this.map = /* @__PURE__ */ new Map();
    if (elements) {
      for (const [key, value] of elements) {
        this.add(key, value);
      }
    }
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return Reduction.sum(stream(this.map.values()).map((a) => a.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(key, value) {
    if (value === void 0) {
      return this.map.delete(key);
    } else {
      const values = this.map.get(key);
      if (values) {
        const index = values.indexOf(value);
        if (index >= 0) {
          if (values.length === 1) {
            this.map.delete(key);
          } else {
            values.splice(index, 1);
          }
          return true;
        }
      }
      return false;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(key) {
    var _a6;
    return (_a6 = this.map.get(key)) !== null && _a6 !== void 0 ? _a6 : [];
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(key, value) {
    if (value === void 0) {
      return this.map.has(key);
    } else {
      const values = this.map.get(key);
      if (values) {
        return values.indexOf(value) >= 0;
      }
      return false;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(key, value) {
    if (this.map.has(key)) {
      this.map.get(key).push(value);
    } else {
      this.map.set(key, [value]);
    }
    return this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(key, values) {
    if (this.map.has(key)) {
      this.map.get(key).push(...values);
    } else {
      this.map.set(key, Array.from(values));
    }
    return this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(callbackfn) {
    this.map.forEach((array, key) => array.forEach((value) => callbackfn(value, key, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return stream(this.map.entries()).flatMap(([key, array]) => array.map((value) => [key, value]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return stream(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return stream(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return stream(this.map.entries());
  }
};
var BiMap = class {
  get size() {
    return this.map.size;
  }
  constructor(elements) {
    this.map = /* @__PURE__ */ new Map();
    this.inverse = /* @__PURE__ */ new Map();
    if (elements) {
      for (const [key, value] of elements) {
        this.set(key, value);
      }
    }
  }
  clear() {
    this.map.clear();
    this.inverse.clear();
  }
  set(key, value) {
    this.map.set(key, value);
    this.inverse.set(value, key);
    return this;
  }
  get(key) {
    return this.map.get(key);
  }
  getKey(value) {
    return this.inverse.get(value);
  }
  delete(key) {
    const value = this.map.get(key);
    if (value !== void 0) {
      this.map.delete(key);
      this.inverse.delete(value);
      return true;
    }
    return false;
  }
};

// node_modules/langium/lib/references/scope-computation.js
var DefaultScopeComputation = class {
  constructor(services) {
    this.nameProvider = services.references.NameProvider;
    this.descriptions = services.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(document, cancelToken = cancellation_exports.CancellationToken.None) {
    return this.computeExportsForNode(document.parseResult.value, document, void 0, cancelToken);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async computeExportsForNode(parentNode, document, children = streamContents, cancelToken = cancellation_exports.CancellationToken.None) {
    const exports = [];
    this.exportNode(parentNode, exports, document);
    for (const node of children(parentNode)) {
      await interruptAndCheck(cancelToken);
      this.exportNode(node, exports, document);
    }
    return exports;
  }
  /**
   * Add a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  exportNode(node, exports, document) {
    const name = this.nameProvider.getName(node);
    if (name) {
      exports.push(this.descriptions.createDescription(node, name, document));
    }
  }
  async computeLocalScopes(document, cancelToken = cancellation_exports.CancellationToken.None) {
    const rootNode = document.parseResult.value;
    const scopes = new MultiMap();
    for (const node of streamAllContents(rootNode)) {
      await interruptAndCheck(cancelToken);
      this.processNode(node, document, scopes);
    }
    return scopes;
  }
  /**
   * Process a single node during scopes computation. The default implementation makes the node visible
   * in the subtree of its container (if the node has a name). Override this method to change this,
   * e.g. by increasing the visibility to a higher level in the AST.
   */
  processNode(node, document, scopes) {
    const container = node.$container;
    if (container) {
      const name = this.nameProvider.getName(node);
      if (name) {
        scopes.add(container, this.descriptions.createDescription(node, name, document));
      }
    }
  }
};

// node_modules/langium/lib/references/scope.js
var StreamScope = class {
  constructor(elements, outerScope, options) {
    var _a6;
    this.elements = elements;
    this.outerScope = outerScope;
    this.caseInsensitive = (_a6 = options === null || options === void 0 ? void 0 : options.caseInsensitive) !== null && _a6 !== void 0 ? _a6 : false;
  }
  getAllElements() {
    if (this.outerScope) {
      return this.elements.concat(this.outerScope.getAllElements());
    } else {
      return this.elements;
    }
  }
  getElement(name) {
    const local = this.caseInsensitive ? this.elements.find((e) => e.name.toLowerCase() === name.toLowerCase()) : this.elements.find((e) => e.name === name);
    if (local) {
      return local;
    }
    if (this.outerScope) {
      return this.outerScope.getElement(name);
    }
    return void 0;
  }
};
var MapScope = class {
  constructor(elements, outerScope, options) {
    var _a6;
    this.elements = /* @__PURE__ */ new Map();
    this.caseInsensitive = (_a6 = options === null || options === void 0 ? void 0 : options.caseInsensitive) !== null && _a6 !== void 0 ? _a6 : false;
    for (const element of elements) {
      const name = this.caseInsensitive ? element.name.toLowerCase() : element.name;
      this.elements.set(name, element);
    }
    this.outerScope = outerScope;
  }
  getElement(name) {
    const localName = this.caseInsensitive ? name.toLowerCase() : name;
    const local = this.elements.get(localName);
    if (local) {
      return local;
    }
    if (this.outerScope) {
      return this.outerScope.getElement(name);
    }
    return void 0;
  }
  getAllElements() {
    let elementStream = stream(this.elements.values());
    if (this.outerScope) {
      elementStream = elementStream.concat(this.outerScope.getAllElements());
    }
    return elementStream;
  }
};
var EMPTY_SCOPE = {
  getElement() {
    return void 0;
  },
  getAllElements() {
    return EMPTY_STREAM;
  }
};

// node_modules/langium/lib/utils/caching.js
var DisposableCache = class {
  constructor() {
    this.toDispose = [];
    this.isDisposed = false;
  }
  onDispose(disposable) {
    this.toDispose.push(disposable);
  }
  dispose() {
    this.throwIfDisposed();
    this.clear();
    this.isDisposed = true;
    this.toDispose.forEach((disposable) => disposable.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed) {
      throw new Error("This cache has already been disposed");
    }
  }
};
var SimpleCache = class extends DisposableCache {
  constructor() {
    super(...arguments);
    this.cache = /* @__PURE__ */ new Map();
  }
  has(key) {
    this.throwIfDisposed();
    return this.cache.has(key);
  }
  set(key, value) {
    this.throwIfDisposed();
    this.cache.set(key, value);
  }
  get(key, provider) {
    this.throwIfDisposed();
    if (this.cache.has(key)) {
      return this.cache.get(key);
    } else if (provider) {
      const value = provider();
      this.cache.set(key, value);
      return value;
    } else {
      return void 0;
    }
  }
  delete(key) {
    this.throwIfDisposed();
    return this.cache.delete(key);
  }
  clear() {
    this.throwIfDisposed();
    this.cache.clear();
  }
};
var ContextCache = class extends DisposableCache {
  constructor(converter) {
    super();
    this.cache = /* @__PURE__ */ new Map();
    this.converter = converter !== null && converter !== void 0 ? converter : ((value) => value);
  }
  has(contextKey, key) {
    this.throwIfDisposed();
    return this.cacheForContext(contextKey).has(key);
  }
  set(contextKey, key, value) {
    this.throwIfDisposed();
    this.cacheForContext(contextKey).set(key, value);
  }
  get(contextKey, key, provider) {
    this.throwIfDisposed();
    const contextCache = this.cacheForContext(contextKey);
    if (contextCache.has(key)) {
      return contextCache.get(key);
    } else if (provider) {
      const value = provider();
      contextCache.set(key, value);
      return value;
    } else {
      return void 0;
    }
  }
  delete(contextKey, key) {
    this.throwIfDisposed();
    return this.cacheForContext(contextKey).delete(key);
  }
  clear(contextKey) {
    this.throwIfDisposed();
    if (contextKey) {
      const mapKey = this.converter(contextKey);
      this.cache.delete(mapKey);
    } else {
      this.cache.clear();
    }
  }
  cacheForContext(contextKey) {
    const mapKey = this.converter(contextKey);
    let documentCache = this.cache.get(mapKey);
    if (!documentCache) {
      documentCache = /* @__PURE__ */ new Map();
      this.cache.set(mapKey, documentCache);
    }
    return documentCache;
  }
};
var DocumentCache = class extends ContextCache {
  /**
   * Creates a new document cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   *
   * Providing a state here will use `DocumentBuilder#onDocumentPhase` instead,
   * which triggers on all documents that have been affected by this change, assuming that the
   * state is `DocumentState.Linked` or a later state.
   */
  constructor(sharedServices, state) {
    super((uri) => uri.toString());
    if (state) {
      this.toDispose.push(sharedServices.workspace.DocumentBuilder.onDocumentPhase(state, (document) => {
        this.clear(document.uri.toString());
      }));
      this.toDispose.push(sharedServices.workspace.DocumentBuilder.onUpdate((_changed, deleted) => {
        for (const uri of deleted) {
          this.clear(uri);
        }
      }));
    } else {
      this.toDispose.push(sharedServices.workspace.DocumentBuilder.onUpdate((changed, deleted) => {
        const allUris = changed.concat(deleted);
        for (const uri of allUris) {
          this.clear(uri);
        }
      }));
    }
  }
};
var WorkspaceCache = class extends SimpleCache {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(sharedServices, state) {
    super();
    if (state) {
      this.toDispose.push(sharedServices.workspace.DocumentBuilder.onBuildPhase(state, () => {
        this.clear();
      }));
      this.toDispose.push(sharedServices.workspace.DocumentBuilder.onUpdate((_changed, deleted) => {
        if (deleted.length > 0) {
          this.clear();
        }
      }));
    } else {
      this.toDispose.push(sharedServices.workspace.DocumentBuilder.onUpdate(() => {
        this.clear();
      }));
    }
  }
};

// node_modules/langium/lib/references/scope-provider.js
var DefaultScopeProvider = class {
  constructor(services) {
    this.reflection = services.shared.AstReflection;
    this.nameProvider = services.references.NameProvider;
    this.descriptions = services.workspace.AstNodeDescriptionProvider;
    this.indexManager = services.shared.workspace.IndexManager;
    this.globalScopeCache = new WorkspaceCache(services.shared);
  }
  getScope(context) {
    const scopes = [];
    const referenceType = this.reflection.getReferenceType(context);
    const precomputed = getDocument(context.container).precomputedScopes;
    if (precomputed) {
      let currentNode = context.container;
      do {
        const allDescriptions = precomputed.get(currentNode);
        if (allDescriptions.length > 0) {
          scopes.push(stream(allDescriptions).filter((desc) => this.reflection.isSubtype(desc.type, referenceType)));
        }
        currentNode = currentNode.$container;
      } while (currentNode);
    }
    let result = this.getGlobalScope(referenceType, context);
    for (let i = scopes.length - 1; i >= 0; i--) {
      result = this.createScope(scopes[i], result);
    }
    return result;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(elements, outerScope, options) {
    return new StreamScope(stream(elements), outerScope, options);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(elements, outerScope, options) {
    const s = stream(elements).map((e) => {
      const name = this.nameProvider.getName(e);
      if (name) {
        return this.descriptions.createDescription(e, name);
      }
      return void 0;
    }).nonNullable();
    return new StreamScope(s, outerScope, options);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(referenceType, _context) {
    return this.globalScopeCache.get(referenceType, () => new MapScope(this.indexManager.allElements(referenceType)));
  }
};

// node_modules/langium/lib/serializer/json-serializer.js
function isAstNodeWithComment(node) {
  return typeof node.$comment === "string";
}
function isIntermediateReference(obj) {
  return typeof obj === "object" && !!obj && ("$ref" in obj || "$error" in obj);
}
var DefaultJsonSerializer = class {
  constructor(services) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]);
    this.langiumDocuments = services.shared.workspace.LangiumDocuments;
    this.astNodeLocator = services.workspace.AstNodeLocator;
    this.nameProvider = services.references.NameProvider;
    this.commentProvider = services.documentation.CommentProvider;
  }
  serialize(node, options) {
    const serializeOptions = options !== null && options !== void 0 ? options : {};
    const specificReplacer = options === null || options === void 0 ? void 0 : options.replacer;
    const defaultReplacer = (key, value) => this.replacer(key, value, serializeOptions);
    const replacer = specificReplacer ? (key, value) => specificReplacer(key, value, defaultReplacer) : defaultReplacer;
    try {
      this.currentDocument = getDocument(node);
      return JSON.stringify(node, replacer, options === null || options === void 0 ? void 0 : options.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(content, options) {
    const deserializeOptions = options !== null && options !== void 0 ? options : {};
    const root = JSON.parse(content);
    this.linkNode(root, root, deserializeOptions);
    return root;
  }
  replacer(key, value, { refText, sourceText, textRegions, comments, uriConverter }) {
    var _a6, _b, _c, _d;
    if (this.ignoreProperties.has(key)) {
      return void 0;
    } else if (isReference(value)) {
      const refValue = value.ref;
      const $refText = refText ? value.$refText : void 0;
      if (refValue) {
        const targetDocument = getDocument(refValue);
        let targetUri = "";
        if (this.currentDocument && this.currentDocument !== targetDocument) {
          if (uriConverter) {
            targetUri = uriConverter(targetDocument.uri, value);
          } else {
            targetUri = targetDocument.uri.toString();
          }
        }
        const targetPath = this.astNodeLocator.getAstNodePath(refValue);
        return {
          $ref: `${targetUri}#${targetPath}`,
          $refText
        };
      } else {
        return {
          $error: (_b = (_a6 = value.error) === null || _a6 === void 0 ? void 0 : _a6.message) !== null && _b !== void 0 ? _b : "Could not resolve reference",
          $refText
        };
      }
    } else if (isAstNode(value)) {
      let astNode = void 0;
      if (textRegions) {
        astNode = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, value));
        if ((!key || value.$document) && (astNode === null || astNode === void 0 ? void 0 : astNode.$textRegion)) {
          astNode.$textRegion.documentURI = (_c = this.currentDocument) === null || _c === void 0 ? void 0 : _c.uri.toString();
        }
      }
      if (sourceText && !key) {
        astNode !== null && astNode !== void 0 ? astNode : astNode = Object.assign({}, value);
        astNode.$sourceText = (_d = value.$cstNode) === null || _d === void 0 ? void 0 : _d.text;
      }
      if (comments) {
        astNode !== null && astNode !== void 0 ? astNode : astNode = Object.assign({}, value);
        const comment = this.commentProvider.getComment(value);
        if (comment) {
          astNode.$comment = comment.replace(/\r/g, "");
        }
      }
      return astNode !== null && astNode !== void 0 ? astNode : value;
    } else {
      return value;
    }
  }
  addAstNodeRegionWithAssignmentsTo(node) {
    const createDocumentSegment = (cstNode) => ({
      offset: cstNode.offset,
      end: cstNode.end,
      length: cstNode.length,
      range: cstNode.range
    });
    if (node.$cstNode) {
      const textRegion = node.$textRegion = createDocumentSegment(node.$cstNode);
      const assignments = textRegion.assignments = {};
      Object.keys(node).filter((key) => !key.startsWith("$")).forEach((key) => {
        const propertyAssignments = findNodesForProperty(node.$cstNode, key).map(createDocumentSegment);
        if (propertyAssignments.length !== 0) {
          assignments[key] = propertyAssignments;
        }
      });
      return node;
    }
    return void 0;
  }
  linkNode(node, root, options, container, containerProperty, containerIndex) {
    for (const [propertyName, item] of Object.entries(node)) {
      if (Array.isArray(item)) {
        for (let index = 0; index < item.length; index++) {
          const element = item[index];
          if (isIntermediateReference(element)) {
            item[index] = this.reviveReference(node, propertyName, root, element, options);
          } else if (isAstNode(element)) {
            this.linkNode(element, root, options, node, propertyName, index);
          }
        }
      } else if (isIntermediateReference(item)) {
        node[propertyName] = this.reviveReference(node, propertyName, root, item, options);
      } else if (isAstNode(item)) {
        this.linkNode(item, root, options, node, propertyName);
      }
    }
    const mutable = node;
    mutable.$container = container;
    mutable.$containerProperty = containerProperty;
    mutable.$containerIndex = containerIndex;
  }
  reviveReference(container, property, root, reference, options) {
    let refText = reference.$refText;
    let error = reference.$error;
    if (reference.$ref) {
      const ref = this.getRefNode(root, reference.$ref, options.uriConverter);
      if (isAstNode(ref)) {
        if (!refText) {
          refText = this.nameProvider.getName(ref);
        }
        return {
          $refText: refText !== null && refText !== void 0 ? refText : "",
          ref
        };
      } else {
        error = ref;
      }
    }
    if (error) {
      const ref = {
        $refText: refText !== null && refText !== void 0 ? refText : ""
      };
      ref.error = {
        container,
        property,
        message: error,
        reference: ref
      };
      return ref;
    } else {
      return void 0;
    }
  }
  getRefNode(root, uri, uriConverter) {
    try {
      const fragmentIndex = uri.indexOf("#");
      if (fragmentIndex === 0) {
        const node2 = this.astNodeLocator.getAstNode(root, uri.substring(1));
        if (!node2) {
          return "Could not resolve path: " + uri;
        }
        return node2;
      }
      if (fragmentIndex < 0) {
        const documentUri2 = uriConverter ? uriConverter(uri) : URI2.parse(uri);
        const document2 = this.langiumDocuments.getDocument(documentUri2);
        if (!document2) {
          return "Could not find document for URI: " + uri;
        }
        return document2.parseResult.value;
      }
      const documentUri = uriConverter ? uriConverter(uri.substring(0, fragmentIndex)) : URI2.parse(uri.substring(0, fragmentIndex));
      const document = this.langiumDocuments.getDocument(documentUri);
      if (!document) {
        return "Could not find document for URI: " + uri;
      }
      if (fragmentIndex === uri.length - 1) {
        return document.parseResult.value;
      }
      const node = this.astNodeLocator.getAstNode(document.parseResult.value, uri.substring(fragmentIndex + 1));
      if (!node) {
        return "Could not resolve URI: " + uri;
      }
      return node;
    } catch (err) {
      return String(err);
    }
  }
};

// node_modules/langium/lib/service-registry.js
var DefaultServiceRegistry = class {
  /**
   * @deprecated Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(services) {
    this.languageIdMap = /* @__PURE__ */ new Map();
    this.fileExtensionMap = /* @__PURE__ */ new Map();
    this.textDocuments = services === null || services === void 0 ? void 0 : services.workspace.TextDocuments;
  }
  register(language) {
    const data = language.LanguageMetaData;
    for (const ext of data.fileExtensions) {
      if (this.fileExtensionMap.has(ext)) {
        console.warn(`The file extension ${ext} is used by multiple languages. It is now assigned to '${data.languageId}'.`);
      }
      this.fileExtensionMap.set(ext, language);
    }
    this.languageIdMap.set(data.languageId, language);
    if (this.languageIdMap.size === 1) {
      this.singleton = language;
    } else {
      this.singleton = void 0;
    }
  }
  getServices(uri) {
    var _a6, _b;
    if (this.singleton !== void 0) {
      return this.singleton;
    }
    if (this.languageIdMap.size === 0) {
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    }
    const languageId = (_b = (_a6 = this.textDocuments) === null || _a6 === void 0 ? void 0 : _a6.get(uri)) === null || _b === void 0 ? void 0 : _b.languageId;
    if (languageId !== void 0) {
      const services2 = this.languageIdMap.get(languageId);
      if (services2) {
        return services2;
      }
    }
    const ext = UriUtils.extname(uri);
    const services = this.fileExtensionMap.get(ext);
    if (!services) {
      if (languageId) {
        throw new Error(`The service registry contains no services for the extension '${ext}' for language '${languageId}'.`);
      } else {
        throw new Error(`The service registry contains no services for the extension '${ext}'.`);
      }
    }
    return services;
  }
  hasServices(uri) {
    try {
      this.getServices(uri);
      return true;
    } catch (_a6) {
      return false;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
};

// node_modules/langium/lib/validation/validation-registry.js
function diagnosticData(code) {
  return { code };
}
var ValidationCategory;
(function(ValidationCategory2) {
  ValidationCategory2.all = ["fast", "slow", "built-in"];
})(ValidationCategory || (ValidationCategory = {}));
var ValidationRegistry = class {
  constructor(services) {
    this.entries = new MultiMap();
    this.entriesBefore = [];
    this.entriesAfter = [];
    this.reflection = services.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  register(checksRecord, thisObj = this, category = "fast") {
    if (category === "built-in") {
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    }
    for (const [type, ch] of Object.entries(checksRecord)) {
      const callbacks = ch;
      if (Array.isArray(callbacks)) {
        for (const check of callbacks) {
          const entry = {
            check: this.wrapValidationException(check, thisObj),
            category
          };
          this.addEntry(type, entry);
        }
      } else if (typeof callbacks === "function") {
        const entry = {
          check: this.wrapValidationException(callbacks, thisObj),
          category
        };
        this.addEntry(type, entry);
      } else {
        assertUnreachable(callbacks);
      }
    }
  }
  wrapValidationException(check, thisObj) {
    return async (node, accept, cancelToken) => {
      await this.handleException(() => check.call(thisObj, node, accept, cancelToken), "An error occurred during validation", accept, node);
    };
  }
  async handleException(functionality, messageContext, accept, node) {
    try {
      await functionality();
    } catch (err) {
      if (isOperationCancelled(err)) {
        throw err;
      }
      console.error(`${messageContext}:`, err);
      if (err instanceof Error && err.stack) {
        console.error(err.stack);
      }
      const messageDetails = err instanceof Error ? err.message : String(err);
      accept("error", `${messageContext}: ${messageDetails}`, { node });
    }
  }
  addEntry(type, entry) {
    if (type === "AstNode") {
      this.entries.add("AstNode", entry);
      return;
    }
    for (const subtype of this.reflection.getAllSubTypes(type)) {
      this.entries.add(subtype, entry);
    }
  }
  getChecks(type, categories) {
    let checks = stream(this.entries.get(type)).concat(this.entries.get("AstNode"));
    if (categories) {
      checks = checks.filter((entry) => categories.includes(entry.category));
    }
    return checks.map((entry) => entry.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(checkBefore, thisObj = this) {
    this.entriesBefore.push(this.wrapPreparationException(checkBefore, "An error occurred during set-up of the validation", thisObj));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(checkAfter, thisObj = this) {
    this.entriesAfter.push(this.wrapPreparationException(checkAfter, "An error occurred during tear-down of the validation", thisObj));
  }
  wrapPreparationException(check, messageContext, thisObj) {
    return async (rootNode, accept, categories, cancelToken) => {
      await this.handleException(() => check.call(thisObj, rootNode, accept, categories, cancelToken), messageContext, accept, rootNode);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
};

// node_modules/langium/lib/validation/document-validator.js
var DefaultDocumentValidator = class {
  constructor(services) {
    this.validationRegistry = services.validation.ValidationRegistry;
    this.metadata = services.LanguageMetaData;
  }
  async validateDocument(document, options = {}, cancelToken = cancellation_exports.CancellationToken.None) {
    const parseResult = document.parseResult;
    const diagnostics = [];
    await interruptAndCheck(cancelToken);
    if (!options.categories || options.categories.includes("built-in")) {
      this.processLexingErrors(parseResult, diagnostics, options);
      if (options.stopAfterLexingErrors && diagnostics.some((d) => {
        var _a6;
        return ((_a6 = d.data) === null || _a6 === void 0 ? void 0 : _a6.code) === DocumentValidator.LexingError;
      })) {
        return diagnostics;
      }
      this.processParsingErrors(parseResult, diagnostics, options);
      if (options.stopAfterParsingErrors && diagnostics.some((d) => {
        var _a6;
        return ((_a6 = d.data) === null || _a6 === void 0 ? void 0 : _a6.code) === DocumentValidator.ParsingError;
      })) {
        return diagnostics;
      }
      this.processLinkingErrors(document, diagnostics, options);
      if (options.stopAfterLinkingErrors && diagnostics.some((d) => {
        var _a6;
        return ((_a6 = d.data) === null || _a6 === void 0 ? void 0 : _a6.code) === DocumentValidator.LinkingError;
      })) {
        return diagnostics;
      }
    }
    try {
      diagnostics.push(...await this.validateAst(parseResult.value, options, cancelToken));
    } catch (err) {
      if (isOperationCancelled(err)) {
        throw err;
      }
      console.error("An error occurred during validation:", err);
    }
    await interruptAndCheck(cancelToken);
    return diagnostics;
  }
  processLexingErrors(parseResult, diagnostics, _options) {
    var _a6, _b, _c;
    const lexerDiagnostics = [...parseResult.lexerErrors, ...(_b = (_a6 = parseResult.lexerReport) === null || _a6 === void 0 ? void 0 : _a6.diagnostics) !== null && _b !== void 0 ? _b : []];
    for (const lexerDiagnostic of lexerDiagnostics) {
      const severity = (_c = lexerDiagnostic.severity) !== null && _c !== void 0 ? _c : "error";
      const diagnostic = {
        severity: toDiagnosticSeverity(severity),
        range: {
          start: {
            line: lexerDiagnostic.line - 1,
            character: lexerDiagnostic.column - 1
          },
          end: {
            line: lexerDiagnostic.line - 1,
            character: lexerDiagnostic.column + lexerDiagnostic.length - 1
          }
        },
        message: lexerDiagnostic.message,
        data: toDiagnosticData(severity),
        source: this.getSource()
      };
      diagnostics.push(diagnostic);
    }
  }
  processParsingErrors(parseResult, diagnostics, _options) {
    for (const parserError of parseResult.parserErrors) {
      let range = void 0;
      if (isNaN(parserError.token.startOffset)) {
        if ("previousToken" in parserError) {
          const token = parserError.previousToken;
          if (!isNaN(token.startOffset)) {
            const position = { line: token.endLine - 1, character: token.endColumn };
            range = { start: position, end: position };
          } else {
            const position = { line: 0, character: 0 };
            range = { start: position, end: position };
          }
        }
      } else {
        range = tokenToRange(parserError.token);
      }
      if (range) {
        const diagnostic = {
          severity: toDiagnosticSeverity("error"),
          range,
          message: parserError.message,
          data: diagnosticData(DocumentValidator.ParsingError),
          source: this.getSource()
        };
        diagnostics.push(diagnostic);
      }
    }
  }
  processLinkingErrors(document, diagnostics, _options) {
    for (const reference of document.references) {
      const linkingError = reference.error;
      if (linkingError) {
        const info = {
          node: linkingError.container,
          property: linkingError.property,
          index: linkingError.index,
          data: {
            code: DocumentValidator.LinkingError,
            containerType: linkingError.container.$type,
            property: linkingError.property,
            refText: linkingError.reference.$refText
          }
        };
        diagnostics.push(this.toDiagnostic("error", linkingError.message, info));
      }
    }
  }
  async validateAst(rootNode, options, cancelToken = cancellation_exports.CancellationToken.None) {
    const validationItems = [];
    const acceptor = (severity, message, info) => {
      validationItems.push(this.toDiagnostic(severity, message, info));
    };
    await this.validateAstBefore(rootNode, options, acceptor, cancelToken);
    await this.validateAstNodes(rootNode, options, acceptor, cancelToken);
    await this.validateAstAfter(rootNode, options, acceptor, cancelToken);
    return validationItems;
  }
  async validateAstBefore(rootNode, options, acceptor, cancelToken = cancellation_exports.CancellationToken.None) {
    var _a6;
    const checksBefore = this.validationRegistry.checksBefore;
    for (const checkBefore of checksBefore) {
      await interruptAndCheck(cancelToken);
      await checkBefore(rootNode, acceptor, (_a6 = options.categories) !== null && _a6 !== void 0 ? _a6 : [], cancelToken);
    }
  }
  async validateAstNodes(rootNode, options, acceptor, cancelToken = cancellation_exports.CancellationToken.None) {
    await Promise.all(streamAst(rootNode).map(async (node) => {
      await interruptAndCheck(cancelToken);
      const checks = this.validationRegistry.getChecks(node.$type, options.categories);
      for (const check of checks) {
        await check(node, acceptor, cancelToken);
      }
    }));
  }
  async validateAstAfter(rootNode, options, acceptor, cancelToken = cancellation_exports.CancellationToken.None) {
    var _a6;
    const checksAfter = this.validationRegistry.checksAfter;
    for (const checkAfter of checksAfter) {
      await interruptAndCheck(cancelToken);
      await checkAfter(rootNode, acceptor, (_a6 = options.categories) !== null && _a6 !== void 0 ? _a6 : [], cancelToken);
    }
  }
  toDiagnostic(severity, message, info) {
    return {
      message,
      range: getDiagnosticRange(info),
      severity: toDiagnosticSeverity(severity),
      code: info.code,
      codeDescription: info.codeDescription,
      tags: info.tags,
      relatedInformation: info.relatedInformation,
      data: info.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
};
function getDiagnosticRange(info) {
  if (info.range) {
    return info.range;
  }
  let cstNode;
  if (typeof info.property === "string") {
    cstNode = findNodeForProperty(info.node.$cstNode, info.property, info.index);
  } else if (typeof info.keyword === "string") {
    cstNode = findNodeForKeyword(info.node.$cstNode, info.keyword, info.index);
  }
  cstNode !== null && cstNode !== void 0 ? cstNode : cstNode = info.node.$cstNode;
  if (!cstNode) {
    return {
      start: { line: 0, character: 0 },
      end: { line: 0, character: 0 }
    };
  }
  return cstNode.range;
}
function toDiagnosticSeverity(severity) {
  switch (severity) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + severity);
  }
}
function toDiagnosticData(severity) {
  switch (severity) {
    case "error":
      return diagnosticData(DocumentValidator.LexingError);
    case "warning":
      return diagnosticData(DocumentValidator.LexingWarning);
    case "info":
      return diagnosticData(DocumentValidator.LexingInfo);
    case "hint":
      return diagnosticData(DocumentValidator.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + severity);
  }
}
var DocumentValidator;
(function(DocumentValidator2) {
  DocumentValidator2.LexingError = "lexing-error";
  DocumentValidator2.LexingWarning = "lexing-warning";
  DocumentValidator2.LexingInfo = "lexing-info";
  DocumentValidator2.LexingHint = "lexing-hint";
  DocumentValidator2.ParsingError = "parsing-error";
  DocumentValidator2.LinkingError = "linking-error";
})(DocumentValidator || (DocumentValidator = {}));

// node_modules/langium/lib/workspace/ast-descriptions.js
var DefaultAstNodeDescriptionProvider = class {
  constructor(services) {
    this.astNodeLocator = services.workspace.AstNodeLocator;
    this.nameProvider = services.references.NameProvider;
  }
  createDescription(node, name, document) {
    const doc = document !== null && document !== void 0 ? document : getDocument(node);
    name !== null && name !== void 0 ? name : name = this.nameProvider.getName(node);
    const path = this.astNodeLocator.getAstNodePath(node);
    if (!name) {
      throw new Error(`Node at path ${path} has no name.`);
    }
    let nameNodeSegment;
    const nameSegmentGetter = () => {
      var _a6;
      return nameNodeSegment !== null && nameNodeSegment !== void 0 ? nameNodeSegment : nameNodeSegment = toDocumentSegment((_a6 = this.nameProvider.getNameNode(node)) !== null && _a6 !== void 0 ? _a6 : node.$cstNode);
    };
    return {
      node,
      name,
      get nameSegment() {
        return nameSegmentGetter();
      },
      selectionSegment: toDocumentSegment(node.$cstNode),
      type: node.$type,
      documentUri: doc.uri,
      path
    };
  }
};
var DefaultReferenceDescriptionProvider = class {
  constructor(services) {
    this.nodeLocator = services.workspace.AstNodeLocator;
  }
  async createDescriptions(document, cancelToken = cancellation_exports.CancellationToken.None) {
    const descr = [];
    const rootNode = document.parseResult.value;
    for (const astNode of streamAst(rootNode)) {
      await interruptAndCheck(cancelToken);
      streamReferences(astNode).filter((refInfo) => !isLinkingError(refInfo)).forEach((refInfo) => {
        const description = this.createDescription(refInfo);
        if (description) {
          descr.push(description);
        }
      });
    }
    return descr;
  }
  createDescription(refInfo) {
    const targetNodeDescr = refInfo.reference.$nodeDescription;
    const refCstNode = refInfo.reference.$refNode;
    if (!targetNodeDescr || !refCstNode) {
      return void 0;
    }
    const docUri = getDocument(refInfo.container).uri;
    return {
      sourceUri: docUri,
      sourcePath: this.nodeLocator.getAstNodePath(refInfo.container),
      targetUri: targetNodeDescr.documentUri,
      targetPath: targetNodeDescr.path,
      segment: toDocumentSegment(refCstNode),
      local: UriUtils.equals(targetNodeDescr.documentUri, docUri)
    };
  }
};

// node_modules/langium/lib/workspace/ast-node-locator.js
var DefaultAstNodeLocator = class {
  constructor() {
    this.segmentSeparator = "/";
    this.indexSeparator = "@";
  }
  getAstNodePath(node) {
    if (node.$container) {
      const containerPath = this.getAstNodePath(node.$container);
      const newSegment = this.getPathSegment(node);
      const nodePath = containerPath + this.segmentSeparator + newSegment;
      return nodePath;
    }
    return "";
  }
  getPathSegment({ $containerProperty, $containerIndex }) {
    if (!$containerProperty) {
      throw new Error("Missing '$containerProperty' in AST node.");
    }
    if ($containerIndex !== void 0) {
      return $containerProperty + this.indexSeparator + $containerIndex;
    }
    return $containerProperty;
  }
  getAstNode(node, path) {
    const segments = path.split(this.segmentSeparator);
    return segments.reduce((previousValue, currentValue) => {
      if (!previousValue || currentValue.length === 0) {
        return previousValue;
      }
      const propertyIndex = currentValue.indexOf(this.indexSeparator);
      if (propertyIndex > 0) {
        const property = currentValue.substring(0, propertyIndex);
        const arrayIndex = parseInt(currentValue.substring(propertyIndex + 1));
        const array = previousValue[property];
        return array === null || array === void 0 ? void 0 : array[arrayIndex];
      }
      return previousValue[currentValue];
    }, node);
  }
};

// node_modules/langium/lib/utils/event.js
var event_exports = {};
__reExport(event_exports, __toESM(require_events(), 1));

// node_modules/langium/lib/workspace/configuration.js
var DefaultConfigurationProvider = class {
  constructor(services) {
    this._ready = new Deferred();
    this.settings = {};
    this.workspaceConfig = false;
    this.onConfigurationSectionUpdateEmitter = new event_exports.Emitter();
    this.serviceRegistry = services.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(params) {
    var _a6, _b;
    this.workspaceConfig = (_b = (_a6 = params.capabilities.workspace) === null || _a6 === void 0 ? void 0 : _a6.configuration) !== null && _b !== void 0 ? _b : false;
  }
  async initialized(params) {
    if (this.workspaceConfig) {
      if (params.register) {
        const languages = this.serviceRegistry.all;
        params.register({
          // Listen to configuration changes for all languages
          section: languages.map((lang) => this.toSectionName(lang.LanguageMetaData.languageId))
        });
      }
      if (params.fetchConfiguration) {
        const configToUpdate = this.serviceRegistry.all.map((lang) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(lang.LanguageMetaData.languageId)
        }));
        const configs = await params.fetchConfiguration(configToUpdate);
        configToUpdate.forEach((conf, idx) => {
          this.updateSectionConfiguration(conf.section, configs[idx]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(change) {
    if (!change.settings) {
      return;
    }
    Object.keys(change.settings).forEach((section) => {
      const configuration = change.settings[section];
      this.updateSectionConfiguration(section, configuration);
      this.onConfigurationSectionUpdateEmitter.fire({ section, configuration });
    });
  }
  updateSectionConfiguration(section, configuration) {
    this.settings[section] = configuration;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(language, configuration) {
    await this.ready;
    const sectionName = this.toSectionName(language);
    if (this.settings[sectionName]) {
      return this.settings[sectionName][configuration];
    }
  }
  toSectionName(languageId) {
    return `${languageId}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
};

// node_modules/langium/lib/utils/disposable.js
var Disposable;
(function(Disposable2) {
  function create(callback) {
    return {
      dispose: async () => await callback()
    };
  }
  Disposable2.create = create;
})(Disposable || (Disposable = {}));

// node_modules/langium/lib/workspace/document-builder.js
var DefaultDocumentBuilder = class {
  constructor(services) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    };
    this.updateListeners = [];
    this.buildPhaseListeners = new MultiMap();
    this.documentPhaseListeners = new MultiMap();
    this.buildState = /* @__PURE__ */ new Map();
    this.documentBuildWaiters = /* @__PURE__ */ new Map();
    this.currentState = DocumentState.Changed;
    this.langiumDocuments = services.workspace.LangiumDocuments;
    this.langiumDocumentFactory = services.workspace.LangiumDocumentFactory;
    this.textDocuments = services.workspace.TextDocuments;
    this.indexManager = services.workspace.IndexManager;
    this.serviceRegistry = services.ServiceRegistry;
  }
  async build(documents, options = {}, cancelToken = cancellation_exports.CancellationToken.None) {
    var _a6, _b;
    for (const document of documents) {
      const key = document.uri.toString();
      if (document.state === DocumentState.Validated) {
        if (typeof options.validation === "boolean" && options.validation) {
          document.state = DocumentState.IndexedReferences;
          document.diagnostics = void 0;
          this.buildState.delete(key);
        } else if (typeof options.validation === "object") {
          const buildState = this.buildState.get(key);
          const previousCategories = (_a6 = buildState === null || buildState === void 0 ? void 0 : buildState.result) === null || _a6 === void 0 ? void 0 : _a6.validationChecks;
          if (previousCategories) {
            const newCategories = (_b = options.validation.categories) !== null && _b !== void 0 ? _b : ValidationCategory.all;
            const categories = newCategories.filter((c) => !previousCategories.includes(c));
            if (categories.length > 0) {
              this.buildState.set(key, {
                completed: false,
                options: {
                  validation: Object.assign(Object.assign({}, options.validation), { categories })
                },
                result: buildState.result
              });
              document.state = DocumentState.IndexedReferences;
            }
          }
        }
      } else {
        this.buildState.delete(key);
      }
    }
    this.currentState = DocumentState.Changed;
    await this.emitUpdate(documents.map((e) => e.uri), []);
    await this.buildDocuments(documents, options, cancelToken);
  }
  async update(changed, deleted, cancelToken = cancellation_exports.CancellationToken.None) {
    this.currentState = DocumentState.Changed;
    for (const deletedUri of deleted) {
      this.langiumDocuments.deleteDocument(deletedUri);
      this.buildState.delete(deletedUri.toString());
      this.indexManager.remove(deletedUri);
    }
    for (const changedUri of changed) {
      const invalidated = this.langiumDocuments.invalidateDocument(changedUri);
      if (!invalidated) {
        const newDocument = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, changedUri);
        newDocument.state = DocumentState.Changed;
        this.langiumDocuments.addDocument(newDocument);
      }
      this.buildState.delete(changedUri.toString());
    }
    const allChangedUris = stream(changed).concat(deleted).map((uri) => uri.toString()).toSet();
    this.langiumDocuments.all.filter((doc) => !allChangedUris.has(doc.uri.toString()) && this.shouldRelink(doc, allChangedUris)).forEach((doc) => {
      const linker = this.serviceRegistry.getServices(doc.uri).references.Linker;
      linker.unlink(doc);
      doc.state = Math.min(doc.state, DocumentState.ComputedScopes);
      doc.diagnostics = void 0;
    });
    await this.emitUpdate(changed, deleted);
    await interruptAndCheck(cancelToken);
    const rebuildDocuments = this.sortDocuments(this.langiumDocuments.all.filter((doc) => {
      var _a6;
      return doc.state < DocumentState.Linked || !((_a6 = this.buildState.get(doc.uri.toString())) === null || _a6 === void 0 ? void 0 : _a6.completed);
    }).toArray());
    await this.buildDocuments(rebuildDocuments, this.updateBuildOptions, cancelToken);
  }
  async emitUpdate(changed, deleted) {
    await Promise.all(this.updateListeners.map((listener) => listener(changed, deleted)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(documents) {
    let left = 0;
    let right = documents.length - 1;
    while (left < right) {
      while (left < documents.length && this.hasTextDocument(documents[left])) {
        left++;
      }
      while (right >= 0 && !this.hasTextDocument(documents[right])) {
        right--;
      }
      if (left < right) {
        [documents[left], documents[right]] = [documents[right], documents[left]];
      }
    }
    return documents;
  }
  hasTextDocument(doc) {
    var _a6;
    return Boolean((_a6 = this.textDocuments) === null || _a6 === void 0 ? void 0 : _a6.get(doc.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(document, changedUris) {
    if (document.references.some((ref) => ref.error !== void 0)) {
      return true;
    }
    return this.indexManager.isAffected(document, changedUris);
  }
  onUpdate(callback) {
    this.updateListeners.push(callback);
    return Disposable.create(() => {
      const index = this.updateListeners.indexOf(callback);
      if (index >= 0) {
        this.updateListeners.splice(index, 1);
      }
    });
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(documents, options, cancelToken) {
    this.prepareBuild(documents, options);
    await this.runCancelable(documents, DocumentState.Parsed, cancelToken, (doc) => this.langiumDocumentFactory.update(doc, cancelToken));
    await this.runCancelable(documents, DocumentState.IndexedContent, cancelToken, (doc) => this.indexManager.updateContent(doc, cancelToken));
    await this.runCancelable(documents, DocumentState.ComputedScopes, cancelToken, async (doc) => {
      const scopeComputation = this.serviceRegistry.getServices(doc.uri).references.ScopeComputation;
      doc.precomputedScopes = await scopeComputation.computeLocalScopes(doc, cancelToken);
    });
    await this.runCancelable(documents, DocumentState.Linked, cancelToken, (doc) => {
      const linker = this.serviceRegistry.getServices(doc.uri).references.Linker;
      return linker.link(doc, cancelToken);
    });
    await this.runCancelable(documents, DocumentState.IndexedReferences, cancelToken, (doc) => this.indexManager.updateReferences(doc, cancelToken));
    const toBeValidated = documents.filter((doc) => this.shouldValidate(doc));
    await this.runCancelable(toBeValidated, DocumentState.Validated, cancelToken, (doc) => this.validate(doc, cancelToken));
    for (const doc of documents) {
      const state = this.buildState.get(doc.uri.toString());
      if (state) {
        state.completed = true;
      }
    }
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(documents, options) {
    for (const doc of documents) {
      const key = doc.uri.toString();
      const state = this.buildState.get(key);
      if (!state || state.completed) {
        this.buildState.set(key, {
          completed: false,
          options,
          result: state === null || state === void 0 ? void 0 : state.result
        });
      }
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(documents, targetState, cancelToken, callback) {
    const filtered = documents.filter((doc) => doc.state < targetState);
    for (const document of filtered) {
      await interruptAndCheck(cancelToken);
      await callback(document);
      document.state = targetState;
      await this.notifyDocumentPhase(document, targetState, cancelToken);
    }
    const targetStateDocs = documents.filter((doc) => doc.state === targetState);
    await this.notifyBuildPhase(targetStateDocs, targetState, cancelToken);
    this.currentState = targetState;
  }
  onBuildPhase(targetState, callback) {
    this.buildPhaseListeners.add(targetState, callback);
    return Disposable.create(() => {
      this.buildPhaseListeners.delete(targetState, callback);
    });
  }
  onDocumentPhase(targetState, callback) {
    this.documentPhaseListeners.add(targetState, callback);
    return Disposable.create(() => {
      this.documentPhaseListeners.delete(targetState, callback);
    });
  }
  waitUntil(state, uriOrToken, cancelToken) {
    let uri = void 0;
    if (uriOrToken && "path" in uriOrToken) {
      uri = uriOrToken;
    } else {
      cancelToken = uriOrToken;
    }
    cancelToken !== null && cancelToken !== void 0 ? cancelToken : cancelToken = cancellation_exports.CancellationToken.None;
    if (uri) {
      const document = this.langiumDocuments.getDocument(uri);
      if (document && document.state > state) {
        return Promise.resolve(uri);
      }
    }
    if (this.currentState >= state) {
      return Promise.resolve(void 0);
    } else if (cancelToken.isCancellationRequested) {
      return Promise.reject(OperationCancelled);
    }
    return new Promise((resolve, reject) => {
      const buildDisposable = this.onBuildPhase(state, () => {
        buildDisposable.dispose();
        cancelDisposable.dispose();
        if (uri) {
          const document = this.langiumDocuments.getDocument(uri);
          resolve(document === null || document === void 0 ? void 0 : document.uri);
        } else {
          resolve(void 0);
        }
      });
      const cancelDisposable = cancelToken.onCancellationRequested(() => {
        buildDisposable.dispose();
        cancelDisposable.dispose();
        reject(OperationCancelled);
      });
    });
  }
  async notifyDocumentPhase(document, state, cancelToken) {
    const listeners = this.documentPhaseListeners.get(state);
    const listenersCopy = listeners.slice();
    for (const listener of listenersCopy) {
      try {
        await listener(document, cancelToken);
      } catch (err) {
        if (!isOperationCancelled(err)) {
          throw err;
        }
      }
    }
  }
  async notifyBuildPhase(documents, state, cancelToken) {
    if (documents.length === 0) {
      return;
    }
    const listeners = this.buildPhaseListeners.get(state);
    const listenersCopy = listeners.slice();
    for (const listener of listenersCopy) {
      await interruptAndCheck(cancelToken);
      await listener(documents, cancelToken);
    }
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(document) {
    return Boolean(this.getBuildOptions(document).validation);
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(document, cancelToken) {
    var _a6, _b;
    const validator = this.serviceRegistry.getServices(document.uri).validation.DocumentValidator;
    const validationSetting = this.getBuildOptions(document).validation;
    const options = typeof validationSetting === "object" ? validationSetting : void 0;
    const diagnostics = await validator.validateDocument(document, options, cancelToken);
    if (document.diagnostics) {
      document.diagnostics.push(...diagnostics);
    } else {
      document.diagnostics = diagnostics;
    }
    const state = this.buildState.get(document.uri.toString());
    if (state) {
      (_a6 = state.result) !== null && _a6 !== void 0 ? _a6 : state.result = {};
      const newCategories = (_b = options === null || options === void 0 ? void 0 : options.categories) !== null && _b !== void 0 ? _b : ValidationCategory.all;
      if (state.result.validationChecks) {
        state.result.validationChecks.push(...newCategories);
      } else {
        state.result.validationChecks = [...newCategories];
      }
    }
  }
  getBuildOptions(document) {
    var _a6, _b;
    return (_b = (_a6 = this.buildState.get(document.uri.toString())) === null || _a6 === void 0 ? void 0 : _a6.options) !== null && _b !== void 0 ? _b : {};
  }
};

// node_modules/langium/lib/workspace/index-manager.js
var DefaultIndexManager = class {
  constructor(services) {
    this.symbolIndex = /* @__PURE__ */ new Map();
    this.symbolByTypeIndex = new ContextCache();
    this.referenceIndex = /* @__PURE__ */ new Map();
    this.documents = services.workspace.LangiumDocuments;
    this.serviceRegistry = services.ServiceRegistry;
    this.astReflection = services.AstReflection;
  }
  findAllReferences(targetNode, astNodePath) {
    const targetDocUri = getDocument(targetNode).uri;
    const result = [];
    this.referenceIndex.forEach((docRefs) => {
      docRefs.forEach((refDescr) => {
        if (UriUtils.equals(refDescr.targetUri, targetDocUri) && refDescr.targetPath === astNodePath) {
          result.push(refDescr);
        }
      });
    });
    return stream(result);
  }
  allElements(nodeType, uris) {
    let documentUris = stream(this.symbolIndex.keys());
    if (uris) {
      documentUris = documentUris.filter((uri) => !uris || uris.has(uri));
    }
    return documentUris.map((uri) => this.getFileDescriptions(uri, nodeType)).flat();
  }
  getFileDescriptions(uri, nodeType) {
    var _a6;
    if (!nodeType) {
      return (_a6 = this.symbolIndex.get(uri)) !== null && _a6 !== void 0 ? _a6 : [];
    }
    const descriptions = this.symbolByTypeIndex.get(uri, nodeType, () => {
      var _a7;
      const allFileDescriptions = (_a7 = this.symbolIndex.get(uri)) !== null && _a7 !== void 0 ? _a7 : [];
      return allFileDescriptions.filter((e) => this.astReflection.isSubtype(e.type, nodeType));
    });
    return descriptions;
  }
  remove(uri) {
    const uriString = uri.toString();
    this.symbolIndex.delete(uriString);
    this.symbolByTypeIndex.clear(uriString);
    this.referenceIndex.delete(uriString);
  }
  async updateContent(document, cancelToken = cancellation_exports.CancellationToken.None) {
    const services = this.serviceRegistry.getServices(document.uri);
    const exports = await services.references.ScopeComputation.computeExports(document, cancelToken);
    const uri = document.uri.toString();
    this.symbolIndex.set(uri, exports);
    this.symbolByTypeIndex.clear(uri);
  }
  async updateReferences(document, cancelToken = cancellation_exports.CancellationToken.None) {
    const services = this.serviceRegistry.getServices(document.uri);
    const indexData = await services.workspace.ReferenceDescriptionProvider.createDescriptions(document, cancelToken);
    this.referenceIndex.set(document.uri.toString(), indexData);
  }
  isAffected(document, changedUris) {
    const references = this.referenceIndex.get(document.uri.toString());
    if (!references) {
      return false;
    }
    return references.some((ref) => !ref.local && changedUris.has(ref.targetUri.toString()));
  }
};

// node_modules/langium/lib/workspace/workspace-manager.js
var DefaultWorkspaceManager = class {
  constructor(services) {
    this.initialBuildOptions = {};
    this._ready = new Deferred();
    this.serviceRegistry = services.ServiceRegistry;
    this.langiumDocuments = services.workspace.LangiumDocuments;
    this.documentBuilder = services.workspace.DocumentBuilder;
    this.fileSystemProvider = services.workspace.FileSystemProvider;
    this.mutex = services.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(params) {
    var _a6;
    this.folders = (_a6 = params.workspaceFolders) !== null && _a6 !== void 0 ? _a6 : void 0;
  }
  initialized(_params) {
    return this.mutex.write((token) => {
      var _a6;
      return this.initializeWorkspace((_a6 = this.folders) !== null && _a6 !== void 0 ? _a6 : [], token);
    });
  }
  async initializeWorkspace(folders, cancelToken = cancellation_exports.CancellationToken.None) {
    const documents = await this.performStartup(folders);
    await interruptAndCheck(cancelToken);
    await this.documentBuilder.build(documents, this.initialBuildOptions, cancelToken);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(folders) {
    const fileExtensions = this.serviceRegistry.all.flatMap((e) => e.LanguageMetaData.fileExtensions);
    const documents = [];
    const collector = (document) => {
      documents.push(document);
      if (!this.langiumDocuments.hasDocument(document.uri)) {
        this.langiumDocuments.addDocument(document);
      }
    };
    await this.loadAdditionalDocuments(folders, collector);
    await Promise.all(folders.map((wf) => [wf, this.getRootFolder(wf)]).map(async (entry) => this.traverseFolder(...entry, fileExtensions, collector)));
    this._ready.resolve();
    return documents;
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(_folders, _collector) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(workspaceFolder) {
    return URI2.parse(workspaceFolder.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the collector.
   */
  async traverseFolder(workspaceFolder, folderPath, fileExtensions, collector) {
    const content = await this.fileSystemProvider.readDirectory(folderPath);
    await Promise.all(content.map(async (entry) => {
      if (this.includeEntry(workspaceFolder, entry, fileExtensions)) {
        if (entry.isDirectory) {
          await this.traverseFolder(workspaceFolder, entry.uri, fileExtensions, collector);
        } else if (entry.isFile) {
          const document = await this.langiumDocuments.getOrCreateDocument(entry.uri);
          collector(document);
        }
      }
    }));
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  includeEntry(_workspaceFolder, entry, fileExtensions) {
    const name = UriUtils.basename(entry.uri);
    if (name.startsWith(".")) {
      return false;
    }
    if (entry.isDirectory) {
      return name !== "node_modules" && name !== "out";
    } else if (entry.isFile) {
      const extname = UriUtils.extname(entry.uri);
      return fileExtensions.includes(extname);
    }
    return false;
  }
};

// node_modules/langium/lib/parser/lexer.js
var DefaultLexerErrorMessageProvider = class {
  buildUnexpectedCharactersMessage(fullText, startOffset, length, line, column) {
    return defaultLexerErrorProvider.buildUnexpectedCharactersMessage(fullText, startOffset, length, line, column);
  }
  buildUnableToPopLexerModeMessage(token) {
    return defaultLexerErrorProvider.buildUnableToPopLexerModeMessage(token);
  }
};
var DEFAULT_TOKENIZE_OPTIONS = { mode: "full" };
var DefaultLexer = class {
  constructor(services) {
    this.errorMessageProvider = services.parser.LexerErrorMessageProvider;
    this.tokenBuilder = services.parser.TokenBuilder;
    const tokens = this.tokenBuilder.buildTokens(services.Grammar, {
      caseInsensitive: services.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(tokens);
    const lexerTokens = isTokenTypeDictionary(tokens) ? Object.values(tokens) : tokens;
    const production = services.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new Lexer(lexerTokens, {
      positionTracking: "full",
      skipValidations: production,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(text, _options = DEFAULT_TOKENIZE_OPTIONS) {
    var _a6, _b, _c;
    const chevrotainResult = this.chevrotainLexer.tokenize(text);
    return {
      tokens: chevrotainResult.tokens,
      errors: chevrotainResult.errors,
      hidden: (_a6 = chevrotainResult.groups.hidden) !== null && _a6 !== void 0 ? _a6 : [],
      report: (_c = (_b = this.tokenBuilder).flushLexingReport) === null || _c === void 0 ? void 0 : _c.call(_b, text)
    };
  }
  toTokenTypeDictionary(buildTokens) {
    if (isTokenTypeDictionary(buildTokens))
      return buildTokens;
    const tokens = isIMultiModeLexerDefinition(buildTokens) ? Object.values(buildTokens.modes).flat() : buildTokens;
    const res = {};
    tokens.forEach((token) => res[token.name] = token);
    return res;
  }
};
function isTokenTypeArray(tokenVocabulary) {
  return Array.isArray(tokenVocabulary) && (tokenVocabulary.length === 0 || "name" in tokenVocabulary[0]);
}
function isIMultiModeLexerDefinition(tokenVocabulary) {
  return tokenVocabulary && "modes" in tokenVocabulary && "defaultMode" in tokenVocabulary;
}
function isTokenTypeDictionary(tokenVocabulary) {
  return !isTokenTypeArray(tokenVocabulary) && !isIMultiModeLexerDefinition(tokenVocabulary);
}

// node_modules/langium/lib/documentation/jsdoc.js
function parseJSDoc(node, start, options) {
  let opts;
  let position;
  if (typeof node === "string") {
    position = start;
    opts = options;
  } else {
    position = node.range.start;
    opts = start;
  }
  if (!position) {
    position = Position.create(0, 0);
  }
  const lines = getLines(node);
  const normalizedOptions = normalizeOptions(opts);
  const tokens = tokenize({
    lines,
    position,
    options: normalizedOptions
  });
  return parseJSDocComment({
    index: 0,
    tokens,
    position
  });
}
function isJSDoc(node, options) {
  const normalizedOptions = normalizeOptions(options);
  const lines = getLines(node);
  if (lines.length === 0) {
    return false;
  }
  const first2 = lines[0];
  const last = lines[lines.length - 1];
  const firstRegex = normalizedOptions.start;
  const lastRegex = normalizedOptions.end;
  return Boolean(firstRegex === null || firstRegex === void 0 ? void 0 : firstRegex.exec(first2)) && Boolean(lastRegex === null || lastRegex === void 0 ? void 0 : lastRegex.exec(last));
}
function getLines(node) {
  let content = "";
  if (typeof node === "string") {
    content = node;
  } else {
    content = node.text;
  }
  const lines = content.split(NEWLINE_REGEXP);
  return lines;
}
var tagRegex = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy;
var inlineTagRegex = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function tokenize(context) {
  var _a6, _b, _c;
  const tokens = [];
  let currentLine = context.position.line;
  let currentCharacter = context.position.character;
  for (let i = 0; i < context.lines.length; i++) {
    const first2 = i === 0;
    const last = i === context.lines.length - 1;
    let line = context.lines[i];
    let index = 0;
    if (first2 && context.options.start) {
      const match = (_a6 = context.options.start) === null || _a6 === void 0 ? void 0 : _a6.exec(line);
      if (match) {
        index = match.index + match[0].length;
      }
    } else {
      const match = (_b = context.options.line) === null || _b === void 0 ? void 0 : _b.exec(line);
      if (match) {
        index = match.index + match[0].length;
      }
    }
    if (last) {
      const match = (_c = context.options.end) === null || _c === void 0 ? void 0 : _c.exec(line);
      if (match) {
        line = line.substring(0, match.index);
      }
    }
    line = line.substring(0, lastCharacter(line));
    const whitespaceEnd = skipWhitespace(line, index);
    if (whitespaceEnd >= line.length) {
      if (tokens.length > 0) {
        const position = Position.create(currentLine, currentCharacter);
        tokens.push({
          type: "break",
          content: "",
          range: Range.create(position, position)
        });
      }
    } else {
      tagRegex.lastIndex = index;
      const tagMatch = tagRegex.exec(line);
      if (tagMatch) {
        const fullMatch = tagMatch[0];
        const value = tagMatch[1];
        const start = Position.create(currentLine, currentCharacter + index);
        const end = Position.create(currentLine, currentCharacter + index + fullMatch.length);
        tokens.push({
          type: "tag",
          content: value,
          range: Range.create(start, end)
        });
        index += fullMatch.length;
        index = skipWhitespace(line, index);
      }
      if (index < line.length) {
        const rest = line.substring(index);
        const inlineTagMatches = Array.from(rest.matchAll(inlineTagRegex));
        tokens.push(...buildInlineTokens(inlineTagMatches, rest, currentLine, currentCharacter + index));
      }
    }
    currentLine++;
    currentCharacter = 0;
  }
  if (tokens.length > 0 && tokens[tokens.length - 1].type === "break") {
    return tokens.slice(0, -1);
  }
  return tokens;
}
function buildInlineTokens(tags, line, lineIndex, characterIndex) {
  const tokens = [];
  if (tags.length === 0) {
    const start = Position.create(lineIndex, characterIndex);
    const end = Position.create(lineIndex, characterIndex + line.length);
    tokens.push({
      type: "text",
      content: line,
      range: Range.create(start, end)
    });
  } else {
    let lastIndex = 0;
    for (const match of tags) {
      const matchIndex = match.index;
      const startContent = line.substring(lastIndex, matchIndex);
      if (startContent.length > 0) {
        tokens.push({
          type: "text",
          content: line.substring(lastIndex, matchIndex),
          range: Range.create(Position.create(lineIndex, lastIndex + characterIndex), Position.create(lineIndex, matchIndex + characterIndex))
        });
      }
      let offset = startContent.length + 1;
      const tagName = match[1];
      tokens.push({
        type: "inline-tag",
        content: tagName,
        range: Range.create(Position.create(lineIndex, lastIndex + offset + characterIndex), Position.create(lineIndex, lastIndex + offset + tagName.length + characterIndex))
      });
      offset += tagName.length;
      if (match.length === 4) {
        offset += match[2].length;
        const value = match[3];
        tokens.push({
          type: "text",
          content: value,
          range: Range.create(Position.create(lineIndex, lastIndex + offset + characterIndex), Position.create(lineIndex, lastIndex + offset + value.length + characterIndex))
        });
      } else {
        tokens.push({
          type: "text",
          content: "",
          range: Range.create(Position.create(lineIndex, lastIndex + offset + characterIndex), Position.create(lineIndex, lastIndex + offset + characterIndex))
        });
      }
      lastIndex = matchIndex + match[0].length;
    }
    const endContent = line.substring(lastIndex);
    if (endContent.length > 0) {
      tokens.push({
        type: "text",
        content: endContent,
        range: Range.create(Position.create(lineIndex, lastIndex + characterIndex), Position.create(lineIndex, lastIndex + characterIndex + endContent.length))
      });
    }
  }
  return tokens;
}
var nonWhitespaceRegex = /\S/;
var whitespaceEndRegex = /\s*$/;
function skipWhitespace(line, index) {
  const match = line.substring(index).match(nonWhitespaceRegex);
  if (match) {
    return index + match.index;
  } else {
    return line.length;
  }
}
function lastCharacter(line) {
  const match = line.match(whitespaceEndRegex);
  if (match && typeof match.index === "number") {
    return match.index;
  }
  return void 0;
}
function parseJSDocComment(context) {
  var _a6, _b, _c, _d;
  const startPosition = Position.create(context.position.line, context.position.character);
  if (context.tokens.length === 0) {
    return new JSDocCommentImpl([], Range.create(startPosition, startPosition));
  }
  const elements = [];
  while (context.index < context.tokens.length) {
    const element = parseJSDocElement(context, elements[elements.length - 1]);
    if (element) {
      elements.push(element);
    }
  }
  const start = (_b = (_a6 = elements[0]) === null || _a6 === void 0 ? void 0 : _a6.range.start) !== null && _b !== void 0 ? _b : startPosition;
  const end = (_d = (_c = elements[elements.length - 1]) === null || _c === void 0 ? void 0 : _c.range.end) !== null && _d !== void 0 ? _d : startPosition;
  return new JSDocCommentImpl(elements, Range.create(start, end));
}
function parseJSDocElement(context, last) {
  const next = context.tokens[context.index];
  if (next.type === "tag") {
    return parseJSDocTag(context, false);
  } else if (next.type === "text" || next.type === "inline-tag") {
    return parseJSDocText(context);
  } else {
    appendEmptyLine(next, last);
    context.index++;
    return void 0;
  }
}
function appendEmptyLine(token, element) {
  if (element) {
    const line = new JSDocLineImpl("", token.range);
    if ("inlines" in element) {
      element.inlines.push(line);
    } else {
      element.content.inlines.push(line);
    }
  }
}
function parseJSDocText(context) {
  let token = context.tokens[context.index];
  const firstToken = token;
  let lastToken = token;
  const lines = [];
  while (token && token.type !== "break" && token.type !== "tag") {
    lines.push(parseJSDocInline(context));
    lastToken = token;
    token = context.tokens[context.index];
  }
  return new JSDocTextImpl(lines, Range.create(firstToken.range.start, lastToken.range.end));
}
function parseJSDocInline(context) {
  const token = context.tokens[context.index];
  if (token.type === "inline-tag") {
    return parseJSDocTag(context, true);
  } else {
    return parseJSDocLine(context);
  }
}
function parseJSDocTag(context, inline) {
  const tagToken = context.tokens[context.index++];
  const name = tagToken.content.substring(1);
  const nextToken = context.tokens[context.index];
  if ((nextToken === null || nextToken === void 0 ? void 0 : nextToken.type) === "text") {
    if (inline) {
      const docLine = parseJSDocLine(context);
      return new JSDocTagImpl(name, new JSDocTextImpl([docLine], docLine.range), inline, Range.create(tagToken.range.start, docLine.range.end));
    } else {
      const textDoc = parseJSDocText(context);
      return new JSDocTagImpl(name, textDoc, inline, Range.create(tagToken.range.start, textDoc.range.end));
    }
  } else {
    const range = tagToken.range;
    return new JSDocTagImpl(name, new JSDocTextImpl([], range), inline, range);
  }
}
function parseJSDocLine(context) {
  const token = context.tokens[context.index++];
  return new JSDocLineImpl(token.content, token.range);
}
function normalizeOptions(options) {
  if (!options) {
    return normalizeOptions({
      start: "/**",
      end: "*/",
      line: "*"
    });
  }
  const { start, end, line } = options;
  return {
    start: normalizeOption(start, true),
    end: normalizeOption(end, false),
    line: normalizeOption(line, true)
  };
}
function normalizeOption(option2, start) {
  if (typeof option2 === "string" || typeof option2 === "object") {
    const escaped = typeof option2 === "string" ? escapeRegExp(option2) : option2.source;
    if (start) {
      return new RegExp(`^\\s*${escaped}`);
    } else {
      return new RegExp(`\\s*${escaped}\\s*$`);
    }
  } else {
    return option2;
  }
}
var JSDocCommentImpl = class {
  constructor(elements, range) {
    this.elements = elements;
    this.range = range;
  }
  getTag(name) {
    return this.getAllTags().find((e) => e.name === name);
  }
  getTags(name) {
    return this.getAllTags().filter((e) => e.name === name);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let value = "";
    for (const element of this.elements) {
      if (value.length === 0) {
        value = element.toString();
      } else {
        const text = element.toString();
        value += fillNewlines(value) + text;
      }
    }
    return value.trim();
  }
  toMarkdown(options) {
    let value = "";
    for (const element of this.elements) {
      if (value.length === 0) {
        value = element.toMarkdown(options);
      } else {
        const text = element.toMarkdown(options);
        value += fillNewlines(value) + text;
      }
    }
    return value.trim();
  }
};
var JSDocTagImpl = class {
  constructor(name, content, inline, range) {
    this.name = name;
    this.content = content;
    this.inline = inline;
    this.range = range;
  }
  toString() {
    let text = `@${this.name}`;
    const content = this.content.toString();
    if (this.content.inlines.length === 1) {
      text = `${text} ${content}`;
    } else if (this.content.inlines.length > 1) {
      text = `${text}
${content}`;
    }
    if (this.inline) {
      return `{${text}}`;
    } else {
      return text;
    }
  }
  toMarkdown(options) {
    var _a6, _b;
    return (_b = (_a6 = options === null || options === void 0 ? void 0 : options.renderTag) === null || _a6 === void 0 ? void 0 : _a6.call(options, this)) !== null && _b !== void 0 ? _b : this.toMarkdownDefault(options);
  }
  toMarkdownDefault(options) {
    const content = this.content.toMarkdown(options);
    if (this.inline) {
      const rendered = renderInlineTag(this.name, content, options !== null && options !== void 0 ? options : {});
      if (typeof rendered === "string") {
        return rendered;
      }
    }
    let marker = "";
    if ((options === null || options === void 0 ? void 0 : options.tag) === "italic" || (options === null || options === void 0 ? void 0 : options.tag) === void 0) {
      marker = "*";
    } else if ((options === null || options === void 0 ? void 0 : options.tag) === "bold") {
      marker = "**";
    } else if ((options === null || options === void 0 ? void 0 : options.tag) === "bold-italic") {
      marker = "***";
    }
    let text = `${marker}@${this.name}${marker}`;
    if (this.content.inlines.length === 1) {
      text = `${text} — ${content}`;
    } else if (this.content.inlines.length > 1) {
      text = `${text}
${content}`;
    }
    if (this.inline) {
      return `{${text}}`;
    } else {
      return text;
    }
  }
};
function renderInlineTag(tag, content, options) {
  var _a6, _b;
  if (tag === "linkplain" || tag === "linkcode" || tag === "link") {
    const index = content.indexOf(" ");
    let display = content;
    if (index > 0) {
      const displayStart = skipWhitespace(content, index);
      display = content.substring(displayStart);
      content = content.substring(0, index);
    }
    if (tag === "linkcode" || tag === "link" && options.link === "code") {
      display = `\`${display}\``;
    }
    const renderedLink = (_b = (_a6 = options.renderLink) === null || _a6 === void 0 ? void 0 : _a6.call(options, content, display)) !== null && _b !== void 0 ? _b : renderLinkDefault(content, display);
    return renderedLink;
  }
  return void 0;
}
function renderLinkDefault(content, display) {
  try {
    URI2.parse(content, true);
    return `[${display}](${content})`;
  } catch (_a6) {
    return content;
  }
}
var JSDocTextImpl = class {
  constructor(lines, range) {
    this.inlines = lines;
    this.range = range;
  }
  toString() {
    let text = "";
    for (let i = 0; i < this.inlines.length; i++) {
      const inline = this.inlines[i];
      const next = this.inlines[i + 1];
      text += inline.toString();
      if (next && next.range.start.line > inline.range.start.line) {
        text += "\n";
      }
    }
    return text;
  }
  toMarkdown(options) {
    let text = "";
    for (let i = 0; i < this.inlines.length; i++) {
      const inline = this.inlines[i];
      const next = this.inlines[i + 1];
      text += inline.toMarkdown(options);
      if (next && next.range.start.line > inline.range.start.line) {
        text += "\n";
      }
    }
    return text;
  }
};
var JSDocLineImpl = class {
  constructor(text, range) {
    this.text = text;
    this.range = range;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
};
function fillNewlines(text) {
  if (text.endsWith("\n")) {
    return "\n";
  } else {
    return "\n\n";
  }
}

// node_modules/langium/lib/documentation/documentation-provider.js
var JSDocDocumentationProvider = class {
  constructor(services) {
    this.indexManager = services.shared.workspace.IndexManager;
    this.commentProvider = services.documentation.CommentProvider;
  }
  getDocumentation(node) {
    const comment = this.commentProvider.getComment(node);
    if (comment && isJSDoc(comment)) {
      const parsedJSDoc = parseJSDoc(comment);
      return parsedJSDoc.toMarkdown({
        renderLink: (link, display) => {
          return this.documentationLinkRenderer(node, link, display);
        },
        renderTag: (tag) => {
          return this.documentationTagRenderer(node, tag);
        }
      });
    }
    return void 0;
  }
  documentationLinkRenderer(node, name, display) {
    var _a6;
    const description = (_a6 = this.findNameInPrecomputedScopes(node, name)) !== null && _a6 !== void 0 ? _a6 : this.findNameInGlobalScope(node, name);
    if (description && description.nameSegment) {
      const line = description.nameSegment.range.start.line + 1;
      const character = description.nameSegment.range.start.character + 1;
      const uri = description.documentUri.with({ fragment: `L${line},${character}` });
      return `[${display}](${uri.toString()})`;
    } else {
      return void 0;
    }
  }
  documentationTagRenderer(_node, _tag) {
    return void 0;
  }
  findNameInPrecomputedScopes(node, name) {
    const document = getDocument(node);
    const precomputed = document.precomputedScopes;
    if (!precomputed) {
      return void 0;
    }
    let currentNode = node;
    do {
      const allDescriptions = precomputed.get(currentNode);
      const description = allDescriptions.find((e) => e.name === name);
      if (description) {
        return description;
      }
      currentNode = currentNode.$container;
    } while (currentNode);
    return void 0;
  }
  findNameInGlobalScope(node, name) {
    const description = this.indexManager.allElements().find((e) => e.name === name);
    return description;
  }
};

// node_modules/langium/lib/documentation/comment-provider.js
var DefaultCommentProvider = class {
  constructor(services) {
    this.grammarConfig = () => services.parser.GrammarConfig;
  }
  getComment(node) {
    var _a6;
    if (isAstNodeWithComment(node)) {
      return node.$comment;
    }
    return (_a6 = findCommentNode(node.$cstNode, this.grammarConfig().multilineCommentRules)) === null || _a6 === void 0 ? void 0 : _a6.text;
  }
};

// node_modules/langium/lib/parser/async-parser.js
var DefaultAsyncParser = class {
  constructor(services) {
    this.syncParser = services.parser.LangiumParser;
  }
  parse(text, _cancelToken) {
    return Promise.resolve(this.syncParser.parse(text));
  }
};
var AbstractThreadedAsyncParser = class {
  constructor(services) {
    this.threadCount = 8;
    this.terminationDelay = 200;
    this.workerPool = [];
    this.queue = [];
    this.hydrator = services.serializer.Hydrator;
  }
  initializeWorkers() {
    while (this.workerPool.length < this.threadCount) {
      const worker = this.createWorker();
      worker.onReady(() => {
        if (this.queue.length > 0) {
          const deferred = this.queue.shift();
          if (deferred) {
            worker.lock();
            deferred.resolve(worker);
          }
        }
      });
      this.workerPool.push(worker);
    }
  }
  async parse(text, cancelToken) {
    const worker = await this.acquireParserWorker(cancelToken);
    const deferred = new Deferred();
    let timeout;
    const cancellation = cancelToken.onCancellationRequested(() => {
      timeout = setTimeout(() => {
        this.terminateWorker(worker);
      }, this.terminationDelay);
    });
    worker.parse(text).then((result) => {
      const hydrated = this.hydrator.hydrate(result);
      deferred.resolve(hydrated);
    }).catch((err) => {
      deferred.reject(err);
    }).finally(() => {
      cancellation.dispose();
      clearTimeout(timeout);
    });
    return deferred.promise;
  }
  terminateWorker(worker) {
    worker.terminate();
    const index = this.workerPool.indexOf(worker);
    if (index >= 0) {
      this.workerPool.splice(index, 1);
    }
  }
  async acquireParserWorker(cancelToken) {
    this.initializeWorkers();
    for (const worker of this.workerPool) {
      if (worker.ready) {
        worker.lock();
        return worker;
      }
    }
    const deferred = new Deferred();
    cancelToken.onCancellationRequested(() => {
      const index = this.queue.indexOf(deferred);
      if (index >= 0) {
        this.queue.splice(index, 1);
      }
      deferred.reject(OperationCancelled);
    });
    this.queue.push(deferred);
    return deferred.promise;
  }
};
var ParserWorker = class {
  get ready() {
    return this._ready;
  }
  get onReady() {
    return this.onReadyEmitter.event;
  }
  constructor(sendMessage, onMessage, onError, terminate) {
    this.onReadyEmitter = new event_exports.Emitter();
    this.deferred = new Deferred();
    this._ready = true;
    this._parsing = false;
    this.sendMessage = sendMessage;
    this._terminate = terminate;
    onMessage((result) => {
      const parseResult = result;
      this.deferred.resolve(parseResult);
      this.unlock();
    });
    onError((error) => {
      this.deferred.reject(error);
      this.unlock();
    });
  }
  terminate() {
    this.deferred.reject(OperationCancelled);
    this._terminate();
  }
  lock() {
    this._ready = false;
  }
  unlock() {
    this._parsing = false;
    this._ready = true;
    this.onReadyEmitter.fire();
  }
  parse(text) {
    if (this._parsing) {
      throw new Error("Parser worker is busy");
    }
    this._parsing = true;
    this.deferred = new Deferred();
    this.sendMessage(text);
    return this.deferred.promise;
  }
};

// node_modules/langium/lib/workspace/workspace-lock.js
var DefaultWorkspaceLock = class {
  constructor() {
    this.previousTokenSource = new cancellation_exports.CancellationTokenSource();
    this.writeQueue = [];
    this.readQueue = [];
    this.done = true;
  }
  write(action) {
    this.cancelWrite();
    const tokenSource = startCancelableOperation();
    this.previousTokenSource = tokenSource;
    return this.enqueue(this.writeQueue, action, tokenSource.token);
  }
  read(action) {
    return this.enqueue(this.readQueue, action);
  }
  enqueue(queue, action, cancellationToken = cancellation_exports.CancellationToken.None) {
    const deferred = new Deferred();
    const entry = {
      action,
      deferred,
      cancellationToken
    };
    queue.push(entry);
    this.performNextOperation();
    return deferred.promise;
  }
  async performNextOperation() {
    if (!this.done) {
      return;
    }
    const entries = [];
    if (this.writeQueue.length > 0) {
      entries.push(this.writeQueue.shift());
    } else if (this.readQueue.length > 0) {
      entries.push(...this.readQueue.splice(0, this.readQueue.length));
    } else {
      return;
    }
    this.done = false;
    await Promise.all(entries.map(async ({ action, deferred, cancellationToken }) => {
      try {
        const result = await Promise.resolve().then(() => action(cancellationToken));
        deferred.resolve(result);
      } catch (err) {
        if (isOperationCancelled(err)) {
          deferred.resolve(void 0);
        } else {
          deferred.reject(err);
        }
      }
    }));
    this.done = true;
    this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
};

// node_modules/langium/lib/serializer/hydrator.js
var DefaultHydrator = class {
  constructor(services) {
    this.grammarElementIdMap = new BiMap();
    this.tokenTypeIdMap = new BiMap();
    this.grammar = services.Grammar;
    this.lexer = services.parser.Lexer;
    this.linker = services.references.Linker;
  }
  dehydrate(result) {
    return {
      lexerErrors: result.lexerErrors,
      lexerReport: result.lexerReport ? this.dehydrateLexerReport(result.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: result.parserErrors.map((e) => Object.assign(Object.assign({}, e), { message: e.message })),
      value: this.dehydrateAstNode(result.value, this.createDehyrationContext(result.value))
    };
  }
  dehydrateLexerReport(lexerReport) {
    return lexerReport;
  }
  createDehyrationContext(node) {
    const astNodes = /* @__PURE__ */ new Map();
    const cstNodes = /* @__PURE__ */ new Map();
    for (const astNode of streamAst(node)) {
      astNodes.set(astNode, {});
    }
    if (node.$cstNode) {
      for (const cstNode of streamCst(node.$cstNode)) {
        cstNodes.set(cstNode, {});
      }
    }
    return {
      astNodes,
      cstNodes
    };
  }
  dehydrateAstNode(node, context) {
    const obj = context.astNodes.get(node);
    obj.$type = node.$type;
    obj.$containerIndex = node.$containerIndex;
    obj.$containerProperty = node.$containerProperty;
    if (node.$cstNode !== void 0) {
      obj.$cstNode = this.dehydrateCstNode(node.$cstNode, context);
    }
    for (const [name, value] of Object.entries(node)) {
      if (name.startsWith("$")) {
        continue;
      }
      if (Array.isArray(value)) {
        const arr = [];
        obj[name] = arr;
        for (const item of value) {
          if (isAstNode(item)) {
            arr.push(this.dehydrateAstNode(item, context));
          } else if (isReference(item)) {
            arr.push(this.dehydrateReference(item, context));
          } else {
            arr.push(item);
          }
        }
      } else if (isAstNode(value)) {
        obj[name] = this.dehydrateAstNode(value, context);
      } else if (isReference(value)) {
        obj[name] = this.dehydrateReference(value, context);
      } else if (value !== void 0) {
        obj[name] = value;
      }
    }
    return obj;
  }
  dehydrateReference(reference, context) {
    const obj = {};
    obj.$refText = reference.$refText;
    if (reference.$refNode) {
      obj.$refNode = context.cstNodes.get(reference.$refNode);
    }
    return obj;
  }
  dehydrateCstNode(node, context) {
    const cstNode = context.cstNodes.get(node);
    if (isRootCstNode(node)) {
      cstNode.fullText = node.fullText;
    } else {
      cstNode.grammarSource = this.getGrammarElementId(node.grammarSource);
    }
    cstNode.hidden = node.hidden;
    cstNode.astNode = context.astNodes.get(node.astNode);
    if (isCompositeCstNode(node)) {
      cstNode.content = node.content.map((child) => this.dehydrateCstNode(child, context));
    } else if (isLeafCstNode(node)) {
      cstNode.tokenType = node.tokenType.name;
      cstNode.offset = node.offset;
      cstNode.length = node.length;
      cstNode.startLine = node.range.start.line;
      cstNode.startColumn = node.range.start.character;
      cstNode.endLine = node.range.end.line;
      cstNode.endColumn = node.range.end.character;
    }
    return cstNode;
  }
  hydrate(result) {
    const node = result.value;
    const context = this.createHydrationContext(node);
    if ("$cstNode" in node) {
      this.hydrateCstNode(node.$cstNode, context);
    }
    return {
      lexerErrors: result.lexerErrors,
      lexerReport: result.lexerReport,
      parserErrors: result.parserErrors,
      value: this.hydrateAstNode(node, context)
    };
  }
  createHydrationContext(node) {
    const astNodes = /* @__PURE__ */ new Map();
    const cstNodes = /* @__PURE__ */ new Map();
    for (const astNode of streamAst(node)) {
      astNodes.set(astNode, {});
    }
    let root;
    if (node.$cstNode) {
      for (const cstNode of streamCst(node.$cstNode)) {
        let cst;
        if ("fullText" in cstNode) {
          cst = new RootCstNodeImpl(cstNode.fullText);
          root = cst;
        } else if ("content" in cstNode) {
          cst = new CompositeCstNodeImpl();
        } else if ("tokenType" in cstNode) {
          cst = this.hydrateCstLeafNode(cstNode);
        }
        if (cst) {
          cstNodes.set(cstNode, cst);
          cst.root = root;
        }
      }
    }
    return {
      astNodes,
      cstNodes
    };
  }
  hydrateAstNode(node, context) {
    const astNode = context.astNodes.get(node);
    astNode.$type = node.$type;
    astNode.$containerIndex = node.$containerIndex;
    astNode.$containerProperty = node.$containerProperty;
    if (node.$cstNode) {
      astNode.$cstNode = context.cstNodes.get(node.$cstNode);
    }
    for (const [name, value] of Object.entries(node)) {
      if (name.startsWith("$")) {
        continue;
      }
      if (Array.isArray(value)) {
        const arr = [];
        astNode[name] = arr;
        for (const item of value) {
          if (isAstNode(item)) {
            arr.push(this.setParent(this.hydrateAstNode(item, context), astNode));
          } else if (isReference(item)) {
            arr.push(this.hydrateReference(item, astNode, name, context));
          } else {
            arr.push(item);
          }
        }
      } else if (isAstNode(value)) {
        astNode[name] = this.setParent(this.hydrateAstNode(value, context), astNode);
      } else if (isReference(value)) {
        astNode[name] = this.hydrateReference(value, astNode, name, context);
      } else if (value !== void 0) {
        astNode[name] = value;
      }
    }
    return astNode;
  }
  setParent(node, parent) {
    node.$container = parent;
    return node;
  }
  hydrateReference(reference, node, name, context) {
    return this.linker.buildReference(node, name, context.cstNodes.get(reference.$refNode), reference.$refText);
  }
  hydrateCstNode(cstNode, context, num = 0) {
    const cstNodeObj = context.cstNodes.get(cstNode);
    if (typeof cstNode.grammarSource === "number") {
      cstNodeObj.grammarSource = this.getGrammarElement(cstNode.grammarSource);
    }
    cstNodeObj.astNode = context.astNodes.get(cstNode.astNode);
    if (isCompositeCstNode(cstNodeObj)) {
      for (const child of cstNode.content) {
        const hydrated = this.hydrateCstNode(child, context, num++);
        cstNodeObj.content.push(hydrated);
      }
    }
    return cstNodeObj;
  }
  hydrateCstLeafNode(cstNode) {
    const tokenType = this.getTokenType(cstNode.tokenType);
    const offset = cstNode.offset;
    const length = cstNode.length;
    const startLine = cstNode.startLine;
    const startColumn = cstNode.startColumn;
    const endLine = cstNode.endLine;
    const endColumn = cstNode.endColumn;
    const hidden = cstNode.hidden;
    const node = new LeafCstNodeImpl(offset, length, {
      start: {
        line: startLine,
        character: startColumn
      },
      end: {
        line: endLine,
        character: endColumn
      }
    }, tokenType, hidden);
    return node;
  }
  getTokenType(name) {
    return this.lexer.definition[name];
  }
  getGrammarElementId(node) {
    if (!node) {
      return void 0;
    }
    if (this.grammarElementIdMap.size === 0) {
      this.createGrammarElementIdMap();
    }
    return this.grammarElementIdMap.get(node);
  }
  getGrammarElement(id) {
    if (this.grammarElementIdMap.size === 0) {
      this.createGrammarElementIdMap();
    }
    const element = this.grammarElementIdMap.getKey(id);
    return element;
  }
  createGrammarElementIdMap() {
    let id = 0;
    for (const element of streamAst(this.grammar)) {
      if (isAbstractElement(element)) {
        this.grammarElementIdMap.set(element, id++);
      }
    }
  }
};

// node_modules/langium/lib/default-module.js
function createDefaultCoreModule(context) {
  return {
    documentation: {
      CommentProvider: (services) => new DefaultCommentProvider(services),
      DocumentationProvider: (services) => new JSDocDocumentationProvider(services)
    },
    parser: {
      AsyncParser: (services) => new DefaultAsyncParser(services),
      GrammarConfig: (services) => createGrammarConfig(services),
      LangiumParser: (services) => createLangiumParser(services),
      CompletionParser: (services) => createCompletionParser(services),
      ValueConverter: () => new DefaultValueConverter(),
      TokenBuilder: () => new DefaultTokenBuilder(),
      Lexer: (services) => new DefaultLexer(services),
      ParserErrorMessageProvider: () => new LangiumParserErrorMessageProvider(),
      LexerErrorMessageProvider: () => new DefaultLexerErrorMessageProvider()
    },
    workspace: {
      AstNodeLocator: () => new DefaultAstNodeLocator(),
      AstNodeDescriptionProvider: (services) => new DefaultAstNodeDescriptionProvider(services),
      ReferenceDescriptionProvider: (services) => new DefaultReferenceDescriptionProvider(services)
    },
    references: {
      Linker: (services) => new DefaultLinker(services),
      NameProvider: () => new DefaultNameProvider(),
      ScopeProvider: (services) => new DefaultScopeProvider(services),
      ScopeComputation: (services) => new DefaultScopeComputation(services),
      References: (services) => new DefaultReferences(services)
    },
    serializer: {
      Hydrator: (services) => new DefaultHydrator(services),
      JsonSerializer: (services) => new DefaultJsonSerializer(services)
    },
    validation: {
      DocumentValidator: (services) => new DefaultDocumentValidator(services),
      ValidationRegistry: (services) => new ValidationRegistry(services)
    },
    shared: () => context.shared
  };
}
function createDefaultSharedCoreModule(context) {
  return {
    ServiceRegistry: (services) => new DefaultServiceRegistry(services),
    workspace: {
      LangiumDocuments: (services) => new DefaultLangiumDocuments(services),
      LangiumDocumentFactory: (services) => new DefaultLangiumDocumentFactory(services),
      DocumentBuilder: (services) => new DefaultDocumentBuilder(services),
      IndexManager: (services) => new DefaultIndexManager(services),
      WorkspaceManager: (services) => new DefaultWorkspaceManager(services),
      FileSystemProvider: (services) => context.fileSystemProvider(services),
      WorkspaceLock: () => new DefaultWorkspaceLock(),
      ConfigurationProvider: (services) => new DefaultConfigurationProvider(services)
    }
  };
}

// node_modules/langium/lib/dependency-injection.js
var Module;
(function(Module2) {
  Module2.merge = (m1, m2) => _merge(_merge({}, m1), m2);
})(Module || (Module = {}));
function inject(module1, module2, module3, module4, module5, module6, module7, module8, module9) {
  const module = [module1, module2, module3, module4, module5, module6, module7, module8, module9].reduce(_merge, {});
  return _inject(module);
}
var isProxy = Symbol("isProxy");
function eagerLoad(item) {
  if (item && item[isProxy]) {
    for (const value of Object.values(item)) {
      eagerLoad(value);
    }
  }
  return item;
}
function _inject(module, injector) {
  const proxy = new Proxy({}, {
    deleteProperty: () => false,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (obj, prop) => {
      if (prop === isProxy) {
        return true;
      } else {
        return _resolve(obj, prop, module, injector || proxy);
      }
    },
    getOwnPropertyDescriptor: (obj, prop) => (_resolve(obj, prop, module, injector || proxy), Object.getOwnPropertyDescriptor(obj, prop)),
    // used by for..in
    has: (_, prop) => prop in module,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(module)]
    // used by for..in
  });
  return proxy;
}
var __requested__ = Symbol();
function _resolve(obj, prop, module, injector) {
  if (prop in obj) {
    if (obj[prop] instanceof Error) {
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: obj[prop] });
    }
    if (obj[prop] === __requested__) {
      throw new Error('Cycle detected. Please make "' + String(prop) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    }
    return obj[prop];
  } else if (prop in module) {
    const value = module[prop];
    obj[prop] = __requested__;
    try {
      obj[prop] = typeof value === "function" ? value(injector) : _inject(value, injector);
    } catch (error) {
      obj[prop] = error instanceof Error ? error : void 0;
      throw error;
    }
    return obj[prop];
  } else {
    return void 0;
  }
}
function _merge(target, source) {
  if (source) {
    for (const [key, value2] of Object.entries(source)) {
      if (value2 !== void 0) {
        const value1 = target[key];
        if (value1 !== null && value2 !== null && typeof value1 === "object" && typeof value2 === "object") {
          target[key] = _merge(value1, value2);
        } else {
          target[key] = value2;
        }
      }
    }
  }
  return target;
}

// node_modules/langium/lib/parser/indentation-aware.js
var indentationBuilderDefaultOptions = {
  indentTokenName: "INDENT",
  dedentTokenName: "DEDENT",
  whitespaceTokenName: "WS",
  ignoreIndentationDelimiters: []
};
var LexingMode;
(function(LexingMode2) {
  LexingMode2["REGULAR"] = "indentation-sensitive";
  LexingMode2["IGNORE_INDENTATION"] = "ignore-indentation";
})(LexingMode || (LexingMode = {}));
var IndentationAwareTokenBuilder = class extends DefaultTokenBuilder {
  constructor(options = indentationBuilderDefaultOptions) {
    super();
    this.indentationStack = [0];
    this.whitespaceRegExp = /[ \t]+/y;
    this.options = Object.assign(Object.assign({}, indentationBuilderDefaultOptions), options);
    this.indentTokenType = createToken({
      name: this.options.indentTokenName,
      pattern: this.indentMatcher.bind(this),
      line_breaks: false
    });
    this.dedentTokenType = createToken({
      name: this.options.dedentTokenName,
      pattern: this.dedentMatcher.bind(this),
      line_breaks: false
    });
  }
  buildTokens(grammar, options) {
    const tokenTypes = super.buildTokens(grammar, options);
    if (!isTokenTypeArray(tokenTypes)) {
      throw new Error("Invalid tokens built by default builder");
    }
    const { indentTokenName, dedentTokenName, whitespaceTokenName, ignoreIndentationDelimiters } = this.options;
    let dedent;
    let indent;
    let ws;
    const otherTokens = [];
    for (const tokenType of tokenTypes) {
      for (const [begin, end] of ignoreIndentationDelimiters) {
        if (tokenType.name === begin) {
          tokenType.PUSH_MODE = LexingMode.IGNORE_INDENTATION;
        } else if (tokenType.name === end) {
          tokenType.POP_MODE = true;
        }
      }
      if (tokenType.name === dedentTokenName) {
        dedent = tokenType;
      } else if (tokenType.name === indentTokenName) {
        indent = tokenType;
      } else if (tokenType.name === whitespaceTokenName) {
        ws = tokenType;
      } else {
        otherTokens.push(tokenType);
      }
    }
    if (!dedent || !indent || !ws) {
      throw new Error("Some indentation/whitespace tokens not found!");
    }
    if (ignoreIndentationDelimiters.length > 0) {
      const multiModeLexerDef = {
        modes: {
          [LexingMode.REGULAR]: [dedent, indent, ...otherTokens, ws],
          [LexingMode.IGNORE_INDENTATION]: [...otherTokens, ws]
        },
        defaultMode: LexingMode.REGULAR
      };
      return multiModeLexerDef;
    } else {
      return [dedent, indent, ws, ...otherTokens];
    }
  }
  flushLexingReport(text) {
    const result = super.flushLexingReport(text);
    return Object.assign(Object.assign({}, result), { remainingDedents: this.flushRemainingDedents(text) });
  }
  /**
   * Helper function to check if the current position is the start of a new line.
   *
   * @param text The full input string.
   * @param offset The current position at which to check
   * @returns Whether the current position is the start of a new line
   */
  isStartOfLine(text, offset) {
    return offset === 0 || "\r\n".includes(text[offset - 1]);
  }
  /**
   * A helper function used in matching both indents and dedents.
   *
   * @param text The full input string.
   * @param offset The current position at which to attempt a match
   * @param tokens Previously scanned tokens
   * @param groups Token Groups
   * @returns The current and previous indentation levels and the matched whitespace
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  matchWhitespace(text, offset, tokens, groups) {
    var _a6;
    this.whitespaceRegExp.lastIndex = offset;
    const match = this.whitespaceRegExp.exec(text);
    return {
      currIndentLevel: (_a6 = match === null || match === void 0 ? void 0 : match[0].length) !== null && _a6 !== void 0 ? _a6 : 0,
      prevIndentLevel: this.indentationStack.at(-1),
      match
    };
  }
  /**
   * Helper function to create an instance of an indentation token.
   *
   * @param tokenType Indent or dedent token type
   * @param text Full input string, used to calculate the line number
   * @param image The original image of the token (tabs or spaces)
   * @param offset Current position in the input string
   * @returns The indentation token instance
   */
  createIndentationTokenInstance(tokenType, text, image, offset) {
    const lineNumber = this.getLineNumber(text, offset);
    return createTokenInstance(tokenType, image, offset, offset + image.length, lineNumber, lineNumber, 1, image.length);
  }
  /**
   * Helper function to get the line number at a given offset.
   *
   * @param text Full input string, used to calculate the line number
   * @param offset Current position in the input string
   * @returns The line number at the given offset
   */
  getLineNumber(text, offset) {
    return text.substring(0, offset).split(/\r\n|\r|\n/).length;
  }
  /**
   * A custom pattern for matching indents
   *
   * @param text The full input string.
   * @param offset The offset at which to attempt a match
   * @param tokens Previously scanned tokens
   * @param groups Token Groups
   */
  indentMatcher(text, offset, tokens, groups) {
    if (!this.isStartOfLine(text, offset)) {
      return null;
    }
    const { currIndentLevel, prevIndentLevel, match } = this.matchWhitespace(text, offset, tokens, groups);
    if (currIndentLevel <= prevIndentLevel) {
      return null;
    }
    this.indentationStack.push(currIndentLevel);
    return match;
  }
  /**
   * A custom pattern for matching dedents
   *
   * @param text The full input string.
   * @param offset The offset at which to attempt a match
   * @param tokens Previously scanned tokens
   * @param groups Token Groups
   */
  dedentMatcher(text, offset, tokens, groups) {
    var _a6, _b, _c, _d;
    if (!this.isStartOfLine(text, offset)) {
      return null;
    }
    const { currIndentLevel, prevIndentLevel, match } = this.matchWhitespace(text, offset, tokens, groups);
    if (currIndentLevel >= prevIndentLevel) {
      return null;
    }
    const matchIndentIndex = this.indentationStack.lastIndexOf(currIndentLevel);
    if (matchIndentIndex === -1) {
      this.diagnostics.push({
        severity: "error",
        message: `Invalid dedent level ${currIndentLevel} at offset: ${offset}. Current indentation stack: ${this.indentationStack}`,
        offset,
        length: (_b = (_a6 = match === null || match === void 0 ? void 0 : match[0]) === null || _a6 === void 0 ? void 0 : _a6.length) !== null && _b !== void 0 ? _b : 0,
        line: this.getLineNumber(text, offset),
        column: 1
      });
      return null;
    }
    const numberOfDedents = this.indentationStack.length - matchIndentIndex - 1;
    const newlinesBeforeDedent = (_d = (_c = text.substring(0, offset).match(/[\r\n]+$/)) === null || _c === void 0 ? void 0 : _c[0].length) !== null && _d !== void 0 ? _d : 1;
    for (let i = 0; i < numberOfDedents; i++) {
      const token = this.createIndentationTokenInstance(
        this.dedentTokenType,
        text,
        "",
        // Dedents are 0-width tokens
        offset - (newlinesBeforeDedent - 1)
      );
      tokens.push(token);
      this.indentationStack.pop();
    }
    return null;
  }
  buildTerminalToken(terminal) {
    const tokenType = super.buildTerminalToken(terminal);
    const { indentTokenName, dedentTokenName, whitespaceTokenName } = this.options;
    if (tokenType.name === indentTokenName) {
      return this.indentTokenType;
    } else if (tokenType.name === dedentTokenName) {
      return this.dedentTokenType;
    } else if (tokenType.name === whitespaceTokenName) {
      return createToken({
        name: whitespaceTokenName,
        pattern: this.whitespaceRegExp,
        group: Lexer.SKIPPED
      });
    }
    return tokenType;
  }
  /**
   * Resets the indentation stack between different runs of the lexer
   *
   * @param text Full text that was tokenized
   * @returns Remaining dedent tokens to match all previous indents at the end of the file
   */
  flushRemainingDedents(text) {
    const remainingDedents = [];
    while (this.indentationStack.length > 1) {
      remainingDedents.push(this.createIndentationTokenInstance(this.dedentTokenType, text, "", text.length));
      this.indentationStack.pop();
    }
    this.indentationStack = [0];
    return remainingDedents;
  }
};
var IndentationAwareLexer = class extends DefaultLexer {
  constructor(services) {
    super(services);
    if (services.parser.TokenBuilder instanceof IndentationAwareTokenBuilder) {
      this.indentationTokenBuilder = services.parser.TokenBuilder;
    } else {
      throw new Error("IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder");
    }
  }
  tokenize(text, options = DEFAULT_TOKENIZE_OPTIONS) {
    const result = super.tokenize(text);
    const report = result.report;
    if ((options === null || options === void 0 ? void 0 : options.mode) === "full") {
      result.tokens.push(...report.remainingDedents);
    }
    report.remainingDedents = [];
    const { indentTokenType, dedentTokenType } = this.indentationTokenBuilder;
    const indentTokenIdx = indentTokenType.tokenTypeIdx;
    const dedentTokenIdx = dedentTokenType.tokenTypeIdx;
    const cleanTokens = [];
    const length = result.tokens.length - 1;
    for (let i = 0; i < length; i++) {
      const token = result.tokens[i];
      const nextToken = result.tokens[i + 1];
      if (token.tokenTypeIdx === indentTokenIdx && nextToken.tokenTypeIdx === dedentTokenIdx) {
        i++;
        continue;
      }
      cleanTokens.push(token);
    }
    if (length >= 0) {
      cleanTokens.push(result.tokens[length]);
    }
    result.tokens = cleanTokens;
    return result;
  }
};

// node_modules/langium/lib/utils/index.js
var utils_exports = {};
__export(utils_exports, {
  AstUtils: () => ast_utils_exports,
  BiMap: () => BiMap,
  Cancellation: () => cancellation_exports,
  ContextCache: () => ContextCache,
  CstUtils: () => cst_utils_exports,
  DONE_RESULT: () => DONE_RESULT,
  Deferred: () => Deferred,
  Disposable: () => Disposable,
  DisposableCache: () => DisposableCache,
  DocumentCache: () => DocumentCache,
  EMPTY_STREAM: () => EMPTY_STREAM,
  ErrorWithLocation: () => ErrorWithLocation,
  GrammarUtils: () => grammar_utils_exports,
  MultiMap: () => MultiMap,
  OperationCancelled: () => OperationCancelled,
  Reduction: () => Reduction,
  RegExpUtils: () => regexp_utils_exports,
  SimpleCache: () => SimpleCache,
  StreamImpl: () => StreamImpl,
  TreeStreamImpl: () => TreeStreamImpl,
  URI: () => URI2,
  UriUtils: () => UriUtils,
  WorkspaceCache: () => WorkspaceCache,
  assertUnreachable: () => assertUnreachable,
  delayNextTick: () => delayNextTick,
  interruptAndCheck: () => interruptAndCheck,
  isOperationCancelled: () => isOperationCancelled,
  loadGrammarFromJson: () => loadGrammarFromJson,
  setInterruptionPeriod: () => setInterruptionPeriod,
  startCancelableOperation: () => startCancelableOperation,
  stream: () => stream
});
__reExport(utils_exports, event_exports);

// node_modules/langium/lib/workspace/file-system-provider.js
var EmptyFileSystemProvider = class {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
};
var EmptyFileSystem = {
  fileSystemProvider: () => new EmptyFileSystemProvider()
};

// node_modules/langium/lib/utils/grammar-loader.js
var minimalGrammarModule = {
  Grammar: () => void 0,
  LanguageMetaData: () => ({
    caseInsensitive: false,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
};
var minimalSharedGrammarModule = {
  AstReflection: () => new LangiumGrammarAstReflection()
};
function createMinimalGrammarServices() {
  const shared = inject(createDefaultSharedCoreModule(EmptyFileSystem), minimalSharedGrammarModule);
  const grammar = inject(createDefaultCoreModule({ shared }), minimalGrammarModule);
  shared.ServiceRegistry.register(grammar);
  return grammar;
}
function loadGrammarFromJson(json) {
  var _a6;
  const services = createMinimalGrammarServices();
  const astNode = services.serializer.JsonSerializer.deserialize(json);
  services.shared.workspace.LangiumDocumentFactory.fromModel(astNode, URI2.parse(`memory://${(_a6 = astNode.name) !== null && _a6 !== void 0 ? _a6 : "grammar"}.langium`));
  return astNode;
}

// node_modules/langium/lib/index.js
__reExport(lib_exports, utils_exports);

// node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-FPAJGGOC.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var Statement = "Statement";
var Architecture = "Architecture";
function isArchitecture(item) {
  return reflection2.isInstance(item, Architecture);
}
__name(isArchitecture, "isArchitecture");
var Axis = "Axis";
var Branch = "Branch";
function isBranch(item) {
  return reflection2.isInstance(item, Branch);
}
__name(isBranch, "isBranch");
var Checkout = "Checkout";
var CherryPicking = "CherryPicking";
var ClassDefStatement = "ClassDefStatement";
var Commit = "Commit";
function isCommit(item) {
  return reflection2.isInstance(item, Commit);
}
__name(isCommit, "isCommit");
var Curve = "Curve";
var Edge = "Edge";
var Entry = "Entry";
var GitGraph = "GitGraph";
function isGitGraph(item) {
  return reflection2.isInstance(item, GitGraph);
}
__name(isGitGraph, "isGitGraph");
var Group2 = "Group";
var Info = "Info";
function isInfo(item) {
  return reflection2.isInstance(item, Info);
}
__name(isInfo, "isInfo");
var Item = "Item";
var Junction = "Junction";
var Merge = "Merge";
function isMerge(item) {
  return reflection2.isInstance(item, Merge);
}
__name(isMerge, "isMerge");
var Option2 = "Option";
var Packet = "Packet";
function isPacket(item) {
  return reflection2.isInstance(item, Packet);
}
__name(isPacket, "isPacket");
var PacketBlock = "PacketBlock";
function isPacketBlock(item) {
  return reflection2.isInstance(item, PacketBlock);
}
__name(isPacketBlock, "isPacketBlock");
var Pie = "Pie";
function isPie(item) {
  return reflection2.isInstance(item, Pie);
}
__name(isPie, "isPie");
var PieSection = "PieSection";
function isPieSection(item) {
  return reflection2.isInstance(item, PieSection);
}
__name(isPieSection, "isPieSection");
var Radar = "Radar";
var Service = "Service";
var Treemap = "Treemap";
function isTreemap(item) {
  return reflection2.isInstance(item, Treemap);
}
__name(isTreemap, "isTreemap");
var TreemapRow = "TreemapRow";
var Direction = "Direction";
var Leaf = "Leaf";
var Section = "Section";
var _a;
var MermaidAstReflection = (_a = class extends AbstractAstReflection {
  getAllTypes() {
    return [Architecture, Axis, Branch, Checkout, CherryPicking, ClassDefStatement, Commit, Curve, Direction, Edge, Entry, GitGraph, Group2, Info, Item, Junction, Leaf, Merge, Option2, Packet, PacketBlock, Pie, PieSection, Radar, Section, Service, Statement, Treemap, TreemapRow];
  }
  computeIsSubtype(subtype, supertype) {
    switch (subtype) {
      case Branch:
      case Checkout:
      case CherryPicking:
      case Commit:
      case Merge: {
        return this.isSubtype(Statement, supertype);
      }
      case Direction: {
        return this.isSubtype(GitGraph, supertype);
      }
      case Leaf:
      case Section: {
        return this.isSubtype(Item, supertype);
      }
      default: {
        return false;
      }
    }
  }
  getReferenceType(refInfo) {
    const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
    switch (referenceId) {
      case "Entry:axis": {
        return Axis;
      }
      default: {
        throw new Error(`${referenceId} is not a valid reference id.`);
      }
    }
  }
  getTypeMetaData(type) {
    switch (type) {
      case Architecture: {
        return {
          name: Architecture,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "edges", defaultValue: [] },
            { name: "groups", defaultValue: [] },
            { name: "junctions", defaultValue: [] },
            { name: "services", defaultValue: [] },
            { name: "title" }
          ]
        };
      }
      case Axis: {
        return {
          name: Axis,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      }
      case Branch: {
        return {
          name: Branch,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      }
      case Checkout: {
        return {
          name: Checkout,
          properties: [
            { name: "branch" }
          ]
        };
      }
      case CherryPicking: {
        return {
          name: CherryPicking,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      }
      case ClassDefStatement: {
        return {
          name: ClassDefStatement,
          properties: [
            { name: "className" },
            { name: "styleText" }
          ]
        };
      }
      case Commit: {
        return {
          name: Commit,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      }
      case Curve: {
        return {
          name: Curve,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      }
      case Edge: {
        return {
          name: Edge,
          properties: [
            { name: "lhsDir" },
            { name: "lhsGroup", defaultValue: false },
            { name: "lhsId" },
            { name: "lhsInto", defaultValue: false },
            { name: "rhsDir" },
            { name: "rhsGroup", defaultValue: false },
            { name: "rhsId" },
            { name: "rhsInto", defaultValue: false },
            { name: "title" }
          ]
        };
      }
      case Entry: {
        return {
          name: Entry,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      }
      case GitGraph: {
        return {
          name: GitGraph,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      }
      case Group2: {
        return {
          name: Group2,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      }
      case Info: {
        return {
          name: Info,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      }
      case Item: {
        return {
          name: Item,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      }
      case Junction: {
        return {
          name: Junction,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      }
      case Merge: {
        return {
          name: Merge,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      }
      case Option2: {
        return {
          name: Option2,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: false }
          ]
        };
      }
      case Packet: {
        return {
          name: Packet,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      }
      case PacketBlock: {
        return {
          name: PacketBlock,
          properties: [
            { name: "bits" },
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      }
      case Pie: {
        return {
          name: Pie,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: false },
            { name: "title" }
          ]
        };
      }
      case PieSection: {
        return {
          name: PieSection,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      }
      case Radar: {
        return {
          name: Radar,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      }
      case Service: {
        return {
          name: Service,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      }
      case Treemap: {
        return {
          name: Treemap,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" },
            { name: "TreemapRows", defaultValue: [] }
          ]
        };
      }
      case TreemapRow: {
        return {
          name: TreemapRow,
          properties: [
            { name: "indent" },
            { name: "item" }
          ]
        };
      }
      case Direction: {
        return {
          name: Direction,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      }
      case Leaf: {
        return {
          name: Leaf,
          properties: [
            { name: "classSelector" },
            { name: "name" },
            { name: "value" }
          ]
        };
      }
      case Section: {
        return {
          name: Section,
          properties: [
            { name: "classSelector" },
            { name: "name" }
          ]
        };
      }
      default: {
        return {
          name: type,
          properties: []
        };
      }
    }
  }
}, __name(_a, "MermaidAstReflection"), _a);
var reflection2 = new MermaidAstReflection();
var loadedInfoGrammar;
var InfoGrammar = __name(() => loadedInfoGrammar ?? (loadedInfoGrammar = loadGrammarFromJson(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "InfoGrammar");
var loadedPacketGrammar;
var PacketGrammar = __name(() => loadedPacketGrammar ?? (loadedPacketGrammar = loadGrammarFromJson(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PacketGrammar");
var loadedPieGrammar;
var PieGrammar = __name(() => loadedPieGrammar ?? (loadedPieGrammar = loadGrammarFromJson(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "PieGrammar");
var loadedArchitectureGrammar;
var ArchitectureGrammar = __name(() => loadedArchitectureGrammar ?? (loadedArchitectureGrammar = loadGrammarFromJson(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "ArchitectureGrammar");
var loadedGitGraphGrammar;
var GitGraphGrammar = __name(() => loadedGitGraphGrammar ?? (loadedGitGraphGrammar = loadGrammarFromJson(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar");
var loadedRadarGrammar;
var RadarGrammar = __name(() => loadedRadarGrammar ?? (loadedRadarGrammar = loadGrammarFromJson(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar");
var loadedTreemapGrammar;
var TreemapGrammar = __name(() => loadedTreemapGrammar ?? (loadedTreemapGrammar = loadGrammarFromJson(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammar");
var InfoLanguageMetaData = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var PacketLanguageMetaData = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var PieLanguageMetaData = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var ArchitectureLanguageMetaData = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var GitGraphLanguageMetaData = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var RadarLanguageMetaData = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var TreemapLanguageMetaData = {
  languageId: "treemap",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
};
var MermaidGeneratedSharedModule = {
  AstReflection: __name(() => new MermaidAstReflection(), "AstReflection")
};
var InfoGeneratedModule = {
  Grammar: __name(() => InfoGrammar(), "Grammar"),
  LanguageMetaData: __name(() => InfoLanguageMetaData, "LanguageMetaData"),
  parser: {}
};
var PacketGeneratedModule = {
  Grammar: __name(() => PacketGrammar(), "Grammar"),
  LanguageMetaData: __name(() => PacketLanguageMetaData, "LanguageMetaData"),
  parser: {}
};
var PieGeneratedModule = {
  Grammar: __name(() => PieGrammar(), "Grammar"),
  LanguageMetaData: __name(() => PieLanguageMetaData, "LanguageMetaData"),
  parser: {}
};
var ArchitectureGeneratedModule = {
  Grammar: __name(() => ArchitectureGrammar(), "Grammar"),
  LanguageMetaData: __name(() => ArchitectureLanguageMetaData, "LanguageMetaData"),
  parser: {}
};
var GitGraphGeneratedModule = {
  Grammar: __name(() => GitGraphGrammar(), "Grammar"),
  LanguageMetaData: __name(() => GitGraphLanguageMetaData, "LanguageMetaData"),
  parser: {}
};
var RadarGeneratedModule = {
  Grammar: __name(() => RadarGrammar(), "Grammar"),
  LanguageMetaData: __name(() => RadarLanguageMetaData, "LanguageMetaData"),
  parser: {}
};
var TreemapGeneratedModule = {
  Grammar: __name(() => TreemapGrammar(), "Grammar"),
  LanguageMetaData: __name(() => TreemapLanguageMetaData, "LanguageMetaData"),
  parser: {}
};
var accessibilityDescrRegex = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/;
var accessibilityTitleRegex = /accTitle[\t ]*:([^\n\r]*)/;
var titleRegex = /title([\t ][^\n\r]*|)/;
var rulesRegexes = {
  ACC_DESCR: accessibilityDescrRegex,
  ACC_TITLE: accessibilityTitleRegex,
  TITLE: titleRegex
};
var _a2;
var AbstractMermaidValueConverter = (_a2 = class extends DefaultValueConverter {
  runConverter(rule, input, cstNode) {
    let value = this.runCommonConverter(rule, input, cstNode);
    if (value === void 0) {
      value = this.runCustomConverter(rule, input, cstNode);
    }
    if (value === void 0) {
      return super.runConverter(rule, input, cstNode);
    }
    return value;
  }
  runCommonConverter(rule, input, _cstNode) {
    const regex = rulesRegexes[rule.name];
    if (regex === void 0) {
      return void 0;
    }
    const match = regex.exec(input);
    if (match === null) {
      return void 0;
    }
    if (match[1] !== void 0) {
      return match[1].trim().replace(/[\t ]{2,}/gm, " ");
    }
    if (match[2] !== void 0) {
      return match[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, "\n");
    }
    return void 0;
  }
}, __name(_a2, "AbstractMermaidValueConverter"), _a2);
var _a3;
var CommonValueConverter = (_a3 = class extends AbstractMermaidValueConverter {
  runCustomConverter(_rule, _input, _cstNode) {
    return void 0;
  }
}, __name(_a3, "CommonValueConverter"), _a3);
var _a4;
var AbstractMermaidTokenBuilder = (_a4 = class extends DefaultTokenBuilder {
  constructor(keywords) {
    super();
    this.keywords = new Set(keywords);
  }
  buildKeywordTokens(rules, terminalTokens, options) {
    const tokenTypes = super.buildKeywordTokens(rules, terminalTokens, options);
    tokenTypes.forEach((tokenType) => {
      if (this.keywords.has(tokenType.name) && tokenType.PATTERN !== void 0) {
        tokenType.PATTERN = new RegExp(tokenType.PATTERN.toString() + "(?:(?=%%)|(?!\\S))");
      }
    });
    return tokenTypes;
  }
}, __name(_a4, "AbstractMermaidTokenBuilder"), _a4);
var _a5;
var CommonTokenBuilder = (_a5 = class extends AbstractMermaidTokenBuilder {
}, __name(_a5, "CommonTokenBuilder"), _a5);

export {
  createDefaultCoreModule,
  createDefaultSharedCoreModule,
  inject,
  EmptyFileSystem,
  lib_exports,
  __name,
  MermaidGeneratedSharedModule,
  InfoGeneratedModule,
  PacketGeneratedModule,
  PieGeneratedModule,
  ArchitectureGeneratedModule,
  GitGraphGeneratedModule,
  RadarGeneratedModule,
  TreemapGeneratedModule,
  AbstractMermaidValueConverter,
  CommonValueConverter,
  AbstractMermaidTokenBuilder
};
//# sourceMappingURL=chunk-DFPXKSZ7.js.map
