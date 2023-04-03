export type SidebarProps = {
  onHandleOpenSibar: () => void;
};

const Sidebar = ({ onHandleOpenSibar }: SidebarProps) => {
  return (
    <div
      className="sidebar offcanvas offcanvas-end position-absolute bg-white top-0 end-0"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header d-flex justify-content-around align-items-center sidebar-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Shopping cart
        </h5>
        <button
          onClick={(e) => onHandleOpenSibar()}
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <hr className="offcanvas-hr" />
      <div className="offcanvas-body d-flex justify-content-center">
        <button type="button" className="shopping-cart">
          Continues Shopping
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
