import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
export const Searchform = (props) => {
  const [match, setmatch] = useState(5644665960);

  const handleChanges = (e) => {
    setmatch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  const renderLoader = () => {
    return (
      <>
        <Loader
          type="Hearts"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChanges} value={match} />
      <button>{props.isLoading ? renderLoader : "Find Match"}</button>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {})(Searchform);
