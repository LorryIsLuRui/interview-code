const multiPleRequest = (urls, n) => {
    const data = [];
    let len = urls.length;
    let index = 0;
    const request = url => new Promise((resolve, reject) => {
        const data = 123;
        resolve(data);
    });
    while (index < n) {
        request(urls[index])
        .then(result => {
            data.push(result);
            index++;
            len--;
        });
    }
    if (len) {
        return [...data, ...multiPleRequest(urls.splice(index), n)]
    }
    return data;
};