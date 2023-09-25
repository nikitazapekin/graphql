// npm i express graphql express-graphql cors  nodemon
const express = require('express')
const {graphqlHTTP} =require('express-graphql')
const cors = require('cors')
const users= [{id: 1, username: "vasya", age: 25,}]
const app =express()
const schema = require('./schema')
app.use(cors())
 const createUser=(input)=> {
    const id= Date.now()
    return {
        id, ...input
    }
 }
const root ={
    getAllUsers: ()=> {
return users
    }, 
    getUser: ({id})=>{
      return users.find(user => user.id==id)

    },
    createUser: ({input})=> {
const user= createUser(input)
users.push(user)
return user
    }
}
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema, 
    rootValue: root
}))
app.listen(5000, ()=> console.log("start"))
//http://localhost:5000/graphql
//npm install @apollo/client graphql