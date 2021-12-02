




//var TransmitterDB = TransmitterDB || {};

 $(function () {
	// $("#Reqtimer").css("display","none");
//TransmitterDB.LCAnalysis_TransmitterDB = function() {
	
	 LCAnalysis_TransmitterDB = function() {
	
		 
//		 console.log(ExpTrackData);
		 
		 LC_dataForAnalysis = [];
		 LC_Test_conf = {};
		 LC_Conncetion = {};
		 LC_Test = {};
		 LC_Calibration = {};
		 LC_Fault = {};
		 
		 
		 var time1 = "00"+":"+ExpTrackData.theoryData.minutes +":"+ ExpTrackData.theoryData.seconds;
		 var time2 = "00"+":"+ExpTrackData.lcAppData.lcTestData.TesttimeinMin +":"+  ExpTrackData.lcAppData.lcTestData.TesttimeinSec;
		 var time3 = "00"+":"+ExpTrackData.lcAppData.lcConfigData.configTimeInMin +":"+ ExpTrackData.lcAppData.lcConfigData.configTimeInSec;
		 var time4 = "00"+":"+ExpTrackData.connData.connTimeInMin +":"+ ExpTrackData.connData.connTimeInsec;
		 var time5 = "00"+":"+ExpTrackData.lcCharactData.CharacTimeInMin +":"+ ExpTrackData.lcCharactData.CharacTimeInSec;
		 var time6 = "00"+":"+ExpTrackData.lcCalibrationData.lcCalibrationTimeInMin +":"+ ExpTrackData.lcCalibrationData.lcCalibrationTimeInSec;
		 var time7 = "00"+":"+ExpTrackData.lcFaultDetectionTimeInMin +":"+ ExpTrackData.lcFaultDetectionTimeInSec;
		 
//		 console.log("Time 1   "+ time1);
//		 console.log("Time 2   "+ time2);
//		 console.log("Time 3   "+ time3);
//		
//		 console.log("Time 4   "+ time4);
//		 console.log("Time 5   "+ time5);
//		 console.log("Time 6   "+ time6);
//		 console.log("Time 7   "+ time7);
		 
		    var hour=0;
	        var minute=0;
	        var second=0;
	        
	        var splitTime1= time1.split(':');
	        var splitTime2= time2.split(':');
	        var splitTime3= time3.split(':');
	        var splitTime4= time4.split(':');
	        var splitTime5= time5.split(':');
	        var splitTime6= time6.split(':');
	        var splitTime7= time7.split(':');
	        
	        hour = parseInt(splitTime1[0])+parseInt(splitTime2[0])+parseInt(splitTime3[0])+parseInt(splitTime4[0])+parseInt(splitTime5[0])+parseInt(splitTime6[0])+parseInt(splitTime7[0]);
	        minute = parseInt(splitTime1[1])+parseInt(splitTime2[1])+parseInt(splitTime3[1])+parseInt(splitTime4[1])+parseInt(splitTime5[1])+parseInt(splitTime6[1])+parseInt(splitTime7[1]);
	        hour = hour + minute/60;
	        minute = minute%60;
	        second = parseInt(splitTime1[2])+parseInt(splitTime2[2])+parseInt(splitTime3[2])+parseInt(splitTime4[2])+parseInt(splitTime5[2])+parseInt(splitTime6[2])+parseInt(splitTime7[2]);
	        minute = minute + second/60;
	        second = second%60;
	        var Callhr = parseInt(splitTime2[0])+parseInt(splitTime3[0]) ;
	        var CallMin = parseInt(splitTime2[1])+parseInt(splitTime3[1]) ;
	        var Callsec = parseInt(splitTime2[2])+parseInt(splitTime3[2]) ;
//	        console.log("calibration Time 3   "+Callhr +":"+CallMin+":"+Callsec);
//	        console.log("sum of above time= " + parseInt(hour)+":"+ parseInt(minute)+":"+ parseInt(second));
		 
		 
		 
		 
		 attaindedcnt = 0;
		 notattainded = 0;
		 var AnalysisSts ;
		 TestAnalysisPer = ((ExpTrackData.lcAppData.lcTestData.rightQuesCnt/6 ) * 100); 
		 //console.log(TestAnalysisPer);
		 TestAnalysisPerFinal = ((TestAnalysisPer * 20 ) / 100);

		 if(TestAnalysisPerFinal < 0)
		 { TestAnalysisPerFinal = 0 }
		 
		 
		 //console.log(TestAnalysisPerFinal);

		 ConfAnalysisPer = ((ExpTrackData.lcAppData.lcConfigData.configcnt / 5 ) * 100);
		 //console.log(ConfAnalysisPer);
		 ConfAnalysisPerFinal = (((100 - ConfAnalysisPer) * 20 ) / 100);
		 //console.log(ConfAnalysisPerFinal);

		 Test_con_AttendedPer = ((TestAnalysisPer + (100 - ConfAnalysisPer))/200) * 100 ;
		
		 LC_Test_conf.TotalPer = 40;
		 LC_Test_conf.optained = (TestAnalysisPerFinal + ConfAnalysisPerFinal)
		 
		 LC_dataForAnalysis.push(LC_Test_conf);
		 
		 if(ConfAnalysisPerFinal < 0)
		 { ConfAnalysisPerFinal = 0 }

		 testAndRangeAnalysis = parseFloat(TestAnalysisPerFinal) + parseFloat(ConfAnalysisPerFinal);
		 WringDigAnalysisPer = ((ExpTrackData.connData.chkConnCnt / 3 ) * 100 );
//		 console.log(WringDigAnalysisPer);
		 WringDigAnalysisPerFinal = (((100 - WringDigAnalysisPer) * 15 ) / 100);
//		 console.log(WringDigAnalysisPerFinal);

		 if(WringDigAnalysisPerFinal < 0)
		 { WringDigAnalysisPerFinal = 0 }

		 LC_Conncetion.TotalPer = 15;
		 LC_Conncetion.optained = (WringDigAnalysisPerFinal + 0);
		 
		 LC_dataForAnalysis.push(LC_Conncetion);
		 
		 TestingzeroAnalysisPer = ((ExpTrackData.lcCalibrationData.lcZeroErrCnt / 5 ) * 100 );
		 //console.log(TestingzeroAnalysisPer);
		 TestingzeroAnalysisPerFinal = (((100 - TestingzeroAnalysisPer) * 5 ) / 100);
		 //console.log(TestingzeroAnalysisPerFinal);

		 if(TestingzeroAnalysisPerFinal < 0)
		 { TestingzeroAnalysisPerFinal = 0 }

		 TestingSpanAnalysisPer = ((ExpTrackData.lcCalibrationData.lcSpanErrCnt / 5 ) * 100);
		 //console.log(TestingSpanAnalysisPer);
		 TestingSpanAnalysisPerFinal = (((100 - TestingSpanAnalysisPer) * 5 ) / 100);
		 //console.log(TestingSpanAnalysisPerFinal);

		 if(TestingSpanAnalysisPerFinal < 0)
		 { TestingSpanAnalysisPerFinal = 0 }

		 TestingLinearityAnalysisPer = ((ExpTrackData.lcCalibrationData.lcLinearityErrCnt / 5 ) * 100 );
		 //console.log(TestingLinearityAnalysisPer);
		 TestingLinearityAnalysisPerFinal = (((100 - TestingLinearityAnalysisPer) * 5 ) / 100);
		 //console.log(TestingLinearityAnalysisPerFinal);

		 if(TestingLinearityAnalysisPerFinal < 0)
		 { TestingLinearityAnalysisPerFinal = 0 }

		 TestingAccuracyAnalysisPer = ((ExpTrackData.lcCalibrationData.lcAccuracyErrCnt / 5 ) * 100 );
		 //console.log(TestingAccuracyAnalysisPer);
		 TestingAccuracyAnalysisPerFinal = (((100 - TestingAccuracyAnalysisPer) * 5 ) / 100);
		 //console.log(TestingAccuracyAnalysisPerFinal);

		 if(TestingAccuracyAnalysisPerFinal < 0)
		 { TestingAccuracyAnalysisPerFinal = 0 }

		 TestingAnalysisPer = parseFloat(TestingzeroAnalysisPerFinal) + parseFloat(TestingSpanAnalysisPerFinal) + parseFloat(TestingLinearityAnalysisPerFinal) + parseFloat(TestingAccuracyAnalysisPerFinal);

		 Test_AttendedPer = (((100 - TestingzeroAnalysisPer) + (100 - TestingSpanAnalysisPer) + (100 - TestingLinearityAnalysisPer) + (100 - TestingAccuracyAnalysisPer))/400) * 100 ;

		 LC_Test.TotalPer = 20;
		 LC_Test.optained = (TestingAnalysisPer + 0);
		 
		 LC_dataForAnalysis.push(LC_Test);
		 
		///
		 
		 if((ExpTrackData.lcCalibrationData.lcZeroAdjustCnt - 20) < 20 )
		 {
		 TestingzeroAlgoAnalysisPer = (((ExpTrackData.lcCalibrationData.lcZeroAdjustCnt - 20) / 20 ) * 100 );
		 TestingzeroAlgoAnalysisPerFinal = (((100 - TestingzeroAlgoAnalysisPer) * 2 ) / 100);
		 }else
		 {
		 TestingzeroAlgoAnalysisPer = 0;
		 TestingzeroAlgoAnalysisPerFinal = 0;
		 }
		 

		 if((ExpTrackData.lcCalibrationData.lcSpanAdjustCnt - 10) < 10 )
		 {
			 TestingSpanAlgoAnalysisPer = (((ExpTrackData.lcCalibrationData.lcSpanAdjustCnt - 10 ) / 10 ) * 100);
			 TestingSpanAlgoAnalysisPerFinal = (((100 - TestingSpanAlgoAnalysisPer) * 2 ) / 100);
		 }else
		 {
			 TestingSpanAlgoAnalysisPer = 0;
			 TestingSpanAlgoAnalysisPerFinal = 0;
		 }


	// algo 1 count is 0
	if(ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt != 0 && ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt != 0)
	{
		if((ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt - 10) < 10 )
		 {
				TestingLinearityAlgo1AnalysisPer = (((ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt - 10) / 10 ) * 100 );
				TestingLinearityAlgo1AnalysisPerFinal = (((100 - TestingLinearityAlgo1AnalysisPer) * 2 ) / 100);
		 }else
		 {
			 TestingLinearityAlgo1AnalysisPer = 0;
			 TestingLinearityAlgo1AnalysisPerFinal = 0;
		 }
		 if((ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt - 10) < 10 )
		 {
				TestingLinearityAlgo2AnalysisPer = (((ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt - 10) / 10 ) * 100 );
				TestingLinearityAlgo2AnalysisPerFinal = (((100 - TestingLinearityAlgo2AnalysisPer) * 2 ) / 100);
		 }else
		 {
			 TestingLinearityAlgo2AnalysisPer = 0;
			 TestingLinearityAlgo2AnalysisPerFinal = 0;
		 }
		 if((ExpTrackData.lcCalibrationData.lcLinearAlgo3AdjustCnt - 10) < 10 )
		 {
			TestingLinearityAlgo3AnalysisPer = (((ExpTrackData.lcCalibrationData.lcLinearAlgo3AdjustCnt - 10) / 10 ) * 100 );
			TestingLinearityAlgo3AnalysisPerFinal = (((100 - TestingLinearityAlgo3AnalysisPer) * 2 ) / 100);
		 }else
		 {
			 TestingLinearityAlgo3AnalysisPer = 0;
			 TestingLinearityAlgo3AnalysisPerFinal = 0;
		 }
	Calibration_AttendedPer = (((100 - TestingzeroAlgoAnalysisPer) + (100 - TestingSpanAlgoAnalysisPer) + (100 - TestingLinearityAlgo1AnalysisPer) + (100 - TestingLinearityAlgo2AnalysisPer) + (100 - TestingLinearityAlgo3AnalysisPer))/500) * 100 ;
	 TestanalysisFinal = parseFloat(TestingzeroAlgoAnalysisPerFinal) + parseFloat(TestingSpanAlgoAnalysisPerFinal) + parseFloat(TestingLinearityAlgo1AnalysisPerFinal) + parseFloat(TestingLinearityAlgo2AnalysisPerFinal) + parseFloat(TestingLinearityAlgo3AnalysisPerFinal);
	}
	if(ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt == 0)
	{

		if((ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt - 10) < 10 )
		 {
				TestingLinearityAlgo2AnalysisPer = (((ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt - 10) / 10 ) * 100 );
				TestingLinearityAlgo2AnalysisPerFinal = (((100 - TestingLinearityAlgo2AnalysisPer) * 3 ) / 100);
		 }else
		 {
			 TestingLinearityAlgo2AnalysisPer = 0;
			 TestingLinearityAlgo2AnalysisPerFinal = 0;
		 }
		 if((ExpTrackData.lcCalibrationData.lcLinearAlgo3AdjustCnt - 10) < 10 )
		 {
			TestingLinearityAlgo3AnalysisPer = (((ExpTrackData.lcCalibrationData.lcLinearAlgo3AdjustCnt - 10) / 10 ) * 100 );
			TestingLinearityAlgo3AnalysisPerFinal = (((100 - TestingLinearityAlgo3AnalysisPer) * 3 ) / 100);
		 }else
		 {
			 TestingLinearityAlgo3AnalysisPer = 0;
			 TestingLinearityAlgo3AnalysisPerFinal = 0;
		 }
	Calibration_AttendedPer = (((100 - TestingzeroAlgoAnalysisPer) + (100 - TestingSpanAlgoAnalysisPer) +  (100 - TestingLinearityAlgo2AnalysisPer) + (100 - TestingLinearityAlgo3AnalysisPer))/400) * 100 ;
	 TestanalysisFinal = parseFloat(TestingzeroAlgoAnalysisPerFinal) + parseFloat(TestingSpanAlgoAnalysisPerFinal)  + parseFloat(TestingLinearityAlgo2AnalysisPerFinal) + parseFloat(TestingLinearityAlgo3AnalysisPerFinal);
	}

	// algo 2 count is 0
	if(ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt == 0)
	{

		if((ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt - 10) < 10 )
		 {
				TestingLinearityAlgo1AnalysisPer = (((ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt - 10) / 10 ) * 100 );
				TestingLinearityAlgo1AnalysisPerFinal = (((100 - TestingLinearityAlgo1AnalysisPer) * 3 ) / 100);
		 }else
		 {
			 TestingLinearityAlgo1AnalysisPer = 0;
			 TestingLinearityAlgo1AnalysisPerFinal = 0;
		 }
		
		 if((ExpTrackData.lcCalibrationData.lcLinearAlgo3AdjustCnt - 10) < 10 )
		 {
			TestingLinearityAlgo3AnalysisPer = (((ExpTrackData.lcCalibrationData.lcLinearAlgo3AdjustCnt - 10) / 10 ) * 100 );
			TestingLinearityAlgo3AnalysisPerFinal = (((100 - TestingLinearityAlgo3AnalysisPer) * 3 ) / 100);
		 }else
		 {
			 TestingLinearityAlgo3AnalysisPer = 0;
			 TestingLinearityAlgo3AnalysisPerFinal = 0;
		 }
	Calibration_AttendedPer = (((100 - TestingzeroAlgoAnalysisPer) + (100 - TestingSpanAlgoAnalysisPer) +  (100 - TestingLinearityAlgo1AnalysisPer) + (100 - TestingLinearityAlgo3AnalysisPer))/400) * 100 ;
	 TestanalysisFinal = parseFloat(TestingzeroAlgoAnalysisPerFinal) + parseFloat(TestingSpanAlgoAnalysisPerFinal) + parseFloat(TestingLinearityAlgo1AnalysisPerFinal)  + parseFloat(TestingLinearityAlgo3AnalysisPerFinal);
	}

		 
//// 

		// TestanalysisFinal = parseFloat(TestingzeroAlgoAnalysisPerFinal) + parseFloat(TestingSpanAlgoAnalysisPerFinal) + parseFloat(TestingLinearityAlgo1AnalysisPerFinal) + parseFloat(TestingLinearityAlgo2AnalysisPerFinal) + parseFloat(TestingLinearityAlgo3AnalysisPerFinal);
		// Calibration_AttendedPer = (((100 - TestingzeroAlgoAnalysisPer) + (100 - TestingSpanAlgoAnalysisPer) + (100 - TestingLinearityAlgo1AnalysisPer) + (100 - TestingLinearityAlgo2AnalysisPer) + (100 - TestingLinearityAlgo3AnalysisPer))/500) * 100 ;
		// console.log(TestanalysisFinal);
		 
		 LC_Calibration.TotalPer = 10;
		 LC_Calibration.optained = (TestanalysisFinal + 0);
		 
		 LC_dataForAnalysis.push(LC_Calibration);
		 
		 FaultDetectioAnalysisPer = (((8 - ExpTrackData.lcFaultDetectionCnt) / 8 ) * 100 );
		// console.log(FaultDetectioAnalysisPer);
		 FaultDetectioAnalysisPerFinal = ((FaultDetectioAnalysisPer * 15 ) / 100);
		// console.log(FaultDetectioAnalysisPerFinal);

		 if(FaultDetectioAnalysisPerFinal < 0)
		 { FaultDetectioAnalysisPerFinal = 0 }
		 
		 LC_Fault.TotalPer = 15;
		 LC_Fault.optained = FaultDetectioAnalysisPerFinal 
		 
		 LC_dataForAnalysis.push(LC_Fault);
		 
		//finalPer =  ((TestAnalysisPer + (100 - ConfAnalysisPer) + (100 - WringDigAnalysisPer) + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal)/600 ) * 100;
//		 console.log(LC_dataForAnalysis);
		 
	var TransmitterDB = '';
	TransmitterDB += ''
//	+'<h1>Transmitter Analysis</h1>'
	
+ '<div class="col-md-12 col-sm-12" id="TransmitterDBDisplay">'
		
	+ '<div class="col-md-12 col-sm-12">'

		+ '<div class="col-md-4 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Selected Application :'
		if(ExpTrackData.lcAppData.lcTestData.appId == 1)
		{
			TransmitterDB +=' Level Controller'
		}
		if(ExpTrackData.lcAppData.lcTestData.appId == 2)
		{
			TransmitterDB +='Temperature Controller'
		}
		if(ExpTrackData.lcAppData.lcTestData.appId == 3)
		{
			TransmitterDB +='Pressure Controller'
		}
		if(ExpTrackData.lcAppData.lcTestData.appId == 4)
		{
			TransmitterDB +=' Flow Controller'
		}
		TransmitterDB +='</label></div>'
		+'</div>'
		
		+ '<div class="col-md-8 col-sm-12 " >'
		+ '<div class=" " >'
//		if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 75)
//		  {
			  TransmitterDB +=' <div class="successMsg">Congratulations!!! Level control system (P/E converter) experiment is completed successfully!! <br/><span id="AnalysisStatus"></span></div>'
//			  }else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 65 && ( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 75)
//		    {
//				  TransmitterDB +=' <div class="successMsg">Level control system (Transmitter) experiment is completed successfully!! <br/>Good performance</div>'
//					  }
//			  else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 55 && ( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 65)
//			    {
//				  TransmitterDB +=' <div class="successMsg">Level control system (Transmitter) experiment is completed successfully!! <br/>Satisfactory performance</div>'
//					  }
//			  else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 55 )
//			    {
//				  TransmitterDB +=' <div class="successMsg">Level control system (Transmitter) experiment is completed successfully!! <br/>Needs improvement</div>'
//					  }
		 TransmitterDB +='</div>'
		+'</div>'
		
//		+ '<div class="col-md-3 col-sm-12 " >'
//		+ '<div class="form-group" >'
//		+'<label>Selected Transmitter  type : '+ExpTrackData.lcAppData.lcConfigData.trsmtrTpye+'</label>'
//	   
//		+'</div>'
//		+'</div>'
		
		+'</div >'
		
		
		+ '<div class="col-xl-8 col-md-7 col-sm-12">'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<label>Test Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Total Questions</p>'
		+'<span class="TotalcountNum">6</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Right Answer </p>'
		+'<span class="RightcountNum">'+ExpTrackData.lcAppData.lcTestData.rightQuesCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label> Range Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.lcAppData.lcConfigData.configcnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Wired Digram Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.connData.chkConnCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12  " >'
		+ '<div class="form-group" >'
		+'<label>Zero error Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.lcCalibrationData.lcZeroErrCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12  " >'
		+ '<div class="form-group" >'
		+'<label>Span error Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.lcCalibrationData.lcSpanErrCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label> Linearity error Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.lcCalibrationData.lcLinearityErrCnt+'</span>'
		+'</div>'
		+'</div>'
		
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12  " >'
		+ '<div class=" form-group" >'
		+'<label>Accuracy error Calculation Analysis</label>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">5</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-6 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+ExpTrackData.lcCalibrationData.lcAccuracyErrCnt+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Zero adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">20</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.lcCalibrationData.lcZeroAdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.lcCalibrationData.lcZeroAdjustCnt - 20 )+'</span>'
		+'</div>'
		+'</div>'
		
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Span adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">10</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.lcCalibrationData.lcSpanAdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.lcCalibrationData.lcSpanAdjustCnt - 10 )+'</span>'
		+'</div>'
		+'</div>'
		
	
		+'</div>'
		+'</div>'
		if(ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt != 0)
		{
			TransmitterDB +='<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class=" form-group" >'
		+'<label>Linearity algorithm 1  adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">10</span>'
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt - 10 )+'</span>'
		+'</div>'
		+'</div>'
		
		
		+'</div>'
		+'</div>'
		}
		if(ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt != 0)
		{
			TransmitterDB +='<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Linearity algorithm 2  adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">10</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt - 10 )+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		}
		TransmitterDB +='<div class="col-xl-6 col-md-6 col-sm-12  " >'
		+ '<div class="form-group" >'
		+'<label>Linearity algorithm 3  adjustment Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">10</span>'
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">'+( ExpTrackData.lcCalibrationData.lcLinearAlgo3AdjustCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.lcCalibrationData.lcLinearAlgo3AdjustCnt - 10 )+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
		
		+ '<div class="col-xl-6 col-md-6 col-sm-12 " >'
		+ '<div class="form-group" >'
		+'<label>Fault detection Analysis</label>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Expected Attempts </p>'
		+'<span class="RightcountNum">'+( 8 - ExpTrackData.lcFaultDetectionCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Actual Attempts</p>'
		+'<span class="TotalcountNum">8</span>'
		+'</div>'
		+'</div>'
		
		+ '<div class="col-md-4 col-sm-12 " >'
		+'<div class="form-group" >'
		+'<p> Wrong Attempts </p>'
		+'<span class="wrongcountNum">'+( ExpTrackData.lcFaultDetectionCnt )+'</span>'
		+'</div>'
		+'</div>'
		
		+'</div>'
		+'</div>'
         
		+'</div>'
		
	
		+'<div class="col-xl-4 col-md-5 col-sm-12">'
		
		+ '<div class="col-xl-12 col-md-12 col-sm-12 " >'
		+'<div  id="QueAnsChartDIv" style="height: 300px; width: 100%;"></div>'
		+ '</div>'
		+ '<div class="col-xl-12 col-md-12 col-sm-12 " >'
		+'<div  id="StudentAnalysisDIv" >'
		+'<div class="table-responsive">'
  		
     +'<table class="table table-hover">'
    +'<thead>'
      +'<tr>'
        +'<th>Competency (Transmitter)</th>'
        +'<th>Status</th>'
     +' </tr>'
   +' </thead>'
    +'<tbody>'
      +'<tr>'
        +'<td>Basic knowledge</td>'
      if( TestAnalysisPer > 75)
	  {
		 TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			 attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
	   
      
     TransmitterDB +=' </tr>'
    	 
    	 +'<tr>'
         +'<td>Configuration</td>'
       if( (100 - ConfAnalysisPer) > 75)
 	  {
 		 TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
 			attaindedcnt++;
 		  }
 	  else
 	  {
 		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
 			notattainded++;
 		  }
 	   
       
      TransmitterDB +=' </tr>'
    	
       +'<tr>'
        +'<td>Connection diagram</td>'
       if((100 - WringDigAnalysisPer) > 66)
	  {
		 TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			 attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
      
    TransmitterDB +=' </tr>'
	  +'<tr>'
        +'<td>Characterization</td>'
       if(Test_AttendedPer > 75)
	  {
		  TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			  attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
      
      TransmitterDB +=' </tr>'
	  +'<tr>'
        +'<td>Calibration</td>'
        if(ExpTrackData.lcCalibrationData.lcLinearAlgo1AdjustCnt != 0 && ExpTrackData.lcCalibrationData.lcLinearAlgo2AdjustCnt != 0)
    	{
        if( (TestanalysisFinal * 10 ) > 75)
	  {
		  TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			  attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
    	}else
    		{

            if( (TestanalysisFinal * 10 ) > 60)
    	  {
    		  TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
    			  attaindedcnt++;
    		  }
    	  else
    	  {
    		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
    			 notattainded++;
    		  }
        	
    		}
      
     TransmitterDB +=' </tr>'
	  +'<tr>'
        +'<td>Fault detection</td>'
       if(FaultDetectioAnalysisPer > 75)
	  {
		  TransmitterDB +=' <td ><span class="RightNum">Attained</span></td>'
			  attaindedcnt++;
		  }
	  else
	  {
		 TransmitterDB +=' <td > <span class="wrongNum">Not Attained</span></td>'
			 notattainded++;
		  }
      
     TransmitterDB +='  </tr>'
	  
	   +'<tr>'
        +'<td class="TotalcountNum">Overall performance</td>'
//       if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 75)
//	  {
//		  TransmitterDB +=' <td class="RightNum"><span >Excellent</span></td>'
//		  }else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 65 && ( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 75)
//	    {
//			  TransmitterDB +=' <td class="RightNum"><span >Good</span></td>'
//				  }
//		  else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) >= 55 && ( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 65)
//		    {
//			  TransmitterDB +=' <td class="RightNum"><span >Satisfactory</span></td>'
//				  }
//		  else if(( ConfAnalysisPerFinal + TestAnalysisPerFinal + WringDigAnalysisPerFinal + TestingAnalysisPer + TestanalysisFinal + FaultDetectioAnalysisPerFinal) < 55 )
//		    {
//			  TransmitterDB +=' <td class="RightNum"><span >Needs improvement</span></td>'
//				  }
        if(attaindedcnt >= 5)   
  	  {
  		  TransmitterDB +=' <td class="RightNum"><span >Excellent</span></td>'
  		  AnalysisSts = "Excellent performance"; 
  		  }else if(attaindedcnt == 4)
  	    {
  			  TransmitterDB +=' <td class="RightNum"><span >Good</span></td>'
  			   AnalysisSts = "Good performance"; 
  				  }
  		  else if(attaindedcnt == 3)
  		    {
  			  TransmitterDB +=' <td class="RightNum"><span >Satisfactory</span></td>'
  			   AnalysisSts = "Satisfactory performance"; 
  				  }
  		  else if((attaindedcnt <= 2) || ( notattainded >= 2 ) )
  		    {
  			  TransmitterDB +=' <td class="RightNum"><span >Needs improvement</span></td>'
  			   AnalysisSts = "Needs improvement"; 
  				  }
     TransmitterDB +=' </tr>'
	  
    +'</tbody>'
 +' </table>'
  		
		+'</div>'
		+'</div>'
		+'</div>'
		
		//time calculation table
		+ '<div class="col-xl-12 col-md-12 col-sm-12 " >'
		+'<div  id="StudentAnalysisDIv" >'
		+'<div class="table-responsive">'
  		
     +'<table class="table table-hover">'
    +'<thead>'
      +'<tr>'
        +'<th>Competency (Transmitter)</th>'
        +'<th>Time</th>'
     +' </tr>'
   +' </thead>'
    +'<tbody>'
      +'<tr>'
        +'<td>Basic knowledge</td>'
		 +'<td > <span class="InfoNum">'+time1+'</span></td>'
		 +' </tr>'
    	 
    	 +'<tr>'
         +'<td>Configuration</td>'
 		 +' <td > <span class="InfoNum">'+Callhr+":"+CallMin+":"+Callsec+'</span></td>'
 		 +' </tr>'
    	
       +'<tr>'
        +'<td>Connection diagram</td>'
		 +' <td > <span class="InfoNum">'+time4+'</span></td>'
		 +' </tr>'
    
	  +'<tr>'
        +'<td>Characterization</td>'
		 +' <td > <span class="InfoNum">'+time5+'</span></td>'
      +' </tr>'
      
	  +'<tr>'
        +'<td>Calibration</td>'
		 +' <td > <span class="InfoNum">'+time6+'</span></td>'
     +' </tr>'
     
	  +'<tr>'
        +'<td>Fault detection</td>'
		 +' <td > <span class="InfoNum">'+time7+'</span></td>'
     +'  </tr>'
	  
	   +'<tr>'
        +'<td class="TotalcountNum">Overall Time</td>'
       +'<td class="InfoNum"><span >'+ parseInt(hour)+":"+ parseInt(minute)+":"+ parseInt(second)+'</span></td>'
	+' </tr>'
	  
    +'</tbody>'
 +' </table>'
  		
		+'</div>'
		+'</div>'
		+'</div>'
		
		+ '</div>'
		
		+ '</div>'
		
		
//		$("#mainDiv").html('');
		$("#mainDiv").html(TransmitterDB);
     $("#AnalysisStatus").html(AnalysisSts);
		$("#TransmitterDBDisplay").ready(function(){
			
			
var chart1 = new CanvasJS.Chart("QueAnsChartDIv", {

	animationEnabled: true,
	title:{
		text: "Analysis",
		horizontalAlign: "center"
	},
	legend:{
		cursor: "pointer",
		//itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		//startAngle: 100,
		//innerRadius: 60,
		indexLabelFontSize: 13,
		//indexLabel: "{y} answers ",
		toolTipContent: "<b>{label}</b> ",
		
		//LC_dataForAnalysis
		
		dataPoints: [
			{ y: (LC_dataForAnalysis[0].optained), label:"Basic knowledge & Configuration "+LC_dataForAnalysis[0].optained.toFixed(2)+"/"+LC_dataForAnalysis[0].TotalPer ,legendText: "Basic knowledge & Configuration"},
			{ y: (LC_dataForAnalysis[1].optained), label: "Connection diagram "+LC_dataForAnalysis[1].optained.toFixed(2)+"/"+LC_dataForAnalysis[1].TotalPer ,legendText: "Connection diagram" },
			{ y: (LC_dataForAnalysis[2].optained), label: "Characterization "+LC_dataForAnalysis[2].optained.toFixed(2)+"/"+LC_dataForAnalysis[2].TotalPer ,legendText: "TCharacterization"},
			{ y: (LC_dataForAnalysis[3].optained ), label: "Calibration  "+LC_dataForAnalysis[3].optained.toFixed(2)+"/"+LC_dataForAnalysis[3].TotalPer ,legendText: "Calibration "},
			{ y: (LC_dataForAnalysis[4].optained), label: "Fault detection  "+LC_dataForAnalysis[4].optained.toFixed(2)+"/"+LC_dataForAnalysis[4].TotalPer ,legendText: "Fault detection " },
			]
	}]
});
chart1.render();


});
}
	 

 });	 