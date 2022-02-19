import React from "react";
import ReactToPrint from "react-to-print";
import Resume from "./Resume";

class ExportPdfComponent extends React.Component {
  render() {
    return (
      <div>
        <Resume ref={(response) => (this.componentRef = response)} />

        <ReactToPrint
          pageStyle="
          // @page { size: landscape; margin: 0;}
          // @page {
          //   size: A4;
          //   margin: 0;
          // }
          @media print {
            html, body {
              width: 300mm;
              height: 297mm;
            }
          @media all {
            .page-break {
              display: none;
            }
          }
          
          // @media print {
          //   html, body {
          //     height: initial !important;
          //     overflow: initial !important;
          //     -webkit-print-color-adjust: exact;
          //   }
          // }
          
          @media print {
            .page-break {
              margin-top: 1rem;
              display: block;
              page-break-before: auto;
            }
          }
          
          @page {
            size: auto;
            margin: 0mm;
          }
          "
          content={() => this.componentRef}
          trigger={() => (
            <button className="btn btn-primary">Print to PDF!</button>
          )}
        />
      </div>
    );
  }
}

export default ExportPdfComponent;
