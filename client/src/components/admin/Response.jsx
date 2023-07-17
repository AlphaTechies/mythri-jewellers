/* eslint-disable react/prop-types */
const Response = ({ response }) => {
  return (
    <div className="bg-white rounded-md p-4 border font-light">
      <div className="flex items-center justify-between border-b pb-2">
        <div className="text-xs font-light">
          <p>{response.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-8 py-3 space-y-2">
        <p className="col-span-6">{response.name}</p>
        <p className="col-span-6">{response.message}</p>
      </div>
    </div>
  );
};

export default Response;
