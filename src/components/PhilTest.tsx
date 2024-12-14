import { useState, useEffect } from "react";

export default function PhilTest() {
  const [packageName, setPackageName] = useState<string | undefined>(undefined);
  const { files, loading, error } = useFakeData(packageName);

  useEffect(() => {
    if (typeof window === "undefined") {
      throw new Error("This component must be rendered in the browser");
    }
    const searchParams = new URLSearchParams(window.location.search);
    setPackageName(searchParams.get("package") || packageName);
  }, []);

  return (
    <div className="w-screen h-screen whitespace-pre">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {files && filesAsString(files)}
    </div>
  );
}

function useFakeData(packageName: string | undefined) {
  const [files, setFiles] = useState<Record<string, string> | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const load = async () => {
      if (!packageName) {
        return;
      }
      try {
        setLoading(true);
        setFiles(await fakeDataLoader(packageName));
      } catch (e) {
        setError(asError(e));
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [packageName]);

  return { files, loading, error };
}

function asError(e: unknown): Error {
  if (e instanceof Error) return e;
  if (e && typeof e === "object" && "message" in e) {
    return new Error(String(e.message));
  }
  if (typeof e === "string") {
    return new Error(e);
  }
  return new Error(JSON.stringify(e));
}

function filesAsString(files: Record<string, string>) {
  let str = "";
  for (const [name, content] of Object.entries(files)) {
    str += `**************************\n${name}\n**************************\n${content}\n\n`;
  }
  return str;
}

async function fakeDataLoader(packageName: string) {
  await sleep(5000);
  const files: Record<string, string> = {};
  for (let i = 0; i < 100; i++) {
    files[`file${i}.txt`] = Array(20).fill(packageName).join(" ");
  }
  return files;
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
