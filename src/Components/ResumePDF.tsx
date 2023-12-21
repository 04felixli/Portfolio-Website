import React, { useEffect } from "react";
import "../GlobalStyles.css";


const ResumePDF = () => {
    return (
        <div className="text-color h-screen flex items-center justify-center">
            {/* Displaying the PDF */}
            <div className="relative border-color border-2 w-8/12 h-4/6 rounded-md flex font-bold p-8 flex flex-col">
                <embed
                    src="public\Resume.pdf" // Replace with your local PDF path
                    type="application/pdf"
                    width="100%"
                    height="500px"
                />
            </div>
        </div>
    )
}

export default ResumePDF;
