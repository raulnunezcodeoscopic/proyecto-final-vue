export default{
    state: {
        name:'',
        email:'',
        message:''
    },
    getters: {},
    mutations: {
        setName (state,name) {
            state.name = name
        },
        setEmail (state,email) {
            state.email = email;
        },
        setMessage (state,message) {
            state.message = message;
        }
    },
    actions: {}
}