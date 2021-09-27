import Glide from '@glidejs/glide'

new Glide('.glidee', {
    type: 'carousel',
    hoverpause: true,
    perView: 1
}).mount()
new Glide('.glide', {
    type: 'carousel',
    hoverpause: true,
    perView: 4,
    breakpoints: {
        728: {
            perView: 1
        },
        1000: {
            perView: 2
        },
        1350: {
            perView: 3
        }
    }
}).mount()
new Glide('.glideP', {
    type: 'carousel',
    hoverpause: true,
    perView: 4,
    breakpoints: {
        1350: {
            perView: 3
        },
        1024: {
            perView: 2
        },
        678: {
            perView: 1
        },
    }
}).mount()


// lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true
// })


//     window.onload = function() {
//         const burger = document.querySelector('#burger')
//     const menu = document.querySelector('#navigation')
//     const shadow = document.querySelector('#shadow')
//     // добавление прослушиватель события
//     burger.addEventListener('click', (e) => {
//         e.preventDefault(); //отменить стандартное действия клика по ссылке, e - "объект события"
//         //добавить класс show для соответствующих элементов
//         navigation.classList.add('show')
//         shadow.classList.add('shows')

//     })
//     shadow.addEventListener('click', () => {
//         //удалить класс show для соответствующих элементов
//         menu.classList.remove('show')
//         shadow.classList.remove('shows')
//     })
// }





window.onload = function() {
    
    const accordion = document.querySelector('.accordion')
    const accordionItems = document.querySelectorAll('.accordion .accordion-item')

    accordionItems.forEach(item => {
        let header = item.querySelector('.accordion-item__header')
        item.setAttribute('data-closed-height', header.clientHeight)
        item.setAttribute('data-opened-height', item.clientHeight)

        item.style.height = header.clientHeight + 'px'

        header.addEventListener('click', (e) => {
            
            let itemToOpen = e.currentTarget.parentNode
            let currentOpened = document.querySelector('.accordion .accordion-item.opened')

            if(currentOpened && currentOpened != itemToOpen) {
                currentOpened.classList.remove('opened')
                currentOpened.style.height = currentOpened.getAttribute('data-closed-height') + 'px'
            }
            
            if(itemToOpen.classList.contains('opened')) {
                itemToOpen.classList.remove('opened')
                itemToOpen.style.height = itemToOpen.getAttribute('data-closed-height') + 'px'
            } else {
                itemToOpen.classList.add('opened')
                itemToOpen.style.height = itemToOpen.getAttribute('data-opened-height') + 'px'
            }
            
        })

    })

    if(accordion.hasAttribute('data-accordion-close-outside')) {
        document.addEventListener('mouseup', (e) => {
            let target = e.target
            let accordionNested = document.querySelectorAll('.accordion, .accordion *')
            let currentOpened = document.querySelector('.accordion .accordion-item.opened')
        
            let insideAccordion = false
        
            accordionNested.forEach(item => {
                if(item == target) insideAccordion = true
            })
        
            if(!insideAccordion && currentOpened) {
                currentOpened.classList.remove('opened')
                currentOpened.style.height = currentOpened.getAttribute('data-closed-height') + 'px'
            }
        })
    }

}









//указатели на элементы (обащение к элементам HTML)
const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')
const shadow = document.querySelector('#shadow')

//добавление прослушиватель события
burger.addEventListener('click', (e) => {
    e.preventDefault(); //отменить стандартное действия клика по ссылке, e - "объект события"

    //добавить класс show для соответствующих элементов
    menu.classList.add('show')
    shadow.classList.add('show')
})

shadow.addEventListener('click', () => {
    //удалить класс show для соответствующих элементов
    menu.classList.remove('show')
    shadow.classList.remove('show')
})
/*
const themeLinks = document.querySelectorAll('div[data-theme]')
const themeObjects = document.querySelectorAll('li[data-is-theme]')

themeLinks.forEach(link => {
    
    link.onclick = (e) => {
        e.preventDefault()
        let theme = e.target.getAttribute('data-theme')
        themeObjects.forEach(obj => {
            obj.style.display = 'none'
        })
        document.querySelectorAll(`li[data-is-theme*="${theme}"]`).forEach(obj => {
            obj.style.display = 'block'
        })
    }
})*/

require('fslightbox'); 