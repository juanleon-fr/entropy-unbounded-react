let isok = true;


let desafio = (task) => {
    return new Promise((resolve, reject) => {
        if (isok) {
            setTimeout(() => {
                resolve(task)
            }, 2000);
        }
        else {
            reject("error")
        }

    })
}

export default desafio



