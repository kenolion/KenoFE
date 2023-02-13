import Attribute from "./Attribute";
import { ListGroup } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const Attributes = () => {
  const [attrToAdd, setAttrToAdd] = useState({ name: "blank", imgLis: [] });
  const [attrLis, setAttr] = useState([]);
  const [attrSel, setAttrSel] = useState(0);

  const handleNameChange = (event) => {
    const attrChange = { ...attrToAdd };
    attrChange.name = event.target.value;
    setAttrToAdd(attrChange);
  };

  const handleImgLisChange = (event) => {
    const attrChange = { ...attrToAdd };
    const fileLis = event.target.files;
    attrChange.imgLis = [];
    for (let index = 0; index < fileLis.length; index++) {
      attrChange.imgLis.push(fileLis[index]);
    }

    setAttrToAdd(attrChange);
  };

  // attribute
  const onAttributeDelete = (name) => {
    const attrList = [...attrLis];

    setAttr(
      attrList.filter((attr) => {
        return attr.name !== name;
      })
    );
  };

  // attribute
  const onClick = (idx) => {
    console.log(idx);
  };

  const onAttributeAdd = () => {
    const attrList = [...attrLis, attrToAdd];

    setAttrSel(attrList.length - 1);
    setAttr(attrList);
  };

  const dispAttribute = (attr, idx) => {
    if (attrSel === idx) {
      return (
        <Attribute
          attribute={attr}
          onDelete={onAttributeDelete}
          key={attr.name}
        ></Attribute>
      );
    }
  };

  return (
    <>
      <Row>
        <Col sm={3}>
          <ListGroup>
            {attrLis
              ? attrLis.map((attr, idx) => {
                  return (
                    <ListGroup.Item>
                      <button href="#" onClick={onClick(idx)}>
                        {attr.name}
                      </button>
                    </ListGroup.Item>
                  );
                })
              : "This attribute list is empty"}
          </ListGroup>

          <div>
            <label>
              Attribute Name:
              <input type="text" name="name" onChange={handleNameChange} />
            </label>
          </div>
          <div>
            <label>Select a file:</label>
            <input
              type="file"
              id="myfile"
              name="myfile"
              multiple
              accept="image/png, image/jpeg"
              onInput={(e) => {
                handleImgLisChange(e);
              }}
            />
            <div className="preview">
              <p>No files currently selected for upload</p>
            </div>
          </div>
          <button onClick={onAttributeAdd}>Add</button>
        </Col>
        <Col sm={9}>
          <ol>
            {attrLis.length !== 0
              ? attrLis.map((attribute, idx) => dispAttribute(attribute, idx))
              : "nothing to see here"}
          </ol>
        </Col>
      </Row>
    </>
  );
};

export default Attributes;
