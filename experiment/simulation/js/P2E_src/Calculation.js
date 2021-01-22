$(document).ready(function() {
    
	
	
	
	$("#next").hide();
	application = {
		
		0:"Select Application",
	//	1:"Level Controller",
	//	2:"Temperature  Controller",
	//	3:"Pressure Controller",
		4:"Flow Controller"
	}
	
	
	
	ExpTrackData = {};
	
	
		var appType = '';
		for ( var key in application) {
			appType += "<option value= " + key + ">" + application[key]
					+ "</option>";
		}
		$("#levels").append(appType);
		
		
		$('select#levels').on(
				'change',
				function() {
					$("#StartMain").css("display","inline");
					if (this.value == "1") {
						
					    $( "#canvas" ).empty();
						LC_appData = {};
						LevelControl();
						showDiscription("1");
						$("#next").show();
//						$("#levels").prop("disabled", true);
						
					}else if(this.value == "2"){
						
						$( "#canvas" ).empty();
						TC_appData = {};
						TempControl();
						showDiscription("2");
						$("#next").show();
					} else if(this.value == "3"){
						
						$( "#canvas" ).empty();
						PC_appData = {};
						PressureControl();
						showDiscription("3");
						$("#next").show();
						
					} else if(this.value == "4"){
						
						$( "#canvas" ).empty();
						FC_appData = {};
						FlowControl();
						showDiscription("4");
						$("#next").show();
					} else{
						alertify.alert("Please select any application");
						$("#next").hide();
						$( "#canvas" ).empty();
						$("#TestDiv").html('');
						
						
					
					}
				}); 
				
			
				
	
	
});
