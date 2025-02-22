import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios/instance";
import axios from "axios";

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    console.log(body, 'consoling the data in teh consle')
    const response = await axios.post(`http://localhost:6001/admin/subCategory`, {...body,});
    console.log(response.data,"consoling the response in the api route handler");
    if (
      response?.data?.msg === "subCategory created successfully" ||
      response.status === 201
    ) {
      return NextResponse.json(
        { msg: response?.data?.msg, category: response?.data?.category },
        { status: response?.status}
      );
    } else {
      const errorMessage = response?.data?.msg ?? "please try again";
      return NextResponse.json({ msg: errorMessage },{ status: response.status ?? 401 });
    }
  } catch (err) {
    console.log(err.response, "error");
    return NextResponse.json({ msg: "Erorr in subCategory Creating" },{ status: 500 });
  }
};
