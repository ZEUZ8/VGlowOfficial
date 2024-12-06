import axios from "axios";
import { NextResponse } from "next/server";
import { getCookie, setCookie } from "../cookie";
import axiosInstance from "@/lib/axios/instance";


export const POST = async (req, res) => {
  console.log('got in the api router')
  try {
    const body = await req.json();
    const response = await axiosInstance.post(`http://localhost:6000/login`,{...body});
    console.log(response,' the response')
    if(response?.data?.msg === "login succesfull"){
      return NextResponse.json(
        { msg: response?.data?.msg, user: response?.data?.user },
        { status: 200 }
      );
    }else{
        const errorMessage = response?.data?.msg ?? "Can't find you, please try again"
        return NextResponse.json({msg:errorMessage},{status:response.status ?? 401})
    }
  } catch (err) {
    console.log(err, "erro in the login api route handler");
    return NextResponse.json({ msg: "Erorr in login" }, { status: 500 });
  }
};



