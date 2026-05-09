import { promises as fs } from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "subscribers.json");

async function ensureDataFile() {
  try {
    await fs.access(dataFilePath);
  } catch {
    await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
    await fs.writeFile(dataFilePath, "[]", "utf8");
  }
}

async function readSubscribers() {
  await ensureDataFile();
  const file = await fs.readFile(dataFilePath, "utf8");
  return JSON.parse(file);
}

async function writeSubscribers(records) {
  await fs.writeFile(dataFilePath, JSON.stringify(records, null, 2), "utf8");
}

export async function upsertSubscriberRecord({ email, status, errorMessage }) {
  const records = await readSubscribers();
  const normalizedEmail = email.toLowerCase();
  const now = new Date().toISOString();
  const index = records.findIndex((row) => row.email === normalizedEmail);

  const baseRecord = {
    email: normalizedEmail,
    status,
    errorMessage: errorMessage || null,
    updatedAt: now,
  };

  if (index === -1) {
    records.push({
      ...baseRecord,
      createdAt: now,
      attempts: 1,
    });
  } else {
    records[index] = {
      ...records[index],
      ...baseRecord,
      attempts: Number(records[index].attempts || 0) + 1,
    };
  }

  await writeSubscribers(records);
}
