import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";

import { useFoodStore } from "../store/store";



export const FoodModal = () => {

    const {modal, imgUrl, hideModal} = useFoodStore()

  return (
    <>
      <Dialog
        open={modal}
        onClose={hideModal}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Food Description</DialogTitle>
            <Description>
              <img src={`${imgUrl}`} alt="food background image" />
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button onClick={hideModal}>Cancel</button>
              <button onClick={hideModal}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
