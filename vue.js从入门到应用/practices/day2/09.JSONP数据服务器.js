const http = require('http');
const server = http.createServer();
const urlMode = require('url');

server.on('request', (req, res)=>{
    // console.log(req, req.url);
    const url1 = req.url;
    console.log("url1:", url1);

    const result = urlMode.parse(url1);
    console.log("result:", result);

    // 经过 使用 url 模块的解析转换，并使用对象的解构赋值，把 需要的  pathname 和 query 属性解构出来
    // parseQueryString <boolean> 如果为 true，则 query 属性将始终设置为 querystring 模块的 parse() 方法返回的对象;
    //      如果为 false，则返回的网址对象上的 query 属性将是未解析、未解码的字符串。 默认值: false
    const {pathname:url, query} = urlMode.parse(req.url, true);
    console.log("{pathname:url, query} ", url, query, query.callback);

    const person = {name:'tosin', age:22, gender:'男'};

    if(url === '/api/getjsonp'){
        // 模板字符串
        // res.end(`success('jsonp test')`);
        // res.end(`${JSON.stringify(person)}`);

        // http://127.0.0.1:5500/practices/day2/07.%E6%A8%A1%E6%8B%9FJSONP.html getjsonp?callback=success:1 Uncaught ReferenceError: person is not defined
        // const str = `${query.callback}(person)`;
        const str = `${query.callback}(${JSON.stringify(person)})`;
        res.end(str);
    }else{
        res.end('404');
    }

    // res.end('ok');
});

server.listen(3000, ()=>{
    console.log("http://127.0.0.1:3000");
});