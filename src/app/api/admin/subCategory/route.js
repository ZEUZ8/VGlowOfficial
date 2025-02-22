import { NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req, { params }) => {
  console.log(params, "the parras mconsling");
  try {
    const response = await axios.get(`http://localhost:6001/admin/subCategory`);
    if (
      response?.data?.msg === "getting successfull" ||
      response.status === 201
    ) {
      return NextResponse.json(
        { msg: response?.data?.msg, category: response?.data?.category },
        { status: 201 }
      );
    } else {
      const errorMessage = response?.data?.msg ?? "please try again";
      return NextResponse.json(
        { msg: errorMessage },
        { status: response.status ?? 401 }
      );
    }
  } catch (err) {
    console.log(err.response, "error");
    return NextResponse.json(
      { msg: "Erorr in SubCategory List" },
      { status: 500 }
    );
  }
};
