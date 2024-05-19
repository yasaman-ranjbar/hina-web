import { auth } from "@/auth";
import { redirect } from "next/navigation";

interface StudentLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

async function StudentLayout({
  children,
  params: { lng },
}: StudentLayoutProps) {
  
  const session = await auth();

  if (!session || !session.user) {
    if (lng === "fa") {
      redirect("/fa/signin");
    } else {
      redirect("/en/signin");
      
    }
  }

  return (
    <>
      <aside className="bg-gray-300 w-80 flex justify-center items-center"></aside>
      <main>{children}</main>
    </>
  );
}

export default StudentLayout;
