import {Component} from '@angular/core'

@Component({
	selector: '.about',
	template: `
		<div class="content">
			<div class="row clearfix">
				<div class="col-sm-6 col-xs-12">
					<h1>{{heading}}</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugit, fugiat ipsam, explicabo harum, nam dolores dolorem corporis consequatur excepturi adipisci similique repellendus quod qui praesentium vero atque, porro quisquam.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt non iusto sequi quod iste quos, quia consectetur dolores quam libero nesciunt nostrum aliquid. Eos, hic quam blanditiis totam ut consequatur!</p>
				</div>
				<div class="col-sm-6 col-xs-12">
					<img src="http://placehold.it/400x400" class="{{class.imgClass}}">
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