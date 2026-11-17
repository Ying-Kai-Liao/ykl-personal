export interface ThreadsPost {
  id: string;
  text: string;
  timestamp: string;
  permalink: string;
  media_type: "TEXT_POST" | "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
}

const THREADS_API_BASE = "https://graph.threads.net/v1.0";

/**
 * Fetch recent Threads posts using the Threads API.
 * Requires THREADS_ACCESS_TOKEN env var (long-lived user token from Meta Developer portal).
 *
 * To get a token:
 * 1. Create a Meta app at developers.facebook.com
 * 2. Add the Threads API product
 * 3. Generate a long-lived user access token
 * 4. Set THREADS_ACCESS_TOKEN in your .env or Netlify env vars
 *
 * Long-lived tokens last 60 days. Refresh before expiry:
 * GET https://graph.threads.net/refresh_access_token?grant_type=th_refresh_token&access_token=TOKEN
 */
export async function fetchThreadsPosts(
  limit = 10,
): Promise<ThreadsPost[]> {
  const token = import.meta.env.THREADS_ACCESS_TOKEN;

  if (!token) {
    console.warn(
      "[threads] THREADS_ACCESS_TOKEN not set — skipping Threads feed. See src/lib/threads.ts for setup instructions.",
    );
    return [];
  }

  try {
    const fields =
      "id,text,timestamp,permalink,media_type,media_url,thumbnail_url";
    const url = `${THREADS_API_BASE}/me/threads?fields=${fields}&limit=${limit}&access_token=${token}`;

    const res = await fetch(url);

    if (!res.ok) {
      const body = await res.text();
      console.error(`[threads] API error ${res.status}: ${body}`);
      return [];
    }

    const json = await res.json();
    return (json.data || []) as ThreadsPost[];
  } catch (err) {
    console.error("[threads] Failed to fetch:", err);
    return [];
  }
}
