/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

window.addEventListener('click',function(){
    var general = document.getElementById('general');
    var estudiantes = document.getElementById('estudiantes');
    var profes = document.getElementById('profesores');
    general.addEventListener('click',function(){
        general.classList.add('show');
        estudiantes.classList.remove('show');
        profes.classList.remove('show');
    })
    estudiantes.addEventListener('click',function(){
        estudiantes.classList.add('show');
        general.classList.remove('show');
        profes.classList.remove('show');
    })
    profes.addEventListener('click',function(){
        profes.classList.add('show');
        estudiantes.classList.remove('show');
        general.classList.remove('show');
    })
    
    function generalSedes(sedeValue,generationValue){
        var sedes= data[sedeValue];
        var generation =sedes[generationValue];
        var students = generation['students'];
        var active = 0;
            var detrac = 0;
        for ( var i = 0; i < students.length ;i++){
            if(students[i]['active']){
                active++
            }

            if(!students[i]['active']){
                detrac++
            }
        }
        console.log(active);
        console.log(detrac);
    }

    generalSedes('SCL','2017-2');

    
});
