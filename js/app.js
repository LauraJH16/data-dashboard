/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

window.addEventListener('click', function() {
  var toggleMenu = document.getElementById('toggle-btn');
  toggleMenu.addEventListener('click', toggleSidebar);
  function toggleSidebar(event) {
    this.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
  }
  var general = document.getElementById('general');
  var estudiantes = document.getElementById('estudiantes');
  var profes = document.getElementById('profesores');
  general.addEventListener('click', function() {
    general.classList.add('show');
    estudiantes.classList.remove('show');
    profes.classList.remove('show');
  });
  estudiantes.addEventListener('click', function() {
    estudiantes.classList.add('show');
    general.classList.remove('show');
    profes.classList.remove('show');
  });
  profes.addEventListener('click', function() {
    profes.classList.add('show');
    estudiantes.classList.remove('show');
    general.classList.remove('show');
  });
    
  var sedes = data['AQP'];
  var generation = sedes['2016-2'];
  var students = generation['students'];
  var boxActivas = document.getElementById('activas');
  boxActivas.textContent = active('AQP', '2016-2');
  var boxDesactive = document.getElementById('desertoras');
  boxDesactive.textContent = ((deserter('AQP', '2016-2') / students.length) * 100).toFixed(1) + '%';
  var boxGoals = document.getElementById('goals');
  boxGoals.textContent = goals('AQP', '2016-2');
  var boxGoalsPorc = document.getElementById('goalsPorc');
  boxGoalsPorc.textContent = ((goals('AQP', '2016-2') / students.length) * 100).toFixed(1) + '%';
  var boxNps = document.getElementById('prom-nps');
  boxNps.textContent = npsProm('AQP', '2016-2').toFixed(1) + '%';
  var boxPromoter = document.getElementById('promoter');
  boxPromoter.textContent = 'promoters: ' + promoterNps('AQP', '2016-2').toFixed(1) + '%';
  var boxPassive = document.getElementById('passive');
  boxPassive.textContent = 'passive: ' + passiveNps('AQP', '2016-2').toFixed(1) + '%';
  var boxDetractor = document.getElementById('detractor');
  boxDetractor.textContent = 'detractors: ' + detractorNps('AQP', '2016-2').toFixed(1) + '%';
  var selectSprintTech = document.getElementById('tech-sprint');
  var boxTech = document.getElementById('skills-tech');
  var boxPercentTech = document.getElementById('tech-percent');
  if (selectSprintTech.value === 'sprint-1') {
    boxTech.textContent = skillsTech('AQP', '2016-2')[0];
    boxPercentTech.textContent = ((skillsTech('AQP', '2016-2')[0] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintTech.value === 'sprint-2') {
    boxTech.textContent = skillsTech('AQP', '2016-2')[1];
    boxPercentTech.textContent = ((skillsTech('AQP', '2016-2')[1] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintTech.value === 'sprint-3') {
    boxTech.textContent = skillsTech('AQP', '2016-2')[2];
    boxPercentTech.textContent = ((skillsTech('AQP', '2016-2')[2] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintTech.value === 'sprint-4') {
    boxTech.textContent = skillsTech('AQP', '2016-2')[3];
    boxPercentTech.textContent = ((skillsTech('AQP', '2016-2')[3] / students.length) * 100).toFixed(1) + '%';
  }
  var selectSprintHse = document.getElementById('hse-sprint');
  var boxHse = document.getElementById('skills-hse');
  var boxPercentHse = document.getElementById('hse-percent');
  if (selectSprintHse.value === 'sprint-1') {
    boxHse.textContent = skillsHse('AQP', '2016-2')[0];
    boxPercentHse.textContent = ((skillsHse('AQP', '2016-2')[0] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintHse.value === 'sprint-2') {
    boxHse.textContent = skillsHse('AQP', '2016-2')[1];
    boxPercentHse.textContent = ((skillsHse('AQP', '2016-2')[1] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintHse.value === 'sprint-3') {
    boxHse.textContent = skillsHse('AQP', '2016-2')[2];
    boxPercentHse.textContent = ((skillsHse('AQP', '2016-2')[2] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintHse.value === 'sprint-4') {
    boxHse.textContent = skillsHse('AQP', '2016-2')[3];
    boxPercentHse.textContent = ((skillsHse('AQP', '2016-2')[3] / students.length) * 100).toFixed(1) + '%';
  }
  var boxSatisfaction = document.getElementById('satisfaction-percent');
  boxSatisfaction.textContent = studentSatisfaction('AQP', '2016-2').toFixed(1) + '%';
  var jediPoints = document.getElementById('jedi');
  jediPoints.textContent = pointsJedi('AQP', '2016-2').toFixed(1);
  var teacherPoints = document.getElementById('teacher');
  teacherPoints.textContent = pointsTeacher('AQP', '2016-2').toFixed(1);
  
  function active(sedeValue, generationValue) {
    var studentActive = 0;
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var students = generation['students'];
    for (var i = 0; i < students.length ;i++) {
      if (students[i]['active']) {
        studentActive++;
      }
    }
    return studentActive;
  }
    
  function deserter(sedeValue, generationValue) {
    var studentDesert = 0;
    var boxActives = document.getElementById('activas');
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var students = generation['students'];
    for (var i = 0; i < students.length ;i++) {
      if (!students[i]['active']) {
        studentDesert++;
      }
    }
    return studentDesert;
  }

  function goals(sedeValue, generationValue) {
    var studentsGoals = [];
    var goalAchieved = 0;
    var pointsTech = 0;
    var pointsHse = 0;
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var students = generation['students'];
    
    for (var i = 0; i < students.length; i++) {
      if (students[i].active) {
        for (var j = 0; j < students[i]['sprints'].length; j++) {
          pointsTech += students[i].sprints[j].score.tech;
          pointsHse += students[i].sprints[j].score.hse;
        }
        var promTech = pointsTech / students[i].sprints.length;
        var promHse = pointsHse / students[i].sprints.length;
        var promTotal = promTech + promHse;
        studentsGoals.push([promTotal]);
      }
    }
    for (var k = 0 ; k < studentsGoals.length ;k++) {
      if (studentsGoals[k] >= 2100) {
        goalAchieved ++;     
      }
    }
    return goalAchieved;
  }

  function npsProm(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var ratings = generation.ratings;
    var nps = 0;
    var promNps = 0;
    for (var i = 0; i < ratings.length;i++) {
      nps += generation.ratings[i].nps.promoters - generation.ratings[i].nps.detractors;
    }
    promNps = nps / ratings.length;
    return promNps;
  }

  function promoterNps(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var ratings = generation.ratings;
    var promotersPercent = 0;
         
    for (i = 0; i < ratings.length;i++) {
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors ;
      promotersPercent += ((ratings[i].nps.promoters) / totalNps) * 100;
    }
    var promPromotersPercent = promotersPercent / ratings.length;
    return promPromotersPercent;
  }

  function passiveNps(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var ratings = generation.ratings;
    var passivePercent = 0;
         
    for (i = 0; i < ratings.length;i++) {
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors ;
      passivePercent += ((ratings[i].nps.passive) / totalNps) * 100;
    }
    var promPassivePercent = passivePercent / ratings.length;
    return promPassivePercent;
  }

  function detractorNps(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var ratings = generation.ratings;
    var detractorPercent = 0;
         
    for (i = 0; i < ratings.length;i++) {
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors ;
      detractorPercent += ((ratings[i].nps.detractors) / totalNps) * 100;
    }
    var promDetractorPercent = detractorPercent / ratings.length;
    return promDetractorPercent;
  }

  function skillsTech(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var students = generation['students'];
    var arrayTech = [];
    var sprint1 = 0, sprint2 = 0, sprint3 = 0, sprint4 = 0;
    for (i = 0;i < students.length;i++) {
      if (students[i].active) {
        for (k = 0 ; k < students[i].sprints.length ;k++) {
          if (students[i].sprints[k].number === 1) {
            if (students[i].sprints[k].score.tech >= 1260) 
              sprint1++;
          } else if (students[i].sprints[k].number === 2) {
            if (students[i].sprints[k].score.tech >= 1260) 
              sprint2++;
          } else if (students[i].sprints[k].number === 3) {
            if (students[i].sprints[k].score.tech >= 1260) 
              sprint3++;
          } else if (students[i].sprints[k].number === 4) {
            if (students[i].sprints[k].score.tech >= 1260) 
              sprint4++;
          }
        }
      }
    }
    arrayTech.push(sprint1, sprint2, sprint3, sprint4);
    return arrayTech;
  }

  function skillsHse(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var students = generation['students'];
    var arrayHse = [];
    var sprint1 = 0, sprint2 = 0, sprint3 = 0, sprint4 = 0;
    for (i = 0;i < students.length;i++) {
      if (students[i].active) {
        for (k = 0 ; k < students[i].sprints.length ;k++) {
          if (students[i].sprints[k].number === 1) {
            if (students[i].sprints[k].score.hse >= 840) 
              sprint1++;
          } else if (students[i].sprints[k].number === 2) {
            if (students[i].sprints[k].score.hse >= 840) 
              sprint2++;
          } else if (students[i].sprints[k].number === 3) {
            if (students[i].sprints[k].score.hse >= 840) 
              sprint3++;
          } else if (students[i].sprints[k].number === 4) {
            if (students[i].sprints[k].score.hse >= 840) 
              sprint4++;
          }
        }
      }
    }
    arrayHse.push(sprint1, sprint2, sprint3, sprint4);
    return arrayHse;
  }

  function studentSatisfaction(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var ratings = generation.ratings;
    var satisfaction = 0;
    var promSatisfaction = 0;
    for (var i = 0; i < ratings.length;i++) {
      satisfaction += generation.ratings[i].student.cumple + generation.ratings[i].student.supera;
    }
    promSatisfaction = satisfaction / ratings.length;
    return promSatisfaction;
  }

  function pointsJedi(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var ratings = generation.ratings;
    var jedi = 0;
    var promJedi = 0;
    for (var i = 0; i < ratings.length;i++) {
      jedi += generation.ratings[i].jedi;
      promJedi = jedi / ratings.length;
    }
    return promJedi;
  }

  function pointsTeacher(sedeValue, generationValue) {
    var sedes = data[sedeValue];
    var generation = sedes[generationValue];
    var ratings = generation.ratings;
    var teacher = 0;
    var promTeacher = 0;
    for (var i = 0; i < ratings.length;i++) {
      teacher += generation.ratings[i].teacher;
      promTeacher = teacher / ratings.length;
    }
    return promTeacher;
  }
});
