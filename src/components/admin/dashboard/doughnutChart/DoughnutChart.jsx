'use client'
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const theme  = 'light'
  const [amount, setAmount] = useState(900);
  const [color, setColor] = useState("");

  useEffect(() => {
    const newColor = theme === "dark" ? "white" : "black";
    setColor(newColor);
  }, [theme]);

  const Labels = useMemo(
    () => ["GooglePay", "CreditCard", "Credit", "Cash"],
    []
  );
  const colors = useMemo(
    () => ["#23ccd1", "#a7236f", "#f56c40", "#f7dc67"],
    []
  );

  const data = {
    //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: Labels,
        data: [2, 9, 3, 5],
        backgroundColor: colors,
        borderWidth: 7,
        borderColor: theme === "light" ? "white" : "black",
        borderRadius: 12,
        cutout: 70,
      },
    ],
  };
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label[context.dataIndex];
            const value = context.parsed;
            return `  ${label} : ${value}`;
          },
        },
      },
    },
  };

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        // First Line
        ctx.restore();
        var fontSize1 = (height / 220).toFixed(2);
        ctx.font = fontSize1 + "em sans-serif";
        ctx.textBaseline = "center";
        var text1 = "Cash",
          textX1 = Math.round((width - ctx.measureText(text1).width) / 2),
          textY1 = height / 2 - 20; // Adjust Y position for the first line
        ctx.fillStyle = "gray";
        ctx.fillText(text1, textX1, textY1);

        // Second Line
        var fontSize2 = (height / 220).toFixed(2);
        ctx.font = fontSize2 + "em sans-serif";
        var text2 = `${amount}\nAED`,
          textX2 = Math.round((width - ctx.measureText(text2).width) / 2),
          textY2 = height / 2 + 10; // Adjust Y position for the second line
        ctx.fillStyle = "gray"; // Set color for the second line
        ctx.fillText(text2, textX2, textY2);

        ctx.save();
      },
    },
  ];

  return (
    <div className=" shadow-special dark:shadow-special2 rounded-xl p-5 grid sm:grid-cols-2 lg:h-[100%] ">
      <div className="grid grid-rows-2 ">
        <div className="grid grid-rows-2  px-2">
          <div className="flex items-center ">
            <p className="text-lg font-medium dark:text-white">
              Collection distribution
            </p>
          </div>

          <div className="dark:text-white">
            <p className="text-sm">Total amount</p>
            <h1 className="text-2xl font-medium">
              365.61 <span className="font-light">AED</span>
            </h1>
          </div>
        </div>
        <div className=" grid grid-cols-2 grid-flow-row px-2 h-[60%] dark:text-white ">
          {Labels.map((label, i) => {
            return (
              <div class="flex items-center gap-4">
                <div
                  style={{ backgroundColor: colors[i] }}
                  className={` chumma w-4 h-4  rounded`}
                ></div>
                <p>{label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`w-[100%] h-[260px]  grid justify-items-center`}>
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
    </div>
  );
};

export default DoughnutChart;
