import { ref } from "vue"
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signup = async (email, password, displayName ) => {
  error,value = null
  
  try { 
    await projectAuth.createUserWithEmailAndPassword(email, password)
  } catch(error) {

  }
}

const useSignup = () => {
  return { error, signup }
}
 
export default useSignup