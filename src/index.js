//configuración del servidor
import app from './app'
import './MongoDB'

app.listen(app.get('port'))
console.log('Server on port', app.get('port'))