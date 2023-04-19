import Trash from "../../assets/trash.svg";
import Lock from "../../assets/lock.svg";
import { useAppDispatch } from "../../store/store";
import { addPerson, removePerson } from "../../store/features/personSlice";
import { userApi } from "../../api/user/userApis";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import TableBodySkeleton from "../Skeletons/TableBodySkeleton";

const TableUi = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { data, isLoading } = userApi.useGetUsersQuery(page);

  return (
    <div className="flex flex-col">
      <table className="min-w-[50vw]">
        <thead>
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-6">
              Name
            </th>
            <th className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-6">
              Status
            </th>
            <th className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-6">
              Access
            </th>
            <th className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-6"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.users.map((person, idx) => (
            <tr key={person.email + idx}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => {
                    dispatch(addPerson(person));
                  }}
                  onMouseLeave={() => {
                    dispatch(removePerson());
                  }}
                >
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={person.avatar}
                      alt={person.last_name}
                    />
                  </div>
                  <div className="ml-4 flex flex-col items-start">
                    <div className="font-medium text-gray-900">
                      {person.first_name + " " + person.last_name}
                    </div>
                    <div className="text-gray-500">{person.email}</div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                {person.active === true ? (
                  <div className="rounded-full px-2 text-sm font-semibold text-green-700 text-left">
                    Active
                  </div>
                ) : (
                  <select className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryWeb-500 focus:border-primaryWeb-500 block p-2.5 w-28">
                    <option value="inActive">Inactive</option>
                    <option value="active">Active </option>
                  </select>
                )}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {person.owner === true ? (
                  <div className="rounded-full px-2 text-sm font-semibold text-left">
                    Owner
                  </div>
                ) : (
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryWeb-500 focus:border-primaryWeb-500 block p-2.5 w-28 appearance-none">
                    <option value={person.role}>{person.role}</option>
                  </select>
                )}
              </td>
              <td className="w-8 mx-8">
                <button>
                  <img
                    src={person.removable === "true" ? Trash : Lock}
                    alt="permission-icon"
                    className="w-8"
                  />
                </button>
              </td>
            </tr>
          ))}
          {isLoading && <TableBodySkeleton />}
        </tbody>
      </table>
      {data && (
        <Pagination
          page={page}
          totalPage={data.totalPages}
          setPagesInTheTable={page => setPage(page)}
        />
      )}
    </div>
  );
};

export default TableUi;
