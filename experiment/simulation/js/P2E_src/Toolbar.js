
example.Toolbar = Class.extend({
	
	init:function(elementId, view, appId, Type){
		this.html = $("#"+elementId);
		this.view = view;
		
		var jsonarray;
		
	/*	// register this class as event listener for the canvas
		// CommandStack. This is required to update the state of 
		// the Undo/Redo Buttons.
		//
		view.getCommandStack().addEventListener(this);
*/
		// Register a Selection listener for the state hnadling
		// of the Delete Button
		//
        view.on("select", $.proxy(this.onSelectionChanged,this));
		
	/*	// Inject the UNDO Button and the callbacks
		//
		this.undoButton  = $("<button>Undo</button>");
		this.html.append(this.undoButton);
		this.undoButton.button().click($.proxy(function(){
		       this.view.getCommandStack().undo();
		},this)).button( "option", "disabled", true ); 

		// Inject the REDO Button and the callback
		//
		this.redoButton  = $("<button>Redo</button>");
		this.html.append(this.redoButton);
		this.redoButton.button().click($.proxy(function(){
		    this.view.getCommandStack().redo();
		},this)).button( "option", "disabled", true );
		
		this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
		this.html.append(this.delimiter);
*/
		
		
		
		
		// Inject Check Connection Button
		this.checkButton  = $("<button>Check Connection</button>");
		this.html.append(this.checkButton);
		this.checkButton.button().click(function(){
			
		var svg = $("#draw2Did").html();
		var writer = new draw2d.io.json.Writer();
		writer.marshal(view,function(json){
    
			 jsonarray = JSON.stringify(json, null, 2);
			// Save jsonarray to 
		
				checkConnectionsForTrans(appId, Type,jsonarray);
				// console.log(jsonarray);
            
			});
		})
		
		
			// Inject the DELETE Button
		//
		this.deleteButton  = $("<button>Delete</button>");
		this.html.append(this.deleteButton);
		this.deleteButton.button().click($.proxy(function(){
			var node = this.view.getPrimarySelection();
//			console.log(node);
			var command= new draw2d.command.CommandDelete(node);
			this.view.getCommandStack().execute(command);
			
//			if(id = "PowerSupply"){
//				
//				$("#pwrSply").draggable({ disabled: false });
//			}
			
		},this)).button( "option", "disabled", true );
		
		
		
		// Inject Connection Hint Button
		this.hintButton  = $("<button id='connimg' data-toggle='modal' data-target='#myModal'>Connection Hint</button>");
		this.html.append(this.hintButton);
		this.hintButton.hide();
        this.hintButton.button().click(function(){
			ConnHint(appId, Type)
			});
			
		
		
		
		
		// Inject Next Level Button
		this.characterisation_Button  = $("<button id='charactlevel'>Next Level</button>");
		this.html.append(this.characterisation_Button);
		this.characterisation_Button.hide();
        this.characterisation_Button.button().click(function(){
//			console.log(appId);
//			console.log(Type);
//			console.log(jsonarray);
        	if(rightConn != 0 ){
        		
        		stop_timer();
        		
        		if(appId == "1"){
    				
        			//	Type = "twowire";
        				LC_Characterisation(appId, Type)
        				
        			}
        			if(appId == "2"){
        				
        			//	Type = "twowire";
        				TC_Characterisation(appId, Type)
        				
        			}
        			if(appId == "3"){
        				
        			//	Type = "twowire";
        				PC_Characterisation(appId, Type)
        				
        			}
        			if(appId == "4"){
        				
        			//	Type = "twowire";
        				FC_Characterisation(appId, Type)
        				
        			}
        	}else{
        		
        		alert("Wrong Connection. Please click Check Connection to verify.");
        	}
		
			
			
			
			});	
		
	
	},

	/**
	 * @method
	 * Called if the selection in the cnavas has been changed. You must register this
	 * class on the canvas to receive this event.
	 *
     * @param {draw2d.Canvas} emitter
     * @param {Object} event
     * @param {draw2d.Figure} event.figure
	 */
	onSelectionChanged : function(emitter, event){
		this.deleteButton.button( "option", "disabled", event.figure===null );
	},
	
	/**
	 * @method
	 * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail() 
	 * can be used to identify the type of event which has occurred.
	 * 
	 * @template
	 * 
	 * @param {draw2d.command.CommandStackEvent} event
	 **/
	/*stackChanged:function(event)
	{
		this.undoButton.button( "option", "disabled", !event.getStack().canUndo() );
		this.redoButton.button( "option", "disabled", !event.getStack().canRedo() );
	}*/
});