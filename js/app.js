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

  // Declaramos las variables para reutilazarlas en todas las funciones
  var sedes = data[selectSede()[0]];
  var generation = sedes[selectSede()[1]];
  var students = generation['students'];
  var ratings = generation.ratings;
  // Fin de variables reutilizables

  // LLamar las funciones y colocarlas en el HTML
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
  boxPromoter.textContent = 'promoters: ' + ((promoterNps() / ratings.length) * 100).toFixed(1) + '%';
  var boxPassive = document.getElementById('passive');
  boxPassive.textContent = 'passive: ' + ((promoterNps() / ratings.length) * 100).toFixed(1) + '%';
  var boxDetractor = document.getElementById('detractor');
  boxDetractor.textContent = 'detractors: ' + ((promoterNps() / ratings.length) * 100).toFixed(1) + '%';
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
  // Fin de llamar funciones

  // Funcion para saber el # de estudiantes activas
  function active() {
    var studentActive = 0; // Declaramos la varible que va a acumular inicializadas en 0
    for (var i = 0; i < students.length; i++) { // Recorremos la cantidad de estudiantes 
      if (students[i]['active']) // Condicion para saber si esta activa o no
        studentActive++; // Se va acumulando de acuerdo a la condicion anterior
    }
    return studentActive; // Retorna la variable
  }

  // Funcion para saber el % de estudiantes que desertaron
  function deserter() {
    var studentDesert = 0; // Declaramos la variable que va a acumular inicializada en 0
    for (var i = 0; i < students.length; i++) { // Recorremos el numero de estudiantes 
      if (!students[i]['active']) // Condicion para saber si esta activa o no
        studentDesert++; // Se va acumulando de acuerdo a la condicion anterior
    }
    return studentDesert; // Retorna la variable
  }

  // Funcion para saber el # de estudiantes que alcanzaron la meta
  function goals() {
    var studentsGoals = []; // Declaramos una variable con un array vacio
    var goalAchieved = 0, pointsTech = 0, pointsHse = 0; // Declaramos 3 variables que acumulan inicializadas en 0
    for (var i = 0; i < students.length; i++) { // Recorremos la cantidad de estudiantes 
      for (var j = 0; j < students[i]['sprints'].length; j++) { // Recorremos el numero de sprints
        pointsTech += students[i].sprints[j].score.tech; // Se va acumulando la cantidad de tech
        pointsHse += students[i].sprints[j].score.hse; // Se va acumulando la cantidad de tech 
      }
      var promTech = pointsTech / students[i]['sprints'].length; // Dividimos los puntos de tech acumulados con la cantidad de sprints
      var promHse = pointsHse / students[i]['sprints'].length; // Dividimos los puntos de hse acumulados con la cantidad de sprints
      var promTotal = promTech + promHse; // Se halla el promedio total sumando el promedio de tech y hse
      studentsGoals.push([promTotal]); // Lo agregamos uno a uno en el array
    }
    for (var k = 0; k < studentsGoals.length; k++) { // Recorremos el array
      if (studentsGoals[k] >= 2100) // Condición para saber si llegó al promedio
        goalAchieved++; // Se va acumulando de acuerdo a la condicion anterior
    }
    return goalAchieved; // Retorna la variable
  }

  // Funcion para saber el % del promedio de NPS
  function npsProm() {
    var nps, promNps = 0; // Declaramos las variables que va a acumular inicializadas en 0
    for (var i = 0; i < ratings.length; i++) { // Recorremos el numero de sprints
      nps += generation.ratings[i].nps.promoters - generation.ratings[i].nps.detractors; // Acumulamos la resta entre promotores y detractores
    }
    promNps = nps / ratings.length; // Dividimos el resultado anterior con el numero de sprints
    return promNps; // Retorna la variable
  }

  // Funcion para saber el % del promedio de promotores
  function promoterNps() {
    var promotersPercent = 0; // Declaramos la variable inicializada en 0
    for (i = 0; i < ratings.length; i++) { // Recorremos el numero de sprints
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors; // Total de nps
      promotersPercent += (ratings[i].nps.promoters) / totalNps; // Acumulamos la division de los promotores con total nps
    }
    return promotersPercent; // Retornamos la variable
  }

  // Funcion para saber el % del promedio de pasivos
  function passiveNps() {
    var passivePercent = 0; // Declaramos la variable inicializada en 0
    for (i = 0; i < ratings.length; i++) { // Recorremos el numero de sprints
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors; // Total de nps
      passivePercent += (ratings[i].nps.passive) / totalNps; // Acumulamos la division de los pasivos con total nps
    }
    return promPassivePercent; // Retornamos la variable
  }

  // Funcion para saber el % del promedio de detractores
  function detractorNps() { 
    var detractorPercent = 0; // Declaramos la variable inicializada en 0
    for (i = 0; i < ratings.length; i++) { // Recorremos el numero de sprints
      var totalNps = ratings[i].nps.promoters + ratings[i].nps.passive + ratings[i].nps.detractors; // Total de nps
      detractorPercent += (ratings[i].nps.detractors) / totalNps; // Acumulamos la division de los detractores con total nps
    }
    return promDetractorPercent; // Retornamos la variable
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