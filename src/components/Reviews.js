import dummy from "../db/Review.json";

function Reviews(id) {
  const movieId = id.id;
  const textList = dummy.Reviews.filter((Reviews) => Reviews.id === movieId);
  console.log(textList);
  return (
    <>
      {textList.map((text) => (
        <li id={text.id}>{text.text}</li>
      ))}
    </>
  );
}

export default Reviews;
