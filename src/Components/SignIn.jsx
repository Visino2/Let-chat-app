import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="text-center p-8">
        <h2 className="text-xl font-bold mb-4">Welcome to let chat</h2>
    
        <button
        onClick={signInWithGoogle}
        className="bg-blue-600 text-white px-6 py-2  shadow-md rounded-lg hover:bg-blue-700 outline-none"
      >
        Sign in with Google
      </button>
      
    </div>
  );
}
