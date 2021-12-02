

PC_ConfigurePY = function(appId){
	
	
		var PC_ConfigFlagCnt = 0;
		
		$("#TestDiv").html('');
		
		var configure = '';
		configure +='<div id = "configDiv" class="container-fluid">'
				+'<h4 align="center">PY Configuration</h4>'
				+'<h6>In this level configure the PY 100</h6>'
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Select Type:</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="trsmtrType" >'
				+'<option value="-1">Select</option>'
				+'<option value="direct">Direct Acting</option>'
				+'<option value="reverse">Reverse Acting</option>'
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Select Input:</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="PC_spanLevel" >'
				+'<option value= -1 >Select</option>'
				+'<option value= 0 data-lowerspan = "0.2" data-higherspan="1">0.2 to 1 kg/cm²</option>'					
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Air Supply :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'1.4 kg/cm<sup>2</sup>'
				+'</div><br/>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Output :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'<select class="form-control" name="App" id="output" >'
				+'<option value="-1">Select</option>'
				+'<option value="0" data-loweroutput = "4" data-higheruotput="20">4~20 mA</option>'
				+'<option value="1" data-loweroutput = "20" data-higheruotput="4">20~4 mA</option>'
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Supply Voltage :</label> '
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'24 VDC'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-3 col-md-3 col-xl-3">'
				+'<label>Loop Impedance :</label>'
				+'</div>'
				+'<div class="col-sm-9 col-md-9 col-xl-9">'
				+'165 Ohm'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin">'
				+'<div class="buttonDiv">'
				+'<button id="PC_PYcheckConfig">Check Configuration</button>&nbsp;&nbsp;&nbsp;'
				+'<button id="PC_PYwiringDiagram" hidden >Next Level</button>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				+'</div>'; // container close
				
				
		
			
			$("#TestDiv").html(configure);
			
			stop_timer();
			set_timer();
		
		//animLT.repeat(0);
		P2EPYCircle.attr({'fill':'green'});	
		glowPY.stop(animPY);
		P2EPYCircle.unclick(PYClick);
	     

		 
		 
		 
		 
		 
		 $('#PC_PYcheckConfig').on(
				'click', function() {
					
					 var PC_configData = {};
					 var selectedType = $( "#trsmtrType option:selected" ).val();
					 var span = parseInt($( "#PC_spanLevel option:selected" ).val());
					 var output = $( "#output option:selected" ).val();
		
					
					
					 var lowerSpanLevel = $("#PC_spanLevel").find(':selected').data('lowerspan');
					 var higherSpanLevel =  $("#PC_spanLevel").find(':selected').data('higherspan');
					
					 var lowerOutputLevel = $("#output").find(':selected').data('loweroutput');
					 var higherOutputLevel =  $("#output").find(':selected').data('higheruotput');
					  
					
	             if(selectedType != "-1" && span != "-1"  && output != "-1"){
						
						
					
						if(selectedType =="direct" && output == "0"){
							
							 alertify.alert("Success","Configuration is successful.<br> Please click next level to proceed for wiring of PY 100");
							 $(".ajs-header").css("background-color","#4CAF50");
			            	 $("#trsmtrType, #PC_spanLevel, #output").prop("disabled", true);
			            	 $('#PC_PYwiringDiagram').show();
							
						}else if(selectedType =="reverse" && output == "1"){
							
							 alertify.alert("Success","Configuration is successful.<br> Please click next level to proceed for wiring of PY 100");
							 $(".ajs-header").css("background-color","#4CAF50");
			            	 $("#trsmtrType, #PC_spanLevel, #output").prop("disabled", true);
			            	 $('#PC_PYwiringDiagram').show();
						}else{
							
							alertify.alert("Alert","Please select the correct output as per selected P/E converter type");
							 $(".ajs-header").css("background-color","#ce6058");
							 	PC_ConfigFlagCnt++;
						}
	            
						
						minutes = document.getElementById("minutes").textContent;
		        		seconds = document.getElementById("seconds").textContent;        		
//		        		console.log(minutes+":"+seconds);
						
						PC_configData.appId = appId;
						PC_configData.Type = selectedType;
						PC_configData.span = span;
						PC_configData.lowerSpanLevel= lowerSpanLevel;
						PC_configData.higherSpanLevel= higherSpanLevel;
						PC_configData.output = output;
						PC_configData.configcnt = PC_ConfigFlagCnt;
						PC_configData.lowerOutputLevel= lowerOutputLevel;
						PC_configData.higherOutputLevel= higherOutputLevel;
						PC_configData.configTimeInMin = minutes;
						PC_configData.configTimeInSec = seconds;
						
						
//						console.log(PC_configData);
						PC_appData.pcConfigData = PC_configData;
//						console.log(PC_appData);
						ExpTrackData.pcAppData = PC_appData
//						console.log(ExpTrackData);
						
						stop_timer();	
						
					
		
						
					
						
					}else{
						
						alertify.alert("Alert","Please select all the fields");
						 $(".ajs-header").css("background-color","#ce6058");
						
					}
					
		 });
		 
		 
	
			$('#PC_PYwiringDiagram').on(
				'click', function() {
					
						var selectedType = $( "#trsmtrType option:selected" ).val();
		//				console.log(selectedType);
						connectionLevel(appId, selectedType);
						
							
				});
}

 
		   
			
							
							
			