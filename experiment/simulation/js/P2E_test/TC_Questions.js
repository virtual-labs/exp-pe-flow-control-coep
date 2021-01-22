
$(function () {
showTC_Questions = function(appId){
	
		var flag = false;
	    var myRadio = null;
		
		$("#TestDiv").html('');
		
		var TC_questions = '';
		TC_questions +='<h4 align="center" class="QueHead">Temperature  Controller Questions</h4>'
			+'<div id = "questionDiv">'
				
				for(var i = 0; i < TC_QuestionsJSON.data["SEC"].length; i++){
				
				for(var j = 0; j < TC_QuestionsJSON.data["SEC"][0].QUES.length; j++){
					
					TC_questions +='<div class="col-md-12">'
						+'<br><span class="queno">Question No : '+(i+1)+'</span>'
						+'<br><div class="queTitle">'
						
						+TC_QuestionsJSON.data["SEC"][i].QUES[j].QC	
						+'</div>'
				
						for(var k = 0; k < TC_QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
							
							TC_questions +='<div>'
								+'<div class="ansTitle col-md-6">'
								
								+ "<input class='radioType' name='radio-"+i+"' id='"+i+"' ANSID='"+TC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID+"' type='radio'"
								+ "' value='"
								+TC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+ "' >"
								+'<p style="margin: -20px 0 8px 29px;">'
								+TC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+'</p>'
								
								+'</div>'
								+'</div>'
						}
						TC_questions +='</div>'
				}
			} 
				
				TC_questions += '<div class="buttonDiv">'
							+'<button id="testSubmit">Submit Test</button>'
//							+'<button id="reset">Reset</button>'
							+'<button id="TCnextLevel" hidden>Next Level</button>'
//							+'<button id="TCnextLevel" >Next Level</button>'
							+'</div>'
				
				
				
				+'</div>';
		
			
			$("#TestDiv").html(TC_questions);
		
		
	
	$('#testSubmit').on(
				'click', function() {
					
//					$("#nextLevel").prop("disabled", false);
					var arr = [];
				    var TC_testData = {};
					
						for(var i = 0; i < TC_QuestionsJSON.data["SEC"].length; i++){
							
//							for(var j = 0; j < TC_QuestionsJSON.data["SEC"][0].QUES.length; j++){
								
//									for(var k = 0; k < TC_QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
										
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
						
					
						
						TC_testData.appId = appId;
						TC_testData.rightQuesCnt = ansCount;
					//	console.log(TC_testData);
						TC_appData.tcTestData = TC_testData
					//	console.log(TC_appData);
						ExpTrackData.tcAppData = TC_appData
//						console.log(ExpTrackData);
						
					
						alertify.alert("Test Submitted Successfully </br>Correct Answers Are  "+ansCount);
						$("#TCnextLevel").prop("hidden", false);
						}	
				});
	
	$('#TCnextLevel').on(
				'click', function() {
					window.scrollTo(0,0);
					if(myRadio != null){
						
						//	connectionLevel(appId);
						$("#TestDiv").html('');
						var digramInstruction = '';
						digramInstruction +='<div id="instructionDiv">'
							+'<div class="row">'
							+'<div class="col-md-12" >'
							+'<h4>Temperature  Control System</h4>'
							+'<div class="infoInst">To Configure TY 101 Click The Red Button Shown In Figure</div>'
							+'</div></div</div>'
						$("#TestDiv").html(digramInstruction);
						
						
						P2ETYCircle.attr({'stroke':'black', 'stroke-width':'1', 'fill':'red', 'cursor':'pointer'});
						 glowTY = P2ETYCircle.glow({
						    color: 'black',
							width: 2
						});
    
						animTY = Raphael.animation({
						"stroke-width": 8,
						opacity: 1
						}, 500);
						animTY = animTY.repeat(Infinity);
						glowTY.animate(animTY);
						
						P2ETYCircle.click(TYClick);
						
					}else{
						
						alertify.alert("Please Submit The Test");
					}
					
					
							
				});
				
				
    TYClick = function(){
	
	   TC_ConfigureTY(appId);
	
    }			
}
});
 
		   
			
							
							
			