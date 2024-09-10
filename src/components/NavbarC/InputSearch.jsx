import { Field, Input } from "@headlessui/react";
import clsx from "clsx";
import { IoSearch } from "react-icons/io5";

export default function InputSearch() {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <div className="relative">
          <Input
            className={clsx(
              "block w-full text-sm rounded-sm border-none bg-white/5 py-1.5 px-3 text-sm/6 ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            placeholder="Type Search Words"
          />
          <div className="absolute right-2 top-2.5">
            <IoSearch  size={18}/>
          </div>
        </div>
      </Field>
    </div>
  );
}
