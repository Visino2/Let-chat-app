import { auth } from "../Firebase";

export default function Message({ message }) {
  const { text, uid, photoURL } = message;

  const messageClass =
    uid === auth.currentUser.uid ? "justify-end text-right" : "justify-start";

  return (
    <div className={`flex ${messageClass}`}>
      <div className="flex items-center space-x-2 max-w-xs">
        <img
          src={photoURL}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <p className="bg-gray-200 rounded px-3 py-1">{text}</p>
      </div>
    </div>
  );
}
