const SingleTech =({item})=> {
    return ( 
        <>
        <div className="col-sm-12">
                        <div className="basic-clients">
                            <a href="#"><img src={item.img} alt="" /></a>
                            <p>{item.title}</p>
                        </div>
         </div>
        </>
     );
}

export default SingleTech;