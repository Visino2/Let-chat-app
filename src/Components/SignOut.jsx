import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

export default function SignOut() {
  return auth.currentUser && (
    <button
      onClick={() => signOut(auth)}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Sign Out
    </button>
  );
}
