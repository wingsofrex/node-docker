* This a sample Node.js Application on DOCKER "

1. DOCKER BUILD
docker build -t node-docker-hello .

2. DOCKER RUN
docker run -p 8000:8000 node-docker-hello

3. Run the app
curl http://localhost:8000

You should be getting the following output:

StatusCode        : 200
StatusDescription : OK
Content           : Hello World from Node.js in Docker!
                    
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 36
                    Content-Type: text/plain
                    Date: Wed, 12 Aug 2026 04:06:01 GMT
                    
                    Hello World from Node.js in Docker!
                    
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 36], [Content-Type, text/plain]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 36
