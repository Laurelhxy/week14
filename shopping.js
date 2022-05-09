"use strict";

function checkBrowser(){
    if('localStorage' in window && window ['localStorage']!==null){
console.log("local storage works")
    return true

}else{
    return false
    
}

}
function saveItem(){
    let name=document.getElementById("name").value;
    let data=document.getElementById("data").value;
    localStorage.setItem(name, data);
    showAll();
}
function removeItem(){
    let name=document.getElementById("name").value;
    document.getElementById("name").value=localStorage.removeItem(name);
    localStorage.removeItem(name);
    showAll();
}

function clearItem(){
    let name=document.getElementById("name").value;
    document.getElementById("name").value="";
    document.getElementById("data").value="";
    showAll();
}
function clearAll(){
    localStorage.clear();
    showAll();
}
function showAll(){
    if(checkBrowser()){
        let key="";
        let list="";
        let i
        for (i=0;i<localStorage.length;i++){
            key=localStorage.key(i);
            list+="<tr><td>"+key+"</td><td>"+localStorage.getItem(key)+"</td></tr>"
        }
        document.getElementById("list").innerHTML="<tr><th>Item</th><th>Quality</th></tr>"+list
    }
}
