// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new Response(
    JSON.stringify({ ok: true }),
    {
      headers: { 'content-type': 'application/json' },
    }
  );
}