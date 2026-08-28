// Package Imports
const app = require('express')

// Server Setup 
const server = app()
const PORT = 1621
const HOSTNAME = '0.0.0.0'
server.listen(1621, '0.0.0.0', () => {
    console.log('Server is running...')
} )


