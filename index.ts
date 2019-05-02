import {connect, set} from 'mongoose';
set('useFindAndModify', false);
import {app} from './app';

async function initialize() {
    const url = 'mongodb://localhost:27017/crowdsourcing';
    await connect(url, {useNewUrlParser: true});
    console.log('Conectado com sucesso em crowdsourcing!');
    app.listen(3000, () => console.log('Executando... na porta 3000...'));
} 

initialize();