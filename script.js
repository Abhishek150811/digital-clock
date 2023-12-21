function timechange() {
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    // if(active == 'london'){
    //     if(minutes - 30 < 0){
    //         minutes = minutes + 30 ; 
    //         hours = hours + 1 ; 
    //     }
    //     else{
    //         minutes = minutes - 30 ;
    //     }
    //     hours = hours - 5 ; 
    // }
    // else if(active == 'washington' || active == 'ottawa'){
    //     if(minutes - 30 < 0){
    //         minutes = minutes + 30 ; 
    //         hours = hours + 1 ; 
    //     }
    //     else{
    //         minutes = minutes - 30 ; 
    //     }
    //     hours = hours - 10 ; 
    // }
    // console.log(hours, minutes, seconds);
    document.getElementsByClassName('hour')[0].innerHTML = hours;
    document.getElementsByClassName('min')[0].innerHTML = minutes;
    document.getElementsByClassName('sec')[0].innerHTML = seconds;
}

function main() {
    setInterval(timechange, 1000);

    function func(event) {
        active = this.id;
        console.log(active );
        delhi.className = '';
        ottawa.className = '';
        washington.className = '';
        london.className = '';
        this.className = 'active'
    }
    const delhi = document.getElementById('new-delhi');
    const ottawa = document.getElementById('ottawa');
    const washington = document.getElementById('washington');
    const london = document.getElementById('london');
    var active = 'new-delhi';

    delhi.addEventListener('click' , func) ;
    ottawa.addEventListener('click' , func) ;
    washington.addEventListener('click' , func) ;
    london.addEventListener('click' , func) ;
    // delhi.onclick = func;
    // ottawa.onclick = func;
    // washington.onclick = func;
    // london.onclick = func;

}
main();