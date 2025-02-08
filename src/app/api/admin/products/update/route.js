import axios from "axios";
import { NextResponse } from "next/server";

export const PUT = async (req, res) => {
  try {
    const body = await req.json();
    const response = await axios.put("http://localhost:6001/update", {
      ...body,
    });
    if (response?.data?.msg === "Product updated successfully") {
      return NextResponse.json(
        { msg: response?.data?.msg, product: response?.data?.product },
        { status: 201 }
      );
    } else {
      const errorMessage = response?.data?.msg ?? "Can't update Product";
      return NextResponse.json(
        { msg: errorMessage },
        { status: response.status ?? 401 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { msg: "Error at product updating" },
      { status: 500 }
    );
  }
};
