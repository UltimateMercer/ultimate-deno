import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

function handler(req) {
  return new Response("Hello Ultimate! This is a test with Deno Deploy!");
}

console.log("Listening on http://localhost:8000");
await serve(handler);