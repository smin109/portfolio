const items = document.querySelectorAll('.list');
const contentTitle = document.getElementById("content-title");
const contentText = document.getElementById("content-text");
const contentImage = document.getElementById("content-img");
const contentDescription = document.getElementById("content-description");
const contentLink = document.getElementById("content-link");

// 각 메뉴에 대한 콘텐츠 데이터 (Photos와 Settings 항목 제거)
const contentData = [
    {
        title: "Home",
        text: "Welcome to the homepage!",
        img: "images/home.jpg",
        description: "This is the main page where you can find the latest updates.",
        link: "https://www.homepage.com"
    },
    {
        title: "Profile",
        text: "This is your profile page.",
        img: "images/profile.jpg",
        description: "This is where your personal information and settings are displayed.",
        link: "https://www.profilepage.com"
    },
    {
        title: "Messages",
        text: "Here are your messages.",
        img: "images/messages.jpg",
        description: "Check your incoming messages from here.",
        link: "https://www.messages.com"
    }
];

function activeLink() {
    // 모든 리스트에서 active 클래스 제거
    items.forEach((item) => {
        item.classList.remove('active');
    });

    // 현재 클릭한 리스트에 active 클래스 추가
    this.classList.add('active');

    // 현재 클릭한 리스트의 인덱스를 찾음
    const index = Array.from(items).indexOf(this);

    // 콘텐츠 데이터에서 해당 인덱스의 정보로 콘텐츠 업데이트
    contentTitle.textContent = contentData[index].title;
    contentText.textContent = contentData[index].text;
    contentImage.src = contentData[index].img;
    contentDescription.textContent = contentData[index].description;
    contentLink.href = contentData[index].link;
}

// 각 리스트 항목에 클릭 이벤트 추가
items.forEach((item) => {
    item.addEventListener('click', activeLink);
});
