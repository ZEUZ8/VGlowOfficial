import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    console.log(id)
    const response = await axios.get(`http://localhost:6001/admin/subCategory/${id}`);
    if (response?.data?.msg === "found product") {
      return NextResponse.json(
        { msg: response?.data?.msg, product: response?.data?.existingProduct },
        { status: 201 }
      );
    } else {
      const errorMessage = response?.data?.msg ?? "Can't find Product";
      return NextResponse.json(
        { msg: errorMessage },
        { status: response.status ?? 401 }
      );
    }
    // return NextResponse.json({msg:"adding succesfull"})
  } catch (err) {
    return NextResponse.json(
      { msg: "Error at product Getting" },
      { status: 500 }
    );
  }
};
