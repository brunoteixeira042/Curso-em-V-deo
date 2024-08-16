

function contador() {
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let salto = document.getElementById('salto')
let contando = document.getElementById('contando')
    if (inicio.value.length == 0  || fim.value.length == 0 || salto.value.length ==0 ) {
        alert("Faltam Dados")
    }else{
        contando.innerHTML ="Contado: "
      let i = Number(inicio.value)
      let f = Number(fim.value)
       let s = Number(salto.value)
       if(s==0){
        alert("Considerando passo a partir do 1")
        s=1
        for( i; i <= f; i+= s)
            contando.innerHTML +=` ${i}`
       }
       if(i< f){
        for( i; i <= f; i+= s)
            contando.innerHTML +=` ${i}`
       }else if(i>f)
         for( i; i >= f; i-= s)
            contando.innerHTML +=` ${i}`       
    }

}