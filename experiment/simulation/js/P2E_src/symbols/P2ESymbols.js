


// P2E LY symbol

	function P2E_LY_100(canvas,x1,y1){
		
	var LY100_p2e = new LabeldFigure_P2E_LY100({width:130,height:100});
	LY100_p2e.setId("LY100_p2e");
	LY100_p2e.setResizeable(false);

		var LY100Port_p2ePlus = LY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,35));
		LY100Port_p2ePlus.setName("LY100_p2ePlus");
		LY100Port_p2ePlus.setId("LY100_p2ePlusId");

		
        var LY100Port_p2eMinus = LY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,75));
        LY100Port_p2eMinus.setName("LY100_p2eMinus");
        LY100Port_p2eMinus.setId("LY100_p2eMinusId");
		
        var LY100Port_p2e = LY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,54));
        LY100Port_p2e.setName("LY100_p2e");
        LY100Port_p2e.setId("LY100_p2eId");
		
		canvas.add( LY100_p2e, x1,y1); 
		return LY100_p2e;
		
	}
	
	
	var LabeldFigure_P2E_LY100 = draw2d.SetFigure.extend({

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
		
		
		
       this.canvas.paper.rect(0, 0, 130, 100).
       attr({"stroke-width" : 0
        }); 
		
		this.canvas.paper.circle(62, 55, 23).
       attr({"stroke-width" : 1
        }); 
		
		 this.canvas.paper.text( 62, 55, "LY 100").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		 this.canvas.paper.path("M 0 55 l 40 0 ").
	       attr({"stroke-width" : 2
	        }); 
		 
		 this.canvas.paper.path("M 25 47 l -15 15 ").
	       attr({"stroke-width" : 2
	        }); 
		 
		 this.canvas.paper.path("M 35 47 l -15 15 ").
	       attr({"stroke-width" : 2
	        }); 
		 
	   this.canvas.paper.rect(85, 15, 45, 40).
       attr({"stroke-width" : 1
        });
	  this.canvas.paper.path("M 100 35 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 110 25 l 0 20 ").
       attr({"stroke-width" : 2
        }); 
		
		 this.canvas.paper.rect(85, 55, 45, 40).
       attr({"stroke-width" : 1
        });
     
		this.canvas.paper.path("M 100 75 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
		
		 this.canvas.paper.text( 65, 5, "P/E Converter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
	
	 
      return this.canvas.paper.setFinish();
    },


});
	

	// P2E TY symbol

	function P2E_TY_100(canvas,x1,y1){
		
	var TY100_p2e = new LabeldFigure_P2E_TY100({width:130,height:100});
	TY100_p2e.setId("TY100_p2e");
	TY100_p2e.setResizeable(false);

		var TY100Port_p2ePlus = TY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,35));
		TY100Port_p2ePlus.setName("TY100_p2ePlus");
		TY100Port_p2ePlus.setId("TY100_p2ePlusId");

		
        var TY100Port_p2eMinus = TY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,75));
        TY100Port_p2eMinus.setName("TY100_p2eMinus");
        TY100Port_p2eMinus.setId("TY100_p2eMinusId");
		
        var TY100Port_p2e = TY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,54));
        TY100Port_p2e.setName("TY100_p2e");
        TY100Port_p2e.setId("TY100_p2eId");
		
		canvas.add( TY100_p2e, x1,y1); 
		return TY100_p2e;
		
	}
	
	
	var LabeldFigure_P2E_TY100 = draw2d.SetFigure.extend({

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
		
		
		
       this.canvas.paper.rect(0, 0, 130, 100).
       attr({"stroke-width" : 0
        }); 
		
		this.canvas.paper.circle(62, 55, 23).
       attr({"stroke-width" : 1
        }); 
		
		 this.canvas.paper.text( 62, 55, "TY 100").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
		 this.canvas.paper.path("M 0 55 l 40 0 ").
	       attr({"stroke-width" : 2
	        }); 
		 
		 this.canvas.paper.path("M 25 47 l -15 15 ").
	       attr({"stroke-width" : 2
	        }); 
		 
		 this.canvas.paper.path("M 35 47 l -15 15 ").
	       attr({"stroke-width" : 2
	        }); 
		 
	   this.canvas.paper.rect(85, 15, 45, 40).
       attr({"stroke-width" : 1
        });
	  this.canvas.paper.path("M 100 35 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 110 25 l 0 20 ").
       attr({"stroke-width" : 2
        }); 
		
		 this.canvas.paper.rect(85, 55, 45, 40).
       attr({"stroke-width" : 1
        });
     
		this.canvas.paper.path("M 100 75 l 20 0 ").
       attr({"stroke-width" : 2
        });
		
		
		 this.canvas.paper.text( 65, 5, "P/E Converter").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
	
	 
      return this.canvas.paper.setFinish();
    },


});
	



	// P2E PY symbol

		function P2E_PY_100(canvas,x1,y1){
			
		var PY100_p2e = new LabeldFigure_P2E_PY100({width:130,height:100});
		PY100_p2e.setId("PY100_p2e");
		PY100_p2e.setResizeable(false);

			var PY100Port_p2ePlus = PY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,35));
			PY100Port_p2ePlus.setName("PY100_p2ePlus");
			PY100Port_p2ePlus.setId("PY100_p2ePlusId");

			
	        var PY100Port_p2eMinus = PY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,75));
	        PY100Port_p2eMinus.setName("PY100_p2eMinus");
	        PY100Port_p2eMinus.setId("PY100_p2eMinusId");
			
	        var PY100Port_p2e = PY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,54));
	        PY100Port_p2e.setName("PY100_p2e");
	        PY100Port_p2e.setId("PY100_p2eId");
			
			canvas.add( PY100_p2e, x1,y1); 
			return PY100_p2e;
			
		}
		
		
		var LabeldFigure_P2E_PY100 = draw2d.SetFigure.extend({

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
			
			
			
	       this.canvas.paper.rect(0, 0, 130, 100).
	       attr({"stroke-width" : 0
	        }); 
			
			this.canvas.paper.circle(62, 55, 23).
	       attr({"stroke-width" : 1
	        }); 
			
			 this.canvas.paper.text( 62, 55, "PY 100").attr({
				stroke : 'black',
				'font-size' : 10,
				"font-family": "sans-serif" 
			});
			
			 this.canvas.paper.path("M 0 55 l 40 0 ").
		       attr({"stroke-width" : 2
		        }); 
			 
			 this.canvas.paper.path("M 25 47 l -15 15 ").
		       attr({"stroke-width" : 2
		        }); 
			 
			 this.canvas.paper.path("M 35 47 l -15 15 ").
		       attr({"stroke-width" : 2
		        }); 
			 
		   this.canvas.paper.rect(85, 15, 45, 40).
	       attr({"stroke-width" : 1
	        });
		  this.canvas.paper.path("M 100 35 l 20 0 ").
	       attr({"stroke-width" : 2
	        }); 
			
			this.canvas.paper.path("M 110 25 l 0 20 ").
	       attr({"stroke-width" : 2
	        }); 
			
			 this.canvas.paper.rect(85, 55, 45, 40).
	       attr({"stroke-width" : 1
	        });
	     
			this.canvas.paper.path("M 100 75 l 20 0 ").
	       attr({"stroke-width" : 2
	        });
			
			
			 this.canvas.paper.text( 65, 5, "P/E Converter").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
	     
		
		 
	      return this.canvas.paper.setFinish();
	    },


	});
		
	

		// P2E FY symbol

			function P2E_FY_100(canvas,x1,y1){
				
			var FY100_p2e = new LabeldFigure_P2E_FY100({width:130,height:100});
			FY100_p2e.setId("FY100_p2e");
			FY100_p2e.setResizeable(false);

				var FY100Port_p2ePlus = FY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,35));
				FY100Port_p2ePlus.setName("FY100_p2ePlus");
				FY100Port_p2ePlus.setId("FY100_p2ePlusId");

				
		        var FY100Port_p2eMinus = FY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,75));
		        FY100Port_p2eMinus.setName("FY100_p2eMinus");
		        FY100Port_p2eMinus.setId("FY100_p2eMinusId");
				
		        var FY100Port_p2e = FY100_p2e.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,54));
		        FY100Port_p2e.setName("FY100_p2e");
		        FY100Port_p2e.setId("FY100_p2eId");
				
				canvas.add( FY100_p2e, x1,y1); 
				return FY100_p2e;
				
			}
			
			
			var LabeldFigure_P2E_FY100 = draw2d.SetFigure.extend({

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
				
				
				
		       this.canvas.paper.rect(0, 0, 130, 100).
		       attr({"stroke-width" : 0
		        }); 
				
				this.canvas.paper.circle(62, 55, 23).
		       attr({"stroke-width" : 1
		        }); 
				
				 this.canvas.paper.text( 62, 55, "FY 100").attr({
					stroke : 'black',
					'font-size' : 10,
					"font-family": "sans-serif" 
				});
				
				 this.canvas.paper.path("M 0 55 l 40 0 ").
			       attr({"stroke-width" : 2
			        }); 
				 
				 this.canvas.paper.path("M 25 47 l -15 15 ").
			       attr({"stroke-width" : 2
			        }); 
				 
				 this.canvas.paper.path("M 35 47 l -15 15 ").
			       attr({"stroke-width" : 2
			        }); 
				 
			   this.canvas.paper.rect(85, 15, 45, 40).
		       attr({"stroke-width" : 1
		        });
			  this.canvas.paper.path("M 100 35 l 20 0 ").
		       attr({"stroke-width" : 2
		        }); 
				
				this.canvas.paper.path("M 110 25 l 0 20 ").
		       attr({"stroke-width" : 2
		        }); 
				
				 this.canvas.paper.rect(85, 55, 45, 40).
		       attr({"stroke-width" : 1
		        });
		     
				this.canvas.paper.path("M 100 75 l 20 0 ").
		       attr({"stroke-width" : 2
		        });
				
				
				 this.canvas.paper.text( 65, 5, "P/E Converter").attr({
					stroke : 'black',
					'font-size' : 12,
					"font-family": "sans-serif" 
				});
		     
			
			 
		      return this.canvas.paper.setFinish();
		    },


		});
				
		
		
	