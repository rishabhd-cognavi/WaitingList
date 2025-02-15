import { useWaitlist } from "../shared/store/ContextProvider";
import { useMemo, useState } from "react";
import { Pagination, TableComponent } from "../modules/UserList";
import { SearchBox } from "../shared/components";

export function UserList() {
  const { users } = useWaitlist();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col gap-5 p-5 lg:flex-row">
      <div className="h-full w-full rounded-3xl bg-gray-300 dark:bg-gray-800">
        <div className="mx-5 mt-10 mb-5 flex flex-wrap justify-between">
          <p className="pb-0 text-lg font-extrabold text-gray-500 sm:pb-5 sm:text-3xl">
            Waiting List Detail
          </p>
          <SearchBox setSearch={setSearch} search={search} />
        </div>
        <div className="flex flex-col justify-between w-full h-full">
          <TableComponent data={visibleUsers} />
          <div className="flex w-full items-center justify-between py-3 sm:px-6">
            <Pagination
              dataPagination={{
                totalPages,
                startIndex,
                visibleUsers,
                totalResult: users.length,
              }}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
