import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3 text-white bg-gradient-to-l from-blue-400 via-blue-700 to-blue-950">
      <p className="text-xl">🤬🤬🤬🤬🤬🤬🤬🤬🤬</p>
      <p className="text-3xl font-bold">
        {error.status} - {error.statusText}
      </p>
      <p className="text-xl font-semibold">{error.data} </p>
      <Link to="" className="text-green-500">
        {" "}
        &larr; Go back Accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
