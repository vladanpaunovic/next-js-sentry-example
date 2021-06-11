This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, connect to Sentry using Sentry wizard

```bash
npx @sentry/wizard -i nextjs
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your page.

### Triggering errors:

Frontend:

- Navigate to [http://localhost:3000](http://localhost:3000)
- Click on "Throw error" button

[API routes](https://nextjs.org/docs/api-routes/introduction) errors:

- Send any request to [http://localhost:3000/api/hello](http://localhost:3000/api/hello)

> If you are using [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for VS Code, feel free to use [test-api.http](test-api.http) tot rigger the requests.
