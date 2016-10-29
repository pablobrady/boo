(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 18,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Graveyard_practice_atlas_.png", id:"Graveyard_practice_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Graveyard_practice_atlas_", frames: [[1154,0,500,500],[552,0,600,500],[1104,502,550,250],[552,502,550,400],[0,0,550,733]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Ghost1 = function() {
	this.spriteSheet = ss["Graveyard_practice_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.GhostCenter = function() {
	this.spriteSheet = ss["Graveyard_practice_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HappyHalloweenText = function() {
	this.spriteSheet = ss["Graveyard_practice_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.IMG_1862_550x400 = function() {
	this.spriteSheet = ss["Graveyard_practice_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.skullscream = function() {
	this.spriteSheet = ss["Graveyard_practice_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.SkullScreamSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skullscream();
	this.instance.parent = this;
	this.instance.setTransform(-277,-368);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277,-368,550,733);


(lib.RoughGhost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ghost1();
	this.instance.parent = this;
	this.instance.setTransform(97,-15,0.224,0.224,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-15,112,112);


(lib.HappyHalloweenText_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.HappyHalloweenText();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-544.9,-372.9,1229.9,751);


(lib.CenterGhost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GhostCenter();
	this.instance.parent = this;
	this.instance.setTransform(-115,-28,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-28,222,185);


// stage content:
(lib.Graveyard_practice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SkullScream
	this.instance = new lib.SkullScreamSymbol();
	this.instance.parent = this;
	this.instance.setTransform(262.4,219.9,0.42,0.42);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({_off:false},0).wait(1).to({regX:-2,regY:-1.5,scaleX:0.46,scaleY:0.46,x:261.9,y:219.2,alpha:0.069},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:262.4,y:219.1,alpha:0.138},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:262.8,y:219,alpha:0.208},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:263.2,alpha:0.277},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:263.6,y:218.9,alpha:0.346},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:264.1,y:218.8,alpha:0.415},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:264.5,alpha:0.485},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:264.9,y:218.7,alpha:0.554},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:265.3,alpha:0.623},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:265.8,y:218.6,alpha:0.692},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:266.2,y:218.5,alpha:0.762},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:266.6,alpha:0.831},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:267,y:218.4,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:271.2,y:195.3,alpha:0.72},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:275.4,y:172.2,alpha:0.54},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:279.6,y:149.1,alpha:0.36},0).wait(1).to({scaleX:2,scaleY:2,x:283.8,y:125.9,alpha:0.18},0).wait(1).to({scaleX:2.25,scaleY:2.25,x:288.1,y:102.8,alpha:0},0).to({_off:true},1).wait(144));

	// HappyHalloween
	this.instance_1 = new lib.HappyHalloweenText_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.2,67.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(111).to({_off:false},0).wait(150));

	// G-Up6+
	this.Up1Instance = new lib.RoughGhost();
	this.Up1Instance.parent = this;
	this.Up1Instance.setTransform(197.3,329.4,1.595,1.595,-35.8,0,0,54.9,55.9);
	this.Up1Instance.alpha = 0.5;
	this.Up1Instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Up1Instance).wait(222).to({_off:false},0).wait(1).to({regX:41,regY:41,scaleX:1.64,scaleY:1.64,x:167.5,y:308.9},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:169.6,y:294.7},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:171.6,y:280.6},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:173.6,y:266.5},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:175.5,y:252.3},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:177.3,y:238.2},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:179.2,y:224.1},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:180.9,y:210},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:182.6,y:195.8},0).wait(1).to({scaleX:2,scaleY:2,x:184.1,y:181.7},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:185.7,y:167.6},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:187.2,y:153.4},0).wait(1).to({scaleX:2.13,scaleY:2.13,x:188.6,y:139.3},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:190,y:125.2},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:191.3,y:111.1},0).wait(1).to({scaleX:2.25,scaleY:2.25,x:192.5,y:97},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:193.8,y:82.8},0).wait(1).to({scaleX:2.33,scaleY:2.33,x:194.8,y:68.7},0).wait(1).to({scaleX:2.37,scaleY:2.37,x:195.9,y:54.6},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:196.9,y:40.5},0).wait(1).to({scaleX:2.45,scaleY:2.45,x:197.9,y:26.3},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:198.7,y:12.3},0).wait(1).to({scaleX:2.53,scaleY:2.53,x:199.6,y:-1.9},0).wait(1).to({scaleX:2.57,scaleY:2.57,x:200.3,y:-16},0).wait(1).to({scaleX:2.61,scaleY:2.61,x:201,y:-30.2},0).wait(1).to({scaleX:2.66,scaleY:2.66,x:201.6,y:-44.3},0).wait(1).to({scaleX:2.7,scaleY:2.7,x:202.2,y:-58.4},0).wait(1).to({scaleX:2.74,scaleY:2.74,x:202.7,y:-72.5},0).wait(1).to({scaleX:2.78,scaleY:2.78,x:203.2,y:-86.7},0).wait(1).to({scaleX:2.82,scaleY:2.82,x:203.6,y:-100.8},0).wait(1).to({scaleX:2.86,scaleY:2.86,x:204,y:-115},0).wait(1).to({scaleX:2.9,scaleY:2.9,x:204.2,y:-129.1},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:204.4,y:-143.2},0).to({_off:true},1).wait(5));

	// G-Up5+
	this.Up1Instance_1 = new lib.RoughGhost();
	this.Up1Instance_1.parent = this;
	this.Up1Instance_1.setTransform(232.8,294.7,1.191,1.191,0,38,-142,108,95.4);
	this.Up1Instance_1.alpha = 0.5;
	this.Up1Instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Up1Instance_1).wait(196).to({_off:false},0).wait(1).to({regX:41,regY:41,scaleX:1.24,scaleY:1.24,skewX:37.9,skewY:-142.1,x:332.8,y:280.3},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:330,y:268},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:327.5,y:255.8},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:325,y:243.4},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:322.8,y:231.2},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:320.6,y:218.8},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:318.6,y:206.5},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:316.8,y:194.2},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:315.1,y:181.9},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:313.5,y:169.6},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:312,y:157.3},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:310.7,y:145},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:309.5,y:132.7},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:308.5,y:120.4},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:307.6,y:108.1},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:306.8,y:95.8},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:306.2,y:83.4},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:305.7,y:71.2},0).wait(1).to({scaleX:2.19,scaleY:2.19,x:305.4,y:58.8},0).wait(1).to({scaleX:2.24,scaleY:2.24,x:305.1,y:46.6},0).wait(1).to({scaleX:2.3,scaleY:2.3,y:34.3},0).wait(1).to({scaleX:2.35,scaleY:2.35,y:21.9},0).wait(1).to({scaleX:2.4,scaleY:2.4,x:305.3,y:9.7},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:305.7,y:-2.6},0).wait(1).to({scaleX:2.51,scaleY:2.51,x:306.2,y:-14.9},0).wait(1).to({scaleX:2.56,scaleY:2.56,x:306.8,y:-27.2},0).wait(1).to({scaleX:2.61,scaleY:2.61,x:307.5,y:-39.5},0).wait(1).to({scaleX:2.67,scaleY:2.67,x:308.4,y:-51.8},0).wait(1).to({scaleX:2.72,scaleY:2.72,x:309.5,y:-64.1},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:310.6,y:-76.4},0).wait(1).to({scaleX:2.82,scaleY:2.82,x:312,y:-88.7},0).wait(1).to({scaleX:2.88,scaleY:2.88,x:313.4,y:-101},0).wait(1).to({scaleX:2.93,scaleY:2.93,x:314.9,y:-113.4},0).wait(1).to({scaleX:2.98,scaleY:2.98,x:316.7,y:-125.7},0).wait(1).to({scaleX:3.03,scaleY:3.03,x:318.5,y:-137.9},0).wait(1).to({scaleX:3.09,scaleY:3.09,x:320.5,y:-150.2},0).to({_off:true},1).wait(28));

	// G-Up4
	this.Up1Instance_2 = new lib.RoughGhost();
	this.Up1Instance_2.parent = this;
	this.Up1Instance_2.setTransform(372.5,294.8,2.059,2.059,0,38,-142,54.8,54.5);
	this.Up1Instance_2.alpha = 0.5;
	this.Up1Instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Up1Instance_2).wait(151).to({_off:false},0).wait(1).to({regX:41,regY:41,scaleX:2.09,scaleY:2.09,x:405.2,y:278},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:398.5,y:265.8},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:391.9,y:253.5},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:385.5,y:241.2},0).wait(1).to({scaleX:2.2,scaleY:2.2,x:379.3,y:229},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:373.1,y:216.6},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:367.1,y:204.4},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:361.2,y:192.1},0).wait(1).to({scaleX:2.32,scaleY:2.32,x:355.5,y:179.8},0).wait(1).to({scaleX:2.35,scaleY:2.35,x:350,y:167.5},0).wait(1).to({scaleX:2.37,scaleY:2.37,x:344.5,y:155.3},0).wait(1).to({scaleX:2.4,scaleY:2.4,x:339.2,y:143},0).wait(1).to({scaleX:2.43,scaleY:2.43,x:334,y:130.7},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:329,y:118.4},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:324.1,y:106.2},0).wait(1).to({scaleX:2.52,scaleY:2.52,x:319.4,y:93.9},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:314.7,y:81.6},0).wait(1).to({scaleX:2.57,scaleY:2.57,x:310.2,y:69.3},0).wait(1).to({scaleX:2.6,scaleY:2.6,x:305.9,y:57.1},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:301.7,y:44.7},0).wait(1).to({scaleX:2.66,scaleY:2.66,x:297.6,y:32.5},0).wait(1).to({scaleX:2.69,scaleY:2.69,x:293.6,y:20.2},0).wait(1).to({scaleX:2.72,scaleY:2.72,x:289.8,y:8},0).wait(1).to({scaleX:2.74,scaleY:2.74,x:286.2,y:-4.3},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:282.7,y:-16.6},0).wait(1).to({scaleX:2.8,scaleY:2.8,x:279.3,y:-28.9},0).wait(1).to({scaleX:2.83,scaleY:2.83,x:276.1,y:-41.1},0).wait(1).to({scaleX:2.86,scaleY:2.86,x:273,y:-53.4},0).wait(1).to({scaleX:2.89,scaleY:2.89,skewX:37.9,skewY:-142.1,x:270,y:-65.7},0).wait(1).to({scaleX:2.92,scaleY:2.92,x:267.2,y:-78},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:264.4,y:-90.3},0).wait(1).to({scaleX:2.97,scaleY:2.97,x:261.9,y:-102.5},0).wait(1).to({scaleX:3,scaleY:3,x:259.5,y:-114.8},0).wait(1).to({scaleX:3.03,scaleY:3.03,x:257.2,y:-127.1},0).wait(1).to({scaleX:3.06,scaleY:3.06,x:255.1,y:-139.3},0).wait(1).to({scaleX:3.09,scaleY:3.09,x:253.1,y:-151.6},0).to({_off:true},1).wait(73));

	// G-Center3
	this.instance_2 = new lib.CenterGhost();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.6,292.9,1,1,0,0,0,-4,64.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(174).to({_off:false},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:276.9,alpha:0.067},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:275.5,y:260.9,alpha:0.133},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:275.6,y:244.9,alpha:0.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:275.5,y:228.9,alpha:0.267},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:213,alpha:0.333},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:275.6,y:196.9,alpha:0.4},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:275.5,y:181,alpha:0.467},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:275.6,y:164.9,alpha:0.533},0).wait(1).to({scaleX:1.38,scaleY:1.38,y:149,alpha:0.6},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:275.5,y:133,alpha:0.667},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:275.6,y:117,alpha:0.733},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:275.5,y:101,alpha:0.8},0).wait(1).to({scaleX:1.55,scaleY:1.55,y:86},0).wait(1).to({scaleX:1.59,scaleY:1.59,y:71},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:275.6,y:56},0).wait(1).to({scaleX:1.67,scaleY:1.67,y:41},0).wait(1).to({scaleX:1.71,scaleY:1.71,y:25.9},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:275.5,y:11},0).wait(1).to({scaleX:1.79,scaleY:1.79,y:-4},0).wait(1).to({scaleX:1.83,scaleY:1.83,y:-19.1},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:275.6,y:-34.1},0).wait(1).to({scaleX:1.9,scaleY:1.9,y:-49.1},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:275.5,y:-64.1},0).wait(1).to({scaleX:1.98,scaleY:1.98,y:-79.1},0).wait(1).to({scaleX:2.02,scaleY:2.02,y:-94.1},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:275.6,y:-109.2},0).wait(1).to({scaleX:2.1,scaleY:2.1,y:-124.2},0).wait(1).to({scaleX:2.14,scaleY:2.14,y:-139.2},0).wait(1).to({scaleX:2.18,scaleY:2.18,x:275.5,y:-154.2},0).wait(1).to({scaleX:2.22,scaleY:2.22,y:-169.2},0).wait(1).to({scaleX:2.26,scaleY:2.26,y:-184.2},0).wait(1).to({scaleX:2.3,scaleY:2.3,x:275.6,y:-199.3},0).wait(1).to({scaleX:2.34,scaleY:2.34,y:-214.2},0).to({_off:true},1).wait(53));

	// G-Up3
	this.Up1Instance_3 = new lib.RoughGhost();
	this.Up1Instance_3.parent = this;
	this.Up1Instance_3.setTransform(197.3,329.4,1.595,1.595,-35.8,0,0,54.9,55.9);
	this.Up1Instance_3.alpha = 0.5;
	this.Up1Instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Up1Instance_3).wait(78).to({_off:false},0).wait(1).to({regX:41,regY:41,scaleX:1.64,scaleY:1.64,x:167.5,y:309},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:169.6,y:294.8},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:171.6,y:280.7},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:173.6,y:266.5},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:175.5,y:252.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:177.4,y:238.3},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:179.2,y:224.1},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:180.9,y:210},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:182.6,y:195.8},0).wait(1).to({scaleX:2,scaleY:2,x:184.1,y:181.7},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:185.7,y:167.6},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:187.2,y:153.5},0).wait(1).to({scaleX:2.13,scaleY:2.13,x:188.6,y:139.3},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:190,y:125.2},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:191.3,y:111.1},0).wait(1).to({scaleX:2.25,scaleY:2.25,x:192.6,y:97},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:193.8,y:82.8},0).wait(1).to({scaleX:2.33,scaleY:2.33,x:194.9,y:68.7},0).wait(1).to({scaleX:2.37,scaleY:2.37,x:195.9,y:54.6},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:196.9,y:40.4},0).wait(1).to({scaleX:2.45,scaleY:2.45,x:197.9,y:26.3},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:198.7,y:12.2},0).wait(1).to({scaleX:2.53,scaleY:2.53,x:199.6,y:-1.9},0).wait(1).to({scaleX:2.57,scaleY:2.57,x:200.3,y:-16},0).wait(1).to({scaleX:2.61,scaleY:2.61,x:201,y:-30.2},0).wait(1).to({scaleX:2.66,scaleY:2.66,x:201.7,y:-44.3},0).wait(1).to({scaleX:2.7,scaleY:2.7,x:202.3,y:-58.5},0).wait(1).to({scaleX:2.74,scaleY:2.74,x:202.8,y:-72.6},0).wait(1).to({scaleX:2.78,scaleY:2.78,x:203.2,y:-86.7},0).wait(1).to({scaleX:2.82,scaleY:2.82,x:203.6,y:-100.8},0).wait(1).to({scaleX:2.86,scaleY:2.86,x:204,y:-115},0).wait(1).to({scaleX:2.9,scaleY:2.9,x:204.2,y:-129.1},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:204.5,y:-143.3},0).to({_off:true},1).wait(149));

	// G-Up2
	this.Up1Instance_4 = new lib.RoughGhost();
	this.Up1Instance_4.parent = this;
	this.Up1Instance_4.setTransform(390.9,276.7,0.671,0.671,0,30.1,-149.9,44.1,38.3);
	this.Up1Instance_4.alpha = 0.461;
	this.Up1Instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Up1Instance_4).wait(52).to({_off:false},0).wait(1).to({regX:41,regY:41,scaleX:0.74,scaleY:0.74,skewX:30.7,skewY:-149.3,y:268.4,alpha:0.47},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:31.2,skewY:-148.8,x:390.1,y:257.3,alpha:0.471},0).wait(1).to({scaleX:0.86,scaleY:0.86,skewX:31.7,skewY:-148.3,x:389.2,y:246.4,alpha:0.472},0).wait(1).to({scaleX:0.93,scaleY:0.93,skewX:32.2,skewY:-147.8,x:388.4,y:235.5,alpha:0.473},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewX:32.7,skewY:-147.3,x:387.6,y:224.5,alpha:0.474},0).wait(1).to({scaleX:1.05,scaleY:1.05,skewX:33.2,skewY:-146.8,x:386.8,y:213.6,alpha:0.475},0).wait(1).to({scaleX:1.11,scaleY:1.11,skewX:33.7,skewY:-146.3,x:386.1,y:202.6,alpha:0.476},0).wait(1).to({scaleX:1.18,scaleY:1.18,skewX:34.3,skewY:-145.7,x:385.3,y:191.7,alpha:0.477},0).wait(1).to({scaleX:1.24,scaleY:1.24,skewX:34.8,skewY:-145.2,x:384.6,y:180.7,alpha:0.478},0).wait(1).to({scaleX:1.3,scaleY:1.3,skewX:35.3,skewY:-144.7,x:383.9,y:169.8,alpha:0.48},0).wait(1).to({scaleX:1.37,scaleY:1.37,skewX:35.8,skewY:-144.2,x:383.2,y:158.8,alpha:0.481},0).wait(1).to({scaleX:1.43,scaleY:1.43,skewX:36.3,skewY:-143.7,x:382.5,y:147.9,alpha:0.482},0).wait(1).to({scaleX:1.49,scaleY:1.49,skewX:36.8,skewY:-143.2,x:381.8,y:136.9,alpha:0.483},0).wait(1).to({scaleX:1.56,scaleY:1.56,skewX:37.4,skewY:-142.6,x:381.2,y:126,alpha:0.484},0).wait(1).to({scaleX:1.62,scaleY:1.62,skewX:37.9,skewY:-142.1,x:380.5,y:115,alpha:0.485},0).wait(1).to({scaleX:1.68,scaleY:1.68,skewX:38.4,skewY:-141.6,x:379.9,y:104.1,alpha:0.486},0).wait(1).to({scaleX:1.75,scaleY:1.74,skewX:38.9,skewY:-141.1,x:379.3,y:93.1,alpha:0.487},0).wait(1).to({scaleX:1.81,scaleY:1.81,skewX:39.4,skewY:-140.6,x:378.8,y:82.2,alpha:0.488},0).wait(1).to({scaleX:1.87,scaleY:1.87,skewX:39.9,skewY:-140.1,x:378.2,y:71.2,alpha:0.489},0).wait(1).to({scaleX:1.93,scaleY:1.93,skewX:40.4,skewY:-139.6,x:377.7,y:60.3,alpha:0.49},0).wait(1).to({scaleX:2,scaleY:2,skewX:41,skewY:-139,x:377.1,y:49.3,alpha:0.491},0).wait(1).to({scaleX:2.06,scaleY:2.06,skewX:41.5,skewY:-138.5,x:376.6,y:38.4,alpha:0.492},0).wait(1).to({scaleX:2.12,scaleY:2.12,skewX:42,skewY:-138,x:376.2,y:27.5,alpha:0.494},0).wait(1).to({scaleX:2.19,scaleY:2.19,skewX:42.5,skewY:-137.5,x:375.6,y:16.5,alpha:0.495},0).wait(1).to({scaleX:2.25,scaleY:2.25,skewX:43,skewY:-137,x:375.2,y:5.5,alpha:0.496},0).wait(1).to({scaleX:2.31,scaleY:2.31,skewX:43.5,skewY:-136.5,x:374.7,y:-5.3,alpha:0.497},0).wait(1).to({scaleX:2.38,scaleY:2.38,skewX:44,skewY:-136,x:374.3,y:-16.3,alpha:0.498},0).wait(1).to({scaleX:2.44,scaleY:2.44,skewX:44.6,skewY:-135.4,x:373.9,y:-27.2,alpha:0.499},0).wait(1).to({scaleX:1.14,scaleY:1.14,skewX:45.1,skewY:-134.9,x:373.1,y:-43.8,alpha:0.5},0).to({_off:true},1).wait(179));

	// G-Up1
	this.ghost1Instance = new lib.RoughGhost();
	this.ghost1Instance.parent = this;
	this.ghost1Instance.setTransform(106,294.9,0.999,0.999,-29.9,0,0,55.5,56.1);
	this.ghost1Instance.alpha = 0.039;
	this.ghost1Instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ghost1Instance).wait(29).to({_off:false},0).wait(1).to({regX:41,regY:41,scaleX:1.04,scaleY:1.04,rotation:-30,x:99.4,y:275.6,alpha:0.081},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:111.3,y:261.8,alpha:0.123},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:121.8,y:247.5,alpha:0.164},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:131.3,y:233,alpha:0.205},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:139.8,y:218.3,alpha:0.247},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:147.4,y:203.3,alpha:0.288},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:154.3,y:188.1,alpha:0.33},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:160.4,y:172.9,alpha:0.371},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:165.9,y:157.4,alpha:0.412},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:170.7,y:141.8,alpha:0.454},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:174.8,y:126.2,alpha:0.495},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:178.5,y:110.4,alpha:0.536},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:181.5,y:94.5,alpha:0.578},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:184,y:78.5,alpha:0.619},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:185.9,y:62.4,alpha:0.66},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:187.4,y:46.1,alpha:0.702},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:188.3,y:29.9,alpha:0.743},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:188.7,y:13.5,alpha:0.785},0).wait(1).to({scaleX:1.69,scaleY:1.69,y:-2.9,alpha:0.826},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:188.1,y:-19.5,alpha:0.867},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:187.1,y:-36.1,alpha:0.909},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:185.7,y:-52.7,alpha:0.95},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:183.9,y:-69.4,alpha:0.991},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:178.6,y:-86.9},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:173,y:-104.2},0).wait(1).to({scaleX:2.4,scaleY:2.4,x:167.1,y:-121.3},0).to({_off:true},1).wait(205));

	// BG
	this.instance_3 = new lib.IMG_1862_550x400();
	this.instance_3.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCARIgIgFQgFgEgBgEIABgHQACgGACgCQAGgFAFABIAAgCQALACAEAKQACACAAAEQAAAGgEAFQgFAGgHAAIgDgBg");
	this.shape.setTransform(-358.3,418.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).to({state:[{t:this.shape},{t:this.instance_3}]},94).wait(167));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,200,910.1,420.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;