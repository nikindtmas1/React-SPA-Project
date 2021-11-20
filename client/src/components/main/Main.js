 import Footer from '../footer/Footer';
 import Header from "../navigation/Header";
 
const Main = () => {

    return (
        <>
        <Header />
        <div className="block">
            <div className="nav-buttons">
                <div id="nav">&nbsp;</div>
            </div> 
            <div className="row-1">
                <div className="container_12">
                    <div className="wrapper">
                        <article className="grid_4">
                            <figure className="box-1"><img src="/images/page1-img1.jpg" alt="" />
                                <figcaption>Face Care <a href="more.html"></a></figcaption>
                            </figure>
                        </article>
                        <article className="grid_4">
                            <figure className="box-1"><img src="/images/page1-img2.jpg" alt="" />
                                <figcaption>Hand Care <a href="more.html"></a></figcaption>
                            </figure>
                        </article>
                        <article className="grid_4">
                            <figure className="box-1"><img src="/images/page1-img3.jpg" alt="" />
                                <figcaption>Foot Care <a href="more.html"></a></figcaption>
                            </figure>
                        </article>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
        </>
        
       
    );
};

export default Main;