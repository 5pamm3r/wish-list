const boddy = document.querySelector('body')
const secList = document.querySelector('#list')
const desc = document.querySelector('#desc')
const count = document.querySelector('#count')
const price = document.querySelector('#price')
const itemStatus = document.querySelector('#status')
const btnAdd = document.querySelector('#addItem')
const required = document.querySelector('.required')
const total = document.querySelector('#total')


let cont = 0

const itemsValues = (item, value, className) => {
    item.value = value;
    item.className = className;
}

const deleteCont = (count, price) => {
    cont = cont - (count * price)
    total.textContent = `Total: ${cont}`
}

const addList = (desc, count, price, itemStatus) =>{
    const list = document.createElement('div')
    list.className = 'items__container'

    const newDesc = document.createElement('input')
    itemsValues(newDesc, desc, 'description')

    const newCount = document.createElement('input')
    itemsValues(newCount, count, 'count')

    const newPrice = document.createElement('input')
    itemsValues(newPrice, price, 'price')

    const newStatus = document.createElement('input')
    itemsValues(newStatus, itemStatus, 'status')

    const button = document.createElement('button')
    button.innerText = 'Delete'
    button.className = 'delete'
    button.name = 'delete'

    list.append(newDesc, newCount, newPrice, newStatus, button);

    cont += (count * price)
    total.textContent = `Total: ${cont}`

    return list
}

const cleanInputs = () => {
    desc.value = ''
    count.value = ''
    price.value = ''

    desc.placeholder = 'Description..'
    count.placeholder = 'Count..'
    price.placeholder = 'Price..'
    itemStatus.value = 'Wish'
}

btnAdd.addEventListener('click', ()=>{
    if(desc.value != '' && count.value != '' && price.value != ''){
        secList.append(addList(desc.value, count.value, price.value, itemStatus.value))
        cleanInputs()
        required.style.display = 'none'

    }else{
       required.style.display = 'block'
       setTimeout(() => {
           required.style.display = 'none'
       }, 4000);
    }

})

boddy.addEventListener('click', (el)=>{
    if(el.target.name === 'delete'){
        const listRemove = el.target.parentElement
        listRemove.remove()
        deleteCont(el.path[1].childNodes[1].value, el.path[1].childNodes[2].value)
    }
})



