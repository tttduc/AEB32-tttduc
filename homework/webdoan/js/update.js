const URL_USER = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/picture";

function handleSubit() {
  console.log("handleSubit");
  let elmName = document.getElementById("inputName");
  let elmAvatar = document.getElementById("inputAvatar");

  let user = {
    name: elmName.value,
    avatar: elmAvatar.value,
  };
  console.log(user);
  postUser(user);
}
function postUser(user) {
  fetch(URL_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}
