# Tesla Battery Range Calculator in Vue !!!

Hey guys, tonight you'll have to build this app:

![Bookstore gif](https://cdn-images-1.medium.com/max/2000/1*8hlNoLDBy5XWZct5tAtPoA.png)

Using either react or vuejs, choose your weapon ⚔

### Clone or downlaod
```bash
git clone https://github.com/petereijgermans11/workshop-reactjs-vuejs.git

### If you'd rather use VueJS

- goto this folder in the terminal: 

cd workshop-reactjs-vuejs
cd ./vuejs-app

### Getting started

- `yarn` To install all the dependencies for this workshop. If you don't have yarn installed, install it via `npm i yarn`
- `yarn start` To start the website locally.
- Navigate to [http://localhost:8080/](http://localhost:8080/) To see the website running, full of bugs :)

### First things first

We've left a few bugs in the website, that you'll have to fix in order to understand the basic concepts of Vue.js

The main.js file is the entry point of the site, it is here that your first component is mounted and rendered.

### App.vue

This is the first component mounted by Vue.
This component consist of the tesla-battery.component. This is the container component.
The tesla-battery.component: Provides data and actions to presentational components.

# Happy coding ! ;-)
```


Please: fix all the bugs before building new features



# ERROR 1:
```bash
Property or method "wheels" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

---> <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
       <App> at src/App.vue
         <Root>

See line 'tesla-battery.component' (HINT: v-model="wheels" is wrong):
         '<tesla-wheels v-model="wheels" />'

```

# ERROR 2:
```bash
Invalid prop: type check failed for prop "wheelsize". Expected String, got Number.


found in

---> <TeslaCar> at src/tesla-battery/components/tesla-car.component.vue
       <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
         <App> at src/App.vue
           <Root>

See line in the 'tesla-car.component' (HINT: type is wrong):
 
  props: {
    wheelsize: {
      type: String,
      required: true,
    },
 ``` 

# ERROR 3:
```bash
[Vue warn]: Property or method "model" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in:

---> <TeslaStats> at src/tesla-battery/components/tesla-stats.component.vue

see 'tesla-stats.component' (HINT: the :key is wrong)
<li v-for="stat in stats" :key="model">
       
```

# ERROR 4:
```bash
Invalid prop: type check failed for prop "onClick". Expected String, got Function.

found in

---> <TeslaClimate> at src/tesla-battery/components/tesla-climate.component.vue
       <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
         <App> at src/App.vue
           <Root>

See 'tesla-climate.component' (HINT: the onClick type is wrong):

 props: {
    limit: {
      type: Boolean,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    onClick: {
      type: String,
      required: true,
    },
  },
```

# ERROR 5:
```bash
When you click op the 'Speed button', then you get the following error:

Uncaught ReferenceError: increment is not defined
    at HTMLButtonElement.onclick ((index):17)


 See 'tesla-counter.component' (HINT: the onclick-event is wrong):
<button tabindex="-1" type="button" onclick="increment" :disabled="value === max"></button>
<button tabindex="-1" type="button" onclick="decrement" :disabled="value === min"></button>
```

# Exercise 1:
 Create the 'tesla-header.component' for showing the tesla 'logo'.
 HINT: See the slides for the solution.

# Exercise 2:
- write a custom filter for translation Miles to km (in the tesla-stats.component)

Solution:  

```bash
   {{stat.miles | km}}

   km(value) {
      return Math.floor(value * 1.609344);
    },
```

# Exercise 3:
- decrement speed does not work (in the tesla-counter.component). Fix the decrement function:

See function:
 decrement() {}
 

# Exercise 4:
- 'Arrow down' does not work when the focus is on it (in the tesla-counter.component).
See the 'onKeyUp' function (HINT add the 'ArrowDown' handler):

```bash
   onKeyUp(event) {
      let handlers = {
        ArrowUp: () => this.increment(),
      };
```

# Exercise 5:

The heat must go on when the temparature is 10 degrees Celsius. Now it goes on at 20 degrees.

See tesla-climate.component:
The limit must be > 10


