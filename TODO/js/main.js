let list = document.getElementById('myUL'),
    itemList = document.querySelectorAll('.item-list')

function newElement() {
    const input = document.getElementById('myInput')

    let createNewElement = document.createElement('li')
    createNewElement.textContent = input.value
    createNewElement.className = 'item-list'

    list.appendChild(createNewElement)
}

function addElement() {
    for (let i = 0; i < itemList.length; i++) {
        let span = document.createElement('span')
        span.textContent = 'x'
        span.className = 'close'
        itemList[i].appendChild(span)
    }
}

addElement()

// Проверка коммита

const activeClass = () => {
    // itemList.forEach(e => {
    //     e.addEventListener('click', () => {
    //         if (e.classList.contains('active')){
    //             e.classList.remove('active')
    //         } else {
    //             e.classList.add('active')
    //         }
    //     })
    // })

    itemList.forEach(e => {
        e.addEventListener('click', () => {
            e.classList.toggle('active')
        })
    })
}

activeClass()

function removeNod() {
    let close = document.querySelectorAll('.close')

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement
            div.remove()
        }
    }
}

removeNod()
