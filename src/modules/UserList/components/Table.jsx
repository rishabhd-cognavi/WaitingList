import PropTypes from "prop-types";

function TableComponent({ data }) {
  return (
    <table className="min-w-full divide-y divide-gray-200/30">
      <thead className="hidden bg-white/30 sm:table-header-group">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-100">
            Position
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-100">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-100">
            Category
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-100">
            Waiting Time
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-700/5 dark:divide-gray-200/4">
        {data?.map((item) => (
          <tr key={item.position}>
            <td className="px-4 py-4 whitespace-nowrap">{item.position}</td>
            <td className="px-4 py-4 whitespace-nowrap">{item.name}</td>
            <td className="px-4 py-4 whitespace-nowrap">
              {item.inviteCode ? "Priority" : "Standard"}
            </td>
            <td className="px-4 py-4 whitespace-nowrap">
              {item.position + ` ${item.position === 1 ? "day" : "days"}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string,
      time: PropTypes.string,
    }),
  ).isRequired,
};

TableComponent.defaultProps = {
  data: [],
};

export { TableComponent };
