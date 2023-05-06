import './styles.css';

// const PRELOADER = document.getElementById('preloader');
// const WORDS_IN_PRELOADER = PRELOADER.querySelectorAll('span');


// function lookForClass(mutationList, observer) {
//   mutationList.forEach(function(mutation) {
//     if (mutation.type === 'attributes' && mutation.attributeName === 'id') {
//       console.log('entendei la referencia')
//     }
//   })
// }

// const TEXT_WATCHER = new MutationObserver(lookForClass)
// TEXT_WATCHER.observe(WORDS_IN_PRELOADER[0], {attributes: true})

//   addEventListener('load', e => {
       
//         setTimeout(() => {
    
//             for(let i = 0; i < 3; i++){
//                 WORDS_IN_PRELOADER[i].id = 'word-' + [i + 1];
//             }
//             }, 1000)
            
//             setTimeout(() => PRELOADER.classList.add('disable'), 2500)
//         });
   
 
   
// Precios de Gaza 
const gaza = [
        {
            ariel:         0.75,
            lavaplatos:    0.74,
            desinfectante: 0.42,
            suavizante:    0.51,
            shampoo:       0.86,
            desengrasante: 0.96,
        }
    ];

const gazaCollection = document.getElementById('select-product-wholesale').querySelectorAll('.options-in-wholesale');

// Precio de los Productos

const cloro          = 0.58;
const lavaPlatos     = 1;
const ariel          = 1;
const cera           = 0.75;
const acondicionador = 1.50;
const shampoo        = 1.40;
const desinfectante  = 0.68;
const suavizante     = 0.80;
const desengrasante  = 1.30;

// Receptores de valores

let cloroOutput           = document.querySelector('#item-1');
let lavaPlatosOutput      = document.querySelector('#item-2');
let arielOutput           = document.querySelector('#item-3');
let ceraOutput            = document.querySelector('#item-4');
let acondicionadorOutput  = document.querySelector('#item-5');
let shampooOutput         = document.querySelector('#item-6');
let desinfectanteOutput   = document.querySelector('#item-7');
let suavizanteOutput      = document.querySelector('#item-8');
let desengrasanteOutput   = document.querySelector('#item-9');

let cloroHalf             = document.querySelector('#item-1a');
let lavaPlatosHalf        = document.querySelector('#item-2a');
let arielHalf             = document.querySelector('#item-3a');
let ceraHalf              = document.querySelector('#item-4a');
let acondicionadorHalf    = document.querySelector('#item-5a');
let shampooHalf           = document.querySelector('#item-6a');
let desinfectanteHalf     = document.querySelector('#item-7a');
let suavizanteHalf        = document.querySelector('#item-8a');
let desengrasanteHalf     = document.querySelector('#item-9a');

let cloroQuarter          = document.querySelector('#item-1b');
let lavaPlatosQuarter     = document.querySelector('#item-2b');
let arielQuarter          = document.querySelector('#item-3b');
let ceraQuarter           = document.querySelector('#item-4b');
let acondicionadorQuarter = document.querySelector('#item-5b');
let shampooQuarter        = document.querySelector('#item-6b');
let desinfectanteQuarter  = document.querySelector('#item-7b');
let suavizanteQuarter     = document.querySelector('#item-8b');
let desengrasanteQuarter  = document.querySelector('#item-9b');


const productNameCollection = document.querySelectorAll('div[data-product_name]');
const productNameArr = Array.from(productNameCollection);


const arr_cu = [
             cloroOutput,
             lavaPlatosOutput,
             arielOutput,
             ceraOutput,
             acondicionadorOutput,
             shampooOutput,
             desinfectanteOutput,
             suavizanteOutput,
             desengrasanteOutput
        ];
        
const arr_half = [
             cloroHalf,
             lavaPlatosHalf,
             arielHalf,
             ceraHalf,
             acondicionadorHalf,
             shampooHalf,
             desinfectanteHalf,
             suavizanteHalf,
             desengrasanteHalf
        ];
        
const arr_quarter = [
             cloroQuarter,
             lavaPlatosQuarter,
             arielQuarter,
             ceraQuarter,
             acondicionadorQuarter,
             shampooQuarter,
             desinfectanteQuarter,
             suavizanteQuarter,
             desengrasanteQuarter
        ];
        
const inputsInConvertSection = {
    inputOne : document.querySelector('#input-one'),
    inputTwo : document.querySelector('#input-two'), 
    inputThree : document.querySelector('#input-three'),
    inputFour : document.querySelector('#input-four'),
};

const NAVBAR = document.getElementById('navbar');
 
// Home Section
let homeLink         = document.querySelector('#home-link');
let homeSection      = document.querySelector('#home-section');
let inputDolarPrecio = document.querySelector('#input-dolar-price');
let submitBtn        = document.getElementById('submit-btn');

// Shopping Cart Section

let shoppingSection  = document.querySelector("#Shopping-cart-section");
let shoppingLink     = document.querySelector('#shopping-link');

    shoppingSection.classList.add('disable');
    
// Converters Section

const converterSection = document.querySelector('#converter-section');    
const converterLink    = document.querySelector('#converter-link');
converterSection.classList.add('disable');

// Wholesale Section 

const WholesaleSection = document.querySelector('#wholesale-section');
const wholesaleLink = document.querySelector('#wholesale-prices-link');
const billContainer = document.getElementById('billing');

WholesaleSection.classList.add('disable');

// Shorthand for console.log
   const log = msg => console.log(msg);
// Multipicar  
    function multi(dolar, product){
    return (parseFloat(dolar) * product).toFixed(2);
}
// Un Medio 1/2
    function half(elemt){
        return (parseFloat(elemt) / 2).toFixed(2);
    }
// Un Cuarto 1/4    
    function quarter(elemt){
        return (parseFloat(elemt) / 4).toFixed(2);
    }
    
// "unique Id" **

    function uniqueID() {
        return Math.floor(Math.random() * Date.now())
    }
    
// Classes

    const date = new Date();
    
    // let day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
    // let month = `${date.getMonth() + 1 ? '0' : ''}${date.getMonth() + 1}`;
    // let year = date.getFullYear();
    
    // let dayMonthYear = `${day}-${month}-${year}`;
    
    const [day , month, year] = [
        date.getDate(),
        (date.getMonth() + 1),
        date.getFullYear()
        ];
    console.log([day,month,year])

    // Obj Constructor to Register sells
    
    class ObjHistory{
        constructor(name, value, date = [day,month,year]){
            this.name  = name;
            this.value = value;
            this.date  = date;
        }
    }
    
    
// sum of all elements in an Array 
    function sumElemtsInAnArr(arr){
        
        let result = 0;
        let fixedArr = []
        
        for (let i = 0; i < arr.length; i++) {
            fixedArr.push(parseFloat(arr[i]))
        }
        
        for (let i = 0; i < fixedArr.length; i++) {
            result += fixedArr[i]
        }
        return result.toFixed(2)
    }

    submitBtn.addEventListener('click', fillTheCells);
    inputDolarPrecio.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            fillTheCells()
        }
    });
    
    function fillTheCells(){
        let d = inputDolarPrecio.value;
        if(d !=''){
            let cloroMulti = multi(d, cloro);
            let lavaPlatosMulti = multi(d, lavaPlatos);
            let arielMulti = multi(d, ariel);
            let ceraMulti = multi(d, cera);
            let acondicionadorMulti = multi(d, acondicionador);
            let shampooMulti = multi(d, shampoo);
            let desinfectanteMulti = multi(d, desinfectante);
            let suavizanteMulti = multi(d, suavizante);
            let desengrasanteMulti = multi(d, desengrasante);
        
            const multiplications = [
                    cloroMulti,
                    lavaPlatosMulti,
                    arielMulti,
                    ceraMulti,
                    acondicionadorMulti,
                    shampooMulti,
                    desinfectanteMulti,
                    suavizanteMulti,
                    desengrasanteMulti
                ];
            
            const halfted = [
                    half(cloroMulti),
                    half(lavaPlatosMulti),
                    half(arielMulti),
                    half(ceraMulti),
                    half(acondicionadorMulti),
                    half(shampooMulti),
                    half(desinfectanteMulti),
                    half(suavizanteMulti),
                    half(desengrasanteMulti),
                ];
            
            const quartered = [
                    quarter(cloroMulti),
                    quarter(lavaPlatosMulti),
                    quarter(arielMulti),
                    quarter(ceraMulti),
                    quarter(acondicionadorMulti),
                    quarter(shampooMulti),
                    quarter(desinfectanteMulti),
                    quarter(suavizanteMulti),
                    quarter(desengrasanteMulti),
                ];
        
            // adding Values to cells
            
            function addInnerTxtToCells(elem, value){
                for (let i = 0; i < elem.length; i++) {
                    elem[i].innerText = value[i]
                }
            }
            
            addInnerTxtToCells(arr_cu, multiplications);
            addInnerTxtToCells(arr_half, halfted);
            addInnerTxtToCells(arr_quarter, quartered);
            
            for(const value in arr_cu){
            arr_cu[value].style.color = 'white';
            }
            // console.log(arr_cu);
            
            for(const value in arr_half){
            arr_half[value].style.color = 'white';
            }
            // console.log(arr_half);
            
            for(const value in arr_quarter){
            arr_quarter[value].style.color = 'white';
            }
            // console.log(arr_quarter);
            
            let childsOfinputTwo = document.querySelector('#input-two').children;
            let childsOfinputThree = document.querySelector('#input-three').children;
            
            let optionsIn_inputTwo = Array.from(childsOfinputTwo);
            let optionsIn_inputThree = Array.from(childsOfinputThree);
            
            function addValue(arr){
                let clone = [...arr];
                
                for (let i = 0; i < clone.length; i++) {
                    clone[i].value = multiplications[i]
                }
                
                return clone
            }
   
            addValue(optionsIn_inputTwo);
            addValue(optionsIn_inputThree);
        }
    }
    
    // swich between home and shopping
    
    shoppingLink.addEventListener('click', ()=>{
        
        homeSection.style.opacity      = 0;
        converterSection.style.opacity = 0;
        WholesaleSection.style.opacity = 0;
        
        if(container.classList.contains('disable')){
            container.classList.remove('disable');
        }
        
        billContainer.classList.add('disable');
        
        
        setTimeout(() =>{
            
            homeSection.classList.add('disable');
            converterSection.classList.add('disable');
            WholesaleSection.classList.add('disable');
            
            shoppingSection.classList.remove('disable');
            shoppingSection.style.opacity = 1;
        }, 400)
    });
    
    homeLink.addEventListener('click', ()=>{
        
        shoppingSection.style.opacity  = 0;
        converterSection.style.opacity = 0;
        WholesaleSection.style.opacity = 0;
        
        if(container.classList.contains('disable')){
            container.classList.remove('disable');
        }
        
        billContainer.classList.add('disable');
        
        setTimeout(() => {
            
            shoppingSection.classList.add('disable');
            converterSection.classList.add('disable');
            WholesaleSection.classList.add('disable');
            
            homeSection.classList.remove('disable');
            homeSection.style.opacity = 1;
        }, 400)
    });
    
    converterLink.addEventListener('click', () =>{
        
        homeSection.style.opacity     = 0;
        shoppingSection.style.opacity = 0;
        WholesaleSection.style.opacity = 0;
        
        if(container.classList.contains('disable')){
            container.classList.remove('disable');
        }
        
        billContainer.classList.add('disable');
        
        setTimeout(() => {
            
            homeSection.classList.add('disable');
            shoppingSection.classList.add('disable');
            WholesaleSection.classList.add('disable');
            
            converterSection.classList.remove('disable');
            converterSection.style.opacity = 1;
        }, 400)
    });
    
    wholesaleLink.addEventListener('click', e => {
        
        
        
        homeSection.style.opacity     = 0;
        shoppingSection.style.opacity = 0;
        converterSection.style.opacity = 0;
        
        if(billContainer.classList.contains('disable')){
            billContainer.classList.remove('disable');
        }
        
        container.classList.add('disable');
        
        
        
        setTimeout(() => {
            
            homeSection.classList.add('disable');
            shoppingSection.classList.add('disable');
            converterSection.classList.add('disable');
            
            WholesaleSection.classList.remove('disable');
            WholesaleSection.style.opacity = 1;
        }, 400)
    })
    
    
    // table
    
    let container     = document.querySelector('#container');
    let shoppingTable = document.querySelector('#shopping-table');
    let tbody         = document.querySelector('#table-body');
   
    // prueva
    container.addEventListener('click', (e)=>{
       if(e.target && e.target.classList.contains('num') && e.target.tagName === 'DIV'
       && tbody.childElementCount < 8 && e.target.innerText != ''){
           
          let valuesOfDivs = e.target.innerText;
          let dataName = e.target.dataset;
          let objName =Object.values(dataName);
          console.log(objName[0])
          let allTd = document.getElementsByClassName('obj-receptor')
          
          setTimeout(() => {
              const addRow = `
            <tr class='test'>
                <td class='td-name-products'>${objName}</td>
                <td class='obj-receptor fade-in sum-in-shopping'>${valuesOfDivs}</tb>
            </tr>        
          `;
          
          tbody.innerHTML += addRow;
          
            for(let i = 0, length = allTd.length; i < length; i++){

                allTd[i].id = 'obj-' + (i + 1);
                //   console.log(allTd[i].id)
            }
          }, 150)
        //   console.log(e.target)
       }
       
    });
    
    // Calc Button i have to fix this in the future
    
    const calcBtn = document.querySelector('#calculate');
    const TOTAL   = document.querySelector('#total');
    
    
    
    calcBtn.addEventListener('click', (e)=>{
        let priceNodes = Array.from(tbody.querySelectorAll('.sum-in-shopping'));
        let producNameNodes = Array.from(tbody.querySelectorAll('.td-name-products'))
        let stringsOfprices = [];
        let stringsOfProductNames = [];
      
        if(TOTAL.innerText !== '0'){
         
            for(let i = 0; i < priceNodes.length; i++){
                stringsOfprices.push(new ObjHistory(producNameNodes[i].innerText, priceNodes[i].innerText))
            }
            
            let value = JSON.stringify(stringsOfprices)
            
            localStorage.setItem(`sells-${uniqueID()}` , value);
            console.log(localStorage)
            
            const notification = document.getElementById('notification-of-saved');
            
            notification.classList.add('from-bottom-to-top')
            
            setTimeout(() => notification.classList.remove('from-bottom-to-top'), 1500)
        }
    });
    
    const obsShoppingTable = new MutationObserver(entries => {
      
      let receptor = TOTAL;
      
      if(tbody.childElementCount != 0 && tbody.childElementCount < 2){
          
          const firstEl = tbody.querySelector('.sum-in-shopping').innerText;
          
          receptor.innerText = `${firstEl} $`
      }
      
      if(tbody.childElementCount >= 2){
          
          let acc = 0;
          
          let convetToArr = Array.from(tbody.querySelectorAll('.sum-in-shopping'));
         
          let arrOfStr = convetToArr.map(strVal => parseFloat(strVal.innerText));
          
          for(let i = 0; i < arrOfStr.length; i++){
              acc += arrOfStr[i]
          }
          
          receptor.innerText = `${acc.toFixed(2)} $`
      }
  });
  
  obsShoppingTable.observe(tbody, {childList: true});
  
  
    // clear Button
    
    function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

    const c = document.querySelector('#clear');
   
    c.addEventListener('click', ()=>{
        
        let rows = tbody.querySelector('tr')
       
        let children = tbody.childNodes;
        
        let arr = Array.prototype.slice.call(children);
        
         let test = arr.filter(elem => elem.classList == "test");
         let fixedArr = test.map(tr => {
             tr.classList.add('fade-out');
             tr.style.opacity = 0;
             shoppingTable.style.height = 0;
         });

        setTimeout(function(){
          removeAllChildNodes(tbody)
          TOTAL.innerText = '0'
        }, 300);
    })
    
       // Hover effect over cells
        
    const handleOnMouseMove = e => {
        const { currentTarget: target} = e;
        
        const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
        
        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
    }
        
    for(const card of document.querySelectorAll('.card')){
        card.onmousemove = e => handleOnMouseMove(e);
    }
    // console.log(handleOnMouseMove)
    // console.log(rect)
    // console.log()
    
    // how do I know the price in ml?
    
    const priceInMl = (CU, ml) => {
        
        let divided = CU / 1000;
        let realPrice = divided * ml;
        
        return realPrice.toFixed(2)
    }
    
    // console.log(priceInMl(24, 360))
    
    // What can i buy with X amount of money?
    
    const priceToMl = (money, priceOfUnid) => {
        
        const ml = 1000 
        const multiplied = money * ml;
        const result = multiplied / priceOfUnid;
        
        return result.toFixed(0)
    }
    
    // console.log(priceToMl(3, 24))
    
    // Events for btn in Convert converter Section
    
    const btnOne = document.querySelector('#calc-how-much-for');
    const btnTwo = document.querySelector('#calc-ml-to-x');
    const fakeBorder = document.querySelector('.fake-border-popup');
    const fakeBorderTwo = document.querySelector('.fake-border-popup-2')
    const popUp1 = document.querySelector('#pop-1');
    const popUp2 = document.querySelector('#pop-2');
    
    
    btnOne.addEventListener('click', () => {
        
        let xQuantity = inputsInConvertSection.inputOne.value;
        parseFloat(xQuantity);
        
        let xUnit     = inputsInConvertSection.inputTwo.value;
        parseFloat(xUnit);
        
        let resulOne = priceToMl(xQuantity, xUnit);
        
        const popParagraph1 = document.querySelector('#p-in-pop-1')
        
        const str_xQuantity = xQuantity.toString();
        
        const deco_xQuantity = `<span class="text-decoration animated-bg bold">${str_xQuantity}</span>`;
        const deco_resulOne  = `<span class="text-decoration animated-bg bold">${resulOne}</span>`;
        
        if (xQuantity != '') {
            popParagraph1.innerHTML = `Con ${deco_xQuantity}Bs Te Alcanza para ${deco_resulOne}ml`;
            
            fakeBorder.classList.remove('disable');
            popUp1.classList.remove('disable');
        }
    });
    
     const okBtn = document.querySelector('#ok-btn-1')
     const okBtn2 = document.querySelector('#ok-btn-2')
    
    okBtn.addEventListener('click', () => {
        fakeBorder.classList.add('disable');
        popUp1.classList.add('disable')
    })
    
    okBtn2.addEventListener('click', () => {
        fakeBorderTwo.classList.add('disable');
        popUp2.classList.add('disable')
    })
    
    btnTwo.addEventListener('click', () => {
        
        let xUnit = inputsInConvertSection.inputThree.value;
        parseFloat(xUnit);
        
        let xMl     = inputsInConvertSection.inputFour.value;
        parseFloat(xMl);
        
        let resulTwo = priceInMl(xUnit, xMl);
        
        const popParagraph2 = document.querySelector('#p-in-pop-2')
        
        const str_xMl = xMl.toString();
        
        const deco_xMl = `<span class="text-decoration animated-bg bold">${str_xMl}</span>`;
        const deco_resulTwo  = `<span class="text-decoration animated-bg bold">${resulTwo}</span>`;
        
        if (xMl != '') {
            popParagraph2.innerHTML = `${deco_xMl}ml cuesta ${deco_resulTwo}Bs`;
            
            fakeBorderTwo.classList.remove('disable');
            popUp2.classList.remove('disable');
        }
    });
    
    
    // Select a discount
    
    const parentOfDiscounts = document.getElementById('wrapper-discount');
    
    parentOfDiscounts.addEventListener('click', e => {
       
       let nodes = parentOfDiscounts.querySelectorAll('.discounts');
       
       nodes.forEach(elem => {
           if(elem.classList.contains('selected'))
           elem.classList.remove('selected')
       })
       
       e.target.classList.add('selected');
   });
    
  // Billing
  
  const addBtn = document.getElementById('add-to-table');
  const tbodyBill = document.getElementById('tbody-bill');
  
  addBtn.addEventListener('click', e => {
      
      const selectProd = document.getElementById('select-product-wholesale');
      let valStr = selectProd.value;
      let val = parseFloat(valStr)
      
      const productName = selectProd.options[selectProd.selectedIndex].innerText;
      
      const valueTwo = whichIsSelected(parentOfDiscounts)
      
      const Quan = document.getElementById('quantity').value;
      parseFloat(Quan);
      
      let newTr =
        `<tr>
            <td>${Quan} Lts</td>
            <td>${productName}</td>
            <td class='sum-in-wholesale'>${multi(val, Quan)}</td>
        </tr>`
        
        if(tbodyBill.childElementCount < 8 && document.getElementById('quantity').value != ''){
            tbodyBill.innerHTML += newTr
        }
  });
  
  function whichIsSelected(collect){
      
      let SelectedDisc = collect.querySelector('.selected').innerText;
      
      return parseFloat(SelectedDisc)
      
  }
  
  const obsChilds = new MutationObserver(entries => { console.log(entries)
      
      let receptor = document.getElementById('final-price');
      
      if(tbodyBill.childElementCount != 0 && tbodyBill.childElementCount < 2){
          const firstEl = document.querySelector('.sum-in-wholesale').innerText;
          receptor.innerText = `${firstEl} $`
      }
      
      if(tbodyBill.childElementCount >= 2){
          
          const selected = document.querySelector('.discounts.selected').innerText;
          const discount = parseFloat(selected);
          
          let acc = 0;
          
          let convetToArr = Array.from(tbodyBill.querySelectorAll('.sum-in-wholesale'));
         
          let arrOfStr = convetToArr.map(strVal => parseFloat(strVal.innerText));
          
          for(let i = 0; i < arrOfStr.length; i++){
              acc += arrOfStr[i]
          }
          
          receptor.innerText = `${((acc) - (acc * discount / 100)).toFixed(2)} $`
      }
  });
  
  obsChilds.observe(tbodyBill, {childList: true})
  
  // clear the Table 
  
    const clearWholesaleTbody = document.getElementById('clear-tbody');
    
    clearWholesaleTbody.addEventListener('click', e => {
       removeAllChildNodes(tbodyBill);
       let receptor = document.getElementById('final-price');
       receptor.innerText = '0';
    });
  
    function calcMytheValues(storage){
        let objKeys = Object.keys(storage)
        let objValues = Object.values(storage);
        
        let acc = []
        
        for(let i = 0; i < storage.length; i++){
            acc.push(JSON.parse(localStorage.getItem(objKeys[i], objValues[i])));
        }
        
        let mapValues = acc.map(elem => parseFloat(elem[0].value));
        
        let totalSum = mapValues.reduce((acc, curr,) => {
            return acc + curr
        }, 0);
        
        return totalSum
    }
    
//   calcMytheValues(localStorage)
  
  function LocalCreator(storage){
      
        let objKeys = Object.keys(storage)
        let objValues = Object.values(storage);
        
        let acc = [[]]
        
        for(let i = 0; i < storage.length; i++){
            acc[0].push(localStorage.getItem(objKeys[i], objValues[i]));
        }
    
        return acc
  }
  
    console.log(LocalCreator(localStorage))
  

  
//   const BLOB = new Blob(LocalCreator(localStorage), {type: 'text/plain;charset=UTF-8'});
//   const HREF_FOR_DOWNLOAD = URL.createObjectURL(BLOB);
//   console.log(HREF_FOR_DOWNLOAD)
  
//   function download(filename, text) {
//   var element = document.createElement('a');
//   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//   element.setAttribute('download', filename);

//   element.style.display = 'none';
//   document.body.appendChild(element);

//   element.click();

//   document.body.removeChild(element);
// }
  
//   const DOWNLOAD_ANCHOR = document.getElementById('download-anchor');
  
//   DOWNLOAD_ANCHOR.addEventListener('click', e => download('Ventas.txt', LocalCreator(localStorage)))
  
    
    NAVBAR.addEventListener('click', e => {
        
        let currentIcon = document.querySelector("[data-current-icon='active']");
            if(currentIcon){
                currentIcon.removeAttribute('data-current-icon')
            }
        if(e.target.tagName === 'A' || e.target.tagName === 'I'){
            e.target.closest('div').setAttribute('data-current-icon','active');
        }
    })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    