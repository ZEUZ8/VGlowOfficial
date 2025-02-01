import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios/instance";
import axios from "axios";


export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const response = await axios.post(`http://localhost:6001/add`,{...body})
    console.log(response.status,'the respones')
    if(response?.data?.msg === "Product created successfully"){
      return NextResponse.json(
        { msg: response?.data?.msg, product:response?.data?.product},
        { status: 201}
      );
    }else{
        const errorMessage = response?.data?.msg ?? "Can't Add Product"
        return NextResponse.json({msg:errorMessage},{status:response.status ?? 401})
    }
    // return NextResponse.json({msg:"adding succesfull"})
  } catch (err) {
    console.log(err.response, "erro product adding api handler");
    return NextResponse.json({ msg: "Error at product adding" }, { status: 500 });
  }
};



