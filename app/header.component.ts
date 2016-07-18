import {Component} from '@angular/core'
import {MenuService} from './menu.service'

@Component({
	selector: 'header',
	template: `
	<div class="{{class.navbar}}">
		<ul class="{{class.nav}}">
			<li *ngFor="#menuItem of menuItems"><a href="#{{menuItem}}">{{menuItem}}</a></li>
		</ul>
	</div>
	`,
	providers: [MenuService]
})

export class HeaderComponent {
	title = "JSS";
	class = {
		container: "container",
		navbar: "navbar",
		nav: "nav navbar-nav",
	}
	
	menuItems: string[];
	constructor(menuService: MenuService) {
		this.menuItems = menuService.getMenu();
	}
}

	