function nopref() {
	$("input:radio").not("#pref0").attr("checked", false);
}

function detectFS() {
	if(window.innerHeight != screen.height) {
		//alert("GO TO FULLSCREEN MODE!");
		document.getElementById("sound").play();
	}
	else {
		//alert("yo!");
	}
	setTimeout(detectFS, 2000);
}

function validate(x) {
	n=$('input[type=radio]:checked').size();
	if(n==1 && $("#pref0").is(":checked")) {
		return true;
	}
	if(n!=x) {
		alert('You have to fill in '+x+' preferences for your vote to be valid OR no preference (if available)');
		return false;
	}
}

$(document).ready(function() {
	$(".pref").on('change', function() {
		$("#pref0").attr("checked", false);

		//console.log($(this).parent()[0]);
		var par=$(this).parent()[0];
		$(par).children(":input").not($(this)).attr("checked", false);
	});

	detectFS();
});

// To disable f5 i.e. refresh
function disableF5(e) {
	if ((e.which || e.keyCode) == 116)
		e.preventDefault();
};
$(document).bind("keydown", disableF5);
