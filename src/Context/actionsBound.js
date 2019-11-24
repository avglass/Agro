import {updateValue, submit} from "./actions";

// I tried binding my actions but errors kept getting thrown


this.updateValues = this.updateValue.bind(this);

this.submited = this.submit.bind(this);


export default {updateValues, submited}