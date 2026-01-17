import { model } from "mongoose";

import { userSchema } from "./userSchema";
import { sessionSchema } from "./sessionSchema";
import { roleSchema } from "./roleSchema";

export const Role = model("Role", roleSchema);
export const Session = model("Session", sessionSchema);
export const User = model("User", userSchema);
