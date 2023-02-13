const Attribute = ({ attribute, onDelete, onAdd }) => {
  const dispImgs = (file) => {
    // const curFiles = file;
    // const fileLis = [];
    // const preview = document.querySelector(".preview");
    // const list = document.createElement("ol");
    // preview.appendChild(list);
    // for (const file of curFiles) {
    //   const listItem = document.createElement("li");
    //   const para = document.createElement("p");

    //   if (validFileType(file)) {
    //     para.textContent = `File name ${file.name}, file size ${returnFileSize(
    //       file.size
    //     )}.`;
    //     const image = document.createElement("img");
    //     image.src = URL.createObjectURL(file);

    //     listItem.appendChild(image);
    //     listItem.appendChild(para);
    //   } else {
    //     para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
    //     listItem.appendChild(para);
    //   }
    //   list.appendChild(listItem);
    //   fileLis.push(file);
    // }

    const imgUrl = URL.createObjectURL(file);
    return imgUrl;
  };

  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    `image/x-icon`,
  ];

  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

  function returnFileSize(number) {
    if (number < 1024) {
      return number + "bytes";
    } else if (number > 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + "KB";
    } else if (number > 1048576) {
      return (number / 1048576).toFixed(1) + "MB";
    }
  }

  return (
    <>
      {attribute
        ? attribute.imgLis.map((image) => {
            return (
              <li style={{ float: "left" }}>
                <div className="media">
                  <img
                    className="mr-3"
                    src={dispImgs(image)}
                    alt="Generic placeholder"
                    width="64"
                    height="64"
                    key={image.name}
                  ></img>
                  <div className="media-body">
                    <h5 className="mt-0">{image.name}</h5>
                  </div>
                </div>
              </li>
            );
          })
        : "Empty List"}
      <div
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(attribute.name)}
      >
        X
      </div>
    </>
  );
};

export default Attribute;
