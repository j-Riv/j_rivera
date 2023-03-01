import { useState } from "react";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
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

    const endpoint =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_BASE_URL;

    try {
      const response = await fetch(`${endpoint}/api/contact`, {
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
    <div id="Contact" className="bg-zinc-200 py-10 dark:bg-black">
      <div className="container relative">
        <h3 className="text-center text-3xl font-bold uppercase text-black dark:text-white">
          {t("title")}
        </h3>
        <form
          className="mx-auto lg:w-1/2"
          action="/api/contact"
          onSubmit={formHandler}
        >
          <label className="mx-auto my-4 block">
            <span className="block text-sm font-medium uppercase text-black dark:text-white">
              {t("fields.name")} *
            </span>
            <input
              type="text"
              value={name}
              required
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
              invalid:border-red-500 invalid:text-red-600 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500
              disabled:border-slate-200 disabled:bg-slate-50
              disabled:text-slate-500 disabled:shadow-none
            "
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label className="mx-auto my-4 block">
            <span className="block text-sm font-medium uppercase text-black dark:text-white">
              {t("fields.email")} *
            </span>
            <input
              type="email"
              value={email}
              required
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
              invalid:border-red-500 invalid:text-red-600 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500
              disabled:border-slate-200 disabled:bg-slate-50
              disabled:text-slate-500 disabled:shadow-none
            "
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className="mx-auto my-4 block">
            <span className="block text-sm font-medium uppercase text-black dark:text-white">
              Subject *
            </span>
            <input
              type="text"
              value={subject}
              required
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
              invalid:border-red-500 invalid:text-red-600 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500
              disabled:border-slate-200 disabled:bg-slate-50
              disabled:text-slate-500 disabled:shadow-none
            "
              onChange={e => setSubject(e.target.value)}
            />
          </label>
          <label className="mx-auto my-4 block">
            <span className="block text-sm font-medium uppercase text-black dark:text-white">
              {t("fields.message")} *
            </span>
            <textarea
              value={message}
              required
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
              invalid:border-red-500 invalid:text-red-600 focus:border-sky-500 focus:outline-none
              focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500
              disabled:border-slate-200 disabled:bg-slate-50
              disabled:text-slate-500 disabled:shadow-none
            "
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="rounded bg-zinc-800 px-4 py-2 text-xl font-bold uppercase text-white hover:bg-zinc-400 hover:text-white dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
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
              // @ts-ignore
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
