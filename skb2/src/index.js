import express from 'express';
import cors from 'cors';

import canonize from './canonize';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  var fullname = req.query.fullname;// ? req.query.fullname : undefined;
  var names = [];
  if (fullname != undefined){
    names = fullname.split(' ');
    switch (names.length) {
      case 1:
        res.send(fullname);
        break;
      case 2:
        res.send(names[1] + ' ' + names[0].charAt(0) + '.');
        break;
      case 3:
        res.send(names[2] + ' ' + names[0].charAt(0) + '. ' +
      names[1].charAt(0) + '.');
        break;
      default:
        res.send('Invalid fullname');
        break;
    }
    // else {
    // res.send('Invalid fullname');
    // }      не понятна причина ошибки синтаксиса при включенном else.
  }
console.log(names, names.length);
}
  );

app.get('/task2C', (req, res) => {
  const username = canonize(req.query.username);
  res.send(username);
  console.log(username);
});

app.listen(3000, () => {
  console.log('Your app is listening on port 3000!');
});
