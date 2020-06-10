import React from "react";

const Contact = () => (
  <div>
    <div className="border-top text-center py-2 headings h1">
        Contact Info
    </div>
    <div className="shadow mt-5" id="contact-div">
        <table className="table table-dark table-hover text-center">
          <tbody>
            <tr className="row-span-2">
              <td>E-mail:</td>
              <td  className="contact-info-text">
                  <i className="icon fa fa-envelope"></i> <span>rksharma2679@gmail.com</span>
              </td>
            </tr>  
            <tr className="mb-1">
                <td>LinkedIn</td>
                <td className="contact-info-text"><a rel="noopener noreferrer" href="https://www.linkedin.com/in/rashmi-sharma9/" target="_blank"><i className="fa fa-linkedin fa-lg"></i> rashmi-sharma</a></td>
            </tr>
            <tr className="mb-1">
                <td>Github:</td>
                <td className="contact-info-text"><a rel="noopener noreferrer" href="https://github.com/graphicaction" target="_blank"><i className="fa fa-github fa-lg"></i> Graphicaction</a></td>
            </tr>   
            <tr className="mb-1">
              <td>Resume:</td>
              <td className="contact-info-text"><a rel="noopener noreferrer" href="https://docs.google.com/document/d/1r3nR9xcc6rdAjw3IH8IKXN2149Li0D4a2qL1bcTiMcU/edit?usp=sharing" target="_blank"><i className="fa fa-sticky-note"></i> Rashmi Sharma</a></td>
          </tr>
        </tbody>
                             
      </table>
    </div>
  </div>
);

export default Contact;