import { AlignJustify, ClipboardList, List, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Navbar() {
  return (
    <div className="h-10 w-full justify-center md:flex">
      <MobileMenu />
      <DesktopMenu />
    </div>
  );
}

function DesktopMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="hidden w-[30rem] items-center justify-center space-x-10 rounded-sm bg-white md:flex dark:bg-gray-700 dark:text-white">
      <button
        className={`flex items-center space-x-2 bg-transparent ${location.pathname === "/" ? "font-medium text-sky-500" : "text-gray-900"}`}
        type="button"
        onClick={() => navigate("/")}
      >
        <ClipboardList />
        <p>Register Form</p>
      </button>
      <button
        className={`flex items-center space-x-2 ${location.pathname === "/WaitingDetail" ? "font-medium text-sky-500" : "text-gray-900"}`}
        onClick={() => navigate("/WaitingDetail")}
      >
        <List />
        <p>Waiting List</p>
      </button>
    </div>
  );
}

function MobileMenu() {
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="relative block w-full md:hidden">
      <button className="p-2" onClick={() => setisOpen(true)}>
        <AlignJustify />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 top-0 z-10 flex w-full items-center justify-center"
          onClick={() => setisOpen(false)}
        >
          <div
            className="flex flex-col rounded-md bg-zinc-600/10 p-5 shadow-md shadow-blue-200/10 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 p-2"
              onClick={() => setisOpen(false)}
            >
              <X />
            </button>
            <button
              className="inline-flex w-[calc(100vw-40vw)] space-x-2 border-b p-5"
              onClick={() => navigate("/")}
            >
              <ClipboardList className="mr-5" />
              Register Form
            </button>
            <button
              className="inline-flex space-x-2 p-5"
              onClick={() => navigate("/WaitingDetail")}
            >
              <List className="mr-5" />
              Waiting List
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
