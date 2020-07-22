
function uno(){
    marcado=-1
    if(document.test.gender.length){
    for(i=0;i<document.test.gender.length;i++){
    if(document.test.gender[i].checked) {
    marcado=i;
    }
    }
    if(marcado!=-1)
      console.log("El valor seleccionado es: "+document.test.gender[marcado].value);
    }
    result = document.test.gender.value;

    if ( result == 'si') {
      console.log('true')
    }else {
      console.log('false')
    }
// 2 pregunta

    if(document.testDos.gender.length){
    for(i=0;i<document.testDos.gender.length;i++){
    if(document.testDos.gender[i].checked) {
    marcado=i;
    }
    }
    if(marcado!=-1)
      console.log("El valor seleccionado es: "+document.testDos.gender[marcado].value);
    }
    result2 = document.testDos.gender.value;

    if ( result == 'si') {
      console.log('true')
    }else {
      console.log('false')
    }
// 3 pregunta
    if(document.testTres.gender.length){
    for(i=0;i<document.testTres.gender.length;i++){
    if(document.testTres.gender[i].checked) {
    marcado=i;
    }
    }
    if(marcado!=-1)
      console.log("El valor seleccionado es: "+document.testTres.gender[marcado].value);
    }
    result3 = document.testTres.gender.value;

    if ( result == 'si') {
      console.log('true')
    }else {
      console.log('false')
    }
// 4 pregunta

    if(document.testCuatro.gender.length){
    for(i=0;i<document.testCuatro.gender.length;i++){
    if(document.testCuatro.gender[i].checked) {
    marcado=i;
    }
    }
    if(marcado!=-1)
      console.log("El valor seleccionado es: "+document.testCuatro.gender[marcado].value);
    }
    result4 = document.testCuatro.gender.value;

    if ( result == 'si') {
      console.log('true')
    }else {
      console.log('false')
    }
// 5 pregunta

        if(document.testCinco.gender.length){
        for(i=0;i<document.testCinco.gender.length;i++){
        if(document.testCinco.gender[i].checked) {
        marcado=i;
        }
        }
        if(marcado!=-1)
          console.log("El valor seleccionado es: "+document.testCinco.gender[marcado].value);
        }
        result5 = document.testCinco.gender.value;

        if ( result == 'si') {
          console.log('true')
        }else {
          console.log('false')
        }
// 6 pregunta

        if(document.testSeis.gender.length){
        for(i=0;i<document.testSeis.gender.length;i++){
        if(document.testSeis.gender[i].checked) {
        marcado=i;
        }
        }
        if(marcado!=-1)
          console.log("El valor seleccionado es: "+document.testSeis.gender[marcado].value);
        }
        result6 = document.testSeis.gender.value;

        if ( result == 'si') {
          console.log('true')
        }else {
          console.log('false')
        }
// 7 pregunta

        if(document.testSiete.gender.length){
        for(i=0;i<document.testSiete.gender.length;i++){
        if(document.testSiete.gender[i].checked) {
        marcado=i;
        }
        }
        if(marcado!=-1)
          console.log("El valor seleccionado es: "+document.testSiete.gender[marcado].value);
        }
        result7 = document.testSiete.gender.value;

        if ( result == 'si') {
          console.log('true')
        }else {
          console.log('false')
        }

      if (result == 'si' && result2 == 'si' && result3 == 'si' && result4 == 'si' && result5 == 'si' && result6 == 'si' && result7 == 'si') {
          window.open("./F4MJ")
      }else {
        document.getElementById('testResult').innerHTML = `<br><p>Una o más de las respuesta son incorrectas. Por favor revisa de nuevo y sigue intentandolo.</p><br>`
      }
}
