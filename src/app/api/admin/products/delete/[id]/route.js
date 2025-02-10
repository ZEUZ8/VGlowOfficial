import axios from "axios";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const { id } = params;
    const response = await axios.patch(`http://localhost:6001/delete/${id}`);
    if (response && response.status == 201) {
      return NextResponse.json({ msg: response?.data?.msg }, { status: 201 });
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
      { msg: "Error at product Deleting" },
      { status: 500 }
    );
  }
};
