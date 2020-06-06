import Vue from 'vue';
import ExampleOne from './components/ExampleOne';
import ExampleTwo from './components/ExampleOne';

Vue.component('example-one', ExampleOne);

new Vue({
    el: '#app',
    
    data: {
        message: 'test'
    }
});