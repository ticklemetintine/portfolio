import {Component} from '@angular/core'

@Component({
	selector: '.home',
	template: `
		<div class="content">
			<h1 class="{{class.textColor}} {{class.textAlign}} {{class.headingClass}}">{{heading}}</h1>
			<p class="{{class.textColor}} {{class.textAlign}}">{{subHeading}}</p>
			<p class="{{class.textAlign}}"><a href="#projects" class="btn {{class.btnColor}} ">{{buttonText}}</a></p>
		</div>
	`
})

export class HomeComponent {
	id = "home";
	heading = "Justine S. Salangsang";
	subHeading = "Plan | Design | Code";
	buttonText = "See my work";
	class = {
		headingClass: "home-heading",
		textColor: "text-white",
		textAlign: "text-center",
		btnColor: "btn-pink",
		display: "block"
	}
}