import React, { useEffect } from "react";
import Response from "../../components/admin/Response";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../redux/adminSlice";

const Responses = () => {
  const dispatch=useDispatch();
  const messages=useSelector((state)=>state.admin.messages);
  useEffect(()=>{
    dispatch(getMessages());
  },[dispatch])
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
