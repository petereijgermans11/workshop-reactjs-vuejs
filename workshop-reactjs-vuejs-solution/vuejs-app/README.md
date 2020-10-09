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

# TO DO
Please: fix all the bugs before building new features
And download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools


# STARTING POINT

The way we bootstrap a new Vue app (in main.js) has changed in Vue 3. Rather than using new Vue(), we now need to import the new "createApp" method.
We then call this method, passing our Vue instance definition object, and assign the return object to a variable app.
Replace main.js with this code:


    import { createApp } from 'vue'
    import App from './App.vue'

    createApp(App).mount('#app')



# ERROR 1
```bash

Property "wheels" was accessed during render but is not defined on instance. 
  at <TeslaBattery> 
  at <App>

found in

See line 'tesla-battery.component':

         '<tesla-wheels v-model="wheels" />'

```


# ERROR 2
```bash

Property "temperature" was accessed during render but is not defined on instance. 
  at <TeslaBattery> 
  at <App>

found in

See line 'tesla-battery.component':

        '<tesla-counter title="Outside Temperature" unit="°" :step="10" :min="-10" :max="40" v-model="temperature" />'


```       

# ERROR 3
```bash

Invalid prop: type check failed for prop "value". Expected String, got Boolean.

found in

---> <TeslaClimate> at src/tesla-battery/components/tesla-climate.component.vue
       <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
         <App> at src/App.vue
           <Root>

See 'tesla-climate.component'

```

# ERROR 4
```bash

Invalid prop: type check failed for prop "onClick". Expected String, got Function.

found in

---> <TeslaClimate> at src/tesla-battery/components/tesla-climate.component.vue
       <TeslaBattery> at src/tesla-battery/tesla-battery.component.vue
         <App> at src/App.vue
           <Root>

See 'tesla-climate.component'


```

# ERROR 5
```bash

When you click on the 'Speed UP button', then you get the following error:

Uncaught ReferenceError: increment is not defined
    at HTMLButtonElement.onclick ((index):16)


 See 'tesla-counter.component':

    <button tabindex="-1" type="button" onclick="increment" :disabled="value === max"></button>



```

# ERROR 6
```bash
When you click on the 'Speed UP button' again, then you get the following error:

TypeError: this.emit is not a function
    at Proxy.increment (tesla-counter.component.vue?ccf5:61)
    at Object.onClick. .......

See 'tesla-counter.component':

    ISSUE:    this.emit('input', this.modelValue + this.step); 

    SOLUTION: this.$emit('update:modelValue', this.modelValue + this.step);
  
```

# ERROR 7
```bash

Solve above issues also for Decrement speed/temparature (in the tesla-counter.component)

Fix the decrement function:

 decrement() {
   ...<FIXME>...
 }

```

# Exercise 1
```bash

And make the 'v-model' work for the tesla wheelsize. So the wheelsize buttons also work!

```

# Exercise 2
```bash

Create the 'tesla-notice.component' for showing the bottom text.

```

 # Exercise 3
 ```bash
 
Create the 'tesla-car.component' for showing the tesla-car.
Define 'wheels' and 'speed' as input properties!

Move this code from the TeslaBattery.js to the TeslaCar.js and place it in the '<template>-section':

   <div class="tesla-car">
        <div class="tesla-wheels">
            <div :class="`tesla-wheel tesla-wheel--front tesla-wheel--${tesla.wheels}--${tesla.speed}`"></div>
            <div :class="`tesla-wheel tesla-wheel--rear tesla-wheel--${tesla.wheels}--${tesla.speed}`"></div>
        </div>
    </div>

Finally import the 'tesla-car.component' in the 'tesla-battery.component' (alias: TeslaCar)
And define the TeslaCar in the 'components-section' of the 'tesla-battery.component'.

 ``` 

 # Exercise 4
```bash

Create the 'tesla-header.component' for showing the tesla 'logo'.
Define 'greeting' as input property!

HINT: See the slides for the solution.

 ``` 

# Exercise 5
```bash

Write a custom 'filter' with the name 'km', to translate Miles to km (in the tesla-stats.component)

  filters: {
    ...<FIXME>...
  }
``` 

# Exercise 6
```bash

The 'Arrow down' does not work when the focus is on it (in the tesla-counter.component).

   onKeyUp(event) {
      ...<FIXME>...
   }

```

# Exercise 7
```bash

Use transition/animation to move the car
```

# Exercise 8
```bash

Unittest some components with Vue-Jest
```

# Final Exercise:

Too easy for you? Use Vuex to manage the state of your app :)
