var ddContent = document.querySelector('.dropdown-btn')
var ddItem = document.querySelector('.dropdown-content');

function getDropdownContentRef(){
    console.log(ddContent) 
    ddContent.addEventListener('click', ()=>{
        ddContent.classList.toggle('show');
        ddItem.classList.toggle('show');
    })   
}

getDropdownContentRef();

function getDropDownItem(item){
    ddContent.innerHTML = item
    ddItem.classList.toggle('show');
}