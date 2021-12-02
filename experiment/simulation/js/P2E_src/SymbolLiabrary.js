//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};


$(function () {
	
//	SINGLEACTINGCYLINDER.connectionLevel = function(appId, type){
	
			connectionLevel = function(appId, type){
				
//				console.log(appId, type);
		
			 ConnFlagCnt = 0;
			 rightConn = 0;
		$("#mainDiv").html('');
		
		var SymbolLibrary = '';
		
		SymbolLibrary+='<div class="container-fluid" id="connectionLevel">'
		       
			    +'<div class="col-md-3 col-sm-3" id = "library">'
				
				+'<h4 align = "center">Library</h4>'
				// Common Symbols
				
				+'<div id="commanSymbols" >'
				+'<p>Common Symbols</p>'
				+'<div data-shape="pwrSply" class="palette_node_element draw2d_droppable" title="Power Supply"><img src="images/img/powersupply.jpg"></div>'
				+'<div data-shape="signal" class="palette_node_element draw2d_droppable" title="Analog IN"><img src="images/img/analog_in.jpg"></div>'
				+'<div data-shape="analogOut" class="palette_node_element draw2d_droppable" title="Analog OUT"><img src="images/img/AnalogOut.png" ></div>'
				+'<div data-shape="configurator" class="palette_node_element draw2d_droppable" title="Configurator"><img src="images/img/configurator.png "></div>'
				+'<div data-shape="fftCard" class="palette_node_element draw2d_droppable" title="FFT Card"><img src="images/img/FFTCard250.png "></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
				+'<div id="TransmitterSymbols">'
				+'<p>Transmitter Symbols</p>'
				// LT Symbols
				+'<div data-shape="LT_twoWireTrsmtr" class="palette_node_element draw2d_droppable" title="LT 100 2-Wire Transmitter"><img src="images/img/2-wireLT.jpg "></div>'
				+'<div data-shape="LT_threeWireTrsmtr" class="palette_node_element draw2d_droppable" title="LT 100 3-Wire Transmitter"><img src="images/img/3_wireLT.jpg"></div>'
				+'<div data-shape="LT_fourWireTrsmtr" class="palette_node_element draw2d_droppable" title="LT 100 4-Wire Transmitter"><img src="images/img/4_wireLT.jpg"></div>'
				+'<div data-shape="LT_hartTrsmtr" class="palette_node_element draw2d_droppable" title="LT 100 HART Transmitter"><img src="images/img/heartLT.png"></div>'
				+'<div data-shape="LT_FFTrsmtr" class="palette_node_element draw2d_droppable" title="LT 100 FF Transmitter"><img src="images/img/fft_LT100.png"></div>'
				
				//TT Symbols
				+'<div data-shape="TT_twoWireTrsmtr" class="palette_node_element draw2d_droppable" title="TT 100 2-Wire Transmitter"><img src="images/img/2wireTT100.png"></div>'
				+'<div data-shape="TT_threeWireTrsmtr" class="palette_node_element draw2d_droppable" title="TT 100 3-Wire Transmitter"><img src="images/img/3wireTT100.png"></div>'
				+'<div data-shape="TT_fourWireTrsmtr" class="palette_node_element draw2d_droppable" title="TT 100 4-Wire Transmitter"><img src="images/img/4wireTT100.png"></div>'
				+'<div data-shape="TT_hartTrsmtr" class="palette_node_element draw2d_droppable" title="TT 100 HART Transmitter"><img src="images/img/heartTT.png"></div>'
				+'<div data-shape="TT_FFTrsmtr" class="palette_node_element draw2d_droppable" title="TT 100 FF Transmitter"><img src="images/img/fft_TT100.png"></div>'
				
				// PT Symbols
				+'<div data-shape="PT_twoWireTrsmtr" class="palette_node_element draw2d_droppable" title="PT 100 2-Wire Transmitter"><img src="images/img/2wirePT100.png"></div>'
				+'<div data-shape="PT_threeWireTrsmtr" class="palette_node_element draw2d_droppable" title="PT 100 3-Wire Transmitter"><img src="images/img/3wirePT100.png"></div>'
				+'<div data-shape="PT_fourWireTrsmtr" class="palette_node_element draw2d_droppable" title="PT 100 4-Wire Transmitter"><img src="images/img/4wirePT100.png"></div>'
				+'<div data-shape="PT_hartTrsmtr" class="palette_node_element draw2d_droppable" title="PT 100 HART Transmitter"><img src="images/img/heartPT.png"></div>'
				+'<div data-shape="PT_FFTrsmtr" class="palette_node_element draw2d_droppable" title="PT 100 FF Transmitter"><img src="images/img/fft_PT100.png"></div>'
				
				//FT Symbols
				+'<div data-shape="FT_twoWireTrsmtr" class="palette_node_element draw2d_droppable" title="FT 100 2-Wire Transmitter"><img src="images/img/2wireFT100.png"></div>'
				+'<div data-shape="FT_threeWireTrsmtr" class="palette_node_element draw2d_droppable" title="FT 100 3-Wire Transmitter"><img src="images/img/3wireFT100.png"></div>'
				+'<div data-shape="FT_fourWireTrsmtr" class="palette_node_element draw2d_droppable" title="FT 100 4-Wire Transmitter"><img src="images/img/4wireFT100.png"></div>'
				+'<div data-shape="FT_hartTrsmtr" class="palette_node_element draw2d_droppable" title="FT 100 HART Transmitter"><img src="images/img/heartFT.png"></div>'
				+'<div data-shape="FT_FFTrsmtr" class="palette_node_element draw2d_droppable" title="FT 100 FF Transmitter"><img src="images/img/fft_FT100.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				//I2P symbols
				+'<div id="I2PSymbols">'
				+'<p>I/P Converter Symbols</p>'
				+'<div data-shape="LY_100" class="palette_node_element draw2d_droppable" title="LY 100"><img src="images/img/I2P_LY100.png"></div>'
				+'<div data-shape="TY_100" class="palette_node_element draw2d_droppable" title="TY 100"><img src="images/img/I2P_TY100.png"></div>'
				+'<div data-shape="PY_100" class="palette_node_element draw2d_droppable" title="PY 100"><img src="images/img/I2P_PY100.png"></div>'
				+'<div data-shape="FY_100" class="palette_node_element draw2d_droppable" title="FY 100"><img src="images/img/I2P_FY100.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
				+'<div id="P2ESymbols">'
				+'<p>P/E Converter Symbols</p>'
				 // Pneumatic Transmitter  Symbols
				+'<div data-shape="PT_LT_100" class="palette_node_element draw2d_droppable" title="Pneumatic Transmitter LT 100"><img src="images/img/PT_LT100.png"></div>'
				+'<div data-shape="PT_TT_100" class="palette_node_element draw2d_droppable" title="Pneumatic Transmitter TT 100"><img src="images/img/PT_TT100.png"></div>'
				+'<div data-shape="PT_PT_100" class="palette_node_element draw2d_droppable" title="Pneumatic Transmitter PT 100"><img src="images/img/PT_PT100.png"></div>'
				+'<div data-shape="PT_FT_100" class="palette_node_element draw2d_droppable" title="Pneumatic Transmitter FT 100"><img src="images/img/PT_FT100.png"></div>'
				
				// P/E Converter Symbols
				+'<div data-shape="P2E_LY_100" class="palette_node_element draw2d_droppable" title="P/E Converter LY 100"><img src="images/img/P2E_LY100.png"></div>'
				+'<div data-shape="P2E_TY_100" class="palette_node_element draw2d_droppable" title="P/E Converter TY 100"><img src="images/img/P2E_TY100.png"></div>'
				+'<div data-shape="P2E_PY_100" class="palette_node_element draw2d_droppable" title="P/E Converter PY 100"><img src="images/img/P2E_PY100.png"></div>'
				+'<div data-shape="P2E_FY_100" class="palette_node_element draw2d_droppable" title="P/E Converter FY 100"><img src="images/img/P2E_FY100.png"></div>'
				+'<div style="clear: left;"></div>'
				+'</div>'
				
				+'</div>' // main library close
				
				+'<nav class="col-md-9 col-sm-9" id = "toolbar">' 
				//+'<button id = "save" style = "cursor: pointer; z-Index">Check Connections</button>'
				+'</nav>'
				+'<div class="col-md-9 col-sm-9" id = "draw2Did">'
				
				//+'<h4 align = "center">Connections</h4>'
				+'</div>'
				
				+'</div>';
		
		$("#mainDiv").html(SymbolLibrary);
		
		
		stop_timer();
		set_timer();
		
		 app  = new example.Application(appId, type);
		//var canvas = new example.View("draw2Did");
		app.view.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
        createConnection: function(){
            return new HoverConnection();
        }
      }));
		
		
			$('#draw2Did').bind('contextmenu', function(e) {
				return false;
			}); 
		
	/*	var canvas = new draw2d.Canvas("draw2Did");
		canvas.setScrollArea($(window));
		canvas.installEditPolicy(new draw2d.policy.canvas.CoronaDecorationPolicy());
		
		// return my special kind of connection
        var createConnection=function(){
   
			var con = new draw2d.Connection({
			radius: 5,
			router: new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
			color: "#00a8f0",
			stroke: 1.35
		
			});
			return con;
	     };

// install a custom connection create policy

		canvas.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
				createConnection: createConnection
		}));
		
		
		// check connection
		$("#save").on("click", function (e) {
			// Save flowchart
			alertify.alert("in save"); 
		
		var svg = $("#draw2Did").html();
		var writer = new draw2d.io.json.Writer();
		writer.marshal(canvas,function(json){
    
			var jsonarray = JSON.stringify(json, null, 2);
			// Save jsonarray to DB
             alertify.alert(jsonarray); 

			console.log(jsonarray);
			if(appId == 1){
				
				checkConnectionsForLC(appId,jsonarray);
			}
//         checkConnections(jsonarray);
            
			});
		});
		
		*/
		
		 
	/*	$("#img1, #img2, #img3, #img4 ").draggable({
					helper: 'clone',
					cursor: "crosshair"
					
				});
				
		 $("#draw2Did").droppable({
			    	disabled: false,
			        accept :'#img1, #img2, #img3, #img4',
					
			        drop: function(event,ui) { 
					
					var figure = null;
					
					console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
				
 					var draggedId = ui.draggable.prop("id");
					
			//		if(event.pageX < 700 && event.pageY < 800){
							if(draggedId == "img1"){		
					
					   newRect2 = addRect2(canvas,event.pageX,event.pageY);
					   figure = newRect2;
						
					
						
					}else if(draggedId == "img2"){
						
				
					 
						 newRec = addRec(canvas,event.pageX,event.pageY);
						 figure = newRec;
					
						
					}else if(draggedId == "img3"){
						
				
					
						newRect1 = addRect1(canvas,event.pageX,event.pageY);
						figure = newRect1;
					
						
						
					}else if(draggedId == "img4"){
						
						
				
						
						
					}
					
					var command = new draw2d.command.CommandAdd(canvas, figure, event.pageX , event.pageY);
					canvas.getCommandStack().execute(command);
					
			//	}    	
	               	//$("#design").css('border','none')	
	               //	$(".priCoil").css('display','none');
	              // 	$("#design").droppable("option", "disabled", true );  
	               
	               }
			    });
				*/
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
		
	
});