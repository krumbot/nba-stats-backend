import express from 'express';
import apicache from 'apicache';
import cors from 'cors';
import fetchGames from './stats';


const app = express();
const cache = apicache.middleware;

app.use(cache('1 minute'));

app.use(cors());

app.get('/scoreboard', (req, res) => {
  const { date } = req.query;
  fetchGames(date).then(games => res.send(games));
});

app.get('/', (req, res) => {
  res.send('Welcome to nba-stats-backend!');
});

app.listen(80, () => console.log('running on port 80'));
