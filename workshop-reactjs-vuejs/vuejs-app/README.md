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

- `yarn` To install all the dependencies for this Hackjam. If you don't have yarn installed, install it via `npm i yarn`
- `yarn start` To start the website locally.
- Navigate to [http://localhost:8080/](http://localhost:8080/) To see the website running, full of bugs :)

### First things first

We've left a few bugs in the website, that you'll have to fix in order to understand the basic concepts of Vue.js

The main.js file is the entry point of the site, it is here that your first component is mounted and rendered.

### App.vue

This is the first component mounted by Vue. Fix the errors in this file before moving :)


# Happy hacking ! ;-)
```


Please: fix all the bugs before building new features


# ERROR 1:
Invalid prop: type check failed for prop "wheelsize". Expected String, got Number.

found in

---> <TeslaCar> at src/tesla-battery/components/tesla-car.component.vue
       <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
         <App> at src/App.vue
           <Root>

See line in the 'tesla-car.component':
 
 props: {
    wheelsize: {
      type: String,
      required: true,
    },

Sol:
 props: {
    wheelsize: {
      type: Number,
      required: true,
    },    

# ERROR 2:
vue.runtime.esm.js?ff9b:574 [Vue warn]: Invalid prop: type check failed for prop "wheelsize". Expected Number, got Undefined.

See line in the 'tesla-battery.component':  
<tesla-car :wheelsize="wheels" :speed="tesla.speed" />

Sol: :wheelsize="tesla:wheels"

———————————

# ERROR 3:
[Vue warn]: Property or method "model" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in:

---> <TeslaStats> at src/tesla-battery/components/tesla-stats.component.vue

see 'tesla-stats.component' (HINT: the :key is wrong)
<li v-for="stat in stats" :key="model">
       
Sol: <li v-for="stat in stats" :key="stat.model">

———————————
# ERROR 4:
When you click op the 'Speed button', then you get the following error:

Uncaught ReferenceError: increment is not defined
    at HTMLButtonElement.onclick ((index):17)


 See 'tesla-counter.component' (HINT: the onclick-event is wrong):
<button tabindex="-1" type="button" onclick="increment" :disabled="value === max"></button>
<button tabindex="-1" type="button" onclick="decrement" :disabled="value === min"></button> 

Sol: @click

———--------


# ERROR 5:
Invalid prop: type check failed for prop "onClick". Expected String, got Function.

found in

---> <TeslaClimate> at src/tesla-battery/components/tesla-climate.component.vue
       <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
         <App> at src/App.vue
           <Root>

See 'tesla-climate.component':

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

Sol:
onClick: {
      type: Function,
      required: true,
    },

# ERROR 6:
When you click op the 'Wheelsize button', then you get the following error:

Property or method "wheels" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

---> <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
       <App> at src/App.vue
         <Root>

See line 'tesla-battery.component' (HINT: v-model="wheels" is wrong):
         <tesla-wheels v-model="wheels" />



# Exercise 1:
 Create the 'tesla-header.component' for showing the tesla 'logo'.
 See the slides fot the solution.

# Exercise 2:
- write a custom filter for translation Miles to km (in the tesla-stats.component)

Solution:  

   {{stat.miles | km}}

   km(value) {
      return Math.floor(value * 1.609344);
    },


# Exercise 3:
- decrement speed does not work (in the tesla-counter.component):

See function:
 decrement() {}
 

# Exercise 4:
- 'Arrow down' does not work when the focus is on it ((in the tesla-counter.component)):

See the onKeyUp function (HINT add the ArrowDown handler):

   onKeyUp(event) {
      let handlers = {
        ArrowUp: () => this.increment(),
      };




# Exercise 5:

The heat must go on when the temparature is 10 degrees Celsius.

See tesla-climate.component
The limit must be > 10

Sol: :limit="tesla.temperature > 10"

