let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/agents/" + id;

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
  <div ${card.id} class="div_container d_flex">
  <div class="img_agents">
  <h1>${card.name}</h1>  
  <h3>${card.vitri}</h3>
    <img src="${card.avatar}" width="300px" height="500px" alt="">
  </div>
  <div class="skill_agents d_flex">
    <div class="skill_q bd_r p-2">
      <h6>Q — ${card.q}</h6>
      <li><img style="height: 64px; width: 64px;"
          src="${card.imgq}">
      </li>
      <p>Đặt Star trong trạng thái Astral Form (X). Kích hoạt Star để kích nổ Nova Pulse - gây choáng tất cả người
        chơi trong tầm ảnh hưởng.
      </p>
    </div>
    <div class="skill_c bd_r p-2">
      <h6>C — ${card.c}</h6>
      <li><img style="height: 64px; width: 64px;"
          src="${card.imgc}">
      </li>
      <p>Đặt Star trong trạng thái Astral Form (X). Kích hoạt Star để tạo thành Gravity Well.</p>
      <p> Giai đoạn 1: Người chơi bị hút vào tâm của vùng ảnh hưởng.</p>
      <p> Giai đoạn 2: Gravity Well phát nổ, gây trạng thái “Tổn thương” (Tương tự với Alarm bot của KillJoy)</p>
    </div>
    <div class="skill_e bd_r p-2">
      <h6>E — ${card.e}</h6>
      <li><img 
        style="height: 64px; width: 64px;"
        src="${card.imge}"></li>
        <p>Đặt Star trong trạng thái Astral Form (X). Kích hoạt Star để tạo ra một quả smoke.</p>
      </div> 
    <div class="skill_x p-2">
      <h6>X — ${card.x}</h6>
      <li><img 
        style="height: 64px; width: 64px;"
        src="${card.imgx}"></li>
        <p>Khi kích hoạt, biến vào trạng thái Astral Form giúp bạn có thể đặt “Star” bằng chuột trái. Stars có thể tái
          kính hoạt thành 3 skill: Gravity Well, Nova Pulse hoặc Nebula.</p>
      </div>
    </div>
    </div>`;
}

function goToDetail(card) {
  console.log("goToDetail", card);
  window.location.href = `./list.html?id=${card}`;
}
