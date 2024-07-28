import React, { useState } from "react";
import { Card, Row, Col, Form, Input, Button } from "antd";
import SpecificationTable from "./SpesificationTable";

const { Item: FormItem } = Form;

interface Specification {
  id: string;
  name: string;
  nominal_dimension: string;
  tolerance_upper_limit: string;
  tolerance_lower_limit: string;
  operation: string;
  machine: string;
  inspection_plan: string;
  measuring_equipment: string;
  product_description: string;
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

// Cleaned types without 'id' and 'showSpecifications'
interface CleanedSpecification {
  name: string;
  nominal_dimension: string;
  tolerance_upper_limit: string;
  tolerance_lower_limit: string;
  operation: string;
  machine: string;
  inspection_plan: string;
  measuring_equipment: string;
  product_description: string;
}

interface CleanedSubPart {
  name: string;
  specifications: CleanedSpecification[];
}

interface CleanedPart {
  name: string;
  subParts: CleanedSubPart[];
  specifications: CleanedSpecification[];
}

interface CleanedSubAssembly {
  name: string;
  parts: CleanedPart[];
  specifications: CleanedSpecification[];
}

interface CleanedAssembly {
  name: string;
  subAssemblies: CleanedSubAssembly[];
  specifications: CleanedSpecification[];
}

const AssemblyForm: React.FC = () => {
  const [assembly, setAssembly] = useState<Assembly>({
    id: "1",
    name: "",
    subAssemblies: [],
    specifications: [],
    showSpecifications: false,
  });

  function generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  const addSubAssembly = () => {
    const newSubAssembly: SubAssembly = {
      id: generateRandomId(),
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
                  id: generateRandomId(),
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
                          id: generateRandomId(),
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

  const addSpecification = (
    id: string,
    type: "assembly" | "subAssembly" | "part" | "subPart"
  ) => {
    const newSpec: Specification = {
      id: Date.now().toString(),
      name: "Default Name",
      nominal_dimension: "0",
      tolerance_upper_limit: "0",
      tolerance_lower_limit: "0",
      operation: "Default Operation",
      machine: "Default Machine",
      inspection_plan: "Default Plan",
      measuring_equipment: "Default Equipment",
      product_description: "Default Description",
    };

    const updateSpecs = (specs: Specification[]) => [...specs, newSpec];

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

  function cleanAssembly(assembly: Assembly): CleanedAssembly {
    const cleanedSubAssemblies: CleanedSubAssembly[] =
      assembly.subAssemblies.map(cleanSubAssembly);
    const cleanedSpecifications: CleanedSpecification[] =
      assembly.specifications.map(cleanSpecification);

    return {
      name: assembly.name,
      subAssemblies: cleanedSubAssemblies,
      specifications: cleanedSpecifications,
    };
  }

  function cleanSubAssembly(subAssembly: SubAssembly): CleanedSubAssembly {
    const cleanedParts: CleanedPart[] = subAssembly.parts.map(cleanPart);
    const cleanedSpecifications: CleanedSpecification[] =
      subAssembly.specifications.map(cleanSpecification);

    return {
      name: subAssembly.name,
      parts: cleanedParts,
      specifications: cleanedSpecifications,
    };
  }

  function cleanPart(part: Part): CleanedPart {
    const cleanedSubParts: CleanedSubPart[] = part.subParts.map(cleanSubPart);
    const cleanedSpecifications: CleanedSpecification[] =
      part.specifications.map(cleanSpecification);

    return {
      name: part.name,
      subParts: cleanedSubParts,
      specifications: cleanedSpecifications,
    };
  }

  function cleanSubPart(subPart: SubPart): CleanedSubPart {
    const cleanedSpecifications: CleanedSpecification[] =
      subPart.specifications.map(cleanSpecification);

    return {
      name: subPart.name,
      specifications: cleanedSpecifications,
    };
  }

  function cleanSpecification(
    specification: Specification
  ): CleanedSpecification {
    return {
      name: specification.name,
      nominal_dimension: specification.nominal_dimension,
      tolerance_upper_limit: specification.tolerance_upper_limit,
      tolerance_lower_limit: specification.tolerance_lower_limit,
      operation: specification.operation,
      machine: specification.machine,
      inspection_plan: specification.inspection_plan,
      measuring_equipment: specification.measuring_equipment,
      product_description: specification.product_description,
    };
  }

  return (
    <div className="overflow-x-scroll">
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
          {assembly.showSpecifications && (
            <SpecificationTable
              specifications={assembly.specifications}
              onSpecChange={(index, field, value) =>
                handleSpecChange(index, field, value, assembly.id, "assembly")
              }
              addSpecification={() => addSpecification(assembly.id, "assembly")}
            />
          )}
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
                  {subAssembly.showSpecifications && (
                    <SpecificationTable
                      specifications={subAssembly.specifications}
                      onSpecChange={(index, field, value) =>
                        handleSpecChange(
                          index,
                          field,
                          value,
                          subAssembly.id,
                          "subAssembly"
                        )
                      }
                      addSpecification={() =>
                        addSpecification(subAssembly.id, "subAssembly")
                      }
                    />
                  )}
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
                          {part.showSpecifications && (
                            <SpecificationTable
                              specifications={part.specifications}
                              onSpecChange={(index, field, value) =>
                                handleSpecChange(
                                  index,
                                  field,
                                  value,
                                  part.id,
                                  "part"
                                )
                              }
                              addSpecification={() =>
                                addSpecification(part.id, "part")
                              }
                            />
                          )}
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
                                    className="mb-5"
                                    onClick={() =>
                                      toggleSpecifications(
                                        subPart.id,
                                        "subPart"
                                      )
                                    }
                                  >
                                    Edit Specification
                                  </Button>
                                  {subPart.showSpecifications && (
                                    <SpecificationTable
                                      specifications={subPart.specifications}
                                      onSpecChange={(index, field, value) =>
                                        handleSpecChange(
                                          index,
                                          field,
                                          value,
                                          subPart.id,
                                          "subPart"
                                        )
                                      }
                                      addSpecification={() =>
                                        addSpecification(subPart.id, "subPart")
                                      }
                                    />
                                  )}
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

      <Button
        block
        className="mt-10"
        type="primary"
        onClick={() => {
          console.log("999 ini product assembly", assembly);
          console.log("999 hasil pembersihan", cleanAssembly(assembly));
        }}
      >
        Create Product
      </Button>
    </div>
  );
};

export default AssemblyForm;
