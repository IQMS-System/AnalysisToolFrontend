import React, { useState } from "react";
import { Card, Row, Col, Form, Input, Button } from "antd";

const { Item: FormItem } = Form;

interface Specification {
  key: string;
  featureName: string;
  nominalDimension: string;
}

interface SubPart {
  id: string;
  name: string;
  specifications: Specification[];
  showSpecifications: boolean;
}

interface Part {
  id: string;
  name: string;
  subParts: SubPart[];
  specifications: Specification[];
  showSpecifications: boolean;
}

interface SubAssembly {
  id: string;
  name: string;
  parts: Part[];
  specifications: Specification[];
  showSpecifications: boolean;
}

interface Assembly {
  id: string;
  name: string;
  subAssemblies: SubAssembly[];
  specifications: Specification[];
  showSpecifications: boolean;
}

const AssemblyForm: React.FC = () => {
  const [assembly, setAssembly] = useState<Assembly>({
    id: "1",
    name: "",
    subAssemblies: [],
    specifications: [],
    showSpecifications: false,
  });

  const addSubAssembly = () => {
    const newSubAssembly: SubAssembly = {
      id: (assembly.subAssemblies.length + 1).toString(),
      name: "",
      parts: [],
      specifications: [],
      showSpecifications: false,
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
                  specifications: [],
                  showSpecifications: false,
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
                          specifications: [],
                          showSpecifications: false,
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

  const toggleSpecifications = (
    id: string,
    type: "assembly" | "subAssembly" | "part" | "subPart"
  ) => {
    switch (type) {
      case "assembly":
        setAssembly((prevAssembly) => ({
          ...prevAssembly,
          showSpecifications: !prevAssembly.showSpecifications,
        }));
        break;
      case "subAssembly":
        setAssembly((prevAssembly) => ({
          ...prevAssembly,
          subAssemblies: prevAssembly.subAssemblies.map((subAssembly) =>
            subAssembly.id === id
              ? {
                  ...subAssembly,
                  showSpecifications: !subAssembly.showSpecifications,
                }
              : subAssembly
          ),
        }));
        break;
      case "part":
        setAssembly((prevAssembly) => ({
          ...prevAssembly,
          subAssemblies: prevAssembly.subAssemblies.map((subAssembly) => ({
            ...subAssembly,
            parts: subAssembly.parts.map((part) =>
              part.id === id
                ? { ...part, showSpecifications: !part.showSpecifications }
                : part
            ),
          })),
        }));
        break;
      case "subPart":
        setAssembly((prevAssembly) => ({
          ...prevAssembly,
          subAssemblies: prevAssembly.subAssemblies.map((subAssembly) => ({
            ...subAssembly,
            parts: subAssembly.parts.map((part) => ({
              ...part,
              subParts: part.subParts.map((subPart) =>
                subPart.id === id
                  ? {
                      ...subPart,
                      showSpecifications: !subPart.showSpecifications,
                    }
                  : subPart
              ),
            })),
          })),
        }));
        break;
      default:
        break;
    }
  };

  const handleSpecChange = (
    index: number,
    field: string,
    value: string,
    id: string,
    type: "assembly" | "subAssembly" | "part" | "subPart"
  ) => {
    const updateSpecs = (specs: Specification[]) =>
      specs.map((spec, idx) =>
        idx === index ? { ...spec, [field]: value } : spec
      );

    switch (type) {
      case "assembly":
        setAssembly((prevAssembly) => ({
          ...prevAssembly,
          specifications: updateSpecs(prevAssembly.specifications),
        }));
        break;
      case "subAssembly":
        setAssembly((prevAssembly) => ({
          ...prevAssembly,
          subAssemblies: prevAssembly.subAssemblies.map((subAssembly) =>
            subAssembly.id === id
              ? {
                  ...subAssembly,
                  specifications: updateSpecs(subAssembly.specifications),
                }
              : subAssembly
          ),
        }));
        break;
      case "part":
        setAssembly((prevAssembly) => ({
          ...prevAssembly,
          subAssemblies: prevAssembly.subAssemblies.map((subAssembly) => ({
            ...subAssembly,
            parts: subAssembly.parts.map((part) =>
              part.id === id
                ? { ...part, specifications: updateSpecs(part.specifications) }
                : part
            ),
          })),
        }));
        break;
      case "subPart":
        setAssembly((prevAssembly) => ({
          ...prevAssembly,
          subAssemblies: prevAssembly.subAssemblies.map((subAssembly) => ({
            ...subAssembly,
            parts: subAssembly.parts.map((part) => ({
              ...part,
              subParts: part.subParts.map((subPart) =>
                subPart.id === id
                  ? {
                      ...subPart,
                      specifications: updateSpecs(subPart.specifications),
                    }
                  : subPart
              ),
            })),
          })),
        }));
        break;
      default:
        break;
    }
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
            <Button type="primary" onClick={addSubAssembly} className="mr-5">
              Add Sub Assembly
            </Button>
            <Button
              onClick={() => toggleSpecifications(assembly.id, "assembly")}
            >
              Edit Specification
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
                      className="mr-5"
                    >
                      Add Part
                    </Button>
                    <Button
                      onClick={() =>
                        toggleSpecifications(subAssembly.id, "subAssembly")
                      }
                    >
                      Edit Specification
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
                              className="mr-5"
                              type="primary"
                              onClick={() =>
                                addSubPart(subAssembly.id, part.id)
                              }
                            >
                              Add Sub Part
                            </Button>
                            <Button
                              onClick={() =>
                                toggleSpecifications(part.id, "part")
                              }
                            >
                              Edit Specification
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
                                  <Button
                                    onClick={() =>
                                      toggleSpecifications(
                                        subPart.id,
                                        "subPart"
                                      )
                                    }
                                  >
                                    Edit Specification
                                  </Button>
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

      <Button block className="mt-10" type="primary">
        Create Product
      </Button>
    </div>
  );
};

export default AssemblyForm;
