function Header() {
    return (
        <header className="page-header sticky-header">
          <nav className="nav-bar">
            <div className="logo"><a href="/home" className="logo-button">DECATHLON</a></div>
            <div className="search-bar">
              <div className="search">
                <input id="search-input"></input>
                <button id="search-button">Lupita</button>
              </div>
            </div>
            <div className="tool-zone">
              <div className="tool">
                <a href="/help" className="tool-link">Ayuda</a>
              </div>
              <div className="tool">
                <a href="/shop" className="tool-link">Tienda</a>
              </div>
              <div className="tool">
                <a href="/account" className="tool-link">Mi Cuenta</a>
              </div>
            </div>
            <div className="cart">
              <a href="/checkout" className="cart-button">
                <span className="cart-pict">Carrito</span>
                <span className="cart-counter"></span>
              </a>
            </div>
          </nav>
        </header>
    );
  }
  
  export default Header;
  