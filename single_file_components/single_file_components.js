/* Single File Components */

import Vue from 'vue';
import TestComponent from './single_file_components.vue';

Vue.component('test-component', TestComponent);

// the code below used to live inside index.html
new Vue({ 
    el: '#app',

    data: {
        message: 'test'
    }
});