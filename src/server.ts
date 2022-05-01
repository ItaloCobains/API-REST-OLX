import server from './app';
import 'dotenv/config';

server.listen(process.env.PORT);// running server