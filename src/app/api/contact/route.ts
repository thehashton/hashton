import { Resend } from "resend";
import { NextResponse } from "next/server";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(12),
});

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    return NextResponse.json({ ok: true, fallback: true });
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio inquiry · ${name}`,
    text: `${message}\n\n— ${name} <${email}>`,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
