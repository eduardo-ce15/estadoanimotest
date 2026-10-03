function calculateScores(answers) {

    const scores = {

        positive:
            answers[0] + answers[1],

        calm:
            answers[2] + answers[3],

        tension:
            answers[4] + answers[5],

        low:
            answers[6] + answers[7]

    };


    return scores;

}
function calculatePercentages(scores) {

    const percentages = {

        positive:
            (scores.positive / 8) * 100,

        calm:
            (scores.calm / 8) * 100,

        tension:
            (scores.tension / 8) * 100,

        low:
            (scores.low / 8) * 100

    };


    return percentages;

}