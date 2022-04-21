import { useState } from "react";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const t = useTranslations("contact");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const formHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

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
        return toast.success(t("fields.success"));
      }
    } catch (err: any) {
      console.log("ERROR", err.message);
      return toast.error(t("fields.error"));
    }
  };

  return (
    <div id="Contact" className="bg-zinc-200 dark:bg-black py-10">
      <div className="container relative">
        <h3 className="uppercase font-bold text-3xl text-center text-black dark:text-white">
          {t("title")}
        </h3>
        <form
          className="lg:w-1/2 mx-auto"
          action="/api/contact"
          onSubmit={formHandler}
        >
          <label className="block mx-auto my-4">
            <span className="block text-sm font-medium text-black dark:text-white uppercase">
              {t("fields.name")} *
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
            <span className="block text-sm font-medium text-black dark:text-white uppercase">
              {t("fields.email")} *
            </span>
            <input
              type="email"
              value={email}
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
            <span className="block text-sm font-medium text-black dark:text-white uppercase">
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
            <span className="block text-sm font-medium text-black dark:text-white uppercase">
              {t("fields.message")} *
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
            type="submit"
            className="uppercase font-bold text-xl rounded px-4 py-2 bg-zinc-200 text-black hover:bg-zinc-400 hover:text-white dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-600"
          >
            {t("fields.submit")}
          </button>
        </form>
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
