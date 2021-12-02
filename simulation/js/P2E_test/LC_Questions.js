
$(function () {
showLC_Questions = function(appId){
	
	
		var flag = false;
		var myRadio = null;
		
		$("#TestDiv").html('');
		
		var LC_questions = '';
		LC_questions +='<h4 align="center" class="QueHead">Level Control System Questions</h4>'
			+'<div id = "questionDiv">'
				
				
				for(var i = 0; i < LC_QuestionsJSON.data["SEC"].length; i++){
				
				for(var j = 0; j < LC_QuestionsJSON.data["SEC"][0].QUES.length; j++){
					
					LC_questions +='<div class="col-md-12">'
						+'<br><span class="queno">Question No : '+(i+1)+'</span>'
						+'<br><div class="queTitle">'
						
						+LC_QuestionsJSON.data["SEC"][i].QUES[j].QC	
						+'</div>'
				
						for(var k = 0; k < LC_QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
							
							LC_questions +='<div>'
								+'<div class="ansTitle col-md-6">'
								
								+ "<input class='radioType' name='radio-"+i+"' id='"+i+"' ANSID='"+LC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].ANSID+"' type='radio'"
								+ "' value='"
								+LC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+ "' >"
								+'<p style="margin: -20px 0 8px 29px;">'
								+LC_QuestionsJSON.data["SEC"][i].QUES[j].ANS[k].content	
								+'</p>'
								
								+'</div>'
								+'</div>'
						}
						LC_questions +='</div>'
				}
			} 
				
				LC_questions += '<div class="buttonDiv">'
							+'<button id="testSubmit">Submit Test</button>'
//							+'<button id="reset">Reset</button>'
							+'<button id="LCnextLevel" hidden >Next Level</button>'
//							+'<button id="LCnextLevel"  >Next Level</button>'
							+'</div>'
				
				
				
				+'</div>';
		
			
			$("#TestDiv").html(LC_questions);
		
			stop_timer();
			set_timer();
	
	$('#testSubmit').on(
				'click', function() {
					
					// $("#LCnextLevel").prop("disabled", false);
					var arr = [];
					var LC_testData = {};
						
						for(var i = 0; i < LC_QuestionsJSON.data["SEC"].length; i++){
							
//							for(var j = 0; j < LC_QuestionsJSON.data["SEC"][0].QUES.length; j++){
								
//									for(var k = 0; k < LC_QuestionsJSON.data["SEC"][i].QUES[j].ANS.length; k++){
										
										var qid = $('input[name=radio-' + i+ ']').attr(
										'id');
										
										var ansId =  $('input[name=radio-' + i + ']:checked').attr(
										'ANSID');
										
										 myRadio = $(
												'input[name=radio-' + i + ']:checked')
												.val();
										
										if (myRadio == null) {
											flag = flag && false;
											alertify.alert('Alert','Please attempt all the questions');
											$(".ajs-header").css("background-color","#ce6058");
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
						
						
						minutes = document.getElementById("minutes").textContent;
		        		seconds = document.getElementById("seconds").textContent;        		
//		        		console.log(minutes+":"+seconds);
		        		
		        		
						
						LC_testData.appId = appId;
						LC_testData.rightQuesCnt = ansCount;
						LC_testData.TesttimeinMin = minutes;
						LC_testData.TesttimeinSec = seconds;
					//	console.log(LC_testData);
						LC_appData.lcTestData = LC_testData
					//	console.log(LC_appData);
						ExpTrackData.lcAppData = LC_appData
					//	console.log(ExpTrackData);
						
						stop_timer();
						alertify.alert("Success","Test Submitted Successfully <br/>Correct Answers Are  "+ansCount);
						 $(".ajs-header").css("background-color","#4CAF50");
						$("#LCnextLevel").prop("hidden", false);
						}
							
				});
	
	$('#LCnextLevel').on(
				'click', function() {
					window.scrollTo(0,0);
					if(myRadio != null){
						
					//	connectionLevel(appId);
						$("#TestDiv").html('');
						var digramInstruction = '';
						digramInstruction +='<div id="instructionDiv">'
							+'<div class="row">'
							+'<div class="col-md-12" >'
							+'<h4>Level Control System</h4>'
							+'<div class="infoInst">To Configure LY 101 Click The Red Button Shown In Figure</div>'
							+'</div></div</div>'
						$("#TestDiv").html(digramInstruction);
						
						P2ELYCircle.attr({'stroke':'black', 'stroke-width':'1', 'fill':'red', 'cursor':'pointer'});
						 glowLY = P2ELYCircle.glow({
						    color: 'black',
							width: 2
						});
    
						animLY = Raphael.animation({
						"stroke-width": 8,
						opacity: 1
						}, 500);
						animLY = animLY.repeat(Infinity);
						glowLY.animate(animLY);
						
						P2ELYCircle.click(LYClick);
						
					}else{
						
						alertify.alert("Alert","Please Submit The Test");
						 $(".ajs-header").css("background-color","#ce6058");
					}
					
					
							
	
	});
	
	LYClick = function(){
	
	LC_ConfigureLY(appId);
	
    }
}


});
 
		   
			
							
							
			