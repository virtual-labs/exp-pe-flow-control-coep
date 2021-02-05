

checkConnectionsForTrans = function(appId, Type,jsonarray){

 var temp = JSON.parse(jsonarray);

 var connData = {};
 
		 if(temp.length != 0){
			 // LY Connection Check
			 if(appId == "1"){
			 
			  
			   ConnFor_P2E_LY100(appId, Type,jsonarray);
			 
			}
			// TY Connection Check
			 if(appId == "2"){
				 
				  
				   ConnFor_P2E_TY100(appId, Type,jsonarray);
				 
				}
			// PY Connection Check
			 if(appId == "3"){
				 
				  
				   ConnFor_P2E_PY100(appId, Type,jsonarray);
				 
				}
			// FY Connection Check
			 if(appId == "4"){
				 
				  
				   ConnFor_P2E_FY100(appId, Type,jsonarray);
				 
				}
			 
			connData.appId = appId;
			connData.type = Type;
			connData.connDiagjson = jsonarray;
			connData.chkConnCnt = ConnFlagCnt;
			connData.chkRightConn = rightConn;
//		    console.log(connData);
			ExpTrackData.connData = connData
//			console.log(ExpTrackData);
			 
		 }else{
			 
			 alertify.alert("Please select right componants to do the connections");
			 
		 }
		 
		 
		 
		 
		 
		 
		
	
	
	
	
}	
	
