const juegos = [
    {
        id: "truco",
        nombre: "Naipes — Truco",
        categoria: "cartas",
        etiquetas: ["2 jugadores", "grupos", "competitivo", "clasico"],
        jugadores: "2 - 6",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "truco.jpg"
    },
    {
        id: "poker",
        nombre: "Naipes — Póker",
        categoria: "cartas",
        etiquetas: ["grupos", "competitivo", "estrategia"],
        jugadores: "2 - 8",
        edad: "18+",
        duracion: "30+ min",
        imagen: "poker.jpg"
    },
    {
        id: "uno",
        nombre: "UNO",
        categoria: "cartas",
        etiquetas: ["rapido", "grupos", "familiar", "competitivo"],
        jugadores: "2 - 10",
        edad: "7+",
        duracion: "15 - 30 min",
        imagen: "uno.jpg"
    },
    {
        id: "jenga",
        nombre: "Jenga",
        categoria: "habilidad",
        etiquetas: ["rapido", "grupos", "familiar", "competitivo"],
        jugadores: "2+",
        edad: "6+",
        duracion: "10 - 20 min",
        imagen: "jenga.jpg"
    },
    {
        id: "con-eso-no-se-jode",
        nombre: "Con Eso No Se Jode",
        categoria: "fiesta",
        etiquetas: ["grupos", "humor", "adultos"],
        jugadores: "4+",
        edad: "18+",
        duracion: "20 - 40 min",
        imagen: "con-eso-no-se-jode.jpg"
    },
    {
        id: "domino",
        nombre: "Dominó",
        categoria: "clasicos",
        etiquetas: ["2 jugadores", "grupos", "estrategia", "familiar"],
        jugadores: "2 - 4",
        edad: "6+",
        duracion: "15 - 30 min",
        imagen: "domino.jpg"
    },
    {
        id: "taco-gato",
        nombre: "Taco, Gato, Cabra, Queso, Pizza",
        categoria: "fiesta",
        etiquetas: ["rapido", "grupos", "reflejos", "familiar"],
        jugadores: "3 - 8",
        edad: "8+",
        duracion: "10 - 15 min",
        imagen: "taco-gato.jpg"
    },
    {
        id: "say-my-name",
        nombre: "Say My Name",
        categoria: "fiesta",
        etiquetas: ["grupos", "palabras", "humor"],
        jugadores: "4+",
        edad: "12+",
        duracion: "20 - 40 min",
        imagen: "say-my-name.jpg"
    },
    {
        id: "dany",
        nombre: "Dany",
        categoria: "fiesta",
        etiquetas: ["grupos", "deduccion"],
        jugadores: "3+",
        edad: "12+",
        duracion: "20 - 40 min",
        imagen: "dany.jpg"
    },
    {
        id: "no-lo-testeamos",
        nombre: "No Lo Testeamos Ni Un Poco",
        categoria: "fiesta",
        etiquetas: ["rapido", "grupos", "humor", "cartas"],
        jugadores: "2+",
        edad: "18+",
        duracion: "10 - 20 min",
        imagen: "no-lo-testeamos.jpg"
    },
    {
        id: "el-infiltrado",
        nombre: "El Infiltrado",
        categoria: "deduccion",
        etiquetas: ["grupos", "engaño", "conversacion"],
        jugadores: "4+",
        edad: "12+",
        duracion: "20 - 40 min",
        imagen: "el-infiltrado.jpg"
    },
    {
        id: "abrecabezas",
        nombre: "Abrecabezas",
        categoria: "ingenio",
        etiquetas: ["logica", "desafio", "estrategia"],
        jugadores: "1+",
        edad: "8+",
        duracion: "15 - 30 min",
        imagen: "abrecabezas.jpg"
    },
    {
        id: "abrecabezas-max",
        nombre: "Abrecabezas Max",
        categoria: "ingenio",
        etiquetas: ["logica", "desafio", "estrategia"],
        jugadores: "1+",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "abrecabezas-max.jpg"
    },
    {
        id: "life",
        nombre: "Life — Juego de la Vida",
        categoria: "mesa",
        etiquetas: ["familia", "estrategia", "grupos", "largo"],
        jugadores: "2 - 4",
        edad: "8+",
        duracion: "45+ min",
        imagen: "life.jpg"
    },
    {
        id: "basta",
        nombre: "Basta",
        categoria: "palabras",
        etiquetas: ["rapido", "grupos", "familiar", "palabras"],
        jugadores: "2+",
        edad: "8+",
        duracion: "15 - 30 min",
        imagen: "basta.jpg"
    },
    {
        id: "coggle",
        nombre: "Coggle",
        categoria: "palabras",
        etiquetas: ["palabras", "creatividad", "grupos"],
        jugadores: "2+",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "coggle.jpg"
    },
    {
        id: "monopoly",
        nombre: "Monopoly",
        categoria: "mesa",
        etiquetas: ["estrategia", "negociacion", "grupos", "largo"],
        jugadores: "2 - 6",
        edad: "8+",
        duracion: "60+ min",
        imagen: "monopoly.jpg"
    },
    {
        id: "tabu",
        nombre: "Tabú",
        categoria: "fiesta",
        etiquetas: ["grupos", "palabras", "comunicacion", "familiar"],
        jugadores: "4+",
        edad: "12+",
        duracion: "20 - 40 min",
        imagen: "tabu.jpg"
    },
    {
        id: "batalla-naval",
        nombre: "Batalla Naval",
        categoria: "clasicos",
        etiquetas: ["2 jugadores", "estrategia", "competitivo"],
        jugadores: "2",
        edad: "7+",
        duracion: "15 - 30 min",
        imagen: "batalla-naval.jpg"
    },
    {
        id: "laberinto",
        nombre: "Laberinto",
        categoria: "ingenio",
        etiquetas: ["estrategia", "familia", "grupos"],
        jugadores: "2 - 4",
        edad: "7+",
        duracion: "20 - 30 min",
        imagen: "laberinto.jpg"
    },
    {
        id: "cruzando-palabras",
        nombre: "Cruzando Palabras",
        categoria: "palabras",
        etiquetas: ["palabras", "estrategia", "familiar"],
        jugadores: "2+",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "cruzando-palabras.jpg"
    },
    {
        id: "damas",
        nombre: "Damas",
        categoria: "clasicos",
        etiquetas: ["2 jugadores", "estrategia", "clasico"],
        jugadores: "2",
        edad: "6+",
        duracion: "15 - 30 min",
        imagen: "damas.jpg"
    },
    {
        id: "graffiti",
        nombre: "Graffiti",
        categoria: "creatividad",
        etiquetas: ["grupos", "dibujo", "creatividad", "familiar"],
        jugadores: "3+",
        edad: "8+",
        duracion: "20 - 40 min",
        imagen: "graffiti.jpg"
    },
    {
        id: "parchis",
        nombre: "Parchís",
        categoria: "clasicos",
        etiquetas: ["grupos", "familiar", "estrategia"],
        jugadores: "2 - 4",
        edad: "6+",
        duracion: "30 - 45 min",
        imagen: "parchis.jpg"
    },
    {
        id: "dos",
        nombre: "DOS",
        categoria: "cartas",
        etiquetas: ["rapido", "grupos", "familiar", "competitivo"],
        jugadores: "2 - 4",
        edad: "7+",
        duracion: "15 - 30 min",
        imagen: "dos.jpg"
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
        imagen: "palitos-chinos.jpg"
    },
    {
        id: "simon-dice",
        nombre: "Simón Dice",
        categoria: "habilidad",
        etiquetas: ["grupos", "reflejos", "familiar", "rapido"],
        jugadores: "2+",
        edad: "6+",
        duracion: "10 - 20 min",
        imagen: "simon-dice.jpg"
    },
    {
        id: "aro-al-gancho",
        nombre: "Aro al Gancho",
        categoria: "habilidad",
        etiquetas: ["destreza", "rapido", "competitivo"],
        jugadores: "1 - 2",
        edad: "6+",
        duracion: "5 - 15 min",
        imagen: "aro-al-gancho.jpg"
    },
    {
        id: "tateti",
        nombre: "Tatetí",
        categoria: "clasicos",
        etiquetas: ["2 jugadores", "rapido", "estrategia", "clasico"],
        jugadores: "2",
        edad: "5+",
        duracion: "5 - 10 min",
        imagen: "tateti.jpg"
    }
];

const contenedorJuegos = document.getElementById("lista-juegos");

if (contenedorJuegos) {

    juegos.forEach(juego => {

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
                </div>
            </a>
        `;

        contenedorJuegos.appendChild(tarjeta);
    });

}