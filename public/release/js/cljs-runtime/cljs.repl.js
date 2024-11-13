goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18407){
var map__18412 = p__18407;
var map__18412__$1 = cljs.core.__destructure_map(map__18412);
var m = map__18412__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18412__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18427_18933 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18428_18934 = null;
var count__18429_18935 = (0);
var i__18430_18936 = (0);
while(true){
if((i__18430_18936 < count__18429_18935)){
var f_18939 = chunk__18428_18934.cljs$core$IIndexed$_nth$arity$2(null, i__18430_18936);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18939], 0));


var G__18940 = seq__18427_18933;
var G__18941 = chunk__18428_18934;
var G__18942 = count__18429_18935;
var G__18943 = (i__18430_18936 + (1));
seq__18427_18933 = G__18940;
chunk__18428_18934 = G__18941;
count__18429_18935 = G__18942;
i__18430_18936 = G__18943;
continue;
} else {
var temp__5804__auto___18944 = cljs.core.seq(seq__18427_18933);
if(temp__5804__auto___18944){
var seq__18427_18945__$1 = temp__5804__auto___18944;
if(cljs.core.chunked_seq_QMARK_(seq__18427_18945__$1)){
var c__5525__auto___18946 = cljs.core.chunk_first(seq__18427_18945__$1);
var G__18947 = cljs.core.chunk_rest(seq__18427_18945__$1);
var G__18948 = c__5525__auto___18946;
var G__18949 = cljs.core.count(c__5525__auto___18946);
var G__18950 = (0);
seq__18427_18933 = G__18947;
chunk__18428_18934 = G__18948;
count__18429_18935 = G__18949;
i__18430_18936 = G__18950;
continue;
} else {
var f_18951 = cljs.core.first(seq__18427_18945__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18951], 0));


var G__18954 = cljs.core.next(seq__18427_18945__$1);
var G__18955 = null;
var G__18956 = (0);
var G__18957 = (0);
seq__18427_18933 = G__18954;
chunk__18428_18934 = G__18955;
count__18429_18935 = G__18956;
i__18430_18936 = G__18957;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18959 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18959], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18959)))?cljs.core.second(arglists_18959):arglists_18959)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18472_18963 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18473_18964 = null;
var count__18474_18965 = (0);
var i__18475_18966 = (0);
while(true){
if((i__18475_18966 < count__18474_18965)){
var vec__18527_18968 = chunk__18473_18964.cljs$core$IIndexed$_nth$arity$2(null, i__18475_18966);
var name_18969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18527_18968,(0),null);
var map__18532_18970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18527_18968,(1),null);
var map__18532_18971__$1 = cljs.core.__destructure_map(map__18532_18970);
var doc_18972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18532_18971__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18532_18971__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18969], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18973], 0));

if(cljs.core.truth_(doc_18972)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18972], 0));
} else {
}


var G__18974 = seq__18472_18963;
var G__18975 = chunk__18473_18964;
var G__18976 = count__18474_18965;
var G__18977 = (i__18475_18966 + (1));
seq__18472_18963 = G__18974;
chunk__18473_18964 = G__18975;
count__18474_18965 = G__18976;
i__18475_18966 = G__18977;
continue;
} else {
var temp__5804__auto___18978 = cljs.core.seq(seq__18472_18963);
if(temp__5804__auto___18978){
var seq__18472_18979__$1 = temp__5804__auto___18978;
if(cljs.core.chunked_seq_QMARK_(seq__18472_18979__$1)){
var c__5525__auto___18980 = cljs.core.chunk_first(seq__18472_18979__$1);
var G__18981 = cljs.core.chunk_rest(seq__18472_18979__$1);
var G__18982 = c__5525__auto___18980;
var G__18983 = cljs.core.count(c__5525__auto___18980);
var G__18984 = (0);
seq__18472_18963 = G__18981;
chunk__18473_18964 = G__18982;
count__18474_18965 = G__18983;
i__18475_18966 = G__18984;
continue;
} else {
var vec__18547_18985 = cljs.core.first(seq__18472_18979__$1);
var name_18986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18547_18985,(0),null);
var map__18550_18987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18547_18985,(1),null);
var map__18550_18988__$1 = cljs.core.__destructure_map(map__18550_18987);
var doc_18989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550_18988__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18550_18988__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18986], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18990], 0));

if(cljs.core.truth_(doc_18989)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18989], 0));
} else {
}


var G__18991 = cljs.core.next(seq__18472_18979__$1);
var G__18992 = null;
var G__18993 = (0);
var G__18994 = (0);
seq__18472_18963 = G__18991;
chunk__18473_18964 = G__18992;
count__18474_18965 = G__18993;
i__18475_18966 = G__18994;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18572 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18573 = null;
var count__18574 = (0);
var i__18575 = (0);
while(true){
if((i__18575 < count__18574)){
var role = chunk__18573.cljs$core$IIndexed$_nth$arity$2(null, i__18575);
var temp__5804__auto___18995__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18995__$1)){
var spec_18996 = temp__5804__auto___18995__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18996)], 0));
} else {
}


var G__18997 = seq__18572;
var G__18998 = chunk__18573;
var G__18999 = count__18574;
var G__19000 = (i__18575 + (1));
seq__18572 = G__18997;
chunk__18573 = G__18998;
count__18574 = G__18999;
i__18575 = G__19000;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18572);
if(temp__5804__auto____$1){
var seq__18572__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18572__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18572__$1);
var G__19001 = cljs.core.chunk_rest(seq__18572__$1);
var G__19002 = c__5525__auto__;
var G__19003 = cljs.core.count(c__5525__auto__);
var G__19004 = (0);
seq__18572 = G__19001;
chunk__18573 = G__19002;
count__18574 = G__19003;
i__18575 = G__19004;
continue;
} else {
var role = cljs.core.first(seq__18572__$1);
var temp__5804__auto___19005__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19005__$2)){
var spec_19006 = temp__5804__auto___19005__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19006)], 0));
} else {
}


var G__19008 = cljs.core.next(seq__18572__$1);
var G__19009 = null;
var G__19010 = (0);
var G__19011 = (0);
seq__18572 = G__19008;
chunk__18573 = G__19009;
count__18574 = G__19010;
i__18575 = G__19011;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18695 = datafied_throwable;
var map__18695__$1 = cljs.core.__destructure_map(map__18695);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18695__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18695__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18695__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18696 = cljs.core.last(via);
var map__18696__$1 = cljs.core.__destructure_map(map__18696);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18696__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18696__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18696__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18698 = data;
var map__18698__$1 = cljs.core.__destructure_map(map__18698);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18698__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18699 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18699__$1 = cljs.core.__destructure_map(map__18699);
var top_data = map__18699__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18716 = phase;
var G__18716__$1 = (((G__18716 instanceof cljs.core.Keyword))?G__18716.fqn:null);
switch (G__18716__$1) {
case "read-source":
var map__18731 = data;
var map__18731__$1 = cljs.core.__destructure_map(map__18731);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18731__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18731__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18743 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18743__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18743,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18743);
var G__18743__$2 = (cljs.core.truth_((function (){var fexpr__18750 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18750.cljs$core$IFn$_invoke$arity$1 ? fexpr__18750.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18750.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18743__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18743__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18743__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18743__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18756 = top_data;
var G__18756__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18756);
var G__18756__$2 = (cljs.core.truth_((function (){var fexpr__18764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18764.cljs$core$IFn$_invoke$arity$1 ? fexpr__18764.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18764.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18756__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18756__$1);
var G__18756__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18756__$2);
var G__18756__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18756__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18756__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18756__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18773 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18773,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18773,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18773,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18773,(3),null);
var G__18778 = top_data;
var G__18778__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18778,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18778);
var G__18778__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18778__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18778__$1);
var G__18778__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18778__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18778__$2);
var G__18778__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18778__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18778__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18778__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18778__$4;
}

break;
case "execution":
var vec__18790 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18657_SHARP_){
var or__5002__auto__ = (p1__18657_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18802 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18802.cljs$core$IFn$_invoke$arity$1 ? fexpr__18802.cljs$core$IFn$_invoke$arity$1(p1__18657_SHARP_) : fexpr__18802.call(null, p1__18657_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18807 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18807__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18807,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18807);
var G__18807__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18807__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18807__$1);
var G__18807__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18807__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18807__$2);
var G__18807__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18807__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18807__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18807__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18807__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18716__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18835){
var map__18837 = p__18835;
var map__18837__$1 = cljs.core.__destructure_map(map__18837);
var triage_data = map__18837__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18837__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18856 = phase;
var G__18856__$1 = (((G__18856 instanceof cljs.core.Keyword))?G__18856.fqn:null);
switch (G__18856__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18860 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18861 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18862 = loc;
var G__18863 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18865_19102 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18866_19103 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18867_19104 = true;
var _STAR_print_fn_STAR__temp_val__18868_19105 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18867_19104);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18868_19105);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18823_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18823_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18866_19103);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18865_19102);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18860,G__18861,G__18862,G__18863) : format.call(null, G__18860,G__18861,G__18862,G__18863));

break;
case "macroexpansion":
var G__18878 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18879 = cause_type;
var G__18880 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18881 = loc;
var G__18882 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18878,G__18879,G__18880,G__18881,G__18882) : format.call(null, G__18878,G__18879,G__18880,G__18881,G__18882));

break;
case "compile-syntax-check":
var G__18884 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18885 = cause_type;
var G__18886 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18887 = loc;
var G__18888 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18884,G__18885,G__18886,G__18887,G__18888) : format.call(null, G__18884,G__18885,G__18886,G__18887,G__18888));

break;
case "compilation":
var G__18890 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18891 = cause_type;
var G__18892 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18893 = loc;
var G__18894 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18890,G__18891,G__18892,G__18893,G__18894) : format.call(null, G__18890,G__18891,G__18892,G__18893,G__18894));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18896 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18897 = symbol;
var G__18898 = loc;
var G__18899 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18902_19110 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18903_19111 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18904_19112 = true;
var _STAR_print_fn_STAR__temp_val__18905_19113 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18904_19112);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18905_19113);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18826_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18826_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18903_19111);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18902_19110);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18896,G__18897,G__18898,G__18899) : format.call(null, G__18896,G__18897,G__18898,G__18899));
} else {
var G__18915 = "Execution error%s at %s(%s).\n%s\n";
var G__18916 = cause_type;
var G__18917 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18918 = loc;
var G__18919 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18915,G__18916,G__18917,G__18918,G__18919) : format.call(null, G__18915,G__18916,G__18917,G__18918,G__18919));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18856__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
