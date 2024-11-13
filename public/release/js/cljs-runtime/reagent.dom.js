goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__21739 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21740 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21740);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__21742 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21743 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21743);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21742);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21739);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__21755 = arguments.length;
switch (G__21755) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__21765 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21765,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21765,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__21779_21828 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__21780_21829 = null;
var count__21781_21830 = (0);
var i__21782_21831 = (0);
while(true){
if((i__21782_21831 < count__21781_21830)){
var vec__21805_21832 = chunk__21780_21829.cljs$core$IIndexed$_nth$arity$2(null, i__21782_21831);
var container_21833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21805_21832,(0),null);
var comp_21834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21805_21832,(1),null);
reagent.dom.re_render_component(comp_21834,container_21833);


var G__21835 = seq__21779_21828;
var G__21836 = chunk__21780_21829;
var G__21837 = count__21781_21830;
var G__21838 = (i__21782_21831 + (1));
seq__21779_21828 = G__21835;
chunk__21780_21829 = G__21836;
count__21781_21830 = G__21837;
i__21782_21831 = G__21838;
continue;
} else {
var temp__5804__auto___21839 = cljs.core.seq(seq__21779_21828);
if(temp__5804__auto___21839){
var seq__21779_21840__$1 = temp__5804__auto___21839;
if(cljs.core.chunked_seq_QMARK_(seq__21779_21840__$1)){
var c__5525__auto___21841 = cljs.core.chunk_first(seq__21779_21840__$1);
var G__21842 = cljs.core.chunk_rest(seq__21779_21840__$1);
var G__21843 = c__5525__auto___21841;
var G__21844 = cljs.core.count(c__5525__auto___21841);
var G__21845 = (0);
seq__21779_21828 = G__21842;
chunk__21780_21829 = G__21843;
count__21781_21830 = G__21844;
i__21782_21831 = G__21845;
continue;
} else {
var vec__21812_21846 = cljs.core.first(seq__21779_21840__$1);
var container_21847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21812_21846,(0),null);
var comp_21848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21812_21846,(1),null);
reagent.dom.re_render_component(comp_21848,container_21847);


var G__21849 = cljs.core.next(seq__21779_21840__$1);
var G__21850 = null;
var G__21851 = (0);
var G__21852 = (0);
seq__21779_21828 = G__21849;
chunk__21780_21829 = G__21850;
count__21781_21830 = G__21851;
i__21782_21831 = G__21852;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
