# nba-stats-backend
This repository serves as the backend for a Google Chrome extension which launches a small NBA scoreboard popout overlay (similar to most Chrome extension pop-outs). The front-end Chrome extension corresponding to this application can be found at https://github.com/krumbot/nba-scoreboard .

#### Notes:
- Predominantly wraps https://github.com/bttmly/nba , which is an API for NBA's undocumented http://stats.nba.com/ endpoints. As such, the NBA has blackslisted certain IPs, such as those corresponding to AWS instances.
