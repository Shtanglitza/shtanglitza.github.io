goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20114,p__20115){
var map__20116 = p__20114;
var map__20116__$1 = cljs.core.__destructure_map(map__20116);
var svc = map__20116__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20116__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20117 = p__20115;
var map__20117__$1 = cljs.core.__destructure_map(map__20117);
var msg = map__20117__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20117__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20117__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20135,p__20136){
var map__20159 = p__20135;
var map__20159__$1 = cljs.core.__destructure_map(map__20159);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20159__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20161 = p__20136;
var map__20161__$1 = cljs.core.__destructure_map(map__20161);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20161__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20189,p__20190){
var map__20194 = p__20189;
var map__20194__$1 = cljs.core.__destructure_map(map__20194);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20194__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20194__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20195 = p__20190;
var map__20195__$1 = cljs.core.__destructure_map(map__20195);
var msg = map__20195__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20195__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20205,tid){
var map__20206 = p__20205;
var map__20206__$1 = cljs.core.__destructure_map(map__20206);
var svc = map__20206__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20206__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20231 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20232 = null;
var count__20233 = (0);
var i__20234 = (0);
while(true){
if((i__20234 < count__20233)){
var vec__20252 = chunk__20232.cljs$core$IIndexed$_nth$arity$2(null, i__20234);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20252,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20252,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20269 = seq__20231;
var G__20270 = chunk__20232;
var G__20271 = count__20233;
var G__20272 = (i__20234 + (1));
seq__20231 = G__20269;
chunk__20232 = G__20270;
count__20233 = G__20271;
i__20234 = G__20272;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20231);
if(temp__5804__auto__){
var seq__20231__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20231__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20231__$1);
var G__20273 = cljs.core.chunk_rest(seq__20231__$1);
var G__20274 = c__5525__auto__;
var G__20275 = cljs.core.count(c__5525__auto__);
var G__20276 = (0);
seq__20231 = G__20273;
chunk__20232 = G__20274;
count__20233 = G__20275;
i__20234 = G__20276;
continue;
} else {
var vec__20257 = cljs.core.first(seq__20231__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20257,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20257,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20277 = cljs.core.next(seq__20231__$1);
var G__20278 = null;
var G__20279 = (0);
var G__20280 = (0);
seq__20231 = G__20277;
chunk__20232 = G__20278;
count__20233 = G__20279;
i__20234 = G__20280;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20212_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20212_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20213_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20213_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20214_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20214_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20215_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20215_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20262){
var map__20263 = p__20262;
var map__20263__$1 = cljs.core.__destructure_map(map__20263);
var svc = map__20263__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20263__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20263__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
