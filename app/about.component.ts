import {Component} from '@angular/core'

@Component({
	selector: '.about',
	template: `
		<div class="content">
			<div class="row clearfix">
				<div class="col-sm-6 col-xs-12">
					<h1>{{heading}}</h1>
					<p>A web developer based in the Philippines. Finished a degree in Information Technology at FEU-Institute of Technology. Been in the industry for more than 3 years and have worked with some big companies in the PH. A freelance developer servicing clients from US and Australia.</p>
					<p>Expertise in HTML, CSS/Sass, JQuery/AngularJS and WordPress.</p>
				</div>
				<div class="col-sm-6 col-xs-12">
					<img src="img/myAvatar.png" class="{{class.imgClass}}">
				</div>
			</div>
		</div>
	`
})

export class AboutComponent {
	heading = "About";
	buttonText = "See my work";
	class = {
		textAlign: "text-center",
		btnColor: "btn-pink",
		display: "block",
		imgClass: "avatar"
	}
}