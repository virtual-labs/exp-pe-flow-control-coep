
 $(function () {	

	 var FC_RightFault = [];
	 var FC_oldFault = 0;
	 
FC_FaultCheckFun = function(i2pType,lowerSpLevel, higherSpLevel, FColdreadingSorted, FCarr_actualValSorted, FCarr_stdValSorted) {
	
	
	
//	 console.log("arr true reading  sorted "+FColdreadingSorted);
//	 console.log("arr Actual values  sorted"+FCarr_actualValSorted);
//	 console.log("arr Standard values sorted"+FCarr_stdValSorted);
	
//	    index and related fault
//	   1 : impulse
//	   2 : saturation
//	   3 : fluctuate
//	   4 : Open Electrical Connection
	
//	FC_FaultIndexArr = [1,2,3,4] this index array is mentioned in FC_characterisationArr.js
	   
	    

	    
		
		
		var FC_faultName = '';
	
		
		if(FC_RightFault.length != 0 || FC_oldFault != 0){
			
			
			do {
				
				FC_fault = randomFault_FC(FC_FaultIndexArr);
				
				}
				while (FC_RightFault. indexOf(FC_fault) != -1 || FC_fault == FC_oldFault); 
			
						
		}else{
			
			FC_fault = randomFault_FC(FC_FaultIndexArr);
			
		}
		
		
		
		FC_oldFault = FC_fault;
		
		
		
//		console.log("FAULT "+FC_fault);
		
		
		FindFault_FC(FC_fault);
			
			

			
			 function randomFault_FC(FC_FaultIndexArr)
				{
				  
				return FC_FaultIndexArr[Math.floor(Math.random()*FC_FaultIndexArr.length)];
				     
				}
			 
			 function FindFault_FC(FC_fault){
				 
					var FC_faultAdd = '';
					
					FC_faultAdd +='<div class="container">'
						+'<div class="row">'
						+'<div class="col-md-12" id="FC_faultCkeck"  >'
						+'<h1>Identify FY 100 Fault </h1>'
						+'<h6>In this level detect the fault in FY 100</h6>'
						+'<p class="faultMsg">The Output of P/E Converter shown in the table Identify the Fault </p>'
						
						+'<div class="col-md-12" id="FC_FaultScroll"  >'
						//table start
						+ '<table id="FC_DataTable_IO" class="table table-striped table-bordered" style="width:100%">'
						+ '<thead>'
						+ '<tr>'
						+ '<th>Reading No.</th>'
						+ '<th>Input (in kg/cm²)</th>'
						+ '<th>Output (in mA)</th>'
						+ '</tr>'
						+ '</thead>'			
						+ '<tbody >'
						for (var i = 0; i < FCarr_actualValSorted.length ; i++ ) {
							FC_faultAdd += '<tr><td>'
						+ (i+1)
						+ '</td><td>'
						+ FColdreadingSorted[i]
						+ '</td>'
						
						if(FC_fault == 1){	
							
							FC_faultAdd +='<td>'
							+'-'+FCarr_stdValSorted[i]
							FC_faultAdd +='	</td>'
								
						}if(FC_fault == 2){
								
							FC_faultAdd +='<td>1.8</td>'
								
						}if(FC_fault == 3){
							
							
							FC_faultAdd +='<td>0</td>'

									
						}if(FC_fault == 4){
							
							if(i2pType == "direct"){
								
								 var random_num = randomNumber(1, 2);
									FC_faultAdd +='<td>'
									+random_num.toFixed(2);
									FC_faultAdd +='	</td>'
								
							}else{
								
								 var random_num = randomNumber(17, 18);
									FC_faultAdd +='<td>'
									+random_num.toFixed(2);
									FC_faultAdd +='	</td>'
							}
							
							
		
						}
						
						FC_faultAdd +='</tr>'
						
						
						
				}
				FC_faultAdd += '</tbody>'
			
						+ '</table>'
						//table end
						//fault ckeck div
						+ '<div class="form-group" style="margin:20px 0; font-size:15px; font-weight:bold;">'
						+ '<label for="sel1" >Detect Fault:</label>'
						+ '<select class="form-control"  id = "findFault_FC">'
						+ ' <option  value="-1">Detect Fault</option>'
						+ ' <option  value="1">The connections are interchanged </option>'
						+ '  <option value="2">The orifice in the input path of supply pressure is blocked</option>'
						+ '  <option value="3">Supply to LVDT is disconnected</option>'
						+ '  <option value="4">Supply pressure is less than specified rated pressure i.e. 1.4 kg/cm²</option>'
						+ '</select><br>'
						+ '<button id="FC_FindFault">Identify Fault</button>'
						+ ' </div>'
						+'</div>'
						
						
						+'</div>'
						+'</div>'
						+'</div>'
						
						$('#mainDiv').html('');
						$('#mainDiv').html(FC_faultAdd);
				

						stop_timer();
						set_timer();
						
						
						$('#FC_FindFault').on('click', function() {
							
							 var selectedFault  = $( "#findFault_FC option:selected" ).val();

							 
							 if (selectedFault == -1) {

								 alertify.alert('Alert',"Please select the fault type");
								 $(".ajs-header").css("background-color","#ce6058");

							 }else{
								 
								 if(selectedFault == FC_fault){
									 FC_faultcheckCnt = 0;
									 ExpTrackData.fcFaultDetectionCnt = FC_wrongFaultCnt;
									 
//									 console.log(ExpTrackData);
									 
									 FC_3FaultDetectionCnt++;
									 FC_RightFault.push(FC_fault);
									 
									 if(FC_3FaultDetectionCnt == 3){
										 
										 
										 minutes = document.getElementById("minutes").textContent;
							        	 seconds = document.getElementById("seconds").textContent;        		
//							        	 console.log(minutes+":"+seconds);
							        	 
							        	 ExpTrackData.fcFaultDetectionTimeInMin = minutes;
							        	 ExpTrackData.fcFaultDetectionTimeInSec = seconds;
//							        	 console.log(JSON.stringify(ExpTrackData));		
							        	 
//							        	 console.log(ExpTrackData);	
							        	 
							        	 stop_timer();
										 alertify.alert("Success","All fault detected successfully !!!");
										 $(".ajs-header").css("background-color","#4CAF50");
										 $('#mainDiv').html('');
											//$('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations!!!<br/> P/E Converter experiment is completed successfully!!</div></div>');
										 FCAnalysis_TransmitterDB();
									 }else{
										 alertify.alert("Success","Fault detection successful! Please detect another new fault");
										 $(".ajs-header").css("background-color","#4CAF50");
										 FC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, FColdreadingSorted, FCarr_actualValSorted, FCarr_stdValSorted);
									 }
									    
								 }else{
									 
									 FC_wrongFaultCnt++;
									 FC_faultcheckCnt++;
//									 console.log(FC_faultcheckCnt);
									 
									 if(FC_fault == 1){
										 FC_faultName = "The connections are interchanged";
									 }else if(FC_fault == 2){
										 FC_faultName = "The orifice in the input path of supply pressure is blocked";
									 }else if(FC_fault == 3){
										 FC_faultName = "Supply to LVDT is disconnected";
									 }else if(FC_fault == 4){
										 FC_faultName = "Supply pressure is less than specified rated pressure i.e. 1.4 kg/cm²";
									 }
									 
									 									

									 
									 
									 if(FC_faultcheckCnt == 2){
										 
										 alertify.alert('Alert',"Wrong Fault..\nThe fault was '"+ FC_faultName +".' \nPlease try again for new fault"); 
										 $(".ajs-header").css("background-color","#ce6058");
										 FC_faultcheckCnt = 0;
										 FC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, FColdreadingSorted, FCarr_actualValSorted, FCarr_stdValSorted);
										 
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