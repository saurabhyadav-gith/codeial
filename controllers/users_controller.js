//importing module 
const User = require('../models/user');

module.exports.profile = function(req,res){
    //check first if user id is in cookie
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('user_profile',{
                    title: 'User Profile',
                    user: user
         })
           
                }
            return res.redirect('/users/sign-in');
        });
    }
    else{
        return res.redirect('/users/sign-in')
    }
    
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: " Codeial | Sign Up"
    })
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: " Codeial | Sign In"
    })
}

//get the sign up data 
module.exports.create = function(req,res){
    //checking if password and username is correct; req.body.actionName is used to read from the form
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    //finding if the user already exists; if exists okay otherwise create
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in sign up');
        return
}

    //if user is not find then create it as:
    if(!user){
        User.create(req.body, function(err,user){
            if(err){console.log('error in finding user while signing up'); return}

            return res.redirect('/users/sign-in');
        })
    }
    else{
        return res.redirect('back');
    }
    })

}

// sign in and create session for user
module.exports.createSession = function(req,res){
    //find the user 
    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log('error in finding the user'); return}
        
         //handle the found user
         if(user){

            //if found handle the uname and password mismatch
            if(user.password != req.body.password){
                return res.redirect('back');
            }
           //handle session creation
           res.cookie('user_id',user.id);
           return res.redirect('/users/profile');

         }
         else{
                //handling user not found i.e. sending either to the the sign in page

                return res.redirect('back');
            }
   
    });
    

    

    
}

// module.exports.profile= function(req,res){
//     res.end('<h1>User Profile</h1>');
// }