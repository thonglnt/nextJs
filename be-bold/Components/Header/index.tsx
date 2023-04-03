// Mock
import { MockDataMenu } from "@/mock/mockDataMenu";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderDataMenu = () =>
    MockDataMenu.map((menuItem) => (
      <li key={menuItem} className="nav-item menu">
        <div className="wrapper-hr-tag">
          <hr className="hr-tag" />
        </div>
        <a className="nav-link" aria-current="page" href="#">
          {menuItem}
        </a>
      </li>
    ));

  const handleOpenCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid d-flex justify-content-between mt-3 ps-4 pe-4">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {renderDataMenu()}
          </ul>
        </div>
      </nav>
      <div className="infor d-flex align-items-center">
        <div className="account me-4">
          <Link href={""} prefetch={false}>
            <i className="fa fa-user" aria-hidden="true"></i>
          </Link>
        </div>
        <Link
          prefetch={false}
          href={""}
          onClick={(e) => handleOpenCard()}
          className="shopping-card d-flex align-items-center"
        >
          <p className="me-2 mb-0">$0.00</p>
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        </Link>
      </div>


      {isOpen && <Sidebar onHandleOpenSibar={handleOpenCard} />}
    </div>
  );
};

export default Header;
