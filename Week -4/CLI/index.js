const fs = require('fs')
const { Command } = require('commander')
const path = require('path')

const program = new Command()

// Define the file path correctly
const filePath = path.join(__dirname, 'a.txt')

fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
        console.error('Error reading file:', err)
    } else {
        const lines = data.split('\n').length
        console.log(`There are ${lines} lines in the file.`)
    }
})

program.parse(process.argv)
