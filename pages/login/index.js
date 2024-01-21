import LoginGoogle from '@/components/Button/LoginGoogle'
import Loading from '@/components/Loading/Loading';
import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, getRedirectResult, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function Index() {
    const route = useRouter();
    const signInWithGoogle = async (e) => {
        e.preventDefault();
        signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          localStorage.setItem('user', JSON.stringify({
            name : user.displayName,
            email : user.email,
            id : user.uid,
           }));
          // ...
          route.push('/');
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      };
  return (
    <div>
	     <LoginGoogle  signInWithGoogle={signInWithGoogle}/>
    </div>
  )
}
