const User = require('../models/User');



exports.user_detail_get = (req, res) => {
    // get the user id
    console.log(`user details request`);
    console.log(req.query.id);
    User.findById(req.query.id)
    .then((user) => {
        console.log('Fetching user data..');
        // remove user password from the data do i need to remove the ID as well?
        user.password = '';
        res.json({user});
    })
    .catch((err) => {
        console.log('Error getting user data');
        console.log(err);
        res.json({'message': err.message}).status(404);
    })
}


exports.user_update_post = (req, res) => {
    console.log('updating user...' + req.user.id)
    console.log(req.body)
    User.findByIdAndUpdate(req.user.id, req.body, {new: true})
    .then(user => {
        console.log(`updating user ${req.user.id} details`);
        res.json({user});
    })
    .catch(err => {
        console.log(`Error updating user profile ${req.user.id}`);
        console.log(err);
        res.json({err}).status(400);
    })
}

// Get books in users library
// User deletes his account