let firstTime = true;
let changeColor;

const getAdviceAPI = async () => {
  let data;
  const url = "https://api.adviceslip.com/advice";
  data = await fetch(url);
  data = await data.json();
  return data;
};

const getAdvice = async () => {
  const res = await getAdviceAPI();
  let advice = res.slip.advice;

  document.getElementById("txtColor").innerText = '"' + advice + '"';
  document.getElementById("hrefTwit").href =
    "https://twitter.com/intent/tweet?text=" + '"' + advice + '"';
  if (firstTime) {
    document.body.style.background = changeColor;
    firstTime = false;
  } else {
    random_color();
  }

  document.getElementById("btn-Another").disabled = true;
  setTimeout(() => {
    document.getElementById("btn-Another").disabled = false;
  }, 2000);
};

function random_color() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  changeColor = "rgb(" + r + "," + g + "," + b + ")";

  document.body.style.background = changeColor;
  document.getElementById("txtColor").style.color = changeColor;
  document.getElementById("btn-Another").style.backgroundColor = changeColor;
}

random_color();
getAdvice();