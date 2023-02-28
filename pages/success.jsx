import Link from "next/link";

export default function Success() {
  return (
    <div className="bg-[#f5f5f5] h-[100vh] flex items-center justify-center flex-col">
      <p className="text-lg text-black">Form successfully submitted!</p>
      <div className="pt-2">
        <Link className="uppercase text-black underline" href="/">
          {" "}
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
