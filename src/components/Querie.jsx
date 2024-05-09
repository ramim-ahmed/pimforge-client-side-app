export default function Querie() {
  return (
    <div className="border p-3 rounded-md">
      <div>
        <img
          src="https://m.media-amazon.com/images/I/616TsA5ZwwL._AC_SX679_.jpg"
          alt=""
        />
      </div>
      <div className="mt-8">
        <button>Evian</button>
        <h1 className="text-2xl font-medium">Evian Pure Water | 1L</h1>
        <p>Is there any Better product that gives me the same quality?</p>
        <p>
          <strong>Alternative Reasons:</strong>
          This product that much be expensive and currently not supply
        </p>
      </div>
      <div className="flex items-center space-x-3 mt-4">
        <img
          className="w-12 h-12 object-cover rounded-full border border-themeColor"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div>
          <h1 className="text-xl font-medium">Liam Dawson</h1>
          <p className="-mt-1">an hour ago</p>
        </div>
      </div>
    </div>
  );
}
