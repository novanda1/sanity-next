import { ReactNode, useEffect } from "react";

const Layout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add("bg-zinc-900");
    document.body.classList.add("text-white");
  }, []);

  return <>{children}</>;
};

export default Layout;
