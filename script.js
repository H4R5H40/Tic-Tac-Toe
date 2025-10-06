let boxes =document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-b");
console.log(boxes);
const check1=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let i=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText!="X" && box.innerText!="O"){
            if(i%2==0){
                box.innerText ='X';
            }
            else{
                box.innerText ='O';
            }
            i++;
        }     
        winner();
        resetbutton.addEventListener("click",()=>{
            i=0;
        for(let j=0;j<9;j++){
            boxes[j].innerText='';
        }
    
    })
    })
})
function winner(){ 
    for(let pattern of check1){
        if(boxes[pattern[0]].innerText==boxes[pattern[1]].innerText&&boxes[pattern[1]].innerText==boxes[pattern[2]].innerText && boxes[pattern[0]].innerText!=""){
            if(boxes[pattern[1]].innerText=='X'){
                alert('WINNER IS X');
            }
        if(boxes[pattern[1]].innerText=='O'){
            alert('WINNER IS O');
        }
    }
    }
    let draw=0;
    for(let pattern=0;pattern<9;pattern++){
        console.log(boxes[pattern].innerText);
        if(boxes[pattern].innerText==''){
            draw=0;
            break;
        }
        else{
            draw=1;
        }
    }
    if(draw==1){alert("GAME DRAW");}
}