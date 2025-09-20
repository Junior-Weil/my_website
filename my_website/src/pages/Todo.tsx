"use client"
import "../amplify";
import React, { useEffect, useMemo, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import InputBox from "../components/inputbox";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function todo() {
  const client = useMemo(() => generateClient<Schema>(), []);
  const [contentValue, setContentValue] = useState("");
  const [isDone, setIsDone] = useState(true);
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.models.Todo.list({});
        setTodos(data ?? []);
      } finally {
        setLoading(false);
      }
    })();
  }, [client]);

  async function createTodo() {
    if (!contentValue.trim()) return;
    try {
      const res = await client.models.Todo.create(
        { content: contentValue.trim(), isDone },
        { authMode: "identityPool" },
      );
      if (res.data) setTodos((t) => [res.data!, ...t]);
      setContentValue("");
      setIsDone(false);
    } catch (e) {
      console.error("Create failed: ", e);
      alert("Create failed - check console (auth/config).");
    }
  }

  return (
    <div className="bg-white min-h-screen w-screen p-6 text-black">
      <div className="space-y-4 max-w-6xl items-center">
        <InputBox value={contentValue} onChange={setContentValue} />
        <FormGroup >
          <FormControlLabel required control={<Switch checked={isDone} onChange={(_, checked) => setIsDone(checked)} />} label="Completed?"/>
        </FormGroup>

        <button onClick={createTodo} className="px-4 py-2 rounded bg-black text-white disabled:opacity-50" disabled={!contentValue.trim()}>
          Add Todo
        </button>
      </div>

      <hr className="my-4 opacity-40" />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="mt-6 flex flex-wrap gap-4 list-none p-0">
          {todos.map((todo) => (
            <li key={todo.id} className="w-64 h-36 rounded-xl border border-gray-200 bg-white text-black shadow-sm p-4 flex flex-col justify-between overflow-hidden">
              <div className="font-medium truncate">{todo.content}</div>
              <div className="text-sm opacity-80">done: {String(todo.isDone)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
