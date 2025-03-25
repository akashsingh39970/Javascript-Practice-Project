
$(document).ready(function(){
	let currentStep = 0;

	// use this method for array of steps
	// let stepsArray = $('#progressbar li').map(function() {
	// 	return this.id;
	// }).get();
	
	// // console.log(stepsArray.length);


	// $(".next-step").click(function(){
	// 	if(currentStep <stepsArray.length){
	// 		$('#' + stepsArray[currentStep]).addClass('active');
	// 		currentStep++;
	// 	}

		
		
	// })

	//use this method without array
	let steps = $('#progressbar li');
	let fields= $('fieldset');


	// Click function to show the next step and hide the current step 
	$('.next-step').click(function(){
		if(currentStep < steps.length){
			// $(steps[currentStep]).addClass('active'); //this is the same as the line below
			steps.eq(currentStep).addClass('active'); //this is the same as the line above
			fields.eq(currentStep).hide();
			fields.eq(currentStep +1).show();


			currentStep++;
			console.log(currentStep);
		}
	})

	// Click function to show the previous step and hide the current step
	$('.previous-step').click(function(){
		if(currentStep > 0)
		{
			steps.eq(currentStep-1).removeClass('active');
			fields.eq(currentStep).hide();
			fields.eq(currentStep-1).show();	
			currentStep--;
			console.log(currentStep);

		}
	})



})