import { Clock, Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useWaitlist } from "../../../shared/store/ContextProvider";
import { UserCard } from "./UserCard";

export function UserListWithPosition() {
  const { users } = useWaitlist();
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loadRef = useRef(null);
  const itemsSize = 15;

  useEffect(() => {
    setVisibleUsers(users.slice(0, itemsSize));
  }, [users]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (e) => {
        const first = e[0];
        if (first.isIntersecting) {
          loadItems();
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = loadRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visibleUsers, users]);

  const loadItems = () => {
    if (isLoading || visibleUsers.length >= users.length) return;

    setIsLoading(true);
    setTimeout(() => {
      const nextItems = users.slice(
        visibleUsers.length,
        visibleUsers.length + itemsSize,
      );
      setVisibleUsers((prev) => [...prev, ...nextItems]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-full w-full rounded-3xl bg-gray-100 dark:bg-gray-800">
      <div className="mx-5 my-5 mt-10 flex items-center space-x-2">
        <Clock className="size-8 text-zinc-400" />

        <p className="text-3xl font-bold text-gray-700 dark:text-gray-500">
          Waiting List
        </p>
      </div>
      <div className="h-fit max-h-[80vh] space-y-5 overflow-scroll p-5">
        {/* <UserCard /> */}
        {visibleUsers.map((i, _, arr) => (
          <UserCard
            key={i.id}
            data={{
              position: i.position,
              total: arr.length,
              name: i.name,
              type: i.inviteCode ? "Priority" : "Standard",
            }}
          />
        ))}
        <div ref={loadRef} className="flex items-center justify-center py-4">
          {isLoading ? (
            <div className="flex animate-pulse items-center gap-2 text-[#FF00BF]">
              <Loader className="h-5 w-5 animate-spin" />
              <span className="text-sm">Loading more...</span>
            </div>
          ) : visibleUsers.length < users.length ? (
            <div className="text-sm text-gray-500">Scroll to load more</div>
          ) : (
            <div className="text-sm text-gray-500">End of waitlist</div>
          )}
        </div>
      </div>
    </div>
  );
}
