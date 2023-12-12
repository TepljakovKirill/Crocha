import { Helmet } from "react-helmet-async";

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Crocha - Страница не найдена</title>
      </Helmet>
      <div>Страница не найдена</div>;
    </>
  );
}

export default NotFoundPage;
