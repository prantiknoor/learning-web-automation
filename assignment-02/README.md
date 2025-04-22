# Assignment 02

The assignment is to run chromium in `docker` and remotely connect to the browser using `puppeteer`.

## Docker Setup

```
docker run -p 3000:3000 ghcr.io/browserless/chromium
```

It pulls the chromium docker image, runs it and gives remote connection over 3000 port.