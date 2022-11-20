import {amazonbtn,amexbtn,walmartbtn,applebtn,nameP,emailP,inputValue,numberP} from "./consts.js";
import Item from "./item.js";
function clickFn(btn){
    btn.addEventListener('click',()=>{
        fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json')
        .then(res => res.json())
        .then(data =>{
            const filteredArr = data.filter((el) => el.name === btn.id)
            filteredArr.forEach((el)=>{
                const item = new Item(el.id,el.name,el.email,el.boxes)
                nameP.innerHTML = `<h2>${item.name}</h2>`;
                emailP.innerText = item.email;
                inputValue.innerText = item.boxes;
                numberP.innerHTML =`<h2>?</h2>`;
    
                
            })
        })
        .catch(err =>{
            console.log(err);
        })
    })
}
clickFn(amazonbtn);
clickFn(amexbtn);
clickFn(walmartbtn);
clickFn(applebtn);


















