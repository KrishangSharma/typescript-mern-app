const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-gray-950 border-b flex items-center justify-evenly">
      <h2 className="text-3xl font-bold">Todo Application</h2>
      <span>
        Made by{" "}
        <a
          href="https://krishangsharma.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Krishang Sharma
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
