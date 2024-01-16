

let container1 = document.querySelector('.container1');

let div1;


function divBox1(num) {
    let div2 = document.createElement('div');
    for (let i = 0; i < num; i++) {
        div1 = document.createElement('div');
        div1.textContent = "";
        div2.append(div1);
        div1.classList.add("mys"); 
    }


    div2.classList.add("mystyle");
    container1.append(div2);


}
// container > div2>div1 div1 div1 div1 div1 
let prevSet = false;
const bt1 = document.querySelector('#btt1');
bt1.addEventListener('click', () => {
    if (prevSet) {
        container1.innerHTML = "";
    }
    let size = prompt('What size do you want?');
    loopBox(parseInt(size));

    prevSet = true;
}
);


function loopBox(num) {
    for (let i = 0; i < num; i++) {
        divBox1(num);


    }
    const cc = document.querySelectorAll('.mys');
    cc.forEach(x => {

        x.addEventListener('mouseover', () => {
            if (clicked) {
                x.style.backgroundColor = "black"; // custom color button
            } else {


                x.style.backgroundColor = randomm();
            }
        });

    });


}

function randomm() {
    let numy = Math.floor(Math.random() * 3);
    switch (numy) {
        case 0:
            return "green";
        case 1:
            return "red";
        case 2:
            return "blue";
        case 3:
            return "yellow";

        //more colors to be added here;

    }

}
let clicked = false;
const bttt = document.querySelector('#bttt');
bttt.addEventListener('click', () => {
    clicked = true;

});







