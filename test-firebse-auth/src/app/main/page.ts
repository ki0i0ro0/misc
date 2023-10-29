import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const page = async () => {
  const token = cookies().get("next-auth.session-token");

  if (!token) {
    redirect(`/signin`);
  } else {
    redirect(`/`);
  }
};

export default page;
