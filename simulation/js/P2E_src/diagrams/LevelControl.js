// JavaScript Documentvar paper;


function LevelControl(){	

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
      paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 700);
  }
    //x = 310;
	//y = 160;
	
	x = 40;
	y = 180;

	
	
	
	var LC_tank = LC_Tank(x,y);
	
	var LECircle = LC_CircleWithLabel((x+245), (y+40), 25,"LE 100");	
    var LTCircle = LC_LTCircleWithLabel((x+380), (y+40), 25,"LT 100");		
	var LYCircle = 	LC_CircleWithLabel((x+380), (y+295), 25,"LY 100");
    P2ELYCircle = LC_CircleWithLabel((x+380), (y+130), 25, "LY 101");
	var LICCircle = LC_CircleWithLine((x+380), (y+215), 25, "LIC", "100");	
	var LY200Circle = 	LC_CircleWithLabel((x+380), (y-40), 25,"LY 200");
	var LIC200Circle = 	LC_CircleWithLine((x+605), (y+40), 25,"LIC", "200");
	var LY200Circle = 	LC_CircleWithLabel((x+380), (y-40), 25,"LY 200");
	var PneumaticLY200Circle = LC_LTCircleWithLabel((x+500), (y+40), 25,"LY 201");	
	
	
	paper.path('M'+(x+95)+' '+(y-42)+'l 0 -45 100 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});	
	
	paper.path('M'+(x+230)+' '+(y-85)+'l 100 0').attr({'stroke':'black', 'stroke-width':'1'});

	var inletSource = Label((x+380), (y-85), "Inlet Source");
	
	paper.path('M'+(x+212)+' '+(y-65)+ 'l 0 25 145 0').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+275)+' '+(y-47)+ 'l -15 15 ').attr({'stroke':'black', 'stroke-width':'2'});
	paper.path('M'+(x+285)+' '+(y-47)+ 'l -15 15 ').attr({'stroke':'black', 'stroke-width':'2'});
	
	paper.path('M'+(x+405)+' '+(y-40)+ 'l 200 0 0 55').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	paper.path('M'+(x+525)+' '+(y+40)+ 'l 60 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	paper.path('M'+(x+405)+' '+(y+40)+ 'l 70 0 ').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+435)+' '+(y+33)+ 'l -15 15 ').attr({'stroke':'black', 'stroke-width':'2'});
	paper.path('M'+(x+445)+' '+(y+33)+ 'l -15 15 ').attr({'stroke':'black', 'stroke-width':'2'});
	
	paper.path('M'+(x+95)+' '+(y+225)+ 'l 0 170 267 0 ').attr({'stroke':'black', 'stroke-width':'2'});
	
	paper.path('M'+(x+398)+' '+(y+395)+ 'l  30 0 ').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	
	paper.path('M'+(x+173)+' '+(y+40)+ 'l 47 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	
	paper.path('M'+(x+272)+' '+(y+40)+ 'l 82 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	
	paper.path('M'+(x+302)+' '+(y+33)+ 'l -15 15 ').attr({'stroke':'black', 'stroke-width':'2'});
	paper.path('M'+(x+312)+' '+(y+33)+ 'l -15 15 ').attr({'stroke':'black', 'stroke-width':'2'});
	
	
	paper.path('M'+(x+380)+' '+(y+65)+ 'l 0 40').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+387)+' '+(y+70)+ 'l -15 15').attr({'stroke':'black', 'stroke-width':'2'});
	
	paper.path('M'+(x+387)+' '+(y+80)+ 'l -15 15').attr({'stroke':'black', 'stroke-width':'2'});
	
	
	paper.path('M'+(x+380)+' '+(y+155)+ 'l 0 35 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
	
	paper.path('M'+(x+380)+' '+(y+240)+ 'l 0 30').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	paper.path('M'+(x+380)+' '+(y+320)+ 'l 0 55').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+390)+' '+(y+325)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'2'});
	
	paper.path('M'+(x+390)+' '+(y+335)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'2'});
	
    LC_ControlValve1((x+370), (y+385), (x+202), (y-95));
	
	
	
	var LCV100_Label = Label((x+380), (y+420), "LCV 100");
	var LCV200_Label = Label((x+210), (y-105), "LCV 200");
	var Liquid_outlet = Label((x+470), (y+395), "User Demand");
	Label((x+440), (y+10), "OR");

	
	var height = Height((x+5), (y+20));
	
	paper.text((x+200), (y+470), "Level Control System").attr({
			stroke : 'black',
			'font-size' : 25,
			"font-family": "sans-serif" 
		});
	
	 

//     var c = paper.circle((x+400), (y+315), 20).attr({"fill":"red"});
//		LTCircle.click(function(evt){
 //          alert("in click");
 //        });
	 
		
};


function LC_Tank(x,y){
	
	tank = paper.path('M'+(x+25)+' '+(y-18)+'l 0 220 150 0 0 -220 -150 0').attr({
	"stroke-width" : 1,
	'stroke':'black',
	}); 
	
	waterlevel = paper.path('M'+(x+25)+' '+(y+20)+'l 150 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	upperArc = paper.path('M'+(x+25)+' '+(y-18)+ 'l 0 0 q 68 -50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	
    lowerArc = paper.path('M'+(x+25)+' '+(y+200)+ 'l 0 0 q 68 50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
};

function LC_ControlValve1(x, y, x1, y1){
	
	
	loweroutlet = paper.path('M'+(x)+' '+(y)+ 'l 20 0 M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  M'+(x+10)+' '+(y)+ 'l 0 10 M'+(x-8)+' '+(y+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
	
	loweroutlet1 = paper.path('M'+(x1)+' '+(y1+20)+ 'l 20 0 M'+(x1)+' '+(y1+20)+ 'l 0 0 q 10 20 20 0  M'+(x1+10)+' '+(y1+10)+ 'l 0 10 M'+(x1-8)+' '+(y1+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
};
 

 
 function Label(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		}).toBack();
	 
	 
	 
 };
 
 
 function LC_CircleWithLine(x, y, r, l1, l2){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	
	
	
};
 
  function LC_CircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1', 'fill':'white'});	
	Label(x, y, l1);
	return c;
  
	
};
 
 
   function LC_LTCircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1', 'fill':'white', 'cursor':'pointer'}).toFront();	
	Label(x, y, l1);
    return c;
	
	
};
   
 function Height(x, y){
	 
	 
	 line1 = paper.path('M'+(x)+' '+(y)+'l 10 0');
	 line2 = paper.path('M'+(x+5)+' '+(y)+'l 0 80').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});
	 HT_Label = Label((x+5), (y+90), "H");
	 line3 = paper.path('M'+(x+5)+' '+(y + 100)+'l 0 105').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 line4 = paper.path('M'+(x)+' '+(y+205)+'l 80 0');
	 
 };
   

 
  
  
  