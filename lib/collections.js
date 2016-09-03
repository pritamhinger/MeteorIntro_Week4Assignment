Websites = new Mongo.Collection("websites");
Comments = new Mongo.Collection("comments");

Websites.allow({
	insert: function(userId, doc) {
		if(Meteor.user()){
			if(userId != doc.user){
				return false;
			}
			else{
				return true;
			}
		}
		else{
			return false;
		}
	},

	update: function(userId, doc) {
        return true;
    }
});

Comments.allow({
	insert: function(userId, doc){
		if(Meteor.user()){
			if(userId != doc.user){
				return false;
			}
			else{
				return true;
			}
		}
		else{
			return false;
		}
	}
});