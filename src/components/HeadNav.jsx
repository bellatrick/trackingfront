import { BellIcon, MenuAlt1Icon } from "@heroicons/react/outline";

const HeadNav = ({ setSidebarOpen }) => {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Search bar */}
      <div className="flex-1 px-2 flex sm:px-6 lg:mx-5">
        <div className="flex-1 flex items-center lg:-ml-8 ">
          <div className="w-full  px-2 lg:px-6">
            <label htmlFor="search" className="sr-only">
              Search projects
            </label>
          </div>
        </div>
        <div className=" flex items-center ">
          <button
            type="button"
            className="bg-white p-1 ml-32 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
        </div>
      </div>
    </div>
  );
};

export default HeadNav;
