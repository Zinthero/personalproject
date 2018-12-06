const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
const GET_USER_SKILLS= 'GET_USER_SKILLS'
const GET_USER_DETAILS= 'GET_USER_DETAILS'
const GET_ABILITY_SCORES= 'GET_ABILITY_SCORES'
const GET_BIO = 'GET_BIO'
const GET_POWERS = 'GET_POWERS'
const GET_OTHER = 'GET_OTHER'
const GET_INVENTORY = 'GET_INVENTORY'


const initialState = {
    isAuthenticated: false,
    user: {},
    skills:{},
    abilityScores:{},
    details:{},
    bio:{},
    powers:{},
    other:{},
    inventory:{}
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case USER_LOGGED_IN:
        return {...state, isAuthenticated: true, user: action.payload}
        case USER_LOGGED_OUT:
        return { ...state, isAuthenticated: false, user: {}}
        case GET_USER_DETAILS:
        return {...state, details: action.payload}
        case GET_ABILITY_SCORES:
        return {...state, abilityScores: action.payload}
        case GET_USER_SKILLS:
        return {...state, user: action.payload}
        case GET_BIO:
        return {...state, bio: action.payload}
        case GET_POWERS:
        return {...state, powers:action.payload}
        case GET_OTHER:
        return {...state, other:action.payload}
        case GET_INVENTORY:
        return {...state, inventory:action.payload}
        default:
        return state
    }
}

export function userLoggedIn(user){
    return {
        type: USER_LOGGED_IN,
        payload: user
        
    }
}

export function userLoggedOut(){
    return{
        type: USER_LOGGED_OUT
    }
}

export function setDetails(details){
    return{
        type: GET_USER_DETAILS,
        payload: details
    }
}

export function setSkills(skills){
    return{
        type: GET_USER_SKILLS,
        payload: skills
    }
}

export function setAbilityScores(abilityScores){
    return{
        type:GET_ABILITY_SCORES,
        payload: abilityScores
    }
}

export function setBio(bio){
    return{
        type:GET_BIO,
        payload:bio
    }
}

export function setPowers(powers){
    return{
        type:GET_POWERS,
        payload:powers
    }
}

export function setOther(other){
    return{
        type:GET_OTHER,
        payload:other
    }
}

export function setInventory(inventory){
    return{
        type:GET_INVENTORY,
        payload:inventory
    }
}