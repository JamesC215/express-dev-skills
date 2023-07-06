const skills = [
    {id: 125223, skill: 'Learn HTML', learnt: true},
    {id: 127904, skill: 'Learn CSS', learnt: true},
    {id: 139608, skill: 'Learn JavaScript', learnt: true},
    {id: 119848, skill: 'Express', learnt: false},
    {id: 184738, skill: 'MongoDB', learnt: false},
    {id: 124658, skill: 'Python', learnt: false},
];
	
  module.exports = {
    getAll,
    getOne,
  };
	
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
  }

  function getAll() {
    return skills;
  }