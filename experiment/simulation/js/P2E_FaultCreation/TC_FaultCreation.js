
 $(function () {	

	 var TC_RightFault = [];
	 var TC_oldFault = 0;
	 
TC_FaultCheckFun = function(i2pType,lowerSpLevel, higherSpLevel, TColdreadingSorted, TCarr_actualValSorted, TCarr_stdValSorted) {
	
	
	
//	 console.log("arr true reading  sorted "+TColdreadingSorted);
//	 console.log("arr Actual values  sorted"+TCarr_actualValSorted);
//	 console.log("arr Standard values sorted"+TCarr_stdValSorted);
	
//	    index and related fault
//	   1 : impulse
//	   2 : saturation
//	   3 : fluctuate
//	   4 : Open Electrical Connection
	
//	TC_FaultIndexArr = [1,2,3,4] this index array is mentioned in TC_characterisationArr.js
	   
	    

	    
		
		
		var TC_faultName = '';
	
		
		if(TC_RightFault.length != 0 || TC_oldFault != 0){
			
			
			do {
				
				TC_fault = randomFault_TC(TC_FaultIndexArr);
				
				}
				while (TC_RightFault. indexOf(TC_fault) != -1 || TC_fault == TC_oldFault); 
			
						
		}else{
			
			TC_fault = randomFault_TC(TC_FaultIndexArr);
			
		}
		
		
		
		TC_oldFault = TC_fault;
		
		
		
//		console.log("FAULT "+TC_fault);
		
		
		FindFault_TC(TC_fault);
			
			

			
			 function randomFault_TC(TC_FaultIndexArr)
				{
				  
				return TC_FaultIndexArr[Math.floor(Math.random()*TC_FaultIndexArr.length)];
				     
				}
			 
			 function FindFault_TC(TC_fault){
				 
					var TC_faultAdd = '';
					
					TC_faultAdd +='<div class="container">'
						+'<div class="row">'
						+'<div class="col-md-12" id="TC_faultCkeck"  >'
						+'<h1>Identify TY 100 Fault </h1>'
						+'<h6>In this level detect the fault in TY 100</h6>'
						+'<p class="faultMsg">The Output of P/E Converter shown in the table Identify the Fault </p>'
						
						+'<div class="col-md-12" id="TC_FaultScroll"  >'
						//table start
						+ '<table id="TC_DataTable_IO" class="table table-striped table-bordered" style="width:100%">'
						+ '<thead>'
						+ '<tr>'
						+ '<th>Reading No.</th>'
						+ '<th>Input (in kg/cm²)</th>'
						+ '<th>Output (in mA)</th>'
						+ '</tr>'
						+ '</thead>'			
						+ '<tbody >'
						for (var i = 0; i < TCarr_actualValSorted.length ; i++ ) {
							TC_faultAdd += '<tr><td>'
						+ (i+1)
						+ '</td><td>'
						+ TColdreadingSorted[i]
						+ '</td>'
						
						if(TC_fault == 1){	
							
							TC_faultAdd +='<td>'
							+'-'+TCarr_stdValSorted[i]
							TC_faultAdd +='	</td>'
								
						}if(TC_fault == 2){
								
							TC_faultAdd +='<td>1.8</td>'
								
						}if(TC_fault == 3){
							
							
							TC_faultAdd +='<td>0</td>'

									
						}if(TC_fault == 4){
							
							if(i2pType == "direct"){
								
								 var random_num = randomNumber(1, 2);
									TC_faultAdd +='<td>'
									+random_num.toFixed(2);
									TC_faultAdd +='	</td>'
								
							}else{
								
								 var random_num = randomNumber(17, 18);
									TC_faultAdd +='<td>'
									+random_num.toFixed(2);
									TC_faultAdd +='	</td>'
							}
							
							
		
						}
						
						TC_faultAdd +='</tr>'
						
						
						
				}
				TC_faultAdd += '</tbody>'
			
						+ '</table>'
						//table end
						//fault ckeck div
						+ '<div class="form-group" style="margin:20px 0; font-size:15px; font-weight:bold;">'
						+ '<label for="sel1" >Detect Fault:</label>'
						+ '<select class="form-control"  id = "findFault_TC">'
						+ ' <option  value="-1">Detect Fault</option>'
						+ ' <option  value="1">The connections are interchanged </option>'
						+ '  <option value="2">The orifice in the input path of supply pressure is blocked</option>'
						+ '  <option value="3">Supply to LVDT is disconnected</option>'
						+ '  <option value="4">Supply pressure is less than specified rated pressure i.e. 1.4 kg/cm²</option>'
						+ '</select><br>'
						+ '<button id="TC_FindFault">Identify Fault</button>'
						+ ' </div>'
						+'</div>'
						
						
						+'</div>'
						+'</div>'
						+'</div>'
						
						$('#mainDiv').html('');
						$('#mainDiv').html(TC_faultAdd);
				

						
						
						$('#TC_FindFault').on('click', function() {
							
							 var selectedFault  = $( "#findFault_TC option:selected" ).val();

							 
							 if (selectedFault == -1) {

								 alertify.alert("Please select the fault type");

							 }else{
								 
								 if(selectedFault == TC_fault){
									 TC_faultcheckCnt = 0;
									 ExpTrackData.tcFaultDetectionCnt = TC_wrongFaultCnt;
									 
//									 console.log(ExpTrackData);
									 
									 TC_3FaultDetectionCnt++;
									 TC_RightFault.push(TC_fault);
									 
									 if(TC_3FaultDetectionCnt == 3){
										 alertify.alert("All fault detected successfully !!!");
										 $('#mainDiv').html('');
										 $('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations!!!<br/> P/E Converter experiment is completed successfully!!</div></div>');
										 
									 }else{
										 alertify.alert("Fault detection successful! Please detect another new fault");
										 TC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, TColdreadingSorted, TCarr_actualValSorted, TCarr_stdValSorted);
									 }
									    
								 }else{
									 
									 TC_wrongFaultCnt++;
									 TC_faultcheckCnt++;
//									 console.log(TC_faultcheckCnt);
									 
									 if(TC_fault == 1){
										 TC_faultName = "The connections are interchanged";
									 }else if(TC_fault == 2){
										 TC_faultName = "The orifice in the input path of supply pressure is blocked";
									 }else if(TC_fault == 3){
										 TC_faultName = "Supply to LVDT is disconnected";
									 }else if(TC_fault == 4){
										 TC_faultName = "Supply pressure is less than specified rated pressure i.e. 1.4 kg/cm²";
									 }
									 
									 									

									 
									 
									 if(TC_faultcheckCnt == 2){
										 
										 alertify.alert("Wrong Fault..\nThe fault was '"+ TC_faultName +".' \nPlease try again for new fault"); 
										 TC_faultcheckCnt = 0;
										 TC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, TColdreadingSorted, TCarr_actualValSorted, TCarr_stdValSorted);
										 
									 }else{
										 alertify.alert("Wrong fault...Please try again  !!!");
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