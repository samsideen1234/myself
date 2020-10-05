
/*


document.getElementById("button").addEventListener("click", play());




function play(){

    let xhr= new XMLHttpRequest();


    xhr.open("get", "data.json", true);

xhr.onload=function(){

    if(this.status==200){

     let results = this.responseText;

let finalResults = JSON.parse(results);


     console.log(finalResults);
        
        }
        

}

xhr.send();

}

//---------------------------------------------------------------------------------



document.getElementById("button").addEventListener("click", play());


function play(){


let xhr = new XMLHttpRequest();


xhr.open("get", "data.json", true);


xhr.onreadystatechange = function(){


if(this.readyState==4 && this.status==200){

document.getElementById("para").innerHTML = this.responseText;


}else if(this.status ==404){

    document.write("Not found");


}

}


xhr.send();
}




-------------------------------------------------------------------------------

document.getElementById("button").addEventListener("click", play());




function play(){

    let xhr= new XMLHttpRequest();

    var url = "https://learnwebcode.github.io/json-example/animals-1.json";


    xhr.open("get", url, true);

xhr.onload=function(){


    if(this.status==200){

let results = this.responseText;

document.write( JSON.parse(results)  )




        }
        

}

xhr.send();

}

*/


//-----------------------jqury part




    /*
------------------- load method jquery

  $("#para").load("sample.text", function(res,status,xhr){

if(status=="success"){

    alert("good to go");
    
}else if(status=="error"){


    alert("we are sorry");
}

  });
    -----------------------------get method jquery


 $.get("sample.text", function(data){

$("#para").html(data);




})


-------------- get json method jquery.

$.getJSON("https://learnwebcode.github.io/json-example/animals-1.json", function(data){


document.write(data);


})

----------------------- ajax method jqury

$.ajax({
    method: "get",
    url: "https://learnwebcode.github.io/json-example/animals-1.json",
    dataType: "json"

}).done(function(data){

    document.write(data);
})

*/

document.getElementById("submit").addEventListener("click", function(){


    alert("Your form has been successfully submitted");



})