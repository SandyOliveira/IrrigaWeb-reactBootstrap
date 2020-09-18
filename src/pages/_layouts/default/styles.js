import styled from "styled-components";

export const Wrapper = styled.div`
  .App {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

  body {
    font-family: "Poppins", sans-serif;
    background: #fafafa;
  }

  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  }

  /* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
  .sidebar {
    max-width: 250px;
    background: #7386d5;
    color: #fff;
    margin-left: -250px;
    transition: all 0.5s;
  }

  .sidebar.is-open {
    margin-left: 0;
    transition: 0.5s;
  }

  .sidebar-header {
    background: #6d7fcc;
  }

  .sidebar-header h3 {
    color: #fff;
    padding: 1em;
  }

  .sidebar ul p {
    color: #fff;
    padding: 10px;
  }

  .menu-open {
    background: #6d7fcc;
  }

  .nav-item:hover {
    color: #7386d5;
    background: #fff;
  }

  .items-menu {
    color: #fff;
    background: #6d7fcc;
  }

  li a.dropdown-toggle::after {
    display: inline-flex;
    position: relative;
    left: 60%;
    top: 10%;
  }

  .sidebar-header > span {
    position: relative;
    float: right;
    margin: 0.5em;
    font-size: 2rem;
    cursor: pointer;
    display: none;
  }
  .side-menu {
    height: calc(100vh - 130px);
    overflow-y: scroll;
  }

  .side-menu::-webkit-scrollbar {
    width: 10px;
  }

  .side-menu::-webkit-scrollbar-thumb {
    background: #5466b3;
    border-radius: 3px;
  }

  .side-menu::-webkit-scrollbar-thumb:hover {
    background: #3a4c99;
  }

  /* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
  .content {
    padding: 20px;
    margin-left: 0;
    height: 100vh;
  }

  @media only screen and (max-width: 500px) {
    body {
      overflow: hidden;
    }

    .content.is-open {
      margin-left: 100%;
    }

    .sidebar.is-open {
      min-width: 100%;
      max-width: 100%;
      margin-left: 0;
      transition: all 0.5s, height 0s;
    }

    .sidebar.is-open > .sidebar-header span {
      display: unset;
    }

    li a.dropdown-toggle::after {
      display: inline-block;
      position: relative;
      left: 68%;
    }
  }
`;
