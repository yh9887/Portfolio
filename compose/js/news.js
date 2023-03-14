
let datas  = JSON.parse(localStorage.getItem("NEWS"))|| [];


function getHandeler(){
    datas.forEach((data, index)=>{
        const tbody = document.querySelector('#tbody');
        const tr = document.createElement('tr');
        tr.setAttribute('id', data.idax)
        tr.addEventListener('click', function(){
            location.href="../html/info.html";
        });
        const numTd = document.createElement('td');
        numTd.innerHTML = index+1;
        numTd.innerHTML = datas.length - index;
        const titleTd = document.createElement('td');
        titleTd.innerHTML = data.title;
        const createrTd = document.createElement('td');
        createrTd.innerHTML = data.creater;

        const createdatTd = document.createElement('td');
        createdatTd.innerHTML = data.createdat;

        const viewsTd = document.createElement('td');
        viewsTd.innerHTML = data.views;

        tr.appendChild(numTd);
        tr.appendChild(titleTd);
        tr.appendChild(createrTd);
        tr.appendChild(createdatTd);
        tr.appendChild(viewsTd);
        tbody.appendChild(tr);
    });

};
if(datas.length > 0) getHandeler();
