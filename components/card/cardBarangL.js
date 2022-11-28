export default function cardBarang({ dataBarang }) {
  return (
    <>
      <div className="w-52 h-40 mb-5 px-3 py-2 bg-white shadow-lg rounded-l-lg">
        <p className="text-xl py-3 font-semibold">
          {dataBarang.barang.nama_barang}
        </p>
        <div className="mt-3 flex  text-sm">
          <div className="w-48">
            <p className="py-2 font-medium">Jenis Barang</p>
            <p className="py-2 font-medium">Berat</p>
          </div>
          <div className="w-full">
            <p className="py-2">: {dataBarang.barang.jenis_barang}</p>
            <p className="py-2">: {dataBarang.barang.berat} KG</p>
          </div>
        </div>
      </div>
    </>
  );
}
