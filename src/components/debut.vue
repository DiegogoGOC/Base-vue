<template>
    <header>
        <a id="remonte" href="#"><img src="../img/rmt.png" alt=""></a>
        <img id="band" src="../img/bandrole.png" alt="">
        <nav>
        <a href="./index.html"  title="Acceuille">
            <img src="../img/qui2.png" alt="">
        </a>
            <a href="./qui.html"  title="QUI suis-je ?">
                <img src="../img/qui2.png" alt="">
            </a>
            <a href="./projet.html"  title="projet">
                <img src="../img/projet2.png" alt="">
            </a>
            <a href="./phone.html" title="contact">
            <img src="../img/appel-telephonique.png" alt="">
        </a>
        </nav>
    <hr/>
  </header>
</template>

<style>
body{
    background-color: #5699a0;
    width: 1000px;
    margin:auto;
    text-align: center;
    color: white;
    font-family:Roboto, light ;
    display: flexbox;
    flex-direction: column;
}
#remonte img{
    width: 60px;
}
#band{
    width: 1000px;
    height: 200px;
}
nav img {
    width: 60px;
}
#remonte{
    position: fixed;
    left: 1350px;
}
nav{
    display: flex;
    justify-content: space-between;
}
</style>