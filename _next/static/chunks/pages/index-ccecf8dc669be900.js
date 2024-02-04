(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5075)}])},1438:function(n,t,e){"use strict";e.d(t,{O:function(){return r}});var r="/VisuSpeak-MediaPipe-Model";t.Z={keypointClassifierLabels: ['Hello', 'Yes', 'No', 'Please', 'Thank You']}},3587:function(n,t,e){"use strict";e.r(t);var r=e(7568),a=e(828),i=e(9815),u=e(655),c=e(7294),o=e(7135),s=e(5423),f=e(7523),l=e(9743),p=e(1438),h=600,d=450;t.default=function(){var n=(0,c.useRef)(null),t=(0,c.useRef)(null),e=(0,c.useRef)(null),m=(0,c.useRef)(null),y=(0,c.useRef)([]),v=(0,l.default)().processLandmark;function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)((function(n){var t,e,r,c,o,l,g;return(0,u.__generator)(this,(function(u){if(m.current){if(n.multiHandLandmarks.length,(t=m.current.getContext("2d")).save(),t.clearRect(0,0,m.current.width,m.current.height),t.drawImage(n.image,0,0,h,d),n.multiHandLandmarks){e=!0,r=!1,c=void 0;try{for(o=function(){var e,r,u,c,o,l,m,x,_,w,Z,C,M=(0,a.Z)(g.value,2),k=M[0],E=M[1];v(E,n.image).then((function(n){return y.current[k]=n})),console.log(p.Z.keypointClassifierLabels[y.current[k]]);var b=E.map((function(n){return n.x})),N=E.map((function(n){return n.y}));t.fillStyle="#ff0000",t.font="24px serif",t.fillText(p.Z.keypointClassifierLabels[y.current[k]],h*(e=Math).min.apply(e,(0,i.Z)(b)),d*(r=Math).min.apply(r,(0,i.Z)(N))-15),(0,s.drawRectangle)(t,{xCenter:(u=Math).min.apply(u,(0,i.Z)(b))+((c=Math).max.apply(c,(0,i.Z)(b))-(o=Math).min.apply(o,(0,i.Z)(b)))/2,yCenter:(l=Math).min.apply(l,(0,i.Z)(N))+((m=Math).max.apply(m,(0,i.Z)(N))-(x=Math).min.apply(x,(0,i.Z)(N)))/2,width:(_=Math).max.apply(_,(0,i.Z)(b))-(w=Math).min.apply(w,(0,i.Z)(b)),height:(Z=Math).max.apply(Z,(0,i.Z)(N))-(C=Math).min.apply(C,(0,i.Z)(N)),rotation:0,rectId:13},{fillColor:"transparent",color:"#ff0000",lineWidth:1}),(0,s.drawConnectors)(t,E,f.HAND_CONNECTIONS,{color:"#00ffff",lineWidth:2}),(0,s.drawLandmarks)(t,E,{color:"#ffff29",lineWidth:1})},l=n.multiHandLandmarks.entries()[Symbol.iterator]();!(e=(g=l.next()).done);e=!0)o()}catch(x){r=!0,c=x}finally{try{e||null==l.return||l.return()}finally{if(r)throw c}}}t.restore()}return[2]}))}))).apply(this,arguments)}return(0,c.useEffect)((function(){function a(){return(a=(0,r.Z)((function(){return(0,u.__generator)(this,(function(a){return e.current=new o.Camera(n.current,{onFrame:(0,r.Z)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,t.current.send({image:n.current})];case 1:return e.sent(),[2]}}))})),width:h,height:d}),e.current.start(),[2]}))}))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),t.current=new f.Hands({locateFile:function(n){return"https://cdn.jsdelivr.net/npm/@mediapipe/hands/".concat(n)}}),t.current.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),t.current.onResults(g)}),[]),{maxVideoHeight:d,maxVideoWidth:h,canvasEl:m,videoElement:n}}},9743:function(n,t,e){"use strict";e.r(t);var r=e(7568),a=e(9815),i=e(655),u=e(7294),c=e(8947),o=e(6486),s=e.n(o),f=e(1438);t.default=function(){var n=(0,u.useRef)(),t=function(){var t=(0,r.Z)((function(t){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,n.current.execute(c.odF([t])).squeeze().argMax().data()];case 1:return[2,e.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),e=function(){var n=(0,r.Z)((function(n,e){var r,u;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return r=function(n,t){var e=n.width,r=n.height,a=[];return Object.values(t).forEach((function(n){var t=Math.min(n.x*e,e-1),i=Math.min(n.y*r,r-1);a.push([t,i])})),a}(e,n),u=function(n){var t,e=s().cloneDeep(n),r=0,i=0;Object.values(e).forEach((function(n,t){t||(r=parseInt(n[0]),i=parseInt(n[1])),e[t][0]=e[t][0]-r,e[t][1]=e[t][1]-i})),e=s().flatten(e);var u=(t=Math).max.apply(t,(0,a.Z)(e.map((function(n){return Math.abs(n)}))));return e=e.map((function(n){return n/u}))}(r),[4,t(u)];case 1:return[2,i.sent()[0]]}}))}));return function(t,e){return n.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)((function(){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,c.YLj("".concat(f.O,"/tf-models/key-point-classifier/model.json"))];case 1:return n.current=t.sent(),[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){o()}),[]),{processLandmark:e}}},7481:function(n,t,e){"use strict";e.r(t);var r=e(5893),a=(e(7294),e(3587));t.default=function(){var n=(0,a.default)(),t=n.videoElement,e=n.maxVideoWidth,i=n.maxVideoHeight,u=n.canvasEl;return(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,r.jsx)("video",{style:{display:"none"},className:"video",playsInline:!0,ref:t}),(0,r.jsx)("canvas",{ref:u,width:e,height:i})]})}},5075:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return i}});var r=e(5893),a=(e(7294),e(7481));function i(){return(0,r.jsx)(a.default,{})}},5410:function(){},8628:function(){},1601:function(){},7792:function(){},4977:function(){},5042:function(){}},function(n){n.O(0,[662,864,723,132,974,904,394,554,774,888,179],(function(){return t=8312,n(n.s=t);var t}));var t=n.O();_N_E=t}]);