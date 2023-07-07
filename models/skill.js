const skills = [
    {id: 125223, skill: 'HTML', learnt: true},
    {id: 127904, skill: 'CSS', learnt: true},
    {id: 139608, skill: 'JavaScript', learnt: true},
    {id: 119848, skill: 'Express', learnt: false},
    {id: 184738, skill: 'MongoDB', learnt: false},
    {id: 124658, skill: 'Python', learnt: false},
];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
	
  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skills => skills.id === id);
    skill.skill = updatedSkill.skill;
  }

  function deleteOne(id) {
    id = parseInt(id);
    //find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1)
}

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
  }

  function getAll() {
    return skills;
  }