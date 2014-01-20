// js/models/todo.js

var app = app || {};

app.Todos = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},

	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});

