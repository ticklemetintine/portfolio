import {Component} from '@angular/core'
import {ProjectService} from './project.service'

@Component({
	selector: '.projects',
	template: `
	<div class="content">
		<div class="row clearfix">
			<h1 class="col-sm-12">{{heading}}</h1>
			<div class="flip-container col-sm-4 col-xs-12" ontouchstart="this.classList.toggle('hover');" *ngFor="#projectItem of projectItems">
				<div class="flipper">
					<div class="front">
						<img src="{{projectItem.img}}" alt="" />
					</div>
					<div class="back">
						<p class="{{class.textAlign}} title">{{projectItem.title}}</p>
						<p class="{{class.textAlign}} description">{{projectItem.description}}</p>
						<p class="{{class.textAlign}} link"><a href="{{projectItem.link}}">Visit site &raquo;</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	`,
	providers: [ProjectService]

})

export class ProjectsComponent {
	heading = "Projects";
	class = {
		mainClass: "home container",
		textAlign: "text-center",
		btnColor: "btn-pink",
		display: "block",
		imgClass: "avatar"
	}
	projectItems;
	constructor(projectService: ProjectService) {
		this.projectItems = projectService.getProject();
	}
}

	