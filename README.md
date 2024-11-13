# OBD-II Reader 

🍴 Forked from the [Mantine Remix Template](https://github.com/mantinedev/remix-template)\
📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```
Ensure `data.txt` is accessible 
## Requirements
* Raspberry Pi 3+ built on any [Debian Linux](https://www.debian.org/) distribution
* Bluetooth ELM327 OBD-ii adapter
* 

## Deployment

First, build for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
