const skills = [
    {id: 1, 
    name: 'Design', 
    proficiency: 'good'
    },
    {id: 2, 
    name: 'JS', 
    proficiency: 'moderate'
    },
    {id: 3, 
    name: 'HTML', 
    proficiency: 'decent'
    },
    {id: 4, 
    name: 'Bug-fixing', 
    proficiency: 'reasonable'
    },
    {id: 5, 
    name: 'CSS', 
    proficiency: 'fair'
    }
]

module.exports = {
    getAll,
    getOne,
    create
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = Number(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 100000000;
    skills.push(skill);
}
