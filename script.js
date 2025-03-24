const items = document.querySelectorAll('.list');
const contentTitle = document.getElementById("content-title");
const contentText = document.getElementById("content-text");

// 각 메뉴에 대한 콘텐츠 데이터
const contentData = [
    { title: "Home", text: "Welcome to the homepage!" },
    { title: "Profile", text: "This is your profile page." },
    { title: "Messages", text: "Here are your messages." },
    { title: "Photos", text: "Check out your photos." },
    { title: "Settings", text: "Adjust your preferences here." }
];

function activeLink() {
    // 모든 리스트에서 active 제거
    items.forEach((item) => {
        item.classList.remove('active');
    });

    // 현재 클릭한 리스트에 active 추가
    this.classList.add('active');

    // 현재 클릭한 리스트의 인덱스 찾기
    const index = Array.from(items).indexOf(this);

    // 콘텐츠 변경
    contentTitle.textContent = contentData[index].title;
    contentText.textContent = contentData[index].text;
}

// 각 리스트 항목에 클릭 이벤트 추가
items.forEach((item) => {
    item.addEventListener('click', activeLink);
});
