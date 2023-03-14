let infos  = JSON.parse(localStorage.getItem("NEWS"))|| [];

function addHandeler(){

    infos.forEach((info, index)=>{
        const infoHeader = document.querySelector('.info_header');
        const infoContent = document.querySelector('.info_content');
        const infoFooter = document.querySelector('.info_footer');

        const title = document.createElement('div');
        title.setAttribute('class', 'title');
        title.innerHTML = info.title;   

        const data = document.createElement('div');
        data.setAttribute('class', 'data')

        const date = document.createElement('p');
        date.setAttribute('class', 'date');
        date.innerHTML = `${info.createdat}  ${info.createdt}  ${info.views}`;
        const name = document.createElement('p');
        name.setAttribute('class', 'name');
        name.innerHTML = info.creater;

        const prevBtn = document.createElement('input');
        prevBtn.setAttribute('value', '◀ PREV');
        prevBtn.setAttribute('type', 'button');

        const nextBtn = document.createElement('input');
        nextBtn.setAttribute('value', '▶ NEXT');
        nextBtn.setAttribute('type', 'button');

        const listBtn = document.createElement('input');
        listBtn.setAttribute('value', '목록');
        listBtn.setAttribute('type', 'button');
        listBtn.setAttribute('class', 'info_list');
        listBtn.addEventListener('click', function(){
            location.href="../html/news.html";
        })

        infoHeader.appendChild(title);
        infoHeader.appendChild(data);
        data.appendChild(date);
        data.appendChild(name);

        infoFooter.appendChild(prevBtn);
        infoFooter.appendChild(nextBtn);
        infoFooter.appendChild(listBtn);
        
    });
};
addHandeler();