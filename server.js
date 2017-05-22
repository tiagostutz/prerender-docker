const prerender = require('prerender');

var server = prerender({
    workers: process.env.PRERENDER_NUM_WORKERS || 1,
    iterations: process.env.PRERENDER_NUM_ITERATIONS,
		logRequests: true
});


server.use(prerender.sendPrerenderHeader());
server.use(prerender.blacklist());
server.use(prerender.logger());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
// server.use(prerender.inMemoryHtmlCache());


server.start();
