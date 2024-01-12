import { io } from "socket.io-client";
import React from "react";

// const BASE_URL=process.env.BASE_URL
const SOCKET_URL = "http://localhost:5001";
export const socket = io(SOCKET_URL);
// app context
export const AppContext = React.createContext();