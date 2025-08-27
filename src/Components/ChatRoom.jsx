import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef } from "react";
import { auth, db } from "../Firebase";
import { collection, addDoc, serverTimestamp, query, orderBy, limit } from "firebase/firestore";
import Message from "./Message";

export default function ChatRoom() {
  const dummy = useRef();
  const messageRef = collection(db, "messages");
  const q = query(messageRef, orderBy("createdAt"), limit(50));

  const [messages] = useCollectionData(q, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messageRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <main className="flex-1 overflow-y-auto space-y-4">
        {messages && messages.map((msg) => <Message key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="flex p-4 bg-white shadow-md sticky bottom-0">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          className="flex-1 border border-gray-300 outline-none px-3 py-2 rounded-l"
          placeholder="Say something..."
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-r-md disabled:opacity-50
        " disabled={!formValue}>
          Send
        </button>
      </form>
    </div>
  );
}
