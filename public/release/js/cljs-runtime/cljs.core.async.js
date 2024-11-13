goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14458 = (function (f,blockable,meta14459){
this.f = f;
this.blockable = blockable;
this.meta14459 = meta14459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14460,meta14459__$1){
var self__ = this;
var _14460__$1 = this;
return (new cljs.core.async.t_cljs$core$async14458(self__.f,self__.blockable,meta14459__$1));
}));

(cljs.core.async.t_cljs$core$async14458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14460){
var self__ = this;
var _14460__$1 = this;
return self__.meta14459;
}));

(cljs.core.async.t_cljs$core$async14458.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14458.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14459","meta14459",-364567574,null)], null);
}));

(cljs.core.async.t_cljs$core$async14458.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14458");

(cljs.core.async.t_cljs$core$async14458.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14458");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14458.
 */
cljs.core.async.__GT_t_cljs$core$async14458 = (function cljs$core$async$__GT_t_cljs$core$async14458(f,blockable,meta14459){
return (new cljs.core.async.t_cljs$core$async14458(f,blockable,meta14459));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14453 = arguments.length;
switch (G__14453) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14458(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14482 = arguments.length;
switch (G__14482) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14493 = arguments.length;
switch (G__14493) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14500 = arguments.length;
switch (G__14500) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18187 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18187) : fn1.call(null, val_18187));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18187) : fn1.call(null, val_18187));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14517 = arguments.length;
switch (G__14517) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18197 = n;
var x_18198 = (0);
while(true){
if((x_18198 < n__5593__auto___18197)){
(a[x_18198] = x_18198);

var G__18200 = (x_18198 + (1));
x_18198 = G__18200;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14526 = (function (flag,meta14528){
this.flag = flag;
this.meta14528 = meta14528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14529,meta14528__$1){
var self__ = this;
var _14529__$1 = this;
return (new cljs.core.async.t_cljs$core$async14526(self__.flag,meta14528__$1));
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14529){
var self__ = this;
var _14529__$1 = this;
return self__.meta14528;
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14528","meta14528",-1883066799,null)], null);
}));

(cljs.core.async.t_cljs$core$async14526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14526");

(cljs.core.async.t_cljs$core$async14526.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14526.
 */
cljs.core.async.__GT_t_cljs$core$async14526 = (function cljs$core$async$__GT_t_cljs$core$async14526(flag,meta14528){
return (new cljs.core.async.t_cljs$core$async14526(flag,meta14528));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14526(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14545 = (function (flag,cb,meta14546){
this.flag = flag;
this.cb = cb;
this.meta14546 = meta14546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14547,meta14546__$1){
var self__ = this;
var _14547__$1 = this;
return (new cljs.core.async.t_cljs$core$async14545(self__.flag,self__.cb,meta14546__$1));
}));

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14547){
var self__ = this;
var _14547__$1 = this;
return self__.meta14546;
}));

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14546","meta14546",-1742636322,null)], null);
}));

(cljs.core.async.t_cljs$core$async14545.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14545");

(cljs.core.async.t_cljs$core$async14545.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14545");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14545.
 */
cljs.core.async.__GT_t_cljs$core$async14545 = (function cljs$core$async$__GT_t_cljs$core$async14545(flag,cb,meta14546){
return (new cljs.core.async.t_cljs$core$async14545(flag,cb,meta14546));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14545(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14557_SHARP_){
var G__14572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14557_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14572) : fret.call(null, G__14572));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14558_SHARP_){
var G__14573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14558_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14573) : fret.call(null, G__14573));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18213 = (i + (1));
i = G__18213;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18215 = arguments.length;
var i__5727__auto___18216 = (0);
while(true){
if((i__5727__auto___18216 < len__5726__auto___18215)){
args__5732__auto__.push((arguments[i__5727__auto___18216]));

var G__18217 = (i__5727__auto___18216 + (1));
i__5727__auto___18216 = G__18217;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14583){
var map__14584 = p__14583;
var map__14584__$1 = cljs.core.__destructure_map(map__14584);
var opts = map__14584__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14577){
var G__14578 = cljs.core.first(seq14577);
var seq14577__$1 = cljs.core.next(seq14577);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14578,seq14577__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14590 = arguments.length;
switch (G__14590) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14357__auto___18220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_14633){
var state_val_14634 = (state_14633[(1)]);
if((state_val_14634 === (7))){
var inst_14625 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14641_18221 = state_14633__$1;
(statearr_14641_18221[(2)] = inst_14625);

(statearr_14641_18221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (1))){
var state_14633__$1 = state_14633;
var statearr_14642_18222 = state_14633__$1;
(statearr_14642_18222[(2)] = null);

(statearr_14642_18222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (4))){
var inst_14600 = (state_14633[(7)]);
var inst_14600__$1 = (state_14633[(2)]);
var inst_14601 = (inst_14600__$1 == null);
var state_14633__$1 = (function (){var statearr_14644 = state_14633;
(statearr_14644[(7)] = inst_14600__$1);

return statearr_14644;
})();
if(cljs.core.truth_(inst_14601)){
var statearr_14645_18224 = state_14633__$1;
(statearr_14645_18224[(1)] = (5));

} else {
var statearr_14646_18227 = state_14633__$1;
(statearr_14646_18227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (13))){
var state_14633__$1 = state_14633;
var statearr_14653_18228 = state_14633__$1;
(statearr_14653_18228[(2)] = null);

(statearr_14653_18228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (6))){
var inst_14600 = (state_14633[(7)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14633__$1,(11),to,inst_14600);
} else {
if((state_val_14634 === (3))){
var inst_14627 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14633__$1,inst_14627);
} else {
if((state_val_14634 === (12))){
var state_14633__$1 = state_14633;
var statearr_14655_18231 = state_14633__$1;
(statearr_14655_18231[(2)] = null);

(statearr_14655_18231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (2))){
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14633__$1,(4),from);
} else {
if((state_val_14634 === (11))){
var inst_14616 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14616)){
var statearr_14657_18236 = state_14633__$1;
(statearr_14657_18236[(1)] = (12));

} else {
var statearr_14658_18237 = state_14633__$1;
(statearr_14658_18237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (9))){
var state_14633__$1 = state_14633;
var statearr_14662_18238 = state_14633__$1;
(statearr_14662_18238[(2)] = null);

(statearr_14662_18238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (5))){
var state_14633__$1 = state_14633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14663_18239 = state_14633__$1;
(statearr_14663_18239[(1)] = (8));

} else {
var statearr_14667_18240 = state_14633__$1;
(statearr_14667_18240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (14))){
var inst_14623 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14669_18241 = state_14633__$1;
(statearr_14669_18241[(2)] = inst_14623);

(statearr_14669_18241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (10))){
var inst_14612 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14671_18242 = state_14633__$1;
(statearr_14671_18242[(2)] = inst_14612);

(statearr_14671_18242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (8))){
var inst_14604 = cljs.core.async.close_BANG_(to);
var state_14633__$1 = state_14633;
var statearr_14672_18243 = state_14633__$1;
(statearr_14672_18243[(2)] = inst_14604);

(statearr_14672_18243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_14673 = [null,null,null,null,null,null,null,null];
(statearr_14673[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_14673[(1)] = (1));

return statearr_14673;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_14633){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_14633);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e14674){var ex__13275__auto__ = e14674;
var statearr_14675_18250 = state_14633;
(statearr_14675_18250[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_14633[(4)]))){
var statearr_14676_18251 = state_14633;
(statearr_14676_18251[(1)] = cljs.core.first((state_14633[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18252 = state_14633;
state_14633 = G__18252;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_14633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_14633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_14678 = f__14358__auto__();
(statearr_14678[(6)] = c__14357__auto___18220);

return statearr_14678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14682){
var vec__14683 = p__14682;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14683,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14683,(1),null);
var job = vec__14683;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14357__auto___18259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_14690){
var state_val_14691 = (state_14690[(1)]);
if((state_val_14691 === (1))){
var state_14690__$1 = state_14690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14690__$1,(2),res,v);
} else {
if((state_val_14691 === (2))){
var inst_14687 = (state_14690[(2)]);
var inst_14688 = cljs.core.async.close_BANG_(res);
var state_14690__$1 = (function (){var statearr_14699 = state_14690;
(statearr_14699[(7)] = inst_14687);

return statearr_14699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14690__$1,inst_14688);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0 = (function (){
var statearr_14702 = [null,null,null,null,null,null,null,null];
(statearr_14702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__);

(statearr_14702[(1)] = (1));

return statearr_14702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1 = (function (state_14690){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_14690);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e14703){var ex__13275__auto__ = e14703;
var statearr_14704_18261 = state_14690;
(statearr_14704_18261[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_14690[(4)]))){
var statearr_14705_18262 = state_14690;
(statearr_14705_18262[(1)] = cljs.core.first((state_14690[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18263 = state_14690;
state_14690 = G__18263;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = function(state_14690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1.call(this,state_14690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_14706 = f__14358__auto__();
(statearr_14706[(6)] = c__14357__auto___18259);

return statearr_14706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14709){
var vec__14711 = p__14709;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14711,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14711,(1),null);
var job = vec__14711;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18270 = n;
var __18274 = (0);
while(true){
if((__18274 < n__5593__auto___18270)){
var G__14714_18284 = type;
var G__14714_18285__$1 = (((G__14714_18284 instanceof cljs.core.Keyword))?G__14714_18284.fqn:null);
switch (G__14714_18285__$1) {
case "compute":
var c__14357__auto___18290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18274,c__14357__auto___18290,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async){
return (function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = ((function (__18274,c__14357__auto___18290,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async){
return (function (state_14731){
var state_val_14732 = (state_14731[(1)]);
if((state_val_14732 === (1))){
var state_14731__$1 = state_14731;
var statearr_14733_18292 = state_14731__$1;
(statearr_14733_18292[(2)] = null);

(statearr_14733_18292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (2))){
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14731__$1,(4),jobs);
} else {
if((state_val_14732 === (3))){
var inst_14729 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14731__$1,inst_14729);
} else {
if((state_val_14732 === (4))){
var inst_14721 = (state_14731[(2)]);
var inst_14722 = process__$1(inst_14721);
var state_14731__$1 = state_14731;
if(cljs.core.truth_(inst_14722)){
var statearr_14737_18295 = state_14731__$1;
(statearr_14737_18295[(1)] = (5));

} else {
var statearr_14738_18296 = state_14731__$1;
(statearr_14738_18296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (5))){
var state_14731__$1 = state_14731;
var statearr_14739_18297 = state_14731__$1;
(statearr_14739_18297[(2)] = null);

(statearr_14739_18297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (6))){
var state_14731__$1 = state_14731;
var statearr_14740_18303 = state_14731__$1;
(statearr_14740_18303[(2)] = null);

(statearr_14740_18303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (7))){
var inst_14727 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14744_18306 = state_14731__$1;
(statearr_14744_18306[(2)] = inst_14727);

(statearr_14744_18306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18274,c__14357__auto___18290,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async))
;
return ((function (__18274,switch__13271__auto__,c__14357__auto___18290,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0 = (function (){
var statearr_14749 = [null,null,null,null,null,null,null];
(statearr_14749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__);

(statearr_14749[(1)] = (1));

return statearr_14749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1 = (function (state_14731){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_14731);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e14750){var ex__13275__auto__ = e14750;
var statearr_14751_18308 = state_14731;
(statearr_14751_18308[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_14731[(4)]))){
var statearr_14754_18313 = state_14731;
(statearr_14754_18313[(1)] = cljs.core.first((state_14731[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18315 = state_14731;
state_14731 = G__18315;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = function(state_14731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1.call(this,state_14731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__;
})()
;})(__18274,switch__13271__auto__,c__14357__auto___18290,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async))
})();
var state__14359__auto__ = (function (){var statearr_14759 = f__14358__auto__();
(statearr_14759[(6)] = c__14357__auto___18290);

return statearr_14759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
});})(__18274,c__14357__auto___18290,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async))
);


break;
case "async":
var c__14357__auto___18319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18274,c__14357__auto___18319,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async){
return (function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = ((function (__18274,c__14357__auto___18319,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async){
return (function (state_14776){
var state_val_14777 = (state_14776[(1)]);
if((state_val_14777 === (1))){
var state_14776__$1 = state_14776;
var statearr_14784_18322 = state_14776__$1;
(statearr_14784_18322[(2)] = null);

(statearr_14784_18322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (2))){
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14776__$1,(4),jobs);
} else {
if((state_val_14777 === (3))){
var inst_14774 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14776__$1,inst_14774);
} else {
if((state_val_14777 === (4))){
var inst_14766 = (state_14776[(2)]);
var inst_14767 = async(inst_14766);
var state_14776__$1 = state_14776;
if(cljs.core.truth_(inst_14767)){
var statearr_14789_18325 = state_14776__$1;
(statearr_14789_18325[(1)] = (5));

} else {
var statearr_14790_18326 = state_14776__$1;
(statearr_14790_18326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (5))){
var state_14776__$1 = state_14776;
var statearr_14794_18327 = state_14776__$1;
(statearr_14794_18327[(2)] = null);

(statearr_14794_18327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (6))){
var state_14776__$1 = state_14776;
var statearr_14797_18329 = state_14776__$1;
(statearr_14797_18329[(2)] = null);

(statearr_14797_18329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (7))){
var inst_14772 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14799_18330 = state_14776__$1;
(statearr_14799_18330[(2)] = inst_14772);

(statearr_14799_18330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18274,c__14357__auto___18319,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async))
;
return ((function (__18274,switch__13271__auto__,c__14357__auto___18319,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0 = (function (){
var statearr_14806 = [null,null,null,null,null,null,null];
(statearr_14806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__);

(statearr_14806[(1)] = (1));

return statearr_14806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1 = (function (state_14776){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_14776);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e14808){var ex__13275__auto__ = e14808;
var statearr_14809_18337 = state_14776;
(statearr_14809_18337[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_14776[(4)]))){
var statearr_14811_18338 = state_14776;
(statearr_14811_18338[(1)] = cljs.core.first((state_14776[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18341 = state_14776;
state_14776 = G__18341;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = function(state_14776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1.call(this,state_14776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__;
})()
;})(__18274,switch__13271__auto__,c__14357__auto___18319,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async))
})();
var state__14359__auto__ = (function (){var statearr_14815 = f__14358__auto__();
(statearr_14815[(6)] = c__14357__auto___18319);

return statearr_14815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
});})(__18274,c__14357__auto___18319,G__14714_18284,G__14714_18285__$1,n__5593__auto___18270,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14714_18285__$1)].join('')));

}

var G__18342 = (__18274 + (1));
__18274 = G__18342;
continue;
} else {
}
break;
}

var c__14357__auto___18343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_14848){
var state_val_14849 = (state_14848[(1)]);
if((state_val_14849 === (7))){
var inst_14842 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
var statearr_14863_18344 = state_14848__$1;
(statearr_14863_18344[(2)] = inst_14842);

(statearr_14863_18344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (1))){
var state_14848__$1 = state_14848;
var statearr_14866_18345 = state_14848__$1;
(statearr_14866_18345[(2)] = null);

(statearr_14866_18345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (4))){
var inst_14822 = (state_14848[(7)]);
var inst_14822__$1 = (state_14848[(2)]);
var inst_14823 = (inst_14822__$1 == null);
var state_14848__$1 = (function (){var statearr_14872 = state_14848;
(statearr_14872[(7)] = inst_14822__$1);

return statearr_14872;
})();
if(cljs.core.truth_(inst_14823)){
var statearr_14877_18347 = state_14848__$1;
(statearr_14877_18347[(1)] = (5));

} else {
var statearr_14880_18351 = state_14848__$1;
(statearr_14880_18351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (6))){
var inst_14829 = (state_14848[(8)]);
var inst_14822 = (state_14848[(7)]);
var inst_14829__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14834 = [inst_14822,inst_14829__$1];
var inst_14835 = (new cljs.core.PersistentVector(null,2,(5),inst_14832,inst_14834,null));
var state_14848__$1 = (function (){var statearr_14884 = state_14848;
(statearr_14884[(8)] = inst_14829__$1);

return statearr_14884;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14848__$1,(8),jobs,inst_14835);
} else {
if((state_val_14849 === (3))){
var inst_14845 = (state_14848[(2)]);
var state_14848__$1 = state_14848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14848__$1,inst_14845);
} else {
if((state_val_14849 === (2))){
var state_14848__$1 = state_14848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14848__$1,(4),from);
} else {
if((state_val_14849 === (9))){
var inst_14839 = (state_14848[(2)]);
var state_14848__$1 = (function (){var statearr_14889 = state_14848;
(statearr_14889[(9)] = inst_14839);

return statearr_14889;
})();
var statearr_14890_18355 = state_14848__$1;
(statearr_14890_18355[(2)] = null);

(statearr_14890_18355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (5))){
var inst_14825 = cljs.core.async.close_BANG_(jobs);
var state_14848__$1 = state_14848;
var statearr_14894_18361 = state_14848__$1;
(statearr_14894_18361[(2)] = inst_14825);

(statearr_14894_18361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (8))){
var inst_14829 = (state_14848[(8)]);
var inst_14837 = (state_14848[(2)]);
var state_14848__$1 = (function (){var statearr_14895 = state_14848;
(statearr_14895[(10)] = inst_14837);

return statearr_14895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14848__$1,(9),results,inst_14829);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0 = (function (){
var statearr_14899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__);

(statearr_14899[(1)] = (1));

return statearr_14899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1 = (function (state_14848){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_14848);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e14902){var ex__13275__auto__ = e14902;
var statearr_14903_18362 = state_14848;
(statearr_14903_18362[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_14848[(4)]))){
var statearr_14906_18363 = state_14848;
(statearr_14906_18363[(1)] = cljs.core.first((state_14848[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18364 = state_14848;
state_14848 = G__18364;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = function(state_14848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1.call(this,state_14848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_14913 = f__14358__auto__();
(statearr_14913[(6)] = c__14357__auto___18343);

return statearr_14913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


var c__14357__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_14963){
var state_val_14964 = (state_14963[(1)]);
if((state_val_14964 === (7))){
var inst_14959 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14970_18365 = state_14963__$1;
(statearr_14970_18365[(2)] = inst_14959);

(statearr_14970_18365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (20))){
var state_14963__$1 = state_14963;
var statearr_14971_18367 = state_14963__$1;
(statearr_14971_18367[(2)] = null);

(statearr_14971_18367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (1))){
var state_14963__$1 = state_14963;
var statearr_14975_18368 = state_14963__$1;
(statearr_14975_18368[(2)] = null);

(statearr_14975_18368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (4))){
var inst_14917 = (state_14963[(7)]);
var inst_14917__$1 = (state_14963[(2)]);
var inst_14919 = (inst_14917__$1 == null);
var state_14963__$1 = (function (){var statearr_14978 = state_14963;
(statearr_14978[(7)] = inst_14917__$1);

return statearr_14978;
})();
if(cljs.core.truth_(inst_14919)){
var statearr_14981_18370 = state_14963__$1;
(statearr_14981_18370[(1)] = (5));

} else {
var statearr_14983_18371 = state_14963__$1;
(statearr_14983_18371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (15))){
var inst_14936 = (state_14963[(8)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14963__$1,(18),to,inst_14936);
} else {
if((state_val_14964 === (21))){
var inst_14953 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14987_18372 = state_14963__$1;
(statearr_14987_18372[(2)] = inst_14953);

(statearr_14987_18372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (13))){
var inst_14956 = (state_14963[(2)]);
var state_14963__$1 = (function (){var statearr_14990 = state_14963;
(statearr_14990[(9)] = inst_14956);

return statearr_14990;
})();
var statearr_14992_18373 = state_14963__$1;
(statearr_14992_18373[(2)] = null);

(statearr_14992_18373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (6))){
var inst_14917 = (state_14963[(7)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14963__$1,(11),inst_14917);
} else {
if((state_val_14964 === (17))){
var inst_14948 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
if(cljs.core.truth_(inst_14948)){
var statearr_14996_18377 = state_14963__$1;
(statearr_14996_18377[(1)] = (19));

} else {
var statearr_14997_18378 = state_14963__$1;
(statearr_14997_18378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (3))){
var inst_14961 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14963__$1,inst_14961);
} else {
if((state_val_14964 === (12))){
var inst_14931 = (state_14963[(10)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14963__$1,(14),inst_14931);
} else {
if((state_val_14964 === (2))){
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14963__$1,(4),results);
} else {
if((state_val_14964 === (19))){
var state_14963__$1 = state_14963;
var statearr_15017_18399 = state_14963__$1;
(statearr_15017_18399[(2)] = null);

(statearr_15017_18399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (11))){
var inst_14931 = (state_14963[(2)]);
var state_14963__$1 = (function (){var statearr_15019 = state_14963;
(statearr_15019[(10)] = inst_14931);

return statearr_15019;
})();
var statearr_15022_18400 = state_14963__$1;
(statearr_15022_18400[(2)] = null);

(statearr_15022_18400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (9))){
var state_14963__$1 = state_14963;
var statearr_15025_18402 = state_14963__$1;
(statearr_15025_18402[(2)] = null);

(statearr_15025_18402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (5))){
var state_14963__$1 = state_14963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15029_18404 = state_14963__$1;
(statearr_15029_18404[(1)] = (8));

} else {
var statearr_15033_18405 = state_14963__$1;
(statearr_15033_18405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (14))){
var inst_14940 = (state_14963[(11)]);
var inst_14936 = (state_14963[(8)]);
var inst_14936__$1 = (state_14963[(2)]);
var inst_14938 = (inst_14936__$1 == null);
var inst_14940__$1 = cljs.core.not(inst_14938);
var state_14963__$1 = (function (){var statearr_15035 = state_14963;
(statearr_15035[(11)] = inst_14940__$1);

(statearr_15035[(8)] = inst_14936__$1);

return statearr_15035;
})();
if(inst_14940__$1){
var statearr_15040_18411 = state_14963__$1;
(statearr_15040_18411[(1)] = (15));

} else {
var statearr_15042_18413 = state_14963__$1;
(statearr_15042_18413[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (16))){
var inst_14940 = (state_14963[(11)]);
var state_14963__$1 = state_14963;
var statearr_15044_18414 = state_14963__$1;
(statearr_15044_18414[(2)] = inst_14940);

(statearr_15044_18414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (10))){
var inst_14926 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_15045_18416 = state_14963__$1;
(statearr_15045_18416[(2)] = inst_14926);

(statearr_15045_18416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (18))){
var inst_14945 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_15052_18423 = state_14963__$1;
(statearr_15052_18423[(2)] = inst_14945);

(statearr_15052_18423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (8))){
var inst_14922 = cljs.core.async.close_BANG_(to);
var state_14963__$1 = state_14963;
var statearr_15057_18424 = state_14963__$1;
(statearr_15057_18424[(2)] = inst_14922);

(statearr_15057_18424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0 = (function (){
var statearr_15061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__);

(statearr_15061[(1)] = (1));

return statearr_15061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1 = (function (state_14963){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_14963);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e15063){var ex__13275__auto__ = e15063;
var statearr_15064_18425 = state_14963;
(statearr_15064_18425[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_14963[(4)]))){
var statearr_15068_18426 = state_14963;
(statearr_15068_18426[(1)] = cljs.core.first((state_14963[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18431 = state_14963;
state_14963 = G__18431;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__ = function(state_14963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1.call(this,state_14963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_15073 = f__14358__auto__();
(statearr_15073[(6)] = c__14357__auto__);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));

return c__14357__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15086 = arguments.length;
switch (G__15086) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15109 = arguments.length;
switch (G__15109) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15138 = arguments.length;
switch (G__15138) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14357__auto___18447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_15184){
var state_val_15185 = (state_15184[(1)]);
if((state_val_15185 === (7))){
var inst_15179 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
var statearr_15191_18449 = state_15184__$1;
(statearr_15191_18449[(2)] = inst_15179);

(statearr_15191_18449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (1))){
var state_15184__$1 = state_15184;
var statearr_15197_18450 = state_15184__$1;
(statearr_15197_18450[(2)] = null);

(statearr_15197_18450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (4))){
var inst_15151 = (state_15184[(7)]);
var inst_15151__$1 = (state_15184[(2)]);
var inst_15154 = (inst_15151__$1 == null);
var state_15184__$1 = (function (){var statearr_15201 = state_15184;
(statearr_15201[(7)] = inst_15151__$1);

return statearr_15201;
})();
if(cljs.core.truth_(inst_15154)){
var statearr_15203_18451 = state_15184__$1;
(statearr_15203_18451[(1)] = (5));

} else {
var statearr_15204_18452 = state_15184__$1;
(statearr_15204_18452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (13))){
var state_15184__$1 = state_15184;
var statearr_15205_18453 = state_15184__$1;
(statearr_15205_18453[(2)] = null);

(statearr_15205_18453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (6))){
var inst_15151 = (state_15184[(7)]);
var inst_15164 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15151) : p.call(null, inst_15151));
var state_15184__$1 = state_15184;
if(cljs.core.truth_(inst_15164)){
var statearr_15206_18458 = state_15184__$1;
(statearr_15206_18458[(1)] = (9));

} else {
var statearr_15207_18460 = state_15184__$1;
(statearr_15207_18460[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (3))){
var inst_15181 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15184__$1,inst_15181);
} else {
if((state_val_15185 === (12))){
var state_15184__$1 = state_15184;
var statearr_15213_18463 = state_15184__$1;
(statearr_15213_18463[(2)] = null);

(statearr_15213_18463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (2))){
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15184__$1,(4),ch);
} else {
if((state_val_15185 === (11))){
var inst_15151 = (state_15184[(7)]);
var inst_15168 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15184__$1,(8),inst_15168,inst_15151);
} else {
if((state_val_15185 === (9))){
var state_15184__$1 = state_15184;
var statearr_15216_18470 = state_15184__$1;
(statearr_15216_18470[(2)] = tc);

(statearr_15216_18470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (5))){
var inst_15160 = cljs.core.async.close_BANG_(tc);
var inst_15161 = cljs.core.async.close_BANG_(fc);
var state_15184__$1 = (function (){var statearr_15217 = state_15184;
(statearr_15217[(8)] = inst_15160);

return statearr_15217;
})();
var statearr_15218_18478 = state_15184__$1;
(statearr_15218_18478[(2)] = inst_15161);

(statearr_15218_18478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (14))){
var inst_15177 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
var statearr_15219_18484 = state_15184__$1;
(statearr_15219_18484[(2)] = inst_15177);

(statearr_15219_18484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (10))){
var state_15184__$1 = state_15184;
var statearr_15220_18486 = state_15184__$1;
(statearr_15220_18486[(2)] = fc);

(statearr_15220_18486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (8))){
var inst_15171 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
if(cljs.core.truth_(inst_15171)){
var statearr_15221_18487 = state_15184__$1;
(statearr_15221_18487[(1)] = (12));

} else {
var statearr_15222_18488 = state_15184__$1;
(statearr_15222_18488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_15223 = [null,null,null,null,null,null,null,null,null];
(statearr_15223[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_15223[(1)] = (1));

return statearr_15223;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_15184){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_15184);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e15224){var ex__13275__auto__ = e15224;
var statearr_15225_18494 = state_15184;
(statearr_15225_18494[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_15184[(4)]))){
var statearr_15226_18499 = state_15184;
(statearr_15226_18499[(1)] = cljs.core.first((state_15184[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18502 = state_15184;
state_15184 = G__18502;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_15184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_15184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_15227 = f__14358__auto__();
(statearr_15227[(6)] = c__14357__auto___18447);

return statearr_15227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14357__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_15249){
var state_val_15250 = (state_15249[(1)]);
if((state_val_15250 === (7))){
var inst_15245 = (state_15249[(2)]);
var state_15249__$1 = state_15249;
var statearr_15259_18518 = state_15249__$1;
(statearr_15259_18518[(2)] = inst_15245);

(statearr_15259_18518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (1))){
var inst_15228 = init;
var inst_15229 = inst_15228;
var state_15249__$1 = (function (){var statearr_15260 = state_15249;
(statearr_15260[(7)] = inst_15229);

return statearr_15260;
})();
var statearr_15261_18519 = state_15249__$1;
(statearr_15261_18519[(2)] = null);

(statearr_15261_18519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (4))){
var inst_15232 = (state_15249[(8)]);
var inst_15232__$1 = (state_15249[(2)]);
var inst_15233 = (inst_15232__$1 == null);
var state_15249__$1 = (function (){var statearr_15270 = state_15249;
(statearr_15270[(8)] = inst_15232__$1);

return statearr_15270;
})();
if(cljs.core.truth_(inst_15233)){
var statearr_15273_18520 = state_15249__$1;
(statearr_15273_18520[(1)] = (5));

} else {
var statearr_15278_18521 = state_15249__$1;
(statearr_15278_18521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (6))){
var inst_15229 = (state_15249[(7)]);
var inst_15236 = (state_15249[(9)]);
var inst_15232 = (state_15249[(8)]);
var inst_15236__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15229,inst_15232) : f.call(null, inst_15229,inst_15232));
var inst_15237 = cljs.core.reduced_QMARK_(inst_15236__$1);
var state_15249__$1 = (function (){var statearr_15280 = state_15249;
(statearr_15280[(9)] = inst_15236__$1);

return statearr_15280;
})();
if(inst_15237){
var statearr_15281_18526 = state_15249__$1;
(statearr_15281_18526[(1)] = (8));

} else {
var statearr_15282_18531 = state_15249__$1;
(statearr_15282_18531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (3))){
var inst_15247 = (state_15249[(2)]);
var state_15249__$1 = state_15249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15249__$1,inst_15247);
} else {
if((state_val_15250 === (2))){
var state_15249__$1 = state_15249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15249__$1,(4),ch);
} else {
if((state_val_15250 === (9))){
var inst_15236 = (state_15249[(9)]);
var inst_15229 = inst_15236;
var state_15249__$1 = (function (){var statearr_15287 = state_15249;
(statearr_15287[(7)] = inst_15229);

return statearr_15287;
})();
var statearr_15288_18533 = state_15249__$1;
(statearr_15288_18533[(2)] = null);

(statearr_15288_18533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (5))){
var inst_15229 = (state_15249[(7)]);
var state_15249__$1 = state_15249;
var statearr_15294_18534 = state_15249__$1;
(statearr_15294_18534[(2)] = inst_15229);

(statearr_15294_18534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (10))){
var inst_15243 = (state_15249[(2)]);
var state_15249__$1 = state_15249;
var statearr_15295_18537 = state_15249__$1;
(statearr_15295_18537[(2)] = inst_15243);

(statearr_15295_18537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (8))){
var inst_15236 = (state_15249[(9)]);
var inst_15239 = cljs.core.deref(inst_15236);
var state_15249__$1 = state_15249;
var statearr_15299_18540 = state_15249__$1;
(statearr_15299_18540[(2)] = inst_15239);

(statearr_15299_18540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13272__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13272__auto____0 = (function (){
var statearr_15304 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15304[(0)] = cljs$core$async$reduce_$_state_machine__13272__auto__);

(statearr_15304[(1)] = (1));

return statearr_15304;
});
var cljs$core$async$reduce_$_state_machine__13272__auto____1 = (function (state_15249){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_15249);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e15308){var ex__13275__auto__ = e15308;
var statearr_15309_18551 = state_15249;
(statearr_15309_18551[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_15249[(4)]))){
var statearr_15313_18552 = state_15249;
(statearr_15313_18552[(1)] = cljs.core.first((state_15249[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18553 = state_15249;
state_15249 = G__18553;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13272__auto__ = function(state_15249){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13272__auto____1.call(this,state_15249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13272__auto____0;
cljs$core$async$reduce_$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13272__auto____1;
return cljs$core$async$reduce_$_state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_15316 = f__14358__auto__();
(statearr_15316[(6)] = c__14357__auto__);

return statearr_15316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));

return c__14357__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14357__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_15341){
var state_val_15342 = (state_15341[(1)]);
if((state_val_15342 === (1))){
var inst_15336 = cljs.core.async.reduce(f__$1,init,ch);
var state_15341__$1 = state_15341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15341__$1,(2),inst_15336);
} else {
if((state_val_15342 === (2))){
var inst_15338 = (state_15341[(2)]);
var inst_15339 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15338) : f__$1.call(null, inst_15338));
var state_15341__$1 = state_15341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15341__$1,inst_15339);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13272__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13272__auto____0 = (function (){
var statearr_15351 = [null,null,null,null,null,null,null];
(statearr_15351[(0)] = cljs$core$async$transduce_$_state_machine__13272__auto__);

(statearr_15351[(1)] = (1));

return statearr_15351;
});
var cljs$core$async$transduce_$_state_machine__13272__auto____1 = (function (state_15341){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_15341);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e15353){var ex__13275__auto__ = e15353;
var statearr_15354_18564 = state_15341;
(statearr_15354_18564[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_15341[(4)]))){
var statearr_15355_18568 = state_15341;
(statearr_15355_18568[(1)] = cljs.core.first((state_15341[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18571 = state_15341;
state_15341 = G__18571;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13272__auto__ = function(state_15341){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13272__auto____1.call(this,state_15341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13272__auto____0;
cljs$core$async$transduce_$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13272__auto____1;
return cljs$core$async$transduce_$_state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_15359 = f__14358__auto__();
(statearr_15359[(6)] = c__14357__auto__);

return statearr_15359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));

return c__14357__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15369 = arguments.length;
switch (G__15369) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14357__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_15401){
var state_val_15402 = (state_15401[(1)]);
if((state_val_15402 === (7))){
var inst_15378 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15407_18598 = state_15401__$1;
(statearr_15407_18598[(2)] = inst_15378);

(statearr_15407_18598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (1))){
var inst_15371 = cljs.core.seq(coll);
var inst_15372 = inst_15371;
var state_15401__$1 = (function (){var statearr_15408 = state_15401;
(statearr_15408[(7)] = inst_15372);

return statearr_15408;
})();
var statearr_15409_18599 = state_15401__$1;
(statearr_15409_18599[(2)] = null);

(statearr_15409_18599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (4))){
var inst_15372 = (state_15401[(7)]);
var inst_15376 = cljs.core.first(inst_15372);
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15401__$1,(7),ch,inst_15376);
} else {
if((state_val_15402 === (13))){
var inst_15394 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15414_18606 = state_15401__$1;
(statearr_15414_18606[(2)] = inst_15394);

(statearr_15414_18606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (6))){
var inst_15381 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
if(cljs.core.truth_(inst_15381)){
var statearr_15415_18607 = state_15401__$1;
(statearr_15415_18607[(1)] = (8));

} else {
var statearr_15419_18608 = state_15401__$1;
(statearr_15419_18608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (3))){
var inst_15398 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15401__$1,inst_15398);
} else {
if((state_val_15402 === (12))){
var state_15401__$1 = state_15401;
var statearr_15421_18609 = state_15401__$1;
(statearr_15421_18609[(2)] = null);

(statearr_15421_18609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (2))){
var inst_15372 = (state_15401[(7)]);
var state_15401__$1 = state_15401;
if(cljs.core.truth_(inst_15372)){
var statearr_15422_18610 = state_15401__$1;
(statearr_15422_18610[(1)] = (4));

} else {
var statearr_15423_18611 = state_15401__$1;
(statearr_15423_18611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (11))){
var inst_15387 = cljs.core.async.close_BANG_(ch);
var state_15401__$1 = state_15401;
var statearr_15427_18612 = state_15401__$1;
(statearr_15427_18612[(2)] = inst_15387);

(statearr_15427_18612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (9))){
var state_15401__$1 = state_15401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15429_18613 = state_15401__$1;
(statearr_15429_18613[(1)] = (11));

} else {
var statearr_15430_18614 = state_15401__$1;
(statearr_15430_18614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (5))){
var inst_15372 = (state_15401[(7)]);
var state_15401__$1 = state_15401;
var statearr_15432_18615 = state_15401__$1;
(statearr_15432_18615[(2)] = inst_15372);

(statearr_15432_18615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (10))){
var inst_15396 = (state_15401[(2)]);
var state_15401__$1 = state_15401;
var statearr_15434_18617 = state_15401__$1;
(statearr_15434_18617[(2)] = inst_15396);

(statearr_15434_18617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15402 === (8))){
var inst_15372 = (state_15401[(7)]);
var inst_15383 = cljs.core.next(inst_15372);
var inst_15372__$1 = inst_15383;
var state_15401__$1 = (function (){var statearr_15435 = state_15401;
(statearr_15435[(7)] = inst_15372__$1);

return statearr_15435;
})();
var statearr_15436_18619 = state_15401__$1;
(statearr_15436_18619[(2)] = null);

(statearr_15436_18619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_15444 = [null,null,null,null,null,null,null,null];
(statearr_15444[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_15444[(1)] = (1));

return statearr_15444;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_15401){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_15401);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e15449){var ex__13275__auto__ = e15449;
var statearr_15451_18628 = state_15401;
(statearr_15451_18628[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_15401[(4)]))){
var statearr_15452_18638 = state_15401;
(statearr_15452_18638[(1)] = cljs.core.first((state_15401[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18639 = state_15401;
state_15401 = G__18639;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_15401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_15401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_15456 = f__14358__auto__();
(statearr_15456[(6)] = c__14357__auto__);

return statearr_15456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));

return c__14357__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15474 = arguments.length;
switch (G__15474) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18649 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18649(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18666 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18666(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18697 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18697(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18706 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18706(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15503 = (function (ch,cs,meta15504){
this.ch = ch;
this.cs = cs;
this.meta15504 = meta15504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15505,meta15504__$1){
var self__ = this;
var _15505__$1 = this;
return (new cljs.core.async.t_cljs$core$async15503(self__.ch,self__.cs,meta15504__$1));
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15505){
var self__ = this;
var _15505__$1 = this;
return self__.meta15504;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15504","meta15504",-1029264029,null)], null);
}));

(cljs.core.async.t_cljs$core$async15503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15503");

(cljs.core.async.t_cljs$core$async15503.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15503.
 */
cljs.core.async.__GT_t_cljs$core$async15503 = (function cljs$core$async$__GT_t_cljs$core$async15503(ch,cs,meta15504){
return (new cljs.core.async.t_cljs$core$async15503(ch,cs,meta15504));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15503(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14357__auto___18744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_15658){
var state_val_15659 = (state_15658[(1)]);
if((state_val_15659 === (7))){
var inst_15652 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15660_18745 = state_15658__$1;
(statearr_15660_18745[(2)] = inst_15652);

(statearr_15660_18745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (20))){
var inst_15551 = (state_15658[(7)]);
var inst_15567 = cljs.core.first(inst_15551);
var inst_15568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15567,(0),null);
var inst_15569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15567,(1),null);
var state_15658__$1 = (function (){var statearr_15662 = state_15658;
(statearr_15662[(8)] = inst_15568);

return statearr_15662;
})();
if(cljs.core.truth_(inst_15569)){
var statearr_15663_18754 = state_15658__$1;
(statearr_15663_18754[(1)] = (22));

} else {
var statearr_15664_18755 = state_15658__$1;
(statearr_15664_18755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (27))){
var inst_15517 = (state_15658[(9)]);
var inst_15606 = (state_15658[(10)]);
var inst_15599 = (state_15658[(11)]);
var inst_15601 = (state_15658[(12)]);
var inst_15606__$1 = cljs.core._nth(inst_15599,inst_15601);
var inst_15607 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15606__$1,inst_15517,done);
var state_15658__$1 = (function (){var statearr_15665 = state_15658;
(statearr_15665[(10)] = inst_15606__$1);

return statearr_15665;
})();
if(cljs.core.truth_(inst_15607)){
var statearr_15666_18763 = state_15658__$1;
(statearr_15666_18763[(1)] = (30));

} else {
var statearr_15669_18765 = state_15658__$1;
(statearr_15669_18765[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (1))){
var state_15658__$1 = state_15658;
var statearr_15671_18766 = state_15658__$1;
(statearr_15671_18766[(2)] = null);

(statearr_15671_18766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (24))){
var inst_15551 = (state_15658[(7)]);
var inst_15574 = (state_15658[(2)]);
var inst_15575 = cljs.core.next(inst_15551);
var inst_15526 = inst_15575;
var inst_15527 = null;
var inst_15528 = (0);
var inst_15529 = (0);
var state_15658__$1 = (function (){var statearr_15674 = state_15658;
(statearr_15674[(13)] = inst_15527);

(statearr_15674[(14)] = inst_15528);

(statearr_15674[(15)] = inst_15574);

(statearr_15674[(16)] = inst_15529);

(statearr_15674[(17)] = inst_15526);

return statearr_15674;
})();
var statearr_15675_18770 = state_15658__$1;
(statearr_15675_18770[(2)] = null);

(statearr_15675_18770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (39))){
var state_15658__$1 = state_15658;
var statearr_15680_18772 = state_15658__$1;
(statearr_15680_18772[(2)] = null);

(statearr_15680_18772[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (4))){
var inst_15517 = (state_15658[(9)]);
var inst_15517__$1 = (state_15658[(2)]);
var inst_15518 = (inst_15517__$1 == null);
var state_15658__$1 = (function (){var statearr_15681 = state_15658;
(statearr_15681[(9)] = inst_15517__$1);

return statearr_15681;
})();
if(cljs.core.truth_(inst_15518)){
var statearr_15682_18776 = state_15658__$1;
(statearr_15682_18776[(1)] = (5));

} else {
var statearr_15683_18777 = state_15658__$1;
(statearr_15683_18777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (15))){
var inst_15527 = (state_15658[(13)]);
var inst_15528 = (state_15658[(14)]);
var inst_15529 = (state_15658[(16)]);
var inst_15526 = (state_15658[(17)]);
var inst_15546 = (state_15658[(2)]);
var inst_15547 = (inst_15529 + (1));
var tmp15677 = inst_15527;
var tmp15678 = inst_15528;
var tmp15679 = inst_15526;
var inst_15526__$1 = tmp15679;
var inst_15527__$1 = tmp15677;
var inst_15528__$1 = tmp15678;
var inst_15529__$1 = inst_15547;
var state_15658__$1 = (function (){var statearr_15684 = state_15658;
(statearr_15684[(13)] = inst_15527__$1);

(statearr_15684[(18)] = inst_15546);

(statearr_15684[(14)] = inst_15528__$1);

(statearr_15684[(16)] = inst_15529__$1);

(statearr_15684[(17)] = inst_15526__$1);

return statearr_15684;
})();
var statearr_15685_18783 = state_15658__$1;
(statearr_15685_18783[(2)] = null);

(statearr_15685_18783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (21))){
var inst_15579 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15689_18784 = state_15658__$1;
(statearr_15689_18784[(2)] = inst_15579);

(statearr_15689_18784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (31))){
var inst_15606 = (state_15658[(10)]);
var inst_15610 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15606);
var state_15658__$1 = state_15658;
var statearr_15692_18788 = state_15658__$1;
(statearr_15692_18788[(2)] = inst_15610);

(statearr_15692_18788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (32))){
var inst_15600 = (state_15658[(19)]);
var inst_15598 = (state_15658[(20)]);
var inst_15599 = (state_15658[(11)]);
var inst_15601 = (state_15658[(12)]);
var inst_15612 = (state_15658[(2)]);
var inst_15613 = (inst_15601 + (1));
var tmp15686 = inst_15600;
var tmp15687 = inst_15598;
var tmp15688 = inst_15599;
var inst_15598__$1 = tmp15687;
var inst_15599__$1 = tmp15688;
var inst_15600__$1 = tmp15686;
var inst_15601__$1 = inst_15613;
var state_15658__$1 = (function (){var statearr_15693 = state_15658;
(statearr_15693[(19)] = inst_15600__$1);

(statearr_15693[(21)] = inst_15612);

(statearr_15693[(20)] = inst_15598__$1);

(statearr_15693[(11)] = inst_15599__$1);

(statearr_15693[(12)] = inst_15601__$1);

return statearr_15693;
})();
var statearr_15694_18793 = state_15658__$1;
(statearr_15694_18793[(2)] = null);

(statearr_15694_18793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (40))){
var inst_15625 = (state_15658[(22)]);
var inst_15629 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15625);
var state_15658__$1 = state_15658;
var statearr_15695_18794 = state_15658__$1;
(statearr_15695_18794[(2)] = inst_15629);

(statearr_15695_18794[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (33))){
var inst_15616 = (state_15658[(23)]);
var inst_15618 = cljs.core.chunked_seq_QMARK_(inst_15616);
var state_15658__$1 = state_15658;
if(inst_15618){
var statearr_15701_18801 = state_15658__$1;
(statearr_15701_18801[(1)] = (36));

} else {
var statearr_15723_18803 = state_15658__$1;
(statearr_15723_18803[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (13))){
var inst_15540 = (state_15658[(24)]);
var inst_15543 = cljs.core.async.close_BANG_(inst_15540);
var state_15658__$1 = state_15658;
var statearr_15725_18805 = state_15658__$1;
(statearr_15725_18805[(2)] = inst_15543);

(statearr_15725_18805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (22))){
var inst_15568 = (state_15658[(8)]);
var inst_15571 = cljs.core.async.close_BANG_(inst_15568);
var state_15658__$1 = state_15658;
var statearr_15726_18806 = state_15658__$1;
(statearr_15726_18806[(2)] = inst_15571);

(statearr_15726_18806[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (36))){
var inst_15616 = (state_15658[(23)]);
var inst_15620 = cljs.core.chunk_first(inst_15616);
var inst_15621 = cljs.core.chunk_rest(inst_15616);
var inst_15622 = cljs.core.count(inst_15620);
var inst_15598 = inst_15621;
var inst_15599 = inst_15620;
var inst_15600 = inst_15622;
var inst_15601 = (0);
var state_15658__$1 = (function (){var statearr_15729 = state_15658;
(statearr_15729[(19)] = inst_15600);

(statearr_15729[(20)] = inst_15598);

(statearr_15729[(11)] = inst_15599);

(statearr_15729[(12)] = inst_15601);

return statearr_15729;
})();
var statearr_15731_18812 = state_15658__$1;
(statearr_15731_18812[(2)] = null);

(statearr_15731_18812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (41))){
var inst_15616 = (state_15658[(23)]);
var inst_15631 = (state_15658[(2)]);
var inst_15632 = cljs.core.next(inst_15616);
var inst_15598 = inst_15632;
var inst_15599 = null;
var inst_15600 = (0);
var inst_15601 = (0);
var state_15658__$1 = (function (){var statearr_15736 = state_15658;
(statearr_15736[(19)] = inst_15600);

(statearr_15736[(25)] = inst_15631);

(statearr_15736[(20)] = inst_15598);

(statearr_15736[(11)] = inst_15599);

(statearr_15736[(12)] = inst_15601);

return statearr_15736;
})();
var statearr_15737_18813 = state_15658__$1;
(statearr_15737_18813[(2)] = null);

(statearr_15737_18813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (43))){
var state_15658__$1 = state_15658;
var statearr_15740_18814 = state_15658__$1;
(statearr_15740_18814[(2)] = null);

(statearr_15740_18814[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (29))){
var inst_15640 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15745_18815 = state_15658__$1;
(statearr_15745_18815[(2)] = inst_15640);

(statearr_15745_18815[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (44))){
var inst_15649 = (state_15658[(2)]);
var state_15658__$1 = (function (){var statearr_15746 = state_15658;
(statearr_15746[(26)] = inst_15649);

return statearr_15746;
})();
var statearr_15748_18820 = state_15658__$1;
(statearr_15748_18820[(2)] = null);

(statearr_15748_18820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (6))){
var inst_15589 = (state_15658[(27)]);
var inst_15588 = cljs.core.deref(cs);
var inst_15589__$1 = cljs.core.keys(inst_15588);
var inst_15590 = cljs.core.count(inst_15589__$1);
var inst_15591 = cljs.core.reset_BANG_(dctr,inst_15590);
var inst_15597 = cljs.core.seq(inst_15589__$1);
var inst_15598 = inst_15597;
var inst_15599 = null;
var inst_15600 = (0);
var inst_15601 = (0);
var state_15658__$1 = (function (){var statearr_15751 = state_15658;
(statearr_15751[(19)] = inst_15600);

(statearr_15751[(28)] = inst_15591);

(statearr_15751[(20)] = inst_15598);

(statearr_15751[(27)] = inst_15589__$1);

(statearr_15751[(11)] = inst_15599);

(statearr_15751[(12)] = inst_15601);

return statearr_15751;
})();
var statearr_15752_18822 = state_15658__$1;
(statearr_15752_18822[(2)] = null);

(statearr_15752_18822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (28))){
var inst_15616 = (state_15658[(23)]);
var inst_15598 = (state_15658[(20)]);
var inst_15616__$1 = cljs.core.seq(inst_15598);
var state_15658__$1 = (function (){var statearr_15753 = state_15658;
(statearr_15753[(23)] = inst_15616__$1);

return statearr_15753;
})();
if(inst_15616__$1){
var statearr_15754_18824 = state_15658__$1;
(statearr_15754_18824[(1)] = (33));

} else {
var statearr_15755_18825 = state_15658__$1;
(statearr_15755_18825[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (25))){
var inst_15600 = (state_15658[(19)]);
var inst_15601 = (state_15658[(12)]);
var inst_15603 = (inst_15601 < inst_15600);
var inst_15604 = inst_15603;
var state_15658__$1 = state_15658;
if(cljs.core.truth_(inst_15604)){
var statearr_15759_18831 = state_15658__$1;
(statearr_15759_18831[(1)] = (27));

} else {
var statearr_15760_18832 = state_15658__$1;
(statearr_15760_18832[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (34))){
var state_15658__$1 = state_15658;
var statearr_15763_18834 = state_15658__$1;
(statearr_15763_18834[(2)] = null);

(statearr_15763_18834[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (17))){
var state_15658__$1 = state_15658;
var statearr_15766_18836 = state_15658__$1;
(statearr_15766_18836[(2)] = null);

(statearr_15766_18836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (3))){
var inst_15654 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15658__$1,inst_15654);
} else {
if((state_val_15659 === (12))){
var inst_15584 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15769_18839 = state_15658__$1;
(statearr_15769_18839[(2)] = inst_15584);

(statearr_15769_18839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (2))){
var state_15658__$1 = state_15658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15658__$1,(4),ch);
} else {
if((state_val_15659 === (23))){
var state_15658__$1 = state_15658;
var statearr_15772_18840 = state_15658__$1;
(statearr_15772_18840[(2)] = null);

(statearr_15772_18840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (35))){
var inst_15638 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15785_18841 = state_15658__$1;
(statearr_15785_18841[(2)] = inst_15638);

(statearr_15785_18841[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (19))){
var inst_15551 = (state_15658[(7)]);
var inst_15556 = cljs.core.chunk_first(inst_15551);
var inst_15557 = cljs.core.chunk_rest(inst_15551);
var inst_15558 = cljs.core.count(inst_15556);
var inst_15526 = inst_15557;
var inst_15527 = inst_15556;
var inst_15528 = inst_15558;
var inst_15529 = (0);
var state_15658__$1 = (function (){var statearr_15800 = state_15658;
(statearr_15800[(13)] = inst_15527);

(statearr_15800[(14)] = inst_15528);

(statearr_15800[(16)] = inst_15529);

(statearr_15800[(17)] = inst_15526);

return statearr_15800;
})();
var statearr_15801_18850 = state_15658__$1;
(statearr_15801_18850[(2)] = null);

(statearr_15801_18850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (11))){
var inst_15551 = (state_15658[(7)]);
var inst_15526 = (state_15658[(17)]);
var inst_15551__$1 = cljs.core.seq(inst_15526);
var state_15658__$1 = (function (){var statearr_15809 = state_15658;
(statearr_15809[(7)] = inst_15551__$1);

return statearr_15809;
})();
if(inst_15551__$1){
var statearr_15813_18851 = state_15658__$1;
(statearr_15813_18851[(1)] = (16));

} else {
var statearr_15814_18852 = state_15658__$1;
(statearr_15814_18852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (9))){
var inst_15586 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15815_18853 = state_15658__$1;
(statearr_15815_18853[(2)] = inst_15586);

(statearr_15815_18853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (5))){
var inst_15524 = cljs.core.deref(cs);
var inst_15525 = cljs.core.seq(inst_15524);
var inst_15526 = inst_15525;
var inst_15527 = null;
var inst_15528 = (0);
var inst_15529 = (0);
var state_15658__$1 = (function (){var statearr_15819 = state_15658;
(statearr_15819[(13)] = inst_15527);

(statearr_15819[(14)] = inst_15528);

(statearr_15819[(16)] = inst_15529);

(statearr_15819[(17)] = inst_15526);

return statearr_15819;
})();
var statearr_15820_18859 = state_15658__$1;
(statearr_15820_18859[(2)] = null);

(statearr_15820_18859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (14))){
var state_15658__$1 = state_15658;
var statearr_15824_18864 = state_15658__$1;
(statearr_15824_18864[(2)] = null);

(statearr_15824_18864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (45))){
var inst_15646 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15829_18869 = state_15658__$1;
(statearr_15829_18869[(2)] = inst_15646);

(statearr_15829_18869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (26))){
var inst_15589 = (state_15658[(27)]);
var inst_15642 = (state_15658[(2)]);
var inst_15643 = cljs.core.seq(inst_15589);
var state_15658__$1 = (function (){var statearr_15830 = state_15658;
(statearr_15830[(29)] = inst_15642);

return statearr_15830;
})();
if(inst_15643){
var statearr_15832_18870 = state_15658__$1;
(statearr_15832_18870[(1)] = (42));

} else {
var statearr_15838_18871 = state_15658__$1;
(statearr_15838_18871[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (16))){
var inst_15551 = (state_15658[(7)]);
var inst_15554 = cljs.core.chunked_seq_QMARK_(inst_15551);
var state_15658__$1 = state_15658;
if(inst_15554){
var statearr_15839_18872 = state_15658__$1;
(statearr_15839_18872[(1)] = (19));

} else {
var statearr_15845_18873 = state_15658__$1;
(statearr_15845_18873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (38))){
var inst_15635 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15850_18874 = state_15658__$1;
(statearr_15850_18874[(2)] = inst_15635);

(statearr_15850_18874[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (30))){
var state_15658__$1 = state_15658;
var statearr_15855_18875 = state_15658__$1;
(statearr_15855_18875[(2)] = null);

(statearr_15855_18875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (10))){
var inst_15527 = (state_15658[(13)]);
var inst_15529 = (state_15658[(16)]);
var inst_15537 = cljs.core._nth(inst_15527,inst_15529);
var inst_15540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15537,(0),null);
var inst_15541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15537,(1),null);
var state_15658__$1 = (function (){var statearr_15858 = state_15658;
(statearr_15858[(24)] = inst_15540);

return statearr_15858;
})();
if(cljs.core.truth_(inst_15541)){
var statearr_15859_18876 = state_15658__$1;
(statearr_15859_18876[(1)] = (13));

} else {
var statearr_15861_18877 = state_15658__$1;
(statearr_15861_18877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (18))){
var inst_15582 = (state_15658[(2)]);
var state_15658__$1 = state_15658;
var statearr_15865_18883 = state_15658__$1;
(statearr_15865_18883[(2)] = inst_15582);

(statearr_15865_18883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (42))){
var state_15658__$1 = state_15658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15658__$1,(45),dchan);
} else {
if((state_val_15659 === (37))){
var inst_15517 = (state_15658[(9)]);
var inst_15616 = (state_15658[(23)]);
var inst_15625 = (state_15658[(22)]);
var inst_15625__$1 = cljs.core.first(inst_15616);
var inst_15626 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15625__$1,inst_15517,done);
var state_15658__$1 = (function (){var statearr_15871 = state_15658;
(statearr_15871[(22)] = inst_15625__$1);

return statearr_15871;
})();
if(cljs.core.truth_(inst_15626)){
var statearr_15872_18889 = state_15658__$1;
(statearr_15872_18889[(1)] = (39));

} else {
var statearr_15873_18895 = state_15658__$1;
(statearr_15873_18895[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15659 === (8))){
var inst_15528 = (state_15658[(14)]);
var inst_15529 = (state_15658[(16)]);
var inst_15531 = (inst_15529 < inst_15528);
var inst_15532 = inst_15531;
var state_15658__$1 = state_15658;
if(cljs.core.truth_(inst_15532)){
var statearr_15874_18900 = state_15658__$1;
(statearr_15874_18900[(1)] = (10));

} else {
var statearr_15875_18901 = state_15658__$1;
(statearr_15875_18901[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13272__auto__ = null;
var cljs$core$async$mult_$_state_machine__13272__auto____0 = (function (){
var statearr_15876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15876[(0)] = cljs$core$async$mult_$_state_machine__13272__auto__);

(statearr_15876[(1)] = (1));

return statearr_15876;
});
var cljs$core$async$mult_$_state_machine__13272__auto____1 = (function (state_15658){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_15658);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e15877){var ex__13275__auto__ = e15877;
var statearr_15878_18906 = state_15658;
(statearr_15878_18906[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_15658[(4)]))){
var statearr_15879_18907 = state_15658;
(statearr_15879_18907[(1)] = cljs.core.first((state_15658[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18912 = state_15658;
state_15658 = G__18912;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13272__auto__ = function(state_15658){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13272__auto____1.call(this,state_15658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13272__auto____0;
cljs$core$async$mult_$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13272__auto____1;
return cljs$core$async$mult_$_state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_15883 = f__14358__auto__();
(statearr_15883[(6)] = c__14357__auto___18744);

return statearr_15883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15911 = arguments.length;
switch (G__15911) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18920 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18920(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18923 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18923(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18927 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18927(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18929 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18929(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18932 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18932(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18952 = arguments.length;
var i__5727__auto___18953 = (0);
while(true){
if((i__5727__auto___18953 < len__5726__auto___18952)){
args__5732__auto__.push((arguments[i__5727__auto___18953]));

var G__18958 = (i__5727__auto___18953 + (1));
i__5727__auto___18953 = G__18958;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15988){
var map__15993 = p__15988;
var map__15993__$1 = cljs.core.__destructure_map(map__15993);
var opts = map__15993__$1;
var statearr_15994_18960 = state;
(statearr_15994_18960[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15998_18961 = state;
(statearr_15998_18961[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16000_18962 = state;
(statearr_16000_18962[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15974){
var G__15975 = cljs.core.first(seq15974);
var seq15974__$1 = cljs.core.next(seq15974);
var G__15976 = cljs.core.first(seq15974__$1);
var seq15974__$2 = cljs.core.next(seq15974__$1);
var G__15977 = cljs.core.first(seq15974__$2);
var seq15974__$3 = cljs.core.next(seq15974__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15975,G__15976,G__15977,seq15974__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16051 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16052){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16052 = meta16052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16053,meta16052__$1){
var self__ = this;
var _16053__$1 = this;
return (new cljs.core.async.t_cljs$core$async16051(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16052__$1));
}));

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16053){
var self__ = this;
var _16053__$1 = this;
return self__.meta16052;
}));

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16051.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16052","meta16052",401443640,null)], null);
}));

(cljs.core.async.t_cljs$core$async16051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16051");

(cljs.core.async.t_cljs$core$async16051.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16051.
 */
cljs.core.async.__GT_t_cljs$core$async16051 = (function cljs$core$async$__GT_t_cljs$core$async16051(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16052){
return (new cljs.core.async.t_cljs$core$async16051(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16052));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16051(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14357__auto___19030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_16185){
var state_val_16187 = (state_16185[(1)]);
if((state_val_16187 === (7))){
var inst_16135 = (state_16185[(2)]);
var state_16185__$1 = state_16185;
if(cljs.core.truth_(inst_16135)){
var statearr_16202_19034 = state_16185__$1;
(statearr_16202_19034[(1)] = (8));

} else {
var statearr_16203_19035 = state_16185__$1;
(statearr_16203_19035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (20))){
var inst_16127 = (state_16185[(7)]);
var state_16185__$1 = state_16185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16185__$1,(23),out,inst_16127);
} else {
if((state_val_16187 === (1))){
var inst_16104 = calc_state();
var inst_16105 = cljs.core.__destructure_map(inst_16104);
var inst_16107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16105,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16105,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16105,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16115 = inst_16104;
var state_16185__$1 = (function (){var statearr_16209 = state_16185;
(statearr_16209[(8)] = inst_16110);

(statearr_16209[(9)] = inst_16115);

(statearr_16209[(10)] = inst_16109);

(statearr_16209[(11)] = inst_16107);

return statearr_16209;
})();
var statearr_16215_19042 = state_16185__$1;
(statearr_16215_19042[(2)] = null);

(statearr_16215_19042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (24))){
var inst_16118 = (state_16185[(12)]);
var inst_16115 = inst_16118;
var state_16185__$1 = (function (){var statearr_16217 = state_16185;
(statearr_16217[(9)] = inst_16115);

return statearr_16217;
})();
var statearr_16219_19045 = state_16185__$1;
(statearr_16219_19045[(2)] = null);

(statearr_16219_19045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (4))){
var inst_16127 = (state_16185[(7)]);
var inst_16129 = (state_16185[(13)]);
var inst_16126 = (state_16185[(2)]);
var inst_16127__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16126,(0),null);
var inst_16128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16126,(1),null);
var inst_16129__$1 = (inst_16127__$1 == null);
var state_16185__$1 = (function (){var statearr_16222 = state_16185;
(statearr_16222[(14)] = inst_16128);

(statearr_16222[(7)] = inst_16127__$1);

(statearr_16222[(13)] = inst_16129__$1);

return statearr_16222;
})();
if(cljs.core.truth_(inst_16129__$1)){
var statearr_16225_19053 = state_16185__$1;
(statearr_16225_19053[(1)] = (5));

} else {
var statearr_16226_19054 = state_16185__$1;
(statearr_16226_19054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (15))){
var inst_16151 = (state_16185[(15)]);
var inst_16119 = (state_16185[(16)]);
var inst_16151__$1 = cljs.core.empty_QMARK_(inst_16119);
var state_16185__$1 = (function (){var statearr_16228 = state_16185;
(statearr_16228[(15)] = inst_16151__$1);

return statearr_16228;
})();
if(inst_16151__$1){
var statearr_16232_19062 = state_16185__$1;
(statearr_16232_19062[(1)] = (17));

} else {
var statearr_16233_19063 = state_16185__$1;
(statearr_16233_19063[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (21))){
var inst_16118 = (state_16185[(12)]);
var inst_16115 = inst_16118;
var state_16185__$1 = (function (){var statearr_16242 = state_16185;
(statearr_16242[(9)] = inst_16115);

return statearr_16242;
})();
var statearr_16244_19064 = state_16185__$1;
(statearr_16244_19064[(2)] = null);

(statearr_16244_19064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (13))){
var inst_16144 = (state_16185[(2)]);
var inst_16145 = calc_state();
var inst_16115 = inst_16145;
var state_16185__$1 = (function (){var statearr_16246 = state_16185;
(statearr_16246[(9)] = inst_16115);

(statearr_16246[(17)] = inst_16144);

return statearr_16246;
})();
var statearr_16250_19068 = state_16185__$1;
(statearr_16250_19068[(2)] = null);

(statearr_16250_19068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (22))){
var inst_16176 = (state_16185[(2)]);
var state_16185__$1 = state_16185;
var statearr_16251_19069 = state_16185__$1;
(statearr_16251_19069[(2)] = inst_16176);

(statearr_16251_19069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (6))){
var inst_16128 = (state_16185[(14)]);
var inst_16133 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16128,change);
var state_16185__$1 = state_16185;
var statearr_16255_19071 = state_16185__$1;
(statearr_16255_19071[(2)] = inst_16133);

(statearr_16255_19071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (25))){
var state_16185__$1 = state_16185;
var statearr_16257_19072 = state_16185__$1;
(statearr_16257_19072[(2)] = null);

(statearr_16257_19072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (17))){
var inst_16128 = (state_16185[(14)]);
var inst_16120 = (state_16185[(18)]);
var inst_16155 = (inst_16120.cljs$core$IFn$_invoke$arity$1 ? inst_16120.cljs$core$IFn$_invoke$arity$1(inst_16128) : inst_16120.call(null, inst_16128));
var inst_16156 = cljs.core.not(inst_16155);
var state_16185__$1 = state_16185;
var statearr_16258_19073 = state_16185__$1;
(statearr_16258_19073[(2)] = inst_16156);

(statearr_16258_19073[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (3))){
var inst_16181 = (state_16185[(2)]);
var state_16185__$1 = state_16185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16185__$1,inst_16181);
} else {
if((state_val_16187 === (12))){
var state_16185__$1 = state_16185;
var statearr_16259_19074 = state_16185__$1;
(statearr_16259_19074[(2)] = null);

(statearr_16259_19074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (2))){
var inst_16118 = (state_16185[(12)]);
var inst_16115 = (state_16185[(9)]);
var inst_16118__$1 = cljs.core.__destructure_map(inst_16115);
var inst_16119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16118__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16118__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16118__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16185__$1 = (function (){var statearr_16260 = state_16185;
(statearr_16260[(16)] = inst_16119);

(statearr_16260[(12)] = inst_16118__$1);

(statearr_16260[(18)] = inst_16120);

return statearr_16260;
})();
return cljs.core.async.ioc_alts_BANG_(state_16185__$1,(4),inst_16121);
} else {
if((state_val_16187 === (23))){
var inst_16165 = (state_16185[(2)]);
var state_16185__$1 = state_16185;
if(cljs.core.truth_(inst_16165)){
var statearr_16266_19075 = state_16185__$1;
(statearr_16266_19075[(1)] = (24));

} else {
var statearr_16267_19076 = state_16185__$1;
(statearr_16267_19076[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (19))){
var inst_16159 = (state_16185[(2)]);
var state_16185__$1 = state_16185;
var statearr_16270_19077 = state_16185__$1;
(statearr_16270_19077[(2)] = inst_16159);

(statearr_16270_19077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (11))){
var inst_16128 = (state_16185[(14)]);
var inst_16139 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16128);
var state_16185__$1 = state_16185;
var statearr_16273_19078 = state_16185__$1;
(statearr_16273_19078[(2)] = inst_16139);

(statearr_16273_19078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (9))){
var inst_16119 = (state_16185[(16)]);
var inst_16148 = (state_16185[(19)]);
var inst_16128 = (state_16185[(14)]);
var inst_16148__$1 = (inst_16119.cljs$core$IFn$_invoke$arity$1 ? inst_16119.cljs$core$IFn$_invoke$arity$1(inst_16128) : inst_16119.call(null, inst_16128));
var state_16185__$1 = (function (){var statearr_16276 = state_16185;
(statearr_16276[(19)] = inst_16148__$1);

return statearr_16276;
})();
if(cljs.core.truth_(inst_16148__$1)){
var statearr_16277_19085 = state_16185__$1;
(statearr_16277_19085[(1)] = (14));

} else {
var statearr_16278_19086 = state_16185__$1;
(statearr_16278_19086[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (5))){
var inst_16129 = (state_16185[(13)]);
var state_16185__$1 = state_16185;
var statearr_16279_19087 = state_16185__$1;
(statearr_16279_19087[(2)] = inst_16129);

(statearr_16279_19087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (14))){
var inst_16148 = (state_16185[(19)]);
var state_16185__$1 = state_16185;
var statearr_16280_19088 = state_16185__$1;
(statearr_16280_19088[(2)] = inst_16148);

(statearr_16280_19088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (26))){
var inst_16172 = (state_16185[(2)]);
var state_16185__$1 = state_16185;
var statearr_16282_19089 = state_16185__$1;
(statearr_16282_19089[(2)] = inst_16172);

(statearr_16282_19089[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (16))){
var inst_16161 = (state_16185[(2)]);
var state_16185__$1 = state_16185;
if(cljs.core.truth_(inst_16161)){
var statearr_16285_19090 = state_16185__$1;
(statearr_16285_19090[(1)] = (20));

} else {
var statearr_16287_19091 = state_16185__$1;
(statearr_16287_19091[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (10))){
var inst_16179 = (state_16185[(2)]);
var state_16185__$1 = state_16185;
var statearr_16289_19092 = state_16185__$1;
(statearr_16289_19092[(2)] = inst_16179);

(statearr_16289_19092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (18))){
var inst_16151 = (state_16185[(15)]);
var state_16185__$1 = state_16185;
var statearr_16290_19093 = state_16185__$1;
(statearr_16290_19093[(2)] = inst_16151);

(statearr_16290_19093[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (8))){
var inst_16127 = (state_16185[(7)]);
var inst_16137 = (inst_16127 == null);
var state_16185__$1 = state_16185;
if(cljs.core.truth_(inst_16137)){
var statearr_16292_19094 = state_16185__$1;
(statearr_16292_19094[(1)] = (11));

} else {
var statearr_16293_19095 = state_16185__$1;
(statearr_16293_19095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13272__auto__ = null;
var cljs$core$async$mix_$_state_machine__13272__auto____0 = (function (){
var statearr_16296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16296[(0)] = cljs$core$async$mix_$_state_machine__13272__auto__);

(statearr_16296[(1)] = (1));

return statearr_16296;
});
var cljs$core$async$mix_$_state_machine__13272__auto____1 = (function (state_16185){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_16185);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e16298){var ex__13275__auto__ = e16298;
var statearr_16299_19096 = state_16185;
(statearr_16299_19096[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_16185[(4)]))){
var statearr_16300_19097 = state_16185;
(statearr_16300_19097[(1)] = cljs.core.first((state_16185[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19098 = state_16185;
state_16185 = G__19098;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13272__auto__ = function(state_16185){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13272__auto____1.call(this,state_16185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13272__auto____0;
cljs$core$async$mix_$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13272__auto____1;
return cljs$core$async$mix_$_state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_16302 = f__14358__auto__();
(statearr_16302[(6)] = c__14357__auto___19030);

return statearr_16302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19100 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19100(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19106 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19106(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19108 = (function() {
var G__19109 = null;
var G__19109__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19109__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19109 = function(p,v){
switch(arguments.length){
case 1:
return G__19109__1.call(this,p);
case 2:
return G__19109__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19109.cljs$core$IFn$_invoke$arity$1 = G__19109__1;
G__19109.cljs$core$IFn$_invoke$arity$2 = G__19109__2;
return G__19109;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16337 = arguments.length;
switch (G__16337) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19108(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19108(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16371 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16372){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16372 = meta16372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16373,meta16372__$1){
var self__ = this;
var _16373__$1 = this;
return (new cljs.core.async.t_cljs$core$async16371(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16372__$1));
}));

(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16373){
var self__ = this;
var _16373__$1 = this;
return self__.meta16372;
}));

(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16372","meta16372",451318123,null)], null);
}));

(cljs.core.async.t_cljs$core$async16371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16371");

(cljs.core.async.t_cljs$core$async16371.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16371.
 */
cljs.core.async.__GT_t_cljs$core$async16371 = (function cljs$core$async$__GT_t_cljs$core$async16371(ch,topic_fn,buf_fn,mults,ensure_mult,meta16372){
return (new cljs.core.async.t_cljs$core$async16371(ch,topic_fn,buf_fn,mults,ensure_mult,meta16372));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16348 = arguments.length;
switch (G__16348) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16345_SHARP_){
if(cljs.core.truth_((p1__16345_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16345_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16345_SHARP_.call(null, topic)))){
return p1__16345_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16345_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16371(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14357__auto___19141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_16525){
var state_val_16527 = (state_16525[(1)]);
if((state_val_16527 === (7))){
var inst_16521 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16538_19142 = state_16525__$1;
(statearr_16538_19142[(2)] = inst_16521);

(statearr_16538_19142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (20))){
var state_16525__$1 = state_16525;
var statearr_16541_19143 = state_16525__$1;
(statearr_16541_19143[(2)] = null);

(statearr_16541_19143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (1))){
var state_16525__$1 = state_16525;
var statearr_16542_19144 = state_16525__$1;
(statearr_16542_19144[(2)] = null);

(statearr_16542_19144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (24))){
var inst_16502 = (state_16525[(7)]);
var inst_16512 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16502);
var state_16525__$1 = state_16525;
var statearr_16546_19146 = state_16525__$1;
(statearr_16546_19146[(2)] = inst_16512);

(statearr_16546_19146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (4))){
var inst_16420 = (state_16525[(8)]);
var inst_16420__$1 = (state_16525[(2)]);
var inst_16423 = (inst_16420__$1 == null);
var state_16525__$1 = (function (){var statearr_16551 = state_16525;
(statearr_16551[(8)] = inst_16420__$1);

return statearr_16551;
})();
if(cljs.core.truth_(inst_16423)){
var statearr_16552_19149 = state_16525__$1;
(statearr_16552_19149[(1)] = (5));

} else {
var statearr_16555_19150 = state_16525__$1;
(statearr_16555_19150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (15))){
var inst_16492 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16556_19153 = state_16525__$1;
(statearr_16556_19153[(2)] = inst_16492);

(statearr_16556_19153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (21))){
var inst_16517 = (state_16525[(2)]);
var state_16525__$1 = (function (){var statearr_16558 = state_16525;
(statearr_16558[(9)] = inst_16517);

return statearr_16558;
})();
var statearr_16560_19156 = state_16525__$1;
(statearr_16560_19156[(2)] = null);

(statearr_16560_19156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (13))){
var inst_16462 = (state_16525[(10)]);
var inst_16465 = cljs.core.chunked_seq_QMARK_(inst_16462);
var state_16525__$1 = state_16525;
if(inst_16465){
var statearr_16566_19157 = state_16525__$1;
(statearr_16566_19157[(1)] = (16));

} else {
var statearr_16567_19158 = state_16525__$1;
(statearr_16567_19158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (22))){
var inst_16509 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
if(cljs.core.truth_(inst_16509)){
var statearr_16570_19160 = state_16525__$1;
(statearr_16570_19160[(1)] = (23));

} else {
var statearr_16571_19161 = state_16525__$1;
(statearr_16571_19161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (6))){
var inst_16504 = (state_16525[(11)]);
var inst_16420 = (state_16525[(8)]);
var inst_16502 = (state_16525[(7)]);
var inst_16502__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16420) : topic_fn.call(null, inst_16420));
var inst_16503 = cljs.core.deref(mults);
var inst_16504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16503,inst_16502__$1);
var state_16525__$1 = (function (){var statearr_16578 = state_16525;
(statearr_16578[(11)] = inst_16504__$1);

(statearr_16578[(7)] = inst_16502__$1);

return statearr_16578;
})();
if(cljs.core.truth_(inst_16504__$1)){
var statearr_16581_19162 = state_16525__$1;
(statearr_16581_19162[(1)] = (19));

} else {
var statearr_16583_19164 = state_16525__$1;
(statearr_16583_19164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (25))){
var inst_16514 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16585_19171 = state_16525__$1;
(statearr_16585_19171[(2)] = inst_16514);

(statearr_16585_19171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (17))){
var inst_16462 = (state_16525[(10)]);
var inst_16479 = cljs.core.first(inst_16462);
var inst_16482 = cljs.core.async.muxch_STAR_(inst_16479);
var inst_16484 = cljs.core.async.close_BANG_(inst_16482);
var inst_16485 = cljs.core.next(inst_16462);
var inst_16437 = inst_16485;
var inst_16438 = null;
var inst_16439 = (0);
var inst_16440 = (0);
var state_16525__$1 = (function (){var statearr_16589 = state_16525;
(statearr_16589[(12)] = inst_16439);

(statearr_16589[(13)] = inst_16437);

(statearr_16589[(14)] = inst_16440);

(statearr_16589[(15)] = inst_16438);

(statearr_16589[(16)] = inst_16484);

return statearr_16589;
})();
var statearr_16590_19172 = state_16525__$1;
(statearr_16590_19172[(2)] = null);

(statearr_16590_19172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (3))){
var inst_16523 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16525__$1,inst_16523);
} else {
if((state_val_16527 === (12))){
var inst_16496 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16592_19173 = state_16525__$1;
(statearr_16592_19173[(2)] = inst_16496);

(statearr_16592_19173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (2))){
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16525__$1,(4),ch);
} else {
if((state_val_16527 === (23))){
var state_16525__$1 = state_16525;
var statearr_16593_19174 = state_16525__$1;
(statearr_16593_19174[(2)] = null);

(statearr_16593_19174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (19))){
var inst_16504 = (state_16525[(11)]);
var inst_16420 = (state_16525[(8)]);
var inst_16507 = cljs.core.async.muxch_STAR_(inst_16504);
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16525__$1,(22),inst_16507,inst_16420);
} else {
if((state_val_16527 === (11))){
var inst_16462 = (state_16525[(10)]);
var inst_16437 = (state_16525[(13)]);
var inst_16462__$1 = cljs.core.seq(inst_16437);
var state_16525__$1 = (function (){var statearr_16598 = state_16525;
(statearr_16598[(10)] = inst_16462__$1);

return statearr_16598;
})();
if(inst_16462__$1){
var statearr_16601_19175 = state_16525__$1;
(statearr_16601_19175[(1)] = (13));

} else {
var statearr_16602_19176 = state_16525__$1;
(statearr_16602_19176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (9))){
var inst_16498 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16608_19177 = state_16525__$1;
(statearr_16608_19177[(2)] = inst_16498);

(statearr_16608_19177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (5))){
var inst_16433 = cljs.core.deref(mults);
var inst_16434 = cljs.core.vals(inst_16433);
var inst_16435 = cljs.core.seq(inst_16434);
var inst_16437 = inst_16435;
var inst_16438 = null;
var inst_16439 = (0);
var inst_16440 = (0);
var state_16525__$1 = (function (){var statearr_16611 = state_16525;
(statearr_16611[(12)] = inst_16439);

(statearr_16611[(13)] = inst_16437);

(statearr_16611[(14)] = inst_16440);

(statearr_16611[(15)] = inst_16438);

return statearr_16611;
})();
var statearr_16613_19179 = state_16525__$1;
(statearr_16613_19179[(2)] = null);

(statearr_16613_19179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (14))){
var state_16525__$1 = state_16525;
var statearr_16622_19180 = state_16525__$1;
(statearr_16622_19180[(2)] = null);

(statearr_16622_19180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (16))){
var inst_16462 = (state_16525[(10)]);
var inst_16467 = cljs.core.chunk_first(inst_16462);
var inst_16471 = cljs.core.chunk_rest(inst_16462);
var inst_16473 = cljs.core.count(inst_16467);
var inst_16437 = inst_16471;
var inst_16438 = inst_16467;
var inst_16439 = inst_16473;
var inst_16440 = (0);
var state_16525__$1 = (function (){var statearr_16634 = state_16525;
(statearr_16634[(12)] = inst_16439);

(statearr_16634[(13)] = inst_16437);

(statearr_16634[(14)] = inst_16440);

(statearr_16634[(15)] = inst_16438);

return statearr_16634;
})();
var statearr_16635_19184 = state_16525__$1;
(statearr_16635_19184[(2)] = null);

(statearr_16635_19184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (10))){
var inst_16439 = (state_16525[(12)]);
var inst_16437 = (state_16525[(13)]);
var inst_16440 = (state_16525[(14)]);
var inst_16438 = (state_16525[(15)]);
var inst_16449 = cljs.core._nth(inst_16438,inst_16440);
var inst_16451 = cljs.core.async.muxch_STAR_(inst_16449);
var inst_16452 = cljs.core.async.close_BANG_(inst_16451);
var inst_16453 = (inst_16440 + (1));
var tmp16614 = inst_16439;
var tmp16615 = inst_16437;
var tmp16616 = inst_16438;
var inst_16437__$1 = tmp16615;
var inst_16438__$1 = tmp16616;
var inst_16439__$1 = tmp16614;
var inst_16440__$1 = inst_16453;
var state_16525__$1 = (function (){var statearr_16642 = state_16525;
(statearr_16642[(17)] = inst_16452);

(statearr_16642[(12)] = inst_16439__$1);

(statearr_16642[(13)] = inst_16437__$1);

(statearr_16642[(14)] = inst_16440__$1);

(statearr_16642[(15)] = inst_16438__$1);

return statearr_16642;
})();
var statearr_16651_19185 = state_16525__$1;
(statearr_16651_19185[(2)] = null);

(statearr_16651_19185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (18))){
var inst_16488 = (state_16525[(2)]);
var state_16525__$1 = state_16525;
var statearr_16670_19186 = state_16525__$1;
(statearr_16670_19186[(2)] = inst_16488);

(statearr_16670_19186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (8))){
var inst_16439 = (state_16525[(12)]);
var inst_16440 = (state_16525[(14)]);
var inst_16444 = (inst_16440 < inst_16439);
var inst_16445 = inst_16444;
var state_16525__$1 = state_16525;
if(cljs.core.truth_(inst_16445)){
var statearr_16678_19187 = state_16525__$1;
(statearr_16678_19187[(1)] = (10));

} else {
var statearr_16680_19188 = state_16525__$1;
(statearr_16680_19188[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_16682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16682[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_16682[(1)] = (1));

return statearr_16682;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_16525){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_16525);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e16687){var ex__13275__auto__ = e16687;
var statearr_16689_19189 = state_16525;
(statearr_16689_19189[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_16525[(4)]))){
var statearr_16690_19191 = state_16525;
(statearr_16690_19191[(1)] = cljs.core.first((state_16525[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19192 = state_16525;
state_16525 = G__19192;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_16525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_16525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_16691 = f__14358__auto__();
(statearr_16691[(6)] = c__14357__auto___19141);

return statearr_16691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16709 = arguments.length;
switch (G__16709) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16738 = arguments.length;
switch (G__16738) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16762 = arguments.length;
switch (G__16762) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14357__auto___19204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_16842){
var state_val_16843 = (state_16842[(1)]);
if((state_val_16843 === (7))){
var state_16842__$1 = state_16842;
var statearr_16845_19208 = state_16842__$1;
(statearr_16845_19208[(2)] = null);

(statearr_16845_19208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (1))){
var state_16842__$1 = state_16842;
var statearr_16846_19209 = state_16842__$1;
(statearr_16846_19209[(2)] = null);

(statearr_16846_19209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (4))){
var inst_16789 = (state_16842[(7)]);
var inst_16790 = (state_16842[(8)]);
var inst_16792 = (inst_16790 < inst_16789);
var state_16842__$1 = state_16842;
if(cljs.core.truth_(inst_16792)){
var statearr_16854_19210 = state_16842__$1;
(statearr_16854_19210[(1)] = (6));

} else {
var statearr_16855_19211 = state_16842__$1;
(statearr_16855_19211[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (15))){
var inst_16827 = (state_16842[(9)]);
var inst_16832 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16827);
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16842__$1,(17),out,inst_16832);
} else {
if((state_val_16843 === (13))){
var inst_16827 = (state_16842[(9)]);
var inst_16827__$1 = (state_16842[(2)]);
var inst_16828 = cljs.core.some(cljs.core.nil_QMARK_,inst_16827__$1);
var state_16842__$1 = (function (){var statearr_16856 = state_16842;
(statearr_16856[(9)] = inst_16827__$1);

return statearr_16856;
})();
if(cljs.core.truth_(inst_16828)){
var statearr_16857_19215 = state_16842__$1;
(statearr_16857_19215[(1)] = (14));

} else {
var statearr_16862_19216 = state_16842__$1;
(statearr_16862_19216[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (6))){
var state_16842__$1 = state_16842;
var statearr_16864_19226 = state_16842__$1;
(statearr_16864_19226[(2)] = null);

(statearr_16864_19226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (17))){
var inst_16834 = (state_16842[(2)]);
var state_16842__$1 = (function (){var statearr_16889 = state_16842;
(statearr_16889[(10)] = inst_16834);

return statearr_16889;
})();
var statearr_16893_19227 = state_16842__$1;
(statearr_16893_19227[(2)] = null);

(statearr_16893_19227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (3))){
var inst_16839 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16842__$1,inst_16839);
} else {
if((state_val_16843 === (12))){
var _ = (function (){var statearr_16897 = state_16842;
(statearr_16897[(4)] = cljs.core.rest((state_16842[(4)])));

return statearr_16897;
})();
var state_16842__$1 = state_16842;
var ex16874 = (state_16842__$1[(2)]);
var statearr_16898_19228 = state_16842__$1;
(statearr_16898_19228[(5)] = ex16874);


if((ex16874 instanceof Object)){
var statearr_16913_19230 = state_16842__$1;
(statearr_16913_19230[(1)] = (11));

(statearr_16913_19230[(5)] = null);

} else {
throw ex16874;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (2))){
var inst_16788 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16789 = cnt;
var inst_16790 = (0);
var state_16842__$1 = (function (){var statearr_16926 = state_16842;
(statearr_16926[(11)] = inst_16788);

(statearr_16926[(7)] = inst_16789);

(statearr_16926[(8)] = inst_16790);

return statearr_16926;
})();
var statearr_16927_19236 = state_16842__$1;
(statearr_16927_19236[(2)] = null);

(statearr_16927_19236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (11))){
var inst_16798 = (state_16842[(2)]);
var inst_16799 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16842__$1 = (function (){var statearr_16936 = state_16842;
(statearr_16936[(12)] = inst_16798);

return statearr_16936;
})();
var statearr_16937_19237 = state_16842__$1;
(statearr_16937_19237[(2)] = inst_16799);

(statearr_16937_19237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (9))){
var inst_16790 = (state_16842[(8)]);
var _ = (function (){var statearr_16941 = state_16842;
(statearr_16941[(4)] = cljs.core.cons((12),(state_16842[(4)])));

return statearr_16941;
})();
var inst_16809 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16790) : chs__$1.call(null, inst_16790));
var inst_16810 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16790) : done.call(null, inst_16790));
var inst_16811 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16809,inst_16810);
var ___$1 = (function (){var statearr_16945 = state_16842;
(statearr_16945[(4)] = cljs.core.rest((state_16842[(4)])));

return statearr_16945;
})();
var state_16842__$1 = state_16842;
var statearr_16948_19240 = state_16842__$1;
(statearr_16948_19240[(2)] = inst_16811);

(statearr_16948_19240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (5))){
var inst_16823 = (state_16842[(2)]);
var state_16842__$1 = (function (){var statearr_16954 = state_16842;
(statearr_16954[(13)] = inst_16823);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16842__$1,(13),dchan);
} else {
if((state_val_16843 === (14))){
var inst_16830 = cljs.core.async.close_BANG_(out);
var state_16842__$1 = state_16842;
var statearr_16957_19241 = state_16842__$1;
(statearr_16957_19241[(2)] = inst_16830);

(statearr_16957_19241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (16))){
var inst_16837 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_16958_19242 = state_16842__$1;
(statearr_16958_19242[(2)] = inst_16837);

(statearr_16958_19242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (10))){
var inst_16790 = (state_16842[(8)]);
var inst_16814 = (state_16842[(2)]);
var inst_16817 = (inst_16790 + (1));
var inst_16790__$1 = inst_16817;
var state_16842__$1 = (function (){var statearr_16959 = state_16842;
(statearr_16959[(8)] = inst_16790__$1);

(statearr_16959[(14)] = inst_16814);

return statearr_16959;
})();
var statearr_16961_19244 = state_16842__$1;
(statearr_16961_19244[(2)] = null);

(statearr_16961_19244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (8))){
var inst_16821 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_16964_19245 = state_16842__$1;
(statearr_16964_19245[(2)] = inst_16821);

(statearr_16964_19245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_16967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16967[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_16967[(1)] = (1));

return statearr_16967;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_16842){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_16842);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e16970){var ex__13275__auto__ = e16970;
var statearr_16971_19250 = state_16842;
(statearr_16971_19250[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_16842[(4)]))){
var statearr_16973_19251 = state_16842;
(statearr_16973_19251[(1)] = cljs.core.first((state_16842[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19252 = state_16842;
state_16842 = G__19252;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_16842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_16842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_16974 = f__14358__auto__();
(statearr_16974[(6)] = c__14357__auto___19204);

return statearr_16974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16980 = arguments.length;
switch (G__16980) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14357__auto___19264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_17040){
var state_val_17041 = (state_17040[(1)]);
if((state_val_17041 === (7))){
var inst_17011 = (state_17040[(7)]);
var inst_17012 = (state_17040[(8)]);
var inst_17011__$1 = (state_17040[(2)]);
var inst_17012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17011__$1,(0),null);
var inst_17013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17011__$1,(1),null);
var inst_17017 = (inst_17012__$1 == null);
var state_17040__$1 = (function (){var statearr_17044 = state_17040;
(statearr_17044[(7)] = inst_17011__$1);

(statearr_17044[(8)] = inst_17012__$1);

(statearr_17044[(9)] = inst_17013);

return statearr_17044;
})();
if(cljs.core.truth_(inst_17017)){
var statearr_17045_19270 = state_17040__$1;
(statearr_17045_19270[(1)] = (8));

} else {
var statearr_17048_19271 = state_17040__$1;
(statearr_17048_19271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (1))){
var inst_16994 = cljs.core.vec(chs);
var inst_16995 = inst_16994;
var state_17040__$1 = (function (){var statearr_17052 = state_17040;
(statearr_17052[(10)] = inst_16995);

return statearr_17052;
})();
var statearr_17053_19272 = state_17040__$1;
(statearr_17053_19272[(2)] = null);

(statearr_17053_19272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (4))){
var inst_16995 = (state_17040[(10)]);
var state_17040__$1 = state_17040;
return cljs.core.async.ioc_alts_BANG_(state_17040__$1,(7),inst_16995);
} else {
if((state_val_17041 === (6))){
var inst_17035 = (state_17040[(2)]);
var state_17040__$1 = state_17040;
var statearr_17057_19273 = state_17040__$1;
(statearr_17057_19273[(2)] = inst_17035);

(statearr_17057_19273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (3))){
var inst_17038 = (state_17040[(2)]);
var state_17040__$1 = state_17040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17040__$1,inst_17038);
} else {
if((state_val_17041 === (2))){
var inst_16995 = (state_17040[(10)]);
var inst_17000 = cljs.core.count(inst_16995);
var inst_17002 = (inst_17000 > (0));
var state_17040__$1 = state_17040;
if(cljs.core.truth_(inst_17002)){
var statearr_17059_19274 = state_17040__$1;
(statearr_17059_19274[(1)] = (4));

} else {
var statearr_17061_19275 = state_17040__$1;
(statearr_17061_19275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (11))){
var inst_16995 = (state_17040[(10)]);
var inst_17027 = (state_17040[(2)]);
var tmp17058 = inst_16995;
var inst_16995__$1 = tmp17058;
var state_17040__$1 = (function (){var statearr_17064 = state_17040;
(statearr_17064[(11)] = inst_17027);

(statearr_17064[(10)] = inst_16995__$1);

return statearr_17064;
})();
var statearr_17065_19277 = state_17040__$1;
(statearr_17065_19277[(2)] = null);

(statearr_17065_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (9))){
var inst_17012 = (state_17040[(8)]);
var state_17040__$1 = state_17040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17040__$1,(11),out,inst_17012);
} else {
if((state_val_17041 === (5))){
var inst_17033 = cljs.core.async.close_BANG_(out);
var state_17040__$1 = state_17040;
var statearr_17074_19278 = state_17040__$1;
(statearr_17074_19278[(2)] = inst_17033);

(statearr_17074_19278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (10))){
var inst_17030 = (state_17040[(2)]);
var state_17040__$1 = state_17040;
var statearr_17086_19279 = state_17040__$1;
(statearr_17086_19279[(2)] = inst_17030);

(statearr_17086_19279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (8))){
var inst_17011 = (state_17040[(7)]);
var inst_17012 = (state_17040[(8)]);
var inst_16995 = (state_17040[(10)]);
var inst_17013 = (state_17040[(9)]);
var inst_17022 = (function (){var cs = inst_16995;
var vec__17007 = inst_17011;
var v = inst_17012;
var c = inst_17013;
return (function (p1__16976_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16976_SHARP_);
});
})();
var inst_17023 = cljs.core.filterv(inst_17022,inst_16995);
var inst_16995__$1 = inst_17023;
var state_17040__$1 = (function (){var statearr_17089 = state_17040;
(statearr_17089[(10)] = inst_16995__$1);

return statearr_17089;
})();
var statearr_17091_19282 = state_17040__$1;
(statearr_17091_19282[(2)] = null);

(statearr_17091_19282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_17102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17102[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_17102[(1)] = (1));

return statearr_17102;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_17040){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_17040);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e17109){var ex__13275__auto__ = e17109;
var statearr_17110_19289 = state_17040;
(statearr_17110_19289[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_17040[(4)]))){
var statearr_17111_19291 = state_17040;
(statearr_17111_19291[(1)] = cljs.core.first((state_17040[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19292 = state_17040;
state_17040 = G__19292;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_17040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_17040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_17113 = f__14358__auto__();
(statearr_17113[(6)] = c__14357__auto___19264);

return statearr_17113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17135 = arguments.length;
switch (G__17135) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14357__auto___19298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_17167){
var state_val_17168 = (state_17167[(1)]);
if((state_val_17168 === (7))){
var inst_17148 = (state_17167[(7)]);
var inst_17148__$1 = (state_17167[(2)]);
var inst_17150 = (inst_17148__$1 == null);
var inst_17151 = cljs.core.not(inst_17150);
var state_17167__$1 = (function (){var statearr_17177 = state_17167;
(statearr_17177[(7)] = inst_17148__$1);

return statearr_17177;
})();
if(inst_17151){
var statearr_17178_19300 = state_17167__$1;
(statearr_17178_19300[(1)] = (8));

} else {
var statearr_17179_19301 = state_17167__$1;
(statearr_17179_19301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (1))){
var inst_17141 = (0);
var state_17167__$1 = (function (){var statearr_17182 = state_17167;
(statearr_17182[(8)] = inst_17141);

return statearr_17182;
})();
var statearr_17184_19302 = state_17167__$1;
(statearr_17184_19302[(2)] = null);

(statearr_17184_19302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (4))){
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17167__$1,(7),ch);
} else {
if((state_val_17168 === (6))){
var inst_17162 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
var statearr_17201_19304 = state_17167__$1;
(statearr_17201_19304[(2)] = inst_17162);

(statearr_17201_19304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (3))){
var inst_17164 = (state_17167[(2)]);
var inst_17165 = cljs.core.async.close_BANG_(out);
var state_17167__$1 = (function (){var statearr_17210 = state_17167;
(statearr_17210[(9)] = inst_17164);

return statearr_17210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17167__$1,inst_17165);
} else {
if((state_val_17168 === (2))){
var inst_17141 = (state_17167[(8)]);
var inst_17143 = (inst_17141 < n);
var state_17167__$1 = state_17167;
if(cljs.core.truth_(inst_17143)){
var statearr_17222_19308 = state_17167__$1;
(statearr_17222_19308[(1)] = (4));

} else {
var statearr_17223_19309 = state_17167__$1;
(statearr_17223_19309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (11))){
var inst_17141 = (state_17167[(8)]);
var inst_17154 = (state_17167[(2)]);
var inst_17155 = (inst_17141 + (1));
var inst_17141__$1 = inst_17155;
var state_17167__$1 = (function (){var statearr_17236 = state_17167;
(statearr_17236[(10)] = inst_17154);

(statearr_17236[(8)] = inst_17141__$1);

return statearr_17236;
})();
var statearr_17242_19312 = state_17167__$1;
(statearr_17242_19312[(2)] = null);

(statearr_17242_19312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (9))){
var state_17167__$1 = state_17167;
var statearr_17250_19313 = state_17167__$1;
(statearr_17250_19313[(2)] = null);

(statearr_17250_19313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (5))){
var state_17167__$1 = state_17167;
var statearr_17251_19314 = state_17167__$1;
(statearr_17251_19314[(2)] = null);

(statearr_17251_19314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (10))){
var inst_17159 = (state_17167[(2)]);
var state_17167__$1 = state_17167;
var statearr_17253_19315 = state_17167__$1;
(statearr_17253_19315[(2)] = inst_17159);

(statearr_17253_19315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17168 === (8))){
var inst_17148 = (state_17167[(7)]);
var state_17167__$1 = state_17167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17167__$1,(11),out,inst_17148);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_17262 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17262[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_17262[(1)] = (1));

return statearr_17262;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_17167){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_17167);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e17266){var ex__13275__auto__ = e17266;
var statearr_17277_19321 = state_17167;
(statearr_17277_19321[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_17167[(4)]))){
var statearr_17279_19322 = state_17167;
(statearr_17279_19322[(1)] = cljs.core.first((state_17167[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19328 = state_17167;
state_17167 = G__19328;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_17167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_17167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_17282 = f__14358__auto__();
(statearr_17282[(6)] = c__14357__auto___19298);

return statearr_17282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17309 = (function (f,ch,meta17291,_,fn1,meta17310){
this.f = f;
this.ch = ch;
this.meta17291 = meta17291;
this._ = _;
this.fn1 = fn1;
this.meta17310 = meta17310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17311,meta17310__$1){
var self__ = this;
var _17311__$1 = this;
return (new cljs.core.async.t_cljs$core$async17309(self__.f,self__.ch,self__.meta17291,self__._,self__.fn1,meta17310__$1));
}));

(cljs.core.async.t_cljs$core$async17309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17311){
var self__ = this;
var _17311__$1 = this;
return self__.meta17310;
}));

(cljs.core.async.t_cljs$core$async17309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17283_SHARP_){
var G__17332 = (((p1__17283_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17283_SHARP_) : self__.f.call(null, p1__17283_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17332) : f1.call(null, G__17332));
});
}));

(cljs.core.async.t_cljs$core$async17309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17291","meta17291",-1660369129,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17290","cljs.core.async/t_cljs$core$async17290",985371007,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17310","meta17310",540768681,null)], null);
}));

(cljs.core.async.t_cljs$core$async17309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17309");

(cljs.core.async.t_cljs$core$async17309.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17309.
 */
cljs.core.async.__GT_t_cljs$core$async17309 = (function cljs$core$async$__GT_t_cljs$core$async17309(f,ch,meta17291,_,fn1,meta17310){
return (new cljs.core.async.t_cljs$core$async17309(f,ch,meta17291,_,fn1,meta17310));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17290 = (function (f,ch,meta17291){
this.f = f;
this.ch = ch;
this.meta17291 = meta17291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17292,meta17291__$1){
var self__ = this;
var _17292__$1 = this;
return (new cljs.core.async.t_cljs$core$async17290(self__.f,self__.ch,meta17291__$1));
}));

(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17292){
var self__ = this;
var _17292__$1 = this;
return self__.meta17291;
}));

(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17309(self__.f,self__.ch,self__.meta17291,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17351 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17351) : self__.f.call(null, G__17351));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17291","meta17291",-1660369129,null)], null);
}));

(cljs.core.async.t_cljs$core$async17290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17290");

(cljs.core.async.t_cljs$core$async17290.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17290.
 */
cljs.core.async.__GT_t_cljs$core$async17290 = (function cljs$core$async$__GT_t_cljs$core$async17290(f,ch,meta17291){
return (new cljs.core.async.t_cljs$core$async17290(f,ch,meta17291));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17290(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17367 = (function (f,ch,meta17368){
this.f = f;
this.ch = ch;
this.meta17368 = meta17368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17369,meta17368__$1){
var self__ = this;
var _17369__$1 = this;
return (new cljs.core.async.t_cljs$core$async17367(self__.f,self__.ch,meta17368__$1));
}));

(cljs.core.async.t_cljs$core$async17367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17369){
var self__ = this;
var _17369__$1 = this;
return self__.meta17368;
}));

(cljs.core.async.t_cljs$core$async17367.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17367.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17367.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17368","meta17368",-1007982118,null)], null);
}));

(cljs.core.async.t_cljs$core$async17367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17367");

(cljs.core.async.t_cljs$core$async17367.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17367.
 */
cljs.core.async.__GT_t_cljs$core$async17367 = (function cljs$core$async$__GT_t_cljs$core$async17367(f,ch,meta17368){
return (new cljs.core.async.t_cljs$core$async17367(f,ch,meta17368));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17367(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17412 = (function (p,ch,meta17413){
this.p = p;
this.ch = ch;
this.meta17413 = meta17413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17414,meta17413__$1){
var self__ = this;
var _17414__$1 = this;
return (new cljs.core.async.t_cljs$core$async17412(self__.p,self__.ch,meta17413__$1));
}));

(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17414){
var self__ = this;
var _17414__$1 = this;
return self__.meta17413;
}));

(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17412.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17413","meta17413",-1802502905,null)], null);
}));

(cljs.core.async.t_cljs$core$async17412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17412");

(cljs.core.async.t_cljs$core$async17412.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17412.
 */
cljs.core.async.__GT_t_cljs$core$async17412 = (function cljs$core$async$__GT_t_cljs$core$async17412(p,ch,meta17413){
return (new cljs.core.async.t_cljs$core$async17412(p,ch,meta17413));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17412(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17481 = arguments.length;
switch (G__17481) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14357__auto___19354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_17525){
var state_val_17526 = (state_17525[(1)]);
if((state_val_17526 === (7))){
var inst_17521 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
var statearr_17530_19356 = state_17525__$1;
(statearr_17530_19356[(2)] = inst_17521);

(statearr_17530_19356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (1))){
var state_17525__$1 = state_17525;
var statearr_17531_19357 = state_17525__$1;
(statearr_17531_19357[(2)] = null);

(statearr_17531_19357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (4))){
var inst_17493 = (state_17525[(7)]);
var inst_17493__$1 = (state_17525[(2)]);
var inst_17495 = (inst_17493__$1 == null);
var state_17525__$1 = (function (){var statearr_17539 = state_17525;
(statearr_17539[(7)] = inst_17493__$1);

return statearr_17539;
})();
if(cljs.core.truth_(inst_17495)){
var statearr_17544_19360 = state_17525__$1;
(statearr_17544_19360[(1)] = (5));

} else {
var statearr_17545_19363 = state_17525__$1;
(statearr_17545_19363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (6))){
var inst_17493 = (state_17525[(7)]);
var inst_17511 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17493) : p.call(null, inst_17493));
var state_17525__$1 = state_17525;
if(cljs.core.truth_(inst_17511)){
var statearr_17546_19364 = state_17525__$1;
(statearr_17546_19364[(1)] = (8));

} else {
var statearr_17547_19366 = state_17525__$1;
(statearr_17547_19366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (3))){
var inst_17523 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17525__$1,inst_17523);
} else {
if((state_val_17526 === (2))){
var state_17525__$1 = state_17525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17525__$1,(4),ch);
} else {
if((state_val_17526 === (11))){
var inst_17515 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
var statearr_17550_19377 = state_17525__$1;
(statearr_17550_19377[(2)] = inst_17515);

(statearr_17550_19377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (9))){
var state_17525__$1 = state_17525;
var statearr_17553_19378 = state_17525__$1;
(statearr_17553_19378[(2)] = null);

(statearr_17553_19378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (5))){
var inst_17509 = cljs.core.async.close_BANG_(out);
var state_17525__$1 = state_17525;
var statearr_17556_19379 = state_17525__$1;
(statearr_17556_19379[(2)] = inst_17509);

(statearr_17556_19379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (10))){
var inst_17518 = (state_17525[(2)]);
var state_17525__$1 = (function (){var statearr_17559 = state_17525;
(statearr_17559[(8)] = inst_17518);

return statearr_17559;
})();
var statearr_17560_19381 = state_17525__$1;
(statearr_17560_19381[(2)] = null);

(statearr_17560_19381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (8))){
var inst_17493 = (state_17525[(7)]);
var state_17525__$1 = state_17525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17525__$1,(11),out,inst_17493);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_17564 = [null,null,null,null,null,null,null,null,null];
(statearr_17564[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_17564[(1)] = (1));

return statearr_17564;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_17525){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_17525);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e17567){var ex__13275__auto__ = e17567;
var statearr_17568_19389 = state_17525;
(statearr_17568_19389[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_17525[(4)]))){
var statearr_17571_19390 = state_17525;
(statearr_17571_19390[(1)] = cljs.core.first((state_17525[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19391 = state_17525;
state_17525 = G__19391;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_17525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_17525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_17572 = f__14358__auto__();
(statearr_17572[(6)] = c__14357__auto___19354);

return statearr_17572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17580 = arguments.length;
switch (G__17580) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14357__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_17654){
var state_val_17655 = (state_17654[(1)]);
if((state_val_17655 === (7))){
var inst_17650 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17656_19399 = state_17654__$1;
(statearr_17656_19399[(2)] = inst_17650);

(statearr_17656_19399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (20))){
var inst_17616 = (state_17654[(7)]);
var inst_17627 = (state_17654[(2)]);
var inst_17628 = cljs.core.next(inst_17616);
var inst_17599 = inst_17628;
var inst_17600 = null;
var inst_17601 = (0);
var inst_17602 = (0);
var state_17654__$1 = (function (){var statearr_17663 = state_17654;
(statearr_17663[(8)] = inst_17600);

(statearr_17663[(9)] = inst_17602);

(statearr_17663[(10)] = inst_17601);

(statearr_17663[(11)] = inst_17599);

(statearr_17663[(12)] = inst_17627);

return statearr_17663;
})();
var statearr_17664_19405 = state_17654__$1;
(statearr_17664_19405[(2)] = null);

(statearr_17664_19405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (1))){
var state_17654__$1 = state_17654;
var statearr_17665_19406 = state_17654__$1;
(statearr_17665_19406[(2)] = null);

(statearr_17665_19406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (4))){
var inst_17588 = (state_17654[(13)]);
var inst_17588__$1 = (state_17654[(2)]);
var inst_17589 = (inst_17588__$1 == null);
var state_17654__$1 = (function (){var statearr_17672 = state_17654;
(statearr_17672[(13)] = inst_17588__$1);

return statearr_17672;
})();
if(cljs.core.truth_(inst_17589)){
var statearr_17673_19412 = state_17654__$1;
(statearr_17673_19412[(1)] = (5));

} else {
var statearr_17674_19413 = state_17654__$1;
(statearr_17674_19413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (15))){
var state_17654__$1 = state_17654;
var statearr_17684_19414 = state_17654__$1;
(statearr_17684_19414[(2)] = null);

(statearr_17684_19414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (21))){
var state_17654__$1 = state_17654;
var statearr_17686_19415 = state_17654__$1;
(statearr_17686_19415[(2)] = null);

(statearr_17686_19415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (13))){
var inst_17600 = (state_17654[(8)]);
var inst_17602 = (state_17654[(9)]);
var inst_17601 = (state_17654[(10)]);
var inst_17599 = (state_17654[(11)]);
var inst_17612 = (state_17654[(2)]);
var inst_17613 = (inst_17602 + (1));
var tmp17678 = inst_17600;
var tmp17679 = inst_17601;
var tmp17680 = inst_17599;
var inst_17599__$1 = tmp17680;
var inst_17600__$1 = tmp17678;
var inst_17601__$1 = tmp17679;
var inst_17602__$1 = inst_17613;
var state_17654__$1 = (function (){var statearr_17690 = state_17654;
(statearr_17690[(14)] = inst_17612);

(statearr_17690[(8)] = inst_17600__$1);

(statearr_17690[(9)] = inst_17602__$1);

(statearr_17690[(10)] = inst_17601__$1);

(statearr_17690[(11)] = inst_17599__$1);

return statearr_17690;
})();
var statearr_17691_19421 = state_17654__$1;
(statearr_17691_19421[(2)] = null);

(statearr_17691_19421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (22))){
var state_17654__$1 = state_17654;
var statearr_17692_19422 = state_17654__$1;
(statearr_17692_19422[(2)] = null);

(statearr_17692_19422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (6))){
var inst_17588 = (state_17654[(13)]);
var inst_17597 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17588) : f.call(null, inst_17588));
var inst_17598 = cljs.core.seq(inst_17597);
var inst_17599 = inst_17598;
var inst_17600 = null;
var inst_17601 = (0);
var inst_17602 = (0);
var state_17654__$1 = (function (){var statearr_17699 = state_17654;
(statearr_17699[(8)] = inst_17600);

(statearr_17699[(9)] = inst_17602);

(statearr_17699[(10)] = inst_17601);

(statearr_17699[(11)] = inst_17599);

return statearr_17699;
})();
var statearr_17700_19427 = state_17654__$1;
(statearr_17700_19427[(2)] = null);

(statearr_17700_19427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (17))){
var inst_17616 = (state_17654[(7)]);
var inst_17620 = cljs.core.chunk_first(inst_17616);
var inst_17621 = cljs.core.chunk_rest(inst_17616);
var inst_17622 = cljs.core.count(inst_17620);
var inst_17599 = inst_17621;
var inst_17600 = inst_17620;
var inst_17601 = inst_17622;
var inst_17602 = (0);
var state_17654__$1 = (function (){var statearr_17703 = state_17654;
(statearr_17703[(8)] = inst_17600);

(statearr_17703[(9)] = inst_17602);

(statearr_17703[(10)] = inst_17601);

(statearr_17703[(11)] = inst_17599);

return statearr_17703;
})();
var statearr_17710_19429 = state_17654__$1;
(statearr_17710_19429[(2)] = null);

(statearr_17710_19429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (3))){
var inst_17652 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17654__$1,inst_17652);
} else {
if((state_val_17655 === (12))){
var inst_17637 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17711_19430 = state_17654__$1;
(statearr_17711_19430[(2)] = inst_17637);

(statearr_17711_19430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (2))){
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17654__$1,(4),in$);
} else {
if((state_val_17655 === (23))){
var inst_17648 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17712_19436 = state_17654__$1;
(statearr_17712_19436[(2)] = inst_17648);

(statearr_17712_19436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (19))){
var inst_17631 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17714_19441 = state_17654__$1;
(statearr_17714_19441[(2)] = inst_17631);

(statearr_17714_19441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (11))){
var inst_17616 = (state_17654[(7)]);
var inst_17599 = (state_17654[(11)]);
var inst_17616__$1 = cljs.core.seq(inst_17599);
var state_17654__$1 = (function (){var statearr_17716 = state_17654;
(statearr_17716[(7)] = inst_17616__$1);

return statearr_17716;
})();
if(inst_17616__$1){
var statearr_17717_19443 = state_17654__$1;
(statearr_17717_19443[(1)] = (14));

} else {
var statearr_17718_19445 = state_17654__$1;
(statearr_17718_19445[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (9))){
var inst_17641 = (state_17654[(2)]);
var inst_17643 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17654__$1 = (function (){var statearr_17722 = state_17654;
(statearr_17722[(15)] = inst_17641);

return statearr_17722;
})();
if(cljs.core.truth_(inst_17643)){
var statearr_17723_19449 = state_17654__$1;
(statearr_17723_19449[(1)] = (21));

} else {
var statearr_17724_19450 = state_17654__$1;
(statearr_17724_19450[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (5))){
var inst_17591 = cljs.core.async.close_BANG_(out);
var state_17654__$1 = state_17654;
var statearr_17725_19451 = state_17654__$1;
(statearr_17725_19451[(2)] = inst_17591);

(statearr_17725_19451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (14))){
var inst_17616 = (state_17654[(7)]);
var inst_17618 = cljs.core.chunked_seq_QMARK_(inst_17616);
var state_17654__$1 = state_17654;
if(inst_17618){
var statearr_17731_19453 = state_17654__$1;
(statearr_17731_19453[(1)] = (17));

} else {
var statearr_17732_19454 = state_17654__$1;
(statearr_17732_19454[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (16))){
var inst_17634 = (state_17654[(2)]);
var state_17654__$1 = state_17654;
var statearr_17733_19455 = state_17654__$1;
(statearr_17733_19455[(2)] = inst_17634);

(statearr_17733_19455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17655 === (10))){
var inst_17600 = (state_17654[(8)]);
var inst_17602 = (state_17654[(9)]);
var inst_17610 = cljs.core._nth(inst_17600,inst_17602);
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17654__$1,(13),out,inst_17610);
} else {
if((state_val_17655 === (18))){
var inst_17616 = (state_17654[(7)]);
var inst_17625 = cljs.core.first(inst_17616);
var state_17654__$1 = state_17654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17654__$1,(20),out,inst_17625);
} else {
if((state_val_17655 === (8))){
var inst_17602 = (state_17654[(9)]);
var inst_17601 = (state_17654[(10)]);
var inst_17607 = (inst_17602 < inst_17601);
var inst_17608 = inst_17607;
var state_17654__$1 = state_17654;
if(cljs.core.truth_(inst_17608)){
var statearr_17742_19460 = state_17654__$1;
(statearr_17742_19460[(1)] = (10));

} else {
var statearr_17743_19461 = state_17654__$1;
(statearr_17743_19461[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13272__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13272__auto____0 = (function (){
var statearr_17747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17747[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13272__auto__);

(statearr_17747[(1)] = (1));

return statearr_17747;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13272__auto____1 = (function (state_17654){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_17654);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e17749){var ex__13275__auto__ = e17749;
var statearr_17750_19462 = state_17654;
(statearr_17750_19462[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_17654[(4)]))){
var statearr_17751_19463 = state_17654;
(statearr_17751_19463[(1)] = cljs.core.first((state_17654[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19464 = state_17654;
state_17654 = G__19464;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13272__auto__ = function(state_17654){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13272__auto____1.call(this,state_17654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13272__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13272__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_17754 = f__14358__auto__();
(statearr_17754[(6)] = c__14357__auto__);

return statearr_17754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));

return c__14357__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17761 = arguments.length;
switch (G__17761) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17770 = arguments.length;
switch (G__17770) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17778 = arguments.length;
switch (G__17778) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14357__auto___19474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_17812){
var state_val_17813 = (state_17812[(1)]);
if((state_val_17813 === (7))){
var inst_17807 = (state_17812[(2)]);
var state_17812__$1 = state_17812;
var statearr_17816_19478 = state_17812__$1;
(statearr_17816_19478[(2)] = inst_17807);

(statearr_17816_19478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17813 === (1))){
var inst_17789 = null;
var state_17812__$1 = (function (){var statearr_17817 = state_17812;
(statearr_17817[(7)] = inst_17789);

return statearr_17817;
})();
var statearr_17818_19479 = state_17812__$1;
(statearr_17818_19479[(2)] = null);

(statearr_17818_19479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17813 === (4))){
var inst_17792 = (state_17812[(8)]);
var inst_17792__$1 = (state_17812[(2)]);
var inst_17793 = (inst_17792__$1 == null);
var inst_17794 = cljs.core.not(inst_17793);
var state_17812__$1 = (function (){var statearr_17820 = state_17812;
(statearr_17820[(8)] = inst_17792__$1);

return statearr_17820;
})();
if(inst_17794){
var statearr_17821_19481 = state_17812__$1;
(statearr_17821_19481[(1)] = (5));

} else {
var statearr_17822_19483 = state_17812__$1;
(statearr_17822_19483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17813 === (6))){
var state_17812__$1 = state_17812;
var statearr_17827_19484 = state_17812__$1;
(statearr_17827_19484[(2)] = null);

(statearr_17827_19484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17813 === (3))){
var inst_17809 = (state_17812[(2)]);
var inst_17810 = cljs.core.async.close_BANG_(out);
var state_17812__$1 = (function (){var statearr_17828 = state_17812;
(statearr_17828[(9)] = inst_17809);

return statearr_17828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17812__$1,inst_17810);
} else {
if((state_val_17813 === (2))){
var state_17812__$1 = state_17812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17812__$1,(4),ch);
} else {
if((state_val_17813 === (11))){
var inst_17792 = (state_17812[(8)]);
var inst_17801 = (state_17812[(2)]);
var inst_17789 = inst_17792;
var state_17812__$1 = (function (){var statearr_17829 = state_17812;
(statearr_17829[(7)] = inst_17789);

(statearr_17829[(10)] = inst_17801);

return statearr_17829;
})();
var statearr_17832_19487 = state_17812__$1;
(statearr_17832_19487[(2)] = null);

(statearr_17832_19487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17813 === (9))){
var inst_17792 = (state_17812[(8)]);
var state_17812__$1 = state_17812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17812__$1,(11),out,inst_17792);
} else {
if((state_val_17813 === (5))){
var inst_17792 = (state_17812[(8)]);
var inst_17789 = (state_17812[(7)]);
var inst_17796 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17792,inst_17789);
var state_17812__$1 = state_17812;
if(inst_17796){
var statearr_17838_19488 = state_17812__$1;
(statearr_17838_19488[(1)] = (8));

} else {
var statearr_17839_19489 = state_17812__$1;
(statearr_17839_19489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17813 === (10))){
var inst_17804 = (state_17812[(2)]);
var state_17812__$1 = state_17812;
var statearr_17842_19490 = state_17812__$1;
(statearr_17842_19490[(2)] = inst_17804);

(statearr_17842_19490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17813 === (8))){
var inst_17789 = (state_17812[(7)]);
var tmp17837 = inst_17789;
var inst_17789__$1 = tmp17837;
var state_17812__$1 = (function (){var statearr_17843 = state_17812;
(statearr_17843[(7)] = inst_17789__$1);

return statearr_17843;
})();
var statearr_17844_19491 = state_17812__$1;
(statearr_17844_19491[(2)] = null);

(statearr_17844_19491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_17850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17850[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_17850[(1)] = (1));

return statearr_17850;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_17812){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_17812);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e17860){var ex__13275__auto__ = e17860;
var statearr_17861_19492 = state_17812;
(statearr_17861_19492[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_17812[(4)]))){
var statearr_17862_19493 = state_17812;
(statearr_17862_19493[(1)] = cljs.core.first((state_17812[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19494 = state_17812;
state_17812 = G__19494;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_17812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_17812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_17863 = f__14358__auto__();
(statearr_17863[(6)] = c__14357__auto___19474);

return statearr_17863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17868 = arguments.length;
switch (G__17868) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14357__auto___19499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_17914){
var state_val_17915 = (state_17914[(1)]);
if((state_val_17915 === (7))){
var inst_17910 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17917_19501 = state_17914__$1;
(statearr_17917_19501[(2)] = inst_17910);

(statearr_17917_19501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (1))){
var inst_17876 = (new Array(n));
var inst_17877 = inst_17876;
var inst_17878 = (0);
var state_17914__$1 = (function (){var statearr_17918 = state_17914;
(statearr_17918[(7)] = inst_17877);

(statearr_17918[(8)] = inst_17878);

return statearr_17918;
})();
var statearr_17922_19503 = state_17914__$1;
(statearr_17922_19503[(2)] = null);

(statearr_17922_19503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (4))){
var inst_17881 = (state_17914[(9)]);
var inst_17881__$1 = (state_17914[(2)]);
var inst_17882 = (inst_17881__$1 == null);
var inst_17883 = cljs.core.not(inst_17882);
var state_17914__$1 = (function (){var statearr_17938 = state_17914;
(statearr_17938[(9)] = inst_17881__$1);

return statearr_17938;
})();
if(inst_17883){
var statearr_17945_19504 = state_17914__$1;
(statearr_17945_19504[(1)] = (5));

} else {
var statearr_17956_19505 = state_17914__$1;
(statearr_17956_19505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (15))){
var inst_17903 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17960_19506 = state_17914__$1;
(statearr_17960_19506[(2)] = inst_17903);

(statearr_17960_19506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (13))){
var state_17914__$1 = state_17914;
var statearr_17961_19507 = state_17914__$1;
(statearr_17961_19507[(2)] = null);

(statearr_17961_19507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (6))){
var inst_17878 = (state_17914[(8)]);
var inst_17899 = (inst_17878 > (0));
var state_17914__$1 = state_17914;
if(cljs.core.truth_(inst_17899)){
var statearr_17968_19508 = state_17914__$1;
(statearr_17968_19508[(1)] = (12));

} else {
var statearr_17969_19513 = state_17914__$1;
(statearr_17969_19513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (3))){
var inst_17912 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17914__$1,inst_17912);
} else {
if((state_val_17915 === (12))){
var inst_17877 = (state_17914[(7)]);
var inst_17901 = cljs.core.vec(inst_17877);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17914__$1,(15),out,inst_17901);
} else {
if((state_val_17915 === (2))){
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17914__$1,(4),ch);
} else {
if((state_val_17915 === (11))){
var inst_17893 = (state_17914[(2)]);
var inst_17894 = (new Array(n));
var inst_17877 = inst_17894;
var inst_17878 = (0);
var state_17914__$1 = (function (){var statearr_17976 = state_17914;
(statearr_17976[(10)] = inst_17893);

(statearr_17976[(7)] = inst_17877);

(statearr_17976[(8)] = inst_17878);

return statearr_17976;
})();
var statearr_17977_19516 = state_17914__$1;
(statearr_17977_19516[(2)] = null);

(statearr_17977_19516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (9))){
var inst_17877 = (state_17914[(7)]);
var inst_17891 = cljs.core.vec(inst_17877);
var state_17914__$1 = state_17914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17914__$1,(11),out,inst_17891);
} else {
if((state_val_17915 === (5))){
var inst_17881 = (state_17914[(9)]);
var inst_17877 = (state_17914[(7)]);
var inst_17886 = (state_17914[(11)]);
var inst_17878 = (state_17914[(8)]);
var inst_17885 = (inst_17877[inst_17878] = inst_17881);
var inst_17886__$1 = (inst_17878 + (1));
var inst_17887 = (inst_17886__$1 < n);
var state_17914__$1 = (function (){var statearr_17978 = state_17914;
(statearr_17978[(11)] = inst_17886__$1);

(statearr_17978[(12)] = inst_17885);

return statearr_17978;
})();
if(cljs.core.truth_(inst_17887)){
var statearr_17979_19527 = state_17914__$1;
(statearr_17979_19527[(1)] = (8));

} else {
var statearr_17980_19529 = state_17914__$1;
(statearr_17980_19529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (14))){
var inst_17906 = (state_17914[(2)]);
var inst_17908 = cljs.core.async.close_BANG_(out);
var state_17914__$1 = (function (){var statearr_17982 = state_17914;
(statearr_17982[(13)] = inst_17906);

return statearr_17982;
})();
var statearr_17983_19532 = state_17914__$1;
(statearr_17983_19532[(2)] = inst_17908);

(statearr_17983_19532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (10))){
var inst_17897 = (state_17914[(2)]);
var state_17914__$1 = state_17914;
var statearr_17984_19533 = state_17914__$1;
(statearr_17984_19533[(2)] = inst_17897);

(statearr_17984_19533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17915 === (8))){
var inst_17877 = (state_17914[(7)]);
var inst_17886 = (state_17914[(11)]);
var tmp17981 = inst_17877;
var inst_17877__$1 = tmp17981;
var inst_17878 = inst_17886;
var state_17914__$1 = (function (){var statearr_17985 = state_17914;
(statearr_17985[(7)] = inst_17877__$1);

(statearr_17985[(8)] = inst_17878);

return statearr_17985;
})();
var statearr_17986_19544 = state_17914__$1;
(statearr_17986_19544[(2)] = null);

(statearr_17986_19544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_17987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17987[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_17987[(1)] = (1));

return statearr_17987;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_17914){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_17914);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e17990){var ex__13275__auto__ = e17990;
var statearr_17991_19546 = state_17914;
(statearr_17991_19546[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_17914[(4)]))){
var statearr_17993_19551 = state_17914;
(statearr_17993_19551[(1)] = cljs.core.first((state_17914[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19552 = state_17914;
state_17914 = G__19552;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_17914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_17914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_17994 = f__14358__auto__();
(statearr_17994[(6)] = c__14357__auto___19499);

return statearr_17994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18003 = arguments.length;
switch (G__18003) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14357__auto___19555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_18059){
var state_val_18060 = (state_18059[(1)]);
if((state_val_18060 === (7))){
var inst_18054 = (state_18059[(2)]);
var state_18059__$1 = state_18059;
var statearr_18066_19559 = state_18059__$1;
(statearr_18066_19559[(2)] = inst_18054);

(statearr_18066_19559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (1))){
var inst_18010 = [];
var inst_18011 = inst_18010;
var inst_18012 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18059__$1 = (function (){var statearr_18068 = state_18059;
(statearr_18068[(7)] = inst_18012);

(statearr_18068[(8)] = inst_18011);

return statearr_18068;
})();
var statearr_18069_19560 = state_18059__$1;
(statearr_18069_19560[(2)] = null);

(statearr_18069_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (4))){
var inst_18015 = (state_18059[(9)]);
var inst_18015__$1 = (state_18059[(2)]);
var inst_18016 = (inst_18015__$1 == null);
var inst_18017 = cljs.core.not(inst_18016);
var state_18059__$1 = (function (){var statearr_18071 = state_18059;
(statearr_18071[(9)] = inst_18015__$1);

return statearr_18071;
})();
if(inst_18017){
var statearr_18073_19561 = state_18059__$1;
(statearr_18073_19561[(1)] = (5));

} else {
var statearr_18074_19565 = state_18059__$1;
(statearr_18074_19565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (15))){
var inst_18011 = (state_18059[(8)]);
var inst_18046 = cljs.core.vec(inst_18011);
var state_18059__$1 = state_18059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18059__$1,(18),out,inst_18046);
} else {
if((state_val_18060 === (13))){
var inst_18041 = (state_18059[(2)]);
var state_18059__$1 = state_18059;
var statearr_18076_19566 = state_18059__$1;
(statearr_18076_19566[(2)] = inst_18041);

(statearr_18076_19566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (6))){
var inst_18011 = (state_18059[(8)]);
var inst_18043 = inst_18011.length;
var inst_18044 = (inst_18043 > (0));
var state_18059__$1 = state_18059;
if(cljs.core.truth_(inst_18044)){
var statearr_18078_19567 = state_18059__$1;
(statearr_18078_19567[(1)] = (15));

} else {
var statearr_18079_19568 = state_18059__$1;
(statearr_18079_19568[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (17))){
var inst_18051 = (state_18059[(2)]);
var inst_18052 = cljs.core.async.close_BANG_(out);
var state_18059__$1 = (function (){var statearr_18082 = state_18059;
(statearr_18082[(10)] = inst_18051);

return statearr_18082;
})();
var statearr_18083_19569 = state_18059__$1;
(statearr_18083_19569[(2)] = inst_18052);

(statearr_18083_19569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (3))){
var inst_18056 = (state_18059[(2)]);
var state_18059__$1 = state_18059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18059__$1,inst_18056);
} else {
if((state_val_18060 === (12))){
var inst_18011 = (state_18059[(8)]);
var inst_18030 = cljs.core.vec(inst_18011);
var state_18059__$1 = state_18059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18059__$1,(14),out,inst_18030);
} else {
if((state_val_18060 === (2))){
var state_18059__$1 = state_18059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18059__$1,(4),ch);
} else {
if((state_val_18060 === (11))){
var inst_18015 = (state_18059[(9)]);
var inst_18011 = (state_18059[(8)]);
var inst_18019 = (state_18059[(11)]);
var inst_18027 = inst_18011.push(inst_18015);
var tmp18084 = inst_18011;
var inst_18011__$1 = tmp18084;
var inst_18012 = inst_18019;
var state_18059__$1 = (function (){var statearr_18085 = state_18059;
(statearr_18085[(7)] = inst_18012);

(statearr_18085[(8)] = inst_18011__$1);

(statearr_18085[(12)] = inst_18027);

return statearr_18085;
})();
var statearr_18086_19578 = state_18059__$1;
(statearr_18086_19578[(2)] = null);

(statearr_18086_19578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (9))){
var inst_18012 = (state_18059[(7)]);
var inst_18023 = cljs.core.keyword_identical_QMARK_(inst_18012,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18059__$1 = state_18059;
var statearr_18087_19585 = state_18059__$1;
(statearr_18087_19585[(2)] = inst_18023);

(statearr_18087_19585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (5))){
var inst_18012 = (state_18059[(7)]);
var inst_18015 = (state_18059[(9)]);
var inst_18019 = (state_18059[(11)]);
var inst_18020 = (state_18059[(13)]);
var inst_18019__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18015) : f.call(null, inst_18015));
var inst_18020__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18019__$1,inst_18012);
var state_18059__$1 = (function (){var statearr_18088 = state_18059;
(statearr_18088[(11)] = inst_18019__$1);

(statearr_18088[(13)] = inst_18020__$1);

return statearr_18088;
})();
if(inst_18020__$1){
var statearr_18090_19594 = state_18059__$1;
(statearr_18090_19594[(1)] = (8));

} else {
var statearr_18091_19595 = state_18059__$1;
(statearr_18091_19595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (14))){
var inst_18015 = (state_18059[(9)]);
var inst_18019 = (state_18059[(11)]);
var inst_18032 = (state_18059[(2)]);
var inst_18037 = [];
var inst_18038 = inst_18037.push(inst_18015);
var inst_18011 = inst_18037;
var inst_18012 = inst_18019;
var state_18059__$1 = (function (){var statearr_18096 = state_18059;
(statearr_18096[(7)] = inst_18012);

(statearr_18096[(8)] = inst_18011);

(statearr_18096[(14)] = inst_18032);

(statearr_18096[(15)] = inst_18038);

return statearr_18096;
})();
var statearr_18103_19596 = state_18059__$1;
(statearr_18103_19596[(2)] = null);

(statearr_18103_19596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (16))){
var state_18059__$1 = state_18059;
var statearr_18104_19597 = state_18059__$1;
(statearr_18104_19597[(2)] = null);

(statearr_18104_19597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (10))){
var inst_18025 = (state_18059[(2)]);
var state_18059__$1 = state_18059;
if(cljs.core.truth_(inst_18025)){
var statearr_18105_19598 = state_18059__$1;
(statearr_18105_19598[(1)] = (11));

} else {
var statearr_18106_19599 = state_18059__$1;
(statearr_18106_19599[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (18))){
var inst_18048 = (state_18059[(2)]);
var state_18059__$1 = state_18059;
var statearr_18107_19600 = state_18059__$1;
(statearr_18107_19600[(2)] = inst_18048);

(statearr_18107_19600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18060 === (8))){
var inst_18020 = (state_18059[(13)]);
var state_18059__$1 = state_18059;
var statearr_18108_19602 = state_18059__$1;
(statearr_18108_19602[(2)] = inst_18020);

(statearr_18108_19602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13272__auto__ = null;
var cljs$core$async$state_machine__13272__auto____0 = (function (){
var statearr_18109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18109[(0)] = cljs$core$async$state_machine__13272__auto__);

(statearr_18109[(1)] = (1));

return statearr_18109;
});
var cljs$core$async$state_machine__13272__auto____1 = (function (state_18059){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_18059);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e18110){var ex__13275__auto__ = e18110;
var statearr_18111_19604 = state_18059;
(statearr_18111_19604[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_18059[(4)]))){
var statearr_18112_19605 = state_18059;
(statearr_18112_19605[(1)] = cljs.core.first((state_18059[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19606 = state_18059;
state_18059 = G__19606;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
cljs$core$async$state_machine__13272__auto__ = function(state_18059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13272__auto____1.call(this,state_18059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13272__auto____0;
cljs$core$async$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13272__auto____1;
return cljs$core$async$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_18115 = f__14358__auto__();
(statearr_18115[(6)] = c__14357__auto___19555);

return statearr_18115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
