goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13414){
var map__13415 = p__13414;
var map__13415__$1 = cljs.core.__destructure_map(map__13415);
var runtime = map__13415__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13415__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13583 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13583)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13419 = runtime;
var G__13420 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13583);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13419,G__13420) : shadow.remote.runtime.shared.process.call(null, G__13419,G__13420));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13421,res){
var map__13422 = p__13421;
var map__13422__$1 = cljs.core.__destructure_map(map__13422);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13422__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13422__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13423 = res;
var G__13423__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13423,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13423);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13423__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13423__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13433 = arguments.length;
switch (G__13433) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13442,msg,handlers,timeout_after_ms){
var map__13444 = p__13442;
var map__13444__$1 = cljs.core.__destructure_map(map__13444);
var runtime = map__13444__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13444__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13589 = arguments.length;
var i__5727__auto___13590 = (0);
while(true){
if((i__5727__auto___13590 < len__5726__auto___13589)){
args__5732__auto__.push((arguments[i__5727__auto___13590]));

var G__13591 = (i__5727__auto___13590 + (1));
i__5727__auto___13590 = G__13591;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13461,ev,args){
var map__13462 = p__13461;
var map__13462__$1 = cljs.core.__destructure_map(map__13462);
var runtime = map__13462__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13462__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13463 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13466 = null;
var count__13467 = (0);
var i__13468 = (0);
while(true){
if((i__13468 < count__13467)){
var ext = chunk__13466.cljs$core$IIndexed$_nth$arity$2(null, i__13468);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13594 = seq__13463;
var G__13595 = chunk__13466;
var G__13596 = count__13467;
var G__13597 = (i__13468 + (1));
seq__13463 = G__13594;
chunk__13466 = G__13595;
count__13467 = G__13596;
i__13468 = G__13597;
continue;
} else {
var G__13600 = seq__13463;
var G__13601 = chunk__13466;
var G__13602 = count__13467;
var G__13603 = (i__13468 + (1));
seq__13463 = G__13600;
chunk__13466 = G__13601;
count__13467 = G__13602;
i__13468 = G__13603;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13463);
if(temp__5804__auto__){
var seq__13463__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13463__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13463__$1);
var G__13608 = cljs.core.chunk_rest(seq__13463__$1);
var G__13609 = c__5525__auto__;
var G__13610 = cljs.core.count(c__5525__auto__);
var G__13611 = (0);
seq__13463 = G__13608;
chunk__13466 = G__13609;
count__13467 = G__13610;
i__13468 = G__13611;
continue;
} else {
var ext = cljs.core.first(seq__13463__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13615 = cljs.core.next(seq__13463__$1);
var G__13616 = null;
var G__13617 = (0);
var G__13618 = (0);
seq__13463 = G__13615;
chunk__13466 = G__13616;
count__13467 = G__13617;
i__13468 = G__13618;
continue;
} else {
var G__13619 = cljs.core.next(seq__13463__$1);
var G__13620 = null;
var G__13621 = (0);
var G__13622 = (0);
seq__13463 = G__13619;
chunk__13466 = G__13620;
count__13467 = G__13621;
i__13468 = G__13622;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13451){
var G__13452 = cljs.core.first(seq13451);
var seq13451__$1 = cljs.core.next(seq13451);
var G__13453 = cljs.core.first(seq13451__$1);
var seq13451__$2 = cljs.core.next(seq13451__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13452,G__13453,seq13451__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13483,p__13484){
var map__13486 = p__13483;
var map__13486__$1 = cljs.core.__destructure_map(map__13486);
var runtime = map__13486__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13486__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13487 = p__13484;
var map__13487__$1 = cljs.core.__destructure_map(map__13487);
var msg = map__13487__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13487__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13489 = cljs.core.deref(state_ref);
var map__13489__$1 = cljs.core.__destructure_map(map__13489);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13489__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13489__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13492,msg){
var map__13495 = p__13492;
var map__13495__$1 = cljs.core.__destructure_map(map__13495);
var runtime = map__13495__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13495__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13498,key,p__13499){
var map__13500 = p__13498;
var map__13500__$1 = cljs.core.__destructure_map(map__13500);
var state = map__13500__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13500__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13501 = p__13499;
var map__13501__$1 = cljs.core.__destructure_map(map__13501);
var spec = map__13501__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13501__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13501__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13514,key,spec){
var map__13515 = p__13514;
var map__13515__$1 = cljs.core.__destructure_map(map__13515);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13515__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13520_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13520_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13523_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13523_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13526_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13526_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13527_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13527_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13528_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13528_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13553,key){
var map__13554 = p__13553;
var map__13554__$1 = cljs.core.__destructure_map(map__13554);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13554__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13555,msg){
var map__13556 = p__13555;
var map__13556__$1 = cljs.core.__destructure_map(map__13556);
var runtime = map__13556__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13556__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13558,p__13559){
var map__13560 = p__13558;
var map__13560__$1 = cljs.core.__destructure_map(map__13560);
var runtime = map__13560__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13560__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13561 = p__13559;
var map__13561__$1 = cljs.core.__destructure_map(map__13561);
var msg = map__13561__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13561__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13561__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13562 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13564 = null;
var count__13565 = (0);
var i__13566 = (0);
while(true){
if((i__13566 < count__13565)){
var map__13573 = chunk__13564.cljs$core$IIndexed$_nth$arity$2(null, i__13566);
var map__13573__$1 = cljs.core.__destructure_map(map__13573);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13573__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13680 = seq__13562;
var G__13681 = chunk__13564;
var G__13682 = count__13565;
var G__13683 = (i__13566 + (1));
seq__13562 = G__13680;
chunk__13564 = G__13681;
count__13565 = G__13682;
i__13566 = G__13683;
continue;
} else {
var G__13690 = seq__13562;
var G__13691 = chunk__13564;
var G__13692 = count__13565;
var G__13693 = (i__13566 + (1));
seq__13562 = G__13690;
chunk__13564 = G__13691;
count__13565 = G__13692;
i__13566 = G__13693;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13562);
if(temp__5804__auto__){
var seq__13562__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13562__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13562__$1);
var G__13705 = cljs.core.chunk_rest(seq__13562__$1);
var G__13706 = c__5525__auto__;
var G__13707 = cljs.core.count(c__5525__auto__);
var G__13708 = (0);
seq__13562 = G__13705;
chunk__13564 = G__13706;
count__13565 = G__13707;
i__13566 = G__13708;
continue;
} else {
var map__13577 = cljs.core.first(seq__13562__$1);
var map__13577__$1 = cljs.core.__destructure_map(map__13577);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13577__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13717 = cljs.core.next(seq__13562__$1);
var G__13718 = null;
var G__13719 = (0);
var G__13720 = (0);
seq__13562 = G__13717;
chunk__13564 = G__13718;
count__13565 = G__13719;
i__13566 = G__13720;
continue;
} else {
var G__13722 = cljs.core.next(seq__13562__$1);
var G__13723 = null;
var G__13724 = (0);
var G__13725 = (0);
seq__13562 = G__13722;
chunk__13564 = G__13723;
count__13565 = G__13724;
i__13566 = G__13725;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
