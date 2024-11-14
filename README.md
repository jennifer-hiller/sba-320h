[This app can be viewed on Netlify here](https://nimble-maamoul-fefbf9.netlify.app/)
This app is dependent on the Pokedex API. I decided to just show Pokemon and a few general stats.

To install, run `npm i` and then to run, `npm run dev`.

One of the problems I ran into was going back to the index page. I would rather the user end up in the same part of the list they started out on before clicking on a name.

Another problem was that the Pokemon API does not return IDs, just URLs of the next way to go in their API. This is not how I would design an API but I can understand why they did it this way.
