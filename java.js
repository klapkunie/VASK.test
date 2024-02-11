document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quizForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Zapobiegamy domyślnemu zachowaniu formularza

        const formData = new FormData(form);
        const answers = {};
        const totalResponses = { "1": 0, "2": 0, "3": 0 }; // Licznik dla każdej odpowiedzi

        // Przetwarzanie odpowiedzi z formularza
        formData.forEach((value, name) => {
            answers[name] = value;
            totalResponses[value]++; // Zwiększ licznik dla danej odpowiedzi
        });

        // Wyświetlanie wyników
        displayResults(answers, totalResponses);
    });

    // Funkcja do wyświetlania wyników quizu
    function displayResults(answers, totalResponses) {
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = ""; // Czyszczenie wyników przed wyświetleniem nowych

        // Przetwarzanie odpowiedzi i wyświetlanie wyników dla każdego pytania
        const result = document.createElement("p");
        result.textContent = `Wyniki quizu:`;

        resultsContainer.appendChild(result); // Dodawanie wyniku do kontenera wyników

        for (const questionNumber in totalResponses) {
            const responseCount = totalResponses[questionNumber];
            const responsePercentage = (responseCount / Object.keys(answers).length) * 100;
            const questionResult = document.createElement("p");

            // Wyświetlenie wyniku procentowego dla danej odpowiedzi
            switch (questionNumber) {
                case "1":
                    questionResult.textContent = `kinestetyk/czuciowiec = ${responsePercentage.toFixed(2)}%`;
                    break;
                case "2":
                    questionResult.textContent = `wzrokowiec = ${responsePercentage.toFixed(2)}%`;
                    break;
                case "3":
                    questionResult.textContent = `słuchowiec = ${responsePercentage.toFixed(2)}%`;
                    break;
                default:
                    questionResult.textContent = `Brak odpowiedzi`;
                    break;
            }

            resultsContainer.appendChild(questionResult); // Dodawanie wyniku pytania do kontenera wyników
        }
    }
});
