


// 2 Wire Trasmitter

	function TwoWireTransmitter_LT(canvas,x1,y1){
		
	var twoWireTrans_LT = new LabeldTwoWireTrnsmtrFigure_LT({width:100,height:95});
        twoWireTrans_LT.setId("twoWireTrans_LT");
		twoWireTrans_LT.setResizeable(false);

		var LTPort_twoWireTransPlus = twoWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		LTPort_twoWireTransPlus.setName("LT_twowireTransPlus");
		LTPort_twoWireTransPlus.setId("LT_twowireTransPlusId");

		
        var LTPort_twoWireTransMinus = twoWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
		LTPort_twoWireTransMinus.setName("LT_twowireTransMinus");
		LTPort_twoWireTransMinus.setId("LT_twowireTransMinusId");
		
		
		canvas.add( twoWireTrans_LT, x1,y1); 
		return twoWireTrans_LT;
		
	}
	
	
	var LabeldTwoWireTrnsmtrFigure_LT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 50, 35, "LT 100").attr({
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

	function ThreeWireTransmitter_LT(canvas,x1,y1){
		
	var threeWireTrans_LT = new LabeldThreeWireTrnsmtrFigure_LT({width:120,height:100});
        threeWireTrans_LT.setId("threeWireTrans_LT");
		threeWireTrans_LT.setResizeable(false);

		var LTPort_threeWireTransSuplyPlus = threeWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		LTPort_threeWireTransSuplyPlus.setName("LT_threeWireTransSuplyPlus");
		LTPort_threeWireTransSuplyPlus.setId("LT_threeWireTransSuplyPlusId");
		
        var LTPort_threeWireTransSigPlus = threeWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
		LTPort_threeWireTransSigPlus.setName("LT_threeWireTransSigPlus");
		LTPort_threeWireTransSigPlus.setId("LT_threeWireTransSigPlusId");
		
		var LTPort_threeWireTransMinus = threeWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50,100));
		LTPort_threeWireTransMinus.setName("LT_threeWireTransMinus");
		LTPort_threeWireTransMinus.setId("LT_threeWireTransMinusId");
		
		
		canvas.add( threeWireTrans_LT, x1,y1); 
		return threeWireTrans_LT;
		
	}
	
	
	var LabeldThreeWireTrnsmtrFigure_LT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 60, 40, "LT 100").attr({
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


function FourWireTransmitter_LT(canvas,x1,y1){
		
	var fourWireTrans_LT = new LabeldFourWireTrnsmtrFigure_LT({width:110,height:130});
        fourWireTrans_LT.setId("fourWireTrans_LT");
		fourWireTrans_LT.setResizeable(false);

		var LTPort_fourWireTransSuplyPlus = fourWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,60));
		LTPort_fourWireTransSuplyPlus.setName("LT_fourWireTransSuplyPlus");
		LTPort_fourWireTransSuplyPlus.setId("LT_fourWireTransSuplyPlusId");
		
		
		var LTPort_fourWireTransSuplyMinus = fourWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,90));
		LTPort_fourWireTransSuplyMinus.setName("LT_fourWireTransSuplyMinus");
		LTPort_fourWireTransSuplyMinus.setId("LT_fourWireTransSuplyMinusId");
		
        var LTPort_fourWireTransSigPlus = fourWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,60));
		LTPort_fourWireTransSigPlus.setName("LT_fourWireTransSigPlus");
		LTPort_fourWireTransSigPlus.setId("LT_fourWireTransSigPlusId");
		
		var LTPort_fourWireTransSigMinus = fourWireTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,90));
		LTPort_fourWireTransSigMinus.setName("LT_fourWireTransSigMinus");
		LTPort_fourWireTransSigMinus.setId("LT_fourWireTransSigMinusId");
		
		
		canvas.add( fourWireTrans_LT, x1,y1); 
		return fourWireTrans_LT;
		
	}
	
	
	var LabeldFourWireTrnsmtrFigure_LT = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 55, 40, "LT 100").attr({
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




// LT HART TRANSMITTER


function HartTransmitter_LT(canvas,x1,y1){
		
	var hartTrans_LT = new LabeldHartTrnsmtrFigure_LT({width:100,height:105});
        hartTrans_LT.setId("hartTrans_LT");
		hartTrans_LT.setResizeable(false);

		var LTPort_hartTransPlus = hartTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(5,60));
		LTPort_hartTransPlus.setName("LTPort_hartTransplus");
		LTPort_hartTransPlus.setId("LTPort_hartTransplusId");
		
		
		var LTPort_hartTransMinu = hartTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95,60));
		LTPort_hartTransMinu.setName("LTPort_hartTransminus");
		LTPort_hartTransMinu.setId("LTPort_hartTransminusId");
		
    
		
		
		canvas.add( hartTrans_LT, x1,y1); 
		return hartTrans_LT;
		
	}
	
	
	var LabeldHartTrnsmtrFigure_LT = draw2d.SetFigure.extend({

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
		
		this.canvas.paper.text( 50, 40, "LT").attr({
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

	function FFT_Transmitter_LT(canvas,x1,y1){
		
	var ffTrans_LT = new LabeldFFT_TrnsmtrFigure_LT({width:100,height:120});
        ffTrans_LT.setId("ffTrans_LT");
		ffTrans_LT.setResizeable(false);

		var LTPort_ffTransPlus = ffTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(25,0));
		LTPort_ffTransPlus.setName("LT_ffTransPlus");
		LTPort_ffTransPlus.setId("LT_ffTransPlusId");

		
        var LTPort_ffTransMinus = ffTrans_LT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70,0));
		LTPort_ffTransMinus.setName("LT_ffTransMinus");
		LTPort_ffTransMinus.setId("LT_ffTransMinusId");
		
		
		canvas.add( ffTrans_LT, x1,y1); 
		return ffTrans_LT;
		
	}
	
	
	var LabeldFFT_TrnsmtrFigure_LT = draw2d.SetFigure.extend({

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
		
		
		
       this.canvas.paper.rect(0, 0, 100, 120).
       attr({"stroke-width" : 1
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
		
		 this.canvas.paper.text( 50, 55, "LT 100").attr({
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














/*var SelectionMenuPolicy = draw2d.policy.figure.SelectionPolicy.extend({
	NAME: "SelectionMenuPolicy",

    init : function(attr, setter, getter)
    {
		this.overlay = null; // div DOM node

        this._super(attr, setter, getter);
    },


	onSelect: function(canvas, figure, isPrimarySelection)
	{
		this._super(canvas, figure, isPrimarySelection);

		if (this.overlay === null) {
			this.overlay= $("<div class='overlayMenu'>&#x2295;</div>");
			$("body").append(this.overlay);
			this.overlay.on("click",function(){

				// use a Command and CommandStack for undo/redo support
				//
				var command= new draw2d.command.CommandDelete(figure);
				canvas.getCommandStack().execute(command);
				
			})
		}
		this.posOverlay(figure);
	},


	onUnselect: function(canvas, figure )
	{
		this._super(canvas, figure);

		this.overlay.remove();
		this.overlay=null;
	},


    onDrag: function(canvas, figure)
	{
		this._super(canvas, figure);
		this.posOverlay(figure);
	},

	posOverlay:function(figure)
	{
		this.overlay.css({
			"top":figure.getAbsoluteY()-10,
			"left":figure.getAbsoluteX()+ figure.getWidth()+15
		});
	}
});*/