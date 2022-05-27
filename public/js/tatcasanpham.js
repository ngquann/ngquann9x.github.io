// Ẩn hiện sắp xếp sản phẩm
const filterEl = document.querySelector('.item-filter .title-list-filter')
const boxFilter = document.querySelector('.list-number-row ')
const iEle = document.querySelector('.item-filter .title-list-filter i')
const filtersEl = document.querySelectorAll('.item-side-title')
console.log(iEle)


filterEl.addEventListener('click', () => {
    iEle.classList.toggle('open')
    boxFilter.classList.toggle('open')

});

for (let el of filtersEl) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.classList.toggle('open')
    })
}
// ----------------------

// Ẩn hiện filter sản phẩm-mb
const iconSideMb = document.querySelector('.filter-search')
const filterMbEl = document.querySelector('.filter-search-mb')

iconSideMb.addEventListener('click', () => {
    filterMbEl.classList.toggle('open')
})