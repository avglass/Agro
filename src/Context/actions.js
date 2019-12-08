 import store from './store';
 
 export function tests(){
    console.log(this.state);
}

export function updateStore(e){

    // you cannot set the state here because 
    this.setState( prevState => ({ 
        [store]:{
            ...prevState.store,
            value: e.target.value 
        }
    }))
}