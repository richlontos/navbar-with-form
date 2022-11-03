import React, { Components } from "react";

const Navbar = props => {
    return (
        <nav class="navbar">
  <div class="container">

    <div class="navbar-header">
      <button class="navbar-toggler" data-toggle="open-navbar1">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="#">
        <h4>Navbar<span>Dojo</span></h4>
      </a>
    </div>

    <div class="navbar-menu" id="open-navbar1">
      <ul class="navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="navbar-dropdown">
          <a href="#" class="dropdown-toggler" data-dropdown="my-dropdown-id">
            Categories <i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown" id="my-dropdown-id">
            <li><a href="#">Actions</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="separator"></li>
            <li><a href="#">Seprated link</a></li>
            <li class="separator"></li>
            <li><a href="#">One more seprated link.</a></li>
          </ul>
        </li>
        <li class="navbar-dropdown">
          <a href="#" class="dropdown-toggler" data-dropdown="blog">
            Blog <i class="fa fa-angle-down"></i>
          </a>
          <ul class="dropdown" id="blog">
            <li><a href="#">Some category</a></li>
            <li><a href="#">Some another category</a></li>
            <li class="separator"></li>
            <li><a href="#">Seprated link</a></li>
            <li class="separator"></li>
            <li><a href="#">One more seprated link.</a></li>
          </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar