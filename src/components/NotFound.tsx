import { ReactNode, useEffect } from "react";
import { useFoodStore } from "../store/store";

type NotFoundProps = {
  children: ReactNode
}

export const NotFound = ({children} : NotFoundProps) => {
  const { notFound, setNotFound } = useFoodStore();


  useEffect(() => {
    if (notFound) {
      setTimeout(() => {
        setNotFound(false);
      }, 3200);
    }
  }, [notFound]);

  return <p className="w-[90%] lg:w-[45%] text-xl text-center bg-red-600 text-white mx-auto uppercase font-bold p-2 mt-4">{children}</p>
};
