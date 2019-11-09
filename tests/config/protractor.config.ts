import {Config} from 'protractor';

export let config = {
      capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  specs: ['todo-spec.js']

};