import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_TOPICS, type ContactTopic } from "@/lib/constants";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isContactTopic(value: unknown): value is ContactTopic {
  return (
    typeof value === "string" &&
    (CONTACT_TOPICS as readonly string[]).includes(value)
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, topic, message, website } = body as Record<
    string,
    unknown
  >;

  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (typeof name !== "string" || name.trim().length < 1) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  if (!isContactTopic(topic)) {
    return NextResponse.json({ error: "Invalid topic." }, { status: 400 });
  }

  if (typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: trimmedEmail,
    subject: `[Locus] ${topic} — ${trimmedName}`,
    text: [
      `Topic: ${topic}`,
      `From: ${trimmedName} <${trimmedEmail}>`,
      "",
      trimmedMessage,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
