"use client";
import { useParams } from "next/navigation";
import EditForm from "../component/EditForm";

const EditVisa = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  return (
    <div><EditForm id={id} /></div>
  )
}

export default EditVisa