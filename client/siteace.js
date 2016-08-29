
/////
// template helpers 
/////

// helper function that returns all available websites
Template.website_list.helpers({
	websites:function(){
		return Websites.find({},{sort:{upVotes:-1,createdOn:-1}});
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
	}
})

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
			alert("Login Required");	
		}
		return false;// stop the form submit from reloading the page

	}
});
