var btn = document.getElementById("btn");
var aa = document.getElementById("aa");
var btnlist = document.getElementById("btnlist");

btn.addEventListener("click", function() {

console.log("I said, don't touch me.");


//alert("Hey ! I don't consent. Don't touch me like that");


/*fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(js => console.log(js))réponse asyncrhone, prend du temps*/

  display(); 


  async function display() {
    const responseJson = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //async .. await => indication sur la prise de temps
    //comme .then

    //response.Json.json converti en js
    const responseJS = await responseJson.json();
    console.log(responseJS);

    
    aa.innerHTML = responseJS.title;
 
    

  };
});

btnlist.addEventListener("click", function() {


  
displayList();
  

 });


 async function displayList() {
    const responseJson = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseJS = await responseJson.json();


  

   //responseJS.forEach(i => console.log(Array(i)));


   responseJS.forEach((i) => {
 
    //aa.innerHTML += i.title;
            aa.innerHTML += `<div>
            <p>${i.title}</p>
            <p>${i.body}<p/>
            </div>
            `;



    });


   }




   
