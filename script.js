// class test{
//     name = ''
//     age = 1
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     cons(){
//         console.log(this.name+' Рокіd '+this.age);
//     }
// }
// let vas = new test('Vasa',32)
// vas.cons()
// class CreateBtn {
//     text = ''
//     constructor(text){
//         this.text = text
//         this.render()
//     }
//     onBtn(){
//         console.log('Press btn');
//     }
//     createBtn(){
//         const btn = document.createElement('button')
//         btn.classList = 'btn'
//         return btn
//     }
//     render(){
//         const block = document.querySelector('.btns')
//         if(block){            
//             const btn = this.createBtn()
//             btn.textContent = this.text
//             block.appendChild(btn)
//             btn.onclick = this.onBtn
//         }
//     }
// }
// new CreateBtn('Press')
// class AlertBtn extends CreateBtn{
//     constructor(text){
//         super(text)
//     }
//     onBtn(){
//         alert('Ok1')
//     }
// }
// const a = new AlertBtn('Push')  

// class roundBtn extends CreateBtn {
//     constructor(text){
//         super(text)
//     }
//     createBtn(){
//         const btn = document.createElement('button')
//         btn.classList = 'btn round'
//         return btn
//     }
// }
// new roundBtn('Round')
//////////
class cardInfo{
    info = []
    constructor(){
        let goods = this.infoFunc()
        goods = goods.map(cur => {
            return new cardBild(cur)
        })
        this.info.push(...goods);
        this.render()
        this.totalPrice()
    }
    totalPrice(){
        const headerBlock = document.querySelector('.brack')
        const totalMonet = document.createElement('h2')
        totalMonet.className = 'total'
        totalMonet.textContent = `Общая цена за товар: 0 UAH`
        headerBlock.appendChild(totalMonet)
    }
    infoFunc(){
       return [
            {name: "футбока",prise: 50 ,id:1},
            {name: "кофта",prise: 150 ,id:2},
            {name: "шорти",prise: 250 ,id:433},
            {name: "штани",prise: 550 ,id:434},
            {name: "м'яч",prise: 150 ,id:45},
            {name: "стіл",prise: 850 ,id:6},
            {name: "шар",prise: 350 ,id:75},
            {name: "карта",prise: 550 ,id:8},
            {name: "шкаф",prise: 950 ,id:9},
            {name: "телевізор",prise: 200 ,id:10},
            {name: "телефон",prise: 520 ,id:11},
        ]
    }
    render(){
        this.info.forEach(itm =>{
            itm.render()
        })
    }
}
class cardBild {
    name =""
    prise = 0 
    constructor({ name,prise,id }){
        // this.render()
        this.name = name
        this.prise = prise
        this.id = id
    }
    render(){
        const block = document.querySelector('.wrap__card')
        
        if (block) {
            let i = 0
            let card = document.createElement('div')
            card.className = ('card')
            let title = document.createElement('h3')
            title.className = (`title title_${this.id}`)
            title.textContent =`${this.name}`
            let price = document.createElement('span')
            price.className = (`price price_${this.id}`)
            price.textContent =`Ціна ${this.prise}`
            let btn = document.createElement('button')
            btn.className = (`btn btn_${this.id}`)
            btn.textContent =`buy`
            block.appendChild(card)
            card.appendChild(title)
            card.appendChild(price)
            card.appendChild(btn)
            
        }
    }
}
const cardInf = new cardInfo()
let button = document.querySelectorAll('button'),
mass = [''], totalMon = 0
//Достаю  id с класса button
function test(e){
    let buttonId = e.target
    buttonId = buttonId.className.split('_')[1]   
    /// при нажатии на btn выводит инфу по id
    let info = cardInf.info
    let infoClick,kilkOn 
     info.forEach( item =>{
        let id = item.id                    
            if (id == buttonId) {
                totalMon += item.prise  
                kilkOn = mass.filter(i => i == item.id).length 
                kilkOn +=1           
                if (!mass.includes(buttonId)) {
                infoClick = item;                      
            }   
        }        
    }) 
    console.log(kilkOn);
    mass.push(buttonId) ;
   
    if (infoClick) {       
        const headerBlock = document.querySelector('.brack')
        let blockBre = document.createElement('div')
        let title = document.createElement('h3')
        let price = document.createElement('span')
        let kilk = document.createElement('span')    
        title.className = (`title title__top`)
        price.className = (`prise prise__top`)
        kilk.className = `prise kilk_${buttonId}`
        kilk.textContent = 'Количество товара: 1'
        title.textContent = `${infoClick.name}`
        price.textContent = `Цена за 1 товар ${infoClick.prise}UAH`
        headerBlock.appendChild(blockBre)
        blockBre.appendChild(title)
        blockBre.appendChild(price) 
        blockBre.appendChild(kilk)          
    }
    let kilk = document.querySelector(`.kilk_${buttonId}`)
    kilk.textContent = `Количество товара ${kilkOn}`
    ////Вывод полной цены корзины 
    const totalMonet = document.querySelector('.total')
    totalMonet.textContent =`Общая цена за товар: ${totalMon} UAH`
    
}
const btn = document.querySelector(`.brack__btn`)
for (const itm of button) {
    itm.onclick = test
}

