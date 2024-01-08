const urls = [dataURL];

Promise.all(urls.map(url => d3.json(url))).then(run);

function run(data) {
   plot(data);
};

setInterval(Promise.all(urls.map(url => d3.json(url))).then(run), 500);