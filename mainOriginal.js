const form = document.querySelector('.form')

const username = document.querySelector('#username')
const order = document.querySelector('#order')
const address = document.querySelector('#address')
const phone = document.querySelector('#phone')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    sendMessage()
})



const input = document.querySelector(".input-box");
input.onclick = function () {
    this.classList.toggle("open");
    let list = this.nextElementSibling;
    if (list.style.maxHeight) {
        list.style.maxHeight = null;
        list.style.boxShadow = null;
    } else {
        list.style.maxHeight = list.scrollHeight + "px";
        list.style.boxShadow =
            "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
    }
};

const rad = document.querySelectorAll(".radio");
const checkedRad = document.querySelector('.radio:checked');
input.innerHTML = checkedRad.nextElementSibling.querySelector('.name').innerHTML

rad.forEach((item) => {
    item.addEventListener("change", () => {
        input.innerHTML = item.nextElementSibling.querySelector('.name').innerHTML;
        input.click();
    });
});

const label = document.querySelectorAll(".label-select");
function search(searchin) {
    let searchVal = searchin.value;
    searchVal = searchVal.toUpperCase();
    label.forEach((item) => {
        let checkVal = item.querySelector(".name").innerHTML;
        checkVal = checkVal.toUpperCase();
        if (checkVal.indexOf(searchVal) === -1) {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
        let list = input.nextElementSibling;
        list.style.maxHeight = list.scrollHeight + "px";
    });
}


const modal = document.querySelector('#open-modal')

function sendMessage() {
    console.log(input.innerHTML)

    const text = `Данные с сайта: %0A<b>Имя:</b> <i>${username.value}</i> %0A<b>Заказ:</b> <i>${order.value}</i>%0A<b>Место:</b> <i>${input.innerText}</i> %0A<b>Адресс доставки:</b> <i>${address.value}</i> %0A<b>Телефон:</b> <i>${phone.value}</i>`


    const t = "6810656698:AAHf3AV8uPwztVKcNLTSvkxagk6OcUMCnTc"
    const cid = -1002142817575
    const url = `https://api.telegram.org/bot${t}/sendMessage?chat_id=${cid}&text=${text}&parse_mode=html`


    const xhr = new XMLHttpRequest();

    // Handle the 'load' event for successful completion of the request    

    xhr.open("GET", url, true);
    xhr.send();

    modal.classList.toggle('active')

    reset()
}

function reset() {
    username.value = ""
    order.value = ""
    phone.value = ""
    address.value = ""
}

const close = document.querySelector('#close')

close.onclick = function () {
    modal.classList.toggle('active')
}


