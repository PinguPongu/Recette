import loadingImg from "../icons/loading.png"

const Loading = () => {
  return (
    <div className="loading-img-container">
      <img
        src={loadingImg}
        alt="Loading"
        className="loading-img"
      />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;