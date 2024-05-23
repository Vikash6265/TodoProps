const Navbar = ({name,version}) =>{
    return(
      <nav class="navbar bg-dark text-white">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 text-light">{name}</span>
          <span class="navbar-brand mb-0 h1 text-light">{version}</span>
        </div>
      </nav>
    )
};

Navbar.defaultProps ={
    name:"Default Name",
    version:1,
}

export default Navbar;