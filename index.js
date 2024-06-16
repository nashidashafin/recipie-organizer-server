const json_server = require('json-server')
const recipie_server = json_server.create()
const cors=require('cors')
recipie_server.use(cors())
const middleware = json_server.defaults()
recipie_server.use(middleware)
const router = json_server.router('db.json')
recipie_server.use(router)
const PORT = 7000
recipie_server.listen(PORT,()=>{
    console.log(`recipie server starts at port number ${PORT}`);
})