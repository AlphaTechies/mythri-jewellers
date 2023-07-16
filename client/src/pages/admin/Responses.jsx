import React from "react";
import Response from "../../components/admin/Response";
import responses from "../../utils/responses";

const Responses = () => {
  return (
    <section className="pt-24 max-w-7xl mx-auto px-8">
      <h1 className="text-3xl font-medium">Customer Responses</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-8">
        {responses.map((response, index) => (
          <Response key={index} response={response} />
        ))}
      </div>
    </section>
  );
};

export default Responses;
