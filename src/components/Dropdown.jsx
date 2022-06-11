/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import {  DateRange } from "@material-ui/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ item, List, label, placeholder, setList }) {
  return (
    <Listbox
      value={item}
      onChange={(selected) => setList(selected)}
      data-testid="dropdown"
    >
      <div>
        {" "}
        <Listbox.Label className="block text-sm text-left font-medium mb-4 text-gray-500">
          {label}
        </Listbox.Label>
        <div className="mt-1 relative">
          <Listbox.Button className="bg-gray-50 relative w-full border border-gray-400 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <span className="block truncate text-gray-400">
              <DateRange className="mr-5" /> {item ? item : placeholder}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {List ? (
                List?.map((person, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-3 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <Fragment>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person}
                        </span>

                        {item ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </Fragment>
                    )}
                  </Listbox.Option>
                ))
              ) : (
                <p className="text-center font-bold">Loading</p>
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </div>
    </Listbox>
  );
}
