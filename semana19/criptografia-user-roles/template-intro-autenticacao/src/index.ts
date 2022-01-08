import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"

app.post('/users/signup', createUser)
app.post('/users/login',login)
app.put('/users', editUser)


