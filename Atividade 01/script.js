function carregar(){
    let msg = document.getElementById('msg');
    let msgData = document.getElementById('msgData')
    let img = document.getElementById('img-foto');
    let data = new Date()
    let hora = String(data.getHours()).padStart(2,0)
    let minutos = String(data.getMinutes()).padStart(2,0)
    let segundos = String(data.getSeconds()).padStart(2,0)
    let dataDia = String(data.getDate()).padStart(2,'0')
    let dataMes = String(data.getMonth()+1).padStart(2,'0')
    let dataAno = String(data.getFullYear())
    msg.innerHTML = `${hora}:${minutos}:${segundos}`
    msgData.innerHTML = `${dataDia}/${dataMes}/${dataAno}` 
    if(hora>= 0 && hora<=12){
        //bom dia
            img.src="./img/fotomanha.jpg"
            document.body.style.backgroundColor = "#B1B6B2"
        }else if (hora>12 && hora<=18 ){
            //boa tarde
            img.src = './img/fototarde.jpg'
           document.body.style.backgroundColor = "#C37D49"
    
        }else{
            //boa noite
            img.src="./img/fotonoite.jpg"
             document.body.style.backgroundColor = "#2C2C2C"
        }
}
setInterval(carregar,1000)
