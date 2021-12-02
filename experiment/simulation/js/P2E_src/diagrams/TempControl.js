// JavaScript Documentvar paper;


function TempControl(){	
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
	
	
if ($(window).width() <= 1368) {
	x = 200;
	y = 50;
  }else
  {
   x = 200;
	y = 200;
  }	
	
	 var TL_tank = TL_Tank (x, y);
	 
	
	 P2ETYCircle = TC_CircleWithLabel((x+48), (y-250), 25, "TY 101");
     var TICCircle = TC_CircleWithLine((x-95), (y-250), 25, "TIC", "100"); 	
	 var TTCircle = TC_TTCircleWithLabel((x+48), (y-160), 25, "TT 100");	 
	 var TECircle = TC_CircleWithLabel((x+48), (y-80), 25, "TE 100");	 
	 var TYCircle = TC_CircleWithLabel((x-95), (y-105), 25, "TY 100");
	
	
     paper.path('M'+(x+10)+' '+(y+50)+'l -90 0 ').attr({'stroke':'black', 'stroke-width':'1'}); 
	 
	 paper.path('M'+(x-115)+' '+(y+50)+'l -50 0 ').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});	 
	 
	 paper.path('M'+(x-97)+' '+(y+30)+'l 0 -110 ').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-85)+' '+(y-30)+'l -20 20 ').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-85)+' '+(y-40)+'l -20 20 ').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-97)+' '+(y-130)+'l 0 -95  ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+21)+' '+(y-250)+'l -95 0  ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	 paper.path('M'+(x+48)+' '+(y-225)+'l 0 40').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x+55)+' '+(y-220)+'l -15 15').attr({'stroke':'black', 'stroke-width':'2'});
	 paper.path('M'+(x+55)+' '+(y-210)+'l -15 15').attr({'stroke':'black', 'stroke-width':'2'});
	 
	 paper.path('M'+(x+48)+' '+(y-135)+'l 0 30').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x+55)+' '+(y-130)+'l -15 15').attr({'stroke':'black', 'stroke-width':'2'});
	 paper.path('M'+(x+55)+' '+(y-122)+'l -15 15').attr({'stroke':'black', 'stroke-width':'2'});
	 
	 paper.path('M'+(x+48)+' '+(y-55)+'l 0 140').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.rect((x+87), (y-165), 40, 35).attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x+105)+' '+(y-130)+'l 0 290').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x+88)+' '+(y+152)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x+135)+' '+(y+235)+ 'l 0 15 l 55 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 
	 paper.path('M'+(x+190)+' '+(y+180)+ ' l 55 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 
	 paper.path('M'+(x+135)+' '+(y-35)+ 'l 0 -15 l 55 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});
	 
	 
	 
	 TC_ControlValve((x -107), (y+40));
	 
	 
	 var SteamIn = Label((x-165), (y+35), "Steam In");
	 var TCV100 = Label((x-97), (y+75), "TCV 100");	
	 var M = Label((x+105), (y-145), "M");
	 var HotWaterOutlet = Label((x+240), (y+250), "Hot Water Outlet");
	 var CondensateOutlet = Label((x+300), (y+180), "Condensate Outlet");
	 var ColdWater = Label((x+230), (y-50), "Cold Water");
	
	paper.text((x+100), (y+300), "Temperature  Control System").attr({
			stroke : 'black',
			'font-size' : 25,
			"font-family": "sans-serif" 
		});
	
	 
//	 M170,90C170,70,210,110,210,90C210,70,170,110,170,90Z
};	


	function TL_Tank (x, y){
		
		tank = paper.path('M'+(x+25)+' '+(y-18)+'l 0 220 150 0 0 -220 -150 0').attr({
	"stroke-width" : 1,
	'stroke':'black',
	}); 
	
	
	outertankCover1 = paper.path('M'+(x+25)+' '+(y+20)+'l -15 0 0 195').attr({'stroke':'black', 'stroke-width':'1'});
	
	outertankCover1 = paper.path('M'+(x+175)+' '+(y+20)+'l 15 0 0 198').attr({'stroke':'black', 'stroke-width':'1'});
	
	upperArc = paper.path('M'+(x+25)+' '+(y-18)+ 'l 0 0 q 68 -50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	
    lowerArc = paper.path('M'+(x+25)+' '+(y+200)+ 'l 0 0 q 68 50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
	outertankCoverArc  = paper.path('M'+(x+10)+' '+(y+215)+ 'l 0 0 q 68 50 180 3  ').attr({'stroke':'black', 'stroke-width':'1'});

	
	};


	function TC_ControlValve(x, y){
	
	
	loweroutlet = paper.path('M'+(x)+' '+(y)+ 'l 20 0').attr({'stroke':'black', 'stroke-width':'1'});
	
	Arc = paper.path('M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
	joiningline = paper.path('M'+(x+10)+' '+(y)+ 'l 0 10').attr({'stroke':'black', 'stroke-width':'1'});
	
	valve = paper.path('M'+(x-8)+' '+(y+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};
 
 function Label(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		}).toBack();
	 
	 
	 
 };
 
 
  function TC_CircleWithLine(x, y, r, l1, l2){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	
	
	
};

 function TC_CircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});	
	Label(x, y, l1);
	 return c;
	
	
};

   

function TC_TTCircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'}).toFront();	
	Label(x, y, l1);
    return c;
	
	
};
 


  
  
  