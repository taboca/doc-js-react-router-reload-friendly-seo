# doc-js-react-router-reload-friendly-seo

## Introduction

This project was created, first, with [react-create-app](https://github.com/facebook/create-react-app).

## How to run

First, generate the React project, so you have files to be served from the ./build directory:

```
npm run build
```

Execute the express-based server:

```
npm run server
```

## Testing routing from clicking a Link

```
localhost:8080
```

* Click the Link - notice it should load another page/component

## Testing sharing the link

* Copy and "/page" link to your clipboard and open in another browser window

Notice that the above works because of the statically defined handler in the server.js:

```
.
.
.

app.get('/page', function (req, res, next) {
  var options = {
    root: __dirname + '/build/',
  };

  var fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

.
.
.

```

## SEO challenge — moving forward

Now the challenge is to serve something to a simple browser, say a crawler; say one that does not want to render React JavaScript. 

To just get and serve the html file, as indicated in the above function, does not help; because the file that it generated in the build directory does not bring any content relative to the path, right out of the box (initial fetch). The actuall initial file is simple more like the following dump:

```
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>React App</title>
    <link href="/static/css/main.c17080f1.css" rel="stylesheet">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
    </div>
    <script type="text/javascript" src="/static/js/main.f95bdb9c.js"></script>
  </body>
</html>
```

In the system being used with react-create-app, the static file (above main.f95bdb9c.js and main.c17080f1.css) is dynamically created in build stage (npm run build). Therefore, if you attempt to change the content of the HTML, say to include a chunk of markup for a crawler, you would need to be able to be compatible with the above making sure you are distributing the most up to date files.
