import React from "react";
import ReactDOMServer from "react-dom/server";
import DropzoneComponent from "react-dropzone-component";
import "react-dropzone-component/styles/filepicker.css";
import "dropzone/dist/min/dropzone.min.css";
import "./index.scss";

let componentConfig = {
  iconFiletypes: [".jpg", ".png", ".gif"],
  showFiletypeIcon: true,
  postUrl: "/uploadHandler",
};

function FileUpload() {
  return (
    <DropzoneComponent
      config={componentConfig}
      eventHandlers={{}}
      djsConfig={{
        previewTemplate: ReactDOMServer.renderToStaticMarkup(
          <div className="dz-preview dz-file-preview">
            <div className="dz-details">
              <div className="dz-filename">
                <span data-dz-name="true" />
              </div>
              <img data-dz-thumbnail="true" alt="Uploaded preview" />
            </div>
            <div className="dz-progress">
              <span className="dz-upload" data-dz-uploadprogress="true" />
            </div>
            <div className="dz-error-mark">
              <span>✘</span>
            </div>
          </div>
        ),
      }}
    />
  );
}

export default FileUpload;
