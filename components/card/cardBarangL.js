export default function cardBarang({ dataBarang }) {
  return (
    <>
      <div className="w-60 md:w-72 h-40 mb-5 px-3 py-2 bg-white shadow-lg rounded-l-lg">
        <p className="text-lg py-3 font-semibold truncate">
          {dataBarang.barang.nama_barang}
        </p>
        <div className="mt-3 flex  text-sm">
          <div className="w-48">
            <p className="py-2 font-medium truncate">Jenis Barang</p>
            <p className="py-2 font-medium truncate">Berat</p>
          </div>
          <div className="w-full">
            <p className="py-2 truncate">: {dataBarang.barang.jenis_barang}</p>
            <p className="py-2 truncate">: {dataBarang.barang.berat} KG</p>
          </div>
        </div>
      </div>
    </>
  );
}
