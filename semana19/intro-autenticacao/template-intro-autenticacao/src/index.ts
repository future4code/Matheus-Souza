import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'

app.post('/users/signup', createUser)
app.put('/users/:id', editUser)