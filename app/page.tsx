import Image from "next/image";
import profile from "@/public/assets/Profile_Pic.jpg"
import CardComponent from "./components/CardComponent";
import HTML from "@/public/assets/HTML-CSS.png"

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center flex-col text-white font-sans bg-[url(/assets/Background-1.jpg)] bg-cover">
      <main className=" flex m-15 justify-center content-center">
        <div className=" m-15 mt-30">
          <h2 className="text-3xl">Hello, I am  </h2>
          <h1 className="text-5xl mt-5">Nicolas Gonzaba </h1>
          <h2 className="text-4xl text-center">Web Developer</h2>
        </div>
        <div>
          <Image alt="" src={profile} className="max-w-100"></Image>
        </div>
      </main>
      <div className="text-center">
        <h3 className="text-2xl mb-5">I am currently a Junior web Developer who is currently schooling at CodeStack Academy. I am proficient in C#, HTML, JavaScript, CSS, Unity, Next.JS, and TypeScript. I Excel at creating the backends of applications and fixing bugs in code.</h3>
        {/* <h1 className="text-4xl">About Me</h1> */}
        <h3 className="text-2xl">I enjoy your </h3>
      </div>
      <div className="text-center m-5">
        <h1 className="text-4xl">My Profciencies</h1>
        <div className="flex">
        {/* <Image alt="" src={CSS} className="max-w-120"></Image> */}
        <Image alt="" src={HTML} className="max-w-100"></Image>
        </div>
      </div>
      <div className="flex flex-col text-center">  
        <h1 className="text-5xl"> My Projects</h1>
        <div className="flex justify-between m-15">
        <CardComponent title="Influential Person" description="A website dedicated to person who was very influential to my life, Kazuki Takahashi. Coded with Next.JS and TypeScript" image="assets/Takahashi.jpeg" link="https://polite-bush-0b44e241e.6.azurestaticapps.net/" ></CardComponent>
        <CardComponent title="Rock Paper Scisssors Lizard Spock" description="A website That allows you tplay a game rock paper scissors lizard spock wither against a CPU or against another player. Coded with CSS, Javascript, and an API made by me and hosted on Azure"  image="assets/RPSLS.jpeg" link="https://polite-tree-0e829b71e.6.azurestaticapps.net/" ></CardComponent>
        <CardComponent title="Gaming Trivia" description="A Gaming Trivia quiz that has 3 different difficulties and 100 questions in each difficulty. Made and hosted on Unity and styled on Canva."  image="assets/Trivia-Quiz.jpeg" link="https://play.unity.com/en/games/2fc3ceb3-14b7-4e50-a3b4-18757612689f/gamingtriviav1/" ></CardComponent>
        </div>

      </div>
      <div className="text-center mt-20 mb-20">
        <h1 className="text-4xl">Contact Me</h1>
        <h3>LinkedIn: https://www.linkedin.com/in/nicolas-gonzaba-6782143b7/</h3>
        <h3>Email: Https://nicolasgonzaba1@gmail.com</h3>
        <h3>GitHub: https://github.com/NicolasGonzaba</h3>
        <h3>Phone Number: (209) 395-7191</h3>
      </div>
    </div>
  );
}
