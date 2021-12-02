
 $(function () {	

	 var PC_RightFault = [];
	 var PC_oldFault = 0;
	 
PC_FaultCheckFun = function(i2pType,lowerSpLevel, higherSpLevel, PColdreadingSorted, PCarr_actualValSorted, PCarr_stdValSorted) {
	
	
	
//	 console.log("arr true reading  sorted "+PColdreadingSorted);
//	 console.log("arr Actual values  sorted"+PCarr_actualValSorted);
//	 console.log("arr Standard values sorted"+PCarr_stdValSorted);
	
//	    index and related fault
//	   1 : impulse
//	   2 : saturation
//	   3 : fluctuate
//	   4 : Open Electrical Connection
	
//	PC_FaultIndexArr = [1,2,3,4] this index array is mentioned in PC_characterisationArr.js
	   
	    

	    
		
		
		var PC_faultName = '';
	
		
		if(PC_RightFault.length != 0 || PC_oldFault != 0){
			
			
			do {
				
				PC_fault = randomFault_PC(PC_FaultIndexArr);
				
				}
				while (PC_RightFault. indexOf(PC_fault) != -1 || PC_fault == PC_oldFault); 
			
						
		}else{
			
			PC_fault = randomFault_PC(PC_FaultIndexArr);
			
		}
		
		
		
		PC_oldFault = PC_fault;
		
		
		
//		console.log("FAULT "+PC_fault);
		
		
		FindFault_PC(PC_fault);
			
			

			
			 function randomFault_PC(PC_FaultIndexArr)
				{
				  
				return PC_FaultIndexArr[Math.floor(Math.random()*PC_FaultIndexArr.length)];
				     
				}
			 
			 function FindFault_PC(PC_fault){
				 
					var PC_faultAdd = '';
					
					PC_faultAdd +='<div class="container">'
						+'<div class="row">'
						+'<div class="col-md-12" id="PC_faultCkeck"  >'
						+'<h1>Identify PY 100 Fault </h1>'
						+'<h6>In this level detect the fault in PY 100</h6>'
						+'<p class="faultMsg">The Output of P/E Converter shown in the table Identify the Fault </p>'
						
						+'<div class="col-md-12" id="PC_FaultScroll"  >'
						//table start
						+ '<table id="PC_DataTable_IO" class="table table-striped table-bordered" style="width:100%">'
						+ '<thead>'
						+ '<tr>'
						+ '<th>Reading No.</th>'
						+ '<th>Input (in kg/cm²)</th>'
						+ '<th>Output (in mA)</th>'
						+ '</tr>'
						+ '</thead>'			
						+ '<tbody >'
						for (var i = 0; i < PCarr_actualValSorted.length ; i++ ) {
							PC_faultAdd += '<tr><td>'
						+ (i+1)
						+ '</td><td>'
						+ PColdreadingSorted[i]
						+ '</td>'
						
						if(PC_fault == 1){	
							
							PC_faultAdd +='<td>'
							+'-'+PCarr_stdValSorted[i]
							PC_faultAdd +='	</td>'
								
						}if(PC_fault == 2){
								
							PC_faultAdd +='<td>1.8</td>'
								
						}if(PC_fault == 3){
							
							
							PC_faultAdd +='<td>0</td>'

									
						}if(PC_fault == 4){
							
							if(i2pType == "direct"){
								
								 var random_num = randomNumber(1, 2);
									PC_faultAdd +='<td>'
									+random_num.toFixed(2);
									PC_faultAdd +='	</td>'
								
							}else{
								
								 var random_num = randomNumber(17, 18);
									PC_faultAdd +='<td>'
									+random_num.toFixed(2);
									PC_faultAdd +='	</td>'
							}
							
							
		
						}
						
						PC_faultAdd +='</tr>'
						
						
						
				}
				PC_faultAdd += '</tbody>'
			
						+ '</table>'
						//table end
						//fault ckeck div
						+ '<div class="form-group" style="margin:20px 0; font-size:15px; font-weight:bold;">'
						+ '<label for="sel1" >Detect Fault:</label>'
						+ '<select class="form-control"  id = "findFault_PC">'
						+ ' <option  value="-1">Detect Fault</option>'
						+ ' <option  value="1">The connections are interchanged </option>'
						+ '  <option value="2">The orifice in the input path of supply pressure is blocked</option>'
						+ '  <option value="3">Supply to LVDT is disconnected</option>'
						+ '  <option value="4">Supply pressure is less than specified rated pressure i.e. 1.4 kg/cm²</option>'
						+ '</select><br>'
						+ '<button id="PC_FindFault">Identify Fault</button>'
						+ ' </div>'
						+'</div>'
						
						
						+'</div>'
						+'</div>'
						+'</div>'
						
						$('#mainDiv').html('');
						$('#mainDiv').html(PC_faultAdd);
				

						stop_timer();
						set_timer();
						
						$('#PC_FindFault').on('click', function() {
							
							 var selectedFault  = $( "#findFault_PC option:selected" ).val();

							 
							 if (selectedFault == -1) {

								 alertify.alert('Alert',"Please select the fault type");
								 $(".ajs-header").css("background-color","#ce6058");

							 }else{
								 
								 if(selectedFault == PC_fault){
									 PC_faultcheckCnt = 0;
									 ExpTrackData.pcFaultDetectionCnt = PC_wrongFaultCnt;
									 
//									 console.log(ExpTrackData);
									 
									 PC_3FaultDetectionCnt++;
									 PC_RightFault.push(PC_fault);
									 
									 if(PC_3FaultDetectionCnt == 3){
										 
										 minutes = document.getElementById("minutes").textContent;
							        	 seconds = document.getElementById("seconds").textContent;        		
//							        	 console.log(minutes+":"+seconds);
							        	 
							        	 ExpTrackData.pcFaultDetectionTimeInMin = minutes;
							        	 ExpTrackData.pcFaultDetectionTimeInSec = seconds;
//							        	 console.log(JSON.stringify(ExpTrackData));	
							        	 
//							        	 console.log(ExpTrackData);
							        	 
							        	 stop_timer();
										 alertify.alert('Success',"All fault detected successfully !!!");
										 $(".ajs-header").css("background-color","#4CAF50");
										 $('#mainDiv').html('');
										// $('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations!!!<br/> P/E Converter experiment is completed successfully!!</div></div>');
										 PCAnalysis_TransmitterDB();
									 }else{
										 alertify.alert('Success',"Fault detection successful! Please detect another new fault");
										 $(".ajs-header").css("background-color","#4CAF50");
										 PC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, PColdreadingSorted, PCarr_actualValSorted, PCarr_stdValSorted);
									 }
									    
								 }else{
									 
									 PC_wrongFaultCnt++;
									 PC_faultcheckCnt++;
//									 console.log(PC_faultcheckCnt);
									 
									 if(PC_fault == 1){
										 PC_faultName = "The connections are interchanged";
									 }else if(PC_fault == 2){
										 PC_faultName = "The orifice in the input path of supply pressure is blocked";
									 }else if(PC_fault == 3){
										 PC_faultName = "Supply to LVDT is disconnected";
									 }else if(PC_fault == 4){
										 PC_faultName = "Supply pressure is less than specified rated pressure i.e. 1.4 kg/cm²";
									 }
									 
									 									

									 
									 
									 if(PC_faultcheckCnt == 2){
										 
										 alertify.alert('Alert',"Wrong Fault..\nThe fault was '"+ PC_faultName +".' \nPlease try again for new fault"); 
										 $(".ajs-header").css("background-color","#ce6058");
										 PC_faultcheckCnt = 0;
										 PC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, PColdreadingSorted, PCarr_actualValSorted, PCarr_stdValSorted);
										 
									 }else{
										 alertify.alert('Alert',"Wrong fault...Please try again  !!!");
										 $(".ajs-header").css("background-color","#ce6058");
									 }
									
								 }
								 
							 }
							 
							 
							 
							 
							 
						});
				 
			 }
			 
			 
	
}



function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}


 });