import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { useFoodStore } from "../store/store";

export const FoodModal = () => {
  const { modal, foodDescription, imgUrl, hideModal } = useFoodStore();

  return (
    <>
      <Dialog open={modal} onClose={hideModal} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="text-center font-bold">
              Food Description
            </DialogTitle>
            <Description className="flex justify-center">
              <img src={`${imgUrl}`} alt="food background image" />
            </Description>

            <Description>{`${foodDescription}`}</Description>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
