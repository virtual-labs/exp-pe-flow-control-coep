
$(function () {
showFC_Questions = function(appId){
	
	
		var flag = false;
		var myRadio = null;
		
		$("#TestDiv").html('');
		
		var FC_questions = '';
		FC_questions +='<h4 align="center" class="QueHead">Flow Controller Questions</h4>'
			+'<div id = "questionDiv">'
				
				for(var i = 0; i < FC_QuestionsJSON.data["SEC"].length; i++){
				
				for(var j = 0; j < FC_QuestionsJSON.data["SEC"][0].QUES.length; j++){
					
					FC_questions +='<div class="col-md-12">'
						+'<br><span class="queno">Question No : '+(i+1)+'</span>'
						+'<br><div class="queTitle">'
						
						+FC_QuestionsJSON.data["SEC"][i].QUES[j].QC	
						+'</div>'
				
						for(var k = 0; k < FC_QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
							
							FC_questions +='<div>'
								+'<div class="ansTitle col-md-6">'
								
								+ "<input class='radioType' name='radio-"+i+"' id='"+i+"' ANSID='"+FC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID+"' type='radio'"
								+ "' value='"
								+FC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+ "' >"
								+'<p style="margin: -20px 0 8px 29px;">'
								+FC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+'</p>'
								
								+'</div>'
								+'</div>'
						}
						FC_questions +='</div>'
				}
			} 
				
				FC_questions += '<div class="buttonDiv">'
							+'<button id="testSubmit">Submit Test</button>'
//							+'<button id="reset">Reset</button>'
							+'<button id="FCnextLevel" hidden >Next Level</button>'
//							+'<button id="FCnextLevel"  >Next Level</button>'
							+'</div>'
				
				
				
				+'</div>';
		
			
			$("#TestDiv").html(FC_questions);
		
		
	
	$('#testSubmit').on(
				'click', function() {
					
					// $("#LCnextLevel").prop("disabled", false);
					var arr = [];
					var FC_testData = {};
						for(var i = 0; i < FC_QuestionsJSON.data["SEC"].length; i++){
							
//							for(var j = 0; j < FC_QuestionsJSON.data["SEC"][0].QUES.length; j++){
								
//									for(var k = 0; k < FC_QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
										
										var qid = $('input[name=radio-' + i+ ']').attr(
										'id');
										
										var ansId =  $('input[name=radio-' + i + ']:checked').attr(
										'ANSID');
										
										 myRadio = $(
												'input[name=radio-' + i + ']:checked')
												.val();
										
										if (myRadio == null) {
											flag = flag && false;
											alertify.alert('Please attempt all the questions');
											break;
										}
										arr.push({
											"QID" : qid,
											"ANS" : myRadio,
											"ANSId" : ansId
										});
//									}
//							  }
						}
						
					//	console.log(arr);
						var ansCount = 0;
						
						if(myRadio != null){
						for (var i = 0; i < arr.length; i++) {
							if(arr[i].ANSId ==  "true"){
								ansCount++;
							}else{
								
							}
						}
						
						FC_testData.appId = appId;
						FC_testData.rightQuesCnt = ansCount;
					//	console.log(FC_testData);
						FC_appData.fcTestData = FC_testData
					//	console.log(FC_appData);
					    ExpTrackData.fcAppData = FC_appData
//						console.log(ExpTrackData);
						
						alertify.alert("Test Submitted Successfully <br/>Correct Answers Are  "+ansCount);
						$("#FCnextLevel").prop("hidden", false);
						}
							
				});
	
	$('#FCnextLevel').on(
				'click', function() {
					window.scrollTo(0,0);
					if(myRadio != null){
						
					//	connectionLevel(appId);
						$("#TestDiv").html('');
						var digramInstruction = '';
						digramInstruction +='<div id="instructionDiv">'
							+'<div class="row">'
							+'<div class="col-md-12" >'
							+'<h4>Flow Control System</h4>'
							+'<div class="infoInst">To Configure FY 101 Click The Red Button Shown In Figure</div>'
							+'</div></div</div>'
						$("#TestDiv").html(digramInstruction);
						
						
						P2EFYCircle.attr({'stroke':'black', 'stroke-width':'1', 'fill':'red', 'cursor':'pointer'});
						 glowFY = P2EFYCircle.glow({
						    color: 'black',
							width: 2
						});
    
						animFY = Raphael.animation({
						"stroke-width": 8,
						opacity: 1
						}, 500);
						animFY = animFY.repeat(Infinity);
						glowFY.animate(animFY);
						
						P2EFYCircle.click(FYClick);
						
					}else{
						
						alertify.alert("Please Submit The Test");
					}
					
					
							
	
	});
	
	FYClick = function(){
	
	FC_ConfigureFY(appId);
	
    }
}


});
 
		   
			
							
							
			