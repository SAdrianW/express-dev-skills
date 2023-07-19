const Skills = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
}

function index(req, res) {
    res.render('skills/index', { 
        skills: Skills.getAll()
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'Register a New Skill'});
}

function create(req, res) {
    console.log(req.body);
    Skills.create(req.body);
    res.redirect('/skills');
}

