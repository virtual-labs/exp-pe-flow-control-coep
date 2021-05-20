
$(function () {
showPC_Questions = function(appId){
	
	
		var flag = false;
		var myRadio = null;
		
		$("#TestDiv").html('');
		
		var PC_questions = '';
		PC_questions +='<h4 align="center" class="QueHead">Pressure Controller Questions</h4>'
			+'<div id = "questionDiv">'
				
				for(var i = 0; i < PC_QuestionsJSON.data["SEC"].length; i++){
				
				for(var j = 0; j < PC_QuestionsJSON.data["SEC"][0].QUES.length; j++){
					
					PC_questions +='<div class="col-md-12">'
						+'<br><span class="queno">Question No : '+(i+1)+'</span>'
						+'<br><div class="queTitle">'
						
						+PC_QuestionsJSON.data["SEC"][i].QUES[j].QC	
						+'</div>'
				
						for(var k = 0; k < PC_QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
							
							PC_questions +='<div>'
								+'<div class="ansTitle col-md-6">'
								
								+ "<input class='radioType' name='radio-"+i+"' id='"+i+"' ANSID='"+PC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID+"' type='radio'"
								+ "' value='"
								+PC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+ "' >"
								+'<p style="margin: -20px 0 8px 29px;">'
								+PC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+'</p>'
								
								+'</div>'
								+'</div>'
						}
						PC_questions +='</div>'
				}
			} 
				
				PC_questions += '<div class="buttonDiv">'
							+'<button id="testSubmit">Submit Test</button>'
//							+'<button id="reset">Reset</button>'
							+'<button id="PCnextLevel" hidden>Next Level</button>'
//							+'<button id="PCnextLevel" >Next Level</button>'
							+'</div>'
				
				
				
				+'</div>';
		
			
			$("#TestDiv").html(PC_questions);
		
		
	
	$('#testSubmit').on(
				'click', function() {
					
					// $("#LCnextLevel").prop("disabled", false);
					var arr = [];
					 var PC_testData = {};	
						for(var i = 0; i < PC_QuestionsJSON.data["SEC"].length; i++){
							
//							for(var j = 0; j < PC_QuestionsJSON.data["SEC"][0].QUES.length; j++){
								
//									for(var k = 0; k < PC_QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
										
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
						
						PC_testData.appId = appId;
						PC_testData.rightQuesCnt = ansCount;
					//	console.log(PC_testData);
						PC_appData.pcTestData = PC_testData
					//	console.log(PC_appData);
						ExpTrackData.pcAppData = PC_testData
//						console.log(ExpTrackData);
						
						alertify.alert("Test Submitted Successfully </br>Correct Answers Are  "+ansCount);
						$("#PCnextLevel").prop("hidden", false);
						}
							
				});
	
	$('#PCnextLevel').on(
				'click', function() {
					window.scrollTo(0,0);
					if(myRadio != null){
						
					//	connectionLevel(appId);
						$("#TestDiv").html('');
						var digramInstruction = '';
						digramInstruction +='<div id="instructionDiv">'
							+'<div class="row">'
							+'<div class="col-md-12" >'
							+'<h4>Pressure Control  System</h4>'
							+'<div class="infoInst">To Configure PY 101 Click The Red Button Shown In Figure</div>'
							+'</div></div</div>'
						$("#TestDiv").html(digramInstruction);
						
						
						P2EPYCircle.attr({'stroke':'black', 'stroke-width':'1', 'fill':'red', 'cursor':'pointer'});
						 glowPY = P2EPYCircle.glow({
						    color: 'black',
							width: 2
						});
    
						animPY = Raphael.animation({
						"stroke-width": 8,
						opacity: 1
						}, 500);
						animPY = animPY.repeat(Infinity);
						glowPY.animate(animPY);
						
						P2EPYCircle.click(PYClick);
						
					}else{
						
						alertify.alert("Please Submit The Test");
					}
					
					
							
	
	});
	
	PYClick = function(){
	
	PC_ConfigurePY(appId);
	
    }
}


});
 
		   
			
							
							
			