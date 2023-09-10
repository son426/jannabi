import Spinner from "@/data/images/common/spinner.gif";
import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

interface ILoading {
  isloading: boolean;
  loadingtext: string;
}

export const LoadingWrapper = styled.div`
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  background-color: black;
`;

export const LoadingText = styled.div`
  width: 100%;
  height: 20%;
  color: white;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
`;

function Loading({ isloading, loadingtext }: ILoading) {
  return (
    <>
      <AnimatePresence>
        {isloading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: "0",
              width: "100%",
              zIndex: "999",
            }}
          >
            <LoadingWrapper>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <LoadingText>{loadingtext}</LoadingText>
              </motion.div>
            </LoadingWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Loading;
