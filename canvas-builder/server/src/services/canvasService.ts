import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_BASE = process.env.CANVAS_API_URL!;
const TOKEN = process.env.CANVAS_API_TOKEN!;
const COURSE_ID = process.env.COURSE_ID!;

const headers = {
  Authorization: `Bearer ${TOKEN}`
};

export async function createModule(title: string, position: number) {
  const response = await axios.post(
    `${API_BASE}/courses/${COURSE_ID}/modules`,
    {
      module: {
        name: title,
        position
      }
    },
    { headers }
  );
  return response.data;
}
