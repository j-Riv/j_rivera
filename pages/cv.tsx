import type { NextPage } from "next";
import { useTranslations } from "next-intl";
import Layout from "../components/Layout";

const CV: NextPage = () => {
  const t = useTranslations("resume");

  return (
    <Layout title="Resume" description="CV">
      <div className="py-4 bg-black text-white">
        <div className="container">
          <h2>José Alfredo Rivera Turcios</h2>
          <div className="my-4">
            <h3>{t("summary")}</h3>
            <hr className="my-4" />
            <p className="text-justify">{t("summaryText")}</p>
          </div>
          <div className="my-4">
            <h3>{t("technicalSkills")}</h3>
            <hr className="my-4" />
            <ul>
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
            <h3>{t("experience")}</h3>
            <hr className="my-4" />
            <p className="font-bold">{t("fullStackDeveloper")}</p>
            <p className="flex">
              <span className="italic flex-1">
                Suavecito, Inc., Santa Ana, CA
              </span>
              <span className="flex-1">{t("suaveDate")}</span>
            </p>
            <ul>
              {t.raw("suaveDesc").map((str: string) => (
                <li>{str}</li>
              ))}
            </ul>
            <p className="py-4">{t("suaveTechUsed")}</p>
          </div>
          <div className="my-4">
            <h3>{t("education")}</h3>
            <hr className="my-4" />
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
            className="uppercase px-4 py-2 rounded bg-red-700 text-center hover:bg-red-900"
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
