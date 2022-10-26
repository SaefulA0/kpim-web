function cardBarangBayar() {
  return (
    <>
      <div className="bg-white container p-5 w-full shadow-lg rounded-lg">
        <p className="text-gray-800 text-base font-bold">Beras</p>
        <div className="flex px-3 py-2 text-sm">
          <div className="w-48">
            <p className="border-b py-3 font-medium">Jenis Barang</p>
            <p className="border-b py-3 font-medium">Satuan</p>
            <p className="border-b py-3 font-medium">Berat</p>
            <p className="border-b py-3 font-medium">Jumlah</p>
            <p className="border-b py-3 font-medium">Harga Jual</p>
            <p className="border-b py-3 font-medium">Subtotal</p>
          </div>
          <div className="w-full">
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
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
export default cardBarangBayar;
