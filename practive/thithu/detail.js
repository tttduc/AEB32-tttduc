let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/basic/" + id;

fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderUI(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderUI(card) {
  let elm = document.getElementById("info__card");
  elm.innerHTML = `
      <div class="column_basic col-12 col-md-4">
      <div class="container">
      <div class="img">
      <img width="180" height="180" src="${card.image}" alt="" />
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

function goToDetail(card) {
  console.log("goToDetail", card);
  window.location.href = `./detail.html?id=${card}`;
}
