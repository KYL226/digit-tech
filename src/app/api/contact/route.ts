import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.string().min(1),
  message: z.string().min(10),
});

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Données de formulaire invalides." },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactTo) {
      return NextResponse.json(
        { ok: false, error: "Configuration email manquante. Vérifiez les variables d'environnement." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const from = process.env.CONTACT_FROM_EMAIL ?? smtpUser;
    const logoUrl =
      process.env.CONTACT_LOGO_URL ??
      process.env.SITE_URL?.replace(/\/+$/, "") + "/logo.svg";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const mail = {
      from,
      to: contactTo,
      replyTo: email,
      subject: `[Digit Tech Group] ${subject}`,
      text: [
        `Vous avez reçu un nouveau message via le formulaire de contact.`,
        ``,
        `Nom: ${name}`,
        `Email: ${email}`,
        `Téléphone: ${phone}`,
        `Sujet: ${subject}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="margin:0;padding:0;background:#f6f3ff;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f3ff;">
            <tr>
              <td align="center" style="padding:24px 12px;">
                <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid rgba(90,27,179,0.12);">
                  <tr>
                    <td style="padding:22px 24px;background:#5a1bb3;">
                      <div style="display:flex;align-items:center;gap:12px;">
                        <div style="background:#ffffff40;border-radius:12px;padding:10px 12px;">
                          ${
                            logoUrl
                              ? `<img src="${logoUrl}" alt="Digit Tech Group" width="72" style="display:block;height:auto;border:0;"/>`
                              : ""
                          }
                        </div>
                        <div>
                          <div style="color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;line-height:1.3;">
                            Digit Tech Group
                          </div>
                          <div style="color:#ffffffcc;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.3;">
                            Avec Digit Tech Group, chaque création part d’une vision.
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:22px 24px;">
                      <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;font-size:16px;font-weight:700;margin-bottom:12px;">
                        Nouveau message reçu
                      </div>
                      <div style="font-family:Arial,Helvetica,sans-serif;color:#6b7280;font-size:13px;margin-bottom:18px;">
                        Quelqu’un a rempli le formulaire de contact.
                      </div>

                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #eee;">
                            <div style="font-family:Arial,Helvetica,sans-serif;color:#6b7280;font-size:12px;">Nom</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;font-size:14px;font-weight:600;">${safeName}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #eee;">
                            <div style="font-family:Arial,Helvetica,sans-serif;color:#6b7280;font-size:12px;">Email</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;font-size:14px;font-weight:600;">${safeEmail}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #eee;">
                            <div style="font-family:Arial,Helvetica,sans-serif;color:#6b7280;font-size:12px;">Téléphone</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;font-size:14px;font-weight:600;">${safePhone}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;">
                            <div style="font-family:Arial,Helvetica,sans-serif;color:#6b7280;font-size:12px;">Sujet</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;font-size:14px;font-weight:600;">${safeSubject}</div>
                          </td>
                        </tr>
                      </table>

                      <div style="margin-top:18px;">
                        <div style="font-family:Arial,Helvetica,sans-serif;color:#6b7280;font-size:12px;margin-bottom:8px;font-weight:600;">
                          Message
                        </div>
                        <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;font-size:14px;line-height:1.5;background:#f8f5ff;border:1px solid rgba(90,27,179,0.15);border-radius:12px;padding:14px;white-space:pre-wrap;">
                          ${safeMessage}
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:16px 24px;background:#fafafa;border-top:1px solid #eee;">
                      <div style="font-family:Arial,Helvetica,sans-serif;color:#6b7280;font-size:12px;line-height:1.4;">
                        Merci de nous contacter. Nous vous répondrons dès que possible.
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mail);

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Logs uniquement côté serveur pour aider le debug SMTP.
    // Ne pas retourner de secrets dans la réponse.
    console.error("[api/contact] sendMail failed:", err);

    const message =
      err instanceof Error ? err.message : "Impossible d'envoyer le message pour le moment.";

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

