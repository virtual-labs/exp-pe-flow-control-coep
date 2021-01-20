

PC_QuestionsJSON = {
		"data": {
			"SEC": [{

				"QUES": [{
					
					"QC": "If the polarities of the power supply are interchanged what will be the output of the P/I converter?",
					"ANS": [ {
						"ANSID": false,
						"content": "It will work as per standard output"
					}, {
						"ANSID": false,
						"content": "The converter will give 0.2 kg/cm² irrespective of change in input"
					}, {
						"ANSID": false,
						"content": "The transmitter will give 20 mA irrespective of change in input"
					},{
						"ANSID": true,
						"content": "The converter will give same current with negative sign whenever there is change in input"
					}]
				}]
			}, {

				"QUES": [{
					
					"QC": "In which situation the converter will reverse its readings i.e. for minimum output will be 20 mA and 4 mA for maximum?",
					"ANS": [{
						"ANSID": false,
						"content": "Power supply polarities are interchanged"
					}, {
						"ANSID": true,
						"content": "The selected P/I converter is of the type direct"
					}, {
						"ANSID": false,
						"content": "Analog output channels are interchanged"
					}, {
						"ANSID": false,
						"content": "The selected P/I converter is of the type “reverse”"
					}]
					
				}]
			}, {

				"QUES": [{
					
					"QC": "What is the maximum voltage that can be applied to the P/I converter?",
					"ANS": [{
						"ANSID": false,
						"content": "48 VDC"
					}, {
						"ANSID": false,
						"content": "18 VDC"
					}, {
						"ANSID": false,
						"content": "12 VDC"
					}, {
						"ANSID": true,
						"content": "24 VDC"
					}]
					
				}]
			},{

				"QUES": [{
					
					"QC": "What is the process variable and manipulated variable in this control loop?",
					"ANS": [{
						"ANSID": false,
						"content": "Outlet Pressure and Inlet Flow"
					}, {
						"ANSID": false,
						"content": "Tank pressure and Outlet flow"
					}, {
						"ANSID": false,
						"content": "None of the listed"
					}, {
						"ANSID": true,
						"content": "Tank pressure and Inlet flow"
					}]
					
				}]
			}, {

				"QUES": [{
					
					"QC": "What change is required in the settings of the pressure transmitter, if the CV 200 is to be used as manipulated variable? ",
					"ANS": [{
						"ANSID": false,
						"content": "Zero and span settings need to be changed"
					}, {
						"ANSID": false,
						"content": "Only zero setting needs to be changed"
					}, {
						"ANSID": true,
						"content": "Nothing is required to be changed"
					}, {
						"ANSID": false,
						"content": "Only span setting needs to be changed"
					}]
					
				}]
			},
			{

				"QUES": [{
					
					"QC": "In case of a PY 100 what type of control valve will be suitable for appropriate operation?",
					"ANS": [{
						"ANSID": true,
						"content": "Pneumatically operated control valve"
					}, {
						"ANSID": false,
						"content": "None of the listed  "
					}, {
						"ANSID": false,
						"content": "Hydraulically operated control valve"
					}, {
						"ANSID": false,
						"content": "Motorised control valve"
					}]
					
				}]
			}
			
			
			]
		}


	}



var PC_ANSWERJSON = {
			
				"0" : "The converter will give same current with negative sign whenever there is change in input",
				"1" : "The selected P/I converter is of the type “reverse”",
				"2" : "24 VDC",
				"3" : "Tank pressure and Inlet flow",
				"4" : "Nothing is required to be changed",
				"5" : "Pneumatically operated control valve"
				
			
}