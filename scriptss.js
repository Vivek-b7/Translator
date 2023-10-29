function translateText() {
    const inputText = document.getElementById("inputText").value;
    const selectedLanguage = document.getElementById("languages").value;

    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${selectedLanguage}&dt=t&q=${encodeURI(inputText)}`)
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0][0][0];
            document.getElementById("outputText").textContent = translatedText;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("outputText").textContent = "Translation failed. Please try again.";
        });
}
