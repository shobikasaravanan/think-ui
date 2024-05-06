
import CopyButton from "@/components/app/CopyButton";
import Link from "next/link";

export default function Home() {
  const link = '<link rel="stylesheet" href="https://mind-ui-library.netlify.app/mind-ui.css">"/>'
 
  return (
    <div className="leading-6 mt-10 flex justify-center items-center flex-col">
      <div className="text-3xl	text-center font-bold"><div>Build blazingly fast web apps with</div>  <div className="mt-3 font-extrabold text-red-400">Think UI</div></div>
      <p className="text-center text-lg mt-10">Mind UI is a lightweight and modular component library which helps developers to build beautiful web apps with speed. Copy the below code to use Think UI in your project.</p>
      <div className="flex justify-center items-center mt-10">
        <Link className="rounded-lg bg-red-400 hover:bg-red-500 text-white text-xl p-5" href="./alert">Get Started =></Link>
      </div>

      <div className="w-3/4 h-48 bg-red-100 mt-10 flex justify-center items-center">
        <div className="bg-slate-800 rounded-md m-auto h-1/2 w-4/5 text-white">
          <div> 
            <div></div>
            <CopyButton linkText={link} />
          </div>
          <div className="text-center w-auto">{link}</div>
        </div>
      </div>

    </div>
  );
}


