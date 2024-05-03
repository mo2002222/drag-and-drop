let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box'); 
let drage = null;


function addItem() {
    if (inp.value != '') {
        boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p>`
        inp.value = '';
    }
    dragItems();
    
}

// drag item
function dragItems() {
    let items =document.querySelectorAll(".item");
    items.forEach(item=>{
        item.addEventListener("dragstart",(e)=>{
            drage = item;
            item.style.opacity = '0.5';
            item.style.background= '#5751bb'
        })
        item.addEventListener("dragend",(e)=>{
            drage = null;
            item.style.opacity = '1';
            item.style.background= '#928cff'

    })
})
boxs.forEach(box=>{
    box.addEventListener('dragover',(e)=>{
        e.preventDefault();
        box.style.background = '#090'
        box.style.color = '#fff'
    });
    box.addEventListener('dragleave',(e)=>{
        box.style.background = '#fff'
        box.style.color = '#000'
    })
    box.addEventListener('drop',(e)=>{
        box.append(drage);
        box.style.background = '#fff'
        box.style.color = '#000'
    })
})

}   



