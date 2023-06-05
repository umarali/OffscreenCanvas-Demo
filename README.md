# OffscreenCanvas Demo with Fallback

This project demonstrates the use of `OffscreenCanvas` to maintain animation when the browser tab is inactive, with a fallback for browsers that do not support `OffscreenCanvas`.

## Setup

1. Clone the repository:
    ```
    git clone https://github.com/yourusername/OffscreenCanvas-Demo.git
    ```
2. Navigate into the repository:
    ```
    cd OffscreenCanvas-Demo
    ```
3. If necessary, install http-server:
    ```
    npm install -g http-server
    ```
4. Run the server:
    ```
    http-server
    ```

Then, open `localhost:8080` in your browser to see the demo.

## How it works

This demo uses `OffscreenCanvas` to render a simple animation. The animation continues to run even when the browser tab is inactive. This is achieved by running the animation in a Web Worker, which allows it to continue running independently of the main browser thread.

If the browser does not support `OffscreenCanvas`, a fallback is used. In this case, the animation runs on the main thread and `worker-fallback.js` file is used to handle this case. This ensures that the animation can run in all browsers.

## Demo

![Demo Animation](https://i.ibb.co/nnsDLSd/demo.gif)

The above animation demonstrates how the project works. The animated box continues to move even when the browser tab is not active, thanks to `OffscreenCanvas`. If `OffscreenCanvas` is not supported by the browser, the fallback ensures the animation still runs.