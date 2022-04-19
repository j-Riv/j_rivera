import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import useToast from "./Toast";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // const { openToast, ToastComponent } = useToast(
  //   "this is my notification",
  //   "success"
  // );

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const formHandler = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const json = await response.json();
      if (json.messageId) {
        console.log("SUCCESS", json.messageId);
        resetForm();
        return toast.success("Message Sent");
      }
    } catch (err: any) {
      console.log("ERROR", err.message);
      return toast.error(err.message);
    }
  };

  return (
    <div id="Contact" className="bg-black py-10">
      <div className="container relative">
        <h3 className="uppercase font-bold text-2xl text-center text-white">
          Contact
        </h3>
        <form className="lg:w-1/2 mx-auto">
          <label className="block mx-auto my-4">
            <span className="block text-sm font-medium text-white uppercase">
              Name *
            </span>
            <input
              type="text"
              value={name}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-500 invalid:text-red-600
              focus:invalid:border-red-500 focus:invalid:ring-red-500
            "
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label className="block mx-auto my-4">
            <span className="block text-sm font-medium text-white uppercase">
              Email *
            </span>
            <input
              type="email"
              value={email}
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-500 invalid:text-red-600
              focus:invalid:border-red-500 focus:invalid:ring-red-500
            "
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className="block mx-auto my-4">
            <span className="block text-sm font-medium text-white uppercase">
              Subject *
            </span>
            <input
              type="text"
              value={subject}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-500 invalid:text-red-600
              focus:invalid:border-red-500 focus:invalid:ring-red-500
            "
              onChange={e => setSubject(e.target.value)}
            />
          </label>
          <label className="block mx-auto my-4">
            <span className="block text-sm font-medium text-white uppercase">
              Message *
            </span>
            <textarea
              value={message}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-500 invalid:text-red-600
              focus:invalid:border-red-500 focus:invalid:ring-red-500
            "
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          <button
            type="button"
            className="uppercase font-bold text-xl rounded px-4 py-2 bg-zinc-800 text-white hover:bg-zinc-600"
            onClick={formHandler}
          >
            Send
          </button>
        </form>
        {/* <ToastComponent /> */}
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            bottom: 400,
          }}
          toastOptions={{
            // Define default options
            className: "",
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
