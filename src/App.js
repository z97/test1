import * as React from "react";
import { useState, createContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import FirstTable from "./components/FirstTable";
import YearsOfSeniority from "./components/YearsOfSeniority";
import FamilyStatus from "./components/FamilyStatus";
import SecondTable from "./components/SecondTable";
import TabPanel from "./components/TabPanel";

export default function App() {
  return <TabPanel/>;
}
