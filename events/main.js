var listConf1 = [{name: "A1"}, {name: "B1"}, {name: "C1"}];
var listConf2 = [{name: "A2"}, {name: "B2"}, {name: "C2"}];

// elem is $(), config [{name: "ban"}] 
function render(elem, config) {
	var len = config.length;

	var name;
	var tmpElem;
	for(var i = 0; i < len; i++) {
		name = config[i]['name'];
		tmpElem = $("<div class='li'>"  + name +"</div>");
		elem.append(tmpElem);
	}
}

$(document).ready(function(){
	//initial rendering
	var lists = $(".list");
	var listElem1 = $(lists[0]);
	var listElem2 = $(lists[1]);

	render(listElem1, listConf1);
	render(listElem2, listConf2);

	var currentElem;

	$(".li").on("mousedown", function(e){
		console.log("mousedown");
		var el = $(e.currentTarget);
		var w = el.width();

		el.css({position: 'fixed', width: w});

		var offsetX = e.offsetX;
		var offsetY = e.offsetY;

		$('body').on("mousemove", function(ev) {
			var t = ev.pageY - offsetY;
			var l = ev.pageX - offsetX;
			el.css({top: t, left : l});
		});

		currentElem = el;

	});

	$(".list").on("mouseup", function(e){
		if(currentElem) {
			console.log("mouse up div");
			currentElem.css({position : 'relative', top:0, left:0});
			$(this).append(currentElem);
			currentElem = null;
		}
	});

	$(".li").on("mouseup", function(e){
		console.log("mouseup");
		$('body').off("mousemove");
	});
});