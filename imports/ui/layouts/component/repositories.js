import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

require('/imports/language')('Repositories');

import './repositories.html';

Template.Repositories.events({
	'click .grid-menu .item#repositories': function (event) {
		$('.grid-head>div>h3').html('Repositories');
		$('.grid-menu .item').removeClass('active');
		$('.grid-menu .item#repositories').addClass('active');
 		
		FlowRouter.go('repository');
	},
  'click .grid-menu .item#content': function(event){
		$('.grid-head>div>h3').html('Contents');
		$('.grid-menu .item').removeClass('active');
		$('.grid-menu .item#content').addClass('active');
	  FlowRouter.go('content');
  },
  'click .grid-menu .item#fork': function(event){
		$('.grid-head>div>h3').html('Fork');
		$('.grid-menu .item').removeClass('active');
		$('.grid-menu .item#fork').addClass('active');
	  FlowRouter.go('fork');
  }
});

Template.Repositories.onRendered(() => {
  // $('.ui.dimmer.prepare').fadeOut(300);
  $('.ui.panel.sign-in').hide();
  $('.ui.panel.main').show();
  
  $('.user-menu > .item').removeClass('selected');
  $('.user-menu > .item.repository').addClass('selected');
});