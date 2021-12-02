//var LC_CALIBRATION = LC_CALIBRATION || {};

//LC_CALIBRATION.LC_calibrationFun = function(lowerSpLevel, higherSpLevel, LColdreading, LCarr_actualVal, LCarr_stdVal) {
	
	 LC_calibrationFun_Reverse = function(i2pType, lowerSpLevel, higherSpLevel, LColdreading, LCarr_actualVal, LCarr_stdVal, lowerOutputLevel, higherOutputLevel) {
	
//	console.log("LC_CALIBRATION");

	
	 //console.log("arr true reading not sorted "+LColdreading);
	 //console.log("arr Actual values not sorted"+LCarr_actualVal);
	 //console.log("arr Standard values not sorted"+LCarr_stdVal);
		 var zeroErrCnt = 0, spanErrCnt = 0, linearityAlgo1Cnt = 0, linearityAlgo2Cnt = 0,linearityAlgo3Cnt  = 0;
	 var LColdreadingSorted = [];
	 var LCarr_actualValSorted = [];
	 var LCarr_stdValSorted = [];


	 var spanRange ;

	 var lcflagSpan_reverse = false;

	 LColdreadingSorted = LColdreading.slice();
	 LColdreadingSorted.sort(function(a, b) {
			return a - b
		});
	 //console.log("arr true reading sorted "+LColdreadingSorted);
	 
	 for(var i = 0; i<LColdreadingSorted.length; i++){
		 
		 var index = LColdreading.indexOf(LColdreadingSorted[i]);
		 var value = LCarr_actualVal[index];
		 LCarr_actualValSorted.push(value);
		 var value2 = LCarr_stdVal[index];
		 LCarr_stdValSorted.push(value2);
	 }
	 //console.log("arr Actual values sorted"+LCarr_actualValSorted);
	 //console.log("arr Standard values sorted"+LCarr_stdValSorted);
	
	var LCCalibrationData = {};
	 var positiveVal = [];
	 var negativeVal = [];
	 var negativeValueIndex =  [];
	 var positiveValueIndex = [];
	 var checkVals = [];
	 var checkDiffVals = [];
	
	$("#LC_calibration").prop("hidden", true);
	$("#LC_graph").prop("hidden", true);
	$("#submit_LC_WaterLevel").prop("hidden", true);
	$("#LC_Slider").prop("hidden", true);
	
	var LC0Err_cnt = 0 , LCSpanErr_cnt = 0, LC_LinearityErr_cnt = 0, LC_AccuracyErr_cnt = 0;
	
	var LC_calibrationData = '';
	LC_calibrationData += '<div class="col-md-12" >'
			+ '<div id="LC_calibrationDiv" >'
			+ '<h1>LY Calibration</h1>'
			+'<h6>In this level calibrate the LY 100</h6>'
			+ '<div class="col-md-12" id="LC_Calibration_Input">'

			+ '<div class="col-md-12 marg" id="LCzeroerror_Calibration">'
			+ '<label for="zeroerror" class="col-md-4" style="margin-top:5px">Zero Error:</label>'
			+ '<input type="text" class=" col-md-4" id="zeroerror" placeholder="Enter Zero Error " name="zeroerror" style="padding:5px">'
			+ '<button type="submit" id="submit_LCzeroerror_Calibration" data-toggle="modal" data-target="#calibrationmyModal" class="submit_LC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="zeroerrorOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none; color:#059805"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="LCspanerror_Calibration" hidden>'
			+ '<label for="spanerror" class="col-md-4" style="margin-top:5px">Span Error:</label>'
			+ '<input type="text" class="col-md-4" id="spanerror" placeholder="Enter Span Error " name="spanerror" style="padding:5px">'
			+ '<button type="submit" id="submit_LCspanerror_Calibration" data-toggle="modal" data-target="#calibrationmyModal"  class="submit_LC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="spanerrorOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none; color:#059805"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="LCLinearity_Calibration" hidden>'
			+ '<label for="linearity" class="col-md-4" style="margin-top:5px">Linearity:</label>'
			+ '<input type="text" class="col-md-4" id="linearity" placeholder="Enter Linearity " name="Linearity" style="padding:5px">'
			+ '<button type="submit" id="submit_LCLinearity_Calibration" data-toggle="modal" data-target="#calibrationmyModal" class="submit_LC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="LCLinearityOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none; color:#059805"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="LCAccuracy_Calibration" hidden>'
			+ '<label for="Accuracy" class="col-md-4" style="margin-top:5px">Average Accuracy (%):</label>'
			+ '<input type="text" class="col-md-4" id="Accuracy" placeholder="Enter Accuracy(%) " name="Accuracy" style="padding:5px">'
			+ '<button type="submit" id="submit_LCAccuracy_Calibration" data-toggle="modal" data-target="#calibrationmyModal" class="submit_LC_Calibration btn btn-default col-md-3 col-md-offset-1">Submit</button>'
			+'<span id="LLCAccuracyOK" class="fa fa-check-circle col-md-3 col-md-offset-1" style="display:none; color:#059805"></span>'
			+ '</div>'
			+ '<div class="col-md-12 marg" id="LC_CalibrationError" hidden>'
			
			+ '</div>'
			// + '<button id="submit_LC_Calibration">Submit</button><br/>'
			+ '<div  id  = "LCCalibQuesDiv"class="col-md-12 " style="margin: 17px 0;" hidden>'
			+ '<i class="plsCalibrate">Please calibrate the LY 100 </i>'
			+ '<label class="radio-inline"><input type="radio" name="LC_calibrateNeed" id="LC_calibrateNeeded">Yes</label>'
			
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
	$("#TestNextDiv").html(LC_calibrationData);

	
	stop_timer();
	set_timer();
	
	
	$('#submit_LCzeroerror_Calibration').on('click', function() {
		        
		$("#submit_LCzeroerror_Calibration").removeAttr("data-toggle");
		$("#submit_LCzeroerror_Calibration").removeAttr("data-target");
		$('#zero4reverse').css("display","none");
				
		
		        var lc0Temp = LCarr_actualValSorted[LColdreadingSorted.indexOf(lowerSpLevel)];
		        var LC_ZeroError = lc0Temp - 20;
		        
		      
								//console.log("formula value with 0 error"
								//	+ lc0Temp +"ERROR" +LC_ZeroError.toFixed(2));
									        
					if(($("#zeroerror").val() == '') ||  isNaN($("#zeroerror").val())){
						
						alertify.alert("Alert","Please Enter The Answer In Numeric Only");
						$(".ajs-header").css("background-color","#ce6058");

						
					}else{
						

						
						if (LC_ZeroError.toFixed(2) == $("#zeroerror").val()){
							
							
							LCCalibrationData.lcZeroErr = $("#zeroerror").val();
							LCCalibrationData.lcZeroErrCnt = LC0Err_cnt;
							//console.log(LCCalibrationData);
							
							
							LC0Err_cnt = 0;
							
							$("#zeroerror").prop("disabled", true);
							$("#LCspanerror_Calibration").prop("hidden", false);
							$("#submit_LCzeroerror_Calibration").css("display","none");
							$("#zeroerrorOK").css("display","block");
							
						}else{
							if(LC0Err_cnt == 2){
								$("#submit_LCzeroerror_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
								$('#zero4reverse').css("display","block");
								LC0Err_cnt++;
//								alertify.alert("Answer is incorrect");
//								alertify.alert("Correct Answer is: " + LC_ZeroError.toFixed(3));
							}else if(LC0Err_cnt == 4){
								
								alertify.alert("Alert","Answer is incorrect");
								alertify.alert("Alert","Correct Answer is: " + LC_ZeroError.toFixed(2));
								$(".ajs-header").css("background-color","#ce6058");

							}else{
								
								alertify.alert("Alert","Answer is incorrect");
								$(".ajs-header").css("background-color","#ce6058");

								LC0Err_cnt++;
							}
							
						}
						
					}	
									        
			     
		
	});

	$('#submit_LCspanerror_Calibration').on('click', function() {
		$("#submit_LCspanerror_Calibration").removeAttr("data-toggle");
		$("#submit_LCspanerror_Calibration").removeAttr("data-target");
		$('#span4reverse').css("display","none");
		
        var lcSpanTemp = LCarr_actualValSorted[LColdreadingSorted.indexOf(higherSpLevel)];
        var LC_SpanError = lcSpanTemp - 4;
        
      
						//console.log("formula value with 0 error"
						//	+ lcSpanTemp +"ERROR" +LC_SpanError.toFixed(2));
							        
			if(($("#spanerror").val() == '') ||  isNaN($("#spanerror").val())){
				
				alertify.alert("Alert","Please Enter The Answer In Numeric Only");
				$(".ajs-header").css("background-color","#ce6058");

			}else{
				
				
				if (LC_SpanError.toFixed(2) == $("#spanerror").val()){
					
					LCCalibrationData.lcSpanErr = $("#spanerror").val();
					LCCalibrationData.lcSpanErrCnt = LCSpanErr_cnt;
					//console.log(LCCalibrationData);
					
					
					LCSpanErr_cnt = 0; 
					$("#spanerror").prop("disabled", true);
					$("#LCLinearity_Calibration").prop("hidden", false);
					$("#submit_LCspanerror_Calibration").css("display","none");
					$("#spanerrorOK").css("display","block");
					
				}else{
					if(LCSpanErr_cnt == 2){
						$("#submit_LCspanerror_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
						$('#span4reverse').css("display","block");
						LCSpanErr_cnt++;
//						alertify.alert("Answer is incorrect");
//						alertify.alert("Correct Answer is: " + LC_ZeroError.toFixed(3));
					}else if(LCSpanErr_cnt == 4){
						
						alertify.alert("Alert","Answer is incorrect");
						alertify.alert("Alert","Correct Answer is: " + LC_SpanError.toFixed(2));
						$(".ajs-header").css("background-color","#ce6058");

					}else{
						
						alertify.alert("Alert","Answer is incorrect");
						$(".ajs-header").css("background-color","#ce6058");

						LCSpanErr_cnt++;
					}
					
				}
				
			}	
				
	        
	 
	});

	$('#submit_LCLinearity_Calibration').on('click', function() {
		$("#submit_LCLinearity_Calibration").removeAttr("data-toggle");
		$("#submit_LCLinearity_Calibration").removeAttr("data-target");
		$('#Linearity4reverse').css("display","none");
		// Calulate SX
		  var sumofX = LCarr_stdValSorted.reduce(function(a, b){
		        return a + b;
		    }, 0).toFixed(3);
		    
		  
		    //console.log("Calulate SX");
		  
		    //console.log("Sum of Input " +sumofX);
		    
		    var Sqr_sumofX = Math.pow(sumofX, 2);
		    
		    //console.log("Square of Sum of Input " +Sqr_sumofX);
		    
		    var sum_sq_X =  sum_sq(LCarr_stdValSorted).toFixed(3);
		    
		    //console.log("sum of Square of input " +sum_sq_X);
		    
		    var LC_Sx = Math.sqrt(sum_sq_X - (Sqr_sumofX/LCarr_stdValSorted.length));
		    
		    //console.log("SX " +LC_Sx.toFixed(2));
		    
		
		    
		 // Calulate SY
			  var sumofY = LCarr_actualValSorted.reduce(function(a, b){
			        return a + b;
			    }, 0).toFixed(3);
			    
			    //console.log("Calulate SY");
			    //console.log("Sum of Input " +sumofY);
			    
			    var Sqr_sumofY = Math.pow(sumofY, 2);
			    
			    //console.log("Square of Sum of Input " +Sqr_sumofY);
			    
			    var sum_sq_Y =  sum_sq(LCarr_actualValSorted).toFixed(3);
			    
			    //console.log("sum of Square of input " +sum_sq_Y);
			    
			    var LC_Sy =  Math.sqrt( sum_sq_Y -  (Sqr_sumofY/LCarr_actualValSorted.length));
			    
			    //console.log("SY " +LC_Sy.toFixed(2));
		    
		    
		// Calculate Sxy
			    
			    var sum_xy = 0;
			    for (var i=0; i < LCarr_stdValSorted.length; i++) {
			    	sum_xy += (LCarr_stdValSorted[i] * LCarr_actualValSorted[i]);
			    }
			    //console.log("Calulate SXY"); 
			    //console.log("Sum of MultiPlication of X and Y  " +sum_xy.toFixed(2));
			    
	            var multi_x_y = sumofX * sumofY;
			    
	            //console.log("MultiPlication of sum of X and Y  " +multi_x_y.toFixed(2));
	         
	            var Sxy =  sum_xy - (multi_x_y/LCarr_stdValSorted.length) ;
	         
	            //console.log("SXY  " +Sxy.toFixed(2));
	         
	         
	    // Calculate Linearity     
	         
	         
	         //console.log("Calculate Linearity"); 
	         
	         //console.log("Sqrt Multiplication " + ( LC_Sx.toFixed(2) * LC_Sy.toFixed(2)).toFixed(2)); 
	         
	         var LC_linearity =  Sxy.toFixed(3)/( LC_Sx.toFixed(3) * LC_Sy.toFixed(3));
	        
	         //console.log(" LC_linearity " +LC_linearity.toFixed(3));
	        
	         
		if(($("#linearity").val() == '') ||  isNaN($("#linearity").val())){
				
				alertify.alert("Alert","Please Enter The Answer In Numeric Only");
				$(".ajs-header").css("background-color","#ce6058");

				
			}else{
				
				
				if (LC_linearity.toFixed(3) == $("#linearity").val()){
					
					LCCalibrationData.lcLinearityErr = $("#linearity").val();
					LCCalibrationData.lcLinearityErrCnt = LC_LinearityErr_cnt;
					//console.log(LCCalibrationData);
					
					LC_LinearityErr_cnt = 0; 
					$("#linearity").prop("disabled", true);
					$("#LCAccuracy_Calibration").prop("hidden", false);
					$("#submit_LCLinearity_Calibration").css("display","none");
					$("#LCLinearityOK").css("display","block");
					
					
				}else{
					if(LC_LinearityErr_cnt == 2){
						$("#submit_LCLinearity_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
						$('#Linearity4reverse').css("display","block");
						LC_LinearityErr_cnt++;
//						alertify.alert("Answer is incorrect");
//						alertify.alert("Correct Answer is: " + LC_ZeroError.toFixed(3));
					}else if(LC_LinearityErr_cnt == 4){
						
						alertify.alert("Alert","Answer is incorrect");
						alertify.alert("Alert","Correct Answer is: " + LC_linearity.toFixed(3));
						$(".ajs-header").css("background-color","#ce6058");

					}else{
						
						alertify.alert("Alert","Answer is incorrect");
						$(".ajs-header").css("background-color","#ce6058");

						LC_LinearityErr_cnt++;
					}
					
				}
				
			}
	         
	         
	         
	         
		
		
	});

	$('#submit_LCAccuracy_Calibration').on('click', function() {
		$("#submit_LCAccuracy_Calibration").removeAttr("data-toggle");
		$("#submit_LCAccuracy_Calibration").removeAttr("data-target");
		$('#Accuracy4reverse').css("display","none");
		
		    var sum_PerAccuracy = 0;
		    for (var i=0; i < LCarr_stdValSorted.length; i++) {
		    	sum_PerAccuracy += ((LCarr_stdValSorted[i] - LCarr_actualValSorted[i])/LCarr_stdValSorted.length)*100;
		    }
		
		   var Avg_Accuracy = Math.abs(sum_PerAccuracy)/LCarr_stdValSorted.length;
		   
		   //console.log("AVG % Accuracy  " +Avg_Accuracy.toFixed(2));
		   
		   if(($("#Accuracy").val() == '') ||  isNaN($("#Accuracy").val())){
				
				alertify.alert("Alert","Please Enter The Answer In Numeric Only");
				$(".ajs-header").css("background-color","#ce6058");

				
			}else{
				
				
				if (Avg_Accuracy.toFixed(2) == $("#Accuracy").val()){
					
					
					LCCalibrationData.lcAccuracyErr = $("#Accuracy").val();
					LCCalibrationData.lcAccuracyErrCnt = LC_AccuracyErr_cnt;
					
					//console.log(LCCalibrationData);
					
//					ExpTrackData.lcCalibrationData = LCCalibrationData;
					
//					//console.log(ExpTrackData);
					
					LC_AccuracyErr_cnt = 0; 
					$("#Accuracy").prop("disabled", true);
					$("#LCCalibQuesDiv").prop("hidden", false);
					$("#submit_LCAccuracy_Calibration").css("display","none");
					$("#LLCAccuracyOK").css("display","block");
					
					
				}else{
					if(LC_AccuracyErr_cnt == 2){
						$("#submit_LCAccuracy_Calibration").attr({'data-toggle':'modal', 'data-target':'#calibrationmyModal'});
						$('#Accuracy4reverse').css("display","block");
						LC_AccuracyErr_cnt++;
//						alertify.alert("Answer is incorrect");
//						alertify.alert("Correct Answer is: " + LC_ZeroError.toFixed(3));
					}else if(LC_AccuracyErr_cnt == 4){
						
						alertify.alert("Alert","Answer is incorrect");
						alertify.alert("Alert","Correct Answer is: " + Avg_Accuracy.toFixed(2));
						$(".ajs-header").css("background-color","#ce6058");

					}else{
						
						alertify.alert("Alert","Answer is incorrect");
						$(".ajs-header").css("background-color","#ce6058");

						LC_AccuracyErr_cnt++;
					}
					
				}
				
			}

	});
	
	$('#LC_calibrateNeeded').on('click', function() {
		var range = $("#zeroerror").val();
		 spanRange = $("#spanerror").val();
		$("#LC_calibrateNeeded").prop("disabled", true);
		
		// var range = $("#zeroerror").val();
		 var flag = 0;
		LCZero_CalibartionRev(range, flag);
	
	//	 LC_CheckLinearitySectionRev();
		

	});
	
	
	var LCZero_CalibartionRev = function(range, flag){
		

		

		var LC_calibrateNeeded = '';
		LC_calibrateNeeded += '<div class="col-md-12" >'
			+'<div id="ZeroErrorKnockData">'
			+'<h1>Adjust Zero</h1>'
			+'<div id="plus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"><input type="Text" id="ZeroangleVal" ></div><div id="minus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat1" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="ZeroErrorKnockSuccess"></div>'
			$('#ZeroErrorKnotch').html('');
			$('#ZeroErrorKnotch').html(LC_calibrateNeeded);
			
			
			range = Math.abs(range);
			
			
			var angle = 0;
			var temp  = 0;
//			 var range = $("#zeroerror").val();
			 var ZeroValue_old = LCarr_actualValSorted[0] ;
			 var ZeroValue = LCarr_actualValSorted[0] ;
			 //console.log(ZeroValue);
			 var steps = range/10;
			 var stepFix = steps.toFixed(3);
//			 console.log(steps);
//			 console.log(stepFix);
/// Zero MINUS CLICK  
			 
			 $("#ZeroangleVal").val(LCarr_actualValSorted[0]);
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
						
					    LCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
					    //console.log(LCarr_actualValSorted);
					 
					    
					    if(lcflagSpan_reverse == false){
							 
							 for( var i= 1; i<=(LCarr_actualValSorted.length-1); i++ )
								{
								
								var oldval =  LCarr_actualValSorted[i];
								var LinearityNewVal = (oldval - stepFix).toFixed(2);	
								//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
								
								 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
								
								 
								} 
						 } else{
							 
							 for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
								{
								
								var oldval =  LCarr_actualValSorted[i];
								var LinearityNewVal = (oldval - stepFix).toFixed(2);	
								//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
								
								 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
								
								 
								} 
						 }
					
				    
				     var $elem = $('.icon-repeat1');

				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ (now * 20) +'deg)'
				             });
				         }
				     });
				     
				     $("#ZeroangleVal").val(LCarr_actualValSorted[0]);
				    
				     if((-range) == n)
						{
					
				    	
							$('#minus').hide();
				    	 $('#ZeroErrorKnockSuccess').html('');
						$('#ZeroErrorKnockSuccess').html('<div class="alert alert-danger">Zero not Adjusted!!!</div>');
						}
				     
				     drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
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
							
							LCarr_actualValSorted.splice(0, 1, parseFloat(20));
							///$('#minus').hide();
							//$('#plus').hide();
							  $("#ZeroangleVal").val(LCarr_actualValSorted[0]);
							  
							  
							  if(lcflagSpan_reverse == false){
									 
									 for( var i= 1; i<=(LCarr_actualValSorted.length-1); i++ )
										{
										
										var oldval =  LCarr_actualValSorted[i];
										var LinearityNewVal = (oldval + parseFloat(stepFix)).toFixed(2);	
										//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
										
										 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
										
										 
										} 
								 } else{
									 
									 for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
										{
										
										var oldval =  LCarr_actualValSorted[i];
										var LinearityNewVal = (oldval + parseFloat(stepFix)).toFixed(2);	
										//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
										
										 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
										
										 
										} 
								 }
							    
							 
							drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
							
							//console.log(LCarr_actualValSorted);
							if(flag == 0){
								
//								alertify.alert("Zero Adjusted Successfully!!!");
								//$('#ZeroErrorKnockData').hide();
								$("#ZeroErrorKnockData").addClass("disabledDiv");
								$('#ZeroErrorKnockSuccess').html('');
								$('#ZeroErrorKnockSuccess').html('<div class="alert alert-success">Zero Adjusted Successfully!!!</div>');
								
								LCSpan_ClaibrationNeededRev();
							}else{
								
								$('#ZeroErrorKnotch').html('');
								$('#ZeroErrorKnotch').html('<div class="alert alert-success">Zero Adjusted Successfully!!!</div>');
								
								$('#SpanErrorKnotch').show('');
								$('#SpanErrorKnotch').html('');							
								$('#SpanErrorKnotch').html('<div class="alert alert-success">Span Adjusted Successfully!!!</div>');
								
								//	CHECK LINEARITY from here
								 LC_CheckLinearitySectionRev();
							}
							
							
							}else
						        {	
						
									 LCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
									 //console.log(LCarr_actualValSorted);
									  $("#ZeroangleVal").val(LCarr_actualValSorted[0]);
									  
									  if(lcflagSpan_reverse == false){
											 
											 for( var i= 1; i<=(LCarr_actualValSorted.length-1); i++ )
												{
												
												var oldval =  LCarr_actualValSorted[i];
												var LinearityNewVal = (oldval + parseFloat(stepFix)).toFixed(2);	
												//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
												
												 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
												
												 
												} 
										 } else{
											 
											 for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
												{
												
												var oldval =  LCarr_actualValSorted[i];
												var LinearityNewVal = (oldval + parseFloat(stepFix)).toFixed(2);	
												//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
												
												 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
												
												 
												} 
										 }
									 
									 drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
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
	
	
	
	var LCSpan_ClaibrationNeededRev = function() {
		var LC_calibrateNeeded = '';
		LC_calibrateNeeded += '<div class="col-md-12" >'
			+'<div id="SpanErrorKnockData">'
			+'<h1>Adjust Span </h1>'
			+'<div id="Spanplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"><input type="Text" id="SpanangleVal"></div><div id="Spanminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			+'</div>'
			//+'</div>'
			+'<div id="SpanErrorKnockSuccess"></div>'
			$('#SpanErrorKnotch').html('');
			$('#SpanErrorKnotch').html(LC_calibrateNeeded);
			
			 range = Math.abs(range);
			var angle = 0;
			var temp  = 0;
			 var range =parseFloat(spanRange);
			var ArrayLeng = LCarr_actualValSorted.length ;
			 var SpanValue = LCarr_actualValSorted[ArrayLeng - 1 ] ;
			 var ZeroValue = LCarr_actualValSorted[0] ;
			 //console.log(SpanValue);
			 var steps = range/10;
			 var stepFix = steps.toFixed(3);
			 //console.log(steps);
/// Span MINUS CLICK  
			 $("#SpanangleVal").val(LCarr_actualValSorted[ArrayLeng - 1 ]);
			 
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
				 
				 for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
					{
					
					var oldval =  LCarr_actualValSorted[i];
					var LinearityNewVal = (oldval - parseFloat(stepFix)).toFixed(2);	
					//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
					
					 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
					
					 
					}
				 
					//console.log(SpanValue);
					var SpanValueFix = SpanValue.toFixed(0);
					if((-range) == n)
					{ 
						LCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(4));
						LCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
						$('#Spanminus').hide();

						 $("#SpanangleVal").val(LCarr_actualValSorted[ArrayLeng - 1 ]);
						 
						drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
						//alertify.alert("Span Error Adjusted Successfully!!!");
						//$('#SpanErrorKnockData').hide();
						//$('#ZeroErrorKnockData').show();
						$('#SpanErrorKnockData').addClass("disabledDiv");
						$('#ZeroErrorKnockData').removeClass("disabledDiv");
						$('#ZeroErrorKnockSuccess').html('');
						//$('#ZeroErrorKnockData').hide();
						$('#SpanErrorKnockSuccess').html('');
						$('#SpanErrorKnockSuccess').html('<div class="alert alert-success">Span Adjusted Successfully!!!</div><div class="alert alert-danger">But Zero affected. <br/>Adjust Zero Again</div>');
						lcflagSpan_reverse = true;
						LCZero_CalibartionRev(range, 1);
						
						
						
					
						
						}
					else
						{
				    LCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
				    LCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
				    $("#SpanangleVal").val(LCarr_actualValSorted[ArrayLeng - 1 ]);
				   
				    drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
						}
					
					
					
				  //  //console.log(LCarr_actualValSorted);
				 
				
			    
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
					 
					 for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
						{
						
						var oldval =  LCarr_actualValSorted[i];
						var LinearityNewVal = (oldval + parseFloat(stepFix)).toFixed(2);	
						//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
						
						 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
						
						 
						}
					 
					//	//console.log(SpanValue);
						var SpanValueFix = SpanValue.toFixed(0);
						if(range == n)
						{
						
							LCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
							LCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
							 $('#Spanplus').hide();
							 $('#SpanErrorKnockSuccess').html('');
								$('#SpanErrorKnockSuccess').html('<div class="alert alert-danger">Span not Adjusted!!!</div>');
								
							
						}else{
							
							LCarr_actualValSorted.splice((ArrayLeng - 1), 1, parseFloat(SpanValue));
							LCarr_actualValSorted.splice(0, 1, parseFloat(ZeroValue));
						}
						
					    
					    
					    
					    
					  //  //console.log(LCarr_actualValSorted);
					 
					
				    
				     var $elem = $('.icon-repeat');
				     //console.log(n * 20);
				     $({deg: n}).animate({deg: n}, {
				      
				      
				         step: function(now) {
				         
				             $elem.css({
				                 'transform': 'rotate('+ ((-now) * 20) +'deg)'
				             });
				         }
				     });
				     $("#SpanangleVal").val(LCarr_actualValSorted[ArrayLeng - 1 ]);
				     
				     drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
				 }
					 
				 });
					 
	


		
	}
			
	
	var LC_calibrate_Top_Linearity_NeededRev = function ()
	{
		
		var LC_calibrate_Top_Linearity_Needed = '';
		LC_calibrate_Top_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionOneKnockData">'
			+'<h1>Linearity Algorithm 1</h1>'
			+'<div id="LinearityTopplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityTopminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityTopKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityTopKnotch').html(LC_calibrate_Top_Linearity_Needed);
			
			
			var angle = 0;
			var temp  = 0;
			
			 var LinearityValue = 0 ;
			 var defError = (LC_DefaultErr/12).toFixed(2);
			 var steps = defError/10;
			 var stepFix = parseFloat(steps.toFixed(3));
			 //console.log("steps "+stepFix);
			 
/// LINEARITY TOP MINUS CLICK  
			 
		
//			 LinearityTopminus  LinearityTopplus
			 
			 $('#LinearityTopplus').bind("click",function (event) {
				 linearityAlgo1Cnt++;

                 //console.log(defError);
				 if(angle >= -(defError)){
					 angle -=parseFloat(stepFix);
					 var n = angle.toFixed(2);
					 //console.log("angle "+n);
				      
					 $('#LinearityTopminus').show();

					 
					
					for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
						{
						
						var oldval =  LCarr_actualValSorted[i];
						var LinearityNewVal = (oldval + stepFix).toFixed(2);	
						//console.log("oldvalue "+oldval+"  new Value "+LinearityNewVal);
						
						 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
						 
						 
						}
								
					 if((-defError) == n)
						{
						 $('#LinearityTopplus').hide();
						// $('#LinearityKnockSuccess').html('');
						 $('#LinearityTopKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 1 not Adjusted </div>');
						 }
					
					
					
					 //console.log(LCarr_actualValSorted);
					 drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
			
				    
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
			 
//			 LinearityTopminus  LinearityTopplus

				 $('#LinearityTopminus').bind("click",function (event) {
					 linearityAlgo1Cnt++;
					 $('#LinearityTopKnockSuccess').html('');
					
	                 //console.log(defError);
					 if(angle <= defError){
						 angle +=parseFloat(stepFix);
						 var n = angle.toFixed(2);
						 //console.log("angle "+n);
					      
						 $('#LinearityTopplus').show();

						 
						
						for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
							{
							
							var oldval =  LCarr_actualValSorted[i];
							var LinearityNewVal = (oldval - stepFix).toFixed(2);	
							//console.log("oldvalue "+oldval+"new Value "+LinearityNewVal);
							
							 LCarr_actualValSorted.splice(i, 1, parseFloat(LinearityNewVal));
							
							 
							}
									
						 if(defError == n)
							{
							 $('#LinearityTopminus').hide();
							 $('#LinearitySectionOneKnockData').hide();
								// $('#LinearityKnockSuccess').html('');
							$('#LinearityTopKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 1 Adjusted Successfully!!!</div>');
								
						
							if(positiveVal.length != 0){
								
								$("#ZeroErrorKnotch").hide();
								$("#SpanErrorKnotch").hide();
								
								
								LC_calibrate_Bottom_Linearity_NeededRev();
								$("#LinearityBottomKnotch").prop("hidden", false);
							}else{
								
								LC_calibrate_Both_Linearity_NeededRev();
								$("#LinearityBothKnotch").prop("hidden", false);
							}
							
							 }
						
						
						
						 //console.log(LCarr_actualValSorted);
							 drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
					
					    
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
	
	var LC_calibrate_Bottom_Linearity_NeededRev = function ()
	{
//		$("#ZeroErrorKnotch").hide();
//		$("#SpanErrorKnotch").hide();
		
		var LC_calibrate_Bottom_Linearity_Needed = '';
		LC_calibrate_Bottom_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionTwoKnockData">'
			+'<h1>Linearity Algorithm 2</h1>'
			+'<div id="LinearityBottomplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityBottomminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityBottomKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityBottomKnotch').html(LC_calibrate_Bottom_Linearity_Needed);
			
			//console.log("Section 2");
			var angle = 0;
			var temp  = 0;
			// var range = $("#linearity").val();
			 var LinearityValue = 0 ;
			 var defError = (LC_DefaultErr/12).toFixed(2);
			 var steps = defError/10;
			 var stepFix = parseFloat(steps.toFixed(3));
			 //console.log("steps "+stepFix);
			
			
			 // check Diffrence and indx of positive and negative difference
			 // clear all array and make updated with new values according to updated actual values
			 
		//	 checkVals.splice(0, checkVals.length);
			 negativeValueIndex.splice(0, negativeValueIndex.length);
			 positiveValueIndex.splice(0, positiveValueIndex.length);
			 
			 
				for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
				{
					
					var diff = (LCarr_actualValSorted[i] - LCarr_stdValSorted[i]).toFixed(2);
					
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
			 
			
//			     LinearityBottomminus  LinearityBottomplus
			     
			     
					 $('#LinearityBottomplus').bind("click",function (event) {
						 linearityAlgo2Cnt++;
						 $('#LinearityBottomKnockSuccess').html('');

		                 //console.log(defError);
						 if(angle <= defError){
							 angle +=parseFloat(stepFix);
							 var n = angle.toFixed(2);
							 //console.log("angle "+n);
						      
							 $('#LinearityBottomminus').show();
							 
							
							 
							 
							
							 //console.log("negative value Index "+negativeValueIndex);
							
							 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
								{
								 
								var oldval =  LCarr_actualValSorted[negativeValueIndex[i]];
								
								var LinearityNewVal = (oldval + stepFix).toFixed(2);	
								//console.log("Plus old negative value "+oldval +"  new Value "+LinearityNewVal);
								
								 LCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
								 
								 
								}
							 
							 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
								{
								 
								var oldval =  LCarr_actualValSorted[positiveValueIndex[i]];
							    //var idx = positiveValueIndex[i] - 1;
								var LinearityNewVal = (oldval + stepFix).toFixed(2);	
								//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
								//		"   new Value "+LinearityNewVal);
								
								 LCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
								
								 
								}
										
							 if(defError == n)
								{
								 $('#LinearityBottomplus').hide();
								 $('#LinearitySectionTwoKnockData').hide();
								// $("#LinearityTopKnotch").prop("hidden", false);
								// $("#LinearityBottomKnotch").prop("hidden", false);
									$('#LinearityBottomKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 2  Adjusted successfully!!! </div>');

									$("#LinearityBothKnotch").prop("hidden", false);
									LC_calibrate_Both_Linearity_NeededRev();
								 }
							
							
							
							 //console.log(LCarr_actualValSorted);
								 drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
						
						    
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
					 
//				     LinearityBottomminus  LinearityBottomplus

						 $('#LinearityBottomminus').bind("click",function (event) {
							 linearityAlgo2Cnt++;
							 
								
			                 //console.log(defError);
							 if(angle >= -(defError)){
								 angle -=parseFloat(stepFix);
								 var n = angle.toFixed(2);
								 //console.log("angle "+n);
							      
								 $('#LinearityBottomplus').show();

								
								 //console.log("negative value Index "+negativeValueIndex);
									
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  LCarr_actualValSorted[negativeValueIndex[i]];
									
									var LinearityNewVal = (oldval - stepFix).toFixed(2);	
									//console.log("IN Minus old negative value "+oldval+"  new Value "+LinearityNewVal);
									
									 LCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 
									 
									}
										
								 
								 
								 for( var i= 0; i<=(positiveValueIndex.length-1); i++ )
									{
									 
									var oldval =  LCarr_actualValSorted[positiveValueIndex[i]];
								    //var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval - stepFix).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 LCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
								 
											
								 if(-(defError) == n)
									{
									 $('#LinearityBottomminus').hide();
									$('#LinearitySectionOneKnockData').hide();
									// $('#LinearityKnockSuccess').html('');
									$('#LinearityBottomKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 2 not Adjusted!!!</div>');
									
								
									
									 }
								
								
								
								 //console.log(LCarr_actualValSorted);
									 drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
							           
							   

								 
								 
							 
							    
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
	
	
	var LC_calibrate_Both_Linearity_NeededRev = function(){
		$("#ZeroErrorKnotch").hide();
		$("#SpanErrorKnotch").hide();
		//console.log("IN SECTION 3");
		var LC_calibrate_Both_Linearity_Needed = '';
		LC_calibrate_Both_Linearity_Needed += '<div class="col-md-12" >'
			+'<div id="LinearitySectionBothKnockData">'
			+'<h1>Linearity Algorithm 3</h1>'
			+'<div id="LinearityBothplus" class="fa fa-plus-square col-md-2" style="cursor: pointer;"></div><div class="col-md-8" style="margin-left: 10px;"></div><div id="LinearityBothminus" style="cursor: pointer;" class="fa fa-minus-square col-md-2"></div>'
			//+'<div class="range">'
			+'<div class="icon-repeat" id="menu-1"></div>'
			//+'</div>'
			+'</div>'
			+'<div id="LinearityhBothKnockSuccess"></div>'
			//$('#LinearityKnotch').html('');
			$('#LinearityBothKnotch').html(LC_calibrate_Both_Linearity_Needed);
			
			//console.log("Section 3");
			var angle = 0;
			var temp  = 0;
//			var minDiff = Math.max.apply(null, checkDiffVals);
//			//console.log("Min Diffrence "+ minDiff);
			
			var defError = (LC_DefaultErr/12).toFixed(2);
			var defError1 = (LC_DefaultErr/10).toFixed(2);
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
			 
			 
				for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
				{
					
					var diff = (LCarr_actualValSorted[i] - LCarr_stdValSorted[i]).toFixed(2);
					
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
									 
									var oldval =  LCarr_actualValSorted[positiveValueIndex[i]];
								    var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval - stepedby10arr[idx]).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 LCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
								 
							 }
							 
							
							 
							 
							if(negativeValueIndex.length != 0){
								
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  LCarr_actualValSorted[negativeValueIndex[i]];
									var idx = negativeValueIndex[i] - 1;
									var LinearityNewVal = (oldval + parseFloat(stepedby10arr[idx])).toFixed(2);
									//console.log("In Plus old negative value "+oldval+"  VALUE TOBE Plus "+stepedby10arr[idx]+
									//		"  new Value "+LinearityNewVal);
									
									 LCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 //console.log(LCarr_actualValSorted);
									 
									}
										
							}
								
							 if((defError) == n)
								{
								 $('#LinearityBothplus').hide();
								 $('#LinearitySectionBothKnockData').hide();
							
									$('#LinearityhBothKnockSuccess').html('<div class="alert alert-success">Linearity Algorithm 3  Adjusted successfully!!! </div>');
									
									$('#LC_calibrateNeeded').hide();
									$('#LinearityKnotch').html('');
									$('#LinearityKnotch').html('<div class="alert alert-success blink" style="font-size:16px; font-weight:bold;">Zero , Span & Linearity Adjusted successfully!!! </div>');
										
									LC_updatedDataTableRev(LColdreadingSorted,LCarr_actualValSorted);
									 function blink(selector){
										$(selector).fadeOut('slow', function(){
										    $(this).fadeIn('slow', function(){
										        blink(this);
										    });
										});
										}
										    
										blink('.blink');
								 }
							
							
							
							 //console.log(LCarr_actualValSorted);
								 drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
						
						    
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
									 
									var oldval =  LCarr_actualValSorted[positiveValueIndex[i]];
								    var idx = positiveValueIndex[i] - 1;
									var LinearityNewVal = (oldval + parseFloat(stepedby10arr[idx])).toFixed(2);	
									//console.log("IN Plus old positive value "+oldval+"  VALUE TOBE MINUS "+stepedby10arr[idx]+
									//		"   new Value "+LinearityNewVal);
									
									 LCarr_actualValSorted.splice(positiveValueIndex[i], 1, parseFloat(LinearityNewVal));
									
									 
									}
								 
							 }
							 
							
							 
							 
							if(negativeValueIndex.length != 0){
								
								 for( var i= 0; i<=(negativeValueIndex.length-1); i++ )
									{
									 
									var oldval =  LCarr_actualValSorted[negativeValueIndex[i]];
									var idx = negativeValueIndex[i] - 1;
									var LinearityNewVal = (oldval - parseFloat(stepedby10arr[idx])).toFixed(2);
									//console.log("In Plus old negative value "+oldval+"  VALUE TOBE Plus "+stepedby10arr[idx]+
									//		"  new Value "+LinearityNewVal);
									
									 LCarr_actualValSorted.splice(negativeValueIndex[i], 1, parseFloat(LinearityNewVal));
									 //console.log(LCarr_actualValSorted);
									 
									}
										
							}
								
							 if((-defError) == n)
								{
								 $('#LinearityBothminus').hide();
								 $('#LinearityhBothKnockSuccess').html('');
									$('#LinearityhBothKnockSuccess').html('<div class="alert alert-danger">Linearity Algorithm 3  not Adjusted!!! </div>');
									
									
									
								 }
							
							
							
							 //console.log(LCarr_actualValSorted);
								 drawGraphRev(LColdreadingSorted, LCarr_actualValSorted);	
						
						    
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
	
	
	
	var LC_CheckLinearitySectionRev = function()
	{
    
		
		
		$("#LinearityKnotch").prop("disabled", false);
		 
			for( var i= 1; i<=(LCarr_actualValSorted.length-2); i++ )
			{
				
				var diff = (LCarr_actualValSorted[i] - LCarr_stdValSorted[i]).toFixed(2);
				
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
				LC_calibrate_Top_Linearity_NeededRev();
				
			}else{
				$("#LinearityBottomKnotch").prop("hidden", false);

					$("#ZeroErrorKnotch").show();
					$("#SpanErrorKnotch").show();

				LC_calibrate_Bottom_Linearity_NeededRev();
			}
			
		
	}
	
	
	var LC_updatedDataTableRev = function(LColdreadingSorted,LCarr_actualValSorted)
	{
		
		
		var LC_IOtable = '';
		
		LC_IOtable += '<div class="row"><div id = "IOtable" class="col-md-12">'
				+ '<table id="LC_DataTable_IO" class="table table-striped table-bordered" style="width:100%">'
				+ '<thead>'
				+ '<tr>'
				+ '<th>Reading No.</th>'
				+ '<th>	Input (in kg/cm²)</th>'
				+ '<th>Output (in mA)</th>'
				+ '</tr>'
				+ '</thead>'

				+ '<tbody >'
				for (var i = 0; i < LCarr_actualValSorted.length ; i++ ) {
					LC_IOtable += '<tr><td>'
				+ (i+1)
				+ '</td><td>'
				+ LColdreadingSorted[i]
				+ '</td><td>'
				+ LCarr_actualValSorted[i]
				+ '</td></tr>'
		}
		LC_IOtable += '</tbody>'

				+ '</table>'
       //        + '<div class="col-md-12" ><p>After few months P/E converter is not working properly.  As a maintenance engineer, Please attend the fault &nbsp;&nbsp; </p>'
               + '<div class="col-md-12" ><p>After few months it is observed that P/E converter is not working properly. As a maintenance engineer, please identify and rectify the fault &nbsp;&nbsp; </p>'
               + '<button id="LC_FaultChecking">Next level</button>'
				+'</div>'
				LC_IOtable += '</div>'
				
		//readingcnt++;
//				$('#table_IO').DataTable({
//					 "pageLength" : 5,
//				        dom: 'Bfrtip',
//				       // "bDestroy": true,
//					title : 'Data export',
//					buttons : [ {
//						extend : 'excelHtml5',
//						title : 'LC Characterisation value'
//
//					}, {
//						extend : 'pdfHtml5',
//						title : 'LC Characterisation value'
//					} ]
//				});	

		$('#LinearityKnotch').append(LC_IOtable);
		$('#LinearityKnotch').ready(function() {
			$('#LC_DataTable_IO').DataTable({
				"pageLength" : 5,
				dom: 'Bfrtip',
				//"order" : [ [ 10, "desc" ] ],
				title : 'LC_calibration',
				buttons : [ {
					extend : 'excelHtml5',
					title : 'LY 100 Characterisation value'

				}, {
					extend : 'pdfHtml5',
					title : 'LY 100 Characterisation value'
				} ]

			});
		});
		
//		drawGraphRev(LColdreading, LCarr_actualVal)
		LCCalibrationData.lcoldReadingSorted = LColdreadingSorted
		LCCalibrationData.lcactualValNew = LCarr_actualValSorted;
	
		
		LCCalibrationData.lcZeroAdjustCnt = zeroErrCnt;
		LCCalibrationData.lcSpanAdjustCnt = spanErrCnt;
		LCCalibrationData.lcLinearAlgo1AdjustCnt = linearityAlgo1Cnt;
		LCCalibrationData.lcLinearAlgo2AdjustCnt = linearityAlgo2Cnt;
		LCCalibrationData.lcLinearAlgo3AdjustCnt = linearityAlgo3Cnt;
		
		minutes = document.getElementById("minutes").textContent;
		seconds = document.getElementById("seconds").textContent;        		
//		console.log(minutes+":"+seconds);
		
		LCCalibrationData.lcCalibrationTimeInMin = minutes;		
		LCCalibrationData.lcCalibrationTimeInSec = seconds;
		
		
		ExpTrackData.lcCalibrationData = LCCalibrationData;
		
//		console.log(ExpTrackData);
		
		stop_timer();
		
		$('#LC_FaultChecking').on('click', function() {
			//console.log("entered in fault" +LCarr_actualValSorted);
			LC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, LColdreadingSorted, LCarr_actualValSorted, LCarr_stdValSorted);
		});
	}
	
	
	
	
		
	function sum_sq(array) {
		  var sum = 0, 
		      i = array.length;
		  while (i--) 
		   sum += Math.pow(array[i], 2);
		  return sum;
		}
	
	
	function drawGraphRev(LColdreadingSorted, LCarr_actualValSorted){
		var OldValue = [];
		var StdValue = [];
		for (var j = 0; j < LColdreadingSorted.length; j++) {
			var olValueJson = {
				x : LColdreadingSorted[j],
				y : LCarr_actualValSorted[j],
				markerType : "circle",
				markerSize : 10

			};
			OldValue.push(olValueJson);
			var stdValueJson = {
					x : LColdreadingSorted[j],
					y : LCarr_stdValSorted[j],
					markerType : "circle",
					markerSize : 10

				};
			StdValue.push(stdValueJson);
			
		}
		// console.log(OldValue);
//		var chart = new CanvasJS.Chart("LC_chartContainer",
//				{
//					animationEnabled : true,
//					theme : "light2",
//					title : {
//						text : "Level Control System (LY 100)",
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
//					data : [  {
//						type : "line",
//						showInLegend : true,
//						name : "Standard Output",
//						// lineDashType: "dash",
//						color : "#39FF14",
//						dataPoints : [ {
//							x : lowerSpLevel,
//							y : lowerOutputLevel 
//						}, {
//							x : higherSpLevel,
//							y : higherOutputLevel
//						} ]
//					}, {
//						type : "scatter",
//						showInLegend : true,
//						name : "Observed Output",
//						markerType : "circle",
//						// xValueFormatString: "DD MMM,
//						// YYYY",
//						color : "#F08080",
//
//						dataPoints : OldValue
//					}
//					/*, {
//						type : "scatter",
//						showInLegend : true,
//						name : "Observed Output",
//						markerType : "triangle",
//						// xValueFormatString: "DD MMM,
//						// YYYY",
//						color : "#000",
//
//						dataPoints : StdValue
//					}*/
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
//		
		 
		 LC_Updategraph(OldValue,lowerSpLevel, higherSpLevel, lowerOutputLevel, higherOutputLevel);
		
	}
	
	
	
	
	
}