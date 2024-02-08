const Feedback = require('../model/feedback');

module.exports.home = function(req, res){
    return res.render('home',{
        title: "Ayusman Panda"
    });
}

module.exports.feedback = function(req, res){
    Feedback.find({})
    .then((feedbackList, err)=>{
        if(err){
            return res.redirect('/');
        }
        console.log('Succefully fetched feedbacks from DB');
        return res.render('feedback', {
            title: 'Ayusman Panda | Feedback',
            feedback_list: feedbackList
        });
    })
}

module.exports.projects = function(req, res){
    return res.render('projects', {
        title: 'Ayusman Panda | Projects'
    });
}

module.exports.create = function(req, res){
    Feedback.create(req.body)
    .then((feedback, err)=>{
        if(err){
            console.error('Error while creating an instance of DB', err);
            return;
        }
        return res.redirect('back');
    });
}