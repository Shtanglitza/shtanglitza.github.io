goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19864 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19864(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19865 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19865(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18229 = coll;
var G__18230 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18229,G__18230) : shadow.dom.lazy_native_coll_seq.call(null, G__18229,G__18230));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18314 = arguments.length;
switch (G__18314) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18331 = arguments.length;
switch (G__18331) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18352 = arguments.length;
switch (G__18352) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18369 = arguments.length;
switch (G__18369) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18433 = arguments.length;
switch (G__18433) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18465 = arguments.length;
switch (G__18465) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e18517){if((e18517 instanceof Object)){
var e = e18517;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18517;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18543 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18544 = null;
var count__18545 = (0);
var i__18546 = (0);
while(true){
if((i__18546 < count__18545)){
var el = chunk__18544.cljs$core$IIndexed$_nth$arity$2(null, i__18546);
var handler_19952__$1 = ((function (seq__18543,chunk__18544,count__18545,i__18546,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18543,chunk__18544,count__18545,i__18546,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19952__$1);


var G__19957 = seq__18543;
var G__19958 = chunk__18544;
var G__19959 = count__18545;
var G__19960 = (i__18546 + (1));
seq__18543 = G__19957;
chunk__18544 = G__19958;
count__18545 = G__19959;
i__18546 = G__19960;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18543);
if(temp__5804__auto__){
var seq__18543__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18543__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18543__$1);
var G__19962 = cljs.core.chunk_rest(seq__18543__$1);
var G__19963 = c__5525__auto__;
var G__19964 = cljs.core.count(c__5525__auto__);
var G__19965 = (0);
seq__18543 = G__19962;
chunk__18544 = G__19963;
count__18545 = G__19964;
i__18546 = G__19965;
continue;
} else {
var el = cljs.core.first(seq__18543__$1);
var handler_19967__$1 = ((function (seq__18543,chunk__18544,count__18545,i__18546,el,seq__18543__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18543,chunk__18544,count__18545,i__18546,el,seq__18543__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19967__$1);


var G__19968 = cljs.core.next(seq__18543__$1);
var G__19969 = null;
var G__19970 = (0);
var G__19971 = (0);
seq__18543 = G__19968;
chunk__18544 = G__19969;
count__18545 = G__19970;
i__18546 = G__19971;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18618 = arguments.length;
switch (G__18618) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18701 = cljs.core.seq(events);
var chunk__18702 = null;
var count__18703 = (0);
var i__18704 = (0);
while(true){
if((i__18704 < count__18703)){
var vec__18751 = chunk__18702.cljs$core$IIndexed$_nth$arity$2(null, i__18704);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18751,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18751,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19975 = seq__18701;
var G__19976 = chunk__18702;
var G__19977 = count__18703;
var G__19978 = (i__18704 + (1));
seq__18701 = G__19975;
chunk__18702 = G__19976;
count__18703 = G__19977;
i__18704 = G__19978;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18701);
if(temp__5804__auto__){
var seq__18701__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18701__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18701__$1);
var G__19979 = cljs.core.chunk_rest(seq__18701__$1);
var G__19980 = c__5525__auto__;
var G__19981 = cljs.core.count(c__5525__auto__);
var G__19982 = (0);
seq__18701 = G__19979;
chunk__18702 = G__19980;
count__18703 = G__19981;
i__18704 = G__19982;
continue;
} else {
var vec__18767 = cljs.core.first(seq__18701__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18767,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19983 = cljs.core.next(seq__18701__$1);
var G__19984 = null;
var G__19985 = (0);
var G__19986 = (0);
seq__18701 = G__19983;
chunk__18702 = G__19984;
count__18703 = G__19985;
i__18704 = G__19986;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18779 = cljs.core.seq(styles);
var chunk__18780 = null;
var count__18781 = (0);
var i__18782 = (0);
while(true){
if((i__18782 < count__18781)){
var vec__18809 = chunk__18780.cljs$core$IIndexed$_nth$arity$2(null, i__18782);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18809,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18809,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19987 = seq__18779;
var G__19988 = chunk__18780;
var G__19989 = count__18781;
var G__19990 = (i__18782 + (1));
seq__18779 = G__19987;
chunk__18780 = G__19988;
count__18781 = G__19989;
i__18782 = G__19990;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18779);
if(temp__5804__auto__){
var seq__18779__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18779__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18779__$1);
var G__19991 = cljs.core.chunk_rest(seq__18779__$1);
var G__19992 = c__5525__auto__;
var G__19993 = cljs.core.count(c__5525__auto__);
var G__19994 = (0);
seq__18779 = G__19991;
chunk__18780 = G__19992;
count__18781 = G__19993;
i__18782 = G__19994;
continue;
} else {
var vec__18817 = cljs.core.first(seq__18779__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18817,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18817,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19996 = cljs.core.next(seq__18779__$1);
var G__19997 = null;
var G__19998 = (0);
var G__19999 = (0);
seq__18779 = G__19996;
chunk__18780 = G__19997;
count__18781 = G__19998;
i__18782 = G__19999;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18833_20002 = key;
var G__18833_20003__$1 = (((G__18833_20002 instanceof cljs.core.Keyword))?G__18833_20002.fqn:null);
switch (G__18833_20003__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20005 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_20005,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_20005,"aria-");
}
})())){
el.setAttribute(ks_20005,value);
} else {
(el[ks_20005] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18921){
var map__18922 = p__18921;
var map__18922__$1 = cljs.core.__destructure_map(map__18922);
var props = map__18922__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18922__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18924 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18924,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18928 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18928,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18928;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18938 = arguments.length;
switch (G__18938) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19007){
var vec__19012 = p__19007;
var seq__19013 = cljs.core.seq(vec__19012);
var first__19014 = cljs.core.first(seq__19013);
var seq__19013__$1 = cljs.core.next(seq__19013);
var nn = first__19014;
var first__19014__$1 = cljs.core.first(seq__19013__$1);
var seq__19013__$2 = cljs.core.next(seq__19013__$1);
var np = first__19014__$1;
var nc = seq__19013__$2;
var node = vec__19012;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19016 = nn;
var G__19017 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19016,G__19017) : create_fn.call(null, G__19016,G__19017));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19018 = nn;
var G__19019 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19018,G__19019) : create_fn.call(null, G__19018,G__19019));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19031 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(1),null);
var seq__19038_20009 = cljs.core.seq(node_children);
var chunk__19039_20010 = null;
var count__19040_20011 = (0);
var i__19041_20012 = (0);
while(true){
if((i__19041_20012 < count__19040_20011)){
var child_struct_20013 = chunk__19039_20010.cljs$core$IIndexed$_nth$arity$2(null, i__19041_20012);
var children_20015 = shadow.dom.dom_node(child_struct_20013);
if(cljs.core.seq_QMARK_(children_20015)){
var seq__19127_20016 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20015));
var chunk__19129_20017 = null;
var count__19130_20018 = (0);
var i__19131_20019 = (0);
while(true){
if((i__19131_20019 < count__19130_20018)){
var child_20022 = chunk__19129_20017.cljs$core$IIndexed$_nth$arity$2(null, i__19131_20019);
if(cljs.core.truth_(child_20022)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20022);


var G__20024 = seq__19127_20016;
var G__20025 = chunk__19129_20017;
var G__20026 = count__19130_20018;
var G__20027 = (i__19131_20019 + (1));
seq__19127_20016 = G__20024;
chunk__19129_20017 = G__20025;
count__19130_20018 = G__20026;
i__19131_20019 = G__20027;
continue;
} else {
var G__20028 = seq__19127_20016;
var G__20029 = chunk__19129_20017;
var G__20030 = count__19130_20018;
var G__20031 = (i__19131_20019 + (1));
seq__19127_20016 = G__20028;
chunk__19129_20017 = G__20029;
count__19130_20018 = G__20030;
i__19131_20019 = G__20031;
continue;
}
} else {
var temp__5804__auto___20032 = cljs.core.seq(seq__19127_20016);
if(temp__5804__auto___20032){
var seq__19127_20033__$1 = temp__5804__auto___20032;
if(cljs.core.chunked_seq_QMARK_(seq__19127_20033__$1)){
var c__5525__auto___20034 = cljs.core.chunk_first(seq__19127_20033__$1);
var G__20035 = cljs.core.chunk_rest(seq__19127_20033__$1);
var G__20036 = c__5525__auto___20034;
var G__20037 = cljs.core.count(c__5525__auto___20034);
var G__20038 = (0);
seq__19127_20016 = G__20035;
chunk__19129_20017 = G__20036;
count__19130_20018 = G__20037;
i__19131_20019 = G__20038;
continue;
} else {
var child_20039 = cljs.core.first(seq__19127_20033__$1);
if(cljs.core.truth_(child_20039)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20039);


var G__20040 = cljs.core.next(seq__19127_20033__$1);
var G__20041 = null;
var G__20042 = (0);
var G__20043 = (0);
seq__19127_20016 = G__20040;
chunk__19129_20017 = G__20041;
count__19130_20018 = G__20042;
i__19131_20019 = G__20043;
continue;
} else {
var G__20044 = cljs.core.next(seq__19127_20033__$1);
var G__20045 = null;
var G__20046 = (0);
var G__20047 = (0);
seq__19127_20016 = G__20044;
chunk__19129_20017 = G__20045;
count__19130_20018 = G__20046;
i__19131_20019 = G__20047;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20015);
}


var G__20049 = seq__19038_20009;
var G__20050 = chunk__19039_20010;
var G__20051 = count__19040_20011;
var G__20052 = (i__19041_20012 + (1));
seq__19038_20009 = G__20049;
chunk__19039_20010 = G__20050;
count__19040_20011 = G__20051;
i__19041_20012 = G__20052;
continue;
} else {
var temp__5804__auto___20054 = cljs.core.seq(seq__19038_20009);
if(temp__5804__auto___20054){
var seq__19038_20055__$1 = temp__5804__auto___20054;
if(cljs.core.chunked_seq_QMARK_(seq__19038_20055__$1)){
var c__5525__auto___20056 = cljs.core.chunk_first(seq__19038_20055__$1);
var G__20057 = cljs.core.chunk_rest(seq__19038_20055__$1);
var G__20058 = c__5525__auto___20056;
var G__20059 = cljs.core.count(c__5525__auto___20056);
var G__20060 = (0);
seq__19038_20009 = G__20057;
chunk__19039_20010 = G__20058;
count__19040_20011 = G__20059;
i__19041_20012 = G__20060;
continue;
} else {
var child_struct_20061 = cljs.core.first(seq__19038_20055__$1);
var children_20062 = shadow.dom.dom_node(child_struct_20061);
if(cljs.core.seq_QMARK_(children_20062)){
var seq__19165_20063 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20062));
var chunk__19167_20064 = null;
var count__19168_20065 = (0);
var i__19169_20066 = (0);
while(true){
if((i__19169_20066 < count__19168_20065)){
var child_20069 = chunk__19167_20064.cljs$core$IIndexed$_nth$arity$2(null, i__19169_20066);
if(cljs.core.truth_(child_20069)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20069);


var G__20072 = seq__19165_20063;
var G__20073 = chunk__19167_20064;
var G__20074 = count__19168_20065;
var G__20075 = (i__19169_20066 + (1));
seq__19165_20063 = G__20072;
chunk__19167_20064 = G__20073;
count__19168_20065 = G__20074;
i__19169_20066 = G__20075;
continue;
} else {
var G__20076 = seq__19165_20063;
var G__20077 = chunk__19167_20064;
var G__20078 = count__19168_20065;
var G__20079 = (i__19169_20066 + (1));
seq__19165_20063 = G__20076;
chunk__19167_20064 = G__20077;
count__19168_20065 = G__20078;
i__19169_20066 = G__20079;
continue;
}
} else {
var temp__5804__auto___20080__$1 = cljs.core.seq(seq__19165_20063);
if(temp__5804__auto___20080__$1){
var seq__19165_20081__$1 = temp__5804__auto___20080__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19165_20081__$1)){
var c__5525__auto___20082 = cljs.core.chunk_first(seq__19165_20081__$1);
var G__20083 = cljs.core.chunk_rest(seq__19165_20081__$1);
var G__20084 = c__5525__auto___20082;
var G__20085 = cljs.core.count(c__5525__auto___20082);
var G__20086 = (0);
seq__19165_20063 = G__20083;
chunk__19167_20064 = G__20084;
count__19168_20065 = G__20085;
i__19169_20066 = G__20086;
continue;
} else {
var child_20087 = cljs.core.first(seq__19165_20081__$1);
if(cljs.core.truth_(child_20087)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20087);


var G__20088 = cljs.core.next(seq__19165_20081__$1);
var G__20089 = null;
var G__20090 = (0);
var G__20091 = (0);
seq__19165_20063 = G__20088;
chunk__19167_20064 = G__20089;
count__19168_20065 = G__20090;
i__19169_20066 = G__20091;
continue;
} else {
var G__20092 = cljs.core.next(seq__19165_20081__$1);
var G__20093 = null;
var G__20094 = (0);
var G__20095 = (0);
seq__19165_20063 = G__20092;
chunk__19167_20064 = G__20093;
count__19168_20065 = G__20094;
i__19169_20066 = G__20095;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20062);
}


var G__20096 = cljs.core.next(seq__19038_20055__$1);
var G__20097 = null;
var G__20098 = (0);
var G__20099 = (0);
seq__19038_20009 = G__20096;
chunk__19039_20010 = G__20097;
count__19040_20011 = G__20098;
i__19041_20012 = G__20099;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19253 = cljs.core.seq(node);
var chunk__19254 = null;
var count__19255 = (0);
var i__19256 = (0);
while(true){
if((i__19256 < count__19255)){
var n = chunk__19254.cljs$core$IIndexed$_nth$arity$2(null, i__19256);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__20100 = seq__19253;
var G__20101 = chunk__19254;
var G__20102 = count__19255;
var G__20103 = (i__19256 + (1));
seq__19253 = G__20100;
chunk__19254 = G__20101;
count__19255 = G__20102;
i__19256 = G__20103;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19253);
if(temp__5804__auto__){
var seq__19253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19253__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19253__$1);
var G__20104 = cljs.core.chunk_rest(seq__19253__$1);
var G__20105 = c__5525__auto__;
var G__20106 = cljs.core.count(c__5525__auto__);
var G__20107 = (0);
seq__19253 = G__20104;
chunk__19254 = G__20105;
count__19255 = G__20106;
i__19256 = G__20107;
continue;
} else {
var n = cljs.core.first(seq__19253__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__20108 = cljs.core.next(seq__19253__$1);
var G__20109 = null;
var G__20110 = (0);
var G__20111 = (0);
seq__19253 = G__20108;
chunk__19254 = G__20109;
count__19255 = G__20110;
i__19256 = G__20111;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__19293 = arguments.length;
switch (G__19293) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__19305 = arguments.length;
switch (G__19305) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__19338 = arguments.length;
switch (G__19338) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20132 = arguments.length;
var i__5727__auto___20133 = (0);
while(true){
if((i__5727__auto___20133 < len__5726__auto___20132)){
args__5732__auto__.push((arguments[i__5727__auto___20133]));

var G__20134 = (i__5727__auto___20133 + (1));
i__5727__auto___20133 = G__20134;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19371_20137 = cljs.core.seq(nodes);
var chunk__19372_20138 = null;
var count__19373_20139 = (0);
var i__19374_20140 = (0);
while(true){
if((i__19374_20140 < count__19373_20139)){
var node_20142 = chunk__19372_20138.cljs$core$IIndexed$_nth$arity$2(null, i__19374_20140);
fragment.appendChild(shadow.dom._to_dom(node_20142));


var G__20143 = seq__19371_20137;
var G__20144 = chunk__19372_20138;
var G__20145 = count__19373_20139;
var G__20146 = (i__19374_20140 + (1));
seq__19371_20137 = G__20143;
chunk__19372_20138 = G__20144;
count__19373_20139 = G__20145;
i__19374_20140 = G__20146;
continue;
} else {
var temp__5804__auto___20147 = cljs.core.seq(seq__19371_20137);
if(temp__5804__auto___20147){
var seq__19371_20148__$1 = temp__5804__auto___20147;
if(cljs.core.chunked_seq_QMARK_(seq__19371_20148__$1)){
var c__5525__auto___20149 = cljs.core.chunk_first(seq__19371_20148__$1);
var G__20150 = cljs.core.chunk_rest(seq__19371_20148__$1);
var G__20151 = c__5525__auto___20149;
var G__20152 = cljs.core.count(c__5525__auto___20149);
var G__20153 = (0);
seq__19371_20137 = G__20150;
chunk__19372_20138 = G__20151;
count__19373_20139 = G__20152;
i__19374_20140 = G__20153;
continue;
} else {
var node_20154 = cljs.core.first(seq__19371_20148__$1);
fragment.appendChild(shadow.dom._to_dom(node_20154));


var G__20155 = cljs.core.next(seq__19371_20148__$1);
var G__20156 = null;
var G__20157 = (0);
var G__20158 = (0);
seq__19371_20137 = G__20155;
chunk__19372_20138 = G__20156;
count__19373_20139 = G__20157;
i__19374_20140 = G__20158;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19365){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19365));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19401_20165 = cljs.core.seq(scripts);
var chunk__19402_20166 = null;
var count__19403_20167 = (0);
var i__19404_20168 = (0);
while(true){
if((i__19404_20168 < count__19403_20167)){
var vec__19423_20171 = chunk__19402_20166.cljs$core$IIndexed$_nth$arity$2(null, i__19404_20168);
var script_tag_20172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19423_20171,(0),null);
var script_body_20173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19423_20171,(1),null);
eval(script_body_20173);


var G__20176 = seq__19401_20165;
var G__20177 = chunk__19402_20166;
var G__20178 = count__19403_20167;
var G__20179 = (i__19404_20168 + (1));
seq__19401_20165 = G__20176;
chunk__19402_20166 = G__20177;
count__19403_20167 = G__20178;
i__19404_20168 = G__20179;
continue;
} else {
var temp__5804__auto___20182 = cljs.core.seq(seq__19401_20165);
if(temp__5804__auto___20182){
var seq__19401_20183__$1 = temp__5804__auto___20182;
if(cljs.core.chunked_seq_QMARK_(seq__19401_20183__$1)){
var c__5525__auto___20184 = cljs.core.chunk_first(seq__19401_20183__$1);
var G__20185 = cljs.core.chunk_rest(seq__19401_20183__$1);
var G__20186 = c__5525__auto___20184;
var G__20187 = cljs.core.count(c__5525__auto___20184);
var G__20188 = (0);
seq__19401_20165 = G__20185;
chunk__19402_20166 = G__20186;
count__19403_20167 = G__20187;
i__19404_20168 = G__20188;
continue;
} else {
var vec__19431_20191 = cljs.core.first(seq__19401_20183__$1);
var script_tag_20192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19431_20191,(0),null);
var script_body_20193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19431_20191,(1),null);
eval(script_body_20193);


var G__20196 = cljs.core.next(seq__19401_20183__$1);
var G__20197 = null;
var G__20198 = (0);
var G__20199 = (0);
seq__19401_20165 = G__20196;
chunk__19402_20166 = G__20197;
count__19403_20167 = G__20198;
i__19404_20168 = G__20199;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19444){
var vec__19446 = p__19444;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__19475 = arguments.length;
switch (G__19475) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__19509 = cljs.core.seq(style_keys);
var chunk__19510 = null;
var count__19511 = (0);
var i__19512 = (0);
while(true){
if((i__19512 < count__19511)){
var it = chunk__19510.cljs$core$IIndexed$_nth$arity$2(null, i__19512);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20218 = seq__19509;
var G__20219 = chunk__19510;
var G__20220 = count__19511;
var G__20221 = (i__19512 + (1));
seq__19509 = G__20218;
chunk__19510 = G__20219;
count__19511 = G__20220;
i__19512 = G__20221;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19509);
if(temp__5804__auto__){
var seq__19509__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19509__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19509__$1);
var G__20222 = cljs.core.chunk_rest(seq__19509__$1);
var G__20223 = c__5525__auto__;
var G__20224 = cljs.core.count(c__5525__auto__);
var G__20225 = (0);
seq__19509 = G__20222;
chunk__19510 = G__20223;
count__19511 = G__20224;
i__19512 = G__20225;
continue;
} else {
var it = cljs.core.first(seq__19509__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20226 = cljs.core.next(seq__19509__$1);
var G__20227 = null;
var G__20228 = (0);
var G__20229 = (0);
seq__19509 = G__20226;
chunk__19510 = G__20227;
count__19511 = G__20228;
i__19512 = G__20229;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k19538,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__19554 = k19538;
var G__19554__$1 = (((G__19554 instanceof cljs.core.Keyword))?G__19554.fqn:null);
switch (G__19554__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19538,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__19577){
var vec__19579 = p__19577;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19537){
var self__ = this;
var G__19537__$1 = this;
return (new cljs.core.RecordIter((0),G__19537__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19539,other19540){
var self__ = this;
var this19539__$1 = this;
return (((!((other19540 == null)))) && ((((this19539__$1.constructor === other19540.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19539__$1.x,other19540.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19539__$1.y,other19540.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19539__$1.__extmap,other19540.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k19538){
var self__ = this;
var this__5307__auto____$1 = this;
var G__19612 = k19538;
var G__19612__$1 = (((G__19612 instanceof cljs.core.Keyword))?G__19612.fqn:null);
switch (G__19612__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19538);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__19537){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__19613 = cljs.core.keyword_identical_QMARK_;
var expr__19614 = k__5309__auto__;
if(cljs.core.truth_((pred__19613.cljs$core$IFn$_invoke$arity$2 ? pred__19613.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19614) : pred__19613.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__19614)))){
return (new shadow.dom.Coordinate(G__19537,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19613.cljs$core$IFn$_invoke$arity$2 ? pred__19613.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19614) : pred__19613.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__19614)))){
return (new shadow.dom.Coordinate(self__.x,G__19537,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__19537),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__19537){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19537,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19545){
var extmap__5342__auto__ = (function (){var G__19621 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19545,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19545)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19621);
} else {
return G__19621;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19545),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19545),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k19634,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__19647 = k19634;
var G__19647__$1 = (((G__19647 instanceof cljs.core.Keyword))?G__19647.fqn:null);
switch (G__19647__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19634,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__19652){
var vec__19653 = p__19652;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19653,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19653,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19633){
var self__ = this;
var G__19633__$1 = this;
return (new cljs.core.RecordIter((0),G__19633__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19635,other19636){
var self__ = this;
var this19635__$1 = this;
return (((!((other19636 == null)))) && ((((this19635__$1.constructor === other19636.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19635__$1.w,other19636.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19635__$1.h,other19636.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19635__$1.__extmap,other19636.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k19634){
var self__ = this;
var this__5307__auto____$1 = this;
var G__19664 = k19634;
var G__19664__$1 = (((G__19664 instanceof cljs.core.Keyword))?G__19664.fqn:null);
switch (G__19664__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19634);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__19633){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__19668 = cljs.core.keyword_identical_QMARK_;
var expr__19669 = k__5309__auto__;
if(cljs.core.truth_((pred__19668.cljs$core$IFn$_invoke$arity$2 ? pred__19668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19669) : pred__19668.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__19669)))){
return (new shadow.dom.Size(G__19633,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19668.cljs$core$IFn$_invoke$arity$2 ? pred__19668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19669) : pred__19668.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__19669)))){
return (new shadow.dom.Size(self__.w,G__19633,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__19633),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__19633){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19633,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19640){
var extmap__5342__auto__ = (function (){var G__19674 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19640,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19640)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19674);
} else {
return G__19674;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19640),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19640),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__20290 = (i + (1));
var G__20291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20290;
ret = G__20291;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19690){
var vec__19691 = p__19690;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19700 = arguments.length;
switch (G__19700) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__20300 = ps;
var G__20301 = (i + (1));
el__$1 = G__20300;
i = G__20301;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19726 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19732_20304 = cljs.core.seq(props);
var chunk__19733_20305 = null;
var count__19734_20306 = (0);
var i__19735_20307 = (0);
while(true){
if((i__19735_20307 < count__19734_20306)){
var vec__19747_20308 = chunk__19733_20305.cljs$core$IIndexed$_nth$arity$2(null, i__19735_20307);
var k_20309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19747_20308,(0),null);
var v_20310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19747_20308,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20309);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20309),v_20310);


var G__20311 = seq__19732_20304;
var G__20312 = chunk__19733_20305;
var G__20313 = count__19734_20306;
var G__20314 = (i__19735_20307 + (1));
seq__19732_20304 = G__20311;
chunk__19733_20305 = G__20312;
count__19734_20306 = G__20313;
i__19735_20307 = G__20314;
continue;
} else {
var temp__5804__auto___20315 = cljs.core.seq(seq__19732_20304);
if(temp__5804__auto___20315){
var seq__19732_20316__$1 = temp__5804__auto___20315;
if(cljs.core.chunked_seq_QMARK_(seq__19732_20316__$1)){
var c__5525__auto___20317 = cljs.core.chunk_first(seq__19732_20316__$1);
var G__20318 = cljs.core.chunk_rest(seq__19732_20316__$1);
var G__20319 = c__5525__auto___20317;
var G__20320 = cljs.core.count(c__5525__auto___20317);
var G__20321 = (0);
seq__19732_20304 = G__20318;
chunk__19733_20305 = G__20319;
count__19734_20306 = G__20320;
i__19735_20307 = G__20321;
continue;
} else {
var vec__19755_20322 = cljs.core.first(seq__19732_20316__$1);
var k_20323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19755_20322,(0),null);
var v_20324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19755_20322,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20323);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20323),v_20324);


var G__20332 = cljs.core.next(seq__19732_20316__$1);
var G__20333 = null;
var G__20334 = (0);
var G__20335 = (0);
seq__19732_20304 = G__20332;
chunk__19733_20305 = G__20333;
count__19734_20306 = G__20334;
i__19735_20307 = G__20335;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19765 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19765,(1),null);
var seq__19768_20336 = cljs.core.seq(node_children);
var chunk__19770_20337 = null;
var count__19771_20338 = (0);
var i__19772_20339 = (0);
while(true){
if((i__19772_20339 < count__19771_20338)){
var child_struct_20346 = chunk__19770_20337.cljs$core$IIndexed$_nth$arity$2(null, i__19772_20339);
if((!((child_struct_20346 == null)))){
if(typeof child_struct_20346 === 'string'){
var text_20347 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20347),child_struct_20346].join(''));
} else {
var children_20348 = shadow.dom.svg_node(child_struct_20346);
if(cljs.core.seq_QMARK_(children_20348)){
var seq__19792_20349 = cljs.core.seq(children_20348);
var chunk__19794_20350 = null;
var count__19795_20351 = (0);
var i__19796_20352 = (0);
while(true){
if((i__19796_20352 < count__19795_20351)){
var child_20354 = chunk__19794_20350.cljs$core$IIndexed$_nth$arity$2(null, i__19796_20352);
if(cljs.core.truth_(child_20354)){
node.appendChild(child_20354);


var G__20355 = seq__19792_20349;
var G__20356 = chunk__19794_20350;
var G__20357 = count__19795_20351;
var G__20358 = (i__19796_20352 + (1));
seq__19792_20349 = G__20355;
chunk__19794_20350 = G__20356;
count__19795_20351 = G__20357;
i__19796_20352 = G__20358;
continue;
} else {
var G__20359 = seq__19792_20349;
var G__20360 = chunk__19794_20350;
var G__20361 = count__19795_20351;
var G__20362 = (i__19796_20352 + (1));
seq__19792_20349 = G__20359;
chunk__19794_20350 = G__20360;
count__19795_20351 = G__20361;
i__19796_20352 = G__20362;
continue;
}
} else {
var temp__5804__auto___20363 = cljs.core.seq(seq__19792_20349);
if(temp__5804__auto___20363){
var seq__19792_20364__$1 = temp__5804__auto___20363;
if(cljs.core.chunked_seq_QMARK_(seq__19792_20364__$1)){
var c__5525__auto___20365 = cljs.core.chunk_first(seq__19792_20364__$1);
var G__20366 = cljs.core.chunk_rest(seq__19792_20364__$1);
var G__20367 = c__5525__auto___20365;
var G__20368 = cljs.core.count(c__5525__auto___20365);
var G__20369 = (0);
seq__19792_20349 = G__20366;
chunk__19794_20350 = G__20367;
count__19795_20351 = G__20368;
i__19796_20352 = G__20369;
continue;
} else {
var child_20371 = cljs.core.first(seq__19792_20364__$1);
if(cljs.core.truth_(child_20371)){
node.appendChild(child_20371);


var G__20373 = cljs.core.next(seq__19792_20364__$1);
var G__20374 = null;
var G__20375 = (0);
var G__20376 = (0);
seq__19792_20349 = G__20373;
chunk__19794_20350 = G__20374;
count__19795_20351 = G__20375;
i__19796_20352 = G__20376;
continue;
} else {
var G__20377 = cljs.core.next(seq__19792_20364__$1);
var G__20378 = null;
var G__20379 = (0);
var G__20380 = (0);
seq__19792_20349 = G__20377;
chunk__19794_20350 = G__20378;
count__19795_20351 = G__20379;
i__19796_20352 = G__20380;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20348);
}
}


var G__20381 = seq__19768_20336;
var G__20382 = chunk__19770_20337;
var G__20383 = count__19771_20338;
var G__20384 = (i__19772_20339 + (1));
seq__19768_20336 = G__20381;
chunk__19770_20337 = G__20382;
count__19771_20338 = G__20383;
i__19772_20339 = G__20384;
continue;
} else {
var G__20385 = seq__19768_20336;
var G__20386 = chunk__19770_20337;
var G__20387 = count__19771_20338;
var G__20388 = (i__19772_20339 + (1));
seq__19768_20336 = G__20385;
chunk__19770_20337 = G__20386;
count__19771_20338 = G__20387;
i__19772_20339 = G__20388;
continue;
}
} else {
var temp__5804__auto___20389 = cljs.core.seq(seq__19768_20336);
if(temp__5804__auto___20389){
var seq__19768_20390__$1 = temp__5804__auto___20389;
if(cljs.core.chunked_seq_QMARK_(seq__19768_20390__$1)){
var c__5525__auto___20391 = cljs.core.chunk_first(seq__19768_20390__$1);
var G__20392 = cljs.core.chunk_rest(seq__19768_20390__$1);
var G__20393 = c__5525__auto___20391;
var G__20394 = cljs.core.count(c__5525__auto___20391);
var G__20395 = (0);
seq__19768_20336 = G__20392;
chunk__19770_20337 = G__20393;
count__19771_20338 = G__20394;
i__19772_20339 = G__20395;
continue;
} else {
var child_struct_20396 = cljs.core.first(seq__19768_20390__$1);
if((!((child_struct_20396 == null)))){
if(typeof child_struct_20396 === 'string'){
var text_20397 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20397),child_struct_20396].join(''));
} else {
var children_20398 = shadow.dom.svg_node(child_struct_20396);
if(cljs.core.seq_QMARK_(children_20398)){
var seq__19799_20399 = cljs.core.seq(children_20398);
var chunk__19801_20400 = null;
var count__19802_20401 = (0);
var i__19803_20402 = (0);
while(true){
if((i__19803_20402 < count__19802_20401)){
var child_20403 = chunk__19801_20400.cljs$core$IIndexed$_nth$arity$2(null, i__19803_20402);
if(cljs.core.truth_(child_20403)){
node.appendChild(child_20403);


var G__20404 = seq__19799_20399;
var G__20405 = chunk__19801_20400;
var G__20406 = count__19802_20401;
var G__20407 = (i__19803_20402 + (1));
seq__19799_20399 = G__20404;
chunk__19801_20400 = G__20405;
count__19802_20401 = G__20406;
i__19803_20402 = G__20407;
continue;
} else {
var G__20411 = seq__19799_20399;
var G__20412 = chunk__19801_20400;
var G__20413 = count__19802_20401;
var G__20414 = (i__19803_20402 + (1));
seq__19799_20399 = G__20411;
chunk__19801_20400 = G__20412;
count__19802_20401 = G__20413;
i__19803_20402 = G__20414;
continue;
}
} else {
var temp__5804__auto___20415__$1 = cljs.core.seq(seq__19799_20399);
if(temp__5804__auto___20415__$1){
var seq__19799_20416__$1 = temp__5804__auto___20415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19799_20416__$1)){
var c__5525__auto___20417 = cljs.core.chunk_first(seq__19799_20416__$1);
var G__20418 = cljs.core.chunk_rest(seq__19799_20416__$1);
var G__20419 = c__5525__auto___20417;
var G__20420 = cljs.core.count(c__5525__auto___20417);
var G__20421 = (0);
seq__19799_20399 = G__20418;
chunk__19801_20400 = G__20419;
count__19802_20401 = G__20420;
i__19803_20402 = G__20421;
continue;
} else {
var child_20422 = cljs.core.first(seq__19799_20416__$1);
if(cljs.core.truth_(child_20422)){
node.appendChild(child_20422);


var G__20423 = cljs.core.next(seq__19799_20416__$1);
var G__20424 = null;
var G__20425 = (0);
var G__20426 = (0);
seq__19799_20399 = G__20423;
chunk__19801_20400 = G__20424;
count__19802_20401 = G__20425;
i__19803_20402 = G__20426;
continue;
} else {
var G__20427 = cljs.core.next(seq__19799_20416__$1);
var G__20428 = null;
var G__20429 = (0);
var G__20430 = (0);
seq__19799_20399 = G__20427;
chunk__19801_20400 = G__20428;
count__19802_20401 = G__20429;
i__19803_20402 = G__20430;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20398);
}
}


var G__20431 = cljs.core.next(seq__19768_20390__$1);
var G__20432 = null;
var G__20433 = (0);
var G__20434 = (0);
seq__19768_20336 = G__20431;
chunk__19770_20337 = G__20432;
count__19771_20338 = G__20433;
i__19772_20339 = G__20434;
continue;
} else {
var G__20435 = cljs.core.next(seq__19768_20390__$1);
var G__20436 = null;
var G__20437 = (0);
var G__20438 = (0);
seq__19768_20336 = G__20435;
chunk__19770_20337 = G__20436;
count__19771_20338 = G__20437;
i__19772_20339 = G__20438;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20444 = arguments.length;
var i__5727__auto___20445 = (0);
while(true){
if((i__5727__auto___20445 < len__5726__auto___20444)){
args__5732__auto__.push((arguments[i__5727__auto___20445]));

var G__20446 = (i__5727__auto___20445 + (1));
i__5727__auto___20445 = G__20446;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19824){
var G__19825 = cljs.core.first(seq19824);
var seq19824__$1 = cljs.core.next(seq19824);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19825,seq19824__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19830 = arguments.length;
switch (G__19830) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__14357__auto___20455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14358__auto__ = (function (){var switch__13271__auto__ = (function (state_19843){
var state_val_19844 = (state_19843[(1)]);
if((state_val_19844 === (1))){
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19843__$1,(2),once_or_cleanup);
} else {
if((state_val_19844 === (2))){
var inst_19840 = (state_19843[(2)]);
var inst_19841 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19843__$1 = (function (){var statearr_19845 = state_19843;
(statearr_19845[(7)] = inst_19840);

return statearr_19845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19843__$1,inst_19841);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13272__auto__ = null;
var shadow$dom$state_machine__13272__auto____0 = (function (){
var statearr_19846 = [null,null,null,null,null,null,null,null];
(statearr_19846[(0)] = shadow$dom$state_machine__13272__auto__);

(statearr_19846[(1)] = (1));

return statearr_19846;
});
var shadow$dom$state_machine__13272__auto____1 = (function (state_19843){
while(true){
var ret_value__13273__auto__ = (function (){try{while(true){
var result__13274__auto__ = switch__13271__auto__(state_19843);
if(cljs.core.keyword_identical_QMARK_(result__13274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13274__auto__;
}
break;
}
}catch (e19847){var ex__13275__auto__ = e19847;
var statearr_19848_20468 = state_19843;
(statearr_19848_20468[(2)] = ex__13275__auto__);


if(cljs.core.seq((state_19843[(4)]))){
var statearr_19849_20469 = state_19843;
(statearr_19849_20469[(1)] = cljs.core.first((state_19843[(4)])));

} else {
throw ex__13275__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20470 = state_19843;
state_19843 = G__20470;
continue;
} else {
return ret_value__13273__auto__;
}
break;
}
});
shadow$dom$state_machine__13272__auto__ = function(state_19843){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13272__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13272__auto____1.call(this,state_19843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13272__auto____0;
shadow$dom$state_machine__13272__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13272__auto____1;
return shadow$dom$state_machine__13272__auto__;
})()
})();
var state__14359__auto__ = (function (){var statearr_19854 = f__14358__auto__();
(statearr_19854[(6)] = c__14357__auto___20455);

return statearr_19854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14359__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
