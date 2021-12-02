	



// 2 Wire Trasmitter

	function TwoWireTransmitter_TT(canvas,x1,y1){
		
	var twoWireTrans_TT = new LabeldTwoWireTrnsmtrFigure_TT({width:100,height:95});
        twoWireTrans_TT.setId("twoWireTrans_TT");
		twoWireTrans_TT.setResizeable(false);

		var TTPort_twoWireTransPlus = twoWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		TTPort_twoWireTransPlus.setName("TT_twowireTransPlus");
		TTPort_twoWireTransPlus.setId("TT_twowireTransPlusId");
		
        var TTPort_twoWireTransMinus = twoWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
		TTPort_twoWireTransMinus.setName("TT_twowireTransMinus");
		TTPort_twoWireTransMinus.setId("TT_twowireTransMinusId");
		
		
		canvas.add( twoWireTrans_TT, x1,y1); 
		return twoWireTrans_TT;
		
	}
	
	
	var LabeldTwoWireTrnsmtrFigure_TT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 50, 35, "TT 100").attr({
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

	function ThreeWireTransmitter_TT(canvas,x1,y1){
		
	var threeWireTrans_TT = new LabeldThreeWireTrnsmtrFigure_TT({width:120,height:100});
        threeWireTrans_TT.setId("threeWireTrans_TT");
		threeWireTrans_TT.setResizeable(false);

		var TTPort_threeWireTransSuplyPlus = threeWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		TTPort_threeWireTransSuplyPlus.setName("TT_threeWireTransSuplyPlus");
		TTPort_threeWireTransSuplyPlus.setId("TT_threeWireTransSuplyPlusId");
		
        var TTPort_threeWireTransSigPlus = threeWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
		TTPort_threeWireTransSigPlus.setName("TT_threeWireTransSigPlus");
		TTPort_threeWireTransSigPlus.setId("TT_threeWireTransSigPlusId");
		
		var TTPort_threeWireTransMinus = threeWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50,100));
		TTPort_threeWireTransMinus.setName("TT_threeWireTransMinus");
		TTPort_threeWireTransMinus.setId("TT_threeWireTransMinusId");
		
		
		canvas.add( threeWireTrans_TT, x1,y1); 
		return threeWireTrans_TT;
		
	}
	
	
	var LabeldThreeWireTrnsmtrFigure_TT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 60, 40, "TT 100").attr({
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


function FourWireTransmitter_TT(canvas,x1,y1){
		
	var fourWireTrans_TT = new LabeldFourWireTrnsmtrFigure_TT({width:110,height:130});
        fourWireTrans_TT.setId("fourWireTrans_TT");
		fourWireTrans_TT.setResizeable(false);

		var TTPort_fourWireTransSuplyPlus = fourWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,60));
		TTPort_fourWireTransSuplyPlus.setName("TT_fourWireTransSuplyPlus");
		TTPort_fourWireTransSuplyPlus.setId("TT_fourWireTransSuplyPlusId");
		
		
		var TTPort_fourWireTransSuplyMinus = fourWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,90));
		TTPort_fourWireTransSuplyMinus.setName("TT_fourWireTransSuplyMinus");
		TTPort_fourWireTransSuplyMinus.setId("TT_fourWireTransSuplyMinusId");
		
        var TTPort_fourWireTransSigPlus = fourWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,60));
		TTPort_fourWireTransSigPlus.setName("TT_fourWireTransSigPlus");
		TTPort_fourWireTransSigPlus.setId("TT_fourWireTransSigPlusId");
		
		var TTPort_fourWireTransSigMinus = fourWireTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,90));
		TTPort_fourWireTransSigMinus.setName("TT_fourWireTransSigMinus");
		TTPort_fourWireTransSigMinus.setId("TT_fourWireTransSigMinusId");
		
		
		canvas.add( fourWireTrans_TT, x1,y1); 
		return fourWireTrans_TT;
		
	}
	
	
	var LabeldFourWireTrnsmtrFigure_TT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 55, 40, "TT 100").attr({
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




// TT HART TRANSMITTER


function HartTransmitter_TT(canvas,x1,y1){
		
	var hartTrans_TT = new LabeldHartTrnsmtrFigure_TT({width:100,height:105});
        hartTrans_TT.setId("hartTrans_TT");
		hartTrans_TT.setResizeable(false);

		var TTPort_hartTransPlus = hartTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(5,60));
		TTPort_hartTransPlus.setName("TTPort_hartTransplus");
		TTPort_hartTransPlus.setId("TTPort_hartTransplusId");
		
		
		var TTPort_hartTransMinu = hartTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95,60));
		TTPort_hartTransMinu.setName("TTPort_hartTransminus");
		TTPort_hartTransMinu.setId("TTPort_hartTransminusId");
		
    
		
		
		canvas.add( hartTrans_TT, x1,y1); 
		return hartTrans_TT;
		
	}
	
	
	var LabeldHartTrnsmtrFigure_TT = draw2d.SetFigure.extend({

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
		
		this.canvas.paper.text( 50, 40, "TT").attr({
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

	function FFT_Transmitter_TT(canvas,x1,y1){
		
	var ffTrans_TT = new LabeldFFT_TrnsmtrFigure_TT({width:100,height:100});
        ffTrans_TT.setId("ffTrans_TT");
		ffTrans_TT.setResizeable(false);

		var TTPort_ffTransPlus = ffTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(25,0));
		TTPort_ffTransPlus.setName("TT_ffTransPlus");
		TTPort_ffTransPlus.setId("TT_ffTransPlusId");

		
        var TTPort_ffTransMinus = ffTrans_TT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70,0));
		TTPort_ffTransMinus.setName("TT_ffTransMinus");
		TTPort_ffTransMinus.setId("TT_ffTransMinusId");
		
		
		canvas.add( ffTrans_TT, x1,y1); 
		return ffTrans_TT;
		
	}
	
	
	var LabeldFFT_TrnsmtrFigure_TT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 50, 55, "TT 100").attr({
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






