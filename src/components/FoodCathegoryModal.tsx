import {
  Description,
  Dialog,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { useFoodStore } from "../store/store";

export const FoodModal = () => {
  const { modal, modalInfo, hideModal } = useFoodStore();

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={hideModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-2xl space-y-3 bg-white rounded-lg p-12 shadow-custom">
                <DialogTitle className="text-center font-bold">
                  {modalInfo.img ? (
                    <p>Cathegory Description</p>
                  ) : (
                    <p>Instructions</p>
                  )}
                </DialogTitle>

                {modalInfo.img && (
                  <Description className="flex justify-center">
                    <img src={`${modalInfo.img}`} alt="food background image" />
                  </Description>
                )}

                <div className="">
                  <Description>{`${modalInfo.text}`}</Description>
                </div>

                {modalInfo.url && (
                  <a href={`${modalInfo.url}`} target="blank">
                    <button className="bg-orange-600 text-white p-2 font-bold w-full mt-4">
                      Watch Youtube Tutorial
                    </button>
                  </a>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
