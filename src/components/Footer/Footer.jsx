export const Footer = () => {
  return (
    <div className="flex items-center justify-center h-screen text-7xl flex-col">
      <div>{"That's"} all, Thanks!</div>
      <div className="flex mt-20 text-2xl gap-x-20 ">
        <a href="#" className="text-gray-400 hover:text-black">
          Facebook
        </a>
        <a href="#" className="text-gray-400 hover:text-black">
          X
        </a>
        <a href="#" className="text-gray-400 hover:text-black">
          Youtube
        </a>
        <a href="#" className="text-gray-400 hover:text-black">
          Apple
        </a>
        <a href="#" className="text-gray-400 hover:text-black">
          I {"don't"} know
        </a>
      </div>
      <div className="mt-40 text-lg text-gray-400">
        Khalid Sheet &copy; 2023 | All rights reserved
      </div>
    </div>
  );
};
