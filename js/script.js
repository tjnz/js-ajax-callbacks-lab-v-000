function replaceNouns() {

	$.get('noun.html', function(data){
		replaceClass('.noun',  data.trim().split('\n'));
	}).fail(function(error){
		console.log("it broke: " + error);
	});
	
};

function replaceVerbs() {
	$.get('verb.html', function(data){
		replaceClass('.verb',  data.trim().split('\n'));
	}).fail(function(error){
		console.log("it broke: " + error);
	});
};


function replaceClass(className, arr){
	$(className).each(function(index, item){
		//$(this).html(arr.splice(randomIndex(arr), 1));
		$(this).html(arr[randomIndex(arr)]);
	});
}

function randomIndex(arr){
	var i = Math.floor(Math.random()*arr.length);
	return i;
};


$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});


