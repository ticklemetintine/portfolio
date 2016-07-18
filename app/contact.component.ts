import {Component} from '@angular/core'

@Component({
	selector: '.contact',
	template: `
		<div class="content">
			<div class="row clearfix">
				<div class="col-sm-12">
					<h1>{{heading}}</h1>
				</div>
				<div class="col-sm-6 col-xs-12">
					 <iframe id="JotFormIFrame" onload="window.parent.scrollTo(0,0)" allowtransparency="true" src="https://form.jotform.me/61931682181457" frameborder="0" style="width:100%; height:616px; border:none;" scrolling="no"> </iframe> <script type="text/javascript"> window.handleIFrameMessage = function(e) { var args = e.data.split(":"); var iframe = document.getElementById("JotFormIFrame"); if (!iframe) return; switch (args[0]) { case "scrollIntoView": iframe.scrollIntoView(); break; case "setHeight": iframe.style.height = args[1] + "px"; break; case "collapseErrorPage": if (iframe.clientHeight > window.innerHeight) { iframe.style.height = window.innerHeight + "px"; } break; case "reloadPage": window.location.reload(); break; } var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false; if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) { var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)}; iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*"); } }; if (window.addEventListener) { window.addEventListener("message", handleIFrameMessage, false); } else if (window.attachEvent) { window.attachEvent("onmessage", handleIFrameMessage); } if(window.location.href && window.location.href.indexOf("?") > -1) { var ifr = document.getElementById("JotFormIFrame"); var get = window.location.href.substr(window.location.href.indexOf("?") + 1); if(ifr && get.length > 0) { var src = ifr.src; src = src.indexOf("?") > -1 ? src + "&" + get : src + "?" + get; ifr.src = src; } } </script>
				</div>
				<div class="col-sm-6 col-xs-12 details">
					<p><i class="glyphicon glyphicon-envelope"></i> <span class="pull-right"><a href= "mailto:tine.salangsang@gmail.com" >tine.salangsang@gmail.com</a></span></p>
					<p><i class="glyphicon glyphicon-phone"></i> <span class="pull-right">+63 905 391 7320</span></p>
				</div>
			</div>
		</div>
	`
})

export class ContactComponent {
	heading = "Contact";
	buttonText = "See my work";
	class = {
		textAlign: "text-center",
		btnColor: "btn-pink",
		display: "block",
		imgClass: "avatar"
	}
}