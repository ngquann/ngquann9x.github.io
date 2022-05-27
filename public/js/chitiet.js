const plusEl = document.querySelector('.product-detail__quantity--increase')
const minusEl = document.querySelector('.product-detail__quantity--decrease')
const totalValue = document.querySelector('.product-detail__quantity-input input')

console.log(totalValue)
let total = 1;

plusEl.addEventListener('click', () => {
    total++;
    totalValue.value = total;
    console.log(total)
})

minusEl.addEventListener('click', () => {
    if (total <= 1) {
        alert("Số lượng sản phẩm không thể dưới 1")
        return false
    }
    total--;
    totalValue.value = total;

})
