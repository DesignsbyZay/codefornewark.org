(function () {
	var api = 'https://api.meetup.com/2/events?&group_urlname=Code-For-Newark&page=20';
  console.log('Testing...Hello...World!!!!!');
	var displayEvents = function (data) {
    data = data['results']
		data.objects.forEach(function (event) {
			console.log(event)
			//event.lastUpdateDaysFromNow = moment(project.last_updated).fromNow();
		});

		// var template = Handlebars.compile($('#project-template').html());
		// $('#projects').append(template({ projects: data.objects }));
    //
		// if (data.pages.next) {
		// 	$.getJSON(data.pages.next)
		// 	.done(displayProjects);
		// }
	};

	$(document).ready(function () {

		$.getJSON(api)
		.done(displayEvents);
	});

}());
