const formAnsw = document.querySelector("#form-answ");

console.log(formAnsw);
formAnsw.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { answer } = e.target;
  const { theme, question } = formAnsw.dataset;
  const res = await fetch("/game", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      answer: answer.value,
      question_id: question,
      theme_id: theme,
    }),
  });
  const data = await res.json();
  if (data.message !== "ok") {
    alert(data.message);
  } else {
    alert(data.message);
  }
});
