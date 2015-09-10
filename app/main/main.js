import {Component, View, bootstrap} from 'angular2/angular2';
import {Header} from 'header/header';
import {Content} from 'content/content';
import {Footer} from 'footer/footer';

@Component({ selector: 'example-app'})
@View({
	templateUrl: 'main/main.html',
	directives: [
		Header,
		Content,
		Footer
	]
})

export class ExampleApp {};

bootstrap(ExampleApp);
