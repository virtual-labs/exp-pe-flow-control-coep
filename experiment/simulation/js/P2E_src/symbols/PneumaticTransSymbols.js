


// Pneumatic transmitter  LT 100 symbol

	function PT_LT_100(canvas,x1,y1){
		
	var PT_LT100 = new LabeldFigure_PT_LT100({width:100,height:130});
	PT_LT100.setId("PT_LT100");
	PT_LT100.setResizeable(false);

		var LT100Port_PT = PT_LT100.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50,103));
		LT100Port_PT.setName("LT100_PT");
		LT100Port_PT.setId("LT100_PTID");

		
		canvas.add( PT_LT100, x1,y1); 
		return PT_LT100;
		
	}
	
	
	var LabeldFigure_PT_LT100 = draw2d.SetFigure.extend({

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
		
		
		
       this.canvas.paper.rect(0, 0, 100, 130).
       attr({"stroke-width" : 0
        }); 
		
		this.canvas.paper.circle(50, 60, 25).
       attr({"stroke-width" : 1
        }); 
		
		 this.canvas.paper.text( 50, 60, "LT 100").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
		
	 
	 
		
		this.canvas.paper.path("M 50 85 l 0 47 ").
       attr({"stroke-width" : 2
        }); 
		
		this.canvas.paper.path("M 60 92 l -20 20 ").
	       attr({"stroke-width" : 2
	        });
		this.canvas.paper.path("M 60 102 l -20 20 ").
	       attr({"stroke-width" : 2
	        });
	
		
		 this.canvas.paper.text( 50, 10, "Pneumatic").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
     
		 this.canvas.paper.text( 50, 25, "Transmitter").attr({
				stroke : 'black',
				'font-size' : 13,
				"font-family": "sans-serif" 
			});
	     
	 
      return this.canvas.paper.setFinish();
    },


});
	

	// Pneumatic transmitter  TT 100 symbol

		function PT_TT_100(canvas,x1,y1){
			
		var PT_TT100 = new LabeldFigure_PT_TT100({width:100,height:130});
		PT_TT100.setId("PT_TT100");
		PT_TT100.setResizeable(false);

			var TT100Port_PT = PT_TT100.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50,103));
			TT100Port_PT.setName("TT100_PT");
			TT100Port_PT.setId("TT100_PTID");

			
			canvas.add( PT_TT100, x1,y1); 
			return PT_TT100;
			
		}
		
		var LabeldFigure_PT_TT100 = draw2d.SetFigure.extend({

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
				
				
				
		       this.canvas.paper.rect(0, 0, 100, 130).
		       attr({"stroke-width" : 0
		        }); 
				
				this.canvas.paper.circle(50, 60, 25).
		       attr({"stroke-width" : 1
		        }); 
				
				 this.canvas.paper.text( 50, 60, "TT 100").attr({
					stroke : 'black',
					'font-size' : 10,
					"font-family": "sans-serif" 
				});
				
			 
			 
				
				this.canvas.paper.path("M 50 85 l 0 47 ").
		       attr({"stroke-width" : 2
		        }); 
				
				this.canvas.paper.path("M 60 92 l -20 20 ").
			       attr({"stroke-width" : 2
			        });
				this.canvas.paper.path("M 60 102 l -20 20 ").
			       attr({"stroke-width" : 2
			        });
			
				
				 this.canvas.paper.text( 50, 10, "Pneumatic").attr({
					stroke : 'black',
					'font-size' : 12,
					"font-family": "sans-serif" 
				});
		     
				 this.canvas.paper.text( 50, 25, "Transmitter").attr({
						stroke : 'black',
						'font-size' : 13,
						"font-family": "sans-serif" 
					});
			     
			 
		      return this.canvas.paper.setFinish();
		    },


		});
		
		
		// Pneumatic transmitter  PT 100 symbol

		function PT_PT_100(canvas,x1,y1){
			
		var PT_PT100 = new LabeldFigure_PT_PT100({width:100,height:130});
		PT_PT100.setId("PT_PT100");
		PT_PT100.setResizeable(false);

			var PT100Port_PT = PT_PT100.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50,103));
			PT100Port_PT.setName("PT100_PT");
			PT100Port_PT.setId("PT100_PTID");

			
			canvas.add( PT_PT100, x1,y1); 
			return PT_PT100;
			
		}
		
		
		var LabeldFigure_PT_PT100 = draw2d.SetFigure.extend({

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
			
			
			
	       this.canvas.paper.rect(0, 0, 100, 130).
	       attr({"stroke-width" : 0
	        }); 
			
			this.canvas.paper.circle(50, 60, 25).
	       attr({"stroke-width" : 1
	        }); 
			
			 this.canvas.paper.text( 50, 60, "PT 100").attr({
				stroke : 'black',
				'font-size' : 10,
				"font-family": "sans-serif" 
			});
			
		 
		 
			
			this.canvas.paper.path("M 50 85 l 0 47 ").
	       attr({"stroke-width" : 2
	        }); 
			
			this.canvas.paper.path("M 60 92 l -20 20 ").
		       attr({"stroke-width" : 2
		        });
			this.canvas.paper.path("M 60 102 l -20 20 ").
		       attr({"stroke-width" : 2
		        });
		
			
			 this.canvas.paper.text( 50, 10, "Pneumatic").attr({
				stroke : 'black',
				'font-size' : 12,
				"font-family": "sans-serif" 
			});
	     
			 this.canvas.paper.text( 50, 25, "Transmitter").attr({
					stroke : 'black',
					'font-size' : 13,
					"font-family": "sans-serif" 
				});
		     
		 
	      return this.canvas.paper.setFinish();
	    },


	});
		

		// Pneumatic transmitter  FT 100 symbol

			function PT_FT_100(canvas,x1,y1){
				
			var PT_FT100 = new LabeldFigure_PT_FT100({width:100,height:130});
			PT_FT100.setId("PT_FT100");
			PT_FT100.setResizeable(false);

				var FT100Port_PT = PT_FT100.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50,103));
				FT100Port_PT.setName("FT100_PT");
				FT100Port_PT.setId("FT100_PTID");

				
				canvas.add( PT_FT100, x1,y1); 
				return PT_FT100;
				
			}
			
			
			var LabeldFigure_PT_FT100 = draw2d.SetFigure.extend({

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
				
				
				
		       this.canvas.paper.rect(0, 0, 100, 130).
		       attr({"stroke-width" : 0
		        }); 
				
				this.canvas.paper.circle(50, 60, 25).
		       attr({"stroke-width" : 1
		        }); 
				
				 this.canvas.paper.text( 50, 60, "FT 100").attr({
					stroke : 'black',
					'font-size' : 10,
					"font-family": "sans-serif" 
				});
				
			 
			 
				
				this.canvas.paper.path("M 50 85 l 0 47 ").
		       attr({"stroke-width" : 2
		        }); 
				
				this.canvas.paper.path("M 60 92 l -20 20 ").
			       attr({"stroke-width" : 2
			        });
				this.canvas.paper.path("M 60 102 l -20 20 ").
			       attr({"stroke-width" : 2
			        });
			
				
				 this.canvas.paper.text( 50, 10, "Pneumatic").attr({
					stroke : 'black',
					'font-size' : 12,
					"font-family": "sans-serif" 
				});
		     
				 this.canvas.paper.text( 50, 25, "Transmitter").attr({
						stroke : 'black',
						'font-size' : 13,
						"font-family": "sans-serif" 
					});
			     
			 
		      return this.canvas.paper.setFinish();
		    },


		});
				
		