import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className="widgets">
            <iframe
            sandbox="allow-top-navigation"
            src="https://timesofindia.indiatimes.com/india"
            width="100%"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling="no"
            frameBorder="8"
            allowTransparency="true"
            onClick=""
            allow="encrypted-media"
            target="_top">
            </iframe>
        </div>
    )
}

export default Widgets
