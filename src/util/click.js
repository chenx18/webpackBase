function handleClick(){
    const element = document.createElement('div');

    let sum = 0;
    for(let i=1;i<=100;i++){
        sum +=i;
    }

    sum = 0;
    for(let i=1;i<=100;i++){
        sum +=i;
    }
    sum = 0;
    for(let i=1;i<=100;i++){
        sum +=i;
    }
    sum = 0;
    for(let i=1;i<=100;i++){
        sum +=i;
    }
    sum = 0;
    for(let i=1;i<=100;i++){
        sum +=i;
    }
    sum = 0;
    for(let i=1;i<=100;i++){
        sum +=i;
    }
    sum = 0;
    for(let i=1;i<=100;i++){
        sum +=i;
    }
    sum = 0;
    for(let i=1;i<=100;i++){
        sum +=i;
    }

    element.innerHTML =  `0~100的和为${sum}`;
    document.body.appendChild(element)
}

export default handleClick