import NavigationSingle from "./NavigationSingle/NavigationSingle";

const Navigation =({list})=> {
    return ( 
        <>

            {
               list.map((item,index)=>(
                   <NavigationSingle key={index} link={item.url}>
                    {item.title}
                   </NavigationSingle>
               ))
               
            }

        </>
     );
}

export default Navigation;