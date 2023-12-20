function func(){
    d = new Date() ;
    hours = d.getHours() ;
    minutes = d.getMinutes() ;
    seconds = d.getSeconds() ;
    document.getElementsByClassName('hour')[0].innerHTML = hours ; 
    document.getElementsByClassName('min')[0].innerHTML = minutes ; 
    document.getElementsByClassName('sec')[0].innerHTML = seconds ; 
}

function main(){
    setInterval(func , 1000) ;
}
main() ;