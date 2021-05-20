



	function LC_findColsetValue(trueReading, LC_trueReading_arr){
			
			goal = trueReading;
			 var closest = LC_trueReading_arr.reduce(function(prev, curr) {
				    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
				  });
			return closest;
		} ;

		
	function LC_applyFormula(closestValue, idx, trueReading){
		
		var chr = LC_char_Arr[idx];
		var temp1 = LC_formula_json[chr](trueReading);
		return temp1;
		
	};
		


	function LC_calStdValforDirect(formulaVal, higherSpLevel, lowerSpLevel){
		

		
//		var temp2 = (parseFloat(formulaVal) + 0.2).toFixed(3);
		
		var temp2 = (parseFloat(formulaVal) + 4).toFixed(2);
//		console.log(temp2);
		return temp2;
	}

	
	

	function LC_calStdValforReverse(formulaVal, higherSpLevel, lowerSpLevel){

		
//		var temp2 = Math.abs((1 - parseFloat(formulaVal)).toFixed(2));
		
//		var temp2 = Math.abs((parseFloat(formulaVal) -1).toFixed(3));
		
		var temp2 = Math.abs(20 - (parseFloat(formulaVal)).toFixed(2));
		
//		console.log(temp2);
		return temp2;
	}
	
	
	
function LC_calActualValforDirect(formulaVal, higherSpLevel, lowerSpLevel){

		

		var temp2 = ((formulaVal * 0.16 )+ 4).toFixed(2);
	
//	    var temp2 = ((formulaVal * 0.016 )/100+ 4).toFixed(3);

		return temp2;
	}
	
function LC_calActualValforReverse(formulaVal, higherSpLevel, lowerSpLevel){

	

	var temp2 = (20 - (formulaVal * 0.16 )).toFixed(2);
	
//	var temp2 = (20 - (formulaVal * 6 )/100).toFixed(3);

	return temp2;
}



//LC_RandomErrArr = [ 15.00, 20.00, 25.00, 12.25, 15.25, 17.24, 21.05, 22.00, 24.50, 23.15, 30, 35, 40];

LC_RandomErrArr = [5.00, 10.00, 15.00, 20.00, 25.00, 12.25, 15.25, 17.24, 11.10, 21.05, 22.00, 24.50, 23.15];

//LC_RandomErrArr = [12.25, 15.25, 17.24];

// this function select Random error
function randomErr_LC(LC_RandomErrArr)
{
  
		return LC_RandomErrArr[Math.floor(Math.random()*LC_RandomErrArr.length)];
     
}



LC_FaultIndexArr = [1,2,3,4];
LC_faultcheckCnt = 0;
LC_3FaultDetectionCnt = 0;
LC_wrongFaultCnt = 0;
 
//LC_DefaultErr = 20.00;
lcZeroError = 0.75;
LC_trueReading_arr = [	0,10,20,30,	35,	40,	45,	50,	52,	55,	57,	60,	62,65,67,70,71,72,74,77,78,80,82,84,85,87,90,92,94,	98,100  ];


//LC_trueReading_arr = [	0,0.10,0.20,0.30,0.35,0.40,	0.45,0.50,0.52,0.55,0.57,0.60,0.62,0.65,0.67,0.70,0.71,0.72,0.74,0.77,0.78,0.80,0.82,0.84,0.85,0.87,0.90,0.92,0.94,0.98,0.100];

LC_char_Arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "bb", "cc", "dd", "ee"];
             //[0,   1,   2,    3,   4,   5,   6,   7,   8,   9,   10, 11,  12,  13,  14,   15,  16 , 17 , 18,  19,  20,  21,  22,  23,  24,  25,  26,   27,   28,   29,   30]

var LC_formula_json = {
    
    "a": function (param) {
		var temp = Math.sin(param)+param + lcZeroError + LC_DefaultErr;
        return temp;
       },
	"b": function (param) {
		var temp = Math.sin(param)+param+lcZeroError + LC_DefaultErr;
        return temp;
       },
	"c": function (param) {
		var temp = Math.sin(param)+param+lcZeroError + LC_DefaultErr;
        return temp;
       },
	"d":  function (param) {
		var temp = Math.sin(param)+param+lcZeroError + LC_DefaultErr;
        return temp;
       },
	"e":  function (param) {
		var temp = Math.cos(param)+param+lcZeroError + LC_DefaultErr;
        return temp;
       },
	"f" : function (param) {
		var temp = Math.cos(param)+param+lcZeroError + LC_DefaultErr;
        return temp;
       },
	 "g":  function (param) {
		var temp = Math.cos(param)+param+lcZeroError + LC_DefaultErr;
        return temp;
       },
	"h" : function (param) {
		var temp = Math.cos(param)+param+lcZeroError + LC_DefaultErr;
        return temp;
       },
    	   
	"i" : function (param) {
		var temp = param + (0.01*param)+lcZeroError + LC_DefaultErr;
        return temp;
       }, 
	"j" : function (param) {
		var temp = param + (0.01*param)+lcZeroError + LC_DefaultErr;
        return temp;
       },
	"k" : function (param) {
		var temp = param + (0.01*param)+lcZeroError + LC_DefaultErr;
        return temp;
       },  
	"l" : function (param) {
		var temp = param + (0.01*param)+lcZeroError + LC_DefaultErr;
        return temp;
       },  
	"m" : function (param) {
		var temp = param + (0.01*param)+lcZeroError + LC_DefaultErr;
        return temp;
       },  
	"n" : function (param) {
		var temp = param + (0.015*param)+lcZeroError + LC_DefaultErr;
        return temp;
       },  
	"o" : function (param) {
		var temp = param + (0.015*param)+lcZeroError + LC_DefaultErr;
        return temp;
       },   
	"p" : function (param) {
		var temp = param + (0.015*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },  
	"q" : function (param) {
		var temp = param + (0.015*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },
	
	"r" : function (param) {
		var temp = param + (0.015*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },
	"s" : function (param) {
		var temp = param + (0.01*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },
	   
	"t" : function (param) {
		var temp = param + (0.01*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },  
	   
	"u" : function (param) {
		var temp = param + (0.01*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },   
	   
	 "v" : function (param) {
		var temp = param + (0.01*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },    
	"w" : function (param) {
		var temp = param + (0.015*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },  
	 "x" : function (param) {
		var temp = param + (0.015*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },    
	"y" : function (param) {
		var temp = param + (0.015*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },    
	   
	"z" : function (param) {
		var temp = param + (0.015*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },    
	"aa" : function (param) {
		var temp = param + (0.017*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },   
	"bb" : function (param) {
		var temp = param + (0.017*param)+lcZeroError - LC_DefaultErr;
        return temp;
       },   
	   
	"cc" : function (param) {
		var temp = param + (0.017*param)+lcZeroError - LC_DefaultErr;
        return temp;
       }, 
    "dd" : function (param) {
		var temp = param + (0.017*param)+lcZeroError - LC_DefaultErr;
        return temp;
       }, 

	"ee" : function (param) {
		var temp = param + (0.017*param)+lcZeroError - LC_DefaultErr;
        return temp;
       }, 




       
};













