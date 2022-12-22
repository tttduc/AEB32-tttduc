const URL ="https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/users"
fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // dam bao users no co data
      _renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  // (users : Array<object>) => void
  function _renderUI(users) {
    let elmBody = document.getElementById("tbody__user");
  
    function formatRow(user) {
      return `
      <tr onclick="handleClickRow(${user.id})">
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.city}</td>
        <td>${user.avatar}</td>
      </tr>
      `;
    }
  
    let bodyTable = "";
  
    for (let index = 0; index < users.length; index++) {
      bodyTable += formatRow(users[index]);
    }
  
    elmBody.innerHTML = bodyTable;
  }
  
  function handleClickRow(userId) {
    console.log("handleClickRow", userId);
    window.location.href = `./detail.html?id=${userId}`;
  }
  