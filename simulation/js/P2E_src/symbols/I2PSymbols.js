


// I2p LY symbol

	function I2P_LY_100(canvas,x1,y1){
		
	var LY100_i2p = new LabeldFigure_LY100({width:100,height:95});
	LY100_i2p.setId("LY100_i2p");
	LY100_i2p.setResizeable(false);

		var LY100Port_i2pPlus = LY100_i2p.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		LY100Port_i2pPlus.setName("LY100_i2pPlus");
		LY100Port_i2pPlus.setId("LY100_i2pPlusId");

		
        var LY100Port_i2pMinus = LY100_i2p.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
        LY100Port_i2pMinus.setName("LY100_i2pMinus");
        LY100Port_i2pMinus.setId("LY100_i2pMinusId");
		
		
		canvas.add( LY100_i2p, x1,y1); 
		return LY100_i2p;
		
	}
	
	
	var LabeldFigure_LY100 = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 50, 35, "LY 100").attr({
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
		
		
		 this.canvas.paper.text( 50, 5, "I/P Converter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
	
	 
      return this.canvas.paper.setFinish();
    },


});
	

	// I2p TY symbol

	function I2P_TY_100(canvas,x1,y1){
		
	var TY100_i2p = new LabeldFigure_TY100({width:100,height:95});
	TY100_i2p.setId("TY100_i2p");
	TY100_i2p.setResizeable(false);

		var TY100Port_i2pPlus = TY100_i2p.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		TY100Port_i2pPlus.setName("TY100_i2pPlus");
		TY100Port_i2pPlus.setId("TY100_i2pPlusId");

		
        var TY100Port_i2pMinus = TY100_i2p.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
        TY100Port_i2pMinus.setName("TY100_i2pMinus");
        TY100Port_i2pMinus.setId("TY100_i2pMinusId");
		
		
		canvas.add( TY100_i2p, x1,y1); 
		return TY100_i2p;
		
	}	
	
	var LabeldFigure_TY100 = draw2d.SetFigure.extend({

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
			
			 this.canvas.paper.text( 50, 35, "TY 100").attr({
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
			
			
			 this.canvas.paper.text( 50, 5, "I/P Converter").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
	     
		
		 
	      return this.canvas.paper.setFinish();
	    },


	});

	
	
	
	// I2p PY symbol

	function I2P_PY_100(canvas,x1,y1){
		
	var PY100_i2p = new LabeldFigure_PY100({width:100,height:95});
	PY100_i2p.setId("PY100_i2p");
	PY100_i2p.setResizeable(false);

		var PY100Port_i2pPlus = PY100_i2p.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		PY100Port_i2pPlus.setName("PY100_i2pPlus");
		PY100Port_i2pPlus.setId("PY100_i2pPlusId");

		
        var PY100Port_i2pMinus = PY100_i2p.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
        PY100Port_i2pMinus.setName("PY100_i2pMinus");
        PY100Port_i2pMinus.setId("PY100_i2pMinusId");
		
		
		canvas.add( PY100_i2p, x1,y1); 
		return PY100_i2p;
		
	}
	
	
	var LabeldFigure_PY100 = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 50, 35, "PY 100").attr({
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
		
		
		 this.canvas.paper.text( 50, 5, "I/P Converter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
	
	 
      return this.canvas.paper.setFinish();
    },


});
	
	// I2p FY symbol

	function I2P_FY_100(canvas,x1,y1){
		
	var FY100_i2p = new LabeldFigure_FY100({width:100,height:95});
	FY100_i2p.setId("FY100_i2p");
	FY100_i2p.setResizeable(false);

		var FY100Port_i2pPlus = FY100_i2p.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,78));
		FY100Port_i2pPlus.setName("FY100_i2pPlus");
		FY100Port_i2pPlus.setId("FY100_i2pPlusId");

		
        var FY100Port_i2pMinus = FY100_i2p.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,78));
        FY100Port_i2pMinus.setName("FY100_i2pMinus");
        FY100Port_i2pMinus.setId("FY100_i2pMinusId");
		
		
		canvas.add( FY100_i2p, x1,y1); 
		return FY100_i2p;
		
	}
	
	
	var LabeldFigure_FY100 = draw2d.SetFigure.extend({

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
		
		 this.canvas.paper.text( 50, 35, "FY 100").attr({
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
		
		
		 this.canvas.paper.text( 50, 5, "I/P Converter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
	
	 
      return this.canvas.paper.setFinish();
    },


});
		
	
	
	
