import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";
import SignIn from "./Components/SignIn";
import SignOut from "./Components/SignOut";
import ChatRoom from "./Components/ChatRoom";

export default function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="flex justify-between px-6 py-4 shadow-md bg-green-600 text-white items-center">
        <h1 className="text-2xl font-bold">Let Chat</h1>
        <SignOut />
      </header>
      <section className="flex-1 flex justify-center items-center">
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
