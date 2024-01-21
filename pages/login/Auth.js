import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function Auth() {
    const router = useRouter();

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.id.length != 28) {
          router.push('/login')
        }
    },[router])
}
