import { useState } from "react";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth"; // 이메일&비번인지, 폰번호인지, 소셜로그인인지에 따라 다르게 import

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // firebase에서는 promise 객체를 반환하는 경우가 많음.
  // async await로 처리
  const signIn = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {};

  return (
    <>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>로그인</button>
    </>
  );
};
