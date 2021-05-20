	
// Power Supply Symbol
	
	function powerSupply(canvas,x1,y1){
		var pwrsply = new LabeldpowerSupplyFigure({width:100,height:100});
        pwrsply.setId("PowerSupply");
		pwrsply.setResizeable(false);
		
		var Port_pwrsplyPlus = pwrsply.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,35));
		Port_pwrsplyPlus.setName("psPlus");
		Port_pwrsplyPlus.setId("psPlusId");
		
        var Port_pwrsplyMinus = pwrsply.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,65));
		Port_pwrsplyMinus.setName("psMinus");
		Port_pwrsplyMinus.setId("psMinusId");
		
		
		canvas.add( pwrsply, x1,y1); 
		return pwrsply;

}


var LabeldpowerSupplyFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
    
      
     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
      
      
     // var x =  ((this.width-20)/2);
      
      /* this.canvas.paper.path("M 15 0 l -15 30 l 30 0 l -15 -30").
       attr({"stroke-width" : 1
        }); */
		
       this.canvas.paper.rect(0, 0, 100, 100).
       attr({"stroke-width" : 1
        }); 
		
	    this.canvas.paper.rect(70, 20, 30, 30).
       attr({"stroke-width" : 1
        }); 
		
		this.canvas.paper.path("M 79 35 l 15 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 86 28 l 0 15 ").
       attr({"stroke-width" : 2
        }); 		
		
		this.canvas.paper.rect(70, 50, 30, 30).
       attr({"stroke-width" : 1
        }); 
       
	   this.canvas.paper.path("M 79 65 l 15 0 ").
       attr({"stroke-width" : 2
        }); 
		
	   this.canvas.paper.text( 48, 40, "Power").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
		this.canvas.paper.text( 48, 55, "Supply").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
      return this.canvas.paper.setFinish();
    },


});


// Analog Controller IN / Signal

	function signal(canvas,x2,y2){
		var signal = new LabeldSignalFigure({width:100,height:100});
       // signal.setStroke(0);
       // signal.setBackgroundColor("#ffffff");
        signal.setResizeable(false);
        signal.setId("Signal");
		
		var port_sgnlMinus = signal.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,65));
		port_sgnlMinus.setName("sgnlMinus");		
		port_sgnlMinus.setId("sgnlMinusId");
		
        var port_sgnlplus = signal.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,35));
        port_sgnlplus.setName("sgnlplus");		
		port_sgnlplus.setId("sgnlplusId");
		
         /*    rec.port1 = rec.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70,0)); 
                     */
        
        
         //rec1.installEditPolicy(new draw2d.policy.figure.GlowSelectionFeedbackPolicy()); 
		// rec2.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
		// rec2.installEditPolicy(new draw2d.policy.figure.SlimSelectionFeedbackPolicy());
		 
         
		canvas.add( signal, x2,y2); 
		return signal;

}
	
	
	
		
	var LabeldSignalFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
	//	this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
    
      
     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
      
      
     // var x =  ((this.width-20)/2);
     
     
    this.canvas.paper.rect(0, 0, 100, 100).
       attr({"stroke-width" : 1
        }); 
	this.canvas.paper.rect(0, 20, 30, 30).
       attr({"stroke-width" : 1
        }); 
	this.canvas.paper.path("M 8 35 l 15 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 16 28 l 0 15 ").
       attr({"stroke-width" : 2
        }); 	
		
	this.canvas.paper.rect(0, 50, 30, 30).
       attr({"stroke-width" : 1
        }); 

     this.canvas.paper.path("M 9 65 l 15 0 ").
       attr({"stroke-width" : 2
        }); 		
		
	  this.canvas.paper.text( 70, 40, "Analog").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
		this.canvas.paper.text( 68, 55, "IN").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});	
		
		
		
      return this.canvas.paper.setFinish();
    },


});
	
	

	// CONFIGURATOR

function Configurator(canvas,x1,y1){
		
	var configurator = new LabeldConfiguratorFigure({width:100,height:100});
        configurator.setId("fourWireTrans_LT");
		configurator.setResizeable(false);

		
		var configuratorPlus = configurator.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(18,100));
		configuratorPlus.setName("configuratorPlus");
		configuratorPlus.setId("configuratorPlusId");
		
		var configuratorMinu = configurator.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(80,100));
		configuratorMinu.setName("configuratorMinu");
		configuratorMinu.setId("configuratorMinuId");
		
     
		
		
		canvas.add( configurator, x1,y1); 
		return configurator;
		
	}
	
	
	var LabeldConfiguratorFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
    
      
     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
      
      
     // var x =  ((this.width-20)/2);
      
      /* this.canvas.paper.path("M 15 0 l -15 30 l 30 0 l -15 -30").
       attr({"stroke-width" : 1
        }); */
		
       this.canvas.paper.rect(0, 0, 100, 100).
       attr({"stroke-width" : 1
        }); 
				
		this.canvas.paper.text( 50, 10, "Configurator").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
		 this.canvas.paper.rect(10, 35, 20, 20).
       attr({"stroke-width" : 1
        }); 
		
		this.canvas.paper.rect(40, 35, 20, 20).
       attr({"stroke-width" : 1
        }); 
	 
	   this.canvas.paper.rect(70, 35, 20, 20).
       attr({"stroke-width" : 1
        }); 
		
		this.canvas.paper.path("M 8 88 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
		this.canvas.paper.path("M 18 78 l 0 20 ").
       attr({"stroke-width" : 2
        });
		
		this.canvas.paper.path("M 70 88 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
      return this.canvas.paper.setFinish();
    },


});	
	
	
	
	
	// Analog Controller IN / Signal

	function fftCard(canvas,x2,y2){
		var fft_card = new LabeldFFT_CardFigure({width:100,height:100});
       // signal.setStroke(0);
       // signal.setBackgroundColor("#ffffff");
        fft_card.setResizeable(false);
        fft_card.setId("fft_card");
		
		var port_fftCardPlus = fft_card.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,10));
		port_fftCardPlus.setName("fftCardPlus");		
		port_fftCardPlus.setId("fftCardPlusId");
		
        var port_fftCardMinus = fft_card.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,90));
        port_fftCardMinus.setName("fftCardMinus");		
		port_fftCardMinus.setId("fftCardMinusId");
		
         /*    rec.port1 = rec.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70,0)); 
                     */
        
        
         //rec1.installEditPolicy(new draw2d.policy.figure.GlowSelectionFeedbackPolicy()); 
		// rec2.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
		// rec2.installEditPolicy(new draw2d.policy.figure.SlimSelectionFeedbackPolicy());
		 
         
		canvas.add( fft_card, x2,y2); 
		return fft_card;

}
	
	
	
		
	var LabeldFFT_CardFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
	//	this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
    
      
     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
      
      
     // var x =  ((this.width-20)/2);
     
     
    this.canvas.paper.rect(0, 0, 100, 100).
       attr({"stroke-width" : 0
        }); 
	this.canvas.paper.rect(40, 0, 60, 100).
       attr({"stroke-width" : 1
        }); 
		
	this.canvas.paper.rect(40, 0, 60, 100).
       attr({"stroke-width" : 1
        }); 	
	
	this.canvas.paper.path("M 0 10 l 40 0 ").
       attr({"stroke-width" : 2
        });
		
	this.canvas.paper.path("M 0 90 l 40 0 ").
       attr({"stroke-width" : 2
        });	
	this.canvas.paper.path("M 45 10 l 15 0 ").
       attr({"stroke-width" : 2
        });
	this.canvas.paper.path("M 53 3 l 0 15 ").
       attr({"stroke-width" : 2
        });
	this.canvas.paper.path("M 45 90 l 15 0 ").
       attr({"stroke-width" : 2
        });
	this.canvas.paper.path("M 25 10 l 0 15 l -10 5 l 20 5 l -20 5 l 20 5 l -20 5 l 20 5 l -20 5 l 20 5 l -20 5 l 10 5 l 0 15").
       attr({"stroke-width" : 2
        });	
		
	this.canvas.paper.text( 0, 50, "250").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});	
		
	this.canvas.paper.text( 0, 60, "ohm").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});	
	this.canvas.paper.text( 70, 40, "FFT").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});	
	this.canvas.paper.text( 70, 60, "Card").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});		
		
      return this.canvas.paper.setFinish();
    },


});
	



	// Analog OUT 

	function AnalogOut(canvas,x2,y2){
//		var signal = new LabeldSignalFigure({width:100,height:100});
		var analogOut = new LabeldAnalogOutFigure({width:100,height:100});
       // analogOut.setStroke(0);
       // analogOut.setBackgroundColor("#ffffff");
		analogOut.setResizeable(false);
		analogOut.setId("AnalogOut");
		
		var port_analogOutMinus = analogOut.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,65));
		port_analogOutMinus.setName("analogOutMinus");		
		port_analogOutMinus.setId("analogOutMinusId");
		
        var port_analogOutplus = analogOut.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,35));
        port_analogOutplus.setName("analogOutplus");		
        port_analogOutplus.setId("analogOutplusId");
		
         /*    rec.port1 = rec.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70,0)); 
                     */
        
        
         //rec1.installEditPolicy(new draw2d.policy.figure.GlowSelectionFeedbackPolicy()); 
		// rec2.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
		// rec2.installEditPolicy(new draw2d.policy.figure.SlimSelectionFeedbackPolicy());
		 
         
		canvas.add( analogOut, x2,y2); 
		return analogOut;

}
	
	
	var LabeldAnalogOutFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
	//	this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
    
      
     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
      
      
     // var x =  ((this.width-20)/2);
     
     
    this.canvas.paper.rect(0, 0, 100, 100).
       attr({"stroke-width" : 1
        }); 
	this.canvas.paper.rect(0, 20, 30, 30).
       attr({"stroke-width" : 1
        }); 
	this.canvas.paper.path("M 8 35 l 15 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 16 28 l 0 15 ").
       attr({"stroke-width" : 2
        }); 	
		
	this.canvas.paper.rect(0, 50, 30, 30).
       attr({"stroke-width" : 1
        }); 

     this.canvas.paper.path("M 9 65 l 15 0 ").
       attr({"stroke-width" : 2
        }); 		
		
	  this.canvas.paper.text( 70, 40, "Analog").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
		this.canvas.paper.text( 68, 55, "OUT").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});	
		
		
		
      return this.canvas.paper.setFinish();
    },


});
	