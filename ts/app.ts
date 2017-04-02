
import * as path from 'path';
import * as express from 'express';
import {PriceData} from './getdata';

let app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  next();
});

app.get('/update/:symbol', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(req.params);  
  res.redirect('/');
  next();
});


app.listen(8080);
