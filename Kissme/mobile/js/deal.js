$(document).ready(function(){
    ///////////////////////////////////
    // 초기값 설정 (cate, item)
    let cate_no = get_url_info("cate");
    let item_no = get_url_info("item"); 
    load_data(cate_no, item_no);
    //////////////////////////////////////
    
    // 색 옵션 클릭시 동작 
    $(document).on('click','.btn_color', function(){ 
        // 클릭할 당시의 리스크 알맹이 개수
        let list_count = $('.opt_selected').children().length;
        // 현재 클릭한 버튼의 아이디
        let tmp_id =$(this).attr("id");

        // 리스트에 한개라도 있으면
        if(list_count > 0) {
            let class_dupl_chk = false; // 이미 있을때-true, 없으면-false

            // 리스트 개수만큼 돌면서 현재 클릭한 버튼 관련된게 있는지 확인
            for(let i=0; i<list_count; i++) {              
                class_dupl_chk = $('.opt_selected').children('.sel_color_box').eq(i).hasClass(tmp_id);
                
                if(class_dupl_chk) break;
            } 

            if(class_dupl_chk) {
                alert("이미 선택한 옵션 입니다.")
            }
            else {
                make_opt_list(tmp_id)
            }
        }
        // 처음. 리스트에 하나도 없는 경우
        else {
            make_opt_list(tmp_id)
        }
 
        // $('#p_tot').text($('.txt_qty').val() * rs.s_price + "원");
        total();
        
    }); 

    //////////////////////////////////////
    
    $(document).on('click','.btn_qty', function(){
        qty_chg($(this).val(), $(this));
        total();
    }) 
    $(document).on('click','.btn_price_delete', function(){
        $(this).parent().parent('.sel_color_box').remove();
        total();
    }) 
    
});

    function total() {
        let final_total = 0;
        let final_qty=0;
        // 1. 클릭할 당시의 리스크 알맹이 개수
        let list_count = $('.opt_selected').children().length;
        
        // 리스트에 한개라도 있으면
        if(list_count > 0) {
            // 2. 각각의 알맹이 마다의 개수 * 값(rs.s_price)
            // 3. 변수에 각각 알맹이 돌면서 나온 값을 저장
            for(let i=0; i<list_count; i++) {
                final_qty += +$('.opt_selected').children('.sel_color_box').eq(i).children('.opt_qty').children('.txt_qty').val();
                final_total += +$('.opt_selected').children('.sel_color_box').eq(i).children('.opt_qty').children('.txt_qty').val() * rs.s_price;
            }
            
            // 4. 출력
            
            // $('#p_tot').text(final_total.toLocaleString('kr') + "원");
            let p_tot = final_total.toLocaleString('kr');
            $('.price_total').html(`<div>TOTAL: <span id="p_tot">${p_tot} 원</span> (${final_qty}개)</div>`)
            
        }
    }

    function make_opt_list(tmp_id) {
        $('.opt_selected').append(
            `<div class="sel_color_box ${tmp_id}"> 
                <div class="opt_name">
                    <div>${rs.brand}</div>
                    <div>-${rs.title}</div>
                </div>
                <div class="opt_qty">
                    <input type="button" class="btn_qty txt_minus" value="-">
                    <input type="text" class="txt_qty" value="1" readonly>
                    <input type="button" class="btn_qty txt_plus" value="+">
                    <img src="img/theComma/product/btn_price_delete.gif" alt="" class="btn_price_delete">
                    <input type="text" value="${$(this).index()}" title="해당 아이템 방번호" class="chk_item_order">
                </div>
                <div class="opt_price">
                    <div>${rs.s_price.toLocaleString('kr')}원</div>
                    <div>(적립 10,000원)</div>
                </div>
            </div>`
        );
        /*let tmp_el = `<div class="sel_color_box ${tmp_id}"> 
                                <div class="opt_name">
                                    <div>${rs.brand}</div>
                                    <div>-${rs.title}</div>
                                </div>
                                <div class="opt_qty">
                                    <input type="button" class="btn_qty txt_minus" value="-">
                                    <input type="text" class="txt_qty" value="1">
                                    <input type="button" class="btn_qty txt_plus" value="+">
                                    <img src="img/theComma/product/btn_price_delete.gif" alt="" class="btn_price_delete">
                                    <input type="text" value="${$(this).index()}" title="해당 아이템 방번호" class="chk_item_order">
                                </div>
                                <div class="opt_price">
                                    <div>${rs.s_price.toLocaleString('kr')}원</div>
                                    <div>(적립 10,000원)</div>
                                </div>
                            </div>`;

                $('.opt_selected').append(tmp_el)*/

    }

    function qty_chg(tmp_mark, el) {


        if(tmp_mark=="+") {
            console.log(el.prev()); //'.txt_qty'

            let curr_qty= +el.prev().val();
            el.prev().val(curr_qty+1)
        }
        else if(tmp_mark=="-") { 
            console.log(el.next()) // '.txt_qty'

            let curr_qty= +el.next().val();

            if(curr_qty - 1 <1) {
                alert("최소 주문 수량은 1개 입니다.");
            }
            else {
                el.next().val(curr_qty-1)
            }
        }
    }

    let rs = "";
    function load_data(cate, item) {
        rs = ITEM_LIST[cate][item-1]; 
        let rs1 = cate_arr[cate]
        let rs2 = DEAL_TITLE[cate]
        let rs3 = DEAL_LIST[cate][item-1]
        $('.detail_img_box > #big_img').attr('src', rs.src)
        // $('.products_detail').attr('src', rs3.src)
        $('#o_price').text( rs.price)
        $('.item_title1').text(rs1);
        $('.item_title2').text(rs.title);
        
        rs_opt_color=rs.opt_color.split(",");  
        rs_opt_txt=rs.opt_txt.split(",");  
        rs_point=rs.point.split(",");  
        // rs_detail=rs.detail.split(",");  

        rs3_src=rs3.src.split(",");  
        
        // DEAL_ITEM 넣어주기
        // for(let i=0; i<rs_detail.length; i++){
        //     let list = ` <img src="${rs_detail[i]}" alt="" >  `
        //                 $('.products_detail').append(list)  
        //     }
        // DEAL_ITEM 넣어주기
        for(let i=0; i<rs3_src.length; i++){
            let list = ` <img src="${rs3_src[i]}" alt="" >  `
                        $('.products_detail').append(list)  
            }
        // DEAL_TITLE 넣어주기
        for(let i=0; i<1; i++){
            let list = ` <img src="${rs2[i].src}" alt="" >  `
                        $('.main .deal_title').append(list)  
            }
        // POINT 넣어주기
        for(let i=0; i< rs_point.length; i++){
            let tmp_el = `<div class="item_sec_body"><span class="sec_txt_circle"></span>${rs_point[i]}</div>`
                        $('.point').append(tmp_el);
        }
        // 색상, 옵션 넣어주기
        for(let i=0; i<rs_opt_color.length; i++) {
            let tmp_el = `<div class=btn_wrap><div class="btn_color ${rs_opt_color[i]}" style="background-color:${rs_opt_color[i]}" id="${rs_opt_color[i]}"></div><div>${rs_opt_txt[i]}</div><div>`;
            $('.opt_box').append(tmp_el);
            
            let tmp_el2 = `<option value="">${rs_opt_txt[i]}</option>`
            $('#sel').append(tmp_el2);
        }
    
    }

