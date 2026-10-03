const questions = [
    {
        id: 1,
        text: "Durante los ultimos dias, ¿que tan motivado/a te has sentido para realizar tus actividades?",
        dimension: "positive",
        type: "scale"
    },

    {
        id: 2,
        text: "¿Que tanto has disfrutado los momentos agradables que has tenido?",
        dimension: "positive",
        type: "scale"
    },

    {
        id: 3,
        text: "¿Que tan tranquilo/a? has logrado sentirte durante tus actividades cotidianas",
        dimension: "calm",
        type: "scale"
    }, 

    {
        id:4,
        text: "¿Qué tan capaz te has sentido de desconectarte de tus preocupaciones por algunos momentos?", 
        dimension: "calm", 
        type: "scale" 
    }, 
    
    {   id: 5, 
        text: "¿Qué tanto has sentido que tienes demasiadas cosas en las que pensar al mismo tiempo?", 
        dimension: "tension", 
        type: "scale" 
    }, 
    
    {   id: 6, 
        text: "¿Qué tan difícil te ha resultado relajarte cuando tienes responsabilidades pendientes?", 
        dimension: "tension", 
        type: "scale"
    }, 
        
    {   id: 7, 
        text: "¿Qué tanto has sentido falta de energía o ganas para hacer tus actividades habituales?", 
        dimension: "low", 
        type: "scale" 
    }, 
    
    {   id: 8, 
        text: "¿Qué tanto has experimentado momentos de desánimo durante los últimos días?", 
        dimension: "low", 
        type: "scale" 
    }, 
        
    {   id: 9, 
        text: "¿Qué crees que está influyendo más en cómo te has sentido últimamente?", 
        type: "factor", 
        options: [ "📚 Estudios", 
                    "💼 Trabajo", 
                    "❤️ Relaciones", 
                    "👨‍👩‍👧 Familia", 
                    "💰 Economía",  
                    "🌱 Otro", ] 
    }, 

    {   id: 10, 
        text: "Si tuvieras que describir tu estado de ánimo actual, ¿cuál elegirías?", 
        type: "self-perception", 
        options: [ "😊 Muy positivo", 
                    "🙂 Positivo", 
                    "😐 Neutral", 
                    "😕 Algo bajo", 
                    "😔 Bajo" ]
    }
];

const scaleOptions = [ 
    { 
        value: 0, 
        label: "Nada" 
    }, 
    { 
        value: 1, 
        label: "Poco" 
    }, 
    { 
        value: 2, 
        label: "Moderadamente" 
    }, 
    { 
        value: 3, 
        label: "Bastante" 
    }, 
    { 
        value: 4, 
        label: "Mucho" 
    }];