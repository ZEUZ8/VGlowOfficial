import axiosInstance from "@/lib/axios/instance";
import { NextResponse } from "next/server";

export const POST = async (req, res)=>{
  console.log('getted in the register function')
  try {
    const body = await req.json();
    const response = await axiosInstance.post(`/register`,{...body});
    if (response.status === 200) {
      // setCookie(response.data.to)
      console.log(response?.data?.token, ' the data in the console')
      return NextResponse.json({ msg: response?.data?.msg}, response?.data);
    } else {
      // Handle non-200 status codes gracefully
      const errorMessage = response?.data?.msg ?? "Something went wrong"
      return NextResponse.json({msg:errorMessage},{status: response.status ?? 401})
    }
  } catch (error) {
    console.log(error,' the err')
    return NextResponse.json(
      { msg: error?.response?.data ?? "Error during Signup", error: error?.response?.data },
      { status: 500 }
    );
  }
}

