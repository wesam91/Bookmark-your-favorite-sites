
var myBtn=document.querySelector(".myBtn");
var bookContainer;
var siteName=document.querySelector("#siteName");
var siteUrl=document.querySelector("#siteUrl");
 

if(localStorage.getItem("bookmark")==null){
    bookContainer=[];
    
}
else{
    bookContainer=JSON.parse(localStorage.getItem("bookmark"));
}

function entered(){
    if(siteName.value&&siteUrl.value){
        return(true)
    }
    else{return(false);}
}
function display(){
    
    var output="";
    
    for(var i=0;i<bookContainer.length;i++){
    output+= "<div class='row forBack m-3 p-4'><div class='col-md-4'> <div class='out'>"+  bookContainer[i].name +"</div> </div><div class='col-md-8'><div class='buttons'><a class='mx-3 visit btn btn-primary' href='"+bookContainer[i].url+"'>visit</a><a class=' visit btn btn-danger'>Delete</a></div></div></div>"
    output+= "<div class='row forBack m-3 p-4'><div class='col-md-4'> <div class='out'>"+  bookContainer[i].name +"</div> </div><div class='col-md-8'><div class='buttons'><a class='mx-3 visit btn btn-primary' target='_blank' href='"+bookContainer[i].url+"'>visit</a><a class='btn btn-danger' onclick='deleteBookmark("+i+")'>Delete</a></div></div></div>"
        
    }
    document.querySelector(".output").innerHTML=output;
};
function addBookmark(){
    
    var bookmark={name:siteName.value,url:siteUrl.value};
    
    bookContainer.push(bookmark);
 
};
function deleteBookmark(id){
    bookContainer.splice(id,1);
    localStorage.setItem("bookmark",JSON.stringify(bookContainer));
    display();
}
function checkUrl(){
  var regex = /^[a-zA-z][\.\][a-zA-z]{3,20}[\.\][a-zA-z]{2,8}$/;
    
  if(!regex.test(siteUrl.value)) {
    
    return false;
      
  } else {
     
    return true;
     
  }
}



function clearForm(){
    var inputs=document.getElementsByClassName("form-control");
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}

myBtn.addEventListener("click",function(){
    if(entered()){
        if(checkUrl()){
          addBookmark();
           display();
          clearForm();}
        else{
           alert("Please enter valid URL."); 
             }}
        
    else{
        alert("enter site name and url")
    }
     
});