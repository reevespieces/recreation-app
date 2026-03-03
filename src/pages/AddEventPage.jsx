import { useReducer, useRef, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/addeventpage.css";

// Helpers
const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const initialState = {
  values: { na