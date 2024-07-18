import { TableProps } from "antd";

interface DataType {
  key: string;
  featureName: string;
  nominalDimension: number;
  toleranceUpperLimit: number;
  toleranceLowerLimit: number;
  operation: string;
  machine: string;
  inspectionPlan: string;
  measuringEquipment: string;
  description: string;
  registeredBy: string;
  registrationTime: string;
}

export const columnProductDetail: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "key",
    key: "number",
  },
  {
    title: "Feature Name",
    dataIndex: "featureName",
    key: "featureName",
  },
  {
    title: "Nominal Dimension",
    dataIndex: "nominalDimension",
    key: "nominalDimension",
  },
  {
    title: "Tolerance Upper Limit",
    dataIndex: "toleranceUpperLimit",
    key: "toleranceUpperLimit",
  },
  {
    title: "Tolerance Lower Limit",
    dataIndex: "toleranceLowerLimit",
    key: "toleranceLowerLimit",
  },
  {
    title: "Operation",
    dataIndex: "operation",
    key: "operation",
  },
  {
    title: "Machine",
    dataIndex: "machine",
    key: "machine",
  },
  {
    title: "Inspection Plan",
    dataIndex: "inspectionPlan",
    key: "inspectionPlan",
  },
  {
    title: "Measuring Equipment",
    dataIndex: "measuringEquipment",
    key: "measuringEquipment",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Registered By",
    dataIndex: "registeredBy",
    key: "registeredBy",
  },
  {
    title: "Registration Time",
    dataIndex: "registrationTime",
    key: "registrationTime",
  },
];

export const dataProductDetail: DataType[] = [
  {
    key: "1",
    featureName: "Feature A",
    nominalDimension: 10,
    toleranceUpperLimit: 11,
    toleranceLowerLimit: 9,
    operation: "Operation 1",
    machine: "Machine A",
    inspectionPlan: "Plan 1",
    measuringEquipment: "Equipment A",
    description: "Description A",
    registeredBy: "User 1",
    registrationTime: "2024-07-18 10:00:00",
  },
  {
    key: "2",
    featureName: "Feature B",
    nominalDimension: 20,
    toleranceUpperLimit: 21,
    toleranceLowerLimit: 19,
    operation: "Operation 2",
    machine: "Machine B",
    inspectionPlan: "Plan 2",
    measuringEquipment: "Equipment B",
    description: "Description B",
    registeredBy: "User 2",
    registrationTime: "2024-07-18 11:00:00",
  },
  {
    key: "3",
    featureName: "Feature C",
    nominalDimension: 30,
    toleranceUpperLimit: 31,
    toleranceLowerLimit: 29,
    operation: "Operation 3",
    machine: "Machine C",
    inspectionPlan: "Plan 3",
    measuringEquipment: "Equipment C",
    description: "Description C",
    registeredBy: "User 3",
    registrationTime: "2024-07-18 12:00:00",
  },
];
