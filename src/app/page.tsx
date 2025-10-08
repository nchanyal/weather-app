import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-0 flex justify-center pt-12 pb-20">
      <div className="max-w-[1216px] w-full">
        <Header />
        <Title />
        <Main />
      </div>
    </div>
  );
}
