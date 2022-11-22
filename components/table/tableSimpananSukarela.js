export default function TableSimpananSukarela({ data }) {
  return (
    <>
      <table className="w-full table-auto mb-8 text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="py-3 px-6 border-b-2 text-center">
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
          </tr>
        </thead>
        <tbody>
          {data.map((simpSukarela) => {
            return (
              <tr key={simpSukarela.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                >
                  {simpSukarela.id}
                </th>
                <td className="py-4 px-6">
                  Rp{" "}
                  {simpSukarela.nominal_sukarela
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </td>
                <td className="py-4 px-6">
                  <time dateTime={simpSukarela.tgl_bayar}>
                    {convertTime(simpSukarela.tgl_bayar)}
                  </time>
                </td>
                <td className="py-4 px-3 text-center">
                  {simpSukarela.status ? (
                    <p className="bg-[#4299E1] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                      Sudah Diambil
                    </p>
                  ) : (
                    <p className="bg-[#718096] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                      Belum Diambil
                    </p>
                  )}
                </td>
                <td className="py-4 px-6">
                  {simpSukarela.ket ? (
                    <p className="text-gray-600 px-4 py-1 rounded-full w-fit">
                      simpWajib.ket
                    </p>
                  ) : (
                    <p className="text-gray-600 mx-auto px-4 py-1 rounded-full w-fit">
                      -
                    </p>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
