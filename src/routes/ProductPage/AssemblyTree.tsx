import React, { useState } from "react";
import { Card, Row, Col, Form, Input, Button } from "antd";

const { Item: FormItem } = Form;

interface SubPart {
  id: string;
  name: string;
}

interface Part {
  id: string;
  name: string;
  subParts: SubPart[];
}

interface SubAssembly {
  id: string;
  name: string;
  parts: Part[];
}

interface Assembly {
  id: string;
  name: string;
  subAssemblies: SubAssembly[];
}

const AssemblyForm: React.FC = () => {
  const [assembly, setAssembly] = useState<Assembly>({
    id: "1",
    name: "",
    subAssemblies: [],
  });

  const addSubAssembly = () => {
    const newSubAssembly: SubAssembly = {
      id: (assembly.subAssemblies.length + 1).toString(),
      name: "",
      parts: [],
    };
    setAssembly((prevAssembly) => ({
      ...prevAssembly,
      subAssemblies: [...prevAssembly.subAssemblies, newSubAssembly],
    }));
  };

  const updateSubAssemblyName = (id: string, name: string) => {
    setAssembly((prevAssembly) => ({
      ...prevAssembly,
      subAssemblies: prevAssembly.subAssemblies.map((subAssembly) =>
        subAssembly.id === id ? { ...subAssembly, name } : subAssembly
      ),
    }));
  };

  const addPart = (subAssemblyId: string) => {
    setAssembly((prevAssembly) => ({
      ...prevAssembly,
      subAssemblies: prevAssembly.subAssemblies.map((subAssembly) =>
        subAssembly.id === subAssemblyId
          ? {
              ...subAssembly,
              parts: [
                ...subAssembly.parts,
                {
                  id: (subAssembly.parts.length + 1).toString(),
                  name: "",
                  subParts: [],
                },
              ],
            }
          : subAssembly
      ),
    }));
  };

  const updatePartName = (
    subAssemblyId: string,
    partId: string,
    name: string
  ) => {
    setAssembly((prevAssembly) => ({
      ...prevAssembly,
      subAssemblies: prevAssembly.subAssemblies.map((subAssembly) =>
        subAssembly.id === subAssemblyId
          ? {
              ...subAssembly,
              parts: subAssembly.parts.map((part) =>
                part.id === partId ? { ...part, name } : part
              ),
            }
          : subAssembly
      ),
    }));
  };

  const addSubPart = (subAssemblyId: string, partId: string) => {
    setAssembly((prevAssembly) => ({
      ...prevAssembly,
      subAssemblies: prevAssembly.subAssemblies.map((subAssembly) =>
        subAssembly.id === subAssemblyId
          ? {
              ...subAssembly,
              parts: subAssembly.parts.map((part) =>
                part.id === partId
                  ? {
                      ...part,
                      subParts: [
                        ...part.subParts,
                        {
                          id: (part.subParts.length + 1).toString(),
                          name: "",
                        },
                      ],
                    }
                  : part
              ),
            }
          : subAssembly
      ),
    }));
  };

  const updateSubPartName = (
    subAssemblyId: string,
    partId: string,
    subPartId: string,
    name: string
  ) => {
    setAssembly((prevAssembly) => ({
      ...prevAssembly,
      subAssemblies: prevAssembly.subAssemblies.map((subAssembly) =>
        subAssembly.id === subAssemblyId
          ? {
              ...subAssembly,
              parts: subAssembly.parts.map((part) =>
                part.id === partId
                  ? {
                      ...part,
                      subParts: part.subParts.map((subPart) =>
                        subPart.id === subPartId
                          ? { ...subPart, name }
                          : subPart
                      ),
                    }
                  : part
              ),
            }
          : subAssembly
      ),
    }));
  };

  return (
    <div>
      <Card title="Assembly">
        <Form layout="vertical">
          <FormItem label="Assembly Name">
            <Input
              value={assembly.name}
              onChange={(e) =>
                setAssembly({ ...assembly, name: e.target.value })
              }
            />
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={addSubAssembly}>
              Add Sub Assembly
            </Button>
          </FormItem>
        </Form>
        <Row gutter={[16, 16]}>
          {assembly.subAssemblies.map((subAssembly) => (
            <Col span={24} key={subAssembly.id}>
              <Card title={`Sub Assembly: ${subAssembly.name || "Unnamed"}`}>
                <Form layout="vertical">
                  <FormItem label="Sub Assembly Name">
                    <Input
                      value={subAssembly.name}
                      onChange={(e) =>
                        updateSubAssemblyName(subAssembly.id, e.target.value)
                      }
                    />
                  </FormItem>
                  <FormItem>
                    <Button
                      type="primary"
                      onClick={() => addPart(subAssembly.id)}
                    >
                      Add Part
                    </Button>
                  </FormItem>
                </Form>
                <Row gutter={[16, 16]}>
                  {subAssembly.parts.map((part) => (
                    <Col span={24} key={part.id}>
                      <Card title={`Part: ${part.name || "Unnamed"}`}>
                        <Form layout="vertical">
                          <FormItem label="Part Name">
                            <Input
                              value={part.name}
                              onChange={(e) =>
                                updatePartName(
                                  subAssembly.id,
                                  part.id,
                                  e.target.value
                                )
                              }
                            />
                          </FormItem>
                          <FormItem>
                            <Button
                              type="primary"
                              onClick={() =>
                                addSubPart(subAssembly.id, part.id)
                              }
                            >
                              Add Sub Part
                            </Button>
                          </FormItem>
                        </Form>
                        <Row gutter={[16, 16]}>
                          {part.subParts.map((subPart) => (
                            <Col span={24} key={subPart.id}>
                              <Card
                                title={`Sub Part: ${subPart.name || "Unnamed"}`}
                              >
                                <Form layout="vertical">
                                  <FormItem label="Sub Part Name">
                                    <Input
                                      value={subPart.name}
                                      onChange={(e) =>
                                        updateSubPartName(
                                          subAssembly.id,
                                          part.id,
                                          subPart.id,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </FormItem>
                                </Form>
                              </Card>
                            </Col>
                          ))}
                        </Row>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default AssemblyForm;
