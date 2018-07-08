![three-point-est](public/3pe-logo.png)

# three-point-est

A 'simple three point estimation' app in React. You can
[see it in action here](https://janithl.github.io/three-point-est/).

## What is a three-point estimation?

> The three-point estimation technique is used in management and information systems applications
> for the construction of an approximate probability distribution representing the outcome of future
> events, based on very limited information.
>
> Based on the assumption that a **double-triangular distribution** governs the data, several
> estimates are possible. These values are used to calculate an E value for the estimate and a
> standard deviation (SD) as L-estimators, where:
>
> **E = (a + 4m + b) / 6**
>
> _(where a = the best-case estimate, m = the most likely estimate, b = the worst-case estimate)_

— [Wikipedia](https://en.wikipedia.org/wiki/Three-point_estimation)

It is used a lot in Software Engineering to estimate project durations. I highly discourage you from using
it for that purpose, given my personal experiences with it. There are far better Agile estimation methods.

## Building

Run `yarn` to install dependencies, `yarn start` to debug, and `yarn deploy` to deploy to Github pages.

## TODO

- TESTS!
- CSV Export
- Graphs

## License

three-point-est is released under the [MIT License](http://opensource.org/licenses/MIT).
