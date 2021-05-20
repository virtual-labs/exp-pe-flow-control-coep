//var a = 5;
function PtoEconveter_direct(inputValue,OutputValue){	
		var w = 900;
    var h = 500;

var width = $(window).width();

  if ($(window).width() < 500) {
	    width = $(this).width();
	    paper = new Raphael(document.getElementById('canvas'), '100%', 500);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 500);
  }else
  {
      paper = new Raphael(document.getElementById('canvas'), '100%', 600);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 700);
  }
//	console.log("in p2e direct");
    //x = 310;
	//y = 160;
	x = 50;
	y = 100;
	a = 0;
	
	var IPNozzel = Nozzelanim_d (x, y,a);
	var IPFlapper = FlapperAnim_d (x, y ,a);
	var IPspringscrew = springscrew_d (x,y,a);
	var IPplusNozzel = plusNozzel_d(x,y,a);
	var IPminusNozzel = minusNozzel_d(x,y,a);
	var IPOtherParts = OtherParts_d(x,y,inputValue,OutputValue);
	var nozzelScrew;
	var flapperscrew;
	var Bellows = bellows_d (x, y ,a);
	var upperrect;
	var n0 , n2 , n3 , n4 , n4 , n5 , n6 , n7;
};

function bellows_d (x, y ,a)
{
	
	upperrect = paper.rect(x+400, y-1+a, 15, 78).attr({ 'fill': '#666','stroke':'black', 'stroke-width':'3' });
	paper.rect(x+370, y+136+a, 10, 48 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	paper.rect(x+442, y+136+a, 10, 48 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	n0 = paper.ellipse(x+410, y+140+a, 45, 8).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toFront();
	n2 = paper.ellipse(x+410, y+160+a, 45, 8).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toFront();
	n3 = paper.ellipse(x+410, y+180+a, 45, 8).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toFront();
	n4 = paper.ellipse(x+381, y+150+a, 10, 5).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toBack();
	n5 = paper.ellipse(x+381, y+170+a, 10, 5).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toBack();
	n6 = paper.ellipse(x+440, y+150+a, 10, 5).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toBack();
	n7 = paper.ellipse(x+440, y+170+a, 10, 5).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toBack();
	paper.rect(x+392, y+136+a, 37, 48 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	paper.rect(x+404, y+185+a, 15, 5 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	paper.path('M'+(x+172)+' '+(y+235)+' l 230 0 0 '+(-50+a)+'' ).attr({'fill': '','stroke':'black', 'stroke-width':'2'});
	paper.path('M'+(x+150)+' '+(y+235)+' l 0 10 270 0 0 '+(-60+a)+'' ).attr({'fill': '','stroke':'black', 'stroke-width':'2'});
	paper.path('M'+(x+408)+' '+(y+75+a)+' l 0 59' ).attr({'fill': '','stroke':'black', 'stroke-width':'5'});
	//paper.ellipse(x+510, y+140, 45, 16).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toFront();
	//paper.path('M'+(x+420)+' '+(y+220)+'C' +(x+420)+','+(y+220)+' '+(x+480)+','+(y+210)+' '+(x+430)+','+(y+200)+' C' +(x+430)+','+(y+200)+' '+(x+480)+','+(y+190)+' '+(x+430)+','+(y+180)+' C' +(x+430)+','+(y+180)+' '+(x+480)+','+(y+170)+' '+(x+430)+','+(y+160)+' l -40 0 C' +(x+390)+','+(y+160)+' '+(x+340)+','+(y+170)+' '+(x+390)+','+(y+180)+' C' +(x+390)+','+(y+180)+' '+(x+340)+','+(y+190)+' '+(x+390)+','+(y+200)+' C' +(x+390)+','+(y+200)+' '+(x+340)+','+(y+210)+' '+(x+402)+','+(y+220)+'' ).attr({'stroke':'black', 'stroke-width':'2'});
	//paper.path('M'+(x+420)+' '+(y+220+a)+'C' +(x+420)+','+(y+220+a)+' '+(x+480)+','+(y+210+a)+' '+(x+430)+','+(y+200+a)+' C' +(x+430)+','+(y+200+a)+' '+(x+480)+','+(y+190+a)+' '+(x+430)+','+(y+180+a)+' C' +(x+430)+','+(y+180+a)+' '+(x+480)+','+(y+170+a)+' '+(x+430)+','+(y+160+a)+' l -40 0 C' +(x+390)+','+(y+160+a)+' '+(x+340)+','+(y+170+a)+' '+(x+390)+','+(y+180+a)+' C' +(x+390)+','+(y+180+a)+' '+(x+340)+','+(y+190+a)+' '+(x+390)+','+(y+200+a)+' C' +(x+390)+','+(y+200+a)+' '+(x+340)+','+(y+210+a)+' '+(x+402)+','+(y+220+a)+'' ).attr({'stroke':'black', 'stroke-width':'2'});
	}
function Nozzelanim_d (x ,y , a, OutputValue)
{
	x = x + a;
	y = y + a;
//	var path1 = paper.path('M'+(x-a)+' '+(y+205)+' l '+(300+a)+' 0 l 0 -250 l 7 -15 ').attr({'stroke':'black', 'stroke-width':'2'});
//	var path2 =  paper.path('M'+(x-a)+' '+(y+228)+' l '+(300+a)+' 0 l 0 76').attr({'stroke':'black', 'stroke-width':'2'});
//	var path3 = paper.path('M'+(x+315)+' '+(y-60)+' l 0 0 l 7 15 l 0 350 l -23 0').attr({'stroke':'black', 'stroke-width':'2'});
//	paper.path('M'+(x+70-a)+' '+(y+205)+' l 0 7 l 30 0 0 -7 z' ).attr({'fill': '#666','stroke':'black', 'stroke-width':'2'});
//	paper.path('M'+(x+70-a)+' '+(y+220)+' l 0 7 l 30 0 0 -7 z' ).attr({'fill': '#666','stroke':'black', 'stroke-width':'2'});
    var path1 = paper.path('M'+(x-55-a)+' '+(y+155-a)+' l '+(205)+' 0 l 0 -121 ').attr({'stroke':'black', 'stroke-width':'2'});
	var path2 =  paper.path('M'+(x-55-a)+' '+(y+180-a)+' l '+(205)+' 0 l 0 56').attr({'stroke':'black', 'stroke-width':'2'});
	var path3 = paper.path('M'+(x+172-a)+' '+(y+34-a)+'  l 0 203 ').attr({'stroke':'black', 'stroke-width':'2'});
	paper.path('M'+(x+20-a)+' '+(y+155-a)+' l 0 7 l 30 0 0 -7 z' ).attr({'fill': '#666','stroke':'black', 'stroke-width':'2'});
	paper.path('M'+(x+20-a)+' '+(y+172-a)+' l 0 7 l 30 0 0 -7 z' ).attr({'fill': '#666','stroke':'black', 'stroke-width':'2'});
   
	
	//nozzelScrew = paper.path('M'+(x+160)+' '+(y-10-a)+' l -7 0 0 37 7 0 0 -15 50 0 0 -7 -50 0 0 -15' ).attr({'fill': '#666','stroke':'black', 'stroke-width':'2'}).toFront();
//	leftnozzel.rotate(a);
//	rightnozzel.rotate(a);
};

function plusNozzel_d(x,y,a)
{
	x = x + a;
	y = y + a;
	
	var rightnozzel = paper.path('M'+(x+172-a)+' '+(y+34-a)+'  l '+(0+a)+' '+(-95)+' '+(-7)+' '+(-10)+'').attr({'stroke':'black', 'stroke-width':'2'}).toBack();
	var leftnozzel = paper.path('M'+(x+150-a)+' '+(y+34-a)+'  l '+(0+a)+' '+(-95)+' '+(7)+' '+(-10)+'').attr({'stroke':'black', 'stroke-width':'2'}).toBack();
	
//	var rightnozzel = paper.path('M'+(x+202-a)+' '+(y-26-a)+'  l '+(0+a)+' '+(-20+(+a))+' '+(-7+a)+' '+(-10+a)+'').attr({'stroke':'black', 'stroke-width':'2'});
//	var leftnozzel = paper.path('M'+(x+180-a)+' '+(y-26-a)+'  l '+(0+a)+' '+(-20+(+a))+' '+(7)+' '+(-10+(+a))+'').attr({'stroke':'black', 'stroke-width':'2'});
		
}
function minusNozzel_d(x,y,a)
{
	
}
function FlapperAnim_d (x ,y, a)
{
	x = x + a;
	y = y + a;
	
	var flap = paper.path('M'+(x+10-a)+' '+(y-90-a)+' l 0 10 250 '+(0+a)+' l 0 -10  ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
	var flap = paper.path('M'+(x+10-a)+' '+(y-90-a)+' l  250 '+(0+a)+'  ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
	paper.circle( x+2-a, y-85-a, 10 ).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' }).toFront();
//	flap.rotate(a);
paper.path('M'+(x+260-a)+' '+(y-130-a)+' l 0 90   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+260-a)+' '+(y-120-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+260-a)+' '+(y-110-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+260-a)+' '+(y-100-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+260-a)+' '+(y-90-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+260-a)+' '+(y-80-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+260-a)+' '+(y-70-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+260-a)+' '+(y-60-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+260-a)+' '+(y-50-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
	paper.path('M'+(x+260-a)+' '+(y-40-a)+' l 10 -10   ').attr({'fill':'#FFF','stroke':'black', 'stroke-width':'2'});
};

function springscrew_d (x,y,a)
{
	y = y + a;
	paper.ellipse(x+385, y, 10, 5).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+385, y+15, 10, 5).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+385, y+30, 10, 5).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+385, y+45, 10, 5).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+385, y+60, 10, 5).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+385, y+75, 10, 5).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	
	
	paper.rect(x+325, y-10, 70, 100,4).attr({ 'stroke':'black', 'stroke-width':'2' }).toBack();
	paper.rect(x+317, y-10, 15, 100).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	paper.path('M'+(x+328)+' '+(y-10)+' l  0 100').attr({ 'stroke':'black', 'stroke-width':'2' ,"stroke-dasharray":"--"}).toFront();
	paper.circle( x+328, y-10, 3 ).attr({ 'fill': '#000','stroke':'black', 'stroke-width':'2' });
	paper.circle( x+328, y+90, 3 ).attr({ 'fill': '#000','stroke':'black', 'stroke-width':'2' });
	paper.circle( x+328, y+40, 20 ).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	
	paper.circle( x+321, y+40, 6 ).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' }).toFront();
	paper.circle( x+333, y+40, 6 ).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
paper.rect(x+328, y+33, 13, 6).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	paper.rect(x+315, y+42, 11, 6).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	
	paper.ellipse(x+430, y-5, 8, 3).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+430, y+5, 8, 3).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+430, y+15, 8, 3).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+430, y+25, 8, 3).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+430, y+55, 8, 3).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+430, y+65, 8, 3).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+430, y+75, 8, 3).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.ellipse(x+430, y+85, 8, 3).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	
	paper.rect(x+422, y+45, 35, 50, 5 ).attr({ 'stroke':'#000', 'stroke-width':'2' });
	
	paper.rect(x+422, y-13, 35, 50, 5 ).attr({ 'stroke':'#000', 'stroke-width':'2' });
	
	paper.rect(x+450, y+46, 20, 50, 5 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	paper.circle( x+452, y+45, 7 ).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	
	paper.rect(x+442, y-16, 18, 60 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	paper.path('M'+(x+442)+' '+(y+37)+' l 10 0 0 59 ').attr({ 'stroke':'black', 'stroke-width':'2'}).toFront();
	paper.path('M'+(x+460)+' '+(y+45)+' l 50 0 ').attr({ 'stroke':'black', 'stroke-width':'2'}).toFront();
	paper.circle( x+510, y+45, 3 ).attr({ 'fill': '#000','stroke':'black', 'stroke-width':'2' });
	
	paper.path('M'+(x+442)+' '+(y-13)+' l 70 0 ').attr({ 'stroke':'black', 'stroke-width':'2'}).toFront();
	paper.circle( x+510, y-13, 3 ).attr({ 'fill': '#000','stroke':'black', 'stroke-width':'2' });
	//paper.circle( x+510, y+15, 15 ).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' });
	paper.rect(x+495, y-0, 35, 30 ).attr({ 'fill': '#fff','stroke':'black', 'stroke-width':'2' }).toBack();
	paper.path('M'+(x+510)+' '+(y-10)+' l  0 50').attr({ 'stroke':'black', 'stroke-width':'2' ,"stroke-dasharray":"--"}).toBack();
	
	
	
};

function OtherParts_d (x,y,inputValue,OutputValue)
{
	
	paper.rect(x-40, y-140, 330, 430 ).attr({ 'stroke':'black', 'stroke-width':'2' }).toBack();
	
//	paper.rect(x+370, y+136, 10, 48 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
//	paper.rect(x+442, y+136, 10, 48 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
//	paper.ellipse(x+410, y+140, 45, 8).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toFront();
//	paper.ellipse(x+410, y+160, 45, 8).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toFront();
//	paper.ellipse(x+410, y+180, 45, 8).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toFront();
//	paper.ellipse(x+381, y+150, 10, 5).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toBack();
//	paper.ellipse(x+381, y+170, 10, 5).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toBack();
//	paper.ellipse(x+440, y+150, 10, 5).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toBack();
//	paper.ellipse(x+440, y+170, 10, 5).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toBack();
//	paper.rect(x+392, y+136, 37, 48 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
//	paper.rect(x+404, y+186, 15, 5 ).attr({ 'fill': '#fff','stroke':'#fff', 'stroke-width':'0' });
	//paper.ellipse(x+510, y+140, 45, 16).attr({ 'fill': '#fff','stroke':'blue', 'stroke-width':'2' }).toFront();
paper.text((x+60), (y+277), "Pneumatic Transmitter").attr({
		stroke : '#2f7875',
		'font-size' : 19,
		"font-family": "sans-serif" 
	});
paper.text((x+360), (y-40), "LVDT").attr({
		stroke : 'black',
		'font-size' : 15,
		"font-family": "sans-serif" 
	});
paper.text((x+360), (y+40), "PC").attr({
		stroke : 'black',
		'font-size' : 10,
		"font-family": "sans-serif" 
	});
	paper.text((x+510), (y+15), "V/I").attr({
		stroke : 'black',
		'font-size' : 12,
		"font-family": "sans-serif" 
	});
	paper.text((x+570), (y+15), OutputValue+" mA").attr({
		stroke : 'green',
		'font-size' : 14,
		"font-family": "sans-serif" 
	});
	paper.text((x+455), (y+10), "SC 1").attr({
		stroke : 'black',
		'font-size' : 10,
		"font-family": "sans-serif" 
	});
	paper.text((x+466), (y+70), "SC 2").attr({
		stroke : 'black',
		'font-size' : 10,
		"font-family": "sans-serif" 
	});
	paper.text((x+340), (y+180), "Bellows").attr({
		stroke : 'black',
		'font-size' : 13,
		"font-family": "sans-serif" 
	});
	paper.text((x+0), (y+120), "Input ").attr({
		stroke : 'black',
		'font-size' : 13,
		"font-family": "sans-serif" 
	});
	paper.text((x+40), (y+135), "pressure (1.4 kg/cm²)").attr({
		stroke : 'black',
		'font-size' : 13,
		"font-family": "sans-serif" 
	});
	paper.text((x+327), (y+155), inputValue+" kg/cm²").attr({
		stroke : 'green',
		'font-size' : 14,
		"font-family": "sans-serif" 
	});
	paper.text((x+50), (y+190), "Restriction").attr({
		stroke : 'black',
		'font-size' : 13,
		"font-family": "sans-serif" 
	});
	
	
	paper.text((x+120), (y-60), "Nozzle").attr({
		stroke : 'black',
		'font-size' : 13,
		"font-family": "sans-serif" 
	});
	
	paper.text((x+150), (y-100), "Flapper").attr({
		stroke : 'black',
		'font-size' : 13,
		"font-family": "sans-serif" 
	});
	
	paper.text((x-22), (y-75), "Pivot").attr({
		stroke : 'black',
		'font-size' : 13,
		"font-family": "sans-serif" 
	});
	
	paper.text((x+250), (y+330), "P/E converter").attr({
		stroke : 'black',
		'font-size' : 25,
		"font-family": "sans-serif" 
	});	
};// JavaScript Document