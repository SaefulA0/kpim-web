export default function cardBarang({ dataDetail }) {
  return (
    <>
      <div className="flex flex-col justify-between w-36 md:w-40 border-l h-40 mb-5 px-3 py-2 text-sm bg-white shadow-lg rounded-r-lg">
        <div>
          <p className="py-2 font-medium">Jumlah Barang :</p>
          <p className="text-lg pb-3 font-semibold">{dataDetail.jumlah}</p>
        </div>
        <div>
          <p className="py-2 font-medium">Subtotal :</p>
          <p className="text-lg pb-3 font-semibold">
            Rp{" "}
            {dataDetail.sub_total
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
        </div>
      </div>
    </>
  );
}
