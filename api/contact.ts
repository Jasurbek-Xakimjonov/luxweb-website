export interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  business?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function sanitizeBotToken(raw: string | undefined): string {
  if (!raw) return '';
  let token = raw.trim().replace(/^["']|["']$/g, '').trim();
  if (/^bot\d+:[A-Za-z0-9_-]+/.test(token)) {
    token = token.slice(3);
  }
  return token.replace(/[\s"']/g, '');
}

function sanitizeChatId(raw: string | undefined): string {
  const defaultChatId = '5246366400';
  if (!raw) return defaultChatId;
  const clean = String(raw).trim().replace(/^["']|["']$/g, '').replace(/\s+/g, '');
  if (clean === '8475015813') {
    console.warn('[LUXWEB Contact API] TELEGRAM_CHAT_ID was set to bot ID (8475015813); overriding with target chat ID 5246366400.');
    return defaultChatId;
  }
  return clean || defaultChatId;
}

function getBaseUrl(req?: any): string {
  if (process.env.APP_URL) {
    return process.env.APP_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`;
  }
  if (req?.headers) {
    const proto = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    if (host) {
      return `${proto}://${host}`;
    }
  }
  return '';
}

export async function processContactSubmission(body: ContactPayload, req?: any) {
  const { name, phone, email, projectType, budget, business, message } = body || {};

  // 1. Validate required fields
  if (!name || !name.trim()) {
    return { status: 400, data: { success: false, error: 'Ism kiritilishi shart.' } };
  }
  if (!phone || !phone.trim()) {
    return { status: 400, data: { success: false, error: 'Telefon raqamingiz yoki Telegram usernamesi kiritilishi shart.' } };
  }
  if (!message || !message.trim()) {
    return { status: 400, data: { success: false, error: 'Xabar matni kiritilishi shart.' } };
  }

  // 2. Read and sanitize environment variables
  const rawBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const rawChatId = process.env.TELEGRAM_CHAT_ID;

  const botToken = sanitizeBotToken(rawBotToken);
  const chatId = sanitizeChatId(rawChatId);

  // Diagnostic log (never logs the secret token value)
  console.log('[LUXWEB Contact API] Form submission processing');
  console.log(`[LUXWEB Contact API] TELEGRAM_BOT_TOKEN configured: ${Boolean(botToken)}`);
  console.log(`[LUXWEB Contact API] TELEGRAM_CHAT_ID configured: ${Boolean(rawChatId)} (target chat_id: ${chatId})`);

  if (!botToken) {
    console.error('[LUXWEB Contact API] Missing TELEGRAM_BOT_TOKEN');
    return {
      status: 503,
      data: {
        success: false,
        error: 'TELEGRAM_BOT_TOKEN sozlanmagan. Vercel Environment Variables sozlamalarida TELEGRAM_BOT_TOKEN ni kiriting va qayta deploy qiling.',
      },
    };
  }

  // 3. Format Date and Time
  const now = new Date().toLocaleString('en-GB', {
    timeZone: 'Asia/Tashkent',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const clientName = name.trim();
  const clientPhone = phone.trim();
  const clientEmail = email ? email.trim() : '';
  const clientBusiness = business ? business.trim() : '';
  const clientService = projectType ? projectType.trim() : 'General Inquiry';
  const clientBudget = budget ? budget.trim() : 'Not specified';
  const clientMessage = message.trim();

  // 4. Construct Lead Notification Message in the required format
  const htmlMessage = [
    '🔥 <b>NEW LUXWEB LEAD</b>',
    '',
    '👤 <b>Client</b>',
    `Name: ${escapeHtml(clientName)}`,
    clientBusiness ? `🏢 Business: ${escapeHtml(clientBusiness)}` : '🏢 Business: —',
    '',
    `📞 Phone: ${escapeHtml(clientPhone)}`,
    clientEmail ? `📧 Email: ${escapeHtml(clientEmail)}` : '📧 Email: —',
    '',
    `💼 Service: ${escapeHtml(clientService)}`,
    `💰 Budget: ${escapeHtml(clientBudget)}`,
    '',
    '💬 <b>Project Details:</b>',
    escapeHtml(clientMessage),
    '',
    `🕐 ${now}`,
  ].join('\n');

  const plainMessage = [
    '🔥 NEW LUXWEB LEAD',
    '',
    '👤 Client',
    `Name: ${clientName}`,
    clientBusiness ? `🏢 Business: ${clientBusiness}` : '🏢 Business: —',
    '',
    `📞 Phone: ${clientPhone}`,
    clientEmail ? `📧 Email: ${clientEmail}` : '📧 Email: —',
    '',
    `💼 Service: ${clientService}`,
    `💰 Budget: ${clientBudget}`,
    '',
    '💬 Project Details:',
    clientMessage,
    '',
    `🕐 ${now}`,
  ].join('\n');

  // 5. Construct Telegram Inline Buttons
  // Allowed schemes by Telegram Bot API for inline buttons are HTTP/HTTPS or tg://
  const inlineButtons: Array<{ text: string; url: string }> = [];
  const baseUrl = getBaseUrl(req);

  // Phone button
  if (clientPhone) {
    let callUrl = '';
    const isTelegramHandle = clientPhone.startsWith('@');
    const digitsOnly = clientPhone.replace(/\D/g, '');

    if (isTelegramHandle) {
      callUrl = `https://t.me/${clientPhone.replace(/^@/, '')}`;
    } else if (baseUrl) {
      callUrl = `${baseUrl}/api/contact?action=call&phone=${encodeURIComponent(clientPhone)}`;
    } else if (digitsOnly) {
      callUrl = `https://t.me/+${digitsOnly}`;
    }

    if (callUrl) {
      inlineButtons.push({
        text: '📞 Call Client',
        url: callUrl,
      });
    }
  }

  // Email button (only if email was provided)
  if (clientEmail) {
    let emailUrl = '';
    if (baseUrl) {
      emailUrl = `${baseUrl}/api/contact?action=email&email=${encodeURIComponent(clientEmail)}`;
    } else {
      emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(clientEmail)}`;
    }

    inlineButtons.push({
      text: '📧 Email Client',
      url: emailUrl,
    });
  }

  const replyMarkup = inlineButtons.length > 0 ? { inline_keyboard: [inlineButtons] } : undefined;

  // 6. Send to Telegram API
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const payload: any = {
      chat_id: chatId,
      text: htmlMessage,
      parse_mode: 'HTML',
    };

    if (replyMarkup) {
      payload.reply_markup = replyMarkup;
    }

    let response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    let result: any = await response.json().catch(() => null);

    console.log(`[LUXWEB Contact API] Telegram HTTP status: ${response.status}`);
    console.log(`[LUXWEB Contact API] Telegram response ok: ${Boolean(result?.ok)}, description: ${result?.description || 'none'}`);

    // If HTML entity parsing fails in Telegram, retry with plain text format
    if (!response.ok && response.status === 400 && result?.description?.toLowerCase().includes('parse')) {
      console.log('[LUXWEB Contact API] Retrying with plain text format...');
      const retryPayload: any = {
        chat_id: chatId,
        text: plainMessage,
      };
      if (replyMarkup) {
        retryPayload.reply_markup = replyMarkup;
      }

      response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(retryPayload),
      });
      result = await response.json().catch(() => null);
    }

    if (!response.ok || !result?.ok) {
      const desc = result?.description || '';
      console.error(`[LUXWEB Contact API] Telegram error (${response.status}): ${desc}`);

      if (response.status === 401) {
        return {
          status: 401,
          data: {
            success: false,
            error: 'Telegram Bot Token noto‘g‘ri (401 Unauthorized). Vercel Environment Variables dagi TELEGRAM_BOT_TOKEN ni tekshiring.',
          },
        };
      }

      if (response.status === 403) {
        return {
          status: 403,
          data: {
            success: false,
            error: `Telegram ruxsat bermadi (403 Forbidden): ${desc}. Chat ID to‘g‘riligini (5246366400) va bot bilan chat ochilganini tekshiring.`,
          },
        };
      }

      if (response.status === 400 && desc.toLowerCase().includes('chat not found')) {
        return {
          status: 400,
          data: {
            success: false,
            error: `Telegram chat topilmadi (chat_id: ${chatId}). Bot bilan avval chat ochib /start tugmasini bosing.`,
          },
        };
      }

      return {
        status: response.status || 502,
        data: {
          success: false,
          error: `Telegram xatoligi (${response.status}): ${desc || 'Xabar yuborilmadi.'}`,
        },
      };
    }

    return {
      status: 200,
      data: {
        success: true,
        message: 'Xabaringiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.',
      },
    };
  } catch (err: any) {
    console.error('[LUXWEB Contact API] Network error:', err);
    return {
      status: 500,
      data: {
        success: false,
        error: err?.message ? `Tarmoq xatosi: ${err.message}` : 'Server xatosi: xabar yuborilmadi.',
      },
    };
  }
}

async function parseBody(req: any): Promise<any> {
  if (req.body) {
    if (typeof req.body === 'object') return req.body;
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body);
      } catch {
        return null;
      }
    }
  }

  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk: any) => {
      data += chunk;
    });
    req.on('end', () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch {
        resolve(null);
      }
    });
    req.on('error', () => resolve(null));
  });
}

function handleActionRedirect(req: any, res: any) {
  try {
    const rawUrl = req.url || '';
    const parsed = new URL(rawUrl, 'http://localhost:3000');
    const action = parsed.searchParams.get('action');

    if (action === 'call') {
      const phoneParam = parsed.searchParams.get('phone') || '';
      const cleanPhone = phoneParam.replace(/[^\d+]/g, '') || phoneParam;
      const digits = phoneParam.replace(/\D/g, '');
      const telegramUrl = digits ? `https://t.me/+${digits}` : '';

      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.statusCode = 200;
      return res.end(`<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LUXWEB — Mijoz bilan bog‘lanish</title>
  <meta http-equiv="refresh" content="0;url=tel:${cleanPhone}"/>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background:#0a0a0c; color:#f4f4f5; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; display:flex; align-items:center; justify-content:center; min-height:100vh; padding:24px; text-align:center; }
    .card { max-width:420px; width:100%; background:#141417; border:1px solid #27272a; border-radius:20px; padding:32px; box-shadow:0 20px 40px rgba(0,0,0,0.6); }
    .logo { font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#D4AF37; margin-bottom:20px; font-weight:700; }
    h1 { font-size:22px; font-weight:700; margin-bottom:8px; }
    p { color:#a1a1aa; font-size:14px; margin-bottom:24px; line-height:1.5; }
    .btn { display:block; width:100%; padding:14px 20px; border-radius:12px; font-size:15px; font-weight:600; text-decoration:none; margin-bottom:12px; transition:all 0.2s ease; }
    .btn-gold { background:#D4AF37; color:#000; }
    .btn-tg { background:#229ED9; color:#fff; }
    .footer { font-size:11px; color:#71717a; margin-top:20px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">LUXWEB CLIENT ACTION</div>
    <h1>📞 Mijozga qo‘ng‘iroq qilish</h1>
    <p>Telefon raqam: <b style="color:#fff;">${cleanPhone}</b><br/>Agar qo‘ng‘iroq avtomatik ochilmasa, pastdagi tugmani bosing.</p>
    <a class="btn btn-gold" href="tel:${cleanPhone}">📞 Qo‘ng‘iroq qilish</a>
    ${telegramUrl ? `<a class="btn btn-tg" href="${telegramUrl}">✈️ Telegramda ochish</a>` : ''}
    <div class="footer">LUXWEB Lead System • 2026</div>
  </div>
  <script>
    setTimeout(function() {
      window.location.href = "tel:${cleanPhone}";
    }, 100);
  </script>
</body>
</html>`);
    }

    if (action === 'email') {
      const emailParam = parsed.searchParams.get('email') || '';
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailParam)}`;

      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.statusCode = 200;
      return res.end(`<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LUXWEB — Mijozga email yozish</title>
  <meta http-equiv="refresh" content="0;url=mailto:${encodeURIComponent(emailParam)}"/>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background:#0a0a0c; color:#f4f4f5; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; display:flex; align-items:center; justify-content:center; min-height:100vh; padding:24px; text-align:center; }
    .card { max-width:420px; width:100%; background:#141417; border:1px solid #27272a; border-radius:20px; padding:32px; box-shadow:0 20px 40px rgba(0,0,0,0.6); }
    .logo { font-size:12px; letter-spacing:0.2em; text-transform:uppercase; color:#D4AF37; margin-bottom:20px; font-weight:700; }
    h1 { font-size:22px; font-weight:700; margin-bottom:8px; }
    p { color:#a1a1aa; font-size:14px; margin-bottom:24px; line-height:1.5; }
    .btn { display:block; width:100%; padding:14px 20px; border-radius:12px; font-size:15px; font-weight:600; text-decoration:none; margin-bottom:12px; transition:all 0.2s ease; }
    .btn-gold { background:#D4AF37; color:#000; }
    .btn-gmail { background:#EA4335; color:#fff; }
    .footer { font-size:11px; color:#71717a; margin-top:20px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">LUXWEB CLIENT ACTION</div>
    <h1>📧 Mijozga email yozish</h1>
    <p>Email manzili: <b style="color:#fff;">${emailParam}</b></p>
    <a class="btn btn-gold" href="mailto:${encodeURIComponent(emailParam)}">📧 Pochta ilovasida ochish</a>
    <a class="btn btn-gmail" href="${gmailUrl}" target="_blank">🌐 Gmail orqali yozish</a>
    <div class="footer">LUXWEB Lead System • 2026</div>
  </div>
  <script>
    setTimeout(function() {
      window.location.href = "mailto:${encodeURIComponent(emailParam)}";
    }, 100);
  </script>
</body>
</html>`);
    }
  } catch (err) {
    console.error('[LUXWEB Contact API] Redirect error:', err);
  }
}

function sendJson(res: any, status: number, data: any) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(status).json(data);
  }
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(data));
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  // Handle action redirects for inline buttons (call or email)
  if (req.method === 'GET') {
    const rawUrl = req.url || '';
    if (rawUrl.includes('action=')) {
      return handleActionRedirect(req, res);
    }
    return sendJson(res, 200, { status: 'ok', service: 'LUXWEB Contact API' });
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { success: false, error: 'Method not allowed' });
  }

  const body = await parseBody(req);
  if (!body || typeof body !== 'object') {
    return sendJson(res, 400, { success: false, error: 'Invalid JSON payload' });
  }

  const result = await processContactSubmission(body, req);
  return sendJson(res, result.status, result.data);
}
