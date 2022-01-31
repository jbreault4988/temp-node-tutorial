const http = require('http'); //http module; use to create servers.

const server = http.createServer((req, res) => { //first parameter (req) represents incoming request, second parameter (res) represents the response the server sends back.
    //console.log(req); //to log the request here, go to server page (localhost:3222) and refresh the page (this sends a request to the page, and then we get out log to work.)
    
    //using this setup (if/else if); there are errors if you use multiple if statements (check github page for info)
    if(req.url === '/') {
        res.end('Welcome to the home page.')
    } else if(req.url === '/about') {
        res.end("Here is the page's short history.")
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <a href="/">back to home page</a>
        `)//forward slash in <a> tag navs back to home page.
    } //can also pass in HTML directly to server. this HTML displays page error if we are not at home page or about page.


    //just dealing with server responses; using write method and end method to end response.
    //res.write('Hello, this server is currently working');
    //res.end(); 
})

server.listen(3222); //number represents the port number.