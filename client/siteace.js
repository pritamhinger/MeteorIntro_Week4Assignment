
/////
// template helpers 
/////

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('main', {
    to:"main"
  });
  this.render('navbar', {
    to:"navbar"
  });
});

Router.route('/website/:_id', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('websiteDetail', {
    to:"main", 
    data:function(){
      return Websites.findOne({_id:this.params._id});
    }
  });
});

// helper function that returns all available websites
Template.website_list.helpers({
	websites:function(){
		return Websites.find({},{sort:{upVotes:-1,createdOn:-1}});
	}
});

Template.comment_list.helpers({
	allcomments:function(){
		if(Session.get("website_id")){
			var websiteId = Session.get("website_id")
			console.log("Searching comments for Website : " + websiteId)
			return Comments.find({website_id:websiteId},{sort:{createdOn:-1}});
			//return Comments.find();
		}
	}
});

/////
// template events 
/////

Template.website_item.events({
	"click .js-upvote":function(event){
		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Up voting website with id "+website_id);
		// put the code in here to add a vote to a website!
		Websites.update({_id:website_id}, 
                {$inc: {upVotes:1}});
		return false;// prevent the button from reloading the page
	}, 
	"click .js-downvote":function(event){
		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Down voting website with id "+website_id);

		// put the code in here to remove a vote from a website!
		Websites.update({_id:website_id}, 
                {$inc: {downVotes:1}});
		return false;// prevent the button from reloading the page
	},
	"click .js-view-website-details":function(event){
		var website_id = this._id;
		console.log("Setting session to website id : " + website_id);
		Session.set("website_id", this._id);
	}
})

Template.websiteDetail.events({
	"submit .js-post-website-comment":function(event){
		var comment = event.target.comment.value
		console.log("Comment is " + comment);

		if(Meteor.user()){
			var parts = location.href.split('/')
			var websiteId = parts.pop()
			console.log("Website id is : " + websiteId);

			Comments.insert({
				comment:comment,
				website_id: websiteId,
				createdOn:new Date()
			});
		}
		else{
			alert("User must be logged in to post a comment");	
		}

		return false;
	}
});

Template.website_form.events({
	"click .js-toggle-website-form":function(event){
		$("#website_form").toggle('slow');
	}, 
	"submit .js-save-website-form":function(event){
		// here is an example of how to get the url out of the form:
		var url = event.target.url.value;
		console.log("The url they entered is: "+url);	

		//  put your website saving code in here!	
		if(Meteor.user()){
			Websites.insert({
    			title:event.target.title.value, 
    			url:event.target.url.value, 
    			description:event.target.description.value, 
    			upVotes:0,
    			downVotes:0,
    			createdOn:new Date()
    		});
		}
		else{
			alert("User must be logged in to add a new website.");	
		}
		return false;// stop the form submit from reloading the page

	}
});
