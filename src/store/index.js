import { createStore } from 'vuex'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider, auth } from '../main'
import router from '../router';


// Create a new store instance.
export default createStore({
  state () {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    }
  },
  actions: {
    async login({commit}) {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async logout ({commit}) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    }
  }
})
