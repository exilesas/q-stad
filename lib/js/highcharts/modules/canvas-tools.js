/*
 A class to parse color values
 @author Stoyan Stefanov <sstoo@gmail.com>
 @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 Use it if you like it

 canvg.js - Javascript SVG parser and renderer on Canvas
 MIT Licensed 
 Gabe Lerner (gabelerner@gmail.com)
 http://code.google.com/p/canvg/

 Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/

 Highcharts JS v3.0.1 (2013-04-09)
 CanVGRenderer Extension module

 (c) 2011-2012 Torstein Hønsi, Erik Olsson

 License: www.highcharts.com/license
*/
function RGBColor(m){this.ok=!1;m.charAt(0)=="#"&&(m=m.substr(1,6));var m=m.replace(/ /g,""),m=m.toLowerCase(),a={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",
darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",
gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",
lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",
oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",
slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"},c;for(c in a)m==c&&(m=a[c]);var d=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(b){return[parseInt(b[1]),parseInt(b[2]),parseInt(b[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,
example:["#00ff00","336699"],process:function(b){return[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(b){return[parseInt(b[1]+b[1],16),parseInt(b[2]+b[2],16),parseInt(b[3]+b[3],16)]}}];for(c=0;c<d.length;c++){var b=d[c].process,k=d[c].re.exec(m);if(k)channels=b(k),this.r=channels[0],this.g=channels[1],this.b=channels[2],this.ok=!0}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r;this.g=this.g<0||isNaN(this.g)?0:
this.g>255?255:this.g;this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b;this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"};this.toHex=function(){var b=this.r.toString(16),a=this.g.toString(16),d=this.b.toString(16);b.length==1&&(b="0"+b);a.length==1&&(a="0"+a);d.length==1&&(d="0"+d);return"#"+b+a+d};this.getHelpXML=function(){for(var b=[],k=0;k<d.length;k++)for(var c=d[k].example,j=0;j<c.length;j++)b[b.length]=c[j];for(var h in a)b[b.length]=h;c=document.createElement("ul");
c.setAttribute("id","rgbcolor-examples");for(k=0;k<b.length;k++)try{var l=document.createElement("li"),o=new RGBColor(b[k]),n=document.createElement("div");n.style.cssText="margin: 3px; border: 1px solid black; background:"+o.toHex()+"; color:"+o.toHex();n.appendChild(document.createTextNode("test"));var q=document.createTextNode(" "+b[k]+" -> "+o.toRGB()+" -> "+o.toHex());l.appendChild(n);l.appendChild(q);c.appendChild(l)}catch(p){}return c}}
if(!window.console)window.console={},window.console.log=function(){},window.console.dir=function(){};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(m){for(var a=0;a<this.length;a++)if(this[a]==m)return a;return-1};
(function(){function m(){var a={FRAMERATE:30,MAX_VIRTUAL_PIXELS:3E4};a.init=function(c){a.Definitions={};a.Styles={};a.Animations=[];a.Images=[];a.ctx=c;a.ViewPort=new function(){this.viewPorts=[];this.Clear=function(){this.viewPorts=[]};this.SetCurrent=function(a,b){this.viewPorts.push({width:a,height:b})};this.RemoveCurrent=function(){this.viewPorts.pop()};this.Current=function(){return this.viewPorts[this.viewPorts.length-1]};this.width=function(){return this.Current().width};this.height=function(){return this.Current().height};
this.ComputeSize=function(a){return a!=null&&typeof a=="number"?a:a=="x"?this.width():a=="y"?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}};a.init();a.ImagesLoaded=function(){for(var c=0;c<a.Images.length;c++)if(!a.Images[c].loaded)return!1;return!0};a.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};a.compressSpaces=function(a){return a.replace(/[\s\r\t\n]+/gm," ")};a.ajax=function(a){var d;return(d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?
(d.open("GET",a,!1),d.send(null),d.responseText):null};a.parseXml=function(a){if(window.DOMParser)return(new DOMParser).parseFromString(a,"text/xml");else{var a=a.replace(/<!DOCTYPE svg[^>]*>/,""),d=new ActiveXObject("Microsoft.XMLDOM");d.async="false";d.loadXML(a);return d}};a.Property=function(c,d){this.name=c;this.value=d;this.hasValue=function(){return this.value!=null&&this.value!==""};this.numValue=function(){if(!this.hasValue())return 0;var b=parseFloat(this.value);(this.value+"").match(/%$/)&&
(b/=100);return b};this.valueOrDefault=function(b){return this.hasValue()?this.value:b};this.numValueOrDefault=function(b){return this.hasValue()?this.numValue():b};var b=this;this.Color={addOpacity:function(d){var c=b.value;if(d!=null&&d!=""){var f=new RGBColor(b.value);f.ok&&(c="rgba("+f.r+", "+f.g+", "+f.b+", "+d+")")}return new a.Property(b.name,c)}};this.Definition={getDefinition:function(){var d=b.value.replace(/^(url\()?#([^\)]+)\)?$/,"$2");return a.Definitions[d]},isUrl:function(){return b.value.indexOf("url(")==
0},getFillStyle:function(b){var d=this.getDefinition();return d!=null&&d.createGradient?d.createGradient(a.ctx,b):d!=null&&d.createPattern?d.createPattern(a.ctx,b):null}};this.Length={DPI:function(){return 96},EM:function(b){var d=12,c=new a.Property("fontSize",a.Font.Parse(a.ctx.font).fontSize);c.hasValue()&&(d=c.Length.toPixels(b));return d},toPixels:function(d){if(!b.hasValue())return 0;var c=b.value+"";return c.match(/em$/)?b.numValue()*this.EM(d):c.match(/ex$/)?b.numValue()*this.EM(d)/2:c.match(/px$/)?
b.numValue():c.match(/pt$/)?b.numValue()*1.25:c.match(/pc$/)?b.numValue()*15:c.match(/cm$/)?b.numValue()*this.DPI(d)/2.54:c.match(/mm$/)?b.numValue()*this.DPI(d)/25.4:c.match(/in$/)?b.numValue()*this.DPI(d):c.match(/%$/)?b.numValue()*a.ViewPort.ComputeSize(d):b.numValue()}};this.Time={toMilliseconds:function(){if(!b.hasValue())return 0;var a=b.value+"";if(a.match(/s$/))return b.numValue()*1E3;a.match(/ms$/);return b.numValue()}};this.Angle={toRadians:function(){if(!b.hasValue())return 0;var a=b.value+
"";return a.match(/deg$/)?b.numValue()*(Math.PI/180):a.match(/grad$/)?b.numValue()*(Math.PI/200):a.match(/rad$/)?b.numValue():b.numValue()*(Math.PI/180)}}};a.Font=new function(){this.Styles=["normal","italic","oblique","inherit"];this.Variants=["normal","small-caps","inherit"];this.Weights="normal,bold,bolder,lighter,100,200,300,400,500,600,700,800,900,inherit".split(",");this.CreateFont=function(d,b,c,e,f,g){g=g!=null?this.Parse(g):this.CreateFont("","","","","",a.ctx.font);return{fontFamily:f||
g.fontFamily,fontSize:e||g.fontSize,fontStyle:d||g.fontStyle,fontWeight:c||g.fontWeight,fontVariant:b||g.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var c=this;this.Parse=function(d){for(var b={},d=a.trim(a.compressSpaces(d||"")).split(" "),k=!1,e=!1,f=!1,g=!1,j="",h=0;h<d.length;h++)if(!e&&c.Styles.indexOf(d[h])!=-1){if(d[h]!="inherit")b.fontStyle=d[h];e=!0}else if(!g&&c.Variants.indexOf(d[h])!=-1){if(d[h]!="inherit")b.fontVariant=
d[h];e=g=!0}else if(!f&&c.Weights.indexOf(d[h])!=-1){if(d[h]!="inherit")b.fontWeight=d[h];e=g=f=!0}else if(k)d[h]!="inherit"&&(j+=d[h]);else{if(d[h]!="inherit")b.fontSize=d[h].split("/")[0];e=g=f=k=!0}if(j!="")b.fontFamily=j;return b}};a.ToNumberArray=function(c){for(var c=a.trim(a.compressSpaces((c||"").replace(/,/g," "))).split(" "),d=0;d<c.length;d++)c[d]=parseFloat(c[d]);return c};a.Point=function(a,d){this.x=a;this.y=d;this.angleTo=function(b){return Math.atan2(b.y-this.y,b.x-this.x)};this.applyTransform=
function(b){var a=this.x*b[1]+this.y*b[3]+b[5];this.x=this.x*b[0]+this.y*b[2]+b[4];this.y=a}};a.CreatePoint=function(c){c=a.ToNumberArray(c);return new a.Point(c[0],c[1])};a.CreatePath=function(c){for(var c=a.ToNumberArray(c),d=[],b=0;b<c.length;b+=2)d.push(new a.Point(c[b],c[b+1]));return d};a.BoundingBox=function(a,d,b,k){this.y2=this.x2=this.y1=this.x1=Number.NaN;this.x=function(){return this.x1};this.y=function(){return this.y1};this.width=function(){return this.x2-this.x1};this.height=function(){return this.y2-
this.y1};this.addPoint=function(b,a){if(b!=null){if(isNaN(this.x1)||isNaN(this.x2))this.x2=this.x1=b;if(b<this.x1)this.x1=b;if(b>this.x2)this.x2=b}if(a!=null){if(isNaN(this.y1)||isNaN(this.y2))this.y2=this.y1=a;if(a<this.y1)this.y1=a;if(a>this.y2)this.y2=a}};this.addX=function(b){this.addPoint(b,null)};this.addY=function(b){this.addPoint(null,b)};this.addBoundingBox=function(b){this.addPoint(b.x1,b.y1);this.addPoint(b.x2,b.y2)};this.addQuadraticCurve=function(b,a,d,c,k,l){d=b+2/3*(d-b);c=a+2/3*(c-
a);this.addBezierCurve(b,a,d,d+1/3*(k-b),c,c+1/3*(l-a),k,l)};this.addBezierCurve=function(b,a,d,c,k,l,o,n){var q=[b,a],p=[d,c],t=[k,l],m=[o,n];this.addPoint(q[0],q[1]);this.addPoint(m[0],m[1]);for(i=0;i<=1;i++)b=function(b){return Math.pow(1-b,3)*q[i]+3*Math.pow(1-b,2)*b*p[i]+3*(1-b)*Math.pow(b,2)*t[i]+Math.pow(b,3)*m[i]},a=6*q[i]-12*p[i]+6*t[i],d=-3*q[i]+9*p[i]-9*t[i]+3*m[i],c=3*p[i]-3*q[i],d==0?a!=0&&(a=-c/a,0<a&&a<1&&(i==0&&this.addX(b(a)),i==1&&this.addY(b(a)))):(c=Math.pow(a,2)-4*c*d,c<0||(k=
(-a+Math.sqrt(c))/(2*d),0<k&&k<1&&(i==0&&this.addX(b(k)),i==1&&this.addY(b(k))),a=(-a-Math.sqrt(c))/(2*d),0<a&&a<1&&(i==0&&this.addX(b(a)),i==1&&this.addY(b(a)))))};this.isPointInBox=function(b,a){return this.x1<=b&&b<=this.x2&&this.y1<=a&&a<=this.y2};this.addPoint(a,d);this.addPoint(b,k)};a.Transform=function(c){var d=this;this.Type={};this.Type.translate=function(b){this.p=a.CreatePoint(b);this.apply=function(b){b.translate(this.p.x||0,this.p.y||0)};this.applyToPoint=function(b){b.applyTransform([1,
0,0,1,this.p.x||0,this.p.y||0])}};this.Type.rotate=function(b){b=a.ToNumberArray(b);this.angle=new a.Property("angle",b[0]);this.cx=b[1]||0;this.cy=b[2]||0;this.apply=function(b){b.translate(this.cx,this.cy);b.rotate(this.angle.Angle.toRadians());b.translate(-this.cx,-this.cy)};this.applyToPoint=function(b){var a=this.angle.Angle.toRadians();b.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]);b.applyTransform([Math.cos(a),Math.sin(a),-Math.sin(a),Math.cos(a),0,0]);b.applyTransform([1,0,0,1,-this.p.x||
0,-this.p.y||0])}};this.Type.scale=function(b){this.p=a.CreatePoint(b);this.apply=function(b){b.scale(this.p.x||1,this.p.y||this.p.x||1)};this.applyToPoint=function(b){b.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}};this.Type.matrix=function(b){this.m=a.ToNumberArray(b);this.apply=function(b){b.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])};this.applyToPoint=function(b){b.applyTransform(this.m)}};this.Type.SkewBase=function(b){this.base=d.Type.matrix;this.base(b);this.angle=
new a.Property("angle",b)};this.Type.SkewBase.prototype=new this.Type.matrix;this.Type.skewX=function(b){this.base=d.Type.SkewBase;this.base(b);this.m=[1,0,Math.tan(this.angle.Angle.toRadians()),1,0,0]};this.Type.skewX.prototype=new this.Type.SkewBase;this.Type.skewY=function(b){this.base=d.Type.SkewBase;this.base(b);this.m=[1,Math.tan(this.angle.Angle.toRadians()),0,1,0,0]};this.Type.skewY.prototype=new this.Type.SkewBase;this.transforms=[];this.apply=function(b){for(var a=0;a<this.transforms.length;a++)this.transforms[a].apply(b)};
this.applyToPoint=function(b){for(var a=0;a<this.transforms.length;a++)this.transforms[a].applyToPoint(b)};for(var c=a.trim(a.compressSpaces(c)).split(/\s(?=[a-z])/),b=0;b<c.length;b++){var k=c[b].split("(")[0],e=c[b].split("(")[1].replace(")","");this.transforms.push(new this.Type[k](e))}};a.AspectRatio=function(c,d,b,k,e,f,g,j,h,l){var d=a.compressSpaces(d),d=d.replace(/^defer\s/,""),o=d.split(" ")[0]||"xMidYMid",d=d.split(" ")[1]||"meet",n=b/k,q=e/f,p=Math.min(n,q),m=Math.max(n,q);d=="meet"&&(k*=
p,f*=p);d=="slice"&&(k*=m,f*=m);h=new a.Property("refX",h);l=new a.Property("refY",l);h.hasValue()&&l.hasValue()?c.translate(-p*h.Length.toPixels("x"),-p*l.Length.toPixels("y")):(o.match(/^xMid/)&&(d=="meet"&&p==q||d=="slice"&&m==q)&&c.translate(b/2-k/2,0),o.match(/YMid$/)&&(d=="meet"&&p==n||d=="slice"&&m==n)&&c.translate(0,e/2-f/2),o.match(/^xMax/)&&(d=="meet"&&p==q||d=="slice"&&m==q)&&c.translate(b-k,0),o.match(/YMax$/)&&(d=="meet"&&p==n||d=="slice"&&m==n)&&c.translate(0,e-f));o=="none"?c.scale(n,
q):d=="meet"?c.scale(p,p):d=="slice"&&c.scale(m,m);c.translate(g==null?0:-g,j==null?0:-j)};a.Element={};a.Element.ElementBase=function(c){this.attributes={};this.styles={};this.children=[];this.attribute=function(b,d){var c=this.attributes[b];if(c!=null)return c;c=new a.Property(b,"");d==!0&&(this.attributes[b]=c);return c};this.style=function(b,d){var c=this.styles[b];if(c!=null)return c;c=this.attribute(b);if(c!=null&&c.hasValue())return c;c=this.parent;if(c!=null&&(c=c.style(b),c!=null&&c.hasValue()))return c;
c=new a.Property(b,"");d==!0&&(this.styles[b]=c);return c};this.render=function(b){if(this.style("display").value!="none"&&this.attribute("visibility").value!="hidden"){b.save();this.setContext(b);if(this.attribute("mask").hasValue()){var a=this.attribute("mask").Definition.getDefinition();a!=null&&a.apply(b,this)}else this.style("filter").hasValue()?(a=this.style("filter").Definition.getDefinition(),a!=null&&a.apply(b,this)):this.renderChildren(b);this.clearContext(b);b.restore()}};this.setContext=
function(){};this.clearContext=function(){};this.renderChildren=function(b){for(var a=0;a<this.children.length;a++)this.children[a].render(b)};this.addChild=function(b,d){var c=b;d&&(c=a.CreateElement(b));c.parent=this;this.children.push(c)};if(c!=null&&c.nodeType==1){for(var d=0;d<c.childNodes.length;d++){var b=c.childNodes[d];b.nodeType==1&&this.addChild(b,!0)}for(d=0;d<c.attributes.length;d++)b=c.attributes[d],this.attributes[b.nodeName]=new a.Property(b.nodeName,b.nodeValue);b=a.Styles[c.nodeName];
if(b!=null)for(var k in b)this.styles[k]=b[k];if(this.attribute("class").hasValue())for(var d=a.compressSpaces(this.attribute("class").value).split(" "),e=0;e<d.length;e++){b=a.Styles["."+d[e]];if(b!=null)for(k in b)this.styles[k]=b[k];b=a.Styles[c.nodeName+"."+d[e]];if(b!=null)for(k in b)this.styles[k]=b[k]}if(this.attribute("style").hasValue()){b=this.attribute("style").value.split(";");for(d=0;d<b.length;d++)a.trim(b[d])!=""&&(c=b[d].split(":"),k=a.trim(c[0]),c=a.trim(c[1]),this.styles[k]=new a.Property(k,
c))}this.attribute("id").hasValue()&&a.Definitions[this.attribute("id").value]==null&&(a.Definitions[this.attribute("id").value]=this)}};a.Element.RenderedElementBase=function(c){this.base=a.Element.ElementBase;this.base(c);this.setContext=function(d){if(this.style("fill").Definition.isUrl()){var b=this.style("fill").Definition.getFillStyle(this);if(b!=null)d.fillStyle=b}else if(this.style("fill").hasValue())b=this.style("fill"),this.style("fill-opacity").hasValue()&&(b=b.Color.addOpacity(this.style("fill-opacity").value)),
d.fillStyle=b.value=="none"?"rgba(0,0,0,0)":b.value;if(this.style("stroke").Definition.isUrl()){if(b=this.style("stroke").Definition.getFillStyle(this),b!=null)d.strokeStyle=b}else if(this.style("stroke").hasValue())b=this.style("stroke"),this.style("stroke-opacity").hasValue()&&(b=b.Color.addOpacity(this.style("stroke-opacity").value)),d.strokeStyle=b.value=="none"?"rgba(0,0,0,0)":b.value;if(this.style("stroke-width").hasValue())d.lineWidth=this.style("stroke-width").Length.toPixels();if(this.style("stroke-linecap").hasValue())d.lineCap=
this.style("stroke-linecap").value;if(this.style("stroke-linejoin").hasValue())d.lineJoin=this.style("stroke-linejoin").value;if(this.style("stroke-miterlimit").hasValue())d.miterLimit=this.style("stroke-miterlimit").value;if(typeof d.font!="undefined")d.font=a.Font.CreateFont(this.style("font-style").val