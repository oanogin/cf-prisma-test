import { Hono } from 'hono'

const app = new Hono()

app.get('/echo/test', (c) => {
  console.log(new Date().toISOString())
  return c.json({
    url: c.req.url,
    path: c.req.path,
    cf: c.req.raw.cf
  })
})

export default app
