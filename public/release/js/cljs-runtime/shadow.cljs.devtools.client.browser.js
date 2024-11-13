goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22254 = arguments.length;
var i__5727__auto___22255 = (0);
while(true){
if((i__5727__auto___22255 < len__5726__auto___22254)){
args__5732__auto__.push((arguments[i__5727__auto___22255]));

var G__22256 = (i__5727__auto___22255 + (1));
i__5727__auto___22255 = G__22256;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21786){
var G__21787 = cljs.core.first(seq21786);
var seq21786__$1 = cljs.core.next(seq21786);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21787,seq21786__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21797 = cljs.core.seq(sources);
var chunk__21798 = null;
var count__21799 = (0);
var i__21800 = (0);
while(true){
if((i__21800 < count__21799)){
var map__21815 = chunk__21798.cljs$core$IIndexed$_nth$arity$2(null, i__21800);
var map__21815__$1 = cljs.core.__destructure_map(map__21815);
var src = map__21815__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21816){var e_22257 = e21816;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22257);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22257.message)].join('')));
}

var G__22258 = seq__21797;
var G__22259 = chunk__21798;
var G__22260 = count__21799;
var G__22261 = (i__21800 + (1));
seq__21797 = G__22258;
chunk__21798 = G__22259;
count__21799 = G__22260;
i__21800 = G__22261;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21797);
if(temp__5804__auto__){
var seq__21797__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21797__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21797__$1);
var G__22262 = cljs.core.chunk_rest(seq__21797__$1);
var G__22263 = c__5525__auto__;
var G__22264 = cljs.core.count(c__5525__auto__);
var G__22265 = (0);
seq__21797 = G__22262;
chunk__21798 = G__22263;
count__21799 = G__22264;
i__21800 = G__22265;
continue;
} else {
var map__21817 = cljs.core.first(seq__21797__$1);
var map__21817__$1 = cljs.core.__destructure_map(map__21817);
var src = map__21817__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21817__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21817__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21817__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21817__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21819){var e_22266 = e21819;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22266);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22266.message)].join('')));
}

var G__22267 = cljs.core.next(seq__21797__$1);
var G__22268 = null;
var G__22269 = (0);
var G__22270 = (0);
seq__21797 = G__22267;
chunk__21798 = G__22268;
count__21799 = G__22269;
i__21800 = G__22270;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21824 = cljs.core.seq(js_requires);
var chunk__21825 = null;
var count__21826 = (0);
var i__21827 = (0);
while(true){
if((i__21827 < count__21826)){
var js_ns = chunk__21825.cljs$core$IIndexed$_nth$arity$2(null, i__21827);
var require_str_22271 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22271);


var G__22272 = seq__21824;
var G__22273 = chunk__21825;
var G__22274 = count__21826;
var G__22275 = (i__21827 + (1));
seq__21824 = G__22272;
chunk__21825 = G__22273;
count__21826 = G__22274;
i__21827 = G__22275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21824);
if(temp__5804__auto__){
var seq__21824__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21824__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21824__$1);
var G__22276 = cljs.core.chunk_rest(seq__21824__$1);
var G__22277 = c__5525__auto__;
var G__22278 = cljs.core.count(c__5525__auto__);
var G__22279 = (0);
seq__21824 = G__22276;
chunk__21825 = G__22277;
count__21826 = G__22278;
i__21827 = G__22279;
continue;
} else {
var js_ns = cljs.core.first(seq__21824__$1);
var require_str_22280 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22280);


var G__22281 = cljs.core.next(seq__21824__$1);
var G__22282 = null;
var G__22283 = (0);
var G__22284 = (0);
seq__21824 = G__22281;
chunk__21825 = G__22282;
count__21826 = G__22283;
i__21827 = G__22284;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21854){
var map__21855 = p__21854;
var map__21855__$1 = cljs.core.__destructure_map(map__21855);
var msg = map__21855__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21856(s__21857){
return (new cljs.core.LazySeq(null,(function (){
var s__21857__$1 = s__21857;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21857__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21862 = cljs.core.first(xs__6360__auto__);
var map__21862__$1 = cljs.core.__destructure_map(map__21862);
var src = map__21862__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21862__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21862__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21857__$1,map__21862,map__21862__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21855,map__21855__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21856_$_iter__21858(s__21859){
return (new cljs.core.LazySeq(null,((function (s__21857__$1,map__21862,map__21862__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21855,map__21855__$1,msg,info,reload_info){
return (function (){
var s__21859__$1 = s__21859;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21859__$1);
if(temp__5804__auto____$1){
var s__21859__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21859__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21859__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21861 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21860 = (0);
while(true){
if((i__21860 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21860);
cljs.core.chunk_append(b__21861,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22285 = (i__21860 + (1));
i__21860 = G__22285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21861),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21856_$_iter__21858(cljs.core.chunk_rest(s__21859__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21861),null);
}
} else {
var warning = cljs.core.first(s__21859__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21856_$_iter__21858(cljs.core.rest(s__21859__$2)));
}
} else {
return null;
}
break;
}
});})(s__21857__$1,map__21862,map__21862__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21855,map__21855__$1,msg,info,reload_info))
,null,null));
});})(s__21857__$1,map__21862,map__21862__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21855,map__21855__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21856(cljs.core.rest(s__21857__$1)));
} else {
var G__22286 = cljs.core.rest(s__21857__$1);
s__21857__$1 = G__22286;
continue;
}
} else {
var G__22287 = cljs.core.rest(s__21857__$1);
s__21857__$1 = G__22287;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21865_22288 = cljs.core.seq(warnings);
var chunk__21866_22289 = null;
var count__21867_22290 = (0);
var i__21868_22291 = (0);
while(true){
if((i__21868_22291 < count__21867_22290)){
var map__21871_22292 = chunk__21866_22289.cljs$core$IIndexed$_nth$arity$2(null, i__21868_22291);
var map__21871_22293__$1 = cljs.core.__destructure_map(map__21871_22292);
var w_22294 = map__21871_22293__$1;
var msg_22295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871_22293__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871_22293__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871_22293__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871_22293__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22298)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22296),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22297),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22295__$1)].join(''));


var G__22299 = seq__21865_22288;
var G__22300 = chunk__21866_22289;
var G__22301 = count__21867_22290;
var G__22302 = (i__21868_22291 + (1));
seq__21865_22288 = G__22299;
chunk__21866_22289 = G__22300;
count__21867_22290 = G__22301;
i__21868_22291 = G__22302;
continue;
} else {
var temp__5804__auto___22303 = cljs.core.seq(seq__21865_22288);
if(temp__5804__auto___22303){
var seq__21865_22304__$1 = temp__5804__auto___22303;
if(cljs.core.chunked_seq_QMARK_(seq__21865_22304__$1)){
var c__5525__auto___22305 = cljs.core.chunk_first(seq__21865_22304__$1);
var G__22306 = cljs.core.chunk_rest(seq__21865_22304__$1);
var G__22307 = c__5525__auto___22305;
var G__22308 = cljs.core.count(c__5525__auto___22305);
var G__22309 = (0);
seq__21865_22288 = G__22306;
chunk__21866_22289 = G__22307;
count__21867_22290 = G__22308;
i__21868_22291 = G__22309;
continue;
} else {
var map__21872_22310 = cljs.core.first(seq__21865_22304__$1);
var map__21872_22311__$1 = cljs.core.__destructure_map(map__21872_22310);
var w_22312 = map__21872_22311__$1;
var msg_22313__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872_22311__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872_22311__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872_22311__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872_22311__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22316)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22314),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22315),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22313__$1)].join(''));


var G__22317 = cljs.core.next(seq__21865_22304__$1);
var G__22318 = null;
var G__22319 = (0);
var G__22320 = (0);
seq__21865_22288 = G__22317;
chunk__21866_22289 = G__22318;
count__21867_22290 = G__22319;
i__21868_22291 = G__22320;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21853_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21853_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21878){
var map__21879 = p__21878;
var map__21879__$1 = cljs.core.__destructure_map(map__21879);
var msg = map__21879__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21879__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21879__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21880 = cljs.core.seq(updates);
var chunk__21882 = null;
var count__21883 = (0);
var i__21884 = (0);
while(true){
if((i__21884 < count__21883)){
var path = chunk__21882.cljs$core$IIndexed$_nth$arity$2(null, i__21884);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22068_22321 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22072_22322 = null;
var count__22073_22323 = (0);
var i__22074_22324 = (0);
while(true){
if((i__22074_22324 < count__22073_22323)){
var node_22325 = chunk__22072_22322.cljs$core$IIndexed$_nth$arity$2(null, i__22074_22324);
if(cljs.core.not(node_22325.shadow$old)){
var path_match_22326 = shadow.cljs.devtools.client.browser.match_paths(node_22325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22326)){
var new_link_22327 = (function (){var G__22117 = node_22325.cloneNode(true);
G__22117.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22117;
})();
(node_22325.shadow$old = true);

(new_link_22327.onload = ((function (seq__22068_22321,chunk__22072_22322,count__22073_22323,i__22074_22324,seq__21880,chunk__21882,count__21883,i__21884,new_link_22327,path_match_22326,node_22325,path,map__21879,map__21879__$1,msg,updates,reload_info){
return (function (e){
var seq__22119_22328 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22121_22329 = null;
var count__22122_22330 = (0);
var i__22123_22331 = (0);
while(true){
if((i__22123_22331 < count__22122_22330)){
var map__22131_22332 = chunk__22121_22329.cljs$core$IIndexed$_nth$arity$2(null, i__22123_22331);
var map__22131_22333__$1 = cljs.core.__destructure_map(map__22131_22332);
var task_22334 = map__22131_22333__$1;
var fn_str_22335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22131_22333__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22131_22333__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22337 = goog.getObjectByName(fn_str_22335,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22336)].join(''));

(fn_obj_22337.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22337.cljs$core$IFn$_invoke$arity$2(path,new_link_22327) : fn_obj_22337.call(null, path,new_link_22327));


var G__22338 = seq__22119_22328;
var G__22339 = chunk__22121_22329;
var G__22340 = count__22122_22330;
var G__22341 = (i__22123_22331 + (1));
seq__22119_22328 = G__22338;
chunk__22121_22329 = G__22339;
count__22122_22330 = G__22340;
i__22123_22331 = G__22341;
continue;
} else {
var temp__5804__auto___22342 = cljs.core.seq(seq__22119_22328);
if(temp__5804__auto___22342){
var seq__22119_22343__$1 = temp__5804__auto___22342;
if(cljs.core.chunked_seq_QMARK_(seq__22119_22343__$1)){
var c__5525__auto___22344 = cljs.core.chunk_first(seq__22119_22343__$1);
var G__22345 = cljs.core.chunk_rest(seq__22119_22343__$1);
var G__22346 = c__5525__auto___22344;
var G__22347 = cljs.core.count(c__5525__auto___22344);
var G__22348 = (0);
seq__22119_22328 = G__22345;
chunk__22121_22329 = G__22346;
count__22122_22330 = G__22347;
i__22123_22331 = G__22348;
continue;
} else {
var map__22132_22349 = cljs.core.first(seq__22119_22343__$1);
var map__22132_22350__$1 = cljs.core.__destructure_map(map__22132_22349);
var task_22351 = map__22132_22350__$1;
var fn_str_22352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22132_22350__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22132_22350__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22354 = goog.getObjectByName(fn_str_22352,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22353)].join(''));

(fn_obj_22354.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22354.cljs$core$IFn$_invoke$arity$2(path,new_link_22327) : fn_obj_22354.call(null, path,new_link_22327));


var G__22355 = cljs.core.next(seq__22119_22343__$1);
var G__22356 = null;
var G__22357 = (0);
var G__22358 = (0);
seq__22119_22328 = G__22355;
chunk__22121_22329 = G__22356;
count__22122_22330 = G__22357;
i__22123_22331 = G__22358;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22325);
});})(seq__22068_22321,chunk__22072_22322,count__22073_22323,i__22074_22324,seq__21880,chunk__21882,count__21883,i__21884,new_link_22327,path_match_22326,node_22325,path,map__21879,map__21879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22326], 0));

goog.dom.insertSiblingAfter(new_link_22327,node_22325);


var G__22359 = seq__22068_22321;
var G__22360 = chunk__22072_22322;
var G__22361 = count__22073_22323;
var G__22362 = (i__22074_22324 + (1));
seq__22068_22321 = G__22359;
chunk__22072_22322 = G__22360;
count__22073_22323 = G__22361;
i__22074_22324 = G__22362;
continue;
} else {
var G__22363 = seq__22068_22321;
var G__22364 = chunk__22072_22322;
var G__22365 = count__22073_22323;
var G__22366 = (i__22074_22324 + (1));
seq__22068_22321 = G__22363;
chunk__22072_22322 = G__22364;
count__22073_22323 = G__22365;
i__22074_22324 = G__22366;
continue;
}
} else {
var G__22367 = seq__22068_22321;
var G__22368 = chunk__22072_22322;
var G__22369 = count__22073_22323;
var G__22370 = (i__22074_22324 + (1));
seq__22068_22321 = G__22367;
chunk__22072_22322 = G__22368;
count__22073_22323 = G__22369;
i__22074_22324 = G__22370;
continue;
}
} else {
var temp__5804__auto___22371 = cljs.core.seq(seq__22068_22321);
if(temp__5804__auto___22371){
var seq__22068_22372__$1 = temp__5804__auto___22371;
if(cljs.core.chunked_seq_QMARK_(seq__22068_22372__$1)){
var c__5525__auto___22373 = cljs.core.chunk_first(seq__22068_22372__$1);
var G__22374 = cljs.core.chunk_rest(seq__22068_22372__$1);
var G__22375 = c__5525__auto___22373;
var G__22376 = cljs.core.count(c__5525__auto___22373);
var G__22377 = (0);
seq__22068_22321 = G__22374;
chunk__22072_22322 = G__22375;
count__22073_22323 = G__22376;
i__22074_22324 = G__22377;
continue;
} else {
var node_22378 = cljs.core.first(seq__22068_22372__$1);
if(cljs.core.not(node_22378.shadow$old)){
var path_match_22379 = shadow.cljs.devtools.client.browser.match_paths(node_22378.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22379)){
var new_link_22380 = (function (){var G__22137 = node_22378.cloneNode(true);
G__22137.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22379),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22137;
})();
(node_22378.shadow$old = true);

(new_link_22380.onload = ((function (seq__22068_22321,chunk__22072_22322,count__22073_22323,i__22074_22324,seq__21880,chunk__21882,count__21883,i__21884,new_link_22380,path_match_22379,node_22378,seq__22068_22372__$1,temp__5804__auto___22371,path,map__21879,map__21879__$1,msg,updates,reload_info){
return (function (e){
var seq__22138_22381 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22140_22382 = null;
var count__22141_22383 = (0);
var i__22142_22384 = (0);
while(true){
if((i__22142_22384 < count__22141_22383)){
var map__22146_22385 = chunk__22140_22382.cljs$core$IIndexed$_nth$arity$2(null, i__22142_22384);
var map__22146_22386__$1 = cljs.core.__destructure_map(map__22146_22385);
var task_22387 = map__22146_22386__$1;
var fn_str_22388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146_22386__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22146_22386__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22390 = goog.getObjectByName(fn_str_22388,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22389)].join(''));

(fn_obj_22390.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22390.cljs$core$IFn$_invoke$arity$2(path,new_link_22380) : fn_obj_22390.call(null, path,new_link_22380));


var G__22391 = seq__22138_22381;
var G__22392 = chunk__22140_22382;
var G__22393 = count__22141_22383;
var G__22394 = (i__22142_22384 + (1));
seq__22138_22381 = G__22391;
chunk__22140_22382 = G__22392;
count__22141_22383 = G__22393;
i__22142_22384 = G__22394;
continue;
} else {
var temp__5804__auto___22395__$1 = cljs.core.seq(seq__22138_22381);
if(temp__5804__auto___22395__$1){
var seq__22138_22396__$1 = temp__5804__auto___22395__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22138_22396__$1)){
var c__5525__auto___22397 = cljs.core.chunk_first(seq__22138_22396__$1);
var G__22398 = cljs.core.chunk_rest(seq__22138_22396__$1);
var G__22399 = c__5525__auto___22397;
var G__22400 = cljs.core.count(c__5525__auto___22397);
var G__22401 = (0);
seq__22138_22381 = G__22398;
chunk__22140_22382 = G__22399;
count__22141_22383 = G__22400;
i__22142_22384 = G__22401;
continue;
} else {
var map__22147_22402 = cljs.core.first(seq__22138_22396__$1);
var map__22147_22403__$1 = cljs.core.__destructure_map(map__22147_22402);
var task_22404 = map__22147_22403__$1;
var fn_str_22405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22147_22403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22147_22403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22407 = goog.getObjectByName(fn_str_22405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22406)].join(''));

(fn_obj_22407.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22407.cljs$core$IFn$_invoke$arity$2(path,new_link_22380) : fn_obj_22407.call(null, path,new_link_22380));


var G__22408 = cljs.core.next(seq__22138_22396__$1);
var G__22409 = null;
var G__22410 = (0);
var G__22411 = (0);
seq__22138_22381 = G__22408;
chunk__22140_22382 = G__22409;
count__22141_22383 = G__22410;
i__22142_22384 = G__22411;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22378);
});})(seq__22068_22321,chunk__22072_22322,count__22073_22323,i__22074_22324,seq__21880,chunk__21882,count__21883,i__21884,new_link_22380,path_match_22379,node_22378,seq__22068_22372__$1,temp__5804__auto___22371,path,map__21879,map__21879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22379], 0));

goog.dom.insertSiblingAfter(new_link_22380,node_22378);


var G__22412 = cljs.core.next(seq__22068_22372__$1);
var G__22413 = null;
var G__22414 = (0);
var G__22415 = (0);
seq__22068_22321 = G__22412;
chunk__22072_22322 = G__22413;
count__22073_22323 = G__22414;
i__22074_22324 = G__22415;
continue;
} else {
var G__22416 = cljs.core.next(seq__22068_22372__$1);
var G__22417 = null;
var G__22418 = (0);
var G__22419 = (0);
seq__22068_22321 = G__22416;
chunk__22072_22322 = G__22417;
count__22073_22323 = G__22418;
i__22074_22324 = G__22419;
continue;
}
} else {
var G__22420 = cljs.core.next(seq__22068_22372__$1);
var G__22421 = null;
var G__22422 = (0);
var G__22423 = (0);
seq__22068_22321 = G__22420;
chunk__22072_22322 = G__22421;
count__22073_22323 = G__22422;
i__22074_22324 = G__22423;
continue;
}
}
} else {
}
}
break;
}


var G__22424 = seq__21880;
var G__22425 = chunk__21882;
var G__22426 = count__21883;
var G__22427 = (i__21884 + (1));
seq__21880 = G__22424;
chunk__21882 = G__22425;
count__21883 = G__22426;
i__21884 = G__22427;
continue;
} else {
var G__22428 = seq__21880;
var G__22429 = chunk__21882;
var G__22430 = count__21883;
var G__22431 = (i__21884 + (1));
seq__21880 = G__22428;
chunk__21882 = G__22429;
count__21883 = G__22430;
i__21884 = G__22431;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21880);
if(temp__5804__auto__){
var seq__21880__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21880__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21880__$1);
var G__22432 = cljs.core.chunk_rest(seq__21880__$1);
var G__22433 = c__5525__auto__;
var G__22434 = cljs.core.count(c__5525__auto__);
var G__22435 = (0);
seq__21880 = G__22432;
chunk__21882 = G__22433;
count__21883 = G__22434;
i__21884 = G__22435;
continue;
} else {
var path = cljs.core.first(seq__21880__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22148_22436 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22152_22437 = null;
var count__22153_22438 = (0);
var i__22154_22439 = (0);
while(true){
if((i__22154_22439 < count__22153_22438)){
var node_22440 = chunk__22152_22437.cljs$core$IIndexed$_nth$arity$2(null, i__22154_22439);
if(cljs.core.not(node_22440.shadow$old)){
var path_match_22441 = shadow.cljs.devtools.client.browser.match_paths(node_22440.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22441)){
var new_link_22442 = (function (){var G__22188 = node_22440.cloneNode(true);
G__22188.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22441),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22188;
})();
(node_22440.shadow$old = true);

(new_link_22442.onload = ((function (seq__22148_22436,chunk__22152_22437,count__22153_22438,i__22154_22439,seq__21880,chunk__21882,count__21883,i__21884,new_link_22442,path_match_22441,node_22440,path,seq__21880__$1,temp__5804__auto__,map__21879,map__21879__$1,msg,updates,reload_info){
return (function (e){
var seq__22191_22443 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22193_22444 = null;
var count__22194_22445 = (0);
var i__22195_22446 = (0);
while(true){
if((i__22195_22446 < count__22194_22445)){
var map__22201_22447 = chunk__22193_22444.cljs$core$IIndexed$_nth$arity$2(null, i__22195_22446);
var map__22201_22448__$1 = cljs.core.__destructure_map(map__22201_22447);
var task_22449 = map__22201_22448__$1;
var fn_str_22450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201_22448__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22201_22448__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22452 = goog.getObjectByName(fn_str_22450,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22451)].join(''));

(fn_obj_22452.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22452.cljs$core$IFn$_invoke$arity$2(path,new_link_22442) : fn_obj_22452.call(null, path,new_link_22442));


var G__22453 = seq__22191_22443;
var G__22454 = chunk__22193_22444;
var G__22455 = count__22194_22445;
var G__22456 = (i__22195_22446 + (1));
seq__22191_22443 = G__22453;
chunk__22193_22444 = G__22454;
count__22194_22445 = G__22455;
i__22195_22446 = G__22456;
continue;
} else {
var temp__5804__auto___22457__$1 = cljs.core.seq(seq__22191_22443);
if(temp__5804__auto___22457__$1){
var seq__22191_22458__$1 = temp__5804__auto___22457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22191_22458__$1)){
var c__5525__auto___22459 = cljs.core.chunk_first(seq__22191_22458__$1);
var G__22460 = cljs.core.chunk_rest(seq__22191_22458__$1);
var G__22461 = c__5525__auto___22459;
var G__22462 = cljs.core.count(c__5525__auto___22459);
var G__22463 = (0);
seq__22191_22443 = G__22460;
chunk__22193_22444 = G__22461;
count__22194_22445 = G__22462;
i__22195_22446 = G__22463;
continue;
} else {
var map__22215_22464 = cljs.core.first(seq__22191_22458__$1);
var map__22215_22465__$1 = cljs.core.__destructure_map(map__22215_22464);
var task_22466 = map__22215_22465__$1;
var fn_str_22467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22215_22465__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22215_22465__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22469 = goog.getObjectByName(fn_str_22467,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22468)].join(''));

(fn_obj_22469.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22469.cljs$core$IFn$_invoke$arity$2(path,new_link_22442) : fn_obj_22469.call(null, path,new_link_22442));


var G__22470 = cljs.core.next(seq__22191_22458__$1);
var G__22471 = null;
var G__22472 = (0);
var G__22473 = (0);
seq__22191_22443 = G__22470;
chunk__22193_22444 = G__22471;
count__22194_22445 = G__22472;
i__22195_22446 = G__22473;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22440);
});})(seq__22148_22436,chunk__22152_22437,count__22153_22438,i__22154_22439,seq__21880,chunk__21882,count__21883,i__21884,new_link_22442,path_match_22441,node_22440,path,seq__21880__$1,temp__5804__auto__,map__21879,map__21879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22441], 0));

goog.dom.insertSiblingAfter(new_link_22442,node_22440);


var G__22474 = seq__22148_22436;
var G__22475 = chunk__22152_22437;
var G__22476 = count__22153_22438;
var G__22477 = (i__22154_22439 + (1));
seq__22148_22436 = G__22474;
chunk__22152_22437 = G__22475;
count__22153_22438 = G__22476;
i__22154_22439 = G__22477;
continue;
} else {
var G__22478 = seq__22148_22436;
var G__22479 = chunk__22152_22437;
var G__22480 = count__22153_22438;
var G__22481 = (i__22154_22439 + (1));
seq__22148_22436 = G__22478;
chunk__22152_22437 = G__22479;
count__22153_22438 = G__22480;
i__22154_22439 = G__22481;
continue;
}
} else {
var G__22482 = seq__22148_22436;
var G__22483 = chunk__22152_22437;
var G__22484 = count__22153_22438;
var G__22485 = (i__22154_22439 + (1));
seq__22148_22436 = G__22482;
chunk__22152_22437 = G__22483;
count__22153_22438 = G__22484;
i__22154_22439 = G__22485;
continue;
}
} else {
var temp__5804__auto___22486__$1 = cljs.core.seq(seq__22148_22436);
if(temp__5804__auto___22486__$1){
var seq__22148_22487__$1 = temp__5804__auto___22486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22148_22487__$1)){
var c__5525__auto___22488 = cljs.core.chunk_first(seq__22148_22487__$1);
var G__22489 = cljs.core.chunk_rest(seq__22148_22487__$1);
var G__22490 = c__5525__auto___22488;
var G__22491 = cljs.core.count(c__5525__auto___22488);
var G__22492 = (0);
seq__22148_22436 = G__22489;
chunk__22152_22437 = G__22490;
count__22153_22438 = G__22491;
i__22154_22439 = G__22492;
continue;
} else {
var node_22493 = cljs.core.first(seq__22148_22487__$1);
if(cljs.core.not(node_22493.shadow$old)){
var path_match_22494 = shadow.cljs.devtools.client.browser.match_paths(node_22493.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22494)){
var new_link_22495 = (function (){var G__22225 = node_22493.cloneNode(true);
G__22225.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22494),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22225;
})();
(node_22493.shadow$old = true);

(new_link_22495.onload = ((function (seq__22148_22436,chunk__22152_22437,count__22153_22438,i__22154_22439,seq__21880,chunk__21882,count__21883,i__21884,new_link_22495,path_match_22494,node_22493,seq__22148_22487__$1,temp__5804__auto___22486__$1,path,seq__21880__$1,temp__5804__auto__,map__21879,map__21879__$1,msg,updates,reload_info){
return (function (e){
var seq__22226_22496 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22228_22497 = null;
var count__22229_22498 = (0);
var i__22230_22499 = (0);
while(true){
if((i__22230_22499 < count__22229_22498)){
var map__22234_22500 = chunk__22228_22497.cljs$core$IIndexed$_nth$arity$2(null, i__22230_22499);
var map__22234_22501__$1 = cljs.core.__destructure_map(map__22234_22500);
var task_22502 = map__22234_22501__$1;
var fn_str_22503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22234_22501__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22234_22501__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22505 = goog.getObjectByName(fn_str_22503,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22504)].join(''));

(fn_obj_22505.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22505.cljs$core$IFn$_invoke$arity$2(path,new_link_22495) : fn_obj_22505.call(null, path,new_link_22495));


var G__22506 = seq__22226_22496;
var G__22507 = chunk__22228_22497;
var G__22508 = count__22229_22498;
var G__22509 = (i__22230_22499 + (1));
seq__22226_22496 = G__22506;
chunk__22228_22497 = G__22507;
count__22229_22498 = G__22508;
i__22230_22499 = G__22509;
continue;
} else {
var temp__5804__auto___22510__$2 = cljs.core.seq(seq__22226_22496);
if(temp__5804__auto___22510__$2){
var seq__22226_22511__$1 = temp__5804__auto___22510__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22226_22511__$1)){
var c__5525__auto___22512 = cljs.core.chunk_first(seq__22226_22511__$1);
var G__22513 = cljs.core.chunk_rest(seq__22226_22511__$1);
var G__22514 = c__5525__auto___22512;
var G__22515 = cljs.core.count(c__5525__auto___22512);
var G__22516 = (0);
seq__22226_22496 = G__22513;
chunk__22228_22497 = G__22514;
count__22229_22498 = G__22515;
i__22230_22499 = G__22516;
continue;
} else {
var map__22235_22517 = cljs.core.first(seq__22226_22511__$1);
var map__22235_22518__$1 = cljs.core.__destructure_map(map__22235_22517);
var task_22519 = map__22235_22518__$1;
var fn_str_22520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235_22518__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22235_22518__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22522 = goog.getObjectByName(fn_str_22520,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22521)].join(''));

(fn_obj_22522.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22522.cljs$core$IFn$_invoke$arity$2(path,new_link_22495) : fn_obj_22522.call(null, path,new_link_22495));


var G__22523 = cljs.core.next(seq__22226_22511__$1);
var G__22524 = null;
var G__22525 = (0);
var G__22526 = (0);
seq__22226_22496 = G__22523;
chunk__22228_22497 = G__22524;
count__22229_22498 = G__22525;
i__22230_22499 = G__22526;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22493);
});})(seq__22148_22436,chunk__22152_22437,count__22153_22438,i__22154_22439,seq__21880,chunk__21882,count__21883,i__21884,new_link_22495,path_match_22494,node_22493,seq__22148_22487__$1,temp__5804__auto___22486__$1,path,seq__21880__$1,temp__5804__auto__,map__21879,map__21879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22494], 0));

goog.dom.insertSiblingAfter(new_link_22495,node_22493);


var G__22527 = cljs.core.next(seq__22148_22487__$1);
var G__22528 = null;
var G__22529 = (0);
var G__22530 = (0);
seq__22148_22436 = G__22527;
chunk__22152_22437 = G__22528;
count__22153_22438 = G__22529;
i__22154_22439 = G__22530;
continue;
} else {
var G__22531 = cljs.core.next(seq__22148_22487__$1);
var G__22532 = null;
var G__22533 = (0);
var G__22534 = (0);
seq__22148_22436 = G__22531;
chunk__22152_22437 = G__22532;
count__22153_22438 = G__22533;
i__22154_22439 = G__22534;
continue;
}
} else {
var G__22535 = cljs.core.next(seq__22148_22487__$1);
var G__22536 = null;
var G__22537 = (0);
var G__22538 = (0);
seq__22148_22436 = G__22535;
chunk__22152_22437 = G__22536;
count__22153_22438 = G__22537;
i__22154_22439 = G__22538;
continue;
}
}
} else {
}
}
break;
}


var G__22539 = cljs.core.next(seq__21880__$1);
var G__22540 = null;
var G__22541 = (0);
var G__22542 = (0);
seq__21880 = G__22539;
chunk__21882 = G__22540;
count__21883 = G__22541;
i__21884 = G__22542;
continue;
} else {
var G__22543 = cljs.core.next(seq__21880__$1);
var G__22544 = null;
var G__22545 = (0);
var G__22546 = (0);
seq__21880 = G__22543;
chunk__21882 = G__22544;
count__21883 = G__22545;
i__21884 = G__22546;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22236){
var map__22237 = p__22236;
var map__22237__$1 = cljs.core.__destructure_map(map__22237);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22237__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22238,done,error){
var map__22239 = p__22238;
var map__22239__$1 = cljs.core.__destructure_map(map__22239);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22239__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22240,done,error){
var map__22241 = p__22240;
var map__22241__$1 = cljs.core.__destructure_map(map__22241);
var msg = map__22241__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22242){
var map__22243 = p__22242;
var map__22243__$1 = cljs.core.__destructure_map(map__22243);
var src = map__22243__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22243__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22244 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22244) : done.call(null, G__22244));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22245){
var map__22246 = p__22245;
var map__22246__$1 = cljs.core.__destructure_map(map__22246);
var msg__$1 = map__22246__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22246__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e22247){var ex = e22247;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22248){
var map__22249 = p__22248;
var map__22249__$1 = cljs.core.__destructure_map(map__22249);
var env = map__22249__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22250){
var map__22251 = p__22250;
var map__22251__$1 = cljs.core.__destructure_map(map__22251);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22251__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22251__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22252){
var map__22253 = p__22252;
var map__22253__$1 = cljs.core.__destructure_map(map__22253);
var svc = map__22253__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22253__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
