

TC_ConfigureTY = function(appId){
	
	
		var TC_ConfigFlagCnt = 0;
		
		$("#TestDiv").html('');
		
		var configure = '';
		configure +='<div id = "configDiv" class="container-fluid">'
				+'<h4 align="center">TY Configuration</h4>'
				+'<h6>In this level configure the TY 100</h6>'
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
				+'<select class="form-control" name="App" id="TC_spanLevel" >'
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
				+'<button id="TC_TYcheckConfig">Check Configuration</button>&nbsp;&nbsp;&nbsp;'
				+'<button id="TC_TYwiringDiagram" hidden >Next Level</button>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				+'</div>'; // container close
				
				
		
			
			$("#TestDiv").html(configure);
		
			stop_timer();
			set_timer();
			
		//animLT.repeat(0);
		P2ETYCircle.attr({'fill':'green'});	
		glowTY.stop(animTY);
		P2ETYCircle.unclick(TYClick);
	     

		 
		 
		 
		 
		 
		 $('#TC_TYcheckConfig').on(
				'click', function() {
					
					 var TC_configData = {};
					 var selectedType = $( "#trsmtrType option:selected" ).val();
					 var span = parseInt($( "#TC_spanLevel option:selected" ).val());
					 var output = $( "#output option:selected" ).val();
		
					
					
					 var lowerSpanLevel = $("#TC_spanLevel").find(':selected').data('lowerspan');
					 var higherSpanLevel =  $("#TC_spanLevel").find(':selected').data('higherspan');
					
					 var lowerOutputLevel = $("#output").find(':selected').data('loweroutput');
					 var higherOutputLevel =  $("#output").find(':selected').data('higheruotput');
					  
					
	             if(selectedType != "-1" && span != "-1"  && output != "-1"){
						
						
					
						if(selectedType =="direct" && output == "0"){
							
							 alertify.alert("Success","Configuration is successful.<br> Please click next level to proceed for wiring of TY 100");
							 $(".ajs-header").css("background-color","#4CAF50");
			            	 $("#trsmtrType, #TC_spanLevel, #output").prop("disabled", true);
			            	 $('#TC_TYwiringDiagram').show();
							
						}else if(selectedType =="reverse" && output == "1"){
							
							 alertify.alert("Success","Configuration is successful.<br> Please click next level to proceed for wiring of TY 100");
							 $(".ajs-header").css("background-color","#4CAF50");
			            	 $("#trsmtrType, #TC_spanLevel, #output").prop("disabled", true);
			            	 $('#TC_TYwiringDiagram').show();
						}else{
							
							alertify.alert("Alert","Please select the correct output as per selected P/E converter type");
							 $(".ajs-header").css("background-color","#ce6058");
							 TC_ConfigFlagCnt++;
						}
	            
						
						minutes = document.getElementById("minutes").textContent;
		        		seconds = document.getElementById("seconds").textContent;        		
//		        		console.log(minutes+":"+seconds);
						
						TC_configData.appId = appId;
						TC_configData.Type = selectedType;
						TC_configData.span = span;
						TC_configData.lowerSpanLevel= lowerSpanLevel;
						TC_configData.higherSpanLevel= higherSpanLevel;
						TC_configData.output = output;
						TC_configData.configcnt = TC_ConfigFlagCnt;
						TC_configData.lowerOutputLevel= lowerOutputLevel;
						TC_configData.higherOutputLevel= higherOutputLevel;
						TC_configData.configTimeInMin = minutes;
						TC_configData.configTimeInSec = seconds;
						
						
//						console.log(TC_configData);
						TC_appData.tcConfigData = TC_configData;
//						console.log(TC_appData);
						ExpTrackData.tcAppData = TC_appData
//						console.log(ExpTrackData);
						
						stop_timer();
						
						
					
		
						
					
						
					}else{
						
						alertify.alert("Alert","Please select all the fields");
						 $(".ajs-header").css("background-color","#ce6058");
						
					}
					
		 });
		 
		 
	
			$('#TC_TYwiringDiagram').on(
				'click', function() {
					
						var selectedType = $( "#trsmtrType option:selected" ).val();
		//				console.log(selectedType);
						connectionLevel(appId, selectedType);
						
							
				});
}

 
		   
			
							
							
			