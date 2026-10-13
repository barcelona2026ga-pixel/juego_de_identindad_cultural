// Banco de Preguntas (40 en total)
const rawQuestionBank = {
    primaria: [
        {
            type: "text",
            category: "Gastronomía",
            question: "1. ¿Cuál es el plato bandera del Perú elaborado a base de pescado fresco, limón y ají?",
            options: ["Lomo Saltado", "Ceviche", "Pachamanca", "Causa Rellena"],
            answer: 1,
            explanation: "El Ceviche fue declarado Patrimonio Cultural de la Nación y representa la riqueza gastronómica del Perú."
        },
        {
            type: "image",
            category: "Símbolos Patrios",
            question: "2. Selecciona la imagen de la Vicuña, el animal que representa la fauna en el Escudo Nacional:",
            options: [
                { img: "assets/vicuna.jpg" },
                { img: "assets/condor.jpg" },
                { img: "assets/tunqui.jpg" }
            ],
            answer: 0,
            explanation: "La Vicuña habita en las zonas altoandinas y simboliza la riqueza del reino animal peruano."
        },
        {
            type: "text",
            category: "Patrimonio Histórico",
            question: "3. ¿En qué departamento del Perú se ubica la impresionante ciudadela inca de Machu Picchu?",
            options: ["Arequipa", "Cusco", "Puno", "Ayacucho"],
            answer: 1,
            explanation: "Machu Picchu se encuentra en la provincia de Urubamba, departamento del Cusco."
        },
        {
            type: "image",
            category: "Flora Nacional",
            question: "4. Selecciona la imagen del Árbol de la Quina que figura en nuestro Escudo Nacional:",
            options: [
                { img: "assets/puya.jpg" },
                { img: "assets/quina.jpg" },
                { img: "assets/palmera.jpg" }
            ],
            answer: 1,
            explanation: "El Árbol de la Quina representa el reino vegetal y fue clave en la medicina mundial contra la malaria."
        },
        {
            type: "text",
            category: "Costumbres y Festividades",
            question: "5. ¿En qué ciudad a orillas del Lago Titicaca se celebra la fiesta de la Virgen de la Candelaria?",
            options: ["Puno", "Tacna", "Ica", "Huancayo"],
            answer: 0,
            explanation: "Puno es conocida como la Capital del Folklore Peruano por sus emblemáticas danzas."
        },
        {
            type: "text",
            category: "Fauna Peruana",
            question: "6. ¿Cuál es el ave nacional del Perú conocida por el hermoso color rojo anaranjado del macho?",
            options: ["El Gallito de las Rocas", "El Cóndor Andino", "La Parihuana", "El Pingüino de Humboldt"],
            answer: 0,
            explanation: "El Gallito de las Rocas (Tunqui) habita en los bosques de neblina de la Amazonía peruana."
        },
        {
            type: "image",
            category: "Música e Instrumentos",
            question: "7. Selecciona la imagen del Cajón Peruano, gran aporte afroperuano a la música mundial:",
            options: [
                { img: "assets/zampona.jpg" },
                { img: "assets/charango.jpg" },
                { img: "assets/cajon.jpg" }
            ],
            answer: 2,
            explanation: "El Cajón Peruano es un instrumento de percusión fundamental en la música criolla y afroperuana."
        },
        {
            type: "text",
            category: "Geografía",
            question: "8. ¿Cuál es el río más largo y caudaloso del mundo que nace en las altas montañas del Perú?",
            options: ["Río Ucayali", "Río Amazonas", "Río Marañón", "Río Rímac"],
            answer: 1,
            explanation: "El Río Amazonas nace en el departamento de Arequipa y recorre la selva peruana."
        },
        {
            type: "text",
            category: "Héroes Patrios",
            question: "9. ¿Quién es el héroe de la Marina de Guerra conocido como el 'Caballero de los Mares'?",
            options: ["Miguel Grau", "Francisco Bolognesi", "Alfonso Ugarte", "José Olaya"],
            answer: 0,
            explanation: "Miguel Grau es admirado mundialmente por su valentía, humanidad y caballerosidad."
        },
        {
            type: "image",
            category: "Gastronomía Andina",
            question: "10. Selecciona el plato ancestral cocinado bajo tierra sobre piedras calientes (Pachamanca):",
            options: [
                { img: "assets/pachamanca.jpg" },
                { img: "assets/rocoto.jpg" },
                { img: "assets/juane.jpg" }
            ],
            answer: 0,
            explanation: "La Pachamanca rinde tributo a la Pachamama (Madre Tierra) cocinando carnes y tubérculos bajo tierra."
        },
        {
            type: "text",
            category: "Lenguas Originarias",
            question: "11. ¿Cómo se dice 'Gracias' en idioma Quechua?",
            options: ["Sulpayki", "Allianllachu", "Tupananchiskama", "Añaykuy"],
            answer: 0,
            explanation: "'Sulpayki' o 'Añay' son expresiones quechuas empleadas tradicionalmente para agradecer."
        },
        {
            type: "text",
            category: "Tradiciones",
            question: "12. ¿Qué sabroso dulce criollo peruano en forma de rosca con miel se consume en Octubre?",
            options: ["Turrón de Doña Pepa", "Picarones", "Mazamorra Morada", "Suspiro a la Limeña"],
            answer: 0,
            explanation: "El Turrón de Doña Pepa está vinculado a la devoción del Señor de los Milagros."
        },
        {
            type: "text",
            category: "Símbolos Patrios",
            question: "13. ¿Cuáles son los tres colores de la Bandera Nacional del Perú?",
            options: ["Rojo y Blanco", "Rojo, Blanco y Rojo", "Amarillo, Rojo y Verde", "Azul y Blanco"],
            answer: 1,
            explanation: "Nuestra bandera está compuesta por tres franjas verticales: dos rojas en los extremos y una blanca al centro."
        },
        {
            type: "text",
            category: "Regiones Naturales",
            question: "14. Tradicionalmente, ¿en cuántas regiones naturales se divide el territorio peruano?",
            options: ["2 regiones", "3 regiones (Costa, Sierra y Selva)", "5 regiones", "10 regiones"],
            answer: 1,
            explanation: "La división tradicional reconoce la Costa, la Sierra (Andes) y la Selva (Amazonía)."
        },
        {
            type: "text",
            category: "Arqueología",
            question: "15. ¿Qué cultura preinca es famosa por sus enormes geoglifos trazados en el desierto?",
            options: ["Cultura Paracas", "Cultura Nazca", "Cultura Chimú", "Cultura Chavín"],
            answer: 1,
            explanation: "Las Líneas de Nazca representan figuras de animales y formas geométricas visibles desde el aire."
        },
        {
            type: "text",
            category: "Historia",
            question: "16. ¿Quién fue el Inca que gobernaba cuando llegaron los conquistadores españoles?",
            options: ["Pachacútec", "Atahualpa", "Manco Cápac", "Túpac Yupanqui"],
            answer: 1,
            explanation: "Atahualpa fue capturado en Cajamarca en el año 1532."
        },
        {
            type: "text",
            category: "Gastronomía",
            question: "17. ¿Qué tubérculo originario de los Andes peruanos cuenta con más de 3,000 variedades?",
            options: ["Camote", "Papa", "Yuca", "Olluco"],
            answer: 1,
            explanation: "El Perú es el centro de origen de la papa, alimento que salvó del hambre a la humanidad."
        },
        {
            type: "text",
            category: "Costumbres",
            question: "18. ¿Qué baile típico del norte peruano se caracteriza por el uso de pañuelos y elegancia?",
            options: ["Huayno", "Marinera Norteña", "Festejo", "Pandilla Amazónica"],
            answer: 1,
            explanation: "La Marinera Norteña es un baile de pareja que simula un galanteo lleno de coquetería."
        },
        {
            type: "text",
            category: "Héroes Patrios",
            question: "19. ¿Qué héroe peruano dijo la frase: 'Tengo deberes sagrados que cumplir y los cumpliré hasta quemar el último cartucho'?",
            options: ["Francisco Bolognesi", "Miguel Grau", "José Olaya", "Andrés Avelino Cáceres"],
            answer: 0,
            explanation: "Francisco Bolognesi pronunció esta histórica frase antes de la Batalla de Arica en 1880."
        },
        {
            type: "text",
            category: "Patrimonio Natural",
            question: "20. ¿En qué departamento se ubica el Cañón del Colca, uno de los más profundos del mundo?",
            options: ["Cusco", "Arequipa", "Ayacucho", "Moquegua"],
            answer: 1,
            explanation: "El Cañón del Colca se encuentra en Arequipa y es el hábitat natural del Cóndor Andino."
        }
    ],
    secundaria: [
        {
            type: "image",
            category: "Personajes Históricos",
            question: "1. Selecciona la imagen representativa del precursor Juan Pablo Viscardo y Guzmán:",
            options: [
                { img: "assets/tupac.jpg" },
                { img: "assets/viscardo.jpg" },
                { img: "assets/sanmartin.jpg" }
            ],
            answer: 1,
            explanation: "Juan Pablo Viscardo y Guzmán escribió la 'Carta a los Españoles Americanos', pilar ideológico de la independencia."
        },
        {
            type: "text",
            category: "Diversidad Lingüística",
            question: "2. ¿Cuántas lenguas originarias autóctonas se encuentran registradas habitualmente en el Perú?",
            options: ["12 lenguas", "24 lenguas", "48 lenguas (44 amazónicas y 4 andinas)", "60 lenguas"],
            answer: 2,
            explanation: "El Ministerio de Cultura reconoce oficialmente 48 lenguas originarias vivas en nuestro territorio."
        },
        {
            type: "image",
            category: "Patrimonio Inmaterial",
            question: "3. Selecciona la imagen representativa de la tradicional Danza de Tijeras:",
            options: [
                { img: "assets/tijeras.jpg" },
                { img: "assets/marinera.jpg" },
                { img: "assets/diablada.jpg" }
            ],
            answer: 0,
            explanation: "La Danza de Tijeras es una manifestación ritual andina reconocida como Patrimonio Cultural Inmaterial por la UNESCO."
        },
        {
            type: "text",
            category: "Civilizaciones Antiguas",
            question: "4. ¿Qué ciudadela del valle de Supe es considerada la ciudad más antigua de América (5,000 años)?",
            options: ["Caral", "Chavín de Huántar", "Machu Picchu", "Tiahuanaco"],
            answer: 0,
            explanation: "Caral se desarrolló de forma contemporánea con civilizaciones como Egipto y Mesopotamia."
        },
        {
            type: "text",
            category: "Independencia del Perú",
            question: "5. ¿Quién fue la heroína ayacuchana que prefirió el fusilamiento antes que delatar a las filas patriotas?",
            options: ["Micaela Bastidas", "María Parado de Bellido", "Clorinda Matto de Turner", "Francisca Zubiaga"],
            answer: 1,
            explanation: "María Parado de Bellido dio su vida en 1822 por la causa libertadora en Ayacucho."
        },
        {
            type: "image",
            category: "Arquitectura Preinca",
            question: "6. Selecciona Chan Chan, la ciudad de barro más grande de la América precolombina:",
            options: [
                { img: "assets/chanchan.jpg" },
                { img: "assets/kuelap.jpg" },
                { img: "assets/pachacamac.jpg" }
            ],
            answer: 0,
            explanation: "Chan Chan fue la capital del reino Chimú ubicada cerca de la ciudad de Trujillo."
        },
        {
            type: "text",
            category: "Cosmovisión Andina",
            question: "7. En la cultura andina ancestral, ¿qué significa el principio ético del 'Ayni'?",
            options: [
                "Un impuesto para el emperador Inca",
                "El principio de reciprocidad comunitaria ('Hoy por ti, mañana por mí')",
                "Un castigo por desobedecer las leyes",
                "Un camino sagrado de piedra"
            ],
            answer: 1,
            explanation: "El Ayni es la base de la solidaridad y cooperación mutua entre familias en las comunidades andinas."
        },
        {
            type: "text",
            category: "Literatura Peruana",
            question: "8. ¿Qué insigne escritor peruano ganó el Premio Nobel de Literatura en el año 2010?",
            options: ["César Vallejo", "José María Arguedas", "Mario Vargas Llosa", "Julio Ramón Ribeyro"],
            answer: 2,
            explanation: "Mario Vargas Llosa recibió el Premio Nobel por su vasta obra literaria ensayística y narrativa."
        },
        {
            type: "image",
            category: "Tradición Amazónica",
            question: "9. Selecciona la imagen de la Fiesta de San Juan en la Amazonía:",
            options: [
                { img: "assets/sanjuan.jpg" },
                { img: "assets/intiraymi.jpg" },
                { img: "assets/qoyllur.jpg" }
            ],
            answer: 0,
            explanation: "Cada 24 de junio la selva peruana celebra la Fiesta de San Juan rindiendo tributo al agua y la naturaleza."
        },
        {
            type: "text",
            category: "Resistencia Indígena",
            question: "10. ¿Quién lideró la gran rebelión indígena contra los abusos virreinales españoles en 1780?",
            options: ["Túpac Amaru II (José Gabriel Condorcanqui)", "Manco Inca", "Mateo Pumacahua", "Atahualpa"],
            answer: 0,
            explanation: "Túpac Amaru II encabezó el mayor levantamiento anticolonial del siglo XVIII en Hispanoamérica."
        },
        {
            type: "text",
            category: "Geografía y Clima",
            question: "11. ¿Qué corriente marina helada recorre nuestra costa influyendo en la aridez del desierto?",
            options: ["Corriente del Niño", "Corriente Peruana (o de Humboldt)", "Corriente Ecuatorial", "Corriente del Brasil"],
            answer: 1,
            explanation: "La Corriente de Humboldt transporta aguas frías desde el sur, generando abundante riqueza marina."
        },
        {
            type: "text",
            category: "Interculturalidad",
            question: "12. ¿Qué importante obra literaria fue escrita por José María Arguedas para reflejar el encuentro entre el mundo andino y occidental?",
            options: ["Los ríos profundos", "Aves sin nido", "El mundo es ancho y ajeno", "La ciudad y los perros"],
            answer: 0,
            explanation: "José María Arguedas plasmó en 'Los ríos profundos' la sensibilidad y el mestizaje cultural en el Perú."
        },
        {
            type: "text",
            category: "Historia Republicana",
            question: "13. ¿Qué mariscal dirigió la resistencia patriota en la sierra central durante la Guerra del Pacífico (Campaña de la Breña)?",
            options: ["Andrés Avelino Cáceres", "Nicolás de Piérola", "Mariano Ignacio Prado", "Lizardo Montero"],
            answer: 0,
            explanation: "Andrés Avelino Cáceres ('El Brujo de los Andes') organized a campesinos y montoneros en la resistencia."
        },
        {
            type: "text",
            category: "Patrimonio de la Humanidad",
            question: "14. ¿Qué parque nacional ubicado en Madre de Dios y Cusco posee una de las mayores biodiversidades del planeta?",
            options: ["Parque Nacional del Manu", "Parque Nacional Huascarán", "Reserva Nacional de Paracas", "Parque Nacional Cutervo"],
            answer: 0,
            explanation: "El Manu alberga miles de especies únicas de flora, fauna y comunidades amazónicas en aislamiento."
        },
        {
            type: "text",
            category: "Derechos y Constitución",
            question: "15. Según la Constitución del Perú, ¿qué idiomas son oficiales en las zonas donde predominen?",
            options: [
                "Únicamente el Castellano",
                "El Castellano, el Quechua, el Aymara y las demás lenguas aborígenes",
                "El Castellano y el Inglés",
                "Solamente el Quechua y el Castellano"
            ],
            answer: 1,
            explanation: "El Artículo 48 constitutional protege el derecho al uso e impartición de las lenguas originarias."
        },
        {
            type: "text",
            category: "Arqueología Amazónica",
            question: "16. ¿Qué monumental fortaleza arqueológica de piedra fue construida por la cultura Chachapoyas en la selva alta?",
            options: ["Kuélap", "Caral", "Choquequirao", "Vilcabamba"],
            answer: 0,
            explanation: "Kuélap destaca por sus imponentes murallas de más de 20 metros de altura en el departamento de Amazonas."
        },
        {
            type: "text",
            category: "Música e Identidad",
            question: "17. ¿Qué género musical afroperuano de ritmo festivo y contagiante utiliza el cajón y la quijada de burro?",
            options: ["Festejo", "Landó", "Zamana", "Tondero"],
            answer: 0,
            explanation: "El Festejo representa la alegría y el legado de las comunidades afrodescendientes en la costa peruana."
        },
        {
            type: "text",
            category: "Pensamiento Histórico",
            question: "18. ¿Qué ilustre historiador peruano acuñó la célebre frase: 'El Perú es un problema, pero también una posibilidad'?",
            options: ["Jorge Basadre", "Raúl Porras Barrenechea", "Inca Garcilaso de la Vega", "Pablo Macera"],
            answer: 0,
            explanation: "Jorge Basadre enfatizó la necesidad de construir una nación más justa superando sus dificultades."
        },
        {
            type: "text",
            category: "Expresiones Culturales",
            question: "19. ¿En qué departamento del Perú se elaboran los tradicionales 'Retablos', hermosas cajas de madera con figuras de pasta?",
            options: ["Ayacucho", "Cusco", "Cajamarca", "Junín"],
            answer: 0,
            explanation: "El Retablo Ayacuchano expresa motivos religiosos, festividades y la vida cotidiana andina."
        },
        {
            type: "text",
            category: "Patrimonio e Identidad",
            question: "20. ¿Qué camino incaico de más de 30,000 km conectaba el Imperio del Tahuantinsuyo desde Colombia hasta Chile?",
            options: ["Qhapaq Ñan", "Camino Real de Lima", "Ruta del Sol", "Camino Preinca Moche"],
            answer: 0,
            explanation: "El Qhapaq Ñan es una red vial prehispánica declarada Patrimonio Mundial por la UNESCO."
        }
    ]
};

// Algoritmo Fisher-Yates para mezclar arreglos
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Variables de Estado del Juego
let currentLevel = 'primaria';
let currentQuestions = [];
let questionIndex = 0;
let score = 0;
let correctAnswers = 0;
let timer = null;
let timeLeft = 20;

// Referencias DOM
const screenStart = document.getElementById('screen-start');
const screenQuiz = document.getElementById('screen-quiz');
const screenResult = document.getElementById('screen-result');

const displayLevel = document.getElementById('display-level');
const displayScore = document.getElementById('display-score');
const displayTimer = document.getElementById('display-timer');
const progressBar = document.getElementById('progress-bar');

const questionCategory = document.getElementById('question-category');
const questionText = document.getElementById('question-text');
const optionsTextContainer = document.getElementById('options-text-container');
const optionsImageContainer = document.getElementById('options-image-container');
const feedbackBox = document.getElementById('feedback-box');

// Funciones Principales
function startGame(level) {
    currentLevel = level;
    
    // Preparar preguntas y mezclar opciones de texto e imagen
    currentQuestions = rawQuestionBank[level].map(q => {
        const originalCorrectOption = q.options[q.answer];
        const shuffledOptions = shuffleArray(q.options);
        const newAnswerIndex = shuffledOptions.indexOf(originalCorrectOption);
        return {
            ...q,
            options: shuffledOptions,
            answer: newAnswerIndex
        };
    });

    // Mezclar el orden de las preguntas
    currentQuestions = shuffleArray(currentQuestions);

    questionIndex = 0;
    score = 0;
    correctAnswers = 0;

    displayLevel.textContent = level === 'primaria' ? 'Primaria' : 'Secundaria';
    updateHUD();

    switchScreen(screenQuiz);
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    feedbackBox.classList.add('hidden');
    
    const q = currentQuestions[questionIndex];
    questionCategory.textContent = q.category;
    questionText.textContent = q.question;

    // Actualizar barra de progreso
    const progress = ((questionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Iniciar Temporizador
    timeLeft = 20;
    displayTimer.textContent = `${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        displayTimer.textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectAnswer(-1); // Tiempo agotado
        }
    }, 1000);

    // Cargar según el tipo de pregunta
    if (q.type === 'text') {
        optionsTextContainer.classList.remove('hidden');
        optionsImageContainer.classList.add('hidden');
        optionsTextContainer.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
            btn.onclick = () => selectAnswer(idx);
            optionsTextContainer.appendChild(btn);
        });
    } else if (q.type === 'image') {
        optionsImageContainer.classList.remove('hidden');
        optionsTextContainer.classList.add('hidden');
        optionsImageContainer.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'image-option-card';
            card.innerHTML = `<img src="${opt.img}" alt="Opción Cultural" onerror="this.src='https://via.placeholder.com/200x150?text=Imagen+Cultural'">`;
            card.onclick = () => selectAnswer(idx);
            optionsImageContainer.appendChild(card);
        });
    }
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const q = currentQuestions[questionIndex];
    const isCorrect = selectedIndex === q.answer;

    // Deshabilitar interacción
    const buttons = document.querySelectorAll('.option-btn, .image-option-card');
    buttons.forEach(b => b.style.pointerEvents = 'none');

    if (isCorrect) {
        score += 100 + (timeLeft * 5); // Bonificación por velocidad
        correctAnswers++;
        showFeedback(true, q.explanation);
        markOption(selectedIndex, true, q.type);
    } else {
        showFeedback(false, q.explanation, selectedIndex === -1);
        if (selectedIndex !== -1) {
            markOption(selectedIndex, false, q.type);
        }
        markOption(q.answer, true, q.type); // Mostrar la correcta
    }

    updateHUD();
}

function markOption(index, isCorrect, type) {
    const selector = type === 'text' ? '.option-btn' : '.image-option-card';
    const elements = document.querySelectorAll(selector);
    if (elements[index]) {
        elements[index].classList.add(isCorrect ? 'correct' : 'incorrect');
    }
}

function showFeedback(isCorrect, explanationText, isTimeOut = false) {
    feedbackBox.classList.remove('hidden');
    const title = document.getElementById('feedback-title');
    const text = document.getElementById('feedback-text');

    if (isCorrect) {
        title.textContent = "¡Respuesta Correcta! 👏";
        title.style.color = "#2A9D8F";
    } else if (isTimeOut) {
        title.textContent = "¡Tiempo Agotado! ⏰";
        title.style.color = "#E63946";
    } else {
        title.textContent = "¡Incorrecto! ❌";
        title.style.color = "#E63946";
    }

    text.textContent = explanationText;
}

function nextQuestion() {
    if (questionIndex >= currentQuestions.length - 1) {
        endGame();
    } else {
        questionIndex++;
        loadQuestion();
    }
}

function updateHUD() {
    displayScore.textContent = score;
}

function endGame() {
    switchScreen(screenResult);
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-correct').textContent = `${correctAnswers}/${currentQuestions.length}`;

    const title = document.getElementById('result-title');
    const subtitle = document.getElementById('result-subtitle');
    const badge = document.getElementById('result-badge');

    if (correctAnswers === currentQuestions.length) {
        badge.textContent = "👑";
        title.textContent = "¡Guardia del Perú Milenario!";
        subtitle.textContent = "¡Extraordinario! Has demostrado un conocimiento profundo sobre nuestra identidad y cultura.";
    } else if (correctAnswers >= currentQuestions.length / 2) {
        badge.textContent = "🥇";
        title.textContent = "¡Gran trabajo cultural!";
        subtitle.textContent = "Has demostrado un gran amor y conocimiento por el Perú.";
    } else {
        badge.textContent = "📚";
        title.textContent = "¡Buen esfuerzo!";
        subtitle.textContent = "Cada intento te ayuda a conocer y valorar más la historia y riqueza de nuestro Perú.";
    }
}

function resetGame() {
    switchScreen(screenStart);
}

function switchScreen(targetScreen) {
    [screenStart, screenQuiz, screenResult].forEach(s => s.classList.remove('active'));
    targetScreen.classList.add('active');
}