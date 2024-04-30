import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center mb-10 mt-5">
          <img
            className="rounded w-1/4 mb-5"
            src="/404.webp"
            alt="404 NO PAGE FOUND"
          ></img>
          <p className=" text-lg text-blue-700 font-medium">Oh no!</p>
          <p className=" text-lg text-blue-700 font-medium">
            No Page Here! Let's go back Home
          </p>
          <Link to="/">
            <button
              type="button"
              className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Let's Go
            </button>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export default NoPage;
