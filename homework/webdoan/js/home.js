let elm = document.getElementById("div_card")
let listCard = [
    {
        name: "Astra",
        avatar: "https://images7.alphacoders.com/113/thumb-1920-1134343.png",
        id: "1",
    },
    {
        name: "Breach",
        avatar: "https://th.bing.com/th/id/R.dad74e7e721e75d1093eec81aa3e10ea?rik=0Y51SZ3m0eMbJQ&pid=ImgRaw&r=0",
        id: "2",
    },
    {
        name: "Brimstone",
        avatar: "https://th.bing.com/th/id/R.75eb71dd8c7cafbb1efe5ad0006c43ee?rik=OeJvmOaRhAL8og&pid=ImgRaw&r=0",
        id: "3",
    },
    {
        name: "Chamber",
        avatar: "https://i.pinimg.com/originals/54/50/10/545010aade9f6e90db301bcd0b17a612.jpg",
        id: "4",
    },
    {
        name: "Cypher",
        avatar: "https://images.hdqwalls.com/download/cypher-valorant-4k-game-d1-3840x2160.jpg",
        id: "5",
    },
    {
        name: "Fade",
        avatar: "https://cdn1.dotesports.com/wp-content/uploads/2022/04/18121642/Fade-Valorant-1536x864.jpeg",
        id: "6",
    },
    {
        name: "Harbor",
        avatar: "https://i.ex-cdn.com/mgn.vn/files/content/2022/11/04/3-lightbackground-_-green_harbor-1643.jpg",
        id: "7",
    },
    {
        name: "Jett",
        avatar: "https://images.hdqwalls.com/wallpapers/jett-valorant-4k-k4.jpg",
        id: "8",
    },
    {
        name: "Kayo",
        avatar: "https://th.bing.com/th/id/R.372f6a3d61085fd7a779de65d4cdbae4?rik=W1yZj4Q%2bXXc8HA&pid=ImgRaw&r=0",
        id: "9",
    },
    {
        name: "Killjoy",
        avatar: "https://wallpapercave.com/wp/wp7539503.png",
        id: "10",
    },
    {
        name: "Neon",
        avatar: "https://digiskygames.com/wp-content/uploads/2022/01/Valorants-Episode-4-patch-adds-Neon-to-the-game-and-nerfs-the-Spectre.jpg",
        id: "11",
    },
    {
        name: "Omen",
        avatar: "https://i.pinimg.com/originals/91/db/8b/91db8bdd820aab78d0218f1334346c77.jpg",
        id: "12",
    },
    {
        name: "Phoenix",
        avatar: "https://gamezo.co.uk/wp-content/uploads/2021/01/phoenix-valorant-uhdpaper.com-4K-5.2432-wp.thumbnail.jpg",
        id: "13",
    },
    {
        name: "Raze",
        avatar: "https://wallpaperaccess.com/full/3383807.png",
        id: "14",
    },
    {
        name: "Reyna",
        avatar: "https://th.bing.com/th/id/R.fc85c85b1ed3b1fcd7034a492fbae4fe?rik=Fjs7srvTtEq9iQ&pid=ImgRaw&r=0",
        id: "15",
    },
    {
        name: "Sage",
        avatar: "https://th.bing.com/th/id/R.94a3186159c3e9ecd0c402436aebe4f6?rik=MfR5zL%2bEynioJw&pid=ImgRaw&r=0",
        id: "16",
    },
    {
        name: "Skye",
        avatar: "https://th.bing.com/th/id/R.a5248526069ac3998b9524dcaa398ef4?rik=qtHyhVzsSPCkzA&pid=ImgRaw&r=0",
        id: "17",
    },
    {
        name: "Sova",
        avatar: "https://images.hdqwalls.com/download/sova-valorant-4k-vr-3840x2160.jpg",
        id: "18",
    },
    {
        name: "Viper",
        avatar: "https://i.ytimg.com/vi/Lmgj1b81iLI/maxresdefault.jpg",
        id: "19",
    },
    {
        name: "Yoru",
        avatar: "https://4kwallpapers.com/images/wallpapers/yoru-valorant-stealth-agent-pc-games-dark-background-1366x768-4120.png",
        id: "20",
    },

];
let temp = "";
for (let index = 0; index < listCard.length; index++) {
    temp += formatCard(listCard[index]);
    
}
function formatCard(card) {
    return `
  <div onclick="handleClickRow(${card.id})" class="card" style="width: 250px;">
  <img src="${card.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;">${card.name}</h5>
  </div>
</div> `
}
elm.innerHTML = temp;
function handleClickRow(cardId) {
    console.log("handleClickRow", cardId);
    window.location.href = `./list.html?id${cardId}`;
}