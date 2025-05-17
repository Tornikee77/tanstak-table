import React from "react";
import Table from "@/features/table/components/Table";
import mockData from "@/features/table/constant/data.json";
const Home = () => {
  return (
    <div>
      <Table initialData={mockData} />
    </div>
  );
};

export default Home;
