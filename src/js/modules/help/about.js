import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'thegioilaptrinh@gmail.com';
		
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="height:64px;" class="about-logo" alt="" src="images/logo-colors.png" />'},
				{title: "Name:", html: '<span class="about-name">Design & Paint</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online image editor."},
				{title: "Author:", value: 'Thegioilaptrinh'},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				// {title: "GitHub:", html: '<a href="https://github.com/viliusle/miniPaint">https://github.com/viliusle/miniPaint</a>'},
				{title: "Website:", html: '<a href="http://thegioilaptrinh.net/">http://thegioilaptrinh.net/</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
