import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios/instance";
import axios from "axios";

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const response = await axios.post(`http://localhost:6001/admin/category`, {...body,});
    console.log(response.data,"consoling the response in the api route handler");
    if (
      response?.data?.msg === "Category created successfully" ||
      response.status === 201
    ) {
      return NextResponse.json(
        { msg: response?.data?.msg, category: response?.data?.category },
        { status: 409 }
      );
    } else {
      const errorMessage = response?.data?.msg ?? "please try again";
      return NextResponse.json({ msg: errorMessage },{ status: response.status ?? 401 });
    }
  } catch (err) {
    console.log(err.response, "error");
    return NextResponse.json({ msg: "Erorr in Category Creating" },{ status: 500 });
  }
};
