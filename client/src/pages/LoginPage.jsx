import { CustomButton } from '../components/index';
import { useAuth0 } from "@auth0/auth0-react";


function LoginPage() {

    const { user, isAuthenticated, loginWithRedirect, loginWithPopup, logout } = useAuth0();

    return (
        <div style={{height:"100%", width:"100%", display:"flex", justifyContent:"center", alignItems:"center" }}>
            <CustomButton 
                btnType="button"
                title={!isAuthenticated ? 'Login' : 'Logout'}
                styles={!isAuthenticated ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
                handleClick={() => {
                    if(!isAuthenticated) loginWithRedirect();
                    else logout({ logoutParams: { returnTo: window.location.origin } });
                }}
            />
        </div>
    );
}

export default LoginPage;
