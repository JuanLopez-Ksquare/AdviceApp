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
};

getAdvice();
