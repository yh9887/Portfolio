let news  = JSON.parse(localStorage.getItem("NEWS")) || [];

function createHandeler() {
    let title = document.getElementById('exampleFormControlInput1').value;
    let contents = document.getElementById('exampleFormControlTextarea1').value;

    if (!title || !contents) {
        alert(`${!title ? "제목" : "내용"}을 입력해주세요.`);
    } else {
        const today = new Date();

        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        const dateString = year + '.' + month + '.' + day;

        const hours = ('0' + today.getHours()).slice(-2);
        const minutes = ('0' + today.getMinutes()).slice(-2);
        const seconds = ('0' + today.getSeconds()).slice(-2);
        const timeString = hours + ':' + minutes  + ':' + seconds;

        const randId = Math.floor(Math.random() * 999999)

        news.unshift({
            id: randId,
            title: title,
            contents: contents,
            creater: "컴포즈커피",
            createdat: dateString,
            createdt: timeString,
            views: 0,
            nowat: new Date(),
            
        })

        localStorage.setItem("NEWS", JSON.stringify(news));
        location.href="../html/news.html";
        
    };
    
};
