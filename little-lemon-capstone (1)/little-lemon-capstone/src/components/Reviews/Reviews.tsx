import "./Reviews.css";

const reviewsData = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    userName: "Alice",
    ratingCount: 4,
    ratingText: "Delicious food with great presentation!",
  },
  {
    image: "https://i.pravatar.cc/150?img=7",
    userName: "Bob",
    ratingCount: 5,
    ratingText: "The best burger I've ever had. Highly recommended!",
  },
  {
    image: "https://i.pravatar.cc/150?img=8",
    userName: "Charlie",
    ratingCount: 3,
    ratingText: "Decent food, but service was a bit slow.",
  },
  {
    image: "https://i.pravatar.cc/150?img=12",
    userName: "David",
    ratingCount: 2,
    ratingText: "Food was too salty for my taste.",
  },
];

const ReviewCard = ({ props }: any) => {
  return (
    <div className="review_item">
      <div className="review_item_name_image">
        <img className="review_item_image" src={props.image} />
        <h6 className="review_item_name">{props.userName}</h6>
      </div>
      <p className="review_item_raing">{`${props.ratingCount} ⭐️`}</p>
      <p className="review_item_text">{props.ratingText}</p>
    </div>
  );
};

export const Reviews = () => {
  return (
    <div className="reviews app_container app_wrapper" id="Reviews">
      <div className="reviews_content">
        <h1 className="reviews_title">Reviews</h1>
        <div className="reviews_box">
          {reviewsData.map((data) => (
            <ReviewCard props={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
