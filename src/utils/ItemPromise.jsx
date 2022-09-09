const alwaysTrue = true;


let Delay = (task) => {
    return new Promise((resolve, reject) => {
        if (alwaysTrue) {
            setTimeout(() => {
                resolve(task)
            }, 500);
        }
        else {
            reject("error")
        }

    })
}

export default Delay



