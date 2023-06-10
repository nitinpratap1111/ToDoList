let form = document.getElementById("addForm");
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")
console.log(filter)
//console.log(itemList)
form.addEventListener("submit" ,function(e){
    e.preventDefault()
    let item = document.getElementById("item").value
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    li.appendChild(document.createTextNode(item))
    li.appendChild(btn)
    
    
    
    btn.className="btn btn-danger btn-sm float-right delete"
    
    li.className="list-group-item"
    itemList.appendChild(li)
    document.getElementById("item").value=" "
    
    //console.log(li)

})

itemList.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")) {
        if(confirm("are you sure to delete this item")){
            itemList.removeChild(e.target.parentElement)
        }
    }
    else {alert("bhai kyo time pass kr rha")}
})

filter.addEventListener("keyup",function(e){
    let value = e.target.value.toLowerCase()
    let li = document.getElementsByTagName("li")
    Array.from(li).forEach(function(item){
        if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
            item.style.display = "block"

        }
        else {
            item.style.display = "none"
        }
    })
    
})
