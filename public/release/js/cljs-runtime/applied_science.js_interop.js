goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18374 = arguments.length;
var i__5727__auto___18375 = (0);
while(true){
if((i__5727__auto___18375 < len__5726__auto___18374)){
args__5732__auto__.push((arguments[i__5727__auto___18375]));

var G__18376 = (i__5727__auto___18375 + (1));
i__5727__auto___18375 = G__18376;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__17998_18379 = keyvals;
var vec__17999_18380 = G__17998_18379;
var seq__18000_18381 = cljs.core.seq(vec__17999_18380);
var first__18001_18382 = cljs.core.first(seq__18000_18381);
var seq__18000_18383__$1 = cljs.core.next(seq__18000_18381);
var k_18384 = first__18001_18382;
var first__18001_18385__$1 = cljs.core.first(seq__18000_18383__$1);
var seq__18000_18386__$2 = cljs.core.next(seq__18000_18383__$1);
var v_18387 = first__18001_18385__$1;
var keyvals_18388__$1 = seq__18000_18386__$2;
var G__17998_18389__$1 = G__17998_18379;
while(true){
var vec__18004_18390 = G__17998_18389__$1;
var seq__18005_18391 = cljs.core.seq(vec__18004_18390);
var first__18006_18392 = cljs.core.first(seq__18005_18391);
var seq__18005_18393__$1 = cljs.core.next(seq__18005_18391);
var k_18394__$1 = first__18006_18392;
var first__18006_18395__$1 = cljs.core.first(seq__18005_18393__$1);
var seq__18005_18396__$2 = cljs.core.next(seq__18005_18393__$1);
var v_18397__$1 = first__18006_18395__$1;
var keyvals_18398__$2 = seq__18005_18396__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_18394__$1)] = v_18397__$1);

if(keyvals_18398__$2){
var G__18401 = keyvals_18398__$2;
G__17998_18389__$1 = G__18401;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq17988){
var G__17989 = cljs.core.first(seq17988);
var seq17988__$1 = cljs.core.next(seq17988);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17989,seq17988__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__18061 = arguments.length;
switch (G__18061) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj18067 = obj;
if((!((obj18067 == null)))){
return (obj18067[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj18070 = obj;
if((!((obj18070 == null)))){
return (obj18070[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__16591__auto__ = (function (){var obj18072 = obj;
if((!((obj18072 == null)))){
return (obj18072[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__16591__auto__)){
return not_found;
} else {
return val__16591__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__18077 = arguments.length;
switch (G__18077) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj18089 = self__.obj;
if((!((obj18089 == null)))){
return (obj18089[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__16591__auto__ = (function (){var obj18095 = self__.obj;
if((!((obj18095 == null)))){
return (obj18095[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__16591__auto__)){
return not_found;
} else {
return val__16591__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18436 = arguments.length;
var i__5727__auto___18437 = (0);
while(true){
if((i__5727__auto___18437 < len__5726__auto___18436)){
args__5732__auto__.push((arguments[i__5727__auto___18437]));

var G__18438 = (i__5727__auto___18437 + (1));
i__5727__auto___18437 = G__18438;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__18123 = keyvals;
var vec__18124 = G__18123;
var seq__18125 = cljs.core.seq(vec__18124);
var first__18126 = cljs.core.first(seq__18125);
var seq__18125__$1 = cljs.core.next(seq__18125);
var k = first__18126;
var first__18126__$1 = cljs.core.first(seq__18125__$1);
var seq__18125__$2 = cljs.core.next(seq__18125__$1);
var v = first__18126__$1;
var kvs = seq__18125__$2;
var G__18123__$1 = G__18123;
while(true){
var vec__18127 = G__18123__$1;
var seq__18128 = cljs.core.seq(vec__18127);
var first__18129 = cljs.core.first(seq__18128);
var seq__18128__$1 = cljs.core.next(seq__18128);
var k__$1 = first__18129;
var first__18129__$1 = cljs.core.first(seq__18128__$1);
var seq__18128__$2 = cljs.core.next(seq__18128__$1);
var v__$1 = first__18129__$1;
var kvs__$1 = seq__18128__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__18441 = kvs__$1;
G__18123__$1 = G__18441;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq18113){
var G__18114 = cljs.core.first(seq18113);
var seq18113__$1 = cljs.core.next(seq18113);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18114,seq18113__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18443 = arguments.length;
var i__5727__auto___18444 = (0);
while(true){
if((i__5727__auto___18444 < len__5726__auto___18443)){
args__5732__auto__.push((arguments[i__5727__auto___18444]));

var G__18446 = (i__5727__auto___18444 + (1));
i__5727__auto___18444 = G__18446;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq18133){
var G__18134 = cljs.core.first(seq18133);
var seq18133__$1 = cljs.core.next(seq18133);
var G__18135 = cljs.core.first(seq18133__$1);
var seq18133__$2 = cljs.core.next(seq18133__$1);
var G__18136 = cljs.core.first(seq18133__$2);
var seq18133__$3 = cljs.core.next(seq18133__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18134,G__18135,G__18136,seq18133__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18454 = arguments.length;
var i__5727__auto___18455 = (0);
while(true){
if((i__5727__auto___18455 < len__5726__auto___18454)){
args__5732__auto__.push((arguments[i__5727__auto___18455]));

var G__18457 = (i__5727__auto___18455 + (1));
i__5727__auto___18455 = G__18457;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq18143){
var G__18144 = cljs.core.first(seq18143);
var seq18143__$1 = cljs.core.next(seq18143);
var G__18145 = cljs.core.first(seq18143__$1);
var seq18143__$2 = cljs.core.next(seq18143__$1);
var G__18146 = cljs.core.first(seq18143__$2);
var seq18143__$3 = cljs.core.next(seq18143__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18144,G__18145,G__18146,seq18143__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__18162 = arguments.length;
switch (G__18162) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___18477 = arguments.length;
var i__5727__auto___18479 = (0);
while(true){
if((i__5727__auto___18479 < len__5726__auto___18477)){
args_arr__5751__auto__.push((arguments[i__5727__auto___18479]));

var G__18480 = (i__5727__auto___18479 + (1));
i__5727__auto___18479 = G__18480;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__18175_18489 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__18176_18490 = null;
var count__18177_18491 = (0);
var i__18178_18492 = (0);
while(true){
if((i__18178_18492 < count__18177_18491)){
var k_18493 = chunk__18176_18490.cljs$core$IIndexed$_nth$arity$2(null, i__18178_18492);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_18493,applied_science.js_interop.unchecked_get(x,k_18493)], 0));


var G__18495 = seq__18175_18489;
var G__18496 = chunk__18176_18490;
var G__18497 = count__18177_18491;
var G__18498 = (i__18178_18492 + (1));
seq__18175_18489 = G__18495;
chunk__18176_18490 = G__18496;
count__18177_18491 = G__18497;
i__18178_18492 = G__18498;
continue;
} else {
var temp__5804__auto___18500 = cljs.core.seq(seq__18175_18489);
if(temp__5804__auto___18500){
var seq__18175_18501__$1 = temp__5804__auto___18500;
if(cljs.core.chunked_seq_QMARK_(seq__18175_18501__$1)){
var c__5525__auto___18503 = cljs.core.chunk_first(seq__18175_18501__$1);
var G__18504 = cljs.core.chunk_rest(seq__18175_18501__$1);
var G__18505 = c__5525__auto___18503;
var G__18506 = cljs.core.count(c__5525__auto___18503);
var G__18507 = (0);
seq__18175_18489 = G__18504;
chunk__18176_18490 = G__18505;
count__18177_18491 = G__18506;
i__18178_18492 = G__18507;
continue;
} else {
var k_18508 = cljs.core.first(seq__18175_18501__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_18508,applied_science.js_interop.unchecked_get(x,k_18508)], 0));


var G__18513 = cljs.core.next(seq__18175_18501__$1);
var G__18514 = null;
var G__18515 = (0);
var G__18516 = (0);
seq__18175_18489 = G__18513;
chunk__18176_18490 = G__18514;
count__18177_18491 = G__18515;
i__18178_18492 = G__18516;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq18159){
var G__18160 = cljs.core.first(seq18159);
var seq18159__$1 = cljs.core.next(seq18159);
var G__18161 = cljs.core.first(seq18159__$1);
var seq18159__$2 = cljs.core.next(seq18159__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18160,G__18161,seq18159__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__18199 = array;
G__18199.push(x);

return G__18199;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__18201 = array;
G__18201.unshift(x);

return G__18201;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18524 = arguments.length;
var i__5727__auto___18525 = (0);
while(true){
if((i__5727__auto___18525 < len__5726__auto___18524)){
args__5732__auto__.push((arguments[i__5727__auto___18525]));

var G__18530 = (i__5727__auto___18525 + (1));
i__5727__auto___18525 = G__18530;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj18211 = obj;
if((!((obj18211 == null)))){
return (obj18211[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq18202){
var G__18203 = cljs.core.first(seq18202);
var seq18202__$1 = cljs.core.next(seq18202);
var G__18204 = cljs.core.first(seq18202__$1);
var seq18202__$2 = cljs.core.next(seq18202__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18203,G__18204,seq18202__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj18219 = obj;
if((!((obj18219 == null)))){
return (obj18219[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18539 = arguments.length;
var i__5727__auto___18541 = (0);
while(true){
if((i__5727__auto___18541 < len__5726__auto___18539)){
args__5732__auto__.push((arguments[i__5727__auto___18541]));

var G__18542 = (i__5727__auto___18541 + (1));
i__5727__auto___18541 = G__18542;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq18223){
var G__18225 = cljs.core.first(seq18223);
var seq18223__$1 = cljs.core.next(seq18223);
var G__18226 = cljs.core.first(seq18223__$1);
var seq18223__$2 = cljs.core.next(seq18223__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18225,G__18226,seq18223__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18554 = arguments.length;
var i__5727__auto___18555 = (0);
while(true){
if((i__5727__auto___18555 < len__5726__auto___18554)){
args__5732__auto__.push((arguments[i__5727__auto___18555]));

var G__18556 = (i__5727__auto___18555 + (1));
i__5727__auto___18555 = G__18556;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__18266_18559 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__18267_18560 = null;
var count__18268_18561 = (0);
var i__18269_18562 = (0);
while(true){
if((i__18269_18562 < count__18268_18561)){
var vec__18332_18565 = chunk__18267_18560.cljs$core$IIndexed$_nth$arity$2(null, i__18269_18562);
var k_18566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18332_18565,(0),null);
var v_18567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18332_18565,(1),null);
var obj18335_18569 = obj;
var obj18336_18570 = (((!((obj18335_18569 == null))))?obj18335_18569:({}));
(obj18336_18570[applied_science.js_interop.impl.wrap_key(k_18566)] = v_18567);



var G__18576 = seq__18266_18559;
var G__18577 = chunk__18267_18560;
var G__18578 = count__18268_18561;
var G__18579 = (i__18269_18562 + (1));
seq__18266_18559 = G__18576;
chunk__18267_18560 = G__18577;
count__18268_18561 = G__18578;
i__18269_18562 = G__18579;
continue;
} else {
var temp__5804__auto___18580 = cljs.core.seq(seq__18266_18559);
if(temp__5804__auto___18580){
var seq__18266_18582__$1 = temp__5804__auto___18580;
if(cljs.core.chunked_seq_QMARK_(seq__18266_18582__$1)){
var c__5525__auto___18584 = cljs.core.chunk_first(seq__18266_18582__$1);
var G__18585 = cljs.core.chunk_rest(seq__18266_18582__$1);
var G__18586 = c__5525__auto___18584;
var G__18587 = cljs.core.count(c__5525__auto___18584);
var G__18588 = (0);
seq__18266_18559 = G__18585;
chunk__18267_18560 = G__18586;
count__18268_18561 = G__18587;
i__18269_18562 = G__18588;
continue;
} else {
var vec__18348_18589 = cljs.core.first(seq__18266_18582__$1);
var k_18590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18348_18589,(0),null);
var v_18591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18348_18589,(1),null);
var obj18353_18592 = obj;
var obj18354_18593 = (((!((obj18353_18592 == null))))?obj18353_18592:({}));
(obj18354_18593[applied_science.js_interop.impl.wrap_key(k_18590)] = v_18591);



var G__18594 = cljs.core.next(seq__18266_18582__$1);
var G__18595 = null;
var G__18596 = (0);
var G__18597 = (0);
seq__18266_18559 = G__18594;
chunk__18267_18560 = G__18595;
count__18268_18561 = G__18596;
i__18269_18562 = G__18597;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq18260){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18260));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
