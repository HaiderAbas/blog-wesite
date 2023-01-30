import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Chart } from "@/pages/api/hello";
function Deshboard2() {
  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    labels: ["Percent"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: false,
        },
        hollow: {
          size: "40%",
        },
        track: {},
      },
    },
    theme: {},
  };

  const chartSeries = [76];
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold dark:text-white">
        Dashboard
      </p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded  h-28 shadow-lg relative">
          <h2 className="text-2xl ml-4 mt-1 font-bold">New Accounts</h2>
          <div className="flex justify-between ">
            <div className="flex justify-between mt-10">
              <BsChevronDown className="text-2xl ml-4 mt-1 font-bold text-green-500" />
              <h3 className="ml-4 text-2xl font-bold">234 %</h3>
            </div>
            <div className="ml-12 mb5 absolute top-0 bottom-0 text-green-500 right-0 w-32 ">
              <Chart
                height={160}
                options={chartOptions}
                series={chartSeries}
                type="radialBar"
                width={125}
              />
            </div>
          </div>
        </div>
        <div className="rounded  h-28 shadow-lg relative">
          <h2 className="text-2xl ml-4 mt-1 font-bold">New Accounts</h2>
          <div className="flex justify-between ">
            <div className="flex justify-between mt-10">
              <BsChevronDown className="text-2xl ml-4 mt-1 font-bold text-green-500" />
              <h3 className="ml-4 text-2xl font-bold">234 %</h3>
            </div>
            <div className="ml-12 mb5 absolute top-0 bottom-0 text-green-500 right-0 w-32 ">
              <Chart
                height={160}
                options={chartOptions}
                series={chartSeries}
                type="radialBar"
                width={125}
              />
            </div>
          </div>
        </div>
        <div className="rounded  h-28 shadow-lg relative">
          <h2 className="text-2xl ml-4 mt-1 font-bold">New Accounts</h2>
          <div className="flex justify-between ">
            <div className="flex justify-between mt-10">
              <BsChevronDown className="text-2xl ml-4 mt-1 font-bold text-green-500" />
              <h3 className="ml-4 text-2xl font-bold">234 %</h3>
            </div>
            <div className="ml-12 mb5 absolute top-0 bottom-0 text-green-500 right-0 w-32 ">
              <Chart
                height={160}
                options={chartOptions}
                series={chartSeries}
                type="radialBar"
                width={125}
              />
            </div>
          </div>
        </div>
        {/* <div className="rounded bg-gray-300 h-20 shadow-sm"> */}
        {/* <Bar options={options} data={data} /> */}
        {/* </div> */}
        {/* <div className="rounded bg-yellow-500 h-20 shadow-sm"></div> */}
        {/* <div className="rounded bg-yellow-500 h-20 shadow-sm"></div> */}
      </div>
      <div className="grid col-1 bg-black h-96 shadow-sm"></div>
    </>
  );
}

export default Deshboard2;
