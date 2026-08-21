* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
    background-color: #d1a8ff;

}

header {
  background-color: #3c0074;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: #d8d1df
}
nav {
  float: left;
  width: 10%;
  height: 1000px; 
  background: #d3adff;
  padding: 20px;
}
nav ul {
  list-style-type: none;
  padding: 0;
}

article {
  float: left;
  padding: 20px;
  width: 70%;
  background-color: #ead1ff;
  height: 300px; 
}
section::after {
  content: "";
  display: table;
  clear: both;
}
footer {
  background-color: #3c0074;
  padding: 10px;
  text-align: center;
  color: white;
}
@media (max-width: 600px) {
  nav, article {
    width: 100%;
    height: auto;
  }
}

.banner {
    background-color: #4B0082;
    height: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner h1 {
    color: white;
    font-size: 40px;
    font-family:'Playfair Display', serif;
}

.logo {
    position: absolute;
    left: 20px; 
    width: 150px;
}

.titulo {
  font-family: 'Playfair Display', serif;
}

section {
  display: flex;
}

nav {
  width: 20%;
  background: #d3adff;
  padding: 20px;
}

article {
  width: 80%;
  background-color: #ead1ff;
  padding: 30px;
}
article div {
  background: #f3e8ff;
  padding: 20px;
  border-radius: 10px;
}
.card img{
    border-radius: 300px;
    width: 225px;
    height: 200px;
     box-shadow: 3px 3px 3px purple;
}
.card{
    background-color: #c08aff;
    height: 380px;
    width: 350px;
    border-radius: 50px;
    justify-content: center;
    display: block;
    text-align: center;
    margin-left: 20px;
    margin-top: 15px;
     box-shadow: 3px 3px 3px purple;
}
.preco{
    font-size: 18px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.botao {
    width: 150px;
    height: 30px;
    border-radius: 5px;
    border: none;
    box-shadow: 3px 3px 3px purple;
}

.container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}