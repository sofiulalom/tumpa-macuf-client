import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ContinewGoogle = () => {
         const {GoogleProvider}= useContext(AuthContext)
         const handleGoogle=()=>{
            const providerGoogle =new GoogleAuthProvider();
            GoogleProvider(providerGoogle)
            .then(()=>{})
            .catch(e => {
                console.error(e);
            })
         }
    return (
        <div>
            <button onClick={handleGoogle} className="btn btn-outline">Continew with Google</button>
        </div>
    );
};

export default ContinewGoogle;