import Skeleton from "react-loading-skeleton";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";

const SinglePage = ({ zoo }) => {
  const [loading, setLoading] = useState(true);
  const { category, name } = useParams();
  const navigate = useNavigate();

  const item = zoo[category]?.find((item) => item.name === name);

  if (!item) {
    return <ErrorPage/>
  }


  const handleBack = () => {
    navigate(`/${category}`);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <>
      <main>
        <div className="single-page">
          
          <div className="single-page-content">
            {loading ? (
              <Skeleton height={350} width={350} />
            ) : (
              <img
                src={`https://source.unsplash.com/400x400/?${item.name},${category}`}
                alt={item.name}
              />
            )}
          
          <div className="single-page-info">
            <h2 className="title">{item.name}</h2>
            
            <div className="middle-row">
            <div className="score">
              <span className="material-symbols-outlined">{item.likes >= 0 ? 'recommend' : 'sentiment_dissatisfied'}</span>
              <p>{item.likes}</p>

              </div>
          </div>
         <button onClick={handleBack}>Back</button>
              
        </div>
      </div>
      </div>
      </main>
    </>
  );
};

export default SinglePage;
