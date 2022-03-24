import React from "react";
import { Transition } from "@headlessui/react";

const ClearDialog = ({ open, onClearSearchHistory, onClose }) => {
  return (
    <Transition
      show={open}
      className="fixed inset-0 flex flex-cols items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <section className="w-8/12 md:w-4/12 border-2 bg-white px-14 py-8 rounded-md shadow-md space-y-2">
        <p className="font-bold text-3xl text-center">
          Clear all recent searches?
        </p>
        <p className="text-center py-2 md:py-4">
          This can’t be undone and you’ll remove all your recent searches.{" "}
        </p>
        <div className="px-10 space-y-1 md:space-y-3">
          <button
            className="w-full border-2 bg-red-700 rounded-lg text-white py-3 ring-2 ring-pink-600"
            onClick={() => onClearSearchHistory()}
          >
            Clear
          </button>
          <button
            className="w-full border-2 rounded-lg py-3"
            onClick={() => onClose()}
          >
            Cancel
          </button>
        </div>
      </section>
    </Transition>
  );
};

export default ClearDialog;
