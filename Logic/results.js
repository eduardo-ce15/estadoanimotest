// ============================================
// ÁNIMO+
// Generación del resultado
// ============================================


const moodProfiles = {

    // ========================================
    // ÁNIMO POSITIVO
    // ========================================

    positive: {

        name: "Ánimo positivo",

        emoji: "😊",

        animal: "🦊",

        image: "../Assets/personajes/quokka_felicidad.png",

        character: "Quokka Feliz",

        description:
            "Energía, motivación y disfrute.",

        message:
            "Sigue aprovechando aquello que te hace sentir bien y recuerda también darte espacios para descansar.",

        phrase:
            "Tu energia es contagiosa. Sigue haciendo lo que te hace bien.",

        theme: "positive",
        
        video:
            "../Assets/videos/emocion.mp4"

    },


    // ========================================
    // CALMA
    // ========================================

    calm: {

        name: "Calma",

        emoji: "🌿",

        animal: "🐱",

        image: "../Assets/personajes/oso_calma.png",
        theme: "calm",

        character: "Osito Calmado",

        description:
            "Tranquilidad y capacidad para desconectarte de las preocupaciones.",

        message:
            "Conservar espacios de calma puede ayudarte a afrontar mejor tus actividades y responsabilidades.",

        phrase:
            "La calma tambien es una forma de avanzar.",
        
        video:
            "../Assets/videos/emocion.mp4"
    },


    // ========================================
    // TENSIÓN
    // ========================================

    tension: {

        name: "Tensión",

        emoji: "⚡",

        animal: "🐹",
        theme: "tension",

        image: "../Assets/personajes/loro_tension.png",

        character: "Aguila Inquieta",

        description:
            "Pensamientos, responsabilidades o dificultades para relajarte.",

        message:
            "Puede ser útil identificar qué situaciones están ocupando más espacio en tu mente y buscar pequeños momentos de pausa.",

        phrase: 
            "Respira, todo puede esperar un momento.",
        
        video:
            "../Assets/videos/emocion.mp4"
    },


    // ========================================
    // ÁNIMO BAJO
    // ========================================

    low: {

        name: "Ánimo bajo",

        emoji: "🌧️",

        animal: "🐼",

        image: "../Assets/personajes/mono_triste.png",

        character: "Monito Reflexivo",

        theme: "low",

        description:
            "Desánimo o menor energía durante estos últimos días.",

        message:
            "Reconocer cómo te sientes es un primer paso. Puede ser útil darte tiempo para descansar, hablar con alguien de confianza y prestar atención a lo que necesitas.",
        
        phrase: 
            "Esta bien no estar bien. Tambien es parte del camino.",
        
        video:
            "../Assets/videos/emocion.mp4"

    }

};


// ============================================
// DETERMINAR PERFIL PRINCIPAL
// ============================================

function getMainProfile(scores) {

    const profiles = [

        {
            dimension: "positive",
            score: scores.positive
        },

        {
            dimension: "calm",
            score: scores.calm
        },

        {
            dimension: "tension",
            score: scores.tension
        },

        {
            dimension: "low",
            score: scores.low
        }

    ];


    const highestScore =
        Math.max(...profiles.map(profile => profile.score));


    const highestProfiles =
        profiles.filter(
            profile => profile.score === highestScore
        );


    return {

        main: highestProfiles[0].dimension,

        tied:
            highestProfiles.length > 1,

        dimensions:
            highestProfiles.map(
                profile => profile.dimension
            )

    };

}


// ============================================
// GENERAR RESULTADO COMPLETO
// ============================================

function generateResult(answers) {

    const scores =
        calculateScores(answers);


    const percentages =
        calculatePercentages(scores);


    const mainResult =
        getMainProfile(scores);


    const profile =
        moodProfiles[mainResult.main];


    return {

        scores,

        percentages,

        mainProfile:
            mainResult.main,

        tied:
            mainResult.tied,

        tiedProfiles:
            mainResult.dimensions,

        profile,

        factor:
            answers[8],

        selfPerception:
            answers[9]

    };

}
