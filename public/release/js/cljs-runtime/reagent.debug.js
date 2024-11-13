goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__19523__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19525__i = 0, G__19525__a = new Array(arguments.length -  0);
while (G__19525__i < G__19525__a.length) {G__19525__a[G__19525__i] = arguments[G__19525__i + 0]; ++G__19525__i;}
  args = new cljs.core.IndexedSeq(G__19525__a,0,null);
} 
return G__19523__delegate.call(this,args);};
G__19523.cljs$lang$maxFixedArity = 0;
G__19523.cljs$lang$applyTo = (function (arglist__19526){
var args = cljs.core.seq(arglist__19526);
return G__19523__delegate(args);
});
G__19523.cljs$core$IFn$_invoke$arity$variadic = G__19523__delegate;
return G__19523;
})()
);

(o.error = (function() { 
var G__19528__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19530__i = 0, G__19530__a = new Array(arguments.length -  0);
while (G__19530__i < G__19530__a.length) {G__19530__a[G__19530__i] = arguments[G__19530__i + 0]; ++G__19530__i;}
  args = new cljs.core.IndexedSeq(G__19530__a,0,null);
} 
return G__19528__delegate.call(this,args);};
G__19528.cljs$lang$maxFixedArity = 0;
G__19528.cljs$lang$applyTo = (function (arglist__19531){
var args = cljs.core.seq(arglist__19531);
return G__19528__delegate(args);
});
G__19528.cljs$core$IFn$_invoke$arity$variadic = G__19528__delegate;
return G__19528;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
