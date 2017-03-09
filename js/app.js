var estudiantes = [];

function obtenerListaEstudiantes(estudiantes) {
    // TO DO: Retornar la lista de estudiantes
    // console.log(estudiantes);
    // var lista=[];// Se declara un arreglo vacio que almacenará los datos de los estudiantes
    // for(var i= 0; i<tam; i++){ //Ciclo que recorre cada elemento del arreglo
    //   lista.push(estudiantes[i]);//Agrega cada elemento del arreglo estudiantes a lista
    // }
    return lista = estudiantes;// regresa la lista
}

function agregarEstudiante() {
    // TO CHECK: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO CHECK: Retornar el estudiante recientemente creado

    var estudiante = {};//Objeto estudiante que almacena los datos del estudiante
    // Se definen los atributos del objeto estudiante (nombre, puntos técnicos y puntos HSE) y se les asigna un valor mediante el promt
    estudiante.nombre = prompt("Ingresa el nombre del estudiante: ");
    estudiante.ptsTecnicos = prompt("Ingresa el porcentaje de puntos técnicos: ");
    estudiante.ptsHse = prompt("Ingresa el porcentaje de Habilidades Socio-Emocionales (HSE): ")
    estudiantes.push(estudiante); //Agrega el objeto estudiante al arreglo estudiantes
    console.log(estudiantes);//Se comprueba que se esten agregando los objetos estudiante al arreglo estudiantes.
    return estudiante;// Regresa el objeto estudiante
}
var tam = estudiantes.length;//Se obtiene el tamaño del arreglo estudiantes

function mostrar(estudiante) {// Función que recibe el objeto estudiante
    // TO CHECK: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";//Se accede al atributo nombre del objeto estudiante
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.ptsTecnicos + "</p>";//Se accede al atributo ptsTecnicos del objeto estudiante
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.ptsHse + "</p>";//Se accede al atributo ptsHse del objeto estudiante
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado; // Regresa resultado
}

function mostrarLista(estudiantes) {//Recibe el resultado que arroja la función obtenerListaEstudiantes como parametro (estudiantes = lista) .
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    console.log("Revisa mi código por favor");//Al parecer mi lista de estudiates esta vacia :( pero suponiendo que no fuera así...
    for(var i=0; i< tam ;i++){// Ciclo que recorre la lista desde el indice 0 hasta i<estudiantes.length(tamaño de la lista)
      var listaEstudiantes = mostrar(estudiantes[i]); // Variable listaEstudiantes manda llamar a la funcion mostrar() para cada elemento i de la lista (estudiantes), esto hace que se muestre cada "tarjeta" con los datos de cada estudiante
      // console.log(listaEstudiantes);
    }
  return listaEstudiantes; //Regresa la lista
}

function buscar(nombre, estudiantes) {//Recibe el nombre a buscar y la lista de estudiantes(estudiantes)
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var nombreBuscar = nombre.toLowerCase(); //Se convierten a minusculas todas las letras del nombre(a buscar) y se asignan a la variable nombreBuscar
    var busca = estudiantes.filter(function(elemento){ //Se usa el método filter para encontrar la coincidencia del nombre a buscar se asigna a la variable busca
      return nombreBuscar == (elemento.nombre).toLowerCase;// Condición de filtro si el nombreBuscar(minusculas) == elemento.nombre(minusculas) se agrega a variable busca
    });

    return busca; //Devuelve el resultado obtenido
}

function topTecnico(estudiantes) { //Recibe lista de estudiantes
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    // console.log(estudiantes);
    return estudiantes.sort(function(a,b){// Regresa la lista ordenada mediante el método sort apartir de la siguiente condición
      return a.ptsTecnicos > b.ptsTecnicos;//Ordena los elementos de la lista de mayor a menor mediante la comparación de cada elemento en el parametro ptsTecnicos
    });
}

function topHSE(estudiantes) {//Recibe lista de estudiantes
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
      // console.log(estudiantes);
    var mayorHse = estudiantes.sort(function(a,b){//Regresa la lista ordenada mediante el método sort apartir asignado a la variable mayorHse
      return a.ptsHse > b.ptsHse;//Ordena los elementos de la lista de mayor a menor mediante la comparación de cada elemento en el parametro ptsHse
    });

    return mayorHse;//Regresa el resultado
}
