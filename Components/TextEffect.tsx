import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Fullstack Developer',
        1500,
        'Cloud Architect',
        1500,
        'Programmer',
        1500,
        'Problem Solver',
        1500
      ]}
      speed={80}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;