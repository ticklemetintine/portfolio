import { Component } from '@angular/core'
import { HeaderComponent } from './header.component'
import { HomeComponent } from './home.component'
import { AboutComponent } from './about.component'
import { ProjectsComponent } from './projects.component'
import { ContactComponent } from './contact.component'


@Component({
  selector: 'my-app',
  template: `
  	<header></header>
  	<div class="container parallax">
	  	<div class="home slide" id="home"></div>
      <div class="about slide" id="about"></div>
      <div class="projects slide" id="projects"></div>
	  	<div class="contact slide" id="contact"></div>
  	</div>
  `,
  directives: [HeaderComponent, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent]
})
export class AppComponent { 
	title = "Angular 2 App"
}

