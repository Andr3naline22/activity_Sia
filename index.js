// Package Imports
const app = require('express')

// Server Setup 
const server = app()
const PORT = 1621
const HOSTNAME = '0.0.0.0'
server.listen(PORT, HOSTNAME, () => {
    console.log('Server is running in ${HOSTNAME}:${PORT}')
} )

let data = [
    { 
        id: 1,
        name: 'Dog',
    },
    {
        id: 2,
        name: 'Cat'
    },
    {
        id: 3,
        name: 'Eagle',
    
    }
]

server.get('/api/data', (req,res) => {
    return res.json(data)
})

