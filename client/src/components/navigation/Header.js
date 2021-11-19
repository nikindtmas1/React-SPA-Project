

const Header = () => {

    return (
        <div class="extra-block1">
            <div class="row-top">
                <div class="main">
                    <ul class="list-soc">
                        <li><a href="#"><img alt="" src="/images/soc-icon1.png" /></a></li>
                        <li><a href="#"><img alt="" src="/images/soc-icon2.png" /></a></li>
                    </ul>
                </div>
            </div>
            <header>
                <div class="row-nav">
                    <div class="main">
                        <h1 class="logo"><a href="/index"><img alt="" src="/images/logo.png" /></a></h1>
                        <nav>
                            <ul class="menu">
                                <li class="current"><a href="index.html">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/gallery">Gallery</a></li>
                                <li><a href="/contacts">Contacts</a></li>
                            </ul>
                        </nav>
                        <div class="clear"></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;