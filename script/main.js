const button = document.getElementById("submit");
button.addEventListener("click", searcInfo);

function searcInfo(event) {
  var answerList = document.getElementById("answerList");
  answerList.value = "";

  let charName = document.getElementById("charName").value;
  if (charName != null) {
    let urlAddress = "https://www.swapi.tech/api/people/?name=" + charName;

    fetch(urlAddress)
      .then(function (response) {
        return response.json();
      })
      .then(function (jdata) {
        var answer = jdata["result"];
        let data0 = answer[0].properties;

        for (const key in data0) {
          //console.log(`${key} => ${data0[key]}`);
          answerList.value += `${key} => ${data0[key]}` + "\n";
        }
      });
  }
}
