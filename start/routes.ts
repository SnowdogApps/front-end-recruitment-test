/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

Route.get('/', async ({ view }) => {
  const state = {
    cart: {
      items: [
        { name: 'Apple Watch Sport', price: 580 },
        { name: 'Modern Buckle', price: 380 },
      ],
      totals: {
        suoTotal: 960,
        tax: 0,
        grandToal: 960,
      },
    },
  }

  return view.render('index', state)
})

Route.post('/order', async ({ request, response }) => {
  const orderSchema = schema.create({
    firstName: schema.string(),
    lastName: schema.string(),
    email: schema.string({}, [
      rules.email(),
    ]),
    phone: schema.string({}, [
      rules.mobile(),
    ]),
    creditCard: schema.string({}, [
      rules.regex(new RegExp('^[0-9]{16}$')),
    ]),
    CVV: schema.string({}, [
      rules.regex(new RegExp('^[0-9]{3}$')),
    ]),
    expDate: schema.string({}, [
      rules.regex(new RegExp('^[0-9]{2}\/[0-9]{2}$')),
    ]),
  })

  try {
    const body = await request.validate({ schema: orderSchema })
    response.send({
      message: 'Order successfully placed.',
    })
  } catch(error) {
    response.badRequest(error.messages)
  }
})