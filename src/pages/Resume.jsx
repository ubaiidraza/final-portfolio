import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/GideonAyeniResume.pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Optional: for annotation support
import "react-pdf/dist/esm/Page/TextLayer.css"; // Optional: for text layer support
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion"
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const Resume = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };


  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white flex items-center justify-center flex-col pt-16 sm:pt-10 pb-18 overflow-y-hidden">

      {/* Download Button */}
      <div>
        <a href={pdf} target="_blank">
          <button className="py-3 px-6 bg-[#468219]  transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2 font-medium hover:bg-green-700">
            <FiDownload className="font-medium"/> Download CV
          </button>
        </a>
      </div>

      {/* PDF */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} // Start invisible and move up
        animate={{ opacity: 1, y: 35 }} // Fade in and slide into place
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        className="mb-18 max-sm:w-[400px]">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="flex justify-center overflow-y-hidden max-sm:overflow-x-scroll max-sm:w-auto">
          <Page pageNumber={pageNumber}/>
        </Document>

      {/* Page navigation */}
        <div className="flex items-center justify-center mt-4 gap-4">
          <button
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className="text-lg text-white px-4 py-2 disabled:cursor-not-allowed cursor-pointer"
          >
            <RxDoubleArrowLeft />

          </button>
          <span className="text-base">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="text-lg text-white px-4 py-2 disabled:cursor-not-allowed cursor-pointer"
          >
            <RxDoubleArrowRight />
          </button>
        </div>
      </motion.div>

      {/* Download Button */}
      <div>
        <a href={pdf} target="_blank">
          <button className="py-3 px-6 bg-[#468219]  transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2 font-medium hover:bg-green-700">
            <FiDownload className="font-medium"/> Download CV
          </button>
        </a>
      </div>


    </div>
  )
}

export default Resume