import { useMediaQuery } from "react-responsive";

const BigDesktop = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isBigDesktop = useMediaQuery({ minWidth: 1201 });
  return isBigDesktop ? children : null;
};

const Desktop = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1200 });
  return isDesktop ? children : null;
};

const Tablet = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 829, maxWidth: 1023 });
  return isTablet ? children : null;
};

const Mobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 828 });
  return isMobile ? children : null;
};

const SmallMobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return isMobile ? children : null;
};

// mobile이 아닐 때만 출력되는 컴포넌트
const Default = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isNotMobile = useMediaQuery({ minWidth: 828 });
  return isNotMobile ? children : null;
};

const Default2 = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isNotMobile = useMediaQuery({ minWidth: 601 });
  return isNotMobile ? children : null;
};

export { BigDesktop, Desktop, Tablet, Mobile, SmallMobile, Default, Default2 };
