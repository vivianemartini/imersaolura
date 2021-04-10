var listaPratos = ["https://m.media-amazon.com/images/M/MV5BMjE3MDQ2OTYyN15BMl5BanBnXkFtZTgwNjQ0Nzg0NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BMjI5NmJjY2MtNDFlZi00ZjZjLTk0ZjAtMjEyYjFkMTUwMzY4XkEyXkFqcGdeQXVyNjI4ODE4Mjk@._V1_UX182_CR0,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BZDUzNGJjNzItMWIzZC00ZTZiLThhNTAtNjA5NGNkNWRlYmY4XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_UY268_CR4,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BOTFiOGQ3MTEtZWIwNi00ZDkyLTlkYmYtMTAxOTQ2Y2Q4MDNhXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY268_CR4,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BNDY3MTc3NDM3NF5BMl5BanBnXkFtZTgwMjk0NjI5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",  
"https://m.media-amazon.com/images/M/MV5BZTU5YTllNzgtZjVjNS00ZWVlLWJhNGItZWJkYWYzMDU3MTJhXkEyXkFqcGdeQXVyNTEwMTQ1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BOTU1MzU4NDI0MV5BMl5BanBnXkFtZTgwMjk1ODA5OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",  
"https://m.media-amazon.com/images/M/MV5BMTU0NDQ4MTY1OF5BMl5BanBnXkFtZTcwMTMzMTgwOA@@._V1_UX182_CR0,0,182,268_AL_.jpg",  
"https://m.media-amazon.com/images/M/MV5BMTAwODYzNjYxMDVeQTJeQWpwZ15BbWU4MDQ1MzQ2NDYz._V1_UX182_CR0,0,182,268_AL_.jpg",  
"https://m.media-amazon.com/images/M/MV5BOWU2YjIwMTYtMmUyMi00ZmJkLWEzN2EtNjViZGQ1NDY0ZjdmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BYzkxZDExM2UtYWEzNi00MjczLWJhZGMtODMyZWZhY2UwYTI3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BNzdlMzI5OGEtNzNiNC00OTA5LTg2MGUtYmFkNmZmZjkxNWI5XkEyXkFqcGdeQXVyMjQzOTM1NTc@._V1_UY268_CR4,0,182,268_AL_.jpg"]


for (var i = 0; i < listaPratos.length; i++){
  document.write ("<img class='filmes' src=" + listaPratos[i] + ">");
}

//add

function addPrato() {
    var listaPratos = document.querySelector('#listaPratos')
    var Prato = document.querySelector('#myPrato')

    var pratoFav = Prato.value
        if(pratoFav.endsWith('.jpg')){
            listaPratos.innerHTML = listaPratos.innerHTML + `<img src="${pratoFav}">`

            document.getElementById('').disable = false
        } 
        else {
            alert('Seu link deve terminar em .jpg')
        }

}    

