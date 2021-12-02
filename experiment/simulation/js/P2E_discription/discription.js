
showDiscription = function(number) {
	
	$(".levelsApp").css("padding","5px");
	//$(".levelsApp").hide();
	$("#tramsTInst").hide();
	if (number == "1") {

		var LC_discription = '';
		LC_discription += '<div id = "discriptionDiv">'
				+ '<h4 align = "center">Level Control Theory</h4>'
				+ '<div id="TestDivTheory"><p>A level (H) in tank (T100) containing liquid is to be controlled by adjusting the OUT FLOW OR IN FLOW depending on the control strategy prescribed by the control expert.</p><p> The level in the tank is measured using a level sensor (LE 100). The output of the sensor is converted into instrument standard viz. 4~20 mA/HART/FF using a level transmitter (LT 100).</p><p> The output of the transmitter will be based on the selection of the configuration of the transmitter i.e. it can be 4~20 mA, HART or FF signal.</p><p> The output of the transmitter is connected to a PID controller (LIC 100/LIC 200).</p><p> As per the output of the controller the I/P converter (LY 100/LY 200) will send corresponding pneumatic signal to the control valve (LCV 100/LCV 200).</p><p>The output of level Transmitter (LT 100) which is a pneumatic transmitter needs to be converted to electrical signal  hence a P/E converter LY 101 and LY 201 is required and added in this diagram.</p><p> It is pertinent to note that the accuracy of the controller will be dependant of the accuracy of the sensing and transmitting signal. The configuration and calibration of the transmitter becomes essential to achieve the best results. </p><p>Hence in this experiment you are required to select/configure/calibrate level transmitter. </p><button id="next" class="AppField">Start Test</button></div>'
				+ '</div>';

		
		
		//$("#tramsTInst").hide();
		$("#appName").html('');
		$("#appName")
				.html('<i>Calibration and fault finding of pneumatic to current converter</i>');
		$("#TestDiv").html('');
		$("#TestDiv").html(LC_discription);

	} else if (number == "2") {

		var TC_discription = '';
		TC_discription +='<div id = "discriptionDiv">'
				+'<h4 align = "center">Temperature  Control Theory</h4>'
				+'<div id="TestDivTheory"><p>The example is of a typical “Continuous Stirred Tank Reactor” (CSTR).</p><p> Temperature in the tank (T100) containing liquid is to be controlled by adjusting the IN FLOW of the steam, based on the control strategy prescribed by the control expert.</p><p> The temperature in the tank is measured using a temperature sensor (TE 100). </p><p>The output of the sensor is converted into instrument standard viz. 4~20 mA/HART/FF using a temperature transmitter (TT 100). </p><p>The output of the transmitter will be based on the selection of the configuration of the transmitter i.e. it can be 4~20 mA, HART or FF signal. </p><p>The output of the transmitter is connected to a PID controller (TIC 100). </p><p>As per the output of the controller the I/P converter (TY 100) will send corresponding pneumatic signal to the control valve (TCV 100). </p><p>The output of temperature Transmitter (TT 100) which is a pneumatic transmitter needs to be converted to electrical signal  hence a P/E converter TY 101 is required and added in this diagram.</p><p>It is pertinent to note that the accuracy of the controller will be dependant of the accuracy of the sensing and transmitting signal. </p><p>The configuration and calibration of the transmitter becomes essential to achieve the best results. Hence in this experiment you are required to select/configure/calibrate level transmitter.</p><button id="next" class="AppField">Start Test</button></div>'      
				+'</div>';

		//$("#tramsTInst").hide();
		$("#appName").html('');
		$("#appName")
				.html(
						'<i>Calibration and fault finding of pneumatic to current converter</i>');
		$("#TestDiv").html('');
		$("#TestDiv").html(TC_discription);

	} else if (number == "3") {

		var PC_discription = '';
		PC_discription += '<div id = "discriptionDiv">'
				+ '<h4 align = "center">Pressure Control Theory</h4>'
				+ '<div id="TestDivTheory"><p>The example is of a typical pressure control in a reservoir.</p><p> Temperature in the tank (T100) containing gas is to be controlled by adjusting the IN FLOW of the gas, based on the control strategy prescribed by the control expert.</p><p> The pressure in the tank is measured using a pressure sensor (PE 100). </p><p>The output of the sensor is converted into instrument standard viz. 4~20 mA/HART/FF using a pressure transmitter (PT 100). </p><p>The output of the transmitter will be based on the selection of the configuration of the transmitter i.e. it can be 4~20 mA, HART or FF signal. </p><p>The output of the transmitter is connected to a PID controller (PIC 100). </p><p>As per the output of the controller the I/P converter (PY 100) will send corresponding pneumatic signal to the control valve (PCV 100). </p><p>The output of pressure Transmitter (PT 100) which is a pneumatic transmitter needs to be converted to electrical signal  hence a P/E converter PY 101 is required and added in this diagram.</p><p>It is pertinent to note that the accuracy of the controller will be dependant of the accuracy of the sensing and transmitting signal. </p><p>The configuration and calibration of the transmitter becomes essential to achieve the best results. </p><p>Hence in this experiment you are required to select/configure/calibrate level transmitter. </p><button id="next" class="AppField">Start Test</button></div>'
				+ '</div>';
		//$("#tramsTInst").hide();
		$("#appName").html('');
		$("#appName")
				.html(
						'<i>Calibration and fault finding of pneumatic to current converter</i>');
		$("#TestDiv").html('');
		$("#TestDiv").html(PC_discription);

	} else if (number == "4") {

		var FC_discription = '';
		FC_discription += '<div id = "discriptionDiv">'
				+ '<h4 align = "center">Flow Control Theory</h4>'
				+ '<div id="TestDivTheory"><p>The example is of a typical “distribution system”, wherein as per user demand the flow will be supplied to user. </p><p>Flow is measured using an orifice plate (FE 100). </p><p>As the relation between the differential pressure and flow is square root, a square root extractor needs to be configured in the transmitter. </p><p>Based on this signal and the control strategy prescribed by the control expert the output control valve (FCV 100). </p><p>The output of the sensor is converted into instrument standard viz. 4~20 mA/HART/FF using a flow transmitter (FT 100). </p><p>The output of the transmitter will be based on the selection of the configuration of the transmitter i.e. it can be 4~20 mA, HART or FF signal.</p><p> The output of the transmitter is connected to a PID controller (FIC 100).</p><p> As per the output of the controller the I/P converter (FY 100) will send corresponding pneumatic signal to the control valve (FCV 100). </p><p>The output of flow Transmitter (FT 100) which is a pneumatic transmitter needs to be converted to electrical signal  hence a P/E converter FY 101 is required and added in this diagram.</p><p>It is pertinent to note that the accuracy of the controller will be dependant of the accuracy of the sensing and transmitting signal. </p><p>The configuration and calibration of the transmitter becomes essential to achieve the best results. </p><p>Hence in this experiment you are required to select/configure/calibrate level transmitter.           </p><button id="next" class="AppField">Start Test</button></div>'
				+ '</div>';
		//$("#tramsTInst").hide();
		$("#appName").html('');
		$("#appName")
				.html(
						'<i>Calibration and fault finding of pneumatic to current converter</i>');
		$("#TestDiv").html('');
		$("#TestDiv").html(FC_discription);

	} else {

		$("#TestDiv").html('');
	}
	$('#next').on(
			'click', function() {
				var appId = $( "select#levels" ).val();
				
				var theoryTime = {};
				
				if(appId == "1"){
					
					$("#next").hide();
					
					
					minutes = document.getElementById("minutes").textContent;
	        		seconds = document.getElementById("seconds").textContent;        		
//	        		console.log(minutes+":"+seconds);
	        		
	        		
	        		theoryTime.minutes = minutes;
	        		theoryTime.seconds = seconds;
	        		
	        		ExpTrackData.theoryData = theoryTime;
					
					
					
					
					showLC_Questions(appId);
					$("#levels").prop("disabled", true);
				}
				if(appId == "2"){
					
					$("#next").hide();
					
					minutes = document.getElementById("minutes").textContent;
	        		seconds = document.getElementById("seconds").textContent;        		
//	        		console.log(minutes+":"+seconds);
	        		
	        		
	        		theoryTime.minutes = minutes;
	        		theoryTime.seconds = seconds;
	        		
	        		ExpTrackData.theoryData = theoryTime;
					
					
					
					showTC_Questions(appId);
					$("#levels").prop("disabled", true);
				}
				if(appId == "3"){
					
					$("#next").hide();
					
					minutes = document.getElementById("minutes").textContent;
	        		seconds = document.getElementById("seconds").textContent;        		
//	        		console.log(minutes+":"+seconds);
	        		
	        		
	        		theoryTime.minutes = minutes;
	        		theoryTime.seconds = seconds;
	        		
	        		ExpTrackData.theoryData = theoryTime;
					
					
					showPC_Questions(appId);
					$("#levels").prop("disabled", true);
				}
				if(appId == "4"){
					
					$("#next").hide();
					
					minutes = document.getElementById("minutes").textContent;
	        		seconds = document.getElementById("seconds").textContent;        		
//	        		console.log(minutes+":"+seconds);
	        		
	        		
	        		theoryTime.minutes = minutes;
	        		theoryTime.seconds = seconds;
	        		
	        		ExpTrackData.theoryData = theoryTime;
					
					
					showFC_Questions(appId);
					$("#levels").prop("disabled", true);
				}
				window.scrollTo(0,0);	
			});
		
}