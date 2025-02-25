import { NextResponse } from "next/server";
import axios from "axios";

export const DELETE = async (req,{params}) => {
  console.log('consoling the value')
  try {
    const { id } = params;
    const response = await axios.delete(`http://localhost:6002/admin/subCategory/${id}`);
    console.log(response,'the response')
    if (
      response?.data?.msg === "subCategory Deleted" ||
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
    console.log(err,'error in the subCateogry deleting api route handler ')
    return NextResponse.json(
      { msg: "Erorr in Category List" },
      { status: 500 }
    );
  }
};
