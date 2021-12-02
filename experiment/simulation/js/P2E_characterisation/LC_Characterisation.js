//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.LC_Characterisation = function(appId, i2pType) {
	
 LC_Characterisation = function(appId, i2pType){
	 
	 var outputValue = 0;
	 var inputValue = 0;
	$("#submit_LC_WaterLevel").prop("hidden", false);
	 $("#LC_graph").prop("hidden", false);

	/* var lowerSpLevel = 0.2;
	 var higherSpLevel = 1;
	
	 if(i2pType == "direct"){
		 
		 var lowerOutputLevel = 4;
		 var higherOutputLevel = 20;
	 }else{
		 
		 var lowerOutputLevel = 20;
		 var higherOutputLevel = 4;
	 }*/

	 var lowerSpLevel = ExpTrackData.lcAppData.lcConfigData.lowerSpanLevel;
	 var higherSpLevel = ExpTrackData.lcAppData.lcConfigData.higherSpanLevel;
	 
	 var lowerOutputLevel  = ExpTrackData.lcAppData.lcConfigData.lowerOutputLevel;
	 var higherOutputLevel = ExpTrackData.lcAppData.lcConfigData.higherOutputLevel;
	 
	 
	var LC_CharacterisationData = {};
	 
	
	var waterlevel = lowerSpLevel;

	var numofReading = 5;
	var LColdreadingArr = [];
	var LCarr_formulaValue = [];
	var LColdreading = [];
	var LCarr_trueread = [];
	var LCarr_actualVal = [];
	var LCarr_stdVal = [];
	var LColdreadingForGraph = [];
	var readingcnt = 0;

	// oldreading.push(parseFloat(lowerSpLevel));
	// oldreading.push(parseFloat(higherSpLevel));
	
	LC_DefaultErr = randomErr_LC(LC_RandomErrArr);
//	LC_DefaultErr = 20;
//	console.log("LC ERROR "+LC_DefaultErr);

	$("#mainDiv").html('');

	var LC_characterisation = '';
	LC_characterisation += '<div class="col-md-6 col-sm-12" id="canvasMainDiv"><div id="canvas" class="col-md-12 col-sm-12"></div></div>'

			+ '<div class="col-md-6 col-sm-12" id="LC_characterisationDIv">'
			+ '<div id = "TestDiv" >'
			
			+'<h1>LY Characterisation</h1>'
			+'<h6>In this level characterize the LY 100</h6>'
			+ '<div class="slidecontainer" id="LC_Slider">'
			+ '<div class="header">LT 100 Output (Input  '
			+ lowerSpLevel
			+ '-'
			+ higherSpLevel
			+ '  kg/cm²)</div>'
			+ '<input step="0.1" type="range" min='
			+ lowerSpLevel
			+ ' max='
			+ higherSpLevel
			+ ' value='
			+ lowerSpLevel
			+ ' id="LC_tankLvl">'
			+ '<p>Value: <span id="demo"></span></p>'
			+ '</div>'
			+ '<div class="buttonDiv">'
			+ '<button id="submit_LC_WaterLevel">Submit</button>'
			+ '<button id="LC_graph" >Check Graph</button>'
			+ '<button id="LC_calibration" hidden >Next Level</button><br/>'
			+'<div class="canvasAnimation col-md-12 col-sm-12" id="anim_canvas_direct" style="display:none; width:100%;"></div>'
			+'<div class="canvasAnimation col-md-12 col-sm-12" id="anim_canvas_reverse" style="display:none; width:100%;"></div>'
//			+'<span id="addNozzel" style="curser:pointer;">add</div>'
//			+'<span id="minusNozzel" style="curser:pointer;">minus</div>'
			+ '</div>' + '</div>' + '</div>'
			+'<div class="col-md-6 col-sm-12" id = "TestNextDiv" style="display:none">'
			+'<div >'

	$(mainDiv).html(LC_characterisation);
	
	stop_timer();
	set_timer();

	var slider = document.getElementById("LC_tankLvl");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value;

	slider.oninput = function() {
		output.innerHTML = this.value;
	}
   
	$('#submit_LC_WaterLevel')
			.on(
					'click',
					function() {
						
						waterlevel = slider.value;
						
						
						if ($.inArray(parseFloat(waterlevel), LColdreading) >= 0) {
							alertify.alert('Alert','This value reading is already present.  Please select another value for reading');
							$(".ajs-header").css("background-color","#ce6058");
						} else {
							$("#LC_graph").prop("hidden", false);
							
							var stdtrueReading = ((waterlevel - lowerSpLevel) * 20);
							

						
							if(i2pType == "direct")
							{
									var standardVal = LC_calStdValforDirect(stdtrueReading,
											higherSpLevel, lowerSpLevel);
//									console.log(standardVal);
									
							}
							
							if(i2pType == "reverse"){
								
								var standardVal = LC_calStdValforReverse(stdtrueReading,
										higherSpLevel, lowerSpLevel);
//								console.log(standardVal);
								
							}
						
							var trueReading = ((waterlevel - lowerSpLevel) * 100)
							/ (higherSpLevel - lowerSpLevel);	
							
							var closestValue = LC_findColsetValue(trueReading, LC_trueReading_arr);
							var idx = LC_trueReading_arr.indexOf(closestValue);

							var formulaVal = LC_applyFormula(closestValue, idx,
									trueReading).toFixed(3);

							
							if(i2pType == "direct")
							{
								var actualVal = LC_calActualValforDirect(formulaVal,
										higherSpLevel, lowerSpLevel);
									
							}
							
							if(i2pType == "reverse"){
								
								var actualVal = LC_calActualValforReverse(formulaVal,
										higherSpLevel, lowerSpLevel);
								
							}
							
							
//					        console.log("selected value"+trueReading.toFixed(3) +"  std ans"+standardVal+"  closet val " +closestValue+"    formula applied var"+formulaVal+"   actual val with error "+actualVal);

							LColdreadingArr.push(parseFloat(waterlevel));

							LColdreading.push(parseFloat(waterlevel));
							LColdreadingForGraph.push(parseFloat(waterlevel));
//							LColdreading.sort(function(a, b) {
//								return a - b
//							});

							LCarr_formulaValue.push(parseFloat(formulaVal));
							LCarr_formulaValue.sort(function(a, b) {
								return a - b
							});
							
//							LCarr_trueread.push(parseFloat(trueread));

							LCarr_actualVal.push(parseFloat(actualVal));
//							 console.log("arr true reading sorted "+LColdreading);
//							 console.log("arr Actual values  not  sorted"+LCarr_actualVal);
//							LCarr_actualVal.sort(function(a, b) {
//								return a - b
//							});

							LCarr_stdVal.push(parseFloat(standardVal));							
//							LCarr_stdVal.sort(function(a, b) {
//								return a - b
//							});
//							 console.log("arr true reading unsorted "+LColdreadingArr);	
//							console.log("arr formula values sorted "+LCarr_formulaValue);
							
//							 console.log("arr true reading sorted "+LColdreading);
//							 console.log(LCarr_actualVal);
//							 console.log("arr Standard values sorted"+LCarr_stdVal);
							
							 
							var LC_IOtable = '';
							if (readingcnt == 0) {

								LC_IOtable += '<div class="row"><div id = "IOtable" class="col-md-12">'
										+ '<table id="table_IO" class="table table-striped table-bordered" style="width:100%">'
										+ '<thead>'
										+ '<tr>'
										+ '<th>Reading No.</th>'
										+ '<th>	Input (in kg/cm²)</th>'
										+ '<th>Output (in mA)</th>'
										+ '</tr>'
										+ '</thead>'

										+ '<tbody id="tablebody_IO">'
										+ '<tr><td>'
										+ (readingcnt + 1)
										+ '</td><td>'
										+ waterlevel
										+ '</td><td>'
										+ actualVal
										+ '</td></tr>'

										+ '</tbody>'

										+ '</table>'
										+ '</div>'
										+ '<div id="LC_chartContainer" class="col-md-12"style="height: 400px; width: 90%; padding:0 5%" hidden></div></div>'

								readingcnt++;

								$(TestDiv).append(LC_IOtable);


								
							} else {
								var table = $('#table_IO').DataTable({
									 "pageLength" : 5,
								        dom: 'Bfrtip',
								        "bDestroy": true,
									title : 'Data export',
									buttons : [ {
										extend : 'excelHtml5',
										title : 'LY 100 Characterisation value'

									}, {
										extend : 'pdfHtml5',
										title : 'LY 100 Characterisation value'
									} ]
								});
								table.row
										.add(
												[ readingcnt + 1, waterlevel,
														actualVal ]).draw();
								table.page('last').draw('page');
								+'</div>';

								readingcnt++;


								

							}
						
						inputValue = waterlevel;
						outputValue = actualVal;
						if(i2pType == "direct"){
							     PtoEconveterDirect(inputValue, outputValue);
							 }else{
								 PtoEconveterReverse(inputValue, outputValue);
							 }
						}
						function PtoEconveterReverse(inputValue, outputValue)
						{
							var b;
							if(inputValue == 0.2)
							{ b = 1
//							console.log(b);	
							}	
							if(inputValue == 0.3)
							{ b = 2
//							console.log(b);	
							}
							if(inputValue == 0.4)
							{ b = 3
//							console.log(b);
							}	
							if(inputValue == 0.5)
							{ b = 4
//							console.log(b);	
							}	
							if(inputValue == 0.6)
							{ b = 5
//							console.log(b);	
							}	
							if(inputValue == 0.7)
							{ b = 6
//							console.log(b);	
							}	
							if(inputValue == 0.8)
							{ b = 7
//							console.log(b);	
							}	
							if(inputValue == 0.9)
							{ b = 8
//							console.log(b);	
							}	
							if(inputValue == 1)
							{ b = 9
//							console.log(b);	
							}	
							paper.clear();
							Nozzelanim_d (x, y,a);
							FlapperAnim_d (x, y ,a);
							springscrew_d (x,y,a);
							plusNozzel_d(x,y,a);
							minusNozzel_d(x,y,a);
							OtherParts_d(x,y,inputValue,outputValue);
							bellows_d (x, y ,b);
							glowingAnim();
						}
						function PtoEconveterDirect(inputValue, outputValue)
						{
							var b;
							if(inputValue == 0.2)
							{ b = -1
//							console.log(b);	
							}	
							if(inputValue == 0.3)
							{ b = -2
//							console.log(b);	
							}
							if(inputValue == 0.4)
							{ b = -3
//							console.log(b);
							}	
							if(inputValue == 0.5)
							{ b = -4
//							console.log(b);	
							}	
							if(inputValue == 0.6)
							{ b = -5
//							console.log(b);	
							}	
							if(inputValue == 0.7)
							{ b = -6
//							console.log(b);	
							}	
							if(inputValue == 0.8)
							{ b = -7
//							console.log(b);	
							}	
							if(inputValue == 0.9)
							{ b = -8
//							console.log(b);	
							}	
							if(inputValue == 1)
							{ b = -9
//							console.log(b);	
							}	
							paper.clear();
							Nozzelanim_d (x, y,a);
							FlapperAnim_d (x, y ,a);
							 springscrew_d (x,y,a);
							plusNozzel_d(x,y,a);
							minusNozzel_d(x,y,a);
							OtherParts_d(x,y,inputValue,outputValue);
							bellows_d (x, y ,b);
							glowingAnim();
						}
						
						function glowingAnim()
						{
//							var n1 = upperrect.glow({
//								width : 8,
//								//'fill' : 'green',
//								'stroke' : 'green'
//							});
//							animFC = Raphael.animation({
//								"stroke-width" : 1,
//								opacity : 1
//							}, 800, function() {
//								upperrect.attr({
//									'fill' : '#666',
//									'stroke-width' : '1'
//								});
//							});
//
//							n1.animate(animFC);
							
							var v1 = n0.glow({
								width : 8,
								//'fill' : 'green',
								'stroke' : 'green'
							});
							animFC = Raphael.animation({
								"stroke-width" : 1,
								opacity : 1
							}, 800);
							

							v1.animate(animFC);
							
							var v2 = n2.glow({
								width : 8,
								//'fill' : 'green',
								'stroke' : 'green'
							});
							animFC = Raphael.animation({
								"stroke-width" : 1,
								opacity : 1
							}, 800);
							

							v2.animate(animFC);
							
							var v3 = n3.glow({
								width : 8,
								//'fill' : 'green',
								'stroke' : 'green'
							});
							animFC = Raphael.animation({
								"stroke-width" : 1,
								opacity : 1
							}, 800);
						

							v3.animate(animFC);
						}
					});

	$('#LC_graph')
			.on(
					'click',
					function() {
						
						if (readingcnt < numofReading) {

							alertify.alert('Alert',"Please take at least " + numofReading
									+ " readings");
							$(".ajs-header").css("background-color","#ce6058");
						}
						
						
						if (readingcnt >= numofReading) {
							$("#LC_chartContainer").prop("hidden", false);
							window.scrollTo(0,$('#LC_characterisationDIv').height());
							
					//		LColdreadingForGraph.push(parseFloat(waterlevel));
							LColdreadingForGraph.sort(function(a, b) {
								return a - b
							});


							var OldValue = [];
							var StdValue = [];
							for (var j = 0; j < LColdreadingForGraph.length; j++) {
								var olValueJson = {
									x : LColdreadingForGraph[j],
									y : LCarr_actualVal[LColdreading.indexOf(LColdreadingForGraph[j])],
									markerType : "circle",
									markerSize : 10

								};
								OldValue.push(olValueJson);
							}
							
							for (var j = 0; j < LColdreadingForGraph.length; j++) {
								var olValueJson1 = {
									x : LColdreadingForGraph[j],
									y : LCarr_stdVal[LColdreading.indexOf(LColdreadingForGraph[j])],
									markerType : "circle",
									markerSize : 10

								};
								StdValue.push(olValueJson1);
							}
							// console.log(OldValue);
//							var chart = new CanvasJS.Chart("LC_chartContainer",
//									{
//										animationEnabled : true,
//										theme : "light2",
//										title : {
//											text : "Level Control System (LY 100)",
//											fontSize : 20,
//										},
//
//										axisX : {
//											title : "Input(kg/cm²)",
//											crosshair : {
//												enabled : true,
//												snapToDataPoint : true
//											},
//										// ticks: {suggestedMin: 2, max:6}
//										},
//										axisY : {
//											title : "Output(mA)",
//											minimum : 1,
//											maximum : 21
//										},
//
//										toolTip : {
//											shared : true
//										},
//										legend : {
//											cursor : "pointer",
//											verticalAlign : "bottom",
//											horizontalAlign : "right",
//											dockInsidePlotArea : true,
//											itemclick : toogleDataSeries
//										},
//										data : [ {
//											type : "scatter",
//											showInLegend : true,
//											name : "Observed Output",
//											markerType : "circle",
//											// xValueFormatString: "DD MMM,
//											// YYYY",
//											color : "#F08080",
//
//											dataPoints : OldValue 
//										}, {
//											type : "line",
//											showInLegend : true,
//											name : "Standard Output",
//											// lineDashType: "dash",
//											dataPoints : [ {
//												x : lowerSpLevel,
//												y : lowerOutputLevel 
//											}, {
//												x : higherSpLevel,
//												y : higherOutputLevel
//											} ]
//										}
//										/*, {
//											type : "scatter",
//											showInLegend : true,
//											name : "Standered Output",
//											markerType : "circle",
//											// xValueFormatString: "DD MMM,
//											// YYYY",
//											color : "#000000",
//
//											dataPoints : StdValue
//										},*/
//										
//										]
//									});
//							chart.render();
//
//							function toogleDataSeries(e) {
//								if (typeof (e.dataSeries.visible) === "undefined"
//										|| e.dataSeries.visible) {
//									e.dataSeries.visible = false;
//								} else {
//									e.dataSeries.visible = true;
//								}
//								chart.render();
//							}
							LCDrowGraph();
							 LC_Updategraph(OldValue,lowerSpLevel, higherSpLevel, lowerOutputLevel, higherOutputLevel);
							 $("#LC_calibration").prop("hidden", false);
							 						}
	     

					});

	$('#LC_calibration').on('click', function() {

		if(LColdreadingForGraph.indexOf(lowerSpLevel) == -1){
			
			alertify.alert('Alert',"Please select lower span value and plot the graph again");
			$(".ajs-header").css("background-color","#ce6058");
			$("#LC_calibration").prop("hidden", true);
			$("#LC_graph").prop("hidden", true);			
			$("#LC_chartContainer").html('');
			
		}else if(LColdreadingForGraph.indexOf(higherSpLevel) == -1){
			
			alertify.alert('Alert',"Please select higher span value and plot the graph again");
			$(".ajs-header").css("background-color","#ce6058");
			$("#LC_calibration").prop("hidden", true);
			$("#LC_graph").prop("hidden", true);	
			$("#LC_chartContainer").html('');
		
			
		}else{
			
			
			
			minutes = document.getElementById("minutes").textContent;
    		seconds = document.getElementById("seconds").textContent;        		
//    		console.log(minutes+":"+seconds);
			
			LC_CharacterisationData.LCreading = LColdreading;
			LC_CharacterisationData.LCactualVal = LCarr_actualVal;
			LC_CharacterisationData.LCstdVal = LCarr_stdVal;
			
			LC_CharacterisationData.CharacTimeInMin = minutes;
			LC_CharacterisationData.CharacTimeInSec = seconds;
			
//			console.log(LC_CharacterisationData);
			
		//	LC_appData.lcCharactData = LC_CharacterisationData;
			
			ExpTrackData.lcCharactData = LC_CharacterisationData;
			
//			console.log(ExpTrackData);
			
			
			stop_timer();
			
			if(i2pType == "direct"){
			LC_calibrationFun_Direct(i2pType, lowerSpLevel, higherSpLevel, LColdreading, LCarr_actualVal, LCarr_stdVal, lowerOutputLevel, higherOutputLevel);
			}
			
			if(i2pType == "reverse"){
				
			LC_calibrationFun_Reverse(i2pType ,lowerSpLevel, higherSpLevel, LColdreading, LCarr_actualVal, LCarr_stdVal, lowerOutputLevel, higherOutputLevel);	
			}

		}
		
		

	});

	
	
 if(i2pType == "direct"){
	 PtoEconveter_direct(inputValue, outputValue);
	 }else{
		 PtoEconveter_direct(inputValue, outputValue);
	 }


}

});
















