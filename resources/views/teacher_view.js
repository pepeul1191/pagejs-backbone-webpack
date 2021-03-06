var TeacherView = Backbone.View.extend({
  el: '#workspace',
  branch_id: null,
  dentistTable: null,
	initialize: function(){
    console.log('teacher - initialize');
	},
	events: {
  },
  render: function(data, type){
		var templateCompiled = null;
		$.ajax({
		  url: STATIC_URL + 'templates/teacher.html',
		  type: 'GET',
		  async: false,
		  success: function(resource) {
        var template = _.template(resource);
        templateCompiled = template(data);
      },
      error: function(xhr, status, error){
        console.error(error);
				console.log(JSON.parse(xhr.responseText));
      }
		});
		this.$el.html(templateCompiled);
  },
  loadComponents: function(){

  },
});

export default TeacherView;