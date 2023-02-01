// 별빛
$(document).ready(function(){
  var layers=6;
  var starDensity=0.0025;
  
  
  var ww=$(document).width();
  var wh=$(document).height();

  var dpi=window.devicePixelRatio;
  var cw=ww*dpi;
  var ch=wh*dpi;
  var stars=ww*ww*starDensity*dpi;
  
  var contexts=[];
  
  function startBlinking($layer){
    function blink(){
      TweenMax.to($layer,0.2+(Math.random()*0.8),{
        opacity:0.1+(Math.random()*0.1),
        onComplete:blink,
        repeat:1,
        yoyo:true,
        ease:Quad.easeInOut
      }); 
    }
    blink();
  }
  
  for(var i=0;i<layers;i++){
    var $layer=$("<canvas/>")
    	.addClass("layer")
    	.attr({
        width:ww,
        height:wh
      })
    	.css({
        width:ww,
        height:wh
      })
    	.appendTo("body")
    ;
    var ctx=$layer.get(0).getContext("2d");
    ctx.fillStyle="#fff";
    contexts.push(ctx); 
    startBlinking($layer);
    
  }
  
  
  
  for(var i=0;i<stars;i++){
    var x=Math.round(Math.random()*cw)-0.5;
    var y=Math.round(Math.random()*ch)-0.5;
    
    var s=Math.random();
    s=Math.pow(s,30)*2;
    s+=1
    if(Math.random()<0.1){
      s*2;
    }
    if(s<0) s=0;
    
    var a=1;
    if(s<1){
      a=s;
      s=1;
    }
    
    var id=Math.round(Math.random()*(contexts.length-1));
    var ctx=contexts[id];

    ctx.translate(x,y);
    ctx.globalAlpha = a;
    ctx.rotate(Math.PI/3.9);
    ctx.fillRect(0,0,s*dpi,s*dpi);
    
    if(s>=1){
	  ctx.globalAlpha = 0.03;
		var shineSize=(s*s*s)*1.5*dpi;
		ctx.fillRect((s-(shineSize))/2,(s-(shineSize))/2,shineSize,shineSize);
    }	
      
    ctx.rotate(-Math.PI/4);
    ctx.translate(-x,-y);
  }
});


 //  스크롤
window.addEventListener('scroll', function () {

  let s_top = $(window).scrollTop();
  if (s_top > 450) {
      $('.section2_title').css({
          opacity:1,
      })
  }
  else {
      $('.section2_title').removeAttr("style");
  }


});


// 

const colors = ["#225ee1", "#28d7bf", "#ac53cf", "#e7a39c"];
const backgroundColor = "#31AFD4";
const width = window.innerWidth;
const height = window.innerHeight;
const totalFrames = 1000;
let frameCount = 0;
let recording = false;
let recordingStarted = false;
let frameDelta = 0;

let s;

function setup() {
  canvas = createCanvas(width, height, WEBGL);
  noiseSeed(20);
  rectMode(CENTER);
  noStroke();
  
  let vert = document.getElementById('vertShader').innerText;
  let frag = document.getElementById('fragShader').innerText;
  s = createShader(vert, frag);
}

function draw() {
  frameCount += 1;
  frameDelta = (2 * Math.PI * (frameCount % totalFrames)) / totalFrames;

  background(backgroundColor);
  shader(s);
  
  s.setUniform('uResolution',[width,height]);
  s.setUniform('uTime',millis()/100);
  s.setUniform('uLowGpu',false);
  s.setUniform('uVeryLowGpu',false);

  s.setUniform('uSpeedColor',20.0);

  s.setUniform('uColor1',hex2rgb(colors[0]));
  s.setUniform('uColor2',hex2rgb(colors[1]));
  s.setUniform('uColor3',hex2rgb(colors[2]));
  s.setUniform('uColor4',hex2rgb(colors[3]));

  rect(0,0,width,height);
}

const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    
    return [ r / 255, g / 255, b / 255 ];
}