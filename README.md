# BabylonJs + Typescript + Webpack

Quick template for starting developing babylonJS with Typescript and using Webpack as bundler.
As a cool bonus this template also demonstrate how to setup https with webpacks dev server.

## Install and build

Install dependencies

    npm install

Run a local dev server:

    npm run build

Build development/production

    npm run build:[dev|prod]

## Installing certificates

It is quite simple to install local certificates and add them to your browser. This can be achived with `mkcert`. https://github.com/FiloSottile/mkcert

Start by installing `mkcert`. After the installation setup trust store and install it on your browsers. This requires browser restart.

    mkcert -install

create the certificates

    mkcert mydomain.dev localhost 127.0.0.1 ::1

This creates the certificates for the 4 domains and adds them to the current folder.

If you like to setup local hostnames for development. Edit the hosts and add a new hostname map to localhost:

    127.0.0.1   mydomain.dev

## Trouble shooting

Not allowed to use port 443.
On Linux:

    sudo setcap 'cap_net_bind_service=+ep' $(readlink -f $(which node))
