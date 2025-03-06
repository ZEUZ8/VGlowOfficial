import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async(req,res) => {
    try {
        const response = await axios.get(`http://localhost:6001/admin/products`)
        if(response?.data?.msg === "getting successfull"){
          return NextResponse.json(
            { msg: response?.data?.msg, products:response?.data?.products},
            { status: 201}
          );
        }else{
            const errorMessage = response?.data?.msg ?? "Can't find Products"
            return NextResponse.json({msg:errorMessage},{status:response.status ?? 401})
        }
        // return NextResponse.json({msg:"adding succesfull"})
      } catch (err) {
        console.log(err.response, "erro product getting api handler");
        return NextResponse.json({ msg: "Error at product Getting" }, { status: 500 });
      }
};
