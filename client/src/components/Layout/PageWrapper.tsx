import { ReactNode, useEffect } from "react";
import { Header } from "../common";

const PageWrapper = ({
  state,
  children,
}: {
  state: string;
  children: ReactNode;
}) => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (props.state) {
  //       dispatch(setAppState(props.state));
  //     }
  //   }, [dispatch, props]);

  return <>{children}</>;
};

export default PageWrapper;
