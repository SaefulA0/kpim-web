export default function cardTotalPinjaman({ data }) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg">
        <div className="container p-5">
          <div className="flex px-3 py-2 text-sm">
            <div className="w-48">
              <p className="border-b py-3 font-medium">Nominal Cicilan</p>
              <p className="border-b py-3 font-medium">Total Pinjaman</p>
            </div>
            <div className="w-full">
              <p className="border-b py-3">
                Rp{" "}
                {data.nominal_cicilan
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
              <p className="border-b py-3">
                Rp{" "}
                {data.total_pinjaman
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
