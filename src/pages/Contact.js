import React from "react";

const Contact = () => (
  <div>
    <div className="border-top text-center py-2 headings h1">
        Contact Info
    </div>
    <div className="shadow mt-5" id="contact-div">
        <table className="table table-hover text-center">
          <tbody>
            <tr>
              <td>E-mail:</td>
              <td  className="contact-info-text">
                  <i className="icon fa fa-envelope mr-2"></i> <span>rksharma2679@gmail.com</span>
              </td>
            </tr>  
            <tr className="mb-1">
                <td>LinkedIn</td>
                <td className="contact-info-text"><a rel="noopener noreferrer" href="https://www.linkedin.com/in/rashmi-sharma9/" target="_blank"><i className="fa fa-linkedin fa-lg mr-3"></i> rashmi-sharma</a></td>
            </tr>
            <tr className="mb-1">
                <td>Github:</td>
                <td className="contact-info-text"><a rel="noopener noreferrer" href="https://github.com/graphicaction" target="_blank"><i className="fa fa-github fa-lg mr-3"></i> Graphicaction</a></td>
            </tr>   
            <tr className="mb-1">
              <td>Resume:</td>
              <td className="contact-info-text"><a rel="noopener noreferrer" href="https://drive.google.com/file/d/1yu63o2YpDjTxKN1KihmP4QvXTxCt8evU/view?usp=sharing" target="_blank"><i className="fa fa-sticky-note mr-3"></i> Rashmi Sharma</a></td>
          </tr>
        </tbody>
                             
      </table>
    </div>
  </div>
);

export default Contact;