(function($) {
	$(document).ready(function() {
		//border-radius
		var brsNode = $("#border_radius_sample");
		var brsNodeStyle = brsNode[0].style;
		var brtlxNode = $("#brtlx");
		var brtlyNode = $("#brtly");
		var brtrxNode = $("#brtrx");
		var brtryNode = $("#brtry");
		var brblxNode = $("#brblx");
		var brblyNode = $("#brbly");
		var brbrxNode = $("#brbrx");
		var brbryNode = $("#brbry");
		$("#border_radius").on("change", "input[type=range]", function(event) {
			var borderTopLeftX = brtlxNode.val();
			var borderTopLeftY = brtlyNode.val();
			var topLeft = borderTopLeftX + "px " + borderTopLeftY + "px"
			var borderTopRightX = brtrxNode.val();
			var borderTopRightY = brtryNode.val();
			var topRight = borderTopRightX + "px " + borderTopRightY + "px"
			var borderBottomLeftX = brblxNode.val();
			var borderBottomLeftY = brblyNode.val();
			var bottomLeft = borderBottomLeftX + "px " + borderBottomLeftY + "px"
			var borderBottomRightX = brbrxNode.val();
			var borderBottomRightY = brbryNode.val();
			var bottomRight = borderBottomRightX + "px " + borderBottomRightY + "px"
			brsNodeStyle.borderTopLeftRadius = topLeft
			brsNodeStyle.borderTopRightRadius = topRight
			brsNodeStyle.borderBottomLeftRadius = bottomLeft
			brsNodeStyle.borderBottomRightRadius = bottomRight
			brsNode.html("border-top-left-radius: " + topLeft + ";<br />" +
									"border-top-right-radius: " + topRight + ";<br />" +
									"border-bottom-left-radius: " + bottomLeft + ";<br />" +
									"border-bottom-right-radius: " + bottomRight + ";");
		});

		//background-size
		var bgContainerNode = $("#background_size .background_container");
		var bgSampleNode = $("#background_size_sample");
		var bgWidthNode = $("#bsw");
		var bgHeightNode = $("#bsh");
		$("#background_size img").each(function() {
			$(this).parent().next(".background_container").css("background-image","url(" + this.src + ")");	
		});
		$("#background_size").on("change", "input[type]", function() {
			var bgWidth = bgWidthNode.val() + "px";
			var bgHeight = bgHeightNode.val() + "px";
			bgContainerNode.css({
				"background-size": bgWidth + " " + bgHeight,
				"height": bgHeight,
				"width": bgWidth
			});
			bgSampleNode.html("background-size: " + bgWidth + " " + bgHeight + ";");		
		});

		//-webkit-gradient
		var gradientSampleNode = $("#webkit_gradient_sample");
		var startColor = "#000", stopColor = "#FFF";
		$.farbtastic("#start_color").linkTo(function(color) {
			gradientSampleNode.css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0, " + color + "), color-stop(1, " + stopColor +"))");
			gradientSampleNode.html("background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, " + color + "), color-stop(1, " + stopColor +"));");		
			startColor = color;
		}).setColor("#000");
		$.farbtastic("#stop_color").linkTo(function(color) {
			gradientSampleNode.css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0, " + startColor + "), color-stop(1, " + color +"))");
			gradientSampleNode.html("background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, " + startColor + "), color-stop(1, " + color +"));");		
			stopColor = color;
		}).setColor("#FFF");
		
		//-webkit-border-image
		var borderImageSampleNode = $("#border_image_sample");
		var btNode = $("#bt");
		var brNode = $("#br");
		var bbNode = $("#bb");
		var blNode = $("#bl");
		$("#border_image").on("change", "input[type=range]", function(){
			var btValue = btNode.val();
			var brValue = brNode.val();
			var bbValue = bbNode.val();
			var blValue = blNode.val();
			var borderWidth = btValue + "px " + brValue + "px " + bbValue + "px " + blValue + "px";
			var borderImage = "url(resources/button_orange.hdpi.png) " + btValue + " " + brValue + " " + bbValue + " " + blValue + " stretch";
			borderImageSampleNode.css("border-width", borderWidth);
			borderImageSampleNode.css("-webkit-border-image", borderImage);
			borderImageSampleNode.children("pre").html("border-width: " + borderWidth + "\n-webkit-border-image: " + borderImage);				
		});
		$("#hb").on("change", function() {
			if ($(this).is(":checked")) {
				borderImageSampleNode.children("pre").css("border", "none");	
			} else {
				borderImageSampleNode.children("pre").css("border", "1px solid #888");	
			}
		});

		//text-shadow
		var hl = $("#hl");
		var vl = $("#vl");
		var blr = $("#blr");
		var textShadowSample = $("#text_shadow_sample");
		var hlValue = 5, vlValue = 5, blrValue = 5, shadowColor = "#FF0000";
		$.farbtastic("#shadow_color").linkTo(function(color) {
			shadowColor = color;
			textShadow = hlValue + "px " + vlValue + "px " + blrValue + "px " + shadowColor;
			textShadowSample.css("text-shadow", textShadow);
			textShadowSample.html("text-shadow: " + textShadow + ";");
		}).setColor("#FF0000");
		$("#text_shadow").on("change", "input[type=range]", function() {
			hlValue = hl.val();
			vlValue = vl.val();
			blrValue = blr.val();
			textShadow = hlValue + "px " + vlValue + "px " + blrValue + "px " + shadowColor;
			textShadowSample.css("text-shadow", textShadow);
			textShadowSample.html("text-shadow: " + textShadow + ";");
		});
	})
})(jQuery)