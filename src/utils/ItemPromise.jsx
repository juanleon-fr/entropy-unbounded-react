const alwaysTrue = true;


let Delay = (task,time) => {
    return new Promise((resolve, reject) => {
        if (alwaysTrue) {
            setTimeout(() => {
                resolve(task)
            }, time);
        }
        else {
            reject("error")
        }

    })
}

export default Delay



