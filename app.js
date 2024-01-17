

let container1 = document.querySelector('.container1');

let div1;
let div2;

function divBox1(num) {
    div2 = document.createElement('div');
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
    let count = 0;
    const cc = document.querySelectorAll('.mys');
    cc.forEach(x => {
        x.addEventListener('mouseover', () => {
            if (clicked || count >= 10) {
                x.style.backgroundColor = "black";
            } else {

                const darknessPercentage = 90 - (count*10);


                // const randomHue = Math.floor(Math.random() * 360); for any color 
                x.style.backgroundColor = `hsl(${randomm()}, 100%, ${darknessPercentage}%)`;

                count++;
            }
        });


    });
}

function randomm() {
    let numy = Math.floor(Math.random() * 3);
    switch (numy) {
        case 0:
            return 0;
        case 1:
            return 120;
        case 2:
            return 240;
        case 3:
            return 300;

        //more colors to be added here;

    }

}

let clicked = false;
const bttt = document.querySelector('#bttt');
bttt.addEventListener('click', () => {
    clicked = true;

});







