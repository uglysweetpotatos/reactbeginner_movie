import { Link } from "react-router-dom";

function EmptyPage() {
  return (
    <>
      <h1>잘못된 접근입니다.</h1>
      <Link to={`${process.env.PUBLIC_URL}/`}>돌아가기</Link>
    </>
  );
}

export default EmptyPage;
