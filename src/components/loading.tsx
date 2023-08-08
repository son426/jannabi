import Spinner from "@/data/images/common/spinner.gif";
import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

interface ILoadingProps {
  loadingpercent: number;
  isloading: boolean;
}

const LoadingWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const SpinnerImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;

const ProgressBarContainer = styled.div`
  width: 30%;
  height: 30px;
  background-color: black;
  border: 2px solid white;
  border-radius: 30px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ loadingpercent: number }>`
  width: ${(props) => props.loadingpercent * 100}%;
  height: 100%;
  background-color: white;
  transition: width 0.3s ease-in-out;
`;

const LoadingPercentage = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: white;
`;

function Loading({ loadingpercent, isloading }: ILoadingProps) {
  return (
    <>
      <AnimatePresence>
        <LoadingWrapper
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SpinnerImage src={Spinner} alt="Loading Spinner" />
          <ProgressBarContainer>
            <ProgressBarFill loadingpercent={loadingpercent} />
          </ProgressBarContainer>
          <LoadingPercentage>
            {Math.round(loadingpercent * 100)}%
          </LoadingPercentage>
        </LoadingWrapper>
      </AnimatePresence>
    </>
  );
}
export default Loading;
