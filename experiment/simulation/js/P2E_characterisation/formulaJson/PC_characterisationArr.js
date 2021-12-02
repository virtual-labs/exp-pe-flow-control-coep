



	function PC_findColsetValue(trueReading, PC_trueReading_arr){
			
			goal = trueReading;
			 var closest = PC_trueReading_arr.reduce(function(prev, curr) {
				    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
				  });
			return closest;
		} ;

		
	function PC_applyFormula(closestValue, idx, trueReading){
		
		var chr = PC_char_Arr[idx];
		var temp1 = PC_formula_json[chr](trueReading);
		return temp1;
		
	};
		


	function PC_calStdValforDirect(formulaVal, higherSpLevel, lowerSpLevel){
		

		
//		var temp2 = (parseFloat(formulaVal) + 0.2).toFixed(3);
		
		var temp2 = (parseFloat(formulaVal) + 4).toFixed(2);
//		console.log(temp2);
		return temp2;
	}

	
	

	function PC_calStdValforReverse(formulaVal, higherSpLevel, lowerSpLevel){

		
//		var temp2 = Math.abs((1 - parseFloat(formulaVal)).toFixed(2));
		
//		var temp2 = Math.abs((parseFloat(formulaVal) -1).toFixed(3));
		
		var temp2 = Math.abs(20 - (parseFloat(formulaVal)).toFixed(2));
		
//		console.log(temp2);
		return temp2;
	}
	
	
	
function PC_calActualValforDirect(formulaVal, higherSpLevel, lowerSpLevel){

		

		var temp2 = ((formulaVal * 0.16 )+ 4).toFixed(2);
	
//	    var temp2 = ((formulaVal * 0.016 )/100+ 4).toFixed(3);

		return temp2;
	}
	
function PC_calActualValforReverse(formulaVal, higherSpLevel, lowerSpLevel){

	

	var temp2 = (20 - (formulaVal * 0.16 )).toFixed(2);
	
//	var temp2 = (20 - (formulaVal * 6 )/100).toFixed(3);

	return temp2;
}



//PC_RandomErrArr = [ 15.00, 20.00, 25.00, 12.25, 15.25, 17.24, 21.05, 22.00, 24.50, 23.15, 30, 35, 40];

//PC_RandomErrArr = [5.00, 10.00, 15.00, 20.00, 25.00, 12.25, 15.25, 17.24, 11.10, 21.05, 22.00, 24.50, 23.15];

PC_RandomErrArr = [5.00, 10.00];

//PC_RandomErrArr = [5.00, 10.00, 15.00, 20.00, 25.00];

//this function select Random error
function randomErr_PC(PC_RandomErrArr)
{

return PC_RandomErrArr[Math.floor(Math.random()*PC_RandomErrArr.length)];

}


PC_FaultIndexArr = [1,2,3,4];
PC_faultcheckCnt = 0;
PC_3FaultDetectionCnt = 0;
PC_wrongFaultCnt = 0;


// PC_DefaultErr = 20.00;
 pcZeroError = -0.24;

PC_trueReading_arr = [	0,10,20,30,	35,	40,	45,	50,	52,	55,	57,	60,	62,65,67,70,71,72,74,77,78,80,82,84,85,87,90,92,94,	98,100  ];


PC_char_Arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "bb", "cc", "dd", "ee"];
            //[0,   1,   2,    3,   4,   5,   6,   7,   8,   9,   10, 11,  12,  13,  14,   15,  16 , 17 , 18,  19,  20,  21,  22,  23,  24,  25,  26,   27,   28,   29,   30]

var PC_formula_json = {
	    
	    "a": function (param) {
			var temp = param  + pcZeroError + PC_DefaultErr;
	        return temp;
	       },
		"b": function (param) {
			var temp = Math.sin(param)+param + pcZeroError + PC_DefaultErr;
	        return temp;
	       },
		"c": function (param) {
			var temp = Math.sin(param)+param + pcZeroError - PC_DefaultErr;
	        return temp;
	       },
		"d":  function (param) {
			var temp = Math.sin(param)+param + pcZeroError + PC_DefaultErr;
	        return temp;
	       },
		"e":  function (param) {
			var temp = Math.cos(param)+param + pcZeroError - PC_DefaultErr;
	        return temp;
	       },
		"f" : function (param) {
			var temp = Math.cos(param)+param + pcZeroError + PC_DefaultErr;
	        return temp;
	       },
		 "g":  function (param) {
			var temp = Math.cos(param)+param + pcZeroError + PC_DefaultErr;
	        return temp;
	       },
		"h" : function (param) {
			var temp = Math.cos(param)+param + pcZeroError + PC_DefaultErr;
	        return temp;
	       },
	    	   
		"i" : function (param) {
			var temp = param + (0.01*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       }, 
		"j" : function (param) {
			var temp = param + (0.01*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },
		"k" : function (param) {
			var temp = param + (0.01*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },  
		"l" : function (param) {
			var temp = param + (0.01*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },  
		"m" : function (param) {
			var temp = param + (0.01*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },  
		"n" : function (param) {
			var temp = param + (0.015*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },  
		"o" : function (param) {
			var temp = param + (0.015*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },   
		"p" : function (param) {
			var temp = param + (0.015*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },  
		"q" : function (param) {
			var temp = param + (0.015*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },
		
		"r" : function (param) {
			var temp = param + (0.015*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },
		"s" : function (param) {
			var temp = param + (0.01*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },
		   
		"t" : function (param) {
			var temp = param + (0.01*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },  
		   
		"u" : function (param) {
			var temp = param + (0.01*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },   
		   
		 "v" : function (param) {
			var temp = param + (0.01*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },    
		"w" : function (param) {
			var temp = param + (0.025*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },  
		 "x" : function (param) {
			var temp = param + (0.025*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },    
		"y" : function (param) {
			var temp = param + (0.025*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },    
		   
		"z" : function (param) {
			var temp = param + (0.015*param) + pcZeroError + PC_DefaultErr;
	        return temp;
	       },    
		"aa" : function (param) {
			var temp = param + (0.017*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },   
		"bb" : function (param) {
			var temp = param + (0.017*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       },   
		   
		"cc" : function (param) {
			var temp = param + (0.027*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       }, 
	    "dd" : function (param) {
			var temp = param + (0.037*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       }, 

		"ee" : function (param) {
			var temp = param + (0.037*param) + pcZeroError - PC_DefaultErr;
	        return temp;
	       }, 






		   
};




function PCDrowGraph(){
	
	 datapoint0Arr = [];
	 datapoint1Arr = [];
	 datapoint2Arr = [];
	 
	  chart = new CanvasJS.Chart("PC_chartContainer",
				{
		  animationEnabled : true,
			theme : "light2",
			title : {
				text : "Pressure Control System (PY 100)",
				fontSize : 20,
			},

			axisX : {
				title : "Input(kg/cm²)",
				crosshair : {
					enabled : true,
					snapToDataPoint : true
				},
			// ticks: {suggestedMin: 2, max:6}
			},
			axisY : {
				title : "Output(mA)",
				minimum : 1,
				maximum : 21
			},

			toolTip : {
				shared : true
			},
			legend : {
				cursor : "pointer",
				verticalAlign : "bottom",
				horizontalAlign : "right",
				dockInsidePlotArea : true,
				itemclick : toogleDataSeries
			},
					data : [ 
						{
						type : "scatter",
						showInLegend : true,
						name : "Observed Output",
						markerType : "circle",
						markerSize: 6,
						// xValueFormatString: "DD MMM,
						// YYYY",
						color : "#F08080",

						dataPoints : datapoint0Arr
					} 
//					{
//						type : "line",
//						showInLegend : true,
//						name : "Observed Output line",
////						markerSize: 5,
//						// lineDashType: "dash",
//						dataPoints :datapoint1Arr
//					}
					,{
						type : "line",
						showInLegend : true,
						name : "Standard Output",
//						markerSize: 5,
						// lineDashType: "dash",
						dataPoints :datapoint2Arr
					} 
					]
				});
		//chart.render();

		function toogleDataSeries(e) {
			if (typeof (e.dataSeries.visible) === "undefined"
					|| e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			}
			//chart.render();
		}
//		var chart = new CanvasJS.Chart("PC_chartContainer",
//				{
//					animationEnabled : true,
//					theme : "light2",
//					title : {
//						text : "Pressure Control System (PY 100)",
//						fontSize : 20,
//					},
//
//					axisX : {
//						title : "Input(kg/cm²)",
//						crosshair : {
//							enabled : true,
//							snapToDataPoint : true
//						},
//					// ticks: {suggestedMin: 2, max:6}
//					},
//					axisY : {
//						title : "Output(mA)",
//						minimum : 1,
//						maximum : 21
//					},
//
//					toolTip : {
//						shared : true
//					},
//					legend : {
//						cursor : "pointer",
//						verticalAlign : "bottom",
//						horizontalAlign : "right",
//						dockInsidePlotArea : true,
//						itemclick : toogleDataSeries
//					},
//					data : [ {
//						type : "scatter",
//						showInLegend : true,
//						name : "Observed Output",
//						markerType : "circle",
//						// xValueFormatString: "DD MMM,
//						// YYYY",
//						color : "#F08080",
//
//						dataPoints : OldValue 
//					}, {
//						type : "line",
//						showInLegend : true,
//						name : "Standard Output",
//						// lineDashType: "dash",
//						dataPoints : [ {
//							x : lowerSpLevel,
//							y : lowerOutputLevel 
//						}, {
//							x : higherSpLevel,
//							y : higherOutputLevel
//						} ]
//					}
//					/*, {
//						type : "scatter",
//						showInLegend : true,
//						name : "Standered Output",
//						markerType : "circle",
//						// xValueFormatString: "DD MMM,
//						// YYYY",
//						color : "#000000",
//
//						dataPoints : StdValue
//					},*/ 
//					
//					]
//				});
//		chart.render();
//
//		function toogleDataSeries(e) {
//			if (typeof (e.dataSeries.visible) === "undefined"
//					|| e.dataSeries.visible) {
//				e.dataSeries.visible = false;
//			} else {
//				e.dataSeries.visible = true;
//			}
//			chart.render();
//		}		
}


function PC_Updategraph(OldValue,lowerSpLevel, higherSpLevel,lowerOutputLevel, higherOutputLevel){
	datapoint0Arr = OldValue;
	chart.options.data[0].dataPoints = datapoint0Arr; 
	datapoint1Arr.push({
		x : lowerSpLevel,
		y : OldValue[0].y
	},
	{
		x : higherSpLevel,
		y : OldValue[OldValue.length - 1].y
	} );
	
	//chart.options.data[1].dataPoints = datapoint1Arr; 
	datapoint2Arr.push({
		x : lowerSpLevel,
		y : lowerOutputLevel
	}, {
		x : higherSpLevel,
		y : higherOutputLevel
	} );
	
	chart.options.data[1].dataPoints = datapoint2Arr; 
	chart.render();
}











