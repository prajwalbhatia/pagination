var i=1;
    var k=1;
    var j =2;
    var page =document.getElementById("page");
    var addbtn =document.getElementById("addbtn");
    addbtn.addEventListener("click" , addhead);
    var imagearr = [];
    console.log(imagearr.length)
    var deletearr = [];
    var btn = [];
    function addhead(){
    var input = document.querySelector('input[type="file"]')
    var element = document.getElementById("elements");
    var divforimageandbutton = document.createElement("div");
    var divforimage = document.createElement("div");
    divforimage.className = "col-6 image "
    divforimage.id = "image"+ i
    

    divforimageandbutton.className = "row headingdiv" + k
    var delbutton  = document.createElement("button");
    delbutton.id= "delbtn" +i
    delbutton.className = "btn btn-danger md col-4 m-2 rounded"
    delbutton.style.height = "50px"
    delbutton.style.position = "relative"
    delbutton.style.cssFloat = "right"
    delbutton.innerText = "Delete"
    i++;
    var reader = new FileReader()
             reader.onload = function(){
                var s = 1
                var image = new Image()
                image.src = reader.result
                image.id = s
                image.style.height = "250px"
                image.style.width = "250px"
                image.style.margin = "30px 0px 30px 150px"
                
                divforimageandbutton.appendChild(divforimage);
                divforimage.appendChild(image);
                s++
             }
             reader.readAsDataURL(input.files[0])
    element.appendChild(divforimageandbutton);
    divforimageandbutton.appendChild(delbutton);
    imagearr.push(divforimage);
    console.log(imagearr.length)
    deletearr.push(delbutton);
    if(imagearr.length % 5 == 0)    
    {
     hidediv()
    }  
    function hidediv()
    {
  
        $('.headingdiv' + k).hide()
     var pagebtn = document.createElement("button")
     pagebtn.className = "btn btn-primary btn-md mt-4 mr-1"
     pagebtn.id = "pagebtn" + j 
     console.log(pagebtn.id.substr(7,7))
     pagebtn.innerHTML = btn.length +2
     page.appendChild(pagebtn)
     btn.push(pagebtn)
    j++
    k++
    }
for(var p = 1 ; p < 500 ;  p++ )   
{
 btntodel = $('#delbtn' + p).click(function(){
   var c =   document.getElementById("image" + this.id.substr(6,6))
   c.innerHTML = "Deleted"   
}
 )}

 for(var z = 1 ; z < 500 ;z++ )   
{
 pagebtn = $('#pagebtn' + z).click(function(){
   

    $("#elements").children().hide(); 
   $('.headingdiv' + this.id.substr(7,7)).show();

}
 )}
    }
