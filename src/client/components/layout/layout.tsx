type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="flex flex-col grow">
        {children}
      </main>
    </>
  );
};

export default Layout;
