import { User } from "lucide-react";
import PropTypes from "prop-types";

export function UserCard({ data }) {
  return (
    <div className="flex w-full items-center justify-between rounded-md p-5 shadow hover:shadow-md hover:shadow-sky-300/30 dark:shadow-gray-700">
      <div className="flex items-center">
        <div className="mr-5 h-12 w-12 rounded-full bg-zinc-400/20 p-1 text-zinc-500">
          {/* <p className="font-bold text-4xl text-center text-white">
              {data.position}
            </p> */}
          <User className="size-10" />
        </div>
        <div>
          <p className="text-sm sm:text-base">{data.name}</p>
          {data.type === "Priority" ? (
            <p className="rounded-full border border-green-500 bg-green-300 px-2 text-center text-xs font-semibold text-green-700">
              Priority
            </p>
          ) : (
            <p className="rounded-full border border-zinc-500 bg-zinc-300 px-2 text-center text-xs font-semibold text-zinc-700">
              Standard
            </p>
          )}
        </div>
      </div>
      <p className="text-sm text-zinc-400">
        Position {data.position} of {data.total}
      </p>
    </div>
  );
}

UserCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["Priority", "Standard"]).isRequired,
    position: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};
