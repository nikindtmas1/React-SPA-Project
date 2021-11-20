

const Header = () => {

    return (
        <div className="extra-block1">
            <div className="row-top">
                <div className="main">
                    <ul className="list-soc">
                        <li><a href="#"><img alt="" src="/images/soc-icon1.png" /></a></li>
                        <li><a href="#"><img alt="" src="/images/soc-icon2.png" /></a></li>
                    </ul>
                </div>
            </div>
            <header>
                <div className="row-nav">
                    <div className="main">
                        <h1 className="logo"><a href="/index"><img alt="" src="/images/logo.png" /></a></h1>
                        <nav>
                            <ul className="menu">
                                <li className="current"><a href="index.html">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/gallery">Gallery</a></li>
                                <li><a href="/contacts">Contacts</a></li>
                            </ul>
                        </nav>
                        <div className="clear"></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;