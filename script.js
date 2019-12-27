let add=document.querySelector('.add')
let section=document.querySelector('.section2')
let input=document.querySelector('.input')
let x=''
input.addEventListener('change',function(e){

     x=e.target.value;
console.log(x)
});


add.addEventListener('click',function(e) {

    let complete=document.createElement('button');
    complete.innerHTML="Complete";
    complete.className="complete";

    let Delete =document.createElement('button')
    Delete.innerHTML="Delete"
    Delete.className="Delete"
    
    
    let text=document.createElement('h1');
    text.innerHTML=x;
    text.className="item"
    
    let container =document.createElement('div')
    container.appendChild(complete)
    container.appendChild(Delete)
    container.appendChild(text)

    section.appendChild(container)
    container.className="container"
    input.value='';
    
  

Delete.addEventListener('click',function(e) {

console.log(Delete.parentElement)

Delete.parentElement.remove();

});

complete.addEventListener('click',function(e) {
if ( complete.innerHTML ==="Complete" ) {
    complete.innerHTML="Undo";
    text.className="item2";
}
else{  complete.innerHTML="Complete";
text.className="item";

}
 } ) ;

});
