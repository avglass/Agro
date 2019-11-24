import store from './store';

export function updateValue (e) {
    const { value,name } = e.target

    const key = store[name];

    this.setState({key, value});
}


export function submit() {
    console.log(store);
}
