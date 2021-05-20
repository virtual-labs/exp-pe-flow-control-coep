
 $(function () {	

	 var LC_RightFault = [];
	 var LC_oldFault = 0;
	 
LC_FaultCheckFun = function(i2pType,lowerSpLevel, higherSpLevel, LColdreadingSorted, LCarr_actualValSorted, LCarr_stdValSorted) {
	
	
	
//	 console.log("arr true reading  sorted "+LColdreadingSorted);
//	 console.log("arr Actual values  sorted"+LCarr_actualValSorted);
//	 console.log("arr Standard values sorted"+LCarr_stdValSorted);
	
//	    index and related fault
//	   1 : impulse
//	   2 : saturation
//	   3 : fluctuate
//	   4 : Open Electrical Connection
	
//	LC_FaultIndexArr = [1,2,3,4] this index array is mentioned in LC_characterisationArr.js
	   
	    

	    
		
		
		var LC_faultName = '';
	
		
		if(LC_RightFault.length != 0 || LC_oldFault != 0){
			
			
			do {
				
				LC_fault = randomFault_LC(LC_FaultIndexArr);
				
				}
				while (LC_RightFault. indexOf(LC_fault) != -1 || LC_fault == LC_oldFault); 
			
						
		}else{
			
			LC_fault = randomFault_LC(LC_FaultIndexArr);
			
		}
		
		
		
		LC_oldFault = LC_fault;
		
		
		
//		console.log("FAULT "+LC_fault);
		
		
		FindFault_LC(LC_fault);
			
			

			
			 function randomFault_LC(LC_FaultIndexArr)
				{
				  
				return LC_FaultIndexArr[Math.floor(Math.random()*LC_FaultIndexArr.length)];
				     
				}
			 
			 function FindFault_LC(LC_fault){
				 
					var LC_faultAdd = '';
					
					LC_faultAdd +='<div class="container">'
						+'<div class="row">'
						+'<div class="col-md-12" id="LC_faultCkeck"  >'
						+'<h1>Identify LY 100 Fault </h1>'
						+'<h6>In this level detect the fault in LY 100</h6>'
						+'<p class="faultMsg">The Output of P/E Converter shown in the table Identify the Fault </p>'
						
						+'<div class="col-md-12" id="LC_FaultScroll"  >'
						//table start
						+ '<table id="LC_DataTable_IO" class="table table-striped table-bordered" style="width:100%">'
						+ '<thead>'
						+ '<tr>'
						+ '<th>Reading No.</th>'
						+ '<th>Input (in kg/cm²)</th>'
						+ '<th>Output (in mA)</th>'
						+ '</tr>'
						+ '</thead>'			
						+ '<tbody >'
						for (var i = 0; i < LCarr_actualValSorted.length ; i++ ) {
							LC_faultAdd += '<tr><td>'
						+ (i+1)
						+ '</td><td>'
						+ LColdreadingSorted[i]
						+ '</td>'
						
						if(LC_fault == 1){	
							
							LC_faultAdd +='<td>'
							+'-'+LCarr_stdValSorted[i]
							LC_faultAdd +='	</td>'
								
						}if(LC_fault == 2){
								
							LC_faultAdd +='<td>1.8</td>'
								
						}if(LC_fault == 3){
							
							
							LC_faultAdd +='<td>0</td>'

									
						}if(LC_fault == 4){
							
							if(i2pType == "direct"){
								
								 var random_num = randomNumber(1, 2);
									LC_faultAdd +='<td>'
									+random_num.toFixed(2);
									LC_faultAdd +='	</td>'
								
							}else{
								
								 var random_num = randomNumber(17, 18);
									LC_faultAdd +='<td>'
									+random_num.toFixed(2);
									LC_faultAdd +='	</td>'
							}
							
							
		
						}
						
						LC_faultAdd +='</tr>'
						
						
						
				}
				LC_faultAdd += '</tbody>'
			
						+ '</table>'
						//table end
						//fault ckeck div
						+ '<div class="form-group" style="margin:20px 0; font-size:15px; font-weight:bold;">'
						+ '<label for="sel1" >Detect Fault:</label>'
						+ '<select class="form-control"  id = "findFault_LC">'
						+ ' <option  value="-1">Detect Fault</option>'
						+ ' <option  value="1">The connections are interchanged </option>'
						+ '  <option value="2">The orifice in the input path of supply pressure is blocked</option>'
						+ '  <option value="3">Supply to LVDT is disconnected</option>'
						+ '  <option value="4">Supply pressure is less than specified rated pressure i.e. 1.4 kg/cm²</option>'
						+ '</select><br>'
						+ '<button id="LC_FindFault">Identify Fault</button>'
						+ ' </div>'
						+'</div>'
						
						
						+'</div>'
						+'</div>'
						+'</div>'
						
						$('#mainDiv').html('');
						$('#mainDiv').html(LC_faultAdd);
				

						
						
						$('#LC_FindFault').on('click', function() {
							
							 var selectedFault  = $( "#findFault_LC option:selected" ).val();

							 
							 if (selectedFault == -1) {

								 alertify.alert("Please select the fault type");

							 }else{
								 
								 if(selectedFault == LC_fault){
									 LC_faultcheckCnt = 0;
									 ExpTrackData.lcFaultDetectionCnt = LC_wrongFaultCnt;
									 
//									 console.log(ExpTrackData);
									 
									 LC_3FaultDetectionCnt++;
									 LC_RightFault.push(LC_fault);
									 
									 if(LC_3FaultDetectionCnt == 3){
										 alertify.alert("All fault detected successfully !!!");
										 $('#mainDiv').html('');
										 $('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations!!!<br/> P/E Converter experiment is completed successfully!!</div></div>');
										 
									 }else{
										 alertify.alert("Fault detection successful! Please detect another new fault");
										 LC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, LColdreadingSorted, LCarr_actualValSorted, LCarr_stdValSorted);
									 }
									    
								 }else{
									 
									 LC_wrongFaultCnt++;
									 LC_faultcheckCnt++;
//									 console.log(LC_faultcheckCnt);
									 
									 if(LC_fault == 1){
										 LC_faultName = "The connections are interchanged";
									 }else if(LC_fault == 2){
										 LC_faultName = "The orifice in the input path of supply pressure is blocked";
									 }else if(LC_fault == 3){
										 LC_faultName = "Supply to LVDT is disconnected";
									 }else if(LC_fault == 4){
										 LC_faultName = "Supply pressure is less than specified rated pressure i.e. 1.4 kg/cm²";
									 }
									 
									 									

									 
									 
									 if(LC_faultcheckCnt == 2){
										 
										 alertify.alert("Wrong Fault..\nThe fault was '"+ LC_faultName +".' \nPlease try again for new fault"); 
										 LC_faultcheckCnt = 0;
										 LC_FaultCheckFun(i2pType,lowerSpLevel, higherSpLevel, LColdreadingSorted, LCarr_actualValSorted, LCarr_stdValSorted);
										 
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