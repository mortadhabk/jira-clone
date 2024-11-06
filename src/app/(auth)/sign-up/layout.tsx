
interface SignUpLayoutProps {
    children: React.ReactNode;  
}

const SignInLayout = ({children}: SignUpLayoutProps) => {
    return ( 
            <nav className="flex justify-center items-center p-4"> 
            {children}
            </nav>

     );
}
 
export default SignInLayout;