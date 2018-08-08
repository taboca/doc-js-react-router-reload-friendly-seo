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
