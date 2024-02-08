<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz</title>
</head>
<body>
    <h1>Quiz</h1>
    <form id="quizForm">
        <p>1. Czy lubisz koty?</p>
        <input type="radio" name="odpowiedz1" value="miłość"> Miłość
        <input type="radio" name="odpowiedz1" value="szacunek"> Szacunek <br>

        <p>2. Czy lubisz psy?</p>
        <input type="radio" name="odpowiedz2" value="bałagan"> Bałagan
        <input type="radio" name="odpowiedz2" value="porządek"> Porządek <br>

        <p>3. Czy lubisz być w grupie?</p>
        <input type="radio" name="odpowiedz3" value="w grupie"> W grupie
        <input type="radio" name="odpowiedz3" value="samemu"> Samemu <br>

        <button type="submit">Wyślij odpowiedzi</button>
    </form>

    <div id="results"></div>

    <script>
        document.getElementById('quizForm').addEventListener('submit', function(event) {
            event.preventDefault();

            var odpowiedz1 = document.querySelector('input[name="odpowiedz1"]:checked').value;
            var odpowiedz2 = document.querySelector('input[name="odpowiedz2"]:checked').value;
            var odpowiedz3 = document.querySelector('input[name="odpowiedz3"]:checked').value;

            var licznikWzrokowiec = 0, licznikKinestetyk = 0;

            if (odpowiedz1 === "miłość") {
                licznikWzrokowiec++;
            } else {
                licznikKinestetyk++;
            }

            if (odpowiedz2 === "bałagan") {
                licznikKinestetyk++;
            } else {
                licznikWzrokowiec++;
            }

            if (odpowiedz3 === "w grupie") {
                licznikWzrokowiec++;
            } else {
                licznikKinestetyk++;
            }

            var procentWzrokowiec = (licznikWzrokowiec / 3) * 100;
            var procentKinestetyk = (licznikKinestetyk / 3) * 100;

            var wyniki = document.getElementById('results');
            wyniki.innerHTML = "<h2>Odpowiedzi w procentach:</h2>" +
                                "<p>Wzrokowiec: " + procentWzrokowiec.toFixed(2) + "%</p>" +
                                "<p>Kinestetyk/Czuciowiec: " + procentKinestetyk.toFixed(2) + "%</p>";
        });
    </script>
</body>
</html>
