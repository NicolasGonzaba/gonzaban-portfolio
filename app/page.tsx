import Image from "next/image";
import profile from "@/public/assets/Profile_Pic.jpg"
import CardComponent from "./components/CardComponent";
import HTML from "@/public/assets/HTML-CSS.png"
import JS from "@/public/assets/img_javascript.jpg"
import CSharp from "@/public/assets/C_sharp.png"
import TS from "@/public/assets/Typescript.png"
import Next from "@/public/assets/next-js.svg"
export default function Home() {
  return (
    <div className="flex min-h-screen justify-center flex-col text-white font-sans bg-[url(/assets/Background-1.jpg)] bg-cover">
      <main className=" flex m-15 justify-center content-center">
        <div className=" m-15 mt-30">
          <h2 className="text-3xl ">Hello, I am  </h2>
          <h1 className="text-7xl mt-5 text-blue-500 font-(family-name:--font-michroma)">Nicolas Gonzaba </h1>
          <h2 className="text-5xl text-center text-amber-300 font-(family-name:--font-roboto-slab)">Web Developer</h2>
        </div>
        <div className="ms-30 border-red-500">
          <Image alt="" src={profile} className="max-w-80"></Image>
        </div>
      </main>
      <h1 className="text-7xl mb-10 text-center font-(family-name:--font-michroma)">About Me</h1>
      <div className="text-center bg-blue-800 ms-10 me-10">
        
        <h3 className="text-3xl mb-5 font-(family-name:--font-geist-mono)">I am currently a Junior web Developer who is currently schooling at CodeStack Academy. I am proficient in C#, HTML, JavaScript, CSS, Unity, Next.JS, and TypeScript. I Excel at creating the backends of applications and fixing bugs in code and love the endless growth and creativity coding allows.</h3>
        
        <h3 className="text-3xl">I enjoy fast paced environments that always have me busy and give me oppurtunities to show my creativity. I also enjoy working with others and being able to share my perspective with others and learning from them in return. In my free time i ejoy playing card games, watching and analyzing movies and playing video games.</h3>
      </div>
      <div className="text-center m-5">
        <h1 className="text-7xl font-(family-name:--font-michroma)">My Profciencies</h1>
        <div className="flex items-center">
          <Image alt="" src={Next} className="max-w-60 max-h-60 m-7" ></Image>
          <Image alt="" src={HTML} className="max-w-100 max-h-100 m-7"></Image>
          <Image alt="" src={JS} className="max-w-60 max-h-50 m-7"></Image>
          <Image alt="" src={CSharp} className="max-w-60 max-h-60 m-7"></Image>
          <Image alt="" src={TS} className="max-w-60 max-h-60 m-7"></Image>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-7xl font-(family-name:--font-michroma)"> My Projects</h1>
        <div className="flex justify-between m-15">
          <CardComponent title="Influential Person" description="A website dedicated to person who was very influential to my life, Kazuki Takahashi. Coded with Next.JS and TypeScript" image="assets/Takahashi.jpeg" link="https://polite-bush-0b44e241e.6.azurestaticapps.net/" ></CardComponent>
          <CardComponent title="Rock Paper Scisssors Lizard Spock" description="A website That allows you tplay a game rock paper scissors lizard spock wither against a CPU or against another player. Coded with CSS, Javascript, and an API made by me and hosted on Azure" image="assets/RPSLS.jpeg" link="https://polite-tree-0e829b71e.6.azurestaticapps.net/" ></CardComponent>
          <CardComponent title="Gaming Trivia" description="A Gaming Trivia quiz that has 3 different difficulties and 100 questions in each difficulty. Made and hosted on Unity and styled on Canva." image="assets/Trivia-Quiz.jpeg" link="https://play.unity.com/en/games/2fc3ceb3-14b7-4e50-a3b4-18757612689f/gamingtriviav1/" ></CardComponent>
        </div>

      </div>
      <div className="text-center mb-20">
        <h1 className="text-4xl mb-3">Contact Me</h1>
        <h3 className="mb-3">Linked In: https://www.linkedin.com/in/nicolas-gonzaba-6782143b7/</h3>
        <h3 className="mb-3">Email: Https://nicolasgonzaba1@gmail.com</h3>
        <h3 className="mb-3">GitHub: https://github.com/NicolasGonzaba</h3>
        <h3>Phone Number: (209) 395-7191</h3>
      </div>
    </div>
  );
}
