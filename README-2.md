# Penyusun Jadwal Piket Helpdesk Coretax — KPP Pratama Karawang

Aplikasi web (satu file HTML, tanpa server) untuk menyusun jadwal piket helpdesk Coretax mingguan secara otomatis, dengan aturan:

1. Asisten/Penyuluh Pajak — kuota 2x dan 3x piket per minggu, bergantian antar-personil, maksimal **1 penyuluh per sesi**.
2. Pelaksana Seksi Pelayanan — wajib piket 1x setiap minggu.
3. Pegawai kategori lain — piket setiap 2–3 minggu sekali, tidak boleh berturut-turut minggu ke minggu.
4. Ketersediaan pegawai (Cuti / ST-Dinas Luar / WFH / Libur) otomatis mengecualikan dari piket hari itu.
5. Jumlah petugas: Senin 5–6 orang; hari lain 5 orang (3 Pagi + 2 Siang), dapat diubah manual per hari.

## Fitur
- Generate jadwal otomatis dengan peringatan pelanggaran aturan
- Edit manual tiap slot petugas
- Ekspor ke Word (.doc)
- Riwayat & status karantina per pegawai (agar rotasi adil)
- Impor riwayat minggu lampau
- Layar passcode sederhana sebelum masuk ke aplikasi (lihat catatan keamanan di bawah)

## Cara pakai
Buka file `jadwal-piket-helpdesk.html` langsung di browser (tidak perlu instalasi). Untuk akses tim yang konsisten (dan agar data tersimpan tetap terhubung ke halaman yang sama), disarankan meng-hosting file ini lewat **GitHub Pages**:

1. Upload file ini ke repository GitHub.
2. Buka **Settings → Pages** pada repo, pilih branch `main` dan folder `/root`.
3. Akses aplikasi lewat URL yang diberikan GitHub Pages, misalnya `https://<username>.github.io/<nama-repo>/jadwal-piket-helpdesk.html`.

## Catatan keamanan
Layar passcode di aplikasi ini adalah pencegah akses tidak sengaja, **bukan** enkripsi/otentikasi tingkat tinggi (aplikasi berjalan sepenuhnya di sisi klien/browser tanpa server). Jangan gunakan untuk data yang sangat rahasia.

## Penyimpanan data
Data (daftar pegawai, riwayat piket, jadwal per minggu) disimpan di penyimpanan lokal milik aplikasi ini (`window.storage`), terikat pada URL tempat file dibuka. Selalu buka dari URL/lokasi yang sama setiap minggu agar riwayat tidak hilang.
