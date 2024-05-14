//selecting popup box popup overlay button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton= document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block",
    popupbox.style.display="block"
})

//selct cacel button
var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click" ,function(event){
   event.preventDefault()
   popupoverlay.style.display="none",
   popupbox.style.display="none"
})


//select container.add-book,book-title,book-author,book-short description-input

 container=document.querySelector(".container")
 addbook=document.getElementById("add-book")
 booktitleinput=document.getElementById("book-title-input")
 bookauthorinput=document.getElementById("book-author-input")
 bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</P>
        <button onClick="deletebook(event)">Cancel</button>`
    container.append(div)
})


function deletebook(event){
    event.target.parentElement.remove()
}
