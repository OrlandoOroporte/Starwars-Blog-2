import React from "react";
import PropTypes from "prop-types"

const TitleH1 = (props) => {
    return (
<h1>{props.title}</h1>)
}

TitleH1.propTypes = {
    title: PropTypes.string
}

export default TitleH1