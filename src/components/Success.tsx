interface SuccessProps {
  onReset: () => void;
}

const Success = ({ onReset }: SuccessProps) => {
  return (
    <div className="min-h-screen py-8 px-4 relative w-full h-full bg-gradient-to-b from-blue-350 to-black overflow-hidden flex items-center justify-center">
      {/* Animated Background Bubbles */}
      <ul className="absolute inset-0 list-none m-0 p-0 z-0">
        <li className="absolute block list-none w-20 h-20 bg-white/5 animation-delay-0 bottom-[-150px] animate-square left-[25%]"></li>
        <li className="absolute block list-none w-5 h-5 bg-white/5 animation-delay-2 bottom-[-150px] animate-square left-[10%]"></li>
        <li className="absolute block list-none w-5 h-5 bg-white/5 animation-delay-0 bottom-[-150px] animate-square left-[70%]"></li>
        <li className="absolute block list-none w-15 h-15 bg-white/5 animation-delay-0 bottom-[-150px] animate-square left-[40%]"></li>
        <li className="absolute block list-none w-15 h-15 bg-white/5 animation-delay-3 bottom-[-150px] animate-square left-[65%]"></li>
        <li className="absolute block list-none w-10 h-10 bg-white/5 animation-delay-7 bottom-[-150px] animate-square left-[75%]"></li>
        <li className="absolute block list-none w-20 h-20 bg-white/5 animation-delay-15 bottom-[-150px] animate-square left-[35%]"></li>
        <li className="absolute block list-none w-15 h-15 bg-white/5 animation-delay-2 bottom-[-150px] animate-square left-[50%]"></li>
        <li className="absolute block list-none w-25 h-25 bg-white/5 animation-delay-4 bottom-[-150px] animate-square left-[20%]"></li>
        <li className="absolute block list-none w-15 h-15 bg-white/5 animation-delay-19 bottom-[-150px] animate-square left-[85%]"></li>
      </ul>

      <div className="bg-white/10 backdrop-blur-md max-w-2xl mx-auto rounded-xl shadow-2xl border border-white/20 backdrop-saturate-150 p-8 text-center relative z-10">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Registration Successful!
        </h1>
        <p className="text-blue-100 text-lg mb-6">
          Thank you for submitting your registration. We'll be in touch soon!
        </p>
        <button
          onClick={onReset}
          className="relative justify-self-center items-start px-6 py-3 text-white text-base font-semibold tracking-wide rounded-xl overflow-hidden bg-transparent border-none cursor-pointer block group mt-4 mx-auto"
        >
          <span className="absolute inset-0 bg-[#3483eb] rounded-xl transition-all duration-400 ease-in-out group-hover:backdrop-blur-2xl group-hover:scale-110 group-hover:translate-x-[5%] group-hover:translate-y-[50%] z-[-2]"></span>
          <span className="absolute bottom-0 right-0 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full transition-all duration-400 ease-in-out group-hover:w-full group-hover:h-full group-hover:rounded-xl group-hover:translate-x-0 group-hover:translate-y-0 translate-x-[10px] translate-y-[10px] z-[-1]"></span>
          ← Back to Form
        </button>
      </div>
    </div>
  );
};

export default Success;
