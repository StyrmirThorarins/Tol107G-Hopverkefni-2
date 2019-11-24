/* eslint-disable linebreak-style */
import { empty } from './helpers.js';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    // empty(this.container); commentað því this.container er null
  }
}
