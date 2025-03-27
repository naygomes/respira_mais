const Text = ({ children }: { children: string }) => {
  return (
    <p className="text-xl text-dark text-center mx-auto my-10">{children}</p>
  );
};

export default Text;
