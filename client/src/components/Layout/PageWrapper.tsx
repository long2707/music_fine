import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setAppState } from "../../apps/features/appStateSlice";

const PageWrapper = ({
  state,
  children,
}: {
  state: string;
  children: ReactNode;
}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setAppState(state));
  }, [dispatch, state]);

  return <>{children}</>;
};

export default PageWrapper;
