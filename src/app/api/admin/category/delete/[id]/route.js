import { NextResponse } from "next/server";
import axios from "axios";

export const DELETE = async (req,{params}) => {
  try {
    const { id } = params;
    const response = await axios.delete(`http://localhost:6002/admin/category/${id}`);
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
    return NextResponse.json(
      { msg: "Erorr in Category List" },
      { status: 500 }
    );
  }
};
