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



let reviwe_card = document.getElementById('reviwe_card');
let prvbtn = document.getElementById('prvbtn');
let nextbtn = document.getElementById('nextbtn');
let testi_review = document.getElementById('testi_review');
let testi_rate = document.getElementById('testi_rate');
let testi_name = document.getElementById('testi_name');
let testi = [
  {
    name: 'Jobys Toppers Institute Pvt Ltd',
    rate: '4.3',
    review: "Dashwanth Advertising Solutions has been instrumental in elevating our online presence. Their expertise in SEO has significantly improved our search engine rankings, driving more organic traffic to our website. Their tailored YouTube ad campaigns have not only increased our visibility but also enhanced our brand recognition. Additionally, their seamless integration of SSL certificates has fortified our website's security, instilling greater trust among our customers. Highly recommended for comprehensive digital marketing services."
  },
  {
    name: 'Neha Kapoor',
    rate: '4.5',
    review: "I totally recommend them. They are the best."
  },
  {
    name: 'Shirish Mehra',
    rate: '4.5',
    review: "Very trustworthy and genuine. Been dealing with them for quite a while now."
  },
  {
    name: 'Pankaj Jha',
    rate: '4.5',
    review: "They offer everything excellent quality. Really appreciated."
  },
]

let num = 0;
prvbtn.addEventListener("click", () => {
  if(num>0){
    num--;
    testi_review.textContent = testi[num].review;
    testi_rate.textContent = testi[num].rate;
    testi_name.textContent = testi[num].name;
    reviwe_card.classList.add("shake");
    reviwe_card.addEventListener("animationend",() => {
        reviwe_card.classList.remove("shake");
      },
      { once: true }
    );
  }
});
nextbtn.addEventListener("click", () => {
  if(num<testi.length-1){
    num++;
    testi_review.textContent = testi[num].review;
    testi_rate.textContent = testi[num].rate;
    testi_name.textContent = testi[num].name;
    reviwe_card.classList.add("shake");
    reviwe_card.addEventListener("animationend",() => {
        reviwe_card.classList.remove("shake");
      },
      { once: true }
    );
  }
});


let section = document.querySelectorAll('.baselen');
let unactive = document.querySelectorAll('.unactive');
let navBtn = document.querySelectorAll('.navBtn');
let removeact = document.querySelectorAll('.active');
let currentSection = 'home';

window.addEventListener('scroll', () => {

  section.forEach(sectionEle => {
    if(window.scrollY >= sectionEle.offsetTop - 200){
      currentSection = sectionEle.id;
      navBtn.forEach((navbtn) => {
        navbtn.classList.remove('active');
        if(navbtn.getAttribute('href') == `#${currentSection}`){
          navbtn.classList.add('active');
        }
      })
    }
  });

});


let f_xmark = document.getElementById('f_xmark');
let float = document.getElementById('float');
// let phone_copybtn = document.getElementById('phone_copybtn');
// let mail_copybtn = document.getElementById('mail_copybtn');
function floatt() {
  float.style.display = 'flex';
}
document.getElementById('servies_card').addEventListener('click', () => floatt());
document.getElementById('servies_card1').addEventListener('click', () => floatt());
document.getElementById('servies_card2').addEventListener('click', () => floatt());
document.getElementById('servies_card3').addEventListener('click', () => floatt());

f_xmark.addEventListener('click', () => {
  float.style.display = 'none'
});
function copyNum() {
  navigator.clipboard.writeText("+918095045811");
}
function copyMail() {
  navigator.clipboard.writeText('admagnetix108@gmail.com');
}