const secList = document.querySelector('#list')
const desc = document.querySelector('#desc')
const count = document.querySelector('#count')
const price = document.querySelector('#price')
const status = document.querySelector('#status')
const btnAdd = document.querySelector('#addItem')

const values = (item, value, className) => {
    item.value = value;
    item.className = className;
}

const addList = (desc, count, price, status) =>{
    const list = document.createElement('div')
    list.className = 'items__container'

    const newDesc = document.createElement('input')
    values(newDesc, desc, 'description')

    const newCount = document.createElement('input')
    values(newCount, count, 'count')

    const newPrice = document.createElement('input')
    values(newPrice, price, 'price')

    const newStatus = document.createElement('input')
    values(newStatus, status, 'status')

    const button = document.createElement('button')
    button.innerText = 'Delete'
    button.className = 'delete'
    button.name = 'delete'

    list.append(newDesc, newCount, newPrice, newStatus, button);

    return list
}

btnAdd.addEventListener('click', ()=>{
    secList.append(addList(desc.value, count.value, price.value, status.value))

})

const boddy = document.querySelector('body')
boddy.addEventListener('click', (el)=>{
    if(el.target.name === 'delete'){
        const listRemove = el.target.parentElement
        listRemove.remove()
    }
})



