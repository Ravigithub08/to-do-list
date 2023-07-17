var list=document.getElementsByTagName('LI');
for(var i=0; i<list.length;i++){
    var span =document.createElement('SPAN');
    var text=document.createTextNode('\u00d7');

    span.className='close';
    span.appendChild(text);

    list[i].appendChild(span);

}
var close=document.getElementsByClassName('close');
for(var i=0;i<close.length;i++){

    close[i].onclick = function(){
        var div=this.parentElement;
        div.style.display='none';

    }
}

var ul= document.querySelector('ul');

ul.addEventListener('click',function(e){
    e.target.classList.toggle('checked');

})


function addelement(){

    var input=document.getElementById('in').value;
    var ul=document.getElementById('myul');

    var li=document.createElement('LI');
    var t=document.createTextNode(input);
    li.appendChild(t);

    var span =document.createElement('SPAN');
    var text=document.createTextNode('\u00d7');

    span.className='close';
    span.appendChild(text);
    if(input == ''){
        alert("Type something");
    }
    else{
    li.appendChild(span);
    ul.appendChild(li);
    document.getElementById('in').value='';
    }

    var close=document.getElementsByClassName('close');
    for(var i=0;i<close.length;i++){

    close[i].onclick = function(){
        var div=this.parentElement;
        div.style.display='none';

    }
}

}