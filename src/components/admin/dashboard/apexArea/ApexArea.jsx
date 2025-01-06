'use client'
import ReactApexChart from "react-apexcharts";
// import { salesChartData1 } from "../assets/sales";
// import salesData from "../../generateData";
import { useContext, useEffect, useRef, useState } from "react";

const ApexArea = () => {
  const theme  = 'light'

  // useEffect(() => {
  //   console.log(theme, " thethe hve change");
  // }, [theme]);

  const tickRef = useRef(null);
  const [tickCount, setTickCount] = useState(0);
  const [tickAmount, setTickAmount] = useState(5);
  useEffect(() => {
    const handleResize = () => {
      setTickCount(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (tickRef.current) {
      setTickAmount(Math.floor(tickRef.current.offsetWidth / 100));
    }
  }, [tickCount]);

  const series = [
    {
      name: "time",
      data: [
        [new Date("2024-01-23T00:01:15").getTime(), 1800.95],
        [new Date("2024-01-23T00:06:45").getTime(), 1850.34],
        [new Date("2024-01-23T00:12:00").getTime(), 1900.18],
        [new Date("2024-01-23T00:18:00").getTime(), 2000.18],
        [new Date("2024-01-23T01:02:00").getTime(), 1900.18],
        [new Date("2024-01-23T01:12:00").getTime(), 1800.18],
        [new Date("2024-01-23T01:18:00").getTime(), 2000.18],
        [new Date("2024-01-23T02:04:00").getTime(), 1800.18],
        [new Date("2024-01-23T02:12:00").getTime(), 1900.18],
        [new Date("2024-01-23T02:18:00").getTime(), 2200.18],
        [new Date("2024-01-23T03:12:00").getTime(), 2400.18],
        [new Date("2024-01-23T03:18:00").getTime(), 2500.18],
        [new Date("2024-01-23T03:40:00").getTime(), 2300.18],
        [new Date("2024-01-23T04:02:00").getTime(), 2100.18],
        [new Date("2024-01-23T04:10:00").getTime(), 2300.18],
        [new Date("2024-01-23T04:12:00").getTime(), 2500.18],
        [new Date("2024-01-23T05:12:00").getTime(), 2600.18],
        [new Date("2024-01-23T06:18:00").getTime(), 2500.18],
        [new Date("2024-01-23T07:12:00").getTime(), 2300.18],
        [new Date("2024-01-23T08:12:00").getTime(), 2000.18],
        [new Date("2024-01-23T09:20:00").getTime(), 1800.18],
        [new Date("2024-01-23T10:12:00").getTime(), 1700.18],
        [new Date("2024-01-23T11:12:00").getTime(), 2000.18],
        [new Date("2024-01-23T12:12:00").getTime(), 2200.18],
        [new Date("2024-01-23T13:12:00").getTime(), 2500.18],
        [new Date("2024-01-23T14:12:00").getTime(), 2400.18],
        [new Date("2024-01-23T15:12:00").getTime(), 2600.18],
        [new Date("2024-01-23T16:12:00").getTime(), 2500.18],
        [new Date("2024-01-23T17:12:00").getTime(), 2300.18],
        [new Date("2024-01-23T18:12:00").getTime(), 2500.18],
        [new Date("2024-01-23T19:12:00").getTime(), 2700.18],
        [new Date("2024-01-23T20:12:00").getTime(), 2600.18],
        [new Date("2024-01-23T21:12:00").getTime(), 2300.18],
        [new Date("2024-01-23T22:12:00").getTime(), 2100.18],
        [new Date("2024-01-23T23:12:00").getTime(), 1900.18],
        [new Date("2024-01-23T23:16:00").getTime(), 2000.6],
      ],
      color: "#00ff00",
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 300,
      zoom: {
        autoScaleYaxis: true,
      },
    },

    // annotation were hided change if it needed at any time 

    // annotations: {
    //   yaxis: [
    //     {
    //       y: 0,
    //       borderColor: "white",
    //       label: {
    //         show: true,
    //         text: "Average",
    //         style: {
    //           color: "#fff",
    //           background: "#00E396",
    //         },
    //       },
    //     },
    //   ],
    //   xaxis: [
    //     {
    //       x: new Date("2024-01-23T00:00:00").getTime(),
    //       type: "datetime",
    //       borderColor: "#ffffff",
    //       yAxisIndex: 0,
    //       labels: {},
    //     },
    //   ],
    // },


    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Hourly Sales",
      align: tickAmount < 5 ? "left" : "center",
      style: {
        fontSize: tickAmount < 5 ? "15px":"22px",
        fontWeight: "Bold",
        color: theme === "light" ? "#263238" : "white",
      },
    },
    toolbar: {
      show: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },


    yaxis: {
      // title: {
      //   text: "Price",
      // },

      min: 0,
      max: 3000,
      tickAmount: 3,
      labels: {
        formatter: function (val) {
          return val.toFixed(2).replace(/\.00$/, "");
        },
        style: {
          fontSize: tickAmount < 5 ? "9px" :"14px",
          fontWeight: 500,
          colors: theme === "light" ? "#263238" : "white",
        },
      },
    },

    xaxis: {
      type: "datetime",
      x: new Date("2024-01-23T00:00:00").getTime(),
      tickAmount: tickAmount,
      labels: {
        format:"htt",
        // formatter: (value) => {
        //   // Convert x-axis values (milliseconds) to hours and format label
        //   const date = new Date(value);
        //   const hours = date.getHours();
        //   return hours % 12 === 0 ? "12am" : `${hours % 12}am`;
        // },
        style: {
          fontSize: "12px",
          fontWeight: 500,
          colors: theme === "light" ? "#263238" : "white",
        },
      },
      // min: new Date() - 3 * 60 * 60 * 1000,
      axisTicks: {
        enable: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      offsetX: 5,
    },

    
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 20,
      },
    },
    tooltip: {
      stroke: {
        show: false, // Set to false to hide the vertical line when hovering
      },
      enabled: true,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: [
          {
            offset: 30,
            color: "#22FF33 ",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#99ff99", // Set the starting color to green
            opacity: 0.1,
          },
        ],
      },
    },
    selection: "one_year",
    stroke: {
      width: 2,
      curve: "smooth",
      lineCap: "round",
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          colors: ["#00E396"],
        },
      },
    },
  };

  return (
    <div ref={tickRef} id="chart-timeline  bg-green-500">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
        width={"100%"}
      />
    </div>
  );
};

export default ApexArea;
