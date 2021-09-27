import ActiveLink from '../../../Resource/ActiveLink/ActiveLink';
const NavigationSingle =({link,children})=> {
    return ( 
        <>
        <ActiveLink activeClassName="active" href={link}>
        <a>{children}</a>
        </ActiveLink>        
        </>
     );
}

export default NavigationSingle;