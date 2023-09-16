import { testEnvironmentVariable } from "../settings.js";

export const leaguePage = (req, res) => {
  res.status(200).json({ message: testEnvironmentVariable })
}