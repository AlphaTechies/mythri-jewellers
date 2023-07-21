import React, { useEffect } from "react";
import Response from "../../components/admin/Response";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../redux/adminSlice";
import { Rings } from "react-loader-spinner";

const Responses = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.admin.messages);
  const loading = useSelector((state) => state.admin.loading);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Rings
          height="80"
          width="80"
          color="#523C1E"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    );
  }

  return (
    <section className="pt-24 max-w-7xl mx-auto px-8">
      <h1 className="text-3xl font-medium">Customer Responses</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-8">
        {messages.map((response, index) => (
          <Response key={index} response={response} />
        ))}
      </div>
    </section>
  );
};

export default Responses;
