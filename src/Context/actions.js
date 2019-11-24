import store from './store';

function updateValue (e) {
const { value,name } = e.target

const key = store[name];

this.setState({key, value});
}


function submit() {
    console.log(store);
}

export default {updateValue, submit};