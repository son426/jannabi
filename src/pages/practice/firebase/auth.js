import { useState } from "react";
import { auth, googleProvider } from "../../../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"; // 이메일&비번인지, 폰번호인지, 소셜로그인인지에 따라 다르게 import

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  // firebase에서는 promise 객체를 반환하는 경우가 많음.
  // async await로 처리
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>로그인</button>
      </div>
      <div>
        <button onClick={signInWithGoogle}>구글 로그인</button>
      </div>
      <div>
        <button onClick={signOut}>로그아웃</button>
      </div>
    </>
  );
};

export default Auth;
