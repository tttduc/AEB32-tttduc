const listcard="https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/basic";

getListCard()
function _renderUI(card) {
    let elm = document.getElementById("div_card");
    function formatCard(card) {
      return `
      <div class="column_basic col-12 col-md-4"  onclick="handleClickRow(${card.id})">
      <div class="container">
      <div class="img">
      <img width="180" height="180" src="${card.image}"/> alt="" />
    </div>
    <div class="text">
      <h2>${card.name};</h2>
      <p>${card.p1}</p>
      <p>${card.p2}</p>
      <p>${card.p3}</p>
      <p>${card.p4}</p>
    </div>
    </div>
    </div> 
      `;
    }
    let temp = "";
for (let index = 0; index < card.length; index++) {
  temp += formatCard(card[index]);
}
    elm.innerHTML = temp;
}
    function getListCard() {
        fetch(listcard, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            _renderUI(data);
          })
          .catch((error) => {
            console.log("Error:", error);
          });
        }

  function handleClickRow(card) {
    console.log("goToDetail", card);
    window.location.href = `./detail.html?id=${card}`;
  }
  