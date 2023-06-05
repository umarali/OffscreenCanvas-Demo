# OffscreenCanvas Demo

This project demonstrates the use of `OffscreenCanvas` to maintain animation when the browser tab is inactive.

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
