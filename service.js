function copyNum() {
  navigator.clipboard.writeText("+918095045811");
}
function copyMail() {
  navigator.clipboard.writeText('admagnetix108@gmail.com');
}

let bar = document.getElementById('bar');
let drop_opt = document.getElementById('drop');
let xmark = document.getElementById('xmark'); 


bar.addEventListener("click", () => {
        drop_opt.style.display = 'flex';
        bar.style.display = 'none';
})
xmark.addEventListener("click", () => {
        drop_opt.style.display = 'none';
        bar.style.display = 'flex';
})

// seo
let chevron_left_seo = document.getElementById("chevron-left_seo");
let chevron_right_seo = document.getElementById("chevron-right_seo");
let img1_seo = document.getElementById("img1_seo");
let img_list_seo = [
  {img_herf: './img/seo/seo1.jpg'},
  {img_herf: './img/seo/seo2.jpg'},
  {img_herf: './img/seo/seo3.jpg'}
]
let count_num_seo = 0;
function update_img(count_num_seo) {
    img1_seo.setAttribute('src', `${img_list_seo[count_num_seo].img_herf}`);
}
chevron_right_seo.addEventListener('click', () => {
  if(count_num_seo == img_list_seo.length-1){
    count_num_seo = 0;
    update_img(count_num_seo);
  }else{
    count_num_seo++;
    update_img(count_num_seo);
  }
})
chevron_left_seo.addEventListener('click', () => {
  if(count_num_seo == 0){
    count_num_seo = img_list_seo.length-1;
    update_img(count_num_seo);
  }else{
    count_num_seo--;
    update_img(count_num_seo);
  }
})


// google
let chevron_left = document.getElementById("chevron-left");
let chevron_right = document.getElementById("chevron-right");
let img1 = document.getElementById("img1");
let img_list = [
  {img_herf: './img/google/google1.jpg'},
  {img_herf: './img/google/google2.jpg'},
  {img_herf: './img/google/google3.jpg'}
]
let count_num = 0;
function update_img(count_num) {
    img1.setAttribute('src', `${img_list[count_num].img_herf}`);
}
chevron_right.addEventListener('click', () => {
  if(count_num == img_list.length-1){
    count_num = 0;
    update_img(count_num);
  }else{
    count_num++;
    update_img(count_num);
  }
})
chevron_left.addEventListener('click', () => {
  if(count_num == 0){
    count_num = img_list.length-1;
    update_img(count_num);
  }else{
    count_num--;
    update_img(count_num);
  }
})

// web_develop
let chevron_left_web = document.getElementById("chevron-left_web");
let chevron_right_web = document.getElementById("chevron-right_web");
let img1_web = document.getElementById("img1_web");
let img_list_web = [
  {img_herf: './img/web/web1.jpg'},
  {img_herf: './img/web/web2.jpg'},
  {img_herf: './img/web/web3.jpg'}
]
let count_num_web = 0;
function update_img(count_num_web) {
    img1_web.setAttribute('src', `${img_list_web[count_num_web].img_herf}`);
}
chevron_right_web.addEventListener('click', () => {
  if(count_num_web == img_list_web.length-1){
    count_num_web = 0;
    update_img(count_num_web);
  }else{
    count_num_web++;
    update_img(count_num_web);
  }
})
chevron_left_web.addEventListener('click', () => {
  if(count_num_web == 0){
    count_num_web = img_list_web.length-1;
    update_img(count_num_web);
  }else{
    count_num_web--;
    update_img(count_num_web);
  }
})

// meta
let chevron_left_meta = document.getElementById("chevron-left_meta");
let chevron_right_meta = document.getElementById("chevron-right_meta");
let img1_meta = document.getElementById("img1_meta");
let img_list_meta = [
  {img_herf: './img/meta/meta1.jpg'},
  {img_herf: './img/meta/meta2.jpg'},
  {img_herf: './img/meta/meta3.jpg'}
]
let count_num_meta = 0;
function update_img(count_num_meta) {
    img1_meta.setAttribute('src', `${img_list_meta[count_num_meta].img_herf}`);
}
chevron_right_meta.addEventListener('click', () => {
  if(count_num_meta == img_list_meta.length-1){
    count_num_meta = 0;
    update_img(count_num_meta);
  }else{
    count_num_meta++;
    update_img(count_num_meta);
  }
})
chevron_left_meta.addEventListener('click', () => {
  if(count_num_meta == 0){
    count_num_meta = img_list_meta.length-1;
    update_img(count_num_meta);
  }else{
    count_num_meta--;
    update_img(count_num_meta);
  }
})