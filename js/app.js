/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);


window.addEventListener('click', function() {
  // Diseño de tabs

  var toggleMenu = document.getElementById('toggle-btn');
  toggleMenu.addEventListener('click', toggleSidebar);

  function toggleSidebar(event) {
    this.classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
  }
  var general = document.getElementById('general');
  var estudiantes = document.getElementById('estudiantes');
  var profes = document.getElementById('profesores');
  var allGeneral = document.getElementById('all-general');
  var allStudent = document.getElementById('all-students');
  general.addEventListener('click', function() {
    general.classList.add('show');
    estudiantes.classList.remove('show');
    profes.classList.remove('show');
    allGeneral.classList.add('showTab');
    allGeneral.classList.remove('hideTab');
    allStudent.classList.remove('showTab');
    allStudent.classList.add('hideTab');
  });
  estudiantes.addEventListener('click', function() {
    estudiantes.classList.add('show');
    general.classList.remove('show');
    profes.classList.remove('show');
    allGeneral.classList.add('hideTab');
    allGeneral.classList.remove('showTab');
    allStudent.classList.add('showTab');
    allStudent.classList.remove('hideTab');
  });
  profes.addEventListener('click', function() {
    profes.classList.add('show');
    estudiantes.classList.remove('show');
    general.classList.remove('show');
  });

  // Fin diseño de tabs

  // Select
  var select = document.getElementById('sede');
  var titleSede = document.getElementById('sede-title');
  select.onchange = selectSede;

  function selectSede(event) {
    var arraySedeGeneration = [];
    if (select.value === 'AQP2016-2') {
      arraySedeGeneration.push('AQP', '2016-2');
      titleSede.textContent = 'Sede: Arequipa - Generación: 2016-2';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'AQP2017-1') {
      arraySedeGeneration.push('AQP', '2017-1');
      titleSede.textContent = 'Sede: Arequipa - Generación: 2017-1';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'LIM2016-2') {
      arraySedeGeneration.push('LIM', '2016-2');
      titleSede.textContent = 'Sede: Lima - Generación: 2016-2';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'LIM2017-1') {
      arraySedeGeneration.push('LIM', '2017-1');
      titleSede.textContent = 'Sede: Lima - Generación: 2017-1';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'LIM2017-2') {
      arraySedeGeneration.push('LIM', '2017-2');
      titleSede.textContent = 'Sede: Lima - Generación: 2017-2';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'SCL2016-2') {
      arraySedeGeneration.push('SCL', '2016-2');
      titleSede.textContent = 'Sede: Santiago de Chile - Generación: 2016-2';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'SCL2017-1') {
      arraySedeGeneration.push('SCL', '2017-1');
      titleSede.textContent = 'Sede: Santiago de Chile - Generación: 2017-1';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'SCL2017-2') {
      arraySedeGeneration.push('SCL', '2017-2');
      titleSede.textContent = 'Sede: Santiago de Chile - Generación: 2017-2';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'CDMX2017-1') {
      arraySedeGeneration.push('CDMX', '2017-1');
      titleSede.textContent = 'Sede: Ciudad de Mexico - Generación: 2017-1';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }
    if (select.value === 'CDMX2017-2') {
      arraySedeGeneration.push('CDMX', '2017-2');
      titleSede.textContent = 'Sede: Ciudad de Mexico - Generación: 2017-2';
      titleSede.style.position = 'absolute';
      titleSede.style.marginLeft = '62%';
      titleSede.style.marginTop = '2.5%';
    }

    return arraySedeGeneration;
  }


  // FinSelect

  var sedes = data[selectSede()[0]];
  var generation = sedes[selectSede()[1]];
  var students = generation['students'];
  var ratings = generation.ratings;
  var boxActivas = document.getElementById('activas');
  boxActivas.textContent = active();
  var boxDesactive = document.getElementById('desertoras');
  boxDesactive.textContent = ((deserter() / students.length) * 100).toFixed(1) + '%';
  var boxGoals = document.getElementById('goals');
  boxGoals.textContent = goals();
  var boxGoalsPorc = document.getElementById('goalsPorc');
  boxGoalsPorc.textContent = ((goals() / students.length) * 100).toFixed(1) + '%';
  var boxNps = document.getElementById('prom-nps');
  boxNps.textContent = npsProm().toFixed(1) + '%';
  var boxPromoter = document.getElementById('promoter');
  boxPromoter.textContent = 'promoters: ' + promoterNps().toFixed(1) + '%';
  var boxPassive = document.getElementById('passive');
  boxPassive.textContent = 'passive: ' + passiveNps().toFixed(1) + '%';
  var boxDetractor = document.getElementById('detractor');
  boxDetractor.textContent = 'detractors: ' + detractorNps().toFixed(1) + '%';
  var selectSprintTech = document.getElementById('tech-sprint');
  var boxTech = document.getElementById('skills-tech');
  var boxPercentTech = document.getElementById('tech-percent');
  if (selectSprintTech.value === 'sprint-1') {
    boxTech.textContent = skillsTech()[0];
    boxPercentTech.textContent = ((skillsTech()[0] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintTech.value === 'sprint-2') {
    boxTech.textContent = skillsTech()[1];
    boxPercentTech.textContent = ((skillsTech()[1] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintTech.value === 'sprint-3') {
    boxTech.textContent = skillsTech()[2];
    boxPercentTech.textContent = ((skillsTech()[2] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintTech.value === 'sprint-4') {
    boxTech.textContent = skillsTech()[3];
    boxPercentTech.textContent = ((skillsTech()[3] / students.length) * 100).toFixed(1) + '%';
  }
  var selectSprintHse = document.getElementById('hse-sprint');
  var boxHse = document.getElementById('skills-hse');
  var boxPercentHse = document.getElementById('hse-percent');
  if (selectSprintHse.value === 'sprint-1') {
    boxHse.textContent = skillsHse()[0];
    boxPercentHse.textContent = ((skillsHse()[0] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintHse.value === 'sprint-2') {
    boxHse.textContent = skillsHse()[1];
    boxPercentHse.textContent = ((skillsHse()[1] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintHse.value === 'sprint-3') {
    boxHse.textContent = skillsHse()[2];
    boxPercentHse.textContent = ((skillsHse()[2] / students.length) * 100).toFixed(1) + '%';
  }
  if (selectSprintHse.value === 'sprint-4') {
    boxHse.textContent = skillsHse()[3];
    boxPercentHse.textContent = ((skillsHse()[3] / students.length) * 100).toFixed(1) + '%';
  }
  var boxSatisfaction = document.getElementById('satisfaction-percent');
  boxSatisfaction.textContent = studentSatisfaction().toFixed(1) + '%';
  var jediPoints = document.getElementById('jedi');
  jediPoints.textContent = pointsJedi().toFixed(1);
  var teacherPoints = document.getElementById('teacher');
  teacherPoints.textContent = pointsTeacher().toFixed(1);
  studentPerfil();

  function active() {
    var studentActive = 0;
    for (var i = 0; i < students.length; i++) {
      if (students[i]['active'])
        studentActive++;
    }
    return studentActive;
  }

  function deserter() {
    var studentDesert = 0;
    for (var i = 0; i < students.length; i++) {
      if (!students[i]['active']) 
        studentDesert++;
    }
    return studentDesert;
  }

  function goals() {
    var studentsGoals = [];
    var goalAchieved = 0, pointsTech = 0, pointsHse = 0;
    for (var i = 0; i < students.length; i++) {
      for (var j = 0; j < students[i]['sprints'].length; j++) {
        pointsTech += students[i].sprints[j].score.tech;
        pointsHse += students[i].sprints[j].score.hse;
      }
      var promTech = pointsTech / students[i]['sprints'].length;
      var promHse = pointsHse / students[i]['sprints'].length;
      var promTotal = promTech + promHse;
      studentsGoals.push([promTotal]);
    }
    for (var k = 0; k < studentsGoals.length; k++) {
      if (studentsGoals[k] >= 2100)
        goalAchieved++;
    }
    return goalAchieved;
  }

  function npsProm() {
    var nps = 0;
    var promNps = 0;
    for (var i = 0; i < ratings.length; i++) {
      nps += generation.ratings[i].nps.promoters - generation.ratings[i].nps.detractors;
    }
    promNps = nps / ratings.length;
    return promNps;
  }

  function promoterNps() {
    var promotersPercent = 0;
    for (i = 0; i < ratings.length; i++) {
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors;
      promotersPercent += ((ratings[i].nps.promoters) / totalNps) * 100;
    }
    var promPromotersPercent = promotersPercent / ratings.length;
    return promPromotersPercent;
  }

  function passiveNps() {
    var passivePercent = 0;
    for (i = 0; i < ratings.length; i++) {
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors;
      passivePercent += ((ratings[i].nps.passive) / totalNps) * 100;
    }
    var promPassivePercent = passivePercent / ratings.length;
    return promPassivePercent;
  }

  function detractorNps() {
    var detractorPercent = 0;
    for (i = 0; i < ratings.length; i++) {
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors;
      detractorPercent += ((ratings[i].nps.detractors) / totalNps) * 100;
    }
    var promDetractorPercent = detractorPercent / ratings.length;
    return promDetractorPercent;
  }

  function skillsTech() {
    var arrayTech = [];
    var sprint1 = 0, sprint2 = 0, sprint3 = 0, sprint4 = 0;  
    for (i = 0; i < students.length; i++) {
      for (k = 0; k < students[i].sprints.length; k++) {
        if (students[i].sprints[k].number === 1) {
          if (students[i].sprints[k].score.tech >= 1260)
            sprint1++;
        }
        if (students[i].sprints[k].number === 2) {
          if (students[i].sprints[k].score.tech >= 1260)
            sprint2++;
        } 
        if (students[i].sprints[k].number === 3) {
          if (students[i].sprints[k].score.tech >= 1260)
            sprint3++;
        }
        if (students[i].sprints[k].number === 4) {
          if (students[i].sprints[k].score.tech >= 1260)
            sprint4++;
        }
      }
    }
    arrayTech.push(sprint1, sprint2, sprint3, sprint4); 
    return arrayTech;
  }

  function skillsHse() {
    var arrayHse = [];
    var sprint1 = 0, sprint2 = 0, sprint3 = 0, sprint4 = 0;
    for (i = 0; i < students.length; i++) {
      for (k = 0; k < students[i].sprints.length; k++) {
        if (students[i].sprints[k].number === 1) {
          if (students[i].sprints[k].score.hse >= 840)
            sprint1++;
        }
        if (students[i].sprints[k].number === 2) {
          if (students[i].sprints[k].score.hse >= 840)
            sprint2++;
        }
        if (students[i].sprints[k].number === 3) {
          if (students[i].sprints[k].score.hse >= 840)
            sprint3++;
        }
        if (students[i].sprints[k].number === 4) {
          if (students[i].sprints[k].score.hse >= 840)
            sprint4++;
        }
      }
    }
    arrayHse.push(sprint1, sprint2, sprint3, sprint4);
    return arrayHse;
  }

  function studentSatisfaction() {
    var satisfaction = 0;
    var promSatisfaction = 0;
    for (var i = 0; i < ratings.length; i++) {
      satisfaction += generation.ratings[i].student.cumple + generation.ratings[i].student.supera;
    }
    promSatisfaction = satisfaction / ratings.length;
    return promSatisfaction;
  }

  function pointsJedi() {
    var jedi = 0;
    var promJedi = 0;
    for (var i = 0; i < ratings.length; i++) {
      jedi += generation.ratings[i].jedi;
      promJedi = jedi / ratings.length;
    }
    return promJedi;
  }

  function pointsTeacher() {
    var teacher = 0;
    var promTeacher = 0;
    for (var i = 0; i < ratings.length; i++) {
      teacher += generation.ratings[i].teacher;
      promTeacher = teacher / ratings.length;
    }
    return promTeacher;
  }

  // --STUDENTS--

  function studentPerfil() {
    for (var i = 0; i < students.length; i++) {
      var boxStudentsPerfil = document.createElement('div');
      boxStudentsPerfil.setAttribute('class', 'box-students');
      var name = document.createElement('h2');
      boxStudentsPerfil.appendChild(name);
      name.textContent = students[i].name;
      allStudent.appendChild(boxStudentsPerfil);
    }
    return boxStudentsPerfil;
  }

  // EnrolledCharts

  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Active', 7],
      ['Dropout', 8],
    ]);

    var options = {};

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
});