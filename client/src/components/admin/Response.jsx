/* eslint-disable react/prop-types */
const Response = ({ response }) => {
  return (
    <div className="bg-white rounded-md p-4 border font-light">
      <div className="flex items-center justify-between border-b pb-2">
        <h1 className="text-xl font-medium">{response.customer}</h1>
        <div className="text-xs font-light">
          <p>{response.contact}</p>
          <p>{response.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-8 py-3 space-y-2">
        <h2 className="col-span-2 self-end">Product: </h2>
        <p className="col-span-6">{response.product.name}</p>
        <h2 className="col-span-2">Message: </h2>
        <p className="col-span-6">{response.message}</p>
      </div>
    </div>
  );
};

export default Response;
