import Rebase from 're-base'
import Firebase from 'firebase'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCKeIhC6SXY5-elvJ6EaeHC-W4a_FeD6cY",
    authDomain: "idguys-923cd.firebaseapp.com",
    databaseURL: "https://idguys-923cd.firebaseio.com",
    projectId: "idguys-923cd",
    storageBucket: "idguys-923cd.appspot.com",
    messagingSenderId: "34031669213",
    appId: "1:34031669213:web:6f4eab728829871d703034",
    measurementId: "G-3GGK983XBX"
  };

  const app = Firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())
  const googleProvider = new Firebase.auth.GoogleAuthProvider()
  const facebookProvider = new Firebase.auth.FacebookAuthProvider()
  const emailLogin = new Firebase.auth.EmailAuthProvider()
  const auth =  Firebase.auth()


  export {app, base, googleProvider, facebookProvider, emailLogin, auth}