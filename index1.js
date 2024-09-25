let btn = document.getElementById("btn");
let input = document.getElementById("input");
let main = document.getElementById("main");

btn.addEventListener("click", function() {
    // main.style.backgroundColor = "white";
    // main.style.minHeight = "30vh";
    // main.style.boxShadow ="7px 7px 20px blue"
    let check = document.createElement('input');
    let label = document.createElement('LABEL');
    label.innerHTML = "click here if completed";
    label.style.color = "white"
    check.id = "check";
    check.setAttribute('type','checkbox');
    main.appendChild(check);
    main.appendChild(label);
    let div = document.createElement('div');
    div.id = "div"
    div.style.margin ="4vh";
    let div1 = document.createElement("div");
    div1.id = "ctn";
    div1.innerText = input.value;
    
    let button = document.createElement("button");
    button.className = "btn btn-success";
    button.innerText = "Delete";
    button.style.marginLeft = '5vw';
    div.appendChild(button);
    button.addEventListener("click", function () {
        div.remove();
        check.remove();
        label.remove();
       
    })
    let button1 = document.createElement('button');
    button1.className = "btn btn-success";
    button1.innerText = "edit";
    button1.style.marginLeft = '5vw';
    div.appendChild(button1);
    button1.addEventListener("click",function(){
        div1.contentEditable=true;
    })
    check.addEventListener('click',function (){
        div1.innerHTML = `<del>${input.value}</del>`;
    })
    div.appendChild(div1);
    main.appendChild(div);
})