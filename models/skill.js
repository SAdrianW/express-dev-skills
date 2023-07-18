const skills = [
    {id: 1, 
    name: 'design', 
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
    name: 'bug-fixing', 
    proficiency: 'reasonable'
    },
    {id: 5, 
    name: 'CSS', 
    proficiency: 'fair'
    }
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = Number(id);
    return skills.find(skill => skill.id === id);
}
