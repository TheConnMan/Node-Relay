# Node Relay
Lightweight, file based relay server

## Install
**Node Relay** requires Node.js and NPM to be installed locally.

```bash
git clone https://github.com/TheConnMan/Node-Relay.git
cd Node-Relay
npm install
node index.js
```

Then access the API at [http://localhost:3000](http://localhost:3000).

## Docker
**Node Relay** can also be run with Docker with the following commands:

```bash
docker run -d -p 80:3000 --name relay theconnman/relay
```

or built locally with:

```bash
docker build -t theconnman/relay .
```

then run with the same command as above.
