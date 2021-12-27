fetch("https://pokeapi.co/api/v2/pokemon/?limit=811").then(response => response.json()).then(data =>{
    console.log(data);
    data.results.forEach(element => {
        document.querySelector("#dex").innerHTML+=`<div id = ${element.name} class = "pokemon">${element.name}</div>`;
    });

    data.results.forEach(element => {
        document.getElementById(`${element.name}`).addEventListener("click", function(){
            fetch(`${element.url}`).then(response2 =>response2.json()).then(data2=>{
                document.getElementById("name").value = data2.name;
                document.getElementById("type").value = data2.types[0].type.name;
                document.getElementById("weight").value = data2.weight;
                document.getElementById("height").value = data2.height;
                document.getElementById("pic").setAttribute("src",data2.sprites.front_default);
            })
        })
    });
    
});