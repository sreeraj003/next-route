import React from "react";

function Docs({ params }) {
  if (params.slug?.length === 2) {
    return <div>Viewing docs for feature {params.slug[0]}and concept {params.slug[1]}</div>;
  } else if (params.slug?.length == 1) {
    return <div>Viewing docs for feature {params.slug[0]}</div>;
  }
  return <h1>Docs home</h1>
}

export default Docs;
