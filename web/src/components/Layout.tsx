import {
  ReactNode,
  useLayoutEffect,
} from "react";

const Layout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  useLayoutEffect(() => {
    document.body.classList.add("bg-zinc-900");
    document.body.classList.add("text-white");
  }, []);

  return <>{children}</>;
};

export default Layout
