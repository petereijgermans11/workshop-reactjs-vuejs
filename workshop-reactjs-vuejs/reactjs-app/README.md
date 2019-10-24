This is an tutorial for Rebuild Tesla's Battery Range Calculator with React!!!


# Workshop ReactJS
Hey guys, tonight you'll have to build this app:

![Bookstore gif](https://cdn-images-1.medium.com/max/2000/1*8hlNoLDBy5XWZct5tAtPoA.png)

Using either react or vuejs, choose your weapon ⚔

## Getting started
```bash
git clone https://github.com/petereijgermans11/workshop-reactjs-vuejs.git

# If you'd rather use ReactJS

-> goto this folder in the terminal: 

cd workshop-reactjs-vuejs
cd ./reactjs-app

### Getting started
npm install node-gyp
npm install
npm start

or

npm install yarn -g
yarn
yarn start

Development Server is running on http://localhost:3000


# Happy hacking ! ;-)
```

# Todo
- Fix all the bugs before building new features


# ERROR 1
```bash

Failed prop type: Invalid prop `value` of type `object` supplied to `TeslaWheels`, expected `number`.
    in TeslaWheels (at TeslaBattery.js:147)
    in TeslaBattery (at App.js:28)
    in div (at App.js:26)
    in App (at index.js:7)

See line 'TeslaBattery.js':

<TeslaWheels
            value={this}
            handleChangeWheels={this.handleChangeWheels}
          />

```


# ERROR 2
```bash

Failed prop type: Invalid prop `wheelsize` of type `number` supplied to `TeslaCar`, expected `string`.
    in TeslaCar (at TeslaBattery.js:125)
    in TeslaBattery (at App.js:28)
    in div (at App.js:26)
    in App (at index.js:7)

See line in the 'TeslaCar.js':

TeslaCar.propTypes = {
  wheelsize: React.PropTypes.string
}

```


# ERROR 3
```bash

flattenChildren(...): Encountered two children with the same key, `[object Object]`. Child keys must be unique; when two children share a key, only the first child will be used.
    

See line in the 'TeslaBattery.js':

 const listItems = carstats.map((stat) => (
    <li key={stat}>
      <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
      <p>{stat.miles}</p>
    </li>
  ));

```


# ERROR 4
```bash

Failed prop type: Invalid prop `handleChangeClimate` of type `function` supplied to `TeslaClimate`, expected `string`.
    in TeslaClimate (at TeslaBattery.js:141)
    in TeslaBattery (at App.js:28)
    in div (at App.js:26)
    in App (at index.js:7)

See line in the 'TeslaClimate.js':

TeslaClimate.propTypes = {
  value: React.PropTypes.bool,
  limit: React.PropTypes.bool,
  handleChangeClimate: React.PropTypes.string
}

```


# ERROR 5
```bash

When you click op the 'Speed button', then you get the following error:

Unknown prop `click` on <button> tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop
    in button (at TeslaCounter.js:14)
    in div (at TeslaCounter.js:13)
    in div (at TeslaCounter.js:8)
    in div (at TeslaCounter.js:7)
    in div (at TeslaCounter.js:5)
    in TeslaCounter (at TeslaBattery.js:128)
    in div (at TeslaBattery.js:127)
    in form (at TeslaBattery.js:123)
    in TeslaBattery (at App.js:28)
    in div (at App.js:26)
    in App (at index.js:7)

See line in the 'TeslaCounter.js':

 <div className="tesla-counter__controls">
          <button 
            click={(e) => props.increment(e, props.initValues.title)} 
            disabled={props.currentValue >= props.initValues.max} 
          >
          </button>
          <button 
            click={(e) => props.decrement(e, props.initValues.title)} 
            disabled={props.currentValue <= props.initValues.min} 
          >
          </button>

```



# ERROR 6
```bash

'updateCounterState' does not work in 'TeslaBattery.js' 
(HINT: do NOT use this.state.config = this.statsUpdate(), to update the Counter State).

 updateCounterState(title, newValue) {
    const config = { ...this.state.config };
    // update config state with new value
    title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
    // update our state
    this.state.config = this.statsUpdate();   ---> SHOULD BE: this.setState({ config }, () => {this.statsUpdate()}); 
  }

  Read also : https://reactjs.org/docs/state-and-lifecycle.html
```

# ERROR 7
```bash

 Unknown prop `change` on <input> tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop
    in input (at TeslaWheels.js:10)

```

# ERROR 8 (OPTIONAL)
```bash

Fix the warning:
Warning: Accessing PropTypes via the main React package is deprecated, and will be removed in  React v16.0. Use the latest available v15.* prop-types package from npm instead. For info on usage, compatibility, migration and more, see https://fb.me/prop-types-docs

```

# Exersise 1
```bash

Fix the Wheels buttons. 
Code marked as 'Exersise 1' in the TeslaWheels.js, should be fixed.
```

# Exersise 2
```bash

Create the TeslaNotice.js component.
All code marked as 'Exersise 2' in the TeslaBattery.js, should be placed in the TeslaNotice.js. 
HINT: See also the Header.js component.
```

# Exersise 3
```bash

Create the TeslaStats.js component.
All code marked as 'Exersise 3' in the TeslaBattery.js, should be placed in the TeslaStats.js.
Use 'carstats' as input property!

HINT:
carstats contains the following JSON-format:
It contains the maximum battery range per model.
This range is based on the user input (wheelzise – climate – speed - temparature).

[
  {"model":"60","miles":267},
  {"model":"60D","miles":271},
  {"model":"75","miles":323},
  {"model":"75D","miles":332},
  {"model":"90D","miles":365},
  {"model":"P100D","miles":409}
]


```

# Exersise 4
```bash

Convert 'miles' to 'kilometers' in TeslaStats.js 
```

# Exersise 5
```bash

Make the climate button work!
Code marked as 'Exersise 5' in the TeslaBattery.js, should be fixed.
```

# Exersize 6

Add this React component to add a snowfall on your page.

https://github.com/burakcan/react-snowstorm

And change the background color, so you can see the snow (tesla-style.css)
Or change the properties of this component.


# Final Exersise 
To easy for you. implement Redux according to this post:

https://gyver98.github.io/blog/development/react/2017/03/20/redux-tesla-battery-range-calculator-part2-english/

## Hints
For more details, check out my post [Building Tesla's battery range calculator with React Part 1](https://gyver98.github.io/blog/development/react/2017/02/13/react-tesla-battery-range-calculator-part1-english/) 