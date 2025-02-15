import lyftLogoDark from "@assets/lyft-dark.svg";
import lyftLogoLight from "@assets/lyft-light.svg";
import { useTheme } from "../../../shared/store";
import { useWaitlist } from "../../../shared/store/ContextProvider";
import { useState } from "react";
import { VALID_INVITE_CODES } from "../../../shared/utils/Constants";
import { useNotification } from "../../../shared/hook/useNotification";

export function UserForm() {
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const { notify } = useNotification();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [shake, setShake] = useState(false);
  const { addUser } = useWaitlist();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      // setShake(true);
      // setTimeout(() => setShake(false), 500);
      // setMessage("Please enter your name");
      return;
    }

    setIsSubmitting(true);

    const trimmedCode = inviteCode.trim();
    const isValidCode = trimmedCode
      ? VALID_INVITE_CODES.includes(trimmedCode)
      : true;

    // Simulate a slight delay for the submission animation
    setTimeout(() => {
      addUser(name.trim(), trimmedCode || null);

      if (trimmedCode && !isValidCode) {
        notify(
          "warning",
          "Invalid invite code, user added to Standard Category",
        );
      } else {
        notify("success", "Successfully added to the waiting list!");
      }

      setName("");
      setInviteCode("");
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="flex min-h-full w-full items-center justify-center rounded-3xl bg-gray-100 p-5 dark:bg-gray-800">
      <div className="w-full">
        <LogoSection />
        <div className="flex items-center justify-center pb-[10rem]">
          <form
            className="flex w-[15rem] flex-col space-y-5 md:w-[20rem]"
            onSubmit={handleSubmit}
          >
            <div className="space-y-3">
              <label>Name</label>
              <input
                value={name}
                className="h-10 w-full rounded-md border border-zinc-500 px-2 focus:outline-0"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <label>Invite Code (Optional)</label>
              <input
                value={inviteCode}
                className="h-10 w-full rounded-md border border-zinc-500 px-2 focus:outline-0"
                placeholder="Enter Invite Code"
                onChange={(e) => setInviteCode(e.target.value)}
              />
            </div>
            <button
              // disabled={!isSubmitting}
              className="h-10 rounded-md bg-sky-500 font-bold text-white hover:bg-sky-400"
              type="submit"
            >
              {isSubmitting ? "Adding User..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function LogoSection() {
  const { theme } = useTheme();
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <span className="h-[15rem] rounded-full">
        <img
          src={theme === "dark" ? lyftLogoLight : lyftLogoDark}
          alt="Lyft Logo"
          className="size-[20rem]"
        />
      </span>
      <p className="my-8 text-center text-4xl font-extrabold text-gray-700 dark:text-gray-400">
        Register To Waiting List
      </p>
    </div>
  );
}
