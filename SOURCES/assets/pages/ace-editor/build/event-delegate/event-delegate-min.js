/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("event-delegate",function(a){var c=a.Array,h=a.Lang,b=h.isString,i=h.isObject,e=h.isArray,g=a.Selector.test,d=a.Env.evt.handles;function f(u,w,l,k){var s=c(arguments,0,true),t=b(l)?l:null,r,o,j,n,v,m,q,x,p;if(i(u)){x=[];if(e(u)){for(m=0,q=u.length;m<q;++m){s[0]=u[m];x.push(a.delegate.apply(a,s));}}else{s.unshift(null);for(m in u){if(u.hasOwnProperty(m)){s[0]=m;s[1]=u[m];x.push(a.delegate.apply(a,s));}}}return new a.EventHandle(x);}r=u.split(/\|/);if(r.length>1){v=r.shift();s[0]=u=r.shift();}o=a.Node.DOM_EVENTS[u];if(i(o)&&o.delegate){p=o.delegate.apply(o,arguments);}if(!p){if(!u||!w||!l||!k){return;}j=(t)?a.Selector.query(t,null,true):l;if(!j&&b(l)){p=a.on("available",function(){a.mix(p,a.delegate.apply(a,s),true);},l);}if(!p&&j){s.splice(2,2,j);p=a.Event._attach(s,{facade:false});p.sub.filter=k;p.sub._notify=f.notifySub;}}if(p&&v){n=d[v]||(d[v]={});n=n[u]||(n[u]=[]);n.push(p);}return p;}f.notifySub=function(q,l,p){l=l.slice();if(this.args){l.push.apply(l,this.args);}var o=f._applyFilter(this.filter,l,p),n,m,j,k;if(o){o=c(o);n=l[0]=new a.DOMEventFacade(l[0],p.el,p);n.container=a.one(p.el);for(m=0,j=o.length;m<j&&!n.stopped;++m){n.currentTarget=a.one(o[m]);k=this.fn.apply(this.context||n.currentTarget,l);if(k===false){break;}}return k;}};f.compileFilter=a.cached(function(j){return function(l,k){return g(l._node,j,k.currentTarget._node);};});f._applyFilter=function(n,l,q){var p=l[0],j=q.el,o=p.target||p.srcElement,k=[],m=false;if(o.nodeType===3){o=o.parentNode;}l.unshift(o);if(b(n)){while(o){m=(o===j);if(g(o,n,(m?null:j))){k.push(o);}if(m){break;}o=o.parentNode;}}else{l[0]=a.one(o);l[1]=new a.DOMEventFacade(p,j,q);while(o){if(n.apply(l[0],l)){k.push(o);}if(o===j){break;}o=o.parentNode;l[0]=a.one(o);}l[1]=p;}if(k.length<=1){k=k[0];}l.shift();return k;};a.delegate=a.Event.delegate=f;},"3.4.0",{requires:["node-base"]});