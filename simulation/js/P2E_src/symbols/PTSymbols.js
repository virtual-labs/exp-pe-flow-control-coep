	



// 2 Wire Trasmitter

	function TwoWireTransmitter_PT(canvas,x1,y1){
		
	var twoWireTrans_PT = new LabeldTwoWireTrnsmtrFigure_PT({width:100,height:95});
        twoWireTrans_PT.setId("twoWireTrans_PT");
		twoWireTrans_PT.setResizeable(false);

		var PTPort_twoWireTransPlus = twoWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		PTPort_twoWireTransPlus.setName("PT_twowireTransPlus");
		PTPort_twoWireTransPlus.setId("PT_twowireTransPlusId");
		
        var PTPort_twoWireTransMinus = twoWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
		PTPort_twoWireTransMinus.setName("PT_twowireTransMinus");
		PTPort_twoWireTransMinus.setId("PT_twowireTransMinusId");
		
		
		canvas.add( twoWireTrans_PT, x1,y1); 
		return twoWireTrans_PT;
		
	}
	
	
	var LabeldTwoWireTrnsmtrFigure_PT = draw2d.SetFigure.extend({

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
		
		
		
       this.canvas.paper.rect(0, 0, 100, 95).
       attr({"stroke-width" : 0
        }); 
		
		this.canvas.paper.circle(50, 35, 20).
       attr({"stroke-width" : 1
        }); 
		
		 this.canvas.paper.text( 50, 35, "PT 100").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
	   this.canvas.paper.rect(5, 55, 45, 40).
       attr({"stroke-width" : 1
        });
	  this.canvas.paper.path("M 15 75 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 25 65 l 0 20 ").
       attr({"stroke-width" : 2
        }); 
		
		 this.canvas.paper.rect(50, 55, 45, 40).
       attr({"stroke-width" : 1
        });
     
		this.canvas.paper.path("M 60 75 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
		
		 this.canvas.paper.text( 50, 5, "2-Wire Transmitter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
	
	 
      return this.canvas.paper.setFinish();
    },


});
	
	
// 3 wire transmitter

	function ThreeWireTransmitter_PT(canvas,x1,y1){
		
	var threeWireTrans_PT = new LabeldThreeWireTrnsmtrFigure_PT({width:120,height:100});
        threeWireTrans_PT.setId("threeWireTrans_PT");
		threeWireTrans_PT.setResizeable(false);

		var PTPort_threeWireTransSuplyPlus = threeWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		PTPort_threeWireTransSuplyPlus.setName("PT_threeWireTransSuplyPlus");
		PTPort_threeWireTransSuplyPlus.setId("PT_threeWireTransSuplyPlusId");
		
        var PTPort_threeWireTransSigPlus = threeWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
		PTPort_threeWireTransSigPlus.setName("PT_threeWireTransSigPlus");
		PTPort_threeWireTransSigPlus.setId("PT_threeWireTransSigPlusId");
		
		var PTPort_threeWireTransMinus = threeWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50,100));
		PTPort_threeWireTransMinus.setName("PT_threeWireTransMinus");
		PTPort_threeWireTransMinus.setId("PT_threeWireTransMinusId");
		
		
		canvas.add( threeWireTrans_PT, x1,y1); 
		return threeWireTrans_PT;
		
	}
	
	
	var LabeldThreeWireTrnsmtrFigure_PT = draw2d.SetFigure.extend({

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
		
       this.canvas.paper.rect(0, 0, 120, 100).
       attr({"stroke-width" : 0
        }); 
		
		this.canvas.paper.circle(60, 40, 20).
       attr({"stroke-width" : 1
        }); 
		
		 this.canvas.paper.text( 60, 40, "PT 100").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 15, 30, "supply").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 15, 45, "24 VDC").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 100, 30, "signal").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 105, 45, "4-20 mA").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
	   this.canvas.paper.rect(0, 60, 40, 40).
       attr({"stroke-width" : 1
        });
	  this.canvas.paper.path("M 10 80 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 20 70 l 0 20 ").
       attr({"stroke-width" : 2
        }); 
		
		 this.canvas.paper.rect(40, 60, 40, 40).
       attr({"stroke-width" : 1
        });
     
		this.canvas.paper.path("M 50 80 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
		 this.canvas.paper.rect(80, 60, 40, 40).
       attr({"stroke-width" : 1
        });
		
		
		 this.canvas.paper.path("M 90 80 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 100 70 l 0 20 ").
       attr({"stroke-width" : 2
        }); 
		
		 this.canvas.paper.text( 60, 5, "3-Wire Transmitter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
	 
      return this.canvas.paper.setFinish();
    },


});	

// 4 wire transmitter


function FourWireTransmitter_PT(canvas,x1,y1){
		
	var fourWireTrans_PT = new LabeldFourWireTrnsmtrFigure_PT({width:110,height:130});
        fourWireTrans_PT.setId("fourWireTrans_PT");
		fourWireTrans_PT.setResizeable(false);

		var PTPort_fourWireTransSuplyPlus = fourWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,60));
		PTPort_fourWireTransSuplyPlus.setName("PT_fourWireTransSuplyPlus");
		PTPort_fourWireTransSuplyPlus.setId("PT_fourWireTransSuplyPlusId");
		
		
		var PTPort_fourWireTransSuplyMinus = fourWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,90));
		PTPort_fourWireTransSuplyMinus.setName("PT_fourWireTransSuplyMinus");
		PTPort_fourWireTransSuplyMinus.setId("PT_fourWireTransSuplyMinusId");
		
        var PTPort_fourWireTransSigPlus = fourWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,60));
		PTPort_fourWireTransSigPlus.setName("PT_fourWireTransSigPlus");
		PTPort_fourWireTransSigPlus.setId("PT_fourWireTransSigPlusId");
		
		var PTPort_fourWireTransSigMinus = fourWireTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,90));
		PTPort_fourWireTransSigMinus.setName("PT_fourWireTransSigMinus");
		PTPort_fourWireTransSigMinus.setId("PT_fourWireTransSigMinusId");
		
		
		canvas.add( fourWireTrans_PT, x1,y1); 
		return fourWireTrans_PT;
		
	}
	
	
	var LabeldFourWireTrnsmtrFigure_PT = draw2d.SetFigure.extend({

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
		
       this.canvas.paper.rect(0, 0, 110, 130).
       attr({"stroke-width" : 1
        }); 
		
		this.canvas.paper.circle(55, 40, 20).
       attr({"stroke-width" : 1
        }); 
		
		 this.canvas.paper.text( 55, 40, "PT 100").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 15, 30, "supply").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 15, 45, "24 VDC").attr({
			stroke : 'black',
			'font-size' : 7,
			"font-family": "sans-serif" 
		});
		
		
		this.canvas.paper.text( 95, 30, "signal").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.text( 95, 45, "4-20 mA").attr({
			stroke : 'black',
			'font-size' : 7,
			"font-family": "sans-serif" 
		});
		
		
	   this.canvas.paper.rect(0, 60, 40, 35).
       attr({"stroke-width" : 1
        });
	  this.canvas.paper.path("M 10 80 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 20 70 l 0 20 ").
       attr({"stroke-width" : 2
        }); 
		
		 this.canvas.paper.rect(0, 95, 40, 35).
       attr({"stroke-width" : 1
        });
     
		this.canvas.paper.path("M 10 115 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
		 this.canvas.paper.rect(70, 60, 40, 35).
       attr({"stroke-width" : 1
        });
		
		
		 this.canvas.paper.path("M 80 80 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 90 70 l 0 20 ").
       attr({"stroke-width" : 2
        }); 
		
		 this.canvas.paper.rect(70, 95, 40, 35).
       attr({"stroke-width" : 1
        });
     
		this.canvas.paper.path("M 80 115 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
		
		
		 this.canvas.paper.text( 55, 10, "4-Wire Transmitter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
		
		
	 
      return this.canvas.paper.setFinish();
    },


});	


// PT HART TRANSMITTER


function HartTransmitter_PT(canvas,x1,y1){
		
	var hartTrans_PT = new LabeldHartTrnsmtrFigure_PT({width:100,height:105});
        hartTrans_PT.setId("hartTrans_PT");
		hartTrans_PT.setResizeable(false);

		var PTPort_hartTransPlus = hartTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(5,60));
		PTPort_hartTransPlus.setName("PTPort_hartTransplus");
		PTPort_hartTransPlus.setId("PTPort_hartTransplusId");
		
		
		var PTPort_hartTransMinu = hartTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95,60));
		PTPort_hartTransMinu.setName("PTPort_hartTransminus");
		PTPort_hartTransMinu.setId("PTPort_hartTransminusId");
		
    
		
		
		canvas.add( hartTrans_PT, x1,y1); 
		return hartTrans_PT;
		
	}
	
	
	var LabeldHartTrnsmtrFigure_PT = draw2d.SetFigure.extend({

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
		
        this.canvas.paper.rect(0, 0, 100, 105).
       attr({"stroke-width" : 0
        }); 
		this.canvas.paper.text( 50, 10, "HART Transmitter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.circle(50, 65, 40).
       attr({"stroke-width" : 1
        }); 
		
		this.canvas.paper.text( 50, 40, "PT").attr({
			stroke : 'black',
			'font-size' : 15,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.path("M 12 65 l 15 0 ").
       attr({"stroke-width" : 2
        });
		
		this.canvas.paper.path("M 20 58 l 0 15 ").
       attr({"stroke-width" : 2
        });
		
		this.canvas.paper.path("M 72 65 l 15 0 ").
       attr({"stroke-width" : 2
        });
		
		this.canvas.paper.text( 50, 60, "Signal").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		this.canvas.paper.text( 50, 72, "4-20mA").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		this.canvas.paper.image("images/singwave.png",30, 70, 40, 40);
	 
      return this.canvas.paper.setFinish();
    },


});	


// FFT Trasmitter

	function FFT_Transmitter_PT(canvas,x1,y1){
		
	var ffTrans_PT = new LabeldFFT_TrnsmtrFigure_PT({width:100,height:100});
        ffTrans_PT.setId("ffTrans_PT");
		ffTrans_PT.setResizeable(false);

		var PTPort_ffTransPlus = ffTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(25,0));
		PTPort_ffTransPlus.setName("PT_ffTransPlus");
		PTPort_ffTransPlus.setId("PT_ffTransPlusId");

		
        var PTPort_ffTransMinus = ffTrans_PT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70,0));
		PTPort_ffTransMinus.setName("PT_ffTransMinus");
		PTPort_ffTransMinus.setId("PT_ffTransMinusId");
		
		
		canvas.add( ffTrans_PT, x1,y1); 
		return ffTrans_PT;
		
	}
	
	
	var LabeldFFT_TrnsmtrFigure_PT = draw2d.SetFigure.extend({

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
       attr({"stroke-width" : 0
        }); 
		
		
		
	   this.canvas.paper.rect(5, 0, 45, 40).
       attr({"stroke-width" : 1
        });
	  this.canvas.paper.path("M 15 20 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 25 10 l 0 20 ").
       attr({"stroke-width" : 2
        }); 
		
		 this.canvas.paper.rect(50, 0, 45, 40).
       attr({"stroke-width" : 1
        });
     
		this.canvas.paper.path("M 60 20 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
		this.canvas.paper.circle(50, 65, 25).
       attr({"stroke-width" : 1
        }); 
		
		 this.canvas.paper.text( 50, 55, "PT 100").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
       this.canvas.paper.image("images/singwave.png",30, 52, 40, 40);
	   this.canvas.paper.text( 50, 98, "Foundation Field Bus ").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
	 
	   this.canvas.paper.text( 50, 110, "Transmitter").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
	 
      return this.canvas.paper.setFinish();
    },


});













