import EMPLOYEE_FORM_UPDATE from '../action/types';

const INITIAL_STATE = { 
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case EMPLOYEE_FORM_UPDATE:
            console.log(action)
            return { ...state, [action.payload.prop]: action.payload}
        default:
            return state;
    }
}