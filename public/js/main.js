const overlay = document.querySelector('.overlay')
const iconSubMenuEl = document.querySelector(".main__menu .menu_mobile") // Icon Sub menu moblie
const subMenuEl = document.querySelector(".sub-mobile-menu") // Bảng sub menu mobile
const closeMenuEl = document.querySelector(".close__menu") // Nút close sub Menu
const loginEl = document.querySelectorAll(".box-action .action-login") // Nút đăng nhập
const shopCart = document.querySelector("._item--shopcart")
const userEl = document.querySelector("._item--user")
const subCart = document.querySelector(".sub-action-cart")
const actionClose = document.querySelector(".action-close")
const authEl = document.querySelector(".auth") // Bảng login
const userClose = document.querySelector(".user-close") // Nút close bảng login
const iconLoginEL = document.querySelector(".auth__choose--login")
const iconRegisterEL = document.querySelector(".auth__choose--register")
const tabLoginEL = document.querySelector(".auth__login")
const tabRegisterEL = document.querySelector(".auth__register")


console.log(loginEl)

// Ẩn hiện sub menu
iconSubMenuEl.addEventListener('click', () => {
    subMenuEl.classList.add('open')
})

closeMenuEl.addEventListener('click', () => {
    subMenuEl.classList.remove('open')
})
// ----------------------

// Ẩn hiện tab đăng nhập đăng ký
for (let el of loginEl) {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        subMenuEl.classList.remove('open')
        subCart.classList.remove('open')
        overlay.classList.add('open')
        authEl.classList.add('open')
    })
}

iconLoginEL.addEventListener('click', () => {
    tabLoginEL.classList.add('open')
    tabLoginEL.classList.remove('hide')
    tabRegisterEL.classList.remove('open')
    iconLoginEL.classList.add('open')
    iconRegisterEL.classList.remove('open')

})

iconRegisterEL.addEventListener('click', () => {
    tabRegisterEL.classList.add('open')
    tabLoginEL.classList.remove('open')
    tabLoginEL.classList.add('hide')
    iconRegisterEL.classList.add('open')
    iconLoginEL.classList.remove('open')

})
// ----------------------

// Ẩn hiện giỏ hàng phụ
shopCart.addEventListener('click', function (e) {
    e.preventDefault()
    overlay.classList.add('open')
    subCart.classList.add('open')
})

actionClose.addEventListener('click', () => {
    overlay.classList.remove('open')
    subCart.classList.remove('open')
})

overlay.addEventListener('click', () => {
    subCart.classList.remove("open")

})
// ----------------

// Ẩn hiện đăng nhập đăng ký

userEl.addEventListener('click', function (e) {
    e.preventDefault()
    overlay.classList.add('open')
    authEl.classList.add('open')
})

userClose.addEventListener('click', () => {
    overlay.classList.remove('open')
    authEl.classList.remove("open")
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('open')
    authEl.classList.remove("open")
})
// -------------


// Add cart thành công
const boxAddCart = document.getElementById('#add-to-cart')

// console.log(boxAddCart)
// -------------


const plusSubEl = document.querySelector('.price-quantity-plus')
const minusSubEl = document.querySelector('.price-quantity-minus')
const totalSubValue = document.querySelector('.info-price-quantity input')

// console.log(plusEl)
let totalSub = 1;

plusSubEl.addEventListener('click', () => {
    totalSub++;
    totalSubValue.value = totalSub;
})

minusSubEl.addEventListener('click', () => {
    if (totalSub <= 1) {
        alert("Số lượng sản phẩm không thể dưới 1")
        return 
    }
    totalSub--;
    totalSubValue.value = totalSub;

})


