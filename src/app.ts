import fastify from 'fastify'
import { mealsRoutes } from './routes/meals'
import cookie from '@fastify/cookie'
import { userRoutes } from './routes/user'

export const app = fastify()

app.register(cookie)

app.register(mealsRoutes, {
  prefix: 'meals',
})

app.register(userRoutes, {
  prefix: 'user',
})
