import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        console.log(user)
    }
  return (
    <div>
        <button onClick={ logGoogleUser }>
            Sign In with Google Popup
        </button>
    </div>
  )
}

export default SignIn