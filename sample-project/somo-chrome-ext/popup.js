function click(e) {
	var select = document.getElementById('cateSelect');
	localStorage.channelCode = select.options[select.selectedIndex].value;
	chrome.extension.getBackgroundPage().window.location.reload();
	$(".step").hide();
	$(".step5").show();
	$('.btn').hide();
	$('#resetBtn').show();
	$('#noteMess').hide();
	$('#key').html($('#keyInput').val());
	$('#category').html($('#cateSelect:selected').text());
	$('#location').html($('#locationInput').val());
	$('#salary').html($('#ex13').val());
}

document.addEventListener('DOMContentLoaded', function () {
  var saveBtn = document.getElementById('chooseCateBtn');
  saveBtn.addEventListener('click', click);
  // var notifyMess = document.getElementById('notifySaved');
  if (!localStorage.channelCode) {
	localStorage.channelCode = '';
	} else {
		var select = document.getElementById('cateSelect');
		 select.value = localStorage.channelCode;
	}
});

$(document).ready(function(){
	// With JQuery
	$("#ex13").slider({
	    ticks: [500, 1000, 1500, 2000, 2500, 3000],
	    ticks_labels: ['$500', '$1000', '$1500', '$2000', '$2500', '$3000'],
	    value: 1000, focus: true
	});


	var steps = 2;
	$(".step").hide();
	$('#chooseCateBtn').hide();
	$('#resetBtn').hide();
	
	$(".step1").show();
	$("#stepBtn").on("click", function(){
		$(".step").hide();
		$(".step"+steps).show();
		$('#stepNo').html(steps);
		if(steps == 4) {
			$(this).hide();
			$('#chooseCateBtn').show();
			return false;
		}		
		steps += 1;			
		
	});

	$("#resetBtn").on("click", function(){
		steps = 2;
		$(".step").hide();
		$('#chooseCateBtn').hide();
		$('.btn').hide();
		$("#stepBtn").show();
		$(".step1").show();	
		$('#stepNo').html('1');	
		$('#noteMess').show();
	});

	$('.locationSelect').on("click", function() {
		$('#locationInput').val($(this).html());
	});
});