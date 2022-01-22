# node_websocket_demo
demo of using the ws node package

websockets facts:

- websockets allows for 2-way event driven communication. So if you have a client+server setup, then websockets allows for server to do push notifications to the client. Hence websockets are often used for creating online chat apps. 

- it works on top of http. 




## steps

```
cd server
npm init -y
npm install ws
touch index.js

```

write the code in index.js and index.html


To access this index.html file from the browser, you need to use enter "file:///", e.g.

```
file:///Users/sherchowdhury/github/node_websocket_demo/server/index.html
```

https://localhost:8082 won't work until you implement a webserver using the the express nodejs package. 



## Reference

https://www.youtube.com/watch?v=FduLSXEHLng
https://www.npmjs.com/package/ws