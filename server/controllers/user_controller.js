const User = require('../models/user');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const axios = require('axios');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        let { name, email, password, idFb } = req.body
        let hash = bcrypt.hashSync(password, salt);
        User.create({
            name: name,
            email: email,
            password: hash,
            idFb: idFb
        })

            .then((result) => {
                res.status(201).json({
                    msg: 'yeay !, you have registered',
                    result
                })
            })
            .catch((err) => {
                res.status(500).json({
                    msg: err.message
                })
            });
    },

    getUsers: (req, res) => {
        User.find()
            .then((users) => {
                res.status(200).json(users)
            })
            .catch((err) => {
                res.status(500).json({
                    msg: err.message
                })
            });
    },

    updateUser: (req, res) => {
        const { name, email } = req.body
        User.findOne({ _id: req.params.id })
            .then((result) => {
                if (result) {
                    User.updateOne({_id : req.params.id},{
                        name: name || result.name,
                        email: email || result.email,
                    })
                        .then((result) => {
                            res.status(201).json({
                                msg: 'data updated',
                                result
                            })
                        })
                        .catch((err) => {
                            res.status(500).json({
                                msg: err.message
                            })
                        });
                } else {
                    res.status(404).json({
                        msg: 'data not found'
                    })
                }
            })
            .catch((err) => {
                res.status(500).json({
                    msg: err.message
                })
            });
    },

    removeUser: (req,res) => {
        User.deleteOne({_id : req.params.id})
        .then(() => {
            res.status(201).json({
                msg: 'data deleted'
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: err.message
            })
        });   
    },

    signFb: (req, res) => {
        let token = req.body.accessToken
        let user_info = `https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`
        axios.get(user_info)
        .then((result) => {
           User.findOne({email : result.data.email})
            .then((user) => {
               if(user){
                    console.log('diatas',user);
                    let token = jwt.sign({
                        id: user._id,
                        name: user.name,
                        email: user.email
                    },'secret-key')
                    
                    res.status(200).json({
                       msg: 'login succes',
                       token
                   })
                }else{
                    User.create({
                        name: result.data.name,
                        email: result.data.email
                    })
                    .then((newUser) => {
                        let token = jwt.sign({
                            id: newUser._id,
                            name: newUser.name,
                            email: newUser.email
                        },'secret-key')

                        res.status(200).json({
                            msg: 'login succes',
                            token
                        })

                    })
                    .catch((err) => {
                        res.status(500).json({
                            msg: err.message
                        })
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({
                    msg: err.message
                })
            });
        })
        .catch((err) => {
            res.status(500).json({
                msg: err.message
            })
        });
    }
};
