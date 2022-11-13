export default function cardBarang() {
  return (
    <>
      <div className="bg-white container mb-6 p-5 w-full shadow-lg rounded-lg">
        <p className="text-gray-800 text-base font-bold">Beras</p>
        <div className="flex px-3 py-2 text-sm">
          <div className="w-48">
            <p className="border-b py-3 font-medium">Jenis Barang</p>
            <p className="border-b py-3 font-medium">Berat</p>
            <p className="border-b py-3 font-medium">Jumlah</p>
            <p className="border-b py-3 font-medium">Subtotal</p>
          </div>
          <div className="w-full">
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </>
  );
}
