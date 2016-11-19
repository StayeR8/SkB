import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';
var router = express.Router();

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

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
app.get('/task3A', async (req, res) => {
  let pc = {"board":{"vendor":"IBM","model":"IBM-PC S-100","cpu":{"model":"80286","hz":12000},"image":"http://www.s100computers.com/My%20System%20Pages/80286%20Board/Picture%20of%2080286%20V2%20BoardJPG.jpg","video":"http://www.s100computers.com/My%20System%20Pages/80286%20Board/80286-Demo3.mp4"},"ram":{"vendor":"CTS","volume":1048576,"pins":30},"os":"MS-DOS 1.25","floppy":0,"hdd":[{"vendor":"Samsung","size":33554432,"volume":"C:"},{"vendor":"Maxtor","size":16777216,"volume":"D:"},{"vendor":"Maxtor","size":8388608,"volume":"C:"}],"monitor":null,"length":42,"height":21,"width":54};
  // fetch(pcUrl)
  //   .then(async (resp) => {
  //     const numbers = await res.json();
  //     resp.send(numbers.board);
  //   });
// });
  router.get('task3A/', function (req,res,next) {

    res.send(pc)
  });

  router.get('task3A/*', function(req, res, next) {
    function getValue(obj, val){
        let res = obj[val];
        return res;
    }

    //let arr = req.originalUrl.split('/');
    let arr = req.pcUrl.split('/');
    let q = {};
    for (let i = 2; i < arr.length; i++) {
        // q = pc[arr[i]];
        if (q !== undefined) {
            if (Object.keys(q).length > 0) {
                //if (getValue(q, arr[i]) != undefined) {
                    q = getValue(q, arr[i]);
                //}
            } else {
                console.log("2");
                //if (getValue(pc, arr[i]) != undefined) {
                    q = getValue(pc, arr[i]);
                //}
            }
        }
    }
    if (q === undefined){
             res.send(404,'Not Found');
         }

         if (typeof q != "object" || Object.keys(q).length > 0) {
             res.json(q);
         } else {
             res.send(404,'Not Found');
         }
});
});
  // try {
  //   const resp = await fetch(pcUrl);
  //   //console.log(resp);
  //   const pcs = await resp.json();
  //   console.log(pcs);
  //   return res.json(pcs);
  // } catch (err) {
  //   console.log(err);
  //   return res.json({err});
  // }

// var comps = require('./pcs.js');
// app.use('/task3A', comps);

  // const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
  // let pc = fetch(pcUrl)
  //   .then(async (res) => {
  //         pc = await res.json();
  //     return res.json();
  //   })
  //   .catch(err => {
  //     console.log('Что-то пошло не так: ', err);
  //   });
  //   //const pcInfo = await fetch(pcUrl);
  //
  // console.log(pc);

  // let pc = {};
  // fetch(pcInfo)
  //   .then(async (res) => {
  //     pc = await res.json();
  //   })
  //   .catch(err => {
  //     console.log('Not Found', err);
  //   });
  // return res.json(pc);

app.listen(3000, () => {
  console.log('Your app is listening on port 3000!');
});
