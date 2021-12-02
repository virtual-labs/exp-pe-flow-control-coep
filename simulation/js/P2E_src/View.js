

example.View = draw2d.Canvas.extend({
	
	init:function(id){
		this._super(id);
		
		this.setScrollArea($("#draw2Did"));
		
		this.currentDropConnection = null;
		
		
	},

    /**
     * @method
     * Called if the DragDrop object is moving around.<br>
     * <br>
     * Graphiti use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dragged DOM element.
     * @param {Number} x the x coordinate of the drag
     * @param {Number} y the y coordinate of the drag
     * 
     * @template
     **/
    onDrag:function(droppedDomNode, x, y )
    {
    },
    
    /**
     * @method
     * Called if the user drop the droppedDomNode onto the canvas.<br>
     * <br>
     * Draw2D use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dropped DOM element.
     * @param {Number} x the x coordinate of the drop
     * @param {Number} y the y coordinate of the drop
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @private
     **/
    onDrop : function(droppedDomNode, x, y)
    {   
	    var figure;
        var type = $(droppedDomNode).data("shape");
		
		if(type == "pwrSply"){
			
			powersupply = powerSupply(this,x,y);
			figure = powersupply;
	//		$("#pwrSply").draggable({ disabled: true });
		}
		
		if(type == "signal"){
			
			signl = signal(this,x,y);
			figure = signl;
		}
       
	   if(type == "configurator"){
			
			configurator = Configurator(this,x,y);
			figure = configurator;
		}
	    if(type == "fftCard"){
			
			fft_Card = fftCard(this,x,y);
			figure = fft_Card;
		}
	    
	if(type == "analogOut"){
			
		analogOut = AnalogOut(this,x,y);
			figure = analogOut;
	
		}
	   
	   
	   // LT TRANSMITTER TYPES
	   if(type == "LT_twoWireTrsmtr"){
			
			twoWireTransmitter_lt = TwoWireTransmitter_LT(this,x,y);
			figure = twoWireTransmitter_lt;
		}
	   
	    if(type == "LT_threeWireTrsmtr"){
			
			threeWireTransmitter_lt = ThreeWireTransmitter_LT(this,x,y);
			figure = threeWireTransmitter_lt;
		}
		if(type == "LT_fourWireTrsmtr"){
			
			fourWireTransmitter_lt = FourWireTransmitter_LT(this,x,y);
			figure = fourWireTransmitter_lt;
		}		
		if(type == "LT_hartTrsmtr"){
			
			hartTransmitter_lt = HartTransmitter_LT(this,x,y);
			figure = hartTransmitter_lt;
		}
		if(type == "LT_FFTrsmtr"){
			
			fft_Transmitter_lt = FFT_Transmitter_LT(this,x,y);
			figure = fft_Transmitter_lt;
		}
		
		
	   // TT TRANSMITTER TYPES
	   if(type == "TT_twoWireTrsmtr"){
			
			twoWireTransmitter_tt = TwoWireTransmitter_TT(this,x,y);
			figure = twoWireTransmitter_tt;
		}
	   
	    if(type == "TT_threeWireTrsmtr"){
			
			threeWireTransmitter_tt = ThreeWireTransmitter_TT(this,x,y);
			figure = threeWireTransmitter_tt;
		}
		if(type == "TT_fourWireTrsmtr"){
			
			fourWireTransmitter_tt = FourWireTransmitter_TT(this,x,y);
			figure = fourWireTransmitter_tt;
		}
	    if(type == "TT_hartTrsmtr"){
			
			hartTransmitter_tt = HartTransmitter_TT(this,x,y);
			figure = hartTransmitter_tt;
		}
	   if(type == "TT_FFTrsmtr"){
			
			fft_Transmitter_tt = FFT_Transmitter_TT(this,x,y);
			figure = fft_Transmitter_tt;
		}
	   
	   
	   // PT TRANSMITTER TYPES
	   if(type == "PT_twoWireTrsmtr"){
			
			twoWireTransmitter_pt = TwoWireTransmitter_PT(this,x,y);
			figure = twoWireTransmitter_pt;
		}
	   
	    if(type == "PT_threeWireTrsmtr"){
			
			threeWireTransmitter_pt = ThreeWireTransmitter_PT(this,x,y);
			figure = threeWireTransmitter_pt;
		}
		if(type == "PT_fourWireTrsmtr"){
			
			fourWireTransmitter_pt = FourWireTransmitter_PT(this,x,y);
			figure = fourWireTransmitter_pt;
		}
	   if(type == "PT_hartTrsmtr"){
			
			hartTransmitter_pt = HartTransmitter_PT(this,x,y);
			figure = hartTransmitter_pt;
		}
	    if(type == "PT_FFTrsmtr"){
			
			fft_Transmitter_pt = FFT_Transmitter_PT(this,x,y);
			figure = fft_Transmitter_pt;
		}
	   
	    // FT TRANSMITTER TYPES
	   if(type == "FT_twoWireTrsmtr"){
			
			twoWireTransmitter_ft = TwoWireTransmitter_FT(this,x,y);
			figure = twoWireTransmitter_ft;
		}
	   
	    if(type == "FT_threeWireTrsmtr"){
			
			threeWireTransmitter_ft = ThreeWireTransmitter_FT(this,x,y);
			figure = threeWireTransmitter_ft;
		}
		if(type == "FT_fourWireTrsmtr"){
			
			fourWireTransmitter_ft = FourWireTransmitter_FT(this,x,y);
			figure = fourWireTransmitter_ft;
		}
	    if(type == "FT_hartTrsmtr"){
			
			hartTransmitter_ft = HartTransmitter_FT(this,x,y);
			figure = hartTransmitter_ft;
		}
		if(type == "FT_FFTrsmtr"){
			
			fft_Transmitter_ft = FFT_Transmitter_FT(this,x,y);
			figure = fft_Transmitter_ft;
		}
	   
	   // I2P Converter Symbols
	   
	     if(type == "LY_100"){
			
			I2P_LY100 = I2P_LY_100(this,x,y);
			figure = I2P_LY100;
		}
	     if(type == "TY_100"){
				
				I2P_TY100 = I2P_TY_100(this,x,y);
				figure = I2P_TY100;
			}
	     if(type == "PY_100"){
				
				I2P_PY100 = I2P_PY_100(this,x,y);
				figure = I2P_PY100;
			}
	     if(type == "FY_100"){
				
				I2P_FY100 = I2P_FY_100(this,x,y);
				figure = I2P_FY100;
			}
	      
	     // Pneumatic Transmitter  Symbols
	     
	     if(type == "PT_LT_100"){
				
				PT_LT100 = PT_LT_100(this,x,y);
				figure = PT_LT100;
			}
	     if(type == "PT_TT_100"){
				
				PT_TT100 = PT_TT_100(this,x,y);
				figure = PT_TT100;
			}
	     if(type == "PT_PT_100"){
				
				PT_PT100 = PT_PT_100(this,x,y);
				figure = PT_PT100;
			}
	     if(type == "PT_FT_100"){
				
				PT_FT100 = PT_FT_100(this,x,y);
				figure = PT_FT100;
			}
	     
	     
	     // P/E Converter Symbols
	     if(type == "P2E_LY_100"){
				
				P2E_LY100 = P2E_LY_100(this,x,y);
				figure = P2E_LY100;
			}
	     if(type == "P2E_TY_100"){
				
				P2E_TY100 = P2E_TY_100(this,x,y);
				figure = P2E_TY100;
			}
	     if(type == "P2E_PY_100"){
				
				P2E_PY100 = P2E_PY_100(this,x,y);
				figure = P2E_PY100;
			}
	     if(type == "P2E_FY_100"){
				
				P2E_FY100 = P2E_FY_100(this,x,y);
				figure = P2E_FY100;
			}
	     
	     
        // create a command for the undo/redo support
        var command = new draw2d.command.CommandAdd(this, figure, x, y);
        this.getCommandStack().execute(command);
    }
});

