import { useEffect } from "react";
import { useFoodStore } from "../store/store";

export const NotFound = () => {
  const { notFound, setNotFound } = useFoodStore();

  const notFoundMessage = "Not Found";

  useEffect(() => {
    if (notFound) {
      setTimeout(() => {
        setNotFound(false);
      }, 3200);
    }
  }, [notFound]);

  return <p className="w-[90%] lg:w-[45%] text-xl text-center bg-red-600 text-white mx-auto uppercase font-bold p-2 mt-4">{notFoundMessage}</p>
};
