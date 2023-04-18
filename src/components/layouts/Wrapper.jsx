const Wrapper = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto flex-grow min-h-screen">
      {children}
    </div>
  );
};
export default Wrapper;
