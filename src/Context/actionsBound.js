import {updateValue, submit} from "./actions";

const updateValues = updateValue.bind(this);

const submited = submit.bind(this);

export default {updateValues, submited}