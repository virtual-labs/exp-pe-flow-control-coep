//var FC_CALIBRATION = FC_CALIBRATION || {};

//FC_CALIBRATION.FC_calibrationFun = function(lowerSpLevel, higherSpLevel, FColdreading, FCarr_actualVal, FCarr_stdVal) {
	
	 FC_calibrationFun_Reverse = function(i2pType, lowerSpLevel, higherSpLevel, FColdreading, FCarr_actualVal, FCarr_stdVal, lowerOutputLevel, higherOutputLevel) {
	
//	console.log("FC_CALIBRATION");

	
	 //console.log("arr true reading not sorted "+FColdreading);
	 //console.log("arr Actual values not sorted"+FCarr_actualVal);
	 //console.log("arr Standard values not sorted"+FCarr_stdVal);
		 var zeroErrCnt = 0, spanErrCnt = 0, linearityAlgo1Cnt = 0, linearityAlgo2Cnt = 0,linearityAlgo3Cnt  = 0;
	 var FColdreadingSorted = [];
	 var FCarr_actualValSorted = [];
	 var FCarr_stdValSorted = [];


	 var spanRange ;



	 FColdreadingSorted = FColdreading.slice();
	 FColdreadingSorted.sort(function(a, b) {
			return a - b
		});
	 //console.log("arr true reading sorted "+FColdreadingSorted);
	 
	 for(var i = 0; i<FColdreadingSorted.length; i++){
		 
		 var index = FColdreading.indexOf(FColdreadingSorted[i]);
		 var value = FCarr_actualVal[index];
		 FCarr_actualValSorted.push(value);
		 var value2 = FCarr_stdVal[index];
		 FCarr_stdValSorted.push(value2);
	 }
	 //console.log("arr Actual values sorted"+FCarr_actualValSorted);
	 //console.log("arr Standard values sorted"+FCarr_stdValSorted);
	
	var FCCalibrationData = {};
	 var positiveVal = [];
	 var negativeVal = [];
	 var negativeValueIndex =  [];
	 var positiveValueIndex = [];
	 var checkVals = [];
	 var checkDiffVals = [];
	
	$("#FC_calibration").prop("hidden", true);
	$("#FC_graph").prop("hidden", true);
	$("#submit_FC_WaterLevel").prop("hidden", true);
	$("#FC_Slider").prop("hidden", true);
	
	var FC0Err_cnt = 0 , FCSpanErr_cnt = 0, FC_LinearityErr_cnt = 0, FC_AccuracyErr_cnt = 0;
	
	var FC_calibrationData = '';
	FC_calibrationData += '<div class="col-md-12" >'
			+ '<div id="FC_calibrationDiv" >'
			+ '<h1>FY Calibration</h1>'
			+'<h6>In this level calibrate the FY 100</h6>'
			+ '<div class="col-md-12" id="FC_Calibration_Input">'

			+ '<div class="col-md-12 marg" id="FCzeroerror_Calibration">'
			+ '<label for="zeroerror" class="col-md-4" style="margin-top:5px">Zero Error:</label>'
			+ '<input type="text" class=" col-md-4" id="zeroerror" placeholder="Enter Zero Error " name="zeroerror" style="padding:5px">'
			+ '<button type="submit" id="submit_FCzeroerror_Calibration" data-toggle="modal" data-target="#calibrationmyModal" class="submit_FC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="zeroerrorOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none; color:#059805"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="FCspanerror_Calibration" hidden>'
			+ '<label for="spanerror" class="col-md-4" style="margin-top:5px">Span Error:</label>'
			+ '<input type="text" class="col-md-4" id="spanerror" placeholder="Enter Span Error " name="spanerror" style="padding:5px">'
			+ '<button type="submit" id="submit_FCspanerror_Calibration" data-toggle="modal" data-target="#calibrationmyModal"  class="submit_FC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="spanerrorOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none; color:#059805"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="FCLinearity_Calibration" hidden>'
			+ '<label for="linearity" class="col-md-4" style="margin-top:5px">Linearity:</label>'
			+ '<input type="text" class="col-md-4" id="linearity" placeholder="Enter Linearity " name="Linearity" style="padding:5px">'
			+ '<button type="submit" id="submit_FCLinearity_Calibration" data-toggle="modal" data-target="#calibrationmyModal" class="submit_FC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="FCLinearityOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none; color:#059805"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="FCAccuracy_Calibration" hidden>'
			+ '<label for="Accuracy" class="col-md-4" style="margin-top:5px">Average Accuracy (%):</label>'
			+ '<input type="text" class="col-md-4" id="Accuracy" placeholder="Enter Accuracy(%) " name="Accuracy" style="padding:5px">'
			+ '<button type="submit" id="submit_FCAccuracy_Calibration" data-toggle="modal" data-target="#calibrationmyModal" class="submit_FC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="LFCAccuracyOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none; color:#059805"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="FC_CalibrationError" hidden>'
			
			+ '</div>'
			// + '<button id="submit_FC_Calibration">Submit</button><br/>'
			+ '<div  id  = "FCCalibQuesDiv"class="col-md-12 " style="margin: 17px 0;" hidden>'
			+ '<i class="plsCalibrate">Please calibrate the FY 100 </i>'
			+ '<label class="radio-inline"><input type="radio" name="FC_calibrateNeed" id="FC_calibrateNeeded">Yes</label>'
			
			+ '</div>' 
			+ '</div>' 
			+ '</div>'
			+'<div id="ZeroErrorKnotch" class="col-md-6"></div>'
			+'<div id="SpanErrorKnotch" class="col-md-6"></div>'
			+'<div id="LinearityKnotch" class="col-md-12" disabled>'
			+'<div id="LinearityTopKnotch" class="col-md-6" hidden></div>'
			+'<div id="LinearityBottomKnotch" class="col-md-6" hidden></div>'
			+'<div id="LinearityBothKnotch" class="col-md-offset-3 col-md-6" hidden></div>'
			+'</div>'
			+'</div>'

	$('#canvasMainDiv').css("display", "none");
	$('#TestNextDiv').css("display", "block");
	$("#TestNextDiv").html('');
	$("#TestNextDiv").html(FC_calibrationData);

	
	
	
	
	$('#submit_FCzeroerror_Calibration').on('click', function() {
		        
		$("#submit_FCzeroerror_Calibration").removeAttr("data-toggle");
		$("#submit_FCzeroerror_Calibration").removeAttr("data-target");
		$('#zero4reverse').css("display","none");
				
		
		        var fc0Temp = FCarr_actualValSorted[FColdreadingSorted.indexOf(lowerSpLevel)];
		        var FC_ZeroError = fc0Temp - 20;
		        
		      
								//console.log("formula value with 0 error"
								//	+ fc0Temp +"ERROR" +FC_ZeroError.toFixed(2));
									        
					if(($("#zeroerror").val() == '') ||  isNaN($("#zeroerror").val())){
						
						alertify.alert("Please Enter The Answer In Numeric Only");
						
					}else{
						

						
						if (FC_ZeroError.toFixed(2) == $("#zeroerror").val()){
							
							
							FCCalibrationData.fcZeroErr = $("#zeroerror").val();
							FCCalibrationData.fcZeroErrCnt = FC0Err_cnt;
							//console.log(FCCalibrationData);
							
							
							FC0Err_cnt = 0;
							
							$("#zeroerror").prop("disabled", true);
							$("#FCspanerror_Calibration").prop("hidden", false);
							$("#submit_FCzeroerror_Calibration").css("display","none");
							$("#zeroerrorOK").css("display","block");
							
						}else{
							if(FC0Err_cnt == 2){
								$("#submit_FCzeroerror_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
								$('#zero4reverse').css("display","block");
								FC0Err_cnt++;
//								alertify.alert("Answer is incorrect");
//								alertify.alert("Correct Answer is: " + FC_ZeroError.toFixed(3));
							}else if(FC0Err_cnt == 4){
								
								alertify.alert("Answer is incorrect");
								alertify.alert("Correct Answer is: " + FC_ZeroError.toFixed(2));
							}else{
								
								alertify.alert("Answer is incorrect");
								FC0Err_cnt++;
							}
							
						}
						
					}	
									        
			     
		
	});

	$('#submit_FCspanerror_Calibration').on('click', function() {
		$("#submit_FCspanerror_Calibration").removeAttr("data-toggle");
		$("#submit_FCspanerror_Calibration").removeAttr("data-target");
		$('#span4reverse').css("display","none");
		
        var fcSpanTemp = FCarr_actualValSorted[FColdreadingSorted.indexOf(higherSpLevel)];
        var FC_SpanError = fcSpanTemp - 4;
        
      
						//console.log("formula value with 0 error"
						//	+ fcSpanTemp +"ERROR" +FC_SpanError.toFixed(2));
							        
			if(($("#spanerror").val() == '') ||  isNaN($("#spanerror").val())){
				
				alertify.alert("Please Enter The Answer In Numeric Only");
				
			}else{
				
				
				if (FC_SpanError.toFixed(2) == $("#spanerror").val()){
					
					FCCalibrationData.fcSpanErr = $("#spanerror").val();
					FCCalibrationData.fcSpanErrCnt = FCSpanErr_cnt;
					//console.log(FCCalibrationData);
					
					
					FCSpanErr_cnt = 0; 
					$("#spanerror").prop("disabled", true);
					$("#FCLinearity_Calibration").prop("hidden", false);
					$("#submit_FCspanerror_Calibration").css("display","none");
					$("#spanerrorOK").css("display","block");
					
				}else{
					if(FCSpanErr_cnt == 2){
						$("#submit_FCspanerror_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
						$('#span4reverse').css("display","block");
						FCSpanErr_cnt++;
//						alertify.alert("Answer is incorrect");
//						alertify.alert("Correct Answer is: " + FC_ZeroError.toFixed(3));
					}else if(FCSpanErr_cnt == 4){
						
						alertify.alert("Answer is incorrect");
						alertify.alert("Correct Answer is: " + FC_SpanError.toFixed(2));
					}else{
						
						alertify.alert("Answer is incorrect");
						FCSpanErr_cnt++;
					}
					
				}
				
			}	
				
	        
	 
	});

	$('#submit_FCLinearity_Calibration').on('click', function() {
		$("#submit_FCLinearity_Calibration").removeAttr("data-toggle");
		$("#submit_FCLinearity_Calibration").removeAttr("data-target");
		$('#Linearity4reverse').css("display","none");
		// Calulate SX
		  var sumofX = FCarr_stdValSorted.reduce(function(a, b){
		        return a + b;
		    }, 0).toFixed(3);
		    
		  
		    //console.log("Calulate SX");
		  
		    //console.log("Sum of Input " +sumofX);
		    
		    var Sqr_sumofX = Math.pow(sumofX, 2);
		    
		    //console.log("Square of Sum of Input " +Sqr_sumofX);
		    
		    var sum_sq_X =  sum_sq(FCarr_stdValSorted).toFixed(3);
		    
		    //console.log("sum of Square of input " +sum_sq_X);
		    
		    var FC_Sx = Math.sqrt(sum_sq_X - (Sqr_sumofX/FCarr_stdValSorted.length));
		    
		    //console.log("SX " +FC_Sx.toFixed(2));
		    
		
		    
		 // Calulate SY
			  var sumofY = FCarr_actualValSorted.reduce(function(a, b){
			        return a + b;
			    }, 0).toFixed(3);
			    
			    //console.log("Calulate SY");
			    //console.log("Sum of Input " +sumofY);
			    
			    var Sqr_sumofY = Math.pow(sumofY, 2);
			    
			    //console.log("Square of Sum of Input " +Sqr_sumofY);
			    
			    var sum_sq_Y =  sum_sq(FCarr_actualValSorted).toFixed(3);
			    
			    //console.log("sum of Square of input " +sum_sq_Y);
			    
			    var FC_Sy =  Math.sqrt( sum_sq_Y -  (Sqr_sumofY/FCarr_actualValSorted.length));
			    
			    //console.log("SY " +FC_Sy.toFixed(2));
		    
		    
		// Cafculate Sxy
			    
			    var sum_xy = 0;
			    for (var i=0; i < FCarr_stdValSorted.length; i++) {
			    	sum_xy += (FCarr_stdValSorted[i] * FCarr_actualValSorted[i]);
			    }
			    //console.log("Calulate SXY"); 
			    //console.log("Sum of MultiPlication of X and Y  " +sum_xy.toFixed(2));
			    
	            var multi_x_y = sumofX * sumofY;
			    
	            //console.log("MultiPlication of sum of X and Y  " +multi_x_y.toFixed(2));
	         
	            var Sxy =  sum_xy - (multi_x_y/FCarr_stdValSorted.length) ;
	         
	            //console.log("SXY  " +Sxy.toFixed(2));
	         
	         
	    // Cafculate Linearity     
	         
	         
	         //console.log("Cafculate Linearity"); 
	         
	         //console.log("Sqrt Multiplication " + ( FC_Sx.toFixed(2) * FC_Sy.toFixed(2)).toFixed(2)); 
	         
	         var FC_linearity =  Sxy.toFixed(3)/( FC_Sx.toFixed(3) * FC_Sy.toFixed(3));
	        
	         //console.log(" FC_linearity " +FC_linearity.toFixed(3));
	        
	         
		if(($("#linearity").val() == '') ||  isNaN($("#linearity").val())){
				
				alertify.alert("Please Enter The Answer In Numeric Only");
				
			}else{
				
				
				if (FC_linearity.toFixed(3) == $("#linearity").val()){
					
					FCCalibrationData.fcLinearityErr = $("#linearity").val();
					FCCalibrationData.fcLinearityErrCnt = FC_LinearityErr_cnt;
					//console.log(FCCalibrationData);
					
					FC_LinearityErr_cnt = 0; 
					$("#linearity").prop("disabled", true);
					$("#FCAccuracy_Calibration").prop("hidden", false);
					$("#submit_FCLinearity_Calibration").css("display","none");
					$("#FCLinearityOK").css("display","block");
					
					
				}else{
					if(FC_LinearityErr_cnt == 2){
						$("#submit_FCLinearity_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
						$('#Linearity4reverse').css("display","block");
						FC_LinearityErr_cnt++;
//						alertify.alert("Answer is incorrect");
//						alertify.alert("Correct Answer is: " + FC_ZeroError.toFixed(3));
					}else if(FC_LinearityErr_cnt == 4){
						
						alertify.alert("Answer is incorrect");
						alertify.alert("Correct Answer is: " + FC_linearity.toFixed(3));
					}else{
						
						alertify.alert("Answer is incorrect");
						FC_LinearityErr_cnt++;
					}
					
				}
				
			}
	         
	         
	         
	         
		
		
	});

	$('#submit_FCAccuracy_Calibration').on('click', function() {
		$("#submit_FCAccuracy_Calibration").removeAttr("data-toggle");
		$("#submit_FCAccuracy_Calibration").removeAttr("data-target");
		$('#Accuracy4reverse').css("display","none");
		
		    var sum_PerAccuracy = 0;
		    for (var i=0; i < FCarr_stdValSorted.length; i++) {
		    	sum_PerAccuracy += ((FCarr_stdValSorted[i] - FCarr_actualValSorted[i])/FCarr_stdValSorted.length)*100;
		    }
		
		   var Avg_Accuracy = Math.abs(sum_PerAccuracy)/FCarr_stdValSorted.length;
		   
		   //console.log("AVG % Accuracy  " +Avg_Accuracy.toFixed(2));
		   
		   if(($("#Accuracy").val() == '') ||  isNaN($("#Accuracy").val())){
				
				alertify.alert("Please Enter The Answer In Numeric Only");
				
			}else{
				
				
				if (Avg_Accuracy.toFixed(2) == $("#Accuracy").val()){
					
					
					FCCalibrationData.fcAccuracyErr = $("#Accuracy").val();
					FCCalibrationData.fcAccuracyErrCnt = FC_AccuracyErr_cnt;
					
					//console.log(FCCalibrationData);
					
//					ExpTrackData.fcCalibrationData = FCCalibrationData;
					
//					//console.log(ExpTrackData);
					
					FC_AccuracyErr_cnt = 0; 
					$("#Accuracy").prop("disabled", true);
					$("#FCCalibQuesDiv").prop("hidden", false);
					$("#submit_FCAccuracy_Calibration").css("display","none");
					$("#LFCAccuracyOK").css("display","block");
					
					
				}else{
					if(FC_AccuracyErr_cnt == 2){
						$("#submit_FCAccuracy_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
						$('#Accuracy4reverse').css("display","block");
						FC_AccuracyErr_cnt++;
//						alertify.alert("Answer is incorrect");
//						alertify.alert("Correct Answer is: " + FC_ZeroError.toFixed(3));
					}else if(FC_AccuracyErr_cnt == 4){
						
						alertify.alert("Answer is incorrect");
						alertify.alert("Correct Answer is: " + Avg_Accuracy.toFixed(2));
					}else{
						
						alertify.alert("Answer is incorrect");
						FC_AccuracyErr_cnt++;
					}
					
				}
				
			}

	});
	
	$('#FC_calibrateNeeded').on('click', function() {
		var range = $("#zeroerror").val();
		 spanRange = $("#spanerror").val();
		$("#FC_calibrateNeeded").prop("disabled", true);
		
		// var range = $("#zeroerror").val();
		 var flag = 0;
		FCZero_CalibartionRev(range, flag);
	
	//	 FC_CheckLinearitySectionRev();
		

	});
	
	
	var FCZero_CalibartionRev = function(range, flag){
		

		

		var FC_calibrateNeeded = '';
		FC_calibrateNeeded += '<div class="col-md-12" >'
			+'<div id="ZeroErrorKnockData">'
			+'<h1>Adjust Zero</h1>'
			+'<div id="plus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"><input type="Text" id="ZeroangleVal" ></div><div id="minus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat1" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="ZeroErrorKnockSuccess"></div>'
			$('#ZeroErrorKnotch').html('');
			$('#ZeroErrorKnotch').html(FC_calibrateNeeded);
			
			
			range = Math.abs(range);
			
			
			var angle = 0;
			var temp  = 0;
//			 var range = $("#zeroerror").val();
			 var ZeroValue_old = FCarr_actualValSorted[0] ;
			 var ZeroValue = FCarr_actualValSorted[0] ;
			 //console.log(ZeroValue);
			 var steps = range/10;
			 var stepFix = steps.toFixed(3);
//			 console.log(steps);
//			 console.log(stepFix);
/// Zero MINUS CLICK  
			 
			 $("#ZeroangleVal").val(FCarr_actualValSorted[0]);
			 $('#minus').bind("click",function (event) {
				 zeroErrCnt++;

					 
				 if(angle >= -(range)){
					 angle -=stepFix;
				 
					 var n = angle.toFixed(2);
//					 console.log(n);
					 $('#plus').show();
				     
						ZeroValue = parseFloat((ZeroValue - parseFloat(stepFix)).toFixed(2));
						//console.log(ZeroValue);
						var ZeroValueFix = ZeroValue.toFixed(0);
						
					    FCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
					    //console.log(FCarr_actualValSorted);
					 
					
				    
				     var $elem = $('.icon-repeat1');

				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ (now * 20) +'deg)'
				             });
				         }
				     });
				     
				     $("#ZeroangleVal").val(FCarr_actualValSorted[0]);
				    
				     if((-range) == n)
						{
					
				    	
							$('#minus').hide();
				    	 $('#ZeroErrorKnockSuccess').html('');
						$('#ZeroErrorKnockSuccess').html('<div class="alert alert-danger">Zero not Adjusted!!!</div>');
						}
				     
				     drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
				 }
				
				 });
			 
		//zero  PLuS CLICK	 

				 $('#plus').bind("click",function (event) {
					 zeroErrCnt++;
					 $('#ZeroErrorKnockSuccess').html('');
					 $('#minus').show();
					 
					 
					 if(angle <= range){
						 angle +=parseFloat(stepFix);
						 var n = angle.toFixed(2);
//						 console.log(n);
					      
						 
						ZeroValue = parseFloat((ZeroValue + parseFloat(stepFix)).toFixed(2));
						//console.log(ZeroValue);
						
					     if(range == n)
							{
							
							FCarr_actualValSorted.splice(0, 1, parseFloat(20));
							///$('#minus').hide();
							//$('#plus').hide();
							  $("#ZeroangleVal").val(FCarr_actualValSorted[0]);
							 
							drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
							
							//console.log(FCarr_actualValSorted);
							if(flag == 0){
								
//								alertify.alert("Zero Adjusted Successfully!!!");
								//$('#ZeroErrorKnockData').hide();
								$("#ZeroErrorKnockData").addClass("disabledDiv");
								$('#ZeroErrorKnockSuccess').html('');
								$('#ZeroErrorKnockSuccess').html('<div class="alert alert-success">Zero Adjusted Successfully!!!</div>');
								
								FCSpan_ClaibrationNeededRev();
							}else{
								
								$('#ZeroErrorKnotch').html('');
								$('#ZeroErrorKnotch').html('<div class="alert alert-success">Zero Adjusted Successfully!!!</div>');
								
								$('#SpanErrorKnotch').show('');
								$('#SpanErrorKnotch').html('');							
								$('#SpanErrorKnotch').html('<div class="alert alert-success">Span Adjusted Successfully!!!</div>');
								
								//	CHECK LINEARITY from here
								 FC_CheckLinearitySectionRev();
							}
							
							
							}else
						        {	
						
									 FCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
									 //console.log(FCarr_actualValSorted);
									  $("#ZeroangleVal").val(FCarr_actualValSorted[0]);
									 
									 drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
					           }
					   

						 
						 
					    // //console.log(angle);
					    
					     var $elem = $('.icon-repeat1');

					     
					     $({deg: n}).animate({deg: n}, {
					      
					      
					         step: function(now) {
					         
					             $elem.css({
					                 'transform': 'rotate('+ (now * 20)  +'deg)'
					             });
					         }
					     });
					    
	
					 }
					 
					 });
	
	}
	
	
	
	var FCSpan_ClaibrationNeededRev = function() {
		var FC_calibrateNeeded = '';
		FC_calibrateNeeded += '<div class="col-md-12" >'
			+'<div id="SpanErrorKnockData">'
			+'<h1>Adjust Span </h1>'
			+'<div id="Spanplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"><input type="Text" id="SpanangleVal"></div><div id="Spanminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			+'</div>'
			//+'</div>'
			+'<div id="SpanErrorKnockSuccess"></div>'
			$('#SpanErrorKnotch').html('');
			$('#SpanErrorKnotch').html(FC_calibrateNeeded);
			
			 range = Math.abs(range);
			var angle = 0;
			var temp  = 0;
			 var range =parseFloat(spanRange);
			var ArrayLeng = FCarr_actualValSorted.length ;
			 var SpanValue = FCarr_actualValSorted[ArrayLeng - 1 ] ;
			 var ZeroValue = FCarr_actualValSorted[0] ;
			 //console.log(SpanValue);
			 var steps = range/10;
			 var stepFix = steps.toFixed(3);
			 //console.log(steps);
/// Span MINUS CLICK  
			 $("#SpanangleVal").val(FCarr_actualValSorted[ArrayLeng - 1 ]);
			 
			 $('#Spanminus').click(function (event) {
				 spanErrCnt++;
//				 console.log("minus span");
				 $('#SpanErrorKnockSuccess').html('');	 
				 //console.log("plus span");
				 if(angle >= -(range)){
					 angle -=parseFloat(stepFix);
				 var n = angle.toFixed(2);
//				console.log(n);
				 
				// $('#minus').show();
				 $('#Spanplus').show();
				 
				 
				 SpanValue = parseFloat((SpanValue - parseFloat(stepFix)).toFixed(2));	
				 
				 ZeroValue = parseFloat((ZeroValue - parseFloat(stepFix)).toFixed(2));
				 
					//console.log(SpanValue);
					var SpanValueFix = SpanValue.toFixed(0);
					if((-range) == n)
					{ 
						FCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(4));
						FCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
						$('#Spanminus').hide();

						 $("#SpanangleVal").val(FCarr_actualValSorted[ArrayLeng - 1 ]);
						 
						drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
						//alertify.alert("Span Error Adjusted Successfully!!!");
						//$('#SpanErrorKnockData').hide();
						//$('#ZeroErrorKnockData').show();
						$('#SpanErrorKnockData').addClass("disabledDiv");
						$('#ZeroErrorKnockData').removeClass("disabledDiv");
						$('#ZeroErrorKnockSuccess').html('');
						//$('#ZeroErrorKnockData').hide();
						$('#SpanErrorKnockSuccess').html('');
						$('#SpanErrorKnockSuccess').html('<div class="alert alert-success">Span Adjusted Successfully!!!</div><div class="alert alert-danger">But Zero affected. <br/>Adjust Zero Again</div>');
						FCZero_CalibartionRev(range, 1);
						
						
						
					
						
						}
					else
						{
				    FCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
				    FCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
				    $("#SpanangleVal").val(FCarr_actualValSorted[ArrayLeng - 1 ]);
				   
				    drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
						}
					
					
					
				  //  //console.log(FCarr_actualValSorted);
				 
				
			    
			     var $elem = $('.icon-repeat');
			     //console.log(n * 20);
			     $({deg: n}).animate({deg: n}, {
			      
			      
			         step: function(now) {
			         
			             $elem.css({
			                 'transform': 'rotate('+ ((-now) * 20) +'deg)'
			             });
			         }
			     });
			
			 }
				 
			 });
			 
		// Sapn PLUS CLICK	 

				 $('#Spanplus').click(function (event) {
					 spanErrCnt++;
//					 console.log("plus span");
					 if(angle <= range){
						 angle +=parseFloat(stepFix);
					 var n = angle.toFixed(2);
					 
//					 console.log(n);
					 
					// $('#minus').show();
				     
					 $('#Spanminus').show();
					 
					 SpanValue = parseFloat((SpanValue + parseFloat(stepFix)).toFixed(2));
					 
					 ZeroValue = parseFloat((ZeroValue + parseFloat(stepFix)).toFixed(2));
					 
					//	//console.log(SpanValue);
						var SpanValueFix = SpanValue.toFixed(0);
						if(range == n)
						{
						
							FCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
							FCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
							 $('#Spanplus').hide();
							 $('#SpanErrorKnockSuccess').html('');
								$('#SpanErrorKnockSuccess').html('<div class="alert alert-danger">Span not Adjusted!!!</div>');
								
							
						}else{
							
							FCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
							FCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
						}
						
					    
					    
					    
					    
					  //  //console.log(FCarr_actualValSorted);
					 
					
				    
				     var $elem = $('.icon-repeat');
				     //console.log(n * 20);
				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ ((-now) * 20) +'deg)'
				             });
				         }
				     });
				     $("#SpanangleVal").val(FCarr_actualValSorted[ArrayLeng - 1 ]);
				     
				     drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
				 }
					 
				 });
					 
	


		
	}
			
	
	var FC_calibrate_Top_Linearity_NeededRev = function ()
	{
		
		var FC_calibrate_Top_Linearity_Needed = '';
		FC_calibrate_Top_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionOneKnockData">'
			+'<h1>Linearity Algorithm 1</h1>'
			+'<div id="LinearityTopplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityTopminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityTopKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityTopKnotch').html(FC_calibrate_Top_Linearity_Needed);
			
			
			var angle = 0;
			var temp  = 0;
			
			 var LinearityValue = 0 ;
			 var defError = (FC_DefaultErr/12).toFixed(2);
			 var steps = defError/10;
			 var stepFix = parseFloat(steps.toFixed(3));
			 //console.log("steps "+stepFix);
			 
/// LINEARITY TOP MINUS CLICK  
			 
		
			 
			 
			 $('#LinearityTopminus').bind("click",function (event) {
				 linearityAlgo1Cnt++;

                 //console.log(defError);
				 if(angle >= -(defError)){
					 angle -=parseFloat(stepFix);
					 var n = angle.toFixed(2);
					 //console.log("angle "+n);
				      
					 $('#LinearityTopplus').show();

					 
					
					for( var i= 1; i<=(FCarr_actualValSorted.length-2); i++ )
						{
						
						var oldval =  FCarr_actualValSorted[i];
						var LinearityNewVal = (oldval - stepFix).toFixed(2);	
						//console.log("oldvalue "+oldval+"  new Value "+LinearityNewVal);
						
						 FCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
						 
						 
						}
								
					 if((-defError) == n)
						{
						 $('#LinearityTopminus').hide();
						// $('#LinearityKnockSuccess').html('');
						 $('#LinearityTopKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 1 not Adjusted </div>');
						 }
					
					
					
					 //console.log(FCarr_actualValSorted);
					 drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
			
				    
				     var $elem = $('.icon-repeat');

				     
				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ ((-now) * 20)  +'deg)'
				             });
				         }
				     });
				    
				      
				     
				      

							
						
					
				 }
				 
		 });
			 
		// LINEARITY TOP PLUS CLICK	 

				 $('#LinearityTopplus').bind("click",function (event) {
					 linearityAlgo1Cnt++;
					 $('#LinearityTopKnockSuccess').html('');
					
	                 //console.log(defError);
					 if(angle <= defError){
						 angle +=parseFloat(stepFix);
						 var n = angle.toFixed(2);
						 //console.log("angle "+n);
					      
						 $('#LinearityTopminus').show();

						 
						
						for( var i= 1; i<=(FCarr_actualValSorted.length-2); i++ )
							{
							
							var oldval =  FCarr_actualValSorted[i];
							var LinearityNewVal = (oldval + stepFix).toFixed(2);	
							//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
							
							 FCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
							
							 
							}
									
						 if(defError == n)
							{
							 $('#LinearityTopplus').hide();
							 $('#LinearitySectionOneKnockData').hide();
								// $('#LinearityKnockSuccess').html('');
							$('#LinearityTopKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 1 Adjusted Successfully!!!</div>');
								
						
							if(positiveVal.length != 0){
								
								$("#ZeroErrorKnotch").hide();
								$("#SpanErrorKnotch").hide();
								
								
								FC_calibrate_Bottom_Linearity_NeededRev();
								$("#LinearityBottomKnotch").prop("hidden", false);
							}else{
								
								FC_calibrate_Both_Linearity_NeededRev();
								$("#LinearityBothKnotch").prop("hidden", false);
							}
							
							 }
						
						
						
						 //console.log(FCarr_actualValSorted);
							 drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
					
					    
					     var $elem = $('.icon-repeat');

					     
					     $({deg: n}).animate({deg: n}, {
					      
					      
					         step: function(now) {
					         
					             $elem.css({
					                 'transform': 'rotate('+ ((-now) * 20)  +'deg)'
					             });
					         }
					     });
					    
					      
					     
					      

								
							
						
					 }
					 });
	
	}
	
	var FC_calibrate_Bottom_Linearity_NeededRev = function ()
	{
//		$("#ZeroErrorKnotch").hide();
//		$("#SpanErrorKnotch").hide();
		
		var FC_calibrate_Bottom_Linearity_Needed = '';
		FC_calibrate_Bottom_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionTwoKnockData">'
			+'<h1>Linearity Algorithm 2</h1>'
			+'<div id="LinearityBottomplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityBottomminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityBottomKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityBottomKnotch').html(FC_calibrate_Bottom_Linearity_Needed);
			
			//console.log("Section 2");
			var angle = 0;
			var temp  = 0;
			// var range = $("#linearity").val();
			 var LinearityValue = 0 ;
			 var defError = (FC_DefaultErr/12).toFixed(2);
			 var steps = defError/10;
			 var stepFix = parseFloat(steps.toFixed(3));
			 //console.log("steps "+stepFix);
			
			
			 // check Diffrence and indx of positive and negative difference
			 // clear all array and make updated with new values according to updated actual values
			 
		//	 checkVals.splice(0, checkVals.length);
			 negativeValueIndex.splice(0, negativeValueIndex.length);
			 positiveValueIndex.splice(0, positiveValueIndex.length);
			 
			 
				for( var i= 1; i<=(FCarr_actualValSorted.length-2); i++ )
				{
					
					var diff = (FCarr_actualValSorted[i] - FCarr_stdValSorted[i]).toFixed(2);
					
		//			checkVals.push(diff);
					
					if(diff < 0){
						
						negativeValueIndex.push(i);
						
					}else{
						
						positiveValueIndex.push(i);
						
					}
					
		//			checkDiffVals.push(Math.abs(diff));
				}
				
			//	 //console.log("diffrence array "+ checkDiffVals);
				 positiveVal = checkVals.filter((elem) => elem > 0);
			     negativeVal = checkVals.filter((elem) => elem < 0);
			 
				//console.log("in section 2 POSITIVE "+positiveVal.length+" negative val"+negativeVal.length);
			 
//				console.log("Positive value Index "+positiveValueIndex);
//				 console.log("negative value Index "+negativeValueIndex);
			 
			 
			 
			
			/// LINEARITY BOTTOM MINUS CLICK  
			 
			
					 
					 $('#LinearityBottomminus').bind("click",function (event) {
						 linearityAlgo2Cnt++;
						 $('#LinearityBottomKnockSuccess').html('');

		                 //console.log(defError);
						 if(angle <= defError){
							 angle +=parseFloat(stepFix);
							 var n = angle.toFixed(2);
							 //console.log("angle "+n);
						      
							 $('#LinearityBottomplus').show();
							 
							
							 
							 
							
							 //console.log("negative value Index "+negativeValueIndex);
							
							 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
								{
								 
								var oldval =  FCarr_actualValSorted[negativeValueIndex[i]];
								
								var LinearityNewVal = (oldval - stepFix).toFixed(2);	
								//console.log("Plus old negative value "+oldval +"  new Value "+LinearityNewVal);
								
								 FCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
								 
								 
								}
							 
							 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
								{
								 
								var oldval =  FCarr_actualValSorted[positiveValueIndex[i]];
							    //var idx = positiveValueIndex[i] - 1;
								var LinearityNewVal = (oldval - stepFix).toFixed(2);	
								//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
								//		"   new Value "+LinearityNewVal);
								
								 FCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
								
								 
								}
										
							 if(defError == n)
								{
								 $('#LinearityBottomminus').hide();
								 $('#LinearitySectionTwoKnockData').hide();
								// $("#LinearityTopKnotch").prop("hidden", false);
								// $("#LinearityBottomKnotch").prop("hidden", false);
									$('#LinearityBottomKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 2  Adjusted successfully!!! </div>');

									$("#LinearityBothKnotch").prop("hidden", false);
									FC_calibrate_Both_Linearity_NeededRev();
								 }
							
							
							
							 //console.log(FCarr_actualValSorted);
								 drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
						
						    
						     var $elem = $('.icon-repeat');

						     
						     $({deg: n}).animate({deg: n}, {
						      
						      
						         step: function(now) {
						         
						             $elem.css({
						                 'transform': 'rotate('+ ((now) * 20)  +'deg)'
						             });
						         }
						     });
						    
						      
						     
						      

									
								
							
						 }
						 
				 });
			 
			 
			 
			 
			 
				// LINEARITY BOTTOM PLUS CLICK	 

						 $('#LinearityBottomplus').bind("click",function (event) {
							 linearityAlgo2Cnt++;
							 
								
			                 //console.log(defError);
							 if(angle >= -(defError)){
								 angle -=parseFloat(stepFix);
								 var n = angle.toFixed(2);
								 //console.log("angle "+n);
							      
								 $('#LinearityBottomminus').show();

								
								 //console.log("negative value Index "+negativeValueIndex);
									
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  FCarr_actualValSorted[negativeValueIndex[i]];
									
									var LinearityNewVal = (oldval + stepFix).toFixed(2);	
									//console.log("IN Minus old negative value "+oldval+"  new Value "+LinearityNewVal);
									
									 FCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 
									 
									}
										
								 
								 
								 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
									{
									 
									var oldval =  FCarr_actualValSorted[positiveValueIndex[i]];
								    //var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval + stepFix).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 FCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
								 
											
								 if(-(defError) == n)
									{
									 $('#LinearityBottomplus').hide();
									$('#LinearitySectionOneKnockData').hide();
									// $('#LinearityKnockSuccess').html('');
									$('#LinearityBottomKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 2 not Adjusted!!!</div>');
									
								
									
									 }
								
								
								
								 //console.log(FCarr_actualValSorted);
									 drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
							           
							   

								 
								 
							 
							    
							     var $elem = $('.icon-repeat');

							     
							     $({deg: n}).animate({deg: n}, {
							      
							      
							         step: function(now) {
							         
							             $elem.css({
							                 'transform': 'rotate('+ ((now) * 20)  +'deg)'
							             });
							         }
							     });
							    
							      
							     
							      

										
									
								
							 }
							 });
			
			
			
			
	}
	
	
	var FC_calibrate_Both_Linearity_NeededRev = function(){
		$("#ZeroErrorKnotch").hide();
		$("#SpanErrorKnotch").hide();
		//console.log("IN SECTION 3");
		var FC_calibrate_Both_Linearity_Needed = '';
		FC_calibrate_Both_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionBothKnockData">'
			+'<h1>Linearity Algorithm 3</h1>'
			+'<div id="LinearityBothplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityBothminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityhBothKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityBothKnotch').html(FC_calibrate_Both_Linearity_Needed);
			
			//console.log("Section 3");
			var angle = 0;
			var temp  = 0;
//			var minDiff = Math.max.apply(null, checkDiffVals);
//			//console.log("Min Diffrence "+ minDiff);
			
			var defError = (FC_DefaultErr/12).toFixed(2);
			var defError1 = (FC_DefaultErr/10).toFixed(2);
			// var defError = (minDiff/12).toFixed(2);
			var steps = defError/10;
			var stepFix = parseFloat(steps.toFixed(3));
			//console.log("steps "+stepFix);
			
			var steps1 = defError1/10;
			var stepFix1 = parseFloat(steps1.toFixed(3));
			
			//console.log("Old diffrence array with negative sign "+ checkVals);
			 //console.log("Old diffrence array "+ checkDiffVals);
			 
			
			 // check Diffrence and indx of positive and negative difference
			 // clear all array and make updated with new values according to updated actual values
			 
			 checkVals.splice(0, checkVals.length);
			 checkDiffVals.splice(0, checkDiffVals.length);
			 negativeValueIndex.splice(0, negativeValueIndex.length);
			 positiveValueIndex.splice(0, positiveValueIndex.length);
			 
			 
				for( var i= 1; i<=(FCarr_actualValSorted.length-2); i++ )
				{
					
					var diff = (FCarr_actualValSorted[i] - FCarr_stdValSorted[i]).toFixed(2);
					
					checkVals.push(diff);
					
					if(diff < 0){
						
						negativeValueIndex.push(i);
						
					}else{
						
						positiveValueIndex.push(i);
						
					}
					
					checkDiffVals.push(Math.abs(diff));
				}
				
		
				 positiveVal = checkVals.filter((elem) => elem > 0);
			     negativeVal = checkVals.filter((elem) => elem < 0);
			 
				//console.log("in section 3 POSITIVE "+positiveVal.length+" negative val"+negativeVal.length);
			
			
			
			
			 //console.log("New diffrence array with negative sign "+ checkVals);
			 //console.log("New diffrence array "+ checkDiffVals);
			 //console.log("Positive value Index "+positiveValueIndex);
			 //console.log("negative value Index "+negativeValueIndex);
			 
			 var stepedby10arr = [];
			 
			 for( var i= 0; i<=(checkDiffVals.length-1); i++ )
				{
				 		var temp = (checkDiffVals[i]/10).toFixed(3);
				 		stepedby10arr.push(temp);
				 		
				}
			 //console.log("Steped by 10 array "+stepedby10arr);
			 
			// LINEARITY BOTH PLUS CLICK	 

					 $('#LinearityBothplus').bind("click",function (event) {
						 linearityAlgo3Cnt++;
						 $('#LinearityhBothKnockSuccess').html('');
						 $('#LinearityBothminus').show();

		                 //console.log(defError);
						 if(angle <= defError){
							 angle +=parseFloat(stepFix);
							 var n = angle.toFixed(2);
							 //console.log("angle "+n);
						      
							 
							 
							 
							
							 
							 if(positiveValueIndex.length != 0){
								 
								 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
									{
									 
									var oldval =  FCarr_actualValSorted[positiveValueIndex[i]];
								    var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval - stepedby10arr[idx]).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 FCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
								 
							 }
							 
							
							 
							 
							if(negativeValueIndex.length != 0){
								
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  FCarr_actualValSorted[negativeValueIndex[i]];
									var idx = negativeValueIndex[i] - 1;
									var LinearityNewVal = (oldval + parseFloat(stepedby10arr[idx])).toFixed(2);
									//console.log("In Plus old negative value "+oldval+"  VALUE TOBE Plus "+stepedby10arr[idx]+
									//		"  new Value "+LinearityNewVal);
									
									 FCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 //console.log(FCarr_actualValSorted);
									 
									}
										
							}
								
							 if((defError) == n)
								{
								 $('#LinearityBothplus').hide();
								 $('#LinearitySectionBothKnockData').hide();
							
									$('#LinearityhBothKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 3  Adjusted successfully!!! </div>');
									
									$('#FC_calibrateNeeded').hide();
									$('#LinearityKnotch').html('');
									$('#LinearityKnotch').html('<div class="alert alert-success blink" style="font-size:16px; font-weight:bold;">Zero , Span & Linearity Adjusted successfully!!! </div>');
										
									FC_updatedDataTableRev(FColdreadingSorted,FCarr_actualValSorted);
									 function blink(selector){
										$(selector).fadeOut('slow', function(){
										    $(this).fadeIn('slow', function(){
										        blink(this);
										    });
										});
										}
										    
										blink('.blink');
								 }
							
							
							
							 //console.log(FCarr_actualValSorted);
								 drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
						
						    
						     var $elem = $('.icon-repeat');

						     
						     $({deg: n}).animate({deg: n}, {
						      
						      
						         step: function(now) {
						         
						             $elem.css({
						                 'transform': 'rotate('+ ((now) * 20)  +'deg)'
						             });
						         }
						     });
						    
						      
						     
						      

									
								
							
						 }
						 
				 });
		
		
					 
					 
					 
					// LINEARITY BOTH Minus CLICK	 

					 $('#LinearityBothminus').bind("click",function (event) {
						 linearityAlgo3Cnt++;
						 $('#LinearityBothplus').show();
		                 //console.log(defError);
						 if(angle >= -(defError)){
							 angle -=parseFloat(stepFix);
							 var n = angle.toFixed(2);
							 //console.log("angle "+n);
						  
							 
							 
							
							 
							 if(positiveValueIndex.length != 0){
								 
								 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
									{
									 
									var oldval =  FCarr_actualValSorted[positiveValueIndex[i]];
								    var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval + parseFloat(stepedby10arr[idx])).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 FCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
								 
							 }
							 
							
							 
							 
							if(negativeValueIndex.length != 0){
								
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  FCarr_actualValSorted[negativeValueIndex[i]];
									var idx = negativeValueIndex[i] - 1;
									var LinearityNewVal = (oldval - parseFloat(stepedby10arr[idx])).toFixed(2);
									//console.log("In Plus old negative value "+oldval+"  VALUE TOBE Plus "+stepedby10arr[idx]+
									//		"  new Value "+LinearityNewVal);
									
									 FCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 //console.log(FCarr_actualValSorted);
									 
									}
										
							}
								
							 if((-defError) == n)
								{
								 $('#LinearityBothminus').hide();
								 $('#LinearityhBothKnockSuccess').html('');
									$('#LinearityhBothKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 3  not Adjusted!!! </div>');
									
									
									
								 }
							
							
							
							 //console.log(FCarr_actualValSorted);
								 drawGraphRev(FColdreadingSorted, FCarr_actualValSorted);	
						
						    
						     var $elem = $('.icon-repeat');

						     
						     $({deg: n}).animate({deg: n}, {
						      
						      
						         step: function(now) {
						         
						             $elem.css({
						                 'transform': 'rotate('+ ((-now) * 20)  +'deg)'
						             });
						         }
						     });
						    
						      
						     
						      

									
								
							
						 }
						 
				 });
			
			
	}
	
	
	
	var FC_CheckLinearitySectionRev = function()
	{
    
		
		
		$("#LinearityKnotch").prop("disabled", false);
		 
			for( var i= 1; i<=(FCarr_actualValSorted.length-2); i++ )
			{
				
				var diff = (FCarr_actualValSorted[i] - FCarr_stdValSorted[i]).toFixed(2);
				
				checkVals.push(diff);
				
				if(diff < 0){
					
					negativeValueIndex.push(i);
					
				}else{
					
					positiveValueIndex.push(i);
					
				}
				
				checkDiffVals.push(Math.abs(diff));
			}
			
			 //console.log("diffrence array "+ checkDiffVals);
			 positiveVal = checkVals.filter((elem) => elem > 0);
		     negativeVal = checkVals.filter((elem) => elem < 0);
		 
			//console.log("POSITIVE "+positiveVal.length+" negative val"+negativeVal.length);
		 
			if(negativeVal.length != 0 || (positiveVal.length != 0 && negativeVal.length != 0)){
				$("#LinearityTopKnotch").prop("hidden", false);
				FC_calibrate_Top_Linearity_NeededRev();
				
			}else{
				$("#LinearityBottomKnotch").prop("hidden", false);

					$("#ZeroErrorKnotch").show();
					$("#SpanErrorKnotch").show();

				FC_calibrate_Bottom_Linearity_NeededRev();
			}
			
		
	}
	
	
	var FC_updatedDataTableRev = function(FColdreadingSorted,FCarr_actualValSorted)
	{
		
		
		var FC_IOtable = '';
		
		FC_IOtable += '<div class="row"><div id = "IOtable" class="col-md-12">'
				+ '<table id="FC_DataTable_IO" class="table table-striped table-bordered" style="width:100%">'
				+ '<thead>'
				+ '<tr>'
				+ '<th>Reading No.</th>'
				+ '<th>	Input (in kg/cm²)</th>'
				+ '<th>Output (in mA)</th>'
				+ '</tr>'
				+ '</thead>'

				+ '<tbody >'
				for (var i = 0; i < FCarr_actualValSorted.length ; i++ ) {
					FC_IOtable += '<tr><td>'
				+ (i+1)
				+ '</td><td>'
				+ FColdreadingSorted[i]
				+ '</td><td>'
				+ FCarr_actualValSorted[i]
				+ '</td></tr>'
		}
		FC_IOtable += '</tbody>'

				+ '</table>'
               + '<div class="col-md-12" ><p>After few months P/E converter is not working properly.  As a maintenance engineer, Please attend the fault &nbsp;&nbsp; </p>'
				
               + '<button id="FC_FaultChecking">Next level</button>'
				+'</div>'
				FC_IOtable += '</div>'
				
		//readingcnt++;
//				$('#table_IO').DataTable({
//					 "pageLength" : 5,
//				        dom: 'Bfrtip',
//				       // "bDestroy": true,
//					title : 'Data export',
//					buttons : [ {
//						extend : 'excelHtml5',
//						title : 'FC Characterisation value'
//
//					}, {
//						extend : 'pdfHtml5',
//						title : 'FC Characterisation value'
//					} ]
//				});	

		$('#LinearityKnotch').append(FC_IOtable);
		$('#LinearityKnotch').ready(function() {
			$('#FC_DataTable_IO').DataTable({
				"pageLength" : 5,
				dom: 'Bfrtip',
				//"order" : [ [ 10, "desc" ] ],
				title : 'FC_calibration',
				buttons : [ {
					extend : 'excelHtml5',
					title : 'FY 100 Characterisation value'

				}, {
					extend : 'pdfHtml5',
					title : 'FY 100 Characterisation value'
				} ]

			});
		});
		
//		drawGraphRev(FColdreading, FCarr_actualVal)
		FCCalibrationData.fcoldReadingSorted = FColdreadingSorted
		FCCalibrationData.fcactualValNew = FCarr_actualValSorted;
	
		
		FCCalibrationData.fcZeroAdjustCnt = zeroErrCnt;
		FCCalibrationData.fcSpanAdjustCnt = spanErrCnt;
		FCCalibrationData.fcLinearAlgo1AdjustCnt = linearityAlgo1Cnt;
		FCCalibrationData.fcLinearAlgo2AdjustCnt = linearityAlgo2Cnt;
		FCCalibrationData.fcLinearAlgo3AdjustCnt = linearityAlgo3Cnt;
		
		
		ExpTrackData.fcCalibrationData = FCCalibrationData;
		
//		console.log(ExpTrackData);
		
		$('#FC_FaultChecking').on('click', function() {
			//console.log("entered in fault" +FCarr_actualValSorted);
			FC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, FColdreadingSorted, FCarr_actualValSorted, FCarr_stdValSorted);
		});
	}
	
	
	
	
		
	function sum_sq(array) {
		  var sum = 0, 
		      i = array.length;
		  while (i--) 
		   sum += Math.pow(array[i], 2);
		  return sum;
		}
	
	
	function drawGraphRev(FColdreadingSorted, FCarr_actualValSorted){
		var OldValue = [];
		var StdValue = [];
		for (var j = 0; j < FColdreadingSorted.length; j++) {
			var olValueJson = {
				x : FColdreadingSorted[j],
				y : FCarr_actualValSorted[j],
				markerType : "circle",
				markerSize : 10

			};
			OldValue.push(olValueJson);
			var stdValueJson = {
					x : FColdreadingSorted[j],
					y : FCarr_stdValSorted[j],
					markerType : "circle",
					markerSize : 10

				};
			StdValue.push(stdValueJson);
			
		}
		// console.log(OldValue);
		var chart = new CanvasJS.Chart("FC_chartContainer",
				{
					animationEnabled : true,
					theme : "light2",
					title : {
						text : "Flow Control System (FY 100)",
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
					data : [  {
						type : "line",
						showInLegend : true,
						name : "Standard Output",
						// lineDashType: "dash",
						color : "#39FF14",
						dataPoints : [ {
							x : lowerSpLevel,
							y : lowerOutputLevel 
						}, {
							x : higherSpLevel,
							y : higherOutputLevel
						} ]
					}, {
						type : "scatter",
						showInLegend : true,
						name : "Observed Output",
						markerType : "circle",
						// xValueFormatString: "DD MMM,
						// YYYY",
						color : "#F08080",

						dataPoints : OldValue
					}
					/*, {
						type : "scatter",
						showInLegend : true,
						name : "Observed Output",
						markerType : "triangle",
						// xValueFormatString: "DD MMM,
						// YYYY",
						color : "#000",

						dataPoints : StdValue
					}*/
					
					]
				});
		chart.render();

		function toogleDataSeries(e) {
			if (typeof (e.dataSeries.visible) === "undefined"
					|| e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			}
			chart.render();
		}
		
		 
		
		
	}
	
	
	
	
	
}