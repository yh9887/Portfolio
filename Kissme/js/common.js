
const cate_arr = ['EYELASH CURLER', 'LIP  &  REMOVE', 'MASCARA  &  EYELINE', 'EYEBROW'];
// const main_list = MAIN_TITLE[menu_id]
// 각 섹션들 (아이템 없는 ) 빈 상태로 만들기


function make_sec(sec_id) {
    let list =  `<div class="product_title">${sec_id}</div>
                    <div class="product_box"></div>`;
            $('.main .main_box').append(list)
}

// 한칸씩 어디에 몇개 넣어줄건지 결정
function load_list(cate_idx, start_idx, show_qty) {

    let rs = ITEM_LIST[cate_idx];
    let rs2 = TITLE_IMG[cate_idx];

    let tmp_qty = start_idx + show_qty;
    if (tmp_qty > rs.length) {
        tmp_qty = rs.length
    }
        
    for(let i=0; i<1; i++){
    let list = ` <img src="${rs2[i].src1}" alt="" class="title_name"> 
                <img src="${rs2[i].src2}" alt="" class="title_banner"> `
                
            $('.main .main_title').append(list)  
    }

    for (let i = start_idx; i < tmp_qty; i++) {
            list =`<div class="product_content">
                        <div class="product_img">
                            <a href="deal.html?cate=${cate_idx}&item=${rs[i].item_no}"> 
                                <img src="${rs[i].src}" alt="">
                            </a>
                        </div>
                        <div class="product_name">${rs[i].title}</div>
                        <div class="product_price">${rs[i].price}</div>
                        <a href="deal.html?cate=${cate_idx}&item=${rs[i].item_no}"> 
                            <input type="button" value="> 자세히 보기" id="product_view">
                        </a>
                    </div>`;
                    $(`.product_box`).append(list);
    }
}

// 현재 페이지에 넘어온 ? 뒤의 정보들 구분
function get_url_info(key) {
    let url = location.href; // url에 있는 문자열 다 가져오기 // product.html?cate=0&item_no=1&g=female
    url = url.split("?"); // ? 뒤쪽 정보만 가져오기   // [product.html, cate=0&item_no=1&g=female] 

    if (url.length > 1) { // ?뒤가 있냐 없냐 판별
        url = url[1];           // "cate=0&item_no=1&g=female"
        url = url.split('&');   // [cate=0  ,  item_no=1  ,  g=female]

        for (let i = 0; i < url.length; i++) {
            let tmp_url = url[i].split("="); // cate=0  =>  [cate  , 0]

            if (tmp_url[0] == key) {
                return tmp_url[1]
            }
        }
        return -1;
    }

    url = url[1]; //"cate=0"
    url = url.split("=");// [cate , 0]

}

// const cate_arr = ['EYELASH CURLER', 'LIP', 'REMOVE', 'EYEBROW', 'MASCARA', 'EYELINER'];


