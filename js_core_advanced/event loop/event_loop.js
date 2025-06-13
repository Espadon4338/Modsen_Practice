let count = 1;

const initialPromise = new Promise(resolve => {
    setTimeout(() => {
        console.log(count);
        count++;
        resolve();
    }, 1000);
});

let chain = initialPromise;
for (let i = 2; i <= 10; i++) {
    chain = chain.then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(count);
                count++;
                resolve();
            }, 1000);
        });
    });
}