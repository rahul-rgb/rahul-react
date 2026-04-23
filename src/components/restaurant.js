const RestaurantCard = (props) => {
    console.log(props)
  return (
    <div className="res-card-wrapper">
      <div className="card h-100 shadow-sm border-0 res-card">

        {/* Image Section */}
        <div className="position-relative">
          <img
            src="https://images.unsplash.com/photo-1601924582975-7d2f7c9c3e3d"
            className="card-img-top res-img"
            alt="restaurant"
          />
          <span className="badge bg-success position-absolute top-0 end-0 m-2">
            ⭐ {props.resData.data.avgRating}
          </span>
        </div>

        {/* Body */}
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.resData.data.name}</h5>

          <p className="card-text text-muted small mb-2">
            {props.description}
          </p>

          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-light text-dark border">
              {props.resData.data.deliveryTime}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer bg-white border-0">
          <p className="mb-2 small text-muted">
            🍽 {props.resData.data.cusinis.join(', ')}
          </p>

          <button className="btn btn-dark btn-sm w-100">
            View Menu
          </button>
        </div>

      </div>
    </div>
  );
};

export default RestaurantCard;