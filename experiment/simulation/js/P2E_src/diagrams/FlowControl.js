// JavaScript Documentvar paper;


function FlowControl(){	
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
	
	x = -10;
	y = 200;

	
	var Ft_tank = FT_tank(x,(y-30));	
	
	var FCCircle = FC_CircleWithLine((x+510), (y-30), 25, "FIC", "100");			
	var FYCircle = FC_CircleWithLabel((x+510), (y+110), 25, "FY 100");	
	var FE_Circle = FC_CircleWithLabel((x+300), (y+180), 25, "FE 100");
	
    var FTCircle = FC_FTCircleWithLabel((x+300), (y+80), 25, "FT 100");	
    P2EFYCircle = FC_FTCircleWithLabel((x+300), (y-30), 25, "FY 101");	
	
	paper.path('M'+(x+95)+' '+(y-90)+ 'l 0 20').attr({'stroke':'black', 'stroke-width':'2	', 'arrow-end':'classic-wide-long'});	
	paper.path('M'+(x+95)+' '+(y+195)+ 'l 0 65 l 35 0').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+170)+' '+(y+257)+ 'l 118 0').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+310)+' '+(y+257)+ 'l 183 0').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+527)+' '+(y+257)+ 'l 50 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	
	paper.path('M'+(x+287)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+298)+' '+(y+253)+ 'l 0 10').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+310)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
	paper.path('M'+(x+298)+' '+(y-5)+ 'l 0 60').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+308)+' '+(y+20)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+308)+' '+(y+10)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+325)+' '+(y-30)+ 'l 160 0').attr({'stroke':'black', 'stroke-width':'2', 'stroke-dasharray' : '--'});
	
	paper.path('M'+(x+298)+' '+(y+105)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+308)+' '+(y+115)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+308)+' '+(y+125)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+298)+' '+(y+205)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+510)+' '+(y-5)+ 'l 0 90').attr({'stroke':'black', 'stroke-width':'2', 'stroke-dasharray' : '--'});	
	paper.path('M'+(x+510)+' '+(y+136)+ ' l 0 98').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+520)+' '+(y+166)+ ' l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+520)+' '+(y+176)+ ' l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	
	FC_ControlValve((x+500), (y+243));	
	pump = pumpdesign((x+150),(y+258));
	
	
    Label((x+100), (y+75), "F 100");	
	Label((x+95), (y-105), "Inlet");
	Label((x+620), (y+257), "User Demand");
	Label((x+510), (y+280), "FCV 100");
	
	paper.text((x+270), (y+320), "Flow Control System").attr({
			stroke : 'black',
			'font-size' : 25,
			"font-family": "sans-serif" 
		});
	
};


function FT_tank(x, y){
	
	tank = paper.path('M'+(x+25)+' '+(y-18)+'l 0 220 150 0 0 -220 -150 0').attr({
	"stroke-width" : 1,
	'stroke':'black',
	}); 
	
	
	
	upperArc = paper.path('M'+(x+25)+' '+(y-18)+ 'l 0 0 q 68 -50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	
    lowerArc = paper.path('M'+(x+25)+' '+(y+200)+ 'l 0 0 q 68 50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
}

function FC_ControlValve(x, y){
	
	
	paper.path('M'+(x)+' '+(y)+ 'l 20 0').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+10)+' '+(y)+ 'l 0 15').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x-8)+' '+(y+3)+ 'l 0 25 l 35 -25 l 0 25 l -35 -25').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};

function pumpdesign(x, y){
	
	paper.circle(x, y, 20).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-10)+' '+(y-18)+ 'l 0 35 l 30 -18 l -30 -18').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};

function FT_CircleWithLabel(x, y, r, l1){
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+12)+' '+(y-20)+ 'l 0 -20 l 30 0 l 0 28 l -20 0').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+17)+' '+(y-23)+ 'l 5 3 l 0 -10 l 18 0').attr({'stroke':'black', 'stroke-width':'1'});
	Label(x, y, l1);
};
 
 function Label(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	 
	 
	 
 };
   
 function FC_CircleWithLine(x, y, r, l1, l2){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	
	
	
};

 function FC_CircleWithLabel(x, y, r, l1){
	
	
	 var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});	
	Label(x, y, l1);
	  return c;
	
	
};

function FC_FTCircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'}).toFront();
	Label(x, y, l1);
    return c;
	
	
};
  
  
  