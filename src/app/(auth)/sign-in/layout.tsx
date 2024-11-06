interface SignInLayoutProps {
    children: React.ReactNode;  
}

const SignInLayout = ({children}: SignInLayoutProps) => {
    return ( 
            <nav className="flex justify-center items-center p-4"> 
            {children}
            </nav>

     );
}
 
export default SignInLayout;