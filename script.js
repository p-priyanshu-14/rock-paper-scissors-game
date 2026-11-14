let user =0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userp = document.querySelector('#user-score');
const compp = document.querySelector('#comp-score');

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const choiceid = choice.getAttribute("id");
        console.log(choiceid);
        playgame(choiceid);
    });

});

const compchoice = (() => {
    const option = ["rock", "paper", "scissors"];
    const rchoice = Math.floor(Math.random()*3);
    return option[rchoice];
});

const playgame = (choiceid) => {
    const compc = compchoice();
    if(choiceid === compc){
        draw();
    } else{
        let userwin = true;
        if(choiceid === "rock"){
            userwin = compc=== 'paper'? false : true;

        }else if(choiceid ==='scissors'){
            userwin = compc ==="paper"? true: false;
        }
        else{
            userwin= compc ==="rock" ? true : false;
        }
        showwin(userwin, choiceid, compc);
    }
}

const showwin = (userwin, choiceid,compc) => {
    if(userwin){
        console.log("you win!");
        msg.innerText = `You win! Your ${choiceid} beats ${compc}`;
        user++;
        userp.innerText = user;
        msg.style.backgroundColor = 'green';
    }
    else{
         console.log("you lose"); 
            msg.innerText=`You lose! ${compc} beats your ${choiceid}`;
            comp++;
            compp.innerText= comp;
            msg.style.backgroundColor = "red";
    }
};

const draw= () =>{
    console.log("game is draw");
    msg.innerText = "Game is draw\n Play again";
    msg.style.backgroundColor = 'aqua';
}