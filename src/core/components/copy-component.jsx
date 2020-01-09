import React from "react"
import PropTypes from "prop-types"

function copyToClipboard(e, getBaseUrl, path, method) {
    const baseUrl = document.createElement("input")
    baseUrl.setAttribute("value", getBaseUrl(path, method))
    baseUrl.addEventListener("copy", () => e.stopPropagation())
    document.body.appendChild(baseUrl)
    baseUrl.select()
    document.execCommand("copy")
    document.body.removeChild(baseUrl)
  }

const CopyComponent = ({ getBaseUrl, path, method }) => {

  return (
    <div>
      {
        <div onClick={e => copyToClipboard(e, getBaseUrl, path, method)}>
          <svg width="20" height="17">
            <use xlinkHref={"#copy-to-clipboard"} />
          </svg>
        </div>
      }
    </div>
  )
}

CopyComponent.propTypes = {
    getBaseUrl: PropTypes.func.isRequired,
    path: PropTypes.object.isRequired,
    method: PropTypes.object.isRequired
  }

  export default CopyComponent
  