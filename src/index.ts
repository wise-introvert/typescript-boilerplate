import dotenv from 'dotenv-safe';
import add from '@src/lib/add';

dotenv.config();

console.log(process.env.MY_NAME);
console.log(add(1, 3));
