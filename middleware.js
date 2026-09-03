// middleware.js
// Basic Auth sederhana untuk melindungi seluruh situs di Vercel (gratis, jalan di paket Hobby).
// File ini HARUS diletakkan di ROOT repo (sejajar dengan jadwal-piket-helpdesk.html),
// bukan di dalam folder lain.

export const config = {
  // Terapkan ke semua path/halaman di situs ini
  matcher: "/:path*",
};

export default function middleware(request) {
  // Username & password diambil dari Environment Variables di Vercel
  // (Project Settings -> Environment Variables), supaya tidak tertulis
  // langsung di kode/repo. Ada nilai default di bawah hanya sebagai fallback
  // kalau env belum diset -- SEGERA GANTI lewat Vercel Dashboard.
  const VALID_USER = process.env.BASIC_AUTH_USER || "admin";
  const VALID_PASS = process.env.BASIC_AUTH_PASS || "gantiPasswordIni123";

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const encoded = authHeader.split(" ")[1] || "";
    let decoded = "";
    try {
      decoded = atob(encoded);
    } catch (e) {
      decoded = "";
    }
    const separatorIndex = decoded.indexOf(":");
    const user = decoded.slice(0, separatorIndex);
    const pass = decoded.slice(separatorIndex + 1);

    if (user === VALID_USER && pass === VALID_PASS) {
      // Kredensial benar -> lanjutkan ke halaman yang diminta
      return;
    }
  }

  // Belum login / kredensial salah -> minta browser menampilkan dialog login
  return new Response("Autentikasi diperlukan.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Jadwal Piket Helpdesk - KPP Pratama Karawang"',
    },
  });
}
