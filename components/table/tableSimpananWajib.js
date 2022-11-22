export default function TableSimpananWajib({ data }) {
  return (
    <>
      <div className="mt-10 container">
        <table className="w-full table-auto mb-8 text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="text-center py-3 px-6 border-b-2">
                Id
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Nominal
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Tanggal Bayar
              </th>
              <th scope="col" className="py-3 px-6 border-b-2 text-center">
                Status
              </th>
              <th scope="col" className="w-96 py-3 px-6 border-b-2">
                Keterangan
              </th>
              <th className="py-3 px-6 border-b-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((simpWajib) => {
              return (
                <tr key={simpWajib.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                  >
                    {simpWajib.id}
                  </th>
                  <td className="py-4 px-6">
                    Rp{" "}
                    {simpWajib.nominal_bayar
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </td>
                  <td className="py-4 px-6">
                    <time dateTime={simpWajib.tgl_bayar}>
                      {convertTime(simpWajib.tgl_bayar)}
                    </time>
                  </td>
                  <td className="py-4 px-3 text-center">
                    {simpWajib.status ? (
                      <p className="bg-[#4299E1] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                        Lunas
                      </p>
                    ) : (
                      <p className="bg-[#718096] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                        Belum Lunas
                      </p>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {simpWajib.ket ? (
                      <p className="text-gray-600 px-4 py-1 rounded-full w-fit">
                        {simpWajib.ket}
                      </p>
                    ) : (
                      <p className="text-gray-600 mx-auto px-4 py-1 rounded-full w-fit">
                        -
                      </p>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {simpWajib.status ? (
                      <button
                        disabled
                        className="mx-auto mr-1.5 mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#48BB78] bg-opacity-50 text-white text-sm shadow-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        Bayar
                      </button>
                    ) : (
                      <button className="mx-auto mr-1.5 mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white text-sm shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        Bayar
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export const convertTime = (time) => {
  return new Date(time).toLocaleDateString("id-uk", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
