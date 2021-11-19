 import Footer from "./Footer";
 import Header from "./Header";
 
const Main = () => {

    return (
        <>
        <Header />
        <div class="block">
            <div class="nav-buttons">
                <div id="nav">&nbsp;</div>
            </div>
            <div class="row-1">
                <div class="container_12">
                    <div class="wrapper">
                        <article class="grid_4">
                            <figure class="box-1"><img src="/images/page1-img1.jpg" alt="" />
                                <figcaption>Face Care <a href="more.html"></a></figcaption>
                            </figure>
                        </article>
                        <article class="grid_4">
                            <figure class="box-1"><img src="/images/page1-img2.jpg" alt="" />
                                <figcaption>Hand Care <a href="more.html"></a></figcaption>
                            </figure>
                        </article>
                        <article class="grid_4">
                            <figure class="box-1"><img src="/images/page1-img3.jpg" alt="" />
                                <figcaption>Foot Care <a href="more.html"></a></figcaption>
                            </figure>
                        </article>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        </>
        
       
    );
};

export default Main;