import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    console.log(id)
    const response = await axios.get(`http://localhost:6002/admin/subCategory/${id}`);
    console.log('consoling the value in the consle9999')
    if (response?.data?.msg === "getting successfull") {
      return NextResponse.json(
        { msg: response?.data?.msg, subCategory: response?.data?.subCategory },
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
