import './content.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

require('/imports/language')('Content');



// Template.Content.helpers({
//   // the collection cursor
//   collection: function () {
//     return Template.instance().collection();
//   },
//   // are there more collection to show?
//   hasMorePosts: function () {
//     return Template.instance().collection().count() >= Template.instance().limit.get();
//   }
// });

// Template.Content.onCreated(() => {
// 	var a = Meteor.subscribe('collection', 1, function(data){
// 		console.log('collection', a);
// 	});
// });


// Template.Content.onRendered(() => {
// 	console.log(Repos.find().fetch());
// });