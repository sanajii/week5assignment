/*function uppercaseFirstLetter(mystring)
{

    let firstLetter =mystring.slice(0,1).toUpperCase();
    
    console.log(mystring);
    console.log(mystring.slice(0,1));
     console.log(firstLetter);*/
  /*  let uppercaseFirstLetter= firstLetter.toUpperCase();
    console.log(uppercaseFirstLetter);*/

    /*let secondPart=mystring.slice(1,mystring.length);

    let result =firstLetter + secondPart;
     
console.log(result);
console.log("-----");

return result;

}


console.log(uppercaseFirstLetter("sana")=="Sana");
console.log(uppercaseFirstLetter("munir")=="munir");*/



const button = document.createElement("button");
document.body.appendChild(button);
button.innerText="Add to cart";
button.style ="width:100px; background-color:black; height:50px; color:white;"

function onclick ()
  {
    console.log("second");
    /*button.style ="width:100px; background-color:green; height:50px; color:white;"*/

/*button.className= "clicked-button";*/
  }
  button.addEventListener("click",onclick);
