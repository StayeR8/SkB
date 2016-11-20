import express from 'express';
import cors from 'cors';
import fetch from 'isomorphic-fetch';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};
fetch(pcUrl)
  .then(async (res) => {
    pc = await res.json();
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });

app.get('/task3a', async (req, res) => {
  res.json(pc);
});

app.get('/task3a/board*', async (req, res) => {
  switch (req.url) {
    case '/task3a/board':
      res.json(pc.board);
      break;
    case '/task3a/board/vendor':
      res.json(pc.board.vendor);
      break;
    case '/task3a/board/model':
      res.json(pc.board.model);
      break;
    case '/task3a/board/cpu':
      res.json(pc.board.cpu);
      break;
        case '/task3a/board/cpu/model':
        res.json(pc.board.cpu.model);
          break;
        case '/task3a/board/cpu/hz':
          res.json(pc.board.cpu.hz);
          break;
    case '/task3a/board/image':
      res.json(pc.board.image);
      break;
    case '/task3a/board/video':
      res.json(pc.board.video);
      break;
    default:
      res.status(404).send('Not Found');
      res.json(pc);
      break;
  }
});

app.get('/task3a/ram*', async (req, res) => {
  switch (req.url) {
    case '/task3a/ram':
      res.json(pc.ram);
      break;
    case '/task3a/ram/vendor':
      res.json(pc.ram.vendor);
      break;
    case '/task3a/ram/volume':
      res.json(pc.ram.volume);
      break;
    case '/task3a/ram/pins':
      res.json(pc.ram.pins);
      break;
    default:
      res.status(404).send('Not Found');
  }
});

app.get('/task3a/os', async (req, res) => {
  res.json(pc.os);
});

app.get('/task3a/floppy', async (req, res) => {
  res.json(pc.floppy);
});

app.get('/task3a/hdd', async (req, res) => {
  res.json(pc.hdd);
});

app.get('/task3a/monitor', async (req, res) => {
  res.json(pc.monitor);
});

app.get('/task3a/length', async (req, res) => {
  res.json(pc.length);
});

app.get('/task3a/height', async (req, res) => {
  res.json(pc.height);
});

app.get('/task3a/width', async (req, res) => {
  res.json(pc.width);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
