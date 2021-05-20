	



// 2 Wire Trasmitter

	function TwoWireTransmitter_FT(canvas,x1,y1){
		
	var twoWireTrans_FT = new LabeldTwoWireTrnsmtrFigure_FT({width:100,height:95});
        twoWireTrans_FT.setId("twoWireTrans_FT");
		twoWireTrans_FT.setResizeable(false);

		var FTPort_twoWireTransPlus = twoWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		FTPort_twoWireTransPlus.setName("FT_twowireTransPlus");
		FTPort_twoWireTransPlus.setId("FT_twowireTransPlusId");
		
        var FTPort_twoWireTransMinus = twoWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
		FTPort_twoWireTransMinus.setName("FT_twowireTransMinus");
		FTPort_twoWireTransMinus.setId("FT_twowireTransMinusId");
		
		
		canvas.add( twoWireTrans_FT, x1,y1); 
		return twoWireTrans_FT;
		
	}
	
	
	var LabeldTwoWireTrnsmtrFigure_FT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 50, 35, "FT 100").attr({
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

	function ThreeWireTransmitter_FT(canvas,x1,y1){
		
	var threeWireTrans_FT = new LabeldThreeWireTrnsmtrFigure_FT({width:120,height:100});
        threeWireTrans_FT.setId("threeWireTrans_FT");
		threeWireTrans_FT.setResizeable(false);

		var FTPort_threeWireTransSuplyPlus = threeWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		FTPort_threeWireTransSuplyPlus.setName("FT_threeWireTransSuplyPlus");
		FTPort_threeWireTransSuplyPlus.setId("FT_threeWireTransSuplyPlusId");
		
        var FTPort_threeWireTransSigPlus = threeWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
		FTPort_threeWireTransSigPlus.setName("FT_threeWireTransSigPlus");
		FTPort_threeWireTransSigPlus.setId("FT_threeWireTransSigPlusId");
		
		var FTPort_threeWireTransMinus = threeWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50,100));
		FTPort_threeWireTransMinus.setName("FT_threeWireTransMinus");
		FTPort_threeWireTransMinus.setId("FT_threeWireTransMinusId");
		
		
		canvas.add( threeWireTrans_FT, x1,y1); 
		return threeWireTrans_FT;
		
	}
	
	
	var LabeldThreeWireTrnsmtrFigure_FT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 60, 40, "FT 100").attr({
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


function FourWireTransmitter_FT(canvas,x1,y1){
		
	var fourWireTrans_FT = new LabeldFourWireTrnsmtrFigure_FT({width:110,height:130});
        fourWireTrans_FT.setId("fourWireTrans_FT");
		fourWireTrans_FT.setResizeable(false);

		var FTPort_fourWireTransSuplyPlus = fourWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,60));
		FTPort_fourWireTransSuplyPlus.setName("FT_fourWireTransSuplyPlus");
		FTPort_fourWireTransSuplyPlus.setId("FT_fourWireTransSuplyPlusId");
		
		
		var FTPort_fourWireTransSuplyMinus = fourWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,90));
		FTPort_fourWireTransSuplyMinus.setName("FT_fourWireTransSuplyMinus");
		FTPort_fourWireTransSuplyMinus.setId("FT_fourWireTransSuplyMinusId");
		
        var FTPort_fourWireTransSigPlus = fourWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,60));
		FTPort_fourWireTransSigPlus.setName("FT_fourWireTransSigPlus");
		FTPort_fourWireTransSigPlus.setId("FT_fourWireTransSigPlusId");
		
		var FTPort_fourWireTransSigMinus = fourWireTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,90));
		FTPort_fourWireTransSigMinus.setName("FT_fourWireTransSigMinus");
		FTPort_fourWireTransSigMinus.setId("FT_fourWireTransSigMinusId");
		
		
		canvas.add( fourWireTrans_FT, x1,y1); 
		return fourWireTrans_FT;
		
	}
	
	
	var LabeldFourWireTrnsmtrFigure_FT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 55, 40, "FT 100").attr({
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


// FT HART TRANSMITTER


function HartTransmitter_FT(canvas,x1,y1){
		
	var hartTrans_FT = new LabeldHartTrnsmtrFigure_FT({width:100,height:105});
        hartTrans_FT.setId("hartTrans_FT");
		hartTrans_FT.setResizeable(false);

		var FTPort_hartTransPlus = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(5,60));
		FTPort_hartTransPlus.setName("FTPort_hartTransplus");
		FTPort_hartTransPlus.setId("FTPort_hartTransplusId");
		
		
		var FTPort_hartTransMinu = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95,60));
		FTPort_hartTransMinu.setName("FTPort_hartTransminus");
		FTPort_hartTransMinu.setId("FTPort_hartTransminusId");
		
    
		
		
		canvas.add( hartTrans_FT, x1,y1); 
		return hartTrans_FT;
		
	}
	
	
	var LabeldHartTrnsmtrFigure_FT = draw2d.SetFigure.extend({

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
		
		this.canvas.paper.text( 50, 40, "FT").attr({
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

	function FFT_Transmitter_FT(canvas,x1,y1){
		
	var ffTrans_FT = new LabeldFFT_TrnsmtrFigure_FT({width:100,height:100});
        ffTrans_FT.setId("ffTrans_FT");
		ffTrans_FT.setResizeable(false);

		var FTPort_ffTransPlus = ffTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(25,0));
		FTPort_ffTransPlus.setName("FT_ffTransPlus");
		FTPort_ffTransPlus.setId("FT_ffTransPlusId");

		
        var FTPort_ffTransMinus = ffTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70,0));
		FTPort_ffTransMinus.setName("FT_ffTransMinus");
		FTPort_ffTransMinus.setId("FT_ffTransMinusId");
		
		
		canvas.add( ffTrans_FT, x1,y1); 
		return ffTrans_FT;
		
	}
	
	
	var LabeldFFT_TrnsmtrFigure_FT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 50, 55, "FT 100").attr({
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












