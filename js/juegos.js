const juegos = [
    {
        id: "truco",
        nombre: "Naipes — Truco",
        categoria: "cartas",
        etiquetas: ["2 jugadores", "grupos", "competitivo", "clasico"],
        jugadores: "2 - 6",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "truco.jpg",
        reglas: `
    Se juega con baraja española.

    El objetivo es ganar manos mediante cartas de mayor
    valor y utilizando el canto del truco para aumentar
    los puntos en juego.

    En cada mano se enfrentan las cartas jugadas y gana
    quien consiga imponerse en dos de las tres rondas.

    También pueden cantarse ENVIDO y TRUCO.

    Gana quien llega primero a la cantidad de puntos
    acordada antes de comenzar.
`,
    },
    {
        id: "poker",
        nombre: "Naipes — Póker",
        categoria: "cartas",
        etiquetas: ["grupos", "competitivo", "estrategia"],
        jugadores: "2 - 8",
        edad: "18+",
        duracion: "30+ min",
        imagen: "poker.jpg",
        reglas: `
    Cada jugador recibe cartas y debe formar la mejor
    combinación posible según la variante de póker.

    Durante la partida se realizan rondas de apuestas.

    Los jugadores pueden apostar, igualar, subir la apuesta
    o retirarse.

    Al finalizar la ronda, gana quien tenga la mejor mano
    o quien consiga que los demás jugadores se retiren.
`,
    },
    {
        id: "uno",
        nombre: "UNO",
        categoria: "cartas",
        etiquetas: ["rapido", "grupos", "familiar", "competitivo"],
        jugadores: "2 - 10",
        edad: "7+",
        duracion: "15 - 30 min",
        imagen: "uno.jpg", 
        reglas: `
    Cada jugador recibe 7 cartas.

    En tu turno tenés que jugar una carta que coincida
    con el color, número o símbolo de la carta que está
    sobre la mesa.

    Si no podés jugar, robás una carta.

    Las cartas especiales pueden cambiar el sentido,
    hacer robar cartas o modificar el color.

    Cuando te quede una sola carta, tenés que decir
    "UNO".

    Gana el primero que se queda sin cartas.
`,

    },
    {
        id: "jenga",
        nombre: "Jenga",
        categoria: "habilidad",
        etiquetas: ["rapido", "grupos", "familiar", "competitivo"],
        jugadores: "2+",
        edad: "6+",
        duracion: "10 - 20 min",
        imagen: "jenga.jpg",
        reglas: `
    Se construye una torre colocando los bloques de a tres
    por nivel, alternando la dirección de cada piso.

    En cada turno, un jugador debe retirar un bloque de
    cualquier nivel por debajo del último piso completo.

    Después debe colocarlo en la parte superior de la torre.

    El objetivo es mantener la torre en pie.

    Pierde quien hace que la torre se caiga.
`,
    },
    {
        id: "con-eso-no-se-jode",
        nombre: "Con Eso No Se Jode",
        categoria: "fiesta",
        etiquetas: ["grupos", "humor", "adultos"],
        jugadores: "4+",
        edad: "18+",
        duracion: "20 - 40 min",
        imagen: "con-eso-no-se-jode.jpg",
        reglas: `
    Cada jugador recibe una cantidad de cartas.

    Por turnos se siguen las instrucciones de las cartas
    y se resuelven los desafíos, preguntas o situaciones
    que aparezcan.

    Algunas cartas pueden generar situaciones absurdas
    o hacer que los jugadores interactúen entre sí.

    El objetivo es pasarla bien y seguir las reglas que
    indique cada carta.
`,
    },
    {
        id: "domino",
        nombre: "Dominó",
        categoria: "clasicos",
        etiquetas: ["2 jugadores", "grupos", "estrategia", "familiar"],
        jugadores: "2 - 4",
        edad: "6+",
        duracion: "15 - 30 min",
        imagen: "domino.jpg",
        reglas: `
    Se mezclan las fichas boca abajo y cada jugador recibe
    la cantidad correspondiente según la variante.

    Comienza quien tenga la ficha acordada para iniciar.

    En cada turno se coloca una ficha haciendo coincidir
    uno de sus números con uno de los extremos de la mesa.

    Si un jugador no puede colocar, roba o pasa según
    las reglas acordadas.

    Gana quien se queda sin fichas primero.
`,
    },
    {
        id: "taco-gato",
        nombre: "Taco, Gato, Cabra, Queso, Pizza",
        categoria: "fiesta",
        etiquetas: ["rapido", "grupos", "reflejos", "familiar"],
        jugadores: "3 - 8",
        edad: "8+",
        duracion: "10 - 15 min",
        imagen: "taco-gato.jpg",
        reglas: `
    Se colocan las cartas formando un mazo boca abajo.

    Los jugadores se turnan para sacar una carta mientras
    dicen, en orden: TACO, GATO, CABRA, QUESO, PIZZA.

    Si la palabra que se dice coincide con la carta que
    aparece, todos deben golpear rápidamente el montón.

    El último en hacerlo se lleva las cartas.

    También hay cartas especiales que agregan movimientos.

    Gana quien consigue quedarse sin cartas.
`,
    },
    {
        id: "say-my-name",
        nombre: "Say My Name",
        categoria: "fiesta",
        etiquetas: ["grupos", "palabras", "humor"],
        jugadores: "4+",
        edad: "12+",
        duracion: "20 - 40 min",
        imagen: "say-my-name.jpg",
        reglas: `
    Se forman equipos.

    Un jugador debe conseguir que sus compañeros adivinen
    el personaje o palabra de la carta utilizando las
    pistas permitidas por el juego.

    No se puede decir directamente la palabra que aparece
    en la carta.

    Se juega por turnos y se suman puntos por cada respuesta
    correcta.

    Gana el equipo que consigue más puntos.
`,
    },
    {
        id: "dany",
        nombre: "Dany",
        categoria: "fiesta",
        etiquetas: ["grupos", "deduccion"],
        jugadores: "3+",
        edad: "12+",
        duracion: "20 - 40 min",
        imagen: "dany.jpg",
        reglas: `
    Un jugador recibe el rol secreto de Dany.

    Durante la partida aparecen imágenes y los jugadores
    deben relacionarlas con las pistas que se van dando.

    Uno de los jugadores intenta pasar desapercibido mientras
    los demás tratan de descubrir quién es.

    Al final se vota y se revelan los roles.

    El objetivo depende del rol que tenga cada jugador.
`,
    },
    {
        id: "no-lo-testeamos",
        nombre: "No Lo Testeamos Ni Un Poco",
        categoria: "fiesta",
        etiquetas: ["rapido", "grupos", "humor", "cartas"],
        jugadores: "2+",
        edad: "18+",
        duracion: "10 - 20 min",
        imagen: "no-lo-testeamos.jpg",
        reglas: `
    Se mezclan las cartas y se forma un mazo.

    En cada turno un jugador roba una carta y debe resolver
    lo que indique.

    Las cartas pueden plantear desafíos, reglas absurdas
    o situaciones inesperadas.

    Se siguen las instrucciones de cada carta y se continúa
    hasta que se cumpla la condición acordada para terminar.
`,
    },
    {
        id: "el-infiltrado",
        nombre: "El Infiltrado",
        categoria: "deduccion",
        etiquetas: ["grupos", "engaño", "conversacion"],
        jugadores: "4+",
        edad: "12+",
        duracion: "20 - 40 min",
        imagen: "el-infiltrado.jpg",
        reglas: `
    Cada jugador recibe información secreta.

    La mayoría conoce una palabra, concepto o situación,
    mientras que el infiltrado tiene información diferente
    o no conoce la respuesta.

    Los jugadores conversan y hacen preguntas para descubrir
    quién está intentando pasar desapercibido.

    Después de la discusión se realiza una votación.

    El objetivo del grupo es descubrir al infiltrado.
`,
    },
    {
        id: "abrecabezas",
        nombre: "Abrecabezas",
        categoria: "ingenio",
        etiquetas: ["logica", "desafio", "estrategia"],
        jugadores: "1+",
        edad: "8+",
        duracion: "15 - 30 min",
        imagen: "abrecabezas.jpg",
        reglas: `
    Se plantea un desafío utilizando las cartas y componentes
    del juego.

    Los jugadores deben analizar las pistas, relaciones o
    problemas planteados y encontrar la solución.

    Cada desafío tiene su propia respuesta o condición para
    ser resuelto.

    El objetivo es completar correctamente la mayor cantidad
    de desafíos posibles.
`,
    },
    {
        id: "abrecabezas-max",
        nombre: "Abrecabezas Max",
        categoria: "ingenio",
        etiquetas: ["logica", "desafio", "estrategia"],
        jugadores: "1+",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "abrecabezas-max.jpg",
        reglas: `
    Se forman equipos o se juega individualmente según
    la modalidad elegida.

    Las cartas presentan desafíos que deben resolverse
    utilizando los componentes disponibles.

    Algunos desafíos requieren lógica, rapidez,
    observación o creatividad.

    Se acumulan puntos por los desafíos superados.

    Gana quien consigue más puntos al finalizar.
`,
    },
    {
        id: "life",
        nombre: "Life — Juego de la Vida",
        categoria: "mesa",
        etiquetas: ["familia", "estrategia", "grupos", "largo"],
        jugadores: "2 - 4",
        edad: "8+",
        duracion: "45+ min",
        imagen: "life.jpg",
        reglas: `
    Cada jugador comienza su recorrido con un automóvil
    y toma decisiones sobre su vida.

    Durante el recorrido aparecen diferentes situaciones:
    estudios, trabajo, familia, dinero y otros acontecimientos.

    Los jugadores avanzan por el tablero y deben tomar
    decisiones que afectan su dinero y su recorrido.

    Al finalizar, se compara la situación de los jugadores
    según las reglas de la partida.

    Gana quien termina con mayor patrimonio.
`,
    },
    {
        id: "basta",
        nombre: "Basta",
        categoria: "palabras",
        etiquetas: ["rapido", "grupos", "familiar", "palabras"],
        jugadores: "2+",
        edad: "8+",
        duracion: "15 - 30 min",
        imagen: "basta.jpg",
        reglas: `
    Se elige una carta al azar.

    Todos los jugadores deben completar palabras con letras del circulo.

    Cuando un jugador dice una palabra, presiona el centro y se reinicia el tiempo.

    Si un jugador se queda sin tiempo para decir su palabra pierde la ronda.
`,
    },
    {
        id: "coggle",
        nombre: "Coggle",
        categoria: "palabras",
        etiquetas: ["palabras", "creatividad", "grupos"],
        jugadores: "2+",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "coggle.jpg",
        reglas: `
    Los jugadores deben formar palabras utilizando las
    letras o elementos disponibles.

    Se buscan combinaciones válidas y se suman puntos
    según las reglas del juego.

    Las palabras deben respetar las condiciones establecidas
    para cada partida.

    Gana quien consigue la mayor cantidad de puntos.
`,
    },
    {
        id: "monopoly",
        nombre: "Monopoly",
        categoria: "mesa",
        etiquetas: ["estrategia", "negociacion", "grupos", "largo"],
        jugadores: "2 - 6",
        edad: "8+",
        duracion: "60+ min",
        imagen: "monopoly.jpg",
        reglas: `
    Cada jugador recibe dinero y una ficha.

    Por turnos se tiran los dados y se avanza por el tablero.

    Cuando un jugador cae en una propiedad disponible puede
    comprarla.

    Las propiedades pueden generar alquiler cuando otro
    jugador cae en ellas.

    También se pueden construir casas y hoteles y negociar
    propiedades con otros jugadores.

    El objetivo es conseguir dinero y propiedades mientras
    los demás jugadores quedan en bancarrota.

    Gana el último jugador que conserva su patrimonio.
`,
    },
    {
        id: "tabu",
        nombre: "Tabú",
        categoria: "fiesta",
        etiquetas: ["grupos", "palabras", "comunicacion", "familiar"],
        jugadores: "4+",
        edad: "12+",
        duracion: "20 - 40 min",
        imagen: "tabu.jpg",
        reglas: `
    Se forman dos equipos.

    En cada turno un jugador debe conseguir que su equipo
    adivine la palabra principal de una carta.

    Para hacerlo debe dar pistas sin mencionar ninguna de
    las palabras prohibidas que aparecen en la misma carta.

    El equipo suma un punto por cada palabra acertada
    dentro del tiempo disponible.

    Gana el equipo que consigue más puntos.
`,
    },
    {
        id: "batalla-naval",
        nombre: "Batalla Naval",
        categoria: "clasicos",
        etiquetas: ["2 jugadores", "estrategia", "competitivo"],
        jugadores: "2",
        edad: "7+",
        duracion: "15 - 30 min",
        imagen: "batalla-naval.jpg",
        reglas: `
    Cada jugador coloca sus barcos en su tablero sin mostrar
    su ubicación al rival.

    Por turnos, cada jugador indica una coordenada para intentar
    encontrar un barco enemigo.

    El rival informa si el disparo fue agua o alcanzó un barco.

    Cuando todas las posiciones de un barco son alcanzadas,
    ese barco queda hundido.

    Gana quien logra hundir todos los barcos del rival.
`,
    },
    {
        id: "laberinto",
        nombre: "Laberinto",
        categoria: "ingenio",
        etiquetas: ["estrategia", "familia", "grupos"],
        jugadores: "2 - 4",
        edad: "7+",
        duracion: "20 - 30 min",
        imagen: "laberinto.jpg",
        reglas: `
    Cada jugador recibe una ficha y comienza en una posición
    determinada del tablero.

    En cada turno se modifica el laberinto moviendo una pieza
    del tablero.

    Después, el jugador intenta avanzar por los caminos
    disponibles para alcanzar su objetivo.

    Los caminos cambian constantemente, por lo que hay que
    planificar los movimientos.

    Gana quien consigue completar primero sus objetivos.
`,
    },
    {
        id: "cruzando-palabras",
        nombre: "Cruzando Palabras",
        categoria: "palabras",
        etiquetas: ["palabras", "estrategia", "familiar"],
        jugadores: "2+",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "cruzando-palabras.jpg",
        reglas: `
    Los jugadores forman palabras utilizando las letras
    disponibles.

    Las palabras se colocan cruzándose entre sí en el tablero,
    aprovechando las letras que ya están colocadas.

    Cada palabra suma puntos según las letras utilizadas
    y las casillas especiales del tablero.

    Se continúa hasta que se termina la partida según las
    reglas del juego.

    Gana quien consigue más puntos.
`,
    },
    {
        id: "damas",
        nombre: "Damas",
        categoria: "clasicos",
        etiquetas: ["2 jugadores", "estrategia", "clasico"],
        jugadores: "2",
        edad: "6+",
        duracion: "15 - 30 min",
        imagen: "damas.jpg",
        reglas: `
    Cada jugador comienza con sus fichas en las casillas
    correspondientes del tablero.

    Las fichas se mueven en diagonal hacia adelante.

    Para capturar una ficha rival se salta sobre ella hacia
    una casilla libre.

    Cuando una ficha llega al extremo contrario del tablero,
    se convierte en dama.

    Gana quien captura todas las fichas del rival o consigue
    dejarlo sin movimientos posibles.
`,
    },
    {
        id: "graffiti",
        nombre: "Graffiti",
        categoria: "creatividad",
        etiquetas: ["grupos", "dibujo", "creatividad", "familiar"],
        jugadores: "3+",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "graffiti.jpg",
        reglas: `
    Un jugador toma una consigna y debe dibujarla sin decir
    directamente qué está representando.

    Los demás jugadores intentan adivinar el dibujo.

    Se otorgan puntos por las respuestas correctas y según
    las reglas de cada ronda.

    Se juegan varias rondas y gana quien consigue más puntos.
`,
    },
    {
        id: "parchis",
        nombre: "Parchís",
        categoria: "clasicos",
        etiquetas: ["grupos", "familiar", "estrategia"],
        jugadores: "2 - 4",
        edad: "6+",
        duracion: "30 - 45 min",
        imagen: "parchis.jpg",
        reglas: `
    Cada jugador comienza con sus fichas en su zona de salida.

    Por turnos se tira el dado y se avanza por el recorrido.

    Las fichas pueden capturar a las fichas rivales cuando
    caen sobre la misma casilla, según las reglas de la partida.

    El objetivo es llevar todas las fichas hasta la llegada.

    Gana el primer jugador que consigue llevar todas sus fichas
    hasta el final.
`,
    },
    {
        id: "dos",
        nombre: "DOS",
        categoria: "cartas",
        etiquetas: ["rapido", "grupos", "familiar", "competitivo"],
        jugadores: "2 - 4",
        edad: "7+",
        duracion: "15 - 30 min",
        imagen: "dos.jpg",
        reglas: `
    Cada jugador recibe cartas y se colocan cartas boca arriba
    en el centro de la mesa.

    En tu turno podés jugar cartas que coincidan con los números
    disponibles según las reglas del juego.

    Algunas combinaciones permiten conseguir bonificaciones
    y modificar el desarrollo de la partida.

    Cuando te quedan dos cartas, tenés que decir DOS.

    Gana quien consigue quedarse sin cartas primero.
`,
    },
    {
        id: "kluster",
        nombre: "Kluster",
        categoria: "habilidad",
        etiquetas: ["destreza", "estrategia", "rapido"],
        jugadores: "1 - 4",
        edad: "14+",
        duracion: "10 - 20 min",
        imagen: "kluster.jpg"
    },
    {
        id: "palitos-chinos",
        nombre: "Palitos Chinos",
        categoria: "habilidad",
        etiquetas: ["rapido", "destreza", "clasico"],
        jugadores: "2+",
        edad: "6+",
        duracion: "10 - 20 min",
        imagen: "palitos-chinos.jpg",
        reglas
: `
    Se dejan caer todos los palitos formando un montón.

    Por turnos, cada jugador intenta retirar un palito sin
    mover ninguno de los demás.

    Si mueve otros palitos, termina su turno.

    Se acumulan puntos según el valor de los palitos obtenidos.

    Gana quien consigue más puntos.
`,
    },
    {
        id: "simon-dice",
        nombre: "Simón Dice",
        categoria: "habilidad",
        etiquetas: ["memoria", "reflejos", "rapido", "competitivo"],
        jugadores: "1+",
        edad: "6+",
        duracion: "10 - 20 min",
        imagen: "simon-dice.jpg",
        reglas: `
    El juego enciende una secuencia de luces y sonidos.

    El jugador debe repetir la secuencia presionando los
    botones en el mismo orden.

    Después de cada ronda se agrega un nuevo paso a la secuencia,
    haciendo que el desafío sea cada vez más difícil.

    Si el jugador se equivoca, termina su turno o la partida,
    según la modalidad del juego.

    Gana quien consigue repetir la secuencia más larga.
`,
        
        
    },
    {
        id: "aro-al-gancho",
        nombre: "Aro al Gancho",
        categoria: "habilidad",
        etiquetas: ["destreza", "rapido", "competitivo"],
        jugadores: "1 - 2",
        edad: "6+",
        duracion: "5 - 15 min",
        imagen: "aro-al-gancho.jpg",
        reglas: `
    El objetivo es conseguir que el aro quede enganchado
    en el objetivo.

    Los jugadores realizan sus intentos por turnos.

    Cada acierto suma un punto.

    Se puede establecer una cantidad determinada de rondas
    o una cantidad de puntos para definir al ganador.
`,
    },
    {
        id: "tateti",
        nombre: "Tatetí",
        categoria: "clasicos",
        etiquetas: ["2 jugadores", "rapido", "estrategia", "clasico"],
        jugadores: "2",
        edad: "5+",
        duracion: "5 - 10 min",
        imagen: "tateti.jpg",
        reglas
: `
    Se juega entre dos personas.

    Un jugador utiliza X y el otro O.

    Por turnos, cada jugador coloca su símbolo en una casilla
    libre del tablero.

    El objetivo es conseguir tres símbolos iguales en línea:
    horizontal, vertical o diagonal.

    Gana quien consigue formar primero la línea.

    Si se ocupan todas las casillas sin formar una línea,
    la partida termina en empate.
`,
    }
];

const contenedorJuegos = document.getElementById("lista-juegos");
const buscador = document.getElementById("buscador-juegos");
const botonesCategoria = document.querySelectorAll("[data-categoria]");

let categoriaActual = "todas";

function mostrarJuegos() {

    const texto = buscador.value.toLowerCase().trim();

    const juegosFiltrados = juegos.filter(juego => {

        const coincideCategoria =
            categoriaActual === "todas" ||
            juego.categoria === categoriaActual;

        const coincideBusqueda =
            juego.nombre.toLowerCase().includes(texto);

        return coincideCategoria && coincideBusqueda;
    });

    contenedorJuegos.innerHTML = "";

    if (juegosFiltrados.length === 0) {

        contenedorJuegos.innerHTML = `
            <div class="juegos-vacios">
                <h3>NO ENCONTRAMOS ESE JUEGO</h3>
                <p>Probá con otro nombre o categoría.</p>
            </div>
        `;

        return;
    }

    juegosFiltrados.forEach(juego => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("tarjeta-juego");

        tarjeta.innerHTML = `
            <a href="juego.html?id=${juego.id}">

                <div class="imagen-juego">
                    <img
                        src="../img/juegos/${juego.imagen}"
                        alt="${juego.nombre}"
                    >
                </div>

                    <div class="info-juego">

                        <h3>${juego.nombre}</h3>

                            <p>👥 ${juego.jugadores}</p>

                                <div class="mini-etiquetas">
                                 ${juego.etiquetas.slice(0, 2).map(etiqueta => `
                                     <span>${etiqueta}</span>
                                     `).join("")}
                    </div>

                </div>

            </a>
        `;

        contenedorJuegos.appendChild(tarjeta);
    });
}


// BUSCADOR

if (buscador) {

    buscador.addEventListener("input", mostrarJuegos);

}


// CATEGORÍAS

botonesCategoria.forEach(boton => {

    boton.addEventListener("click", () => {

        categoriaActual = boton.dataset.categoria;

        botonesCategoria.forEach(b => {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");

        mostrarJuegos();

    });

});


// MOSTRAR TODOS AL CARGAR

mostrarJuegos();