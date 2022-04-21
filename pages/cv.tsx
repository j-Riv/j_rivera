import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

const CV: NextPage = () => {
  const t = useTranslations("resume");

  return (
    <Layout title={t("title")} description={t("description")}>
      <div className="bg-zinc-300 dark:bg-zinc-800 text-black dark:text-white py-4">
        <div className="container">
          <h2 className="text-2xl font-bold">José Alfredo Rivera Turcios</h2>
          <SocialLinks />
          <div className="my-4">
            <h3 className="text-xl font-bold">{t("summary")}</h3>
            <hr className="my-4 border-zinc-500" />
            <p className="text-justify">{t("summaryText")}</p>
          </div>
          <div className="my-4">
            <h3 className="text-xl font-bold">{t("technicalSkills")}</h3>
            <hr className="my-4 border-zinc-500" />
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">{t("operatingSystems")}:</span>{" "}
                macOS, Linux, Windows
              </li>
              <li>
                <span className="font-bold">{t("programming")}:</span>{" "}
                JavaScript, NodeJS, ReactJS, PHP, Python, SQL, NoSQL, MySQL
              </li>
              <li>
                <span className="font-bold">{t("applications")}:</span> Adobe
                Suite, MS Office Suite
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h3 className="text-xl font-bold">{t("experience")}</h3>
            <hr className="my-4 border-zinc-500" />
            <p className="font-bold">{t("fullStackDeveloper")}</p>
            <p className="flex">
              <span className="italic flex-1">
                Suavecito, Inc., Santa Ana, CA
              </span>
              <span className="flex-1 text-right">{t("suaveDate")}</span>
            </p>
            <ul className="list-disc list-inside">
              {t.raw("suaveDesc").map((str: string, i: number) => (
                <li key={i}>{str}</li>
              ))}
            </ul>
            <p className="py-4">{t("suaveTechUsed")}</p>
          </div>
          <div className="my-4">
            <h3 className="text-xl font-bold">{t("education")}</h3>
            <hr className="my-4 border-zinc-500" />
            <div className="py-2">
              <p className="font-bold">
                <span className="italic">{t("bootcampCertificate")}:</span>{" "}
                {t("uci")}
              </p>
              <p>{t("uciDesc")}</p>
            </div>
            <div className="py-2">
              <p className="font-bold">{t("occ")}</p>
              <p>{t("occDesc")}</p>
            </div>
            <div className="py-2">
              <p className="font-bold">{t("gwc")}</p>
              <p>{t("gwcDesc")}</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            className="uppercase px-4 py-2 rounded bg-red-700 text-white text-center hover:bg-red-900"
            href=""
            download
          >
            Download
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default CV;

interface ServerProps {
  locale: string;
}

export async function getServerSideProps({ locale }: ServerProps) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
