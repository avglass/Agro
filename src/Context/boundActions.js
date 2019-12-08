import {tests, updateStore } from "./actions";

const test = tests.bind(this);

const update = updateStore.bind(this);

export default{test, update};