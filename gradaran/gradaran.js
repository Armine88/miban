function ModalService(elemSelector) {
	this.selector = elemSelector;
	this.jelem;
	this.state;
	this.jelemParent;

	if(! ModalService.initialized) {
		console.log("aaaa");
		var modalHtml = "<div class='modalContainer'><div class='modalBody'></div></div>";
		$("body").prepend($(modalHtml));
		$(".modalContainer").hide();
		$(".modalContainer").click(function(){
				if(ModalService.current) {
					ModalService.current.close();
				}
		});

		ModalService.initialized = true;
	}
}

ModalService.prototype.open = function() {
	if(this.state == "opened") return;

	this.jelem = $(this.selector);
	this.jelemParent = this.jelem.parent();

	$(".modalBody").append(this.jelem);


	$(".modalContainer").show();
	this.state = "opened";

	ModalService.current = this;
};

ModalService.prototype.close = function() {
	if(this.state == "closed") return;
	this.jelemParent.append(this.jelem);
	$(".modalContainer").hide();
	this.state = "closed";
};


$(document).ready(function() {

	$("[data-toggle=modal]").each(function(ind, elem){
		var t = $(elem).data("target");
		if(t) {
			$(elem).on("click", function(){

				var modal = new ModalService(t);
				modal.open();
			});
		}
	});

});