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

 ``` 

# ERROR 3:
```bash
[Vue warn]: Property or method "model" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in:

---> <TeslaStats> at src/tesla-battery/components/tesla-stats.component.vue

see 'tesla-stats.component' (HINT: the ':key' is wrong):

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

# ERROR 6:
```bash

vue.runtime.esm.js?ff9b:574 [Vue warn]: Missing required prop: "value"

found in

---> <TeslaCounter> at src/tesla-battery/components/tesla-counter.component.vue
       <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
         <App> at src/App.vue
           <Root>


See line 'tesla-battery.component' (HINT: 'v-model' is missing):

<tesla-counter title="Outside Temperature" unit="°" :step="10" :min="-10" :max="40" />

```         

# Exercise 1:
```bash

Create the 'tesla-header.component' for showing the tesla 'logo'.
Define 'greeting' as input property!

 HINT: See the slides for the solution.

 ``` 

 # Exercise 2:
 ```bash
 
 Create the 'tesla-car.component' for showing the tesla-car.
 Define 'wheels' and 'speed' as input properties!

Finally import the 'tesla-car.component' in the 'tesla-battery.component' (alias: TeslaCar)
And define the TeslaCar in the components-section of the 'tesla-battery.component'.

 ``` 

# Exercise 3:
```bash

- write a custom 'filter' to translate Miles to km (in the tesla-stats.component)

HINT: add the translation from Miles to km

   {{stat.miles | km}}


filters: {
   ...<FIXME>...
}
```

# Exercise 4:
```bash

- decrement speed does not work (in the tesla-counter.component).

HINT: fix the decrement function:

 decrement() {}
 ```
 

# Exercise 5:
```bash

- 'Arrow down' does not work when the focus is on it (in the tesla-counter.component).

HINT: add the 'ArrowDown' handler:


   onKeyUp(event) {
      ...<FIXME>...
   }

```

# Final Exercise:

Too easy for you? Use Vuex to manage the state of your app :)
