import {ReactNode} from "react";
import {BlogTheme} from "@mui/material/styles";

export type BlogProviderProps = {children: ReactNode}
export type ThemeProviderProps = {children: ReactNode, theme: BlogTheme}
