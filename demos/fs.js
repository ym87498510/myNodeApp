/**
 * Created by edison on 2017/11/28.
 */
var  fs = require('fs')
fs.readFile('XXX.txt', (err, content)=> {
    if(!err) {
        console.log(content, 'utf-8')
    }
})
