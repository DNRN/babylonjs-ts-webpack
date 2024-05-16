# BabylonJs + Typescript + Webpack

Quick template for starting developing babylonJS with Typescript and using Webpack as bundler.
As a cool bonus this template also demonstrate how to setup https with webpacks dev server.

## Install and build

Install dependencies

    npm install

Run a local dev server:

    npm start

Build

    npm run build

### Environment variables

Environment variables can be passed and used as normal enviroment variables as in node.js. For instance NODE_ENV is default sat to 'development' but can be changed to production by setting the environment:

```
export NODE_ENV=production
```

This is done in the docker file see below.

## Project Overview

-   Entry File: `index.ts`
-   Renderer: `renderer.ts` - Creates a BabylonJS engine and scene.

The project includes two scenes:

1. The famous playground scene.
2. An example of loading a GLTF model with a skybox asynchronously.

## Docker

To create a Docker image:

    docker build -t html/babylonjs .

To run the Docker container in detached mode (-d) and forward to port 8080 (-p) on the host:

    docker run -d -p 8080:80 html/babylonjs

Open a browser and navigate to http://localhost:8080/

## Installing certificates

You can easily install local certificates and add them to your browser using `mkcert`. For more details, visit the mkcert (GitHub page)[https://github.com/FiloSottile/mkcert].

### Steps to Install Certificates

1. Install `mkcert`:

    ```
    mkcert -install
    ```

2. Create the certificates:

    ```
    mkcert mydomain.dev localhost 127.0.0.1 ::1
    ```

    This creates certificates for the specified domains and adds them to the current folder.

3. To set up local hostnames for development, edit your hosts file and add a new hostname mapped to localhost:

    ```
    127.0.0.1 mydomain.dev
    ```

    This step may require administrative privileges.

## Trouble shooting

### Not Allowed to Use Port 443 on Linux

If you encounter permission issues when using port 443, run the following command:

    sudo setcap 'cap_net_bind_service=+ep' $(readlink -f $(which node))
