import { CDN_URL, LOGO_URL } from "../Utils/contants";

const Header = () => {
  return (
    <header className="w-100 shadow-sm bg-dark text-white py-2">
      <div className="container d-flex align-items-center justify-content-between flex-wrap">

        {/* Logo */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={LOGO_URL}
            alt="logo"
            className="img-logo"
          />
          {/* <h5 className="mb-0 fw-bold">Pizza Wings</h5> */}
        </div>

        {/* Location */}
        <div className="d-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-secondary mt-2 mt-md-0">
          <img
            src="https://pizzawings.co.in/assets/icons/locationFilled.svg"
            width={16}
            height={16}
          />
          <span className="small fw-medium">Gomti Nagar Outlet</span>
          <img
            src="https://pizzawings.co.in/assets/icons/rightArrow.svg"
            width={10}
            height={10}
          />
        </div>

        {/* User Info */}
        <div className="text-end mt-2 mt-md-0">
          <p className="mb-0 fw-semibold">Rahul Singh</p>
          <small className="text-light opacity-75">7905383672</small>
        </div>

      </div>
    </header>
  );
};

export default Header;