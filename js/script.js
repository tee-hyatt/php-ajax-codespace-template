const fonts = ["Qwitcher Grypen", "Tulpen One", "Shadows Into Light"];
let rotating = 0;

document.getElementById("fetchData").addEventListener("click", getRandomQuote);

function getRandomQuote() {
  fetch("https://newmanix.com/classes/it102/random_quotes.php")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error Status: ${res.status}`);
      }

      return res.text();
    })
    .then((data) => {
      const quoteContainer = document.getElementById("result");

      quoteContainer.innerHTML = data;

      quoteContainer.style.fontFamily = fonts[rotating];

      rotating = (rotating + 1) % fonts.length;

      quoteContainer.classList.remove("fade-in");
      void quoteContainer.offsetWidth;
      quoteContainer.classList.add("fade-in");
    })
    .catch((err) => {
      console.error("Quote fetch failed:", err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  getRandomQuote();

  setInterval(getRandomQuote, 5000);
});