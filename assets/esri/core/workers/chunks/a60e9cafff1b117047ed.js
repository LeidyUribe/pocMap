self.webpackChunkRemoteClient([11],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(18),a=(r(7),r(3),r(4),r(20)),s=r(19);r(24),r(34),r(35);const o=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),Object(i.a)([Object(a.b)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),Object(i.a)([Object(a.b)({readOnly:!0,dependsOn:["minScale","maxScale"]})],t.prototype,"scaleRangeId",null),t=Object(i.a)([Object(s.a)("esri.layers.mixins.ScaleRangeLayer")],t),t}},126:function(e,t,r){"use strict";var i,a=r(18),s=(r(7),r(3),r(4)),o=r(20),n=r(54),l=r(52),c=r(19),p=r(51),u=(r(24),r(34),r(35),r(50)),b=r(78),d=r(56),y=r(129),h=r(64),O=(r(59),r(67)),f=r(114),j=r(176);const m=new n.a({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let v=i=class extends u.a{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={size:256,spatialReference:d.a.WebMercator}){const t=e.resolutionFactor||1,r=e.scales,a=e.size||256,s=e.spatialReference||d.a.WebMercator;if(!Object(b.i)(s)){const e=[];if(r)for(let t=0;t<r.length;t++){const i=r[t];e.push({level:t,scale:i,resolution:i})}else{let t=5e-4;for(let r=23;r>=0;r--)e.unshift({level:r,scale:t,resolution:t}),t*=2}return new i({dpi:96,lods:e,origin:new h.a(0,0,s),size:[a,a],spatialReference:s})}const o=Object(b.d)(s),n=e.origin?new h.a({x:e.origin.x,y:e.origin.y,spatialReference:s}):new h.a(o?{x:o.origin[0],y:o.origin[1],spatialReference:s}:{x:0,y:0,spatialReference:s}),l=1/(39.37*Object(O.b)(s)*96),c=[];if(r)for(let e=0;e<r.length;e++){const t=r[e],i=t*l;c.push({level:e,scale:t,resolution:i})}else{let e=Object(b.f)(s)?512/a*591657527.5917094:256/a*591657527.591555;const r=Math.ceil(24/t);c.push({level:0,scale:e,resolution:e*l});for(let i=1;i<r;i++){const r=e/Math.pow(2,t),a=r*l;c.push({level:i,scale:r,resolution:a}),e=r}}return new i({dpi:96,lods:c,origin:n,size:[a,a],spatialReference:s})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const r=Object(b.d)(e);return e.isWrappable&&Math.abs(r.origin[0]-t.x)<=r.dx}return!1}readOrigin(e,t){return h.a.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,r=0;const i=[];this._levelToLOD={},e&&(t=-1/0,r=1/0,e.forEach(e=>{i.push(e.scale),t=e.scale>t?e.scale:t,r=e.scale<r?e.scale:r,this._levelToLOD[e.level]=e})),this._set("scales",i),this._set("minScale",t),this._set("maxScale",r),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[0]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length)return t[t.length-1];{const r=Math.round(e-.5),i=Math.round(e);return t[i]+(i-e)*(t[r]-t[i])}}scaleToZoom(e){const t=this.scales,r=t.length-1;let i=0;for(;i<r;i++){const r=t[i],a=t[i+1];if(r<=e)return i;if(a===e)return i+1;if(r>e&&a<e)return i+1-(e-a)/(r-a)}return i}snapScale(e,t=.95){const r=this.scaleToZoom(e);return r%Math.floor(r)>=t?this.zoomToScale(Math.ceil(r)):this.zoomToScale(Math.floor(r))}tileAt(e,t,r,i){const a=this.lodAt(e);if(!a)return null;let s,o;if("number"==typeof t)s=t,o=r;else if(Object(b.c)(t.spatialReference,this.spatialReference))s=t.x,o=t.y,i=r;else{const e=Object(y.d)(t,this.spatialReference);if(!e)return null;s=e.x,o=e.y,i=r}const n=a.resolution*this.size[0],l=a.resolution*this.size[1];return i||(i={id:null,level:0,row:0,col:0,extent:Object(f.c)()}),i.level=e,i.row=Math.floor((this.origin.y-o)/l+.001),i.col=Math.floor((s-this.origin.x)/n+.001),this.updateTileInfo(i),i}updateTileInfo(e){const t=this.lodAt(e.level);if(!t)return;const r=t.resolution*this.size[0],i=t.resolution*this.size[1];e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=Object(f.c)()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+i}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:r}=this.lodAt(t.level),i=r*this.size[0],a=r*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*a,e[2]=e[0]+i,e[3]=e[1]+a,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return i.fromJSON(this.write({}))}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let r=0;r<e.length;r++){const i=e[r];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],v.prototype,"compressionQuality",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],v.prototype,"dpi",void 0),Object(a.a)([Object(o.b)({type:String,json:{read:m.read,write:m.write,origins:{"web-scene":{read:!1,write:!1}}}})],v.prototype,"format",void 0),Object(a.a)([Object(o.b)({readOnly:!0,dependsOn:["spatialReference","origin"]})],v.prototype,"isWrappable",null),Object(a.a)([Object(o.b)({type:h.a,json:{write:!0}})],v.prototype,"origin",void 0),Object(a.a)([Object(l.a)("origin")],v.prototype,"readOrigin",null),Object(a.a)([Object(o.b)({type:[j.a],value:null,json:{write:!0}})],v.prototype,"lods",null),Object(a.a)([Object(o.b)({readOnly:!0})],v.prototype,"minScale",void 0),Object(a.a)([Object(o.b)({readOnly:!0})],v.prototype,"maxScale",void 0),Object(a.a)([Object(o.b)({readOnly:!0})],v.prototype,"scales",void 0),Object(a.a)([Object(o.b)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],v.prototype,"size",void 0),Object(a.a)([Object(l.a)("size",["rows","cols"])],v.prototype,"readSize",null),Object(a.a)([Object(p.a)("size",{cols:{type:s.a},rows:{type:s.a}})],v.prototype,"writeSize",null),Object(a.a)([Object(o.b)({type:d.a,json:{write:!0}})],v.prototype,"spatialReference",void 0),v=i=Object(a.a)([Object(c.a)("esri.layers.support.TileInfo")],v);var g=v;t.a=g},128:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(18),a=(r(7),r(3),r(4),r(20)),s=r(19);r(24),r(34),r(35);const o=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return Object(i.a)([Object(a.b)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],t.prototype,"blendMode",void 0),Object(i.a)([Object(a.b)()],t.prototype,"effect",void 0),t=Object(i.a)([Object(s.a)("esri.layers.mixins.BlendLayer")],t),t}},139:function(e,t,r){"use strict";var i,a=r(18),s=(r(7),r(1)),o=(r(3),r(4),r(20)),n=r(54),l=r(52),c=r(19),p=r(51),u=(r(24),r(34),r(35),r(50)),b=r(71);let d=i=class extends u.a{async collectRequiredFields(e,t){return Object(b.a)(e,t,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}};Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],d.prototype,"expression",void 0),Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=i=Object(a.a)([Object(c.a)("esri.layers.support.FeatureExpressionInfo")],d);var y=d,h=r(73);const O=function(){const e=Object.keys(h.a);return e.sort(),e}();var f;const j=Object(n.b)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),m=new n.a({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let v=f=class extends u.a{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,r,i){t[r]=e.write(null,i),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):Object(s.g)(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new f({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};Object(a.a)([Object(o.b)({type:y,json:{write:!0}})],v.prototype,"featureExpressionInfo",void 0),Object(a.a)([Object(l.a)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],v.prototype,"readFeatureExpressionInfo",null),Object(a.a)([Object(p.a)("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],v.prototype,"writeFeatureExpressionInfo",null),Object(a.a)([Object(o.b)({type:j.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:j.jsonValues,read:j.read,write:{writer:j.write,isRequired:!0}}})],v.prototype,"mode",null),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],v.prototype,"offset",void 0),Object(a.a)([Object(o.b)({type:O,json:{type:String,read:m.read,write:m.write}})],v.prototype,"unit",null),v=f=Object(a.a)([Object(c.a)("esri.layers.support.ElevationInfo")],v);var g=v;t.a=g},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(18),a=(r(7),r(3),r(4),r(20)),s=r(19);r(24),r(34),r(35);const o=e=>{let t=class extends e{constructor(){super(...arguments),this.refreshInterval=0}refresh(){this.emit("refresh")}};return Object(i.a)([Object(a.b)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),t=Object(i.a)([Object(s.a)("esri.layers.mixins.RefreshableLayer")],t),t}},176:function(e,t,r){"use strict";var i,a=r(18),s=(r(7),r(3),r(4)),o=r(20),n=r(19),l=(r(24),r(34),r(35),r(50));let c=i=class extends l.a{constructor(e){super(e),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0}clone(){return new i({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}};Object(a.a)([Object(o.b)({type:s.a,json:{write:!0}})],c.prototype,"level",void 0),Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"levelValue",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],c.prototype,"resolution",void 0),Object(a.a)([Object(o.b)({type:Number,json:{write:!0}})],c.prototype,"scale",void 0),c=i=Object(a.a)([Object(n.a)("esri.layers.support.LOD")],c);var p=c;t.a=p},331:function(e,t,r){"use strict";r.r(t);var i=r(18),a=(r(7),r(5)),s=r(37),o=(r(3),r(4),r(20)),n=r(52),l=r(19),c=r(51),p=r(14),u=r(24),b=(r(34),r(35),r(2)),d=r(56),y=r(64),h=r(57),O=(r(59),r(55)),f=r(83),j=r(84),m=r(98),v=r(128),g=r(95),w=r(166),S=r(124),I=r(176),x=r(126),L=r(516);let T=class extends(Object(v.a)(Object(w.a)(Object(S.a)(Object(m.a)(Object(g.a)(Object(j.a)(f.a))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new h.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.a.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=d.a.WebMercator,this.subDomains=null,this.tileInfo=new x.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new y.a({x:-20037508.342787,y:20037508.342787,spatialReference:d.a.WebMercator}),spatialReference:d.a.WebMercator,lods:[new I.a({level:0,scale:591657527.591555,resolution:156543.033928}),new I.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new I.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new I.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new I.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new I.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new I.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new I.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new I.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new I.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new I.a({level:10,scale:577790.554289,resolution:152.874056570411}),new I.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new I.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new I.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new I.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new I.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new I.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new I.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new I.a({level:18,scale:2256.994353,resolution:.597164283559817}),new I.a({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?Object(a.d)({urlTemplate:e},t||{}):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new u.a(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p.a("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)});return this.addResolvingPromise(t),Object(b.s)(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&d.a.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new u.a(t),a=i.scheme?i.scheme+"://":"//",s=a+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(s);else if(r&&r.length>0&&i.authority.split(".").length>1)for(const t of r)e.push(a+i.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map(e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new u.a(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(u.v)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(u.B)(e)),t.templateUrl=e}fetchTile(e,t,r,i={}){const{signal:a,timestamp:s}=i,o=this.getTileUrl(e,t,r),n={responseType:"image",signal:a};return null!=s&&(n.query={_ts:i.timestamp}),Object(O.default)(o,n).then(e=>e.data)}getTileUrl(e,t,r){const i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(s.c)(this.urlPath,{level:i,z:i,col:r,x:r,row:t,y:t})}};Object(i.a)([Object(o.b)({type:String,value:"",json:{write:!0}})],T.prototype,"copyright",void 0),Object(i.a)([Object(o.b)({type:h.a,json:{write:!0}})],T.prototype,"fullExtent",void 0),Object(i.a)([Object(o.b)({readOnly:!0,json:{read:!1,write:!1}})],T.prototype,"legendEnabled",void 0),Object(i.a)([Object(o.b)({type:["show","hide"]})],T.prototype,"listMode",void 0),Object(i.a)([Object(o.b)({dependsOn:["tileInfo"]})],T.prototype,"levelValues",null),Object(i.a)([Object(o.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],T.prototype,"isReference",void 0),Object(i.a)([Object(o.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],T.prototype,"operationalLayerType",void 0),Object(i.a)([Object(o.b)({readOnly:!0,json:{read:!1,write:!1}})],T.prototype,"popupEnabled",void 0),Object(i.a)([Object(o.b)({type:d.a})],T.prototype,"spatialReference",void 0),Object(i.a)([Object(n.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],T.prototype,"readSpatialReference",null),Object(i.a)([Object(o.b)({type:[String],json:{write:!0}})],T.prototype,"subDomains",void 0),Object(i.a)([Object(o.b)({type:x.a,json:{write:!0}})],T.prototype,"tileInfo",void 0),Object(i.a)([Object(o.b)({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],T.prototype,"tileServers",null),Object(i.a)([Object(o.b)({json:{read:!1}})],T.prototype,"type",void 0),Object(i.a)([Object(o.b)({dependsOn:["urlTemplate"]})],T.prototype,"urlPath",null),Object(i.a)([Object(o.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],T.prototype,"urlTemplate",void 0),Object(i.a)([Object(n.a)("urlTemplate",["urlTemplate","templateUrl"])],T.prototype,"readUrlTemplate",null),Object(i.a)([Object(c.a)("urlTemplate",{templateUrl:{type:String}})],T.prototype,"writeUrlTemplate",null),Object(i.a)([Object(o.b)({type:L.a,json:{write:!0}})],T.prototype,"wmtsInfo",void 0),T=Object(i.a)([Object(l.a)("esri.layers.WebTileLayer")],T);var M=T;t.default=M},516:function(e,t,r){"use strict";var i,a=r(18),s=(r(7),r(5)),o=(r(3),r(4),r(20)),n=r(19),l=(r(24),r(34),r(35),r(50));let c=i=class extends l.a{constructor(e){super(e)}clone(){return new i({customLayerParameters:Object(s.a)(this.customLayerParameters),customParameters:Object(s.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(a.a)([Object(o.b)({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),Object(a.a)([Object(o.b)({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),Object(a.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=i=Object(a.a)([Object(n.a)("esri.layer.support.WMTSLayerInfo")],c);var p=c;t.a=p},72:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return p})),r.d(t,"h",(function(){return h})),r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return b}));var i=r(6),a=r(89),s=r(86),o=r(156),n=r(93),l=r(139);const c={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;Object(i.a)(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,t,r,i){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(s.a)(this,"screenSizePerspectiveEnabled",{},i))&&(t[r]=e)}}}}}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},u={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},b={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:a.f}}},d={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},y={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function h(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const O={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},f={...O,json:{...O.json,origins:{"web-document":{...O.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(o.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(o.b)(t.drawingInfo.transparency)}}},j={type:n.a,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get(){var e,t;if(null==(e=this.layer)||!e.timeInfo)return null;const r=null==(t=this.view)?void 0:t.timeExtent,i=this.layer.timeExtent,a=this.layer.useViewTime?r&&i?r.intersection(i):r||i:i;if(!a||a.isEmpty)return a;const s=this.layer.timeOffset,o=s?a.offset(-s.value,s.unit):a,n=this._get("timeExtent");return o.equals(n)?n:o}}},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(92),a=r(67);const s={inches:Object(a.a)(1,"meters","inches"),feet:Object(a.a)(1,"meters","feet"),"us-feet":Object(a.a)(1,"meters","us-feet"),yards:Object(a.a)(1,"meters","yards"),miles:Object(a.a)(1,"meters","miles"),"nautical-miles":Object(a.a)(1,"meters","nautical-miles"),millimeters:Object(a.a)(1,"meters","millimeters"),centimeters:Object(a.a)(1,"meters","centimeters"),decimeters:Object(a.a)(1,"meters","decimeters"),meters:Object(a.a)(1,"meters","meters"),kilometers:Object(a.a)(1,"meters","kilometers"),"decimal-degrees":1/Object(a.g)(1,"meters",i.a.radius)}},83:function(e,t,r){"use strict";var i=r(18),a=(r(7),r(16)),s=r(3),o=(r(4),r(20)),n=r(19),l=r(14),c=r(24),p=(r(34),r(35),r(56)),u=r(57),b=(r(59),r(88)),d=r(149),y=r(55),h=r(77);let O=0;const f=s.a.getLogger("esri.layers.Layer");let j=class extends(b.a.EventedMixin(Object(d.a)(h.a))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new u.a(-180,-90,180,90,p.a.WGS84),this.id=Date.now().toString(16)+"-layer-"+O++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=p.a.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,i=await r.e(148).then(r.bind(null,207));try{return await i.fromUrl(t)}catch(e){throw f.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},i=await r.e(81).then(r.bind(null,189));try{return await i.fromItem(t)}catch(e){const r=t&&t.portalItem,i=r&&r.id||"unset",s=r&&r.portal&&r.portal.url||a.a.portalUrl;throw f.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+i+"')",e),e}}initialize(){this.when().catch(e=>{var t,r;s.a.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})})}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?Object(c.I)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await Object(y.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new l.a("layer:no-attribution-data","Layer does not have attribution data")}};Object(i.a)([Object(o.b)({type:String})],j.prototype,"attributionDataUrl",void 0),Object(i.a)([Object(o.b)({type:u.a})],j.prototype,"fullExtent",void 0),Object(i.a)([Object(o.b)({readOnly:!0,dependsOn:["attributionDataUrl"]})],j.prototype,"hasAttributionData",null),Object(i.a)([Object(o.b)({type:String})],j.prototype,"id",void 0),Object(i.a)([Object(o.b)({type:Boolean,nonNullable:!0})],j.prototype,"legendEnabled",void 0),Object(i.a)([Object(o.b)({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),Object(i.a)([Object(o.b)({type:Number,range:{min:0,max:1},nonNullable:!0})],j.prototype,"opacity",void 0),Object(i.a)([Object(o.b)()],j.prototype,"parent",void 0),Object(i.a)([Object(o.b)({readOnly:!0,dependsOn:["url"]})],j.prototype,"parsedUrl",null),Object(i.a)([Object(o.b)({type:Boolean})],j.prototype,"popupEnabled",void 0),Object(i.a)([Object(o.b)({type:Boolean})],j.prototype,"attributionVisible",void 0),Object(i.a)([Object(o.b)({type:p.a})],j.prototype,"spatialReference",void 0),Object(i.a)([Object(o.b)({type:String})],j.prototype,"title",void 0),Object(i.a)([Object(o.b)({type:String,readOnly:!0,json:{read:!1}})],j.prototype,"type",void 0),Object(i.a)([Object(o.b)()],j.prototype,"url",void 0),Object(i.a)([Object(o.b)({type:Boolean,nonNullable:!0})],j.prototype,"visible",void 0),j=Object(i.a)([Object(n.a)("esri.layers.Layer")],j);var m=j;t.a=m},84:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return v}));var i=r(18),a=r(6),s=r(19),o=r(26),n=r(25),l=r(86),c=r(1),p=r(121),u=r(5);class b{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o.a),this._values=new Map}clone(e){const t=new b,r=this._originStores[0];r&&r.forEach((e,r)=>{t.set(r,Object(u.a)(e),0)});for(let r=2;r<o.a;r++){const i=this._originStores[r];i&&i.forEach((i,a)=>{e&&e.has(a)||t.set(a,Object(u.a)(i),r)})}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||Object(c.c)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),a=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),a!==i}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}var d=b;const y=e=>{let t=class extends e{constructor(...e){super(...e);const t=Object(c.c)(Object(a.a)(this)),r=t.metadatas,i=t.store,s=new d;t.store=s,i.keys().forEach(e=>{s.set(e,i.get(e),0)}),Object.keys(r).forEach(e=>{t.internalGet(e)&&s.set(e,t.internalGet(e),0)})}read(e,t){Object(p.a)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=Object(o.d)(t);if("string"==typeof e)return r.get(e,i);const a={};return e.forEach(e=>{a[e]=r.get(e,i)}),a}originOf(e){return Object(o.b)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=Object(o.d)(t),s=Object(a.a)(this);let n;n="string"==typeof e?"*"===e?r.keys(i):[e]:e,n.forEach(e=>{s.propertyInvalidated(e),r.revert(e,i),s.propertyCommitted(e)})}};return t=Object(i.a)([Object(s.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return Object(a.a)(e).store}let O=class extends(y(n.a)){};O=Object(i.a)([Object(s.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],O);const f=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return j(this).delete(e,Object(o.d)(t))}write(e={},t){return Object(l.b)(this,e=e||{},t),e}setAtOrigin(e,t,r){Object(a.a)(this).setAtOrigin(e,t,Object(o.d)(r))}removeOrigin(e){const t=j(this),r=Object(o.d)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=j(this),i=Object(o.d)(t),a=this.get(e);for(let t=i+1;t<o.a;++t)r.delete(e,t);r.set(e,a,i)}toJSON(e){return this.write({},e)}};return t=Object(i.a)([Object(s.a)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function j(e){return Object(a.a)(e).store}const m=e=>{let t=class extends(f(y(e))){constructor(...e){super(...e)}};return t=Object(i.a)([Object(s.a)("esri.core.MultiOriginJSONSupport")],t),t};let v=class extends(m(n.a)){};v=Object(i.a)([Object(s.a)("esri.core.MultiOriginJSONSupport")],v)},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var i=r(18),a=(r(7),r(3)),s=(r(4),r(20)),o=r(52),n=r(19),l=r(51),c=r(14),p=r(24),u=(r(34),r(35),r(2)),b=r(75),d=r(97);const y=a.a.getLogger("esri.layers.mixins.PortalLayer"),h=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new d.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(72).then(r.bind(null,208));return Object(u.u)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw y.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||b.a.getDefault());return r&&i&&!Object(p.r)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new c.a("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return Object(i.a)([Object(s.b)({type:d.default})],t.prototype,"portalItem",null),Object(i.a)([Object(o.a)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),Object(i.a)([Object(l.a)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),Object(i.a)([Object(s.b)()],t.prototype,"resourceReferences",void 0),t=Object(i.a)([Object(n.a)("esri.layers.mixins.PortalLayer")],t),t}},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var i=r(18),a=(r(7),r(3),r(4),r(20)),s=r(19),o=r(51),n=r(14),l=(r(24),r(34),r(35),r(121)),c=r(86);const p={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};var u=r(72);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.title=null}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&Object(c.a)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r,i){!e||i&&"tables"===i.layerContainerType||(t.layerType=e)}writeTitle(e,t){t.title=e||"Layer"}read(e,t){t&&(t.layer=this),Object(l.b)(this,e,t=>super.read(e,t),t)}write(e,t){if(t&&t.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=p[e];let i=r&&r[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return t.messages&&t.messages.push(new n.a("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter(e=>e instanceof n.a&&"web-document-write:property-required"===e.name).length;return!this.url&&i?null:r}beforeSave(){}};return Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(i.a)([Object(a.b)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),Object(i.a)([Object(o.a)("listMode")],t.prototype,"writeListMode",null),Object(i.a)([Object(a.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(i.a)([Object(o.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(i.a)([Object(a.b)(u.e)],t.prototype,"opacity",void 0),Object(i.a)([Object(a.b)({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),Object(i.a)([Object(o.a)("title")],t.prototype,"writeTitle",null),Object(i.a)([Object(a.b)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=Object(i.a)([Object(s.a)("esri.layers.mixins.OperationalLayer")],t),t}}});