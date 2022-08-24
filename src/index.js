const app = require('./app')

app.listen(app.get('port'), () => {
    console.log('server the port 5000');
})
