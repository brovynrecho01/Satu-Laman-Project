import {
  SolutionFeature,
  PricingPlan,
  ProcessStep,
  FAQItem,
  DemoItem,
  NavItem,
} from '../types';

export const BRAND_NAME = 'SatuLaman';
export const WHATSAPP_NUMBER = '6288217872159'; // WhatsApp CTA contact
export const WHATSAPP_DISPLAY = '088217872159';
export const INSTAGRAM_HANDLE = '@broahmadsyaf';
export const INSTAGRAM_URL = 'https://instagram.com/broahmadsyaf';
export const EMAIL_CONTACT = 'broahmadsyaf@gmail.com';

export const CONTACT = {
  whatsappDisplay: WHATSAPP_DISPLAY,
  whatsappNumber: WHATSAPP_NUMBER,
  instagramHandle: INSTAGRAM_HANDLE,
  instagramUrl: INSTAGRAM_URL,
  email: EMAIL_CONTACT,
};

// Detail Toko Beras Pak Kadi
export const TOKO_PAK_KADI = {
  name: 'Toko Beras Pak Kadi',
  address: 'Jalan Raya Garuda, Bendo, Pakisaji, Kabupaten Malang, Jawa Timur',
  shortAddress: 'Bendo, Pakisaji, Kab. Malang, Jawa Timur',
  category: 'Toko Retail / Beras Medium & Premium',
  phone: '088217872159',
  waNumber: '6288217872159',
  operationalHours: 'Setiap Hari • 07:30 - 20:00 WIB',
};

export function getWhatsAppUrl(customText?: string): string {
  const text = customText || 'Halo, saya ingin konsultasi gratis untuk pembuatan landing page bisnis saya.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Paket', href: '#paket' },
  { label: 'Contoh', href: '#contoh' },
  { label: 'FAQ', href: '#faq' },
];

export const TRUST_INDICATORS = [
  { label: 'Mobile Friendly', desc: 'Nyaman dibuka di semua jenis HP' },
  { label: 'WhatsApp Ready', desc: 'Langsung terhubung ke chat jualan' },
  { label: 'Custom Design', desc: 'Sesuai identitas & karakter bisnis' },
  { label: 'Siap Online', desc: 'Langsung tayang & siap dibagikan' },
];

export const SOLUTION_FEATURES: SolutionFeature[] = [
  {
    id: 'produk-menu',
    title: 'Produk / Menu',
    description: 'Tampilkan produk, menu, katalog, atau layanan dengan lebih rapi dan jelas harganya.',
    iconName: 'ShoppingBag',
    tag: 'Katalog Rapi',
  },
  {
    id: 'tentang-bisnis',
    title: 'Tentang Bisnis',
    description: 'Bantu pelanggan memahami siapa Anda, kelebihan bisnis Anda, dan kenapa mereka bisa percaya.',
    iconName: 'ShieldCheck',
    tag: 'Bangun Kepercayaan',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Langsung',
    description: 'Berikan jalur langsung dari website menuju WhatsApp Anda tanpa alur yang berbelit-belit.',
    iconName: 'MessageCircle',
    tag: 'Fokus Chat Pembeli',
  },
  {
    id: 'lokasi',
    title: 'Lokasi & Maps',
    description: 'Tampilkan lokasi fisik toko atau cakupan area pengiriman melalui Google Maps yang mudah dibuka.',
    iconName: 'MapPin',
    tag: 'Google Maps Ready',
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Hubungkan akun Instagram, Facebook, TikTok, atau marketplace yang sudah aktif Anda gunakan.',
    iconName: 'Share2',
    tag: 'Terhubung Sosmed',
  },
  {
    id: 'mobile-friendly',
    title: 'Mobile Friendly',
    description: 'Website nyaman dibuka dari smartphone karena mayoritas pelanggan mencari info lewat HP.',
    iconName: 'Smartphone',
    tag: 'Ringan & Responsif',
  },
];

export const DEMO_DATA: DemoItem = {
  id: 'toko-beras-pak-kadi',
  title: 'Toko Beras Pak Kadi',
  category: 'Toko Retail / Beras Medium Hingga Premium',
  description:
    'Landing page untuk membantu pelanggan melihat katalog beras medium hingga premium, mengetahui lokasi toko di Pakisaji Malang, dan melakukan pemesanan langsung melalui WhatsApp.',
  badge: 'Studi Kasus Bisnis Nyata',
  location: 'Jalan Raya Garuda, Bendo, Pakisaji, Kab. Malang, Jawa Timur',
  highlights: [
    'Katalog beras medium hingga premium & harga per sak/kg',
    'Lokasi tepat di Jalan Raya Garuda, Bendo, Pakisaji, Malang',
    'Tombol pesan WhatsApp terhubung langsung ke 088217872159',
  ],
};

export const WHAT_YOU_GET = [
  { title: 'Custom Landing Page', desc: 'Desain khusus sesuai warna & jenis usaha Anda' },
  { title: 'Responsive Mobile Design', desc: 'Tampilan presisi dan nyaman di layar smartphone' },
  { title: 'Struktur Halaman Bisnis', desc: 'Susunan urutan info yang mengarahkan pembeli' },
  { title: 'Copywriting Dasar', desc: 'Teks penjelasan bisnis yang natural dan mudah dipahami' },
  { title: 'Product / Menu / Service Section', desc: 'Bagian daftar produk, foto, keterangan, & harga' },
  { title: 'WhatsApp CTA', desc: 'Tombol chat WhatsApp di titik-titik strategis halaman' },
  { title: 'Google Maps Integration', desc: 'Peta lokasi toko & rute petunjuk arah langsung' },
  { title: 'Social Media Links', desc: 'Tautan resmi Instagram, TikTok, Facebook, dll' },
  { title: 'Basic SEO Setup', desc: 'Nama bisnis mudah ditemukan di pencarian Google' },
  { title: 'Website Deployment', desc: 'Proses hosting dan setup teknis sampai website aktif' },
  { title: 'Revisi Sesuai Paket', desc: 'Pengecekan dan perbaikan sebelum website go-live' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    priceDisplay: 'Rp750.000',
    priceSubtitle: 'Pembayaran satu kali untuk setup awal',
    description: 'Untuk bisnis yang membutuhkan website sederhana dan profesional.',
    features: [
      '1 halaman terpadu',
      'Hingga 5 section',
      'Responsive mobile',
      'WhatsApp CTA',
      'Google Maps',
      'Social media link',
      'Deployment & siap tayang',
      '1x revisi minor',
    ],
    ctaLabel: 'Pilih Starter',
    waMessage: 'Halo SatuLaman, saya tertarik dengan paket STARTER (Rp750.000) untuk bisnis saya. Boleh tanya-tanya dulu?',
  },
  {
    id: 'business',
    name: 'BUSINESS',
    priceDisplay: 'Rp1.250.000',
    priceSubtitle: 'Paket paling lengkap untuk usaha aktif',
    description: 'Untuk bisnis yang ingin menampilkan produk, layanan, dan informasi bisnis dengan lebih lengkap.',
    isPopular: true,
    features: [
      'Semua fitur Starter',
      'Hingga 8 section',
      'Catalog / menu showcase',
      'Custom UI design khas bisnis',
      'Copywriting dasar lengkap',
      'Section FAQ (tanya jawab)',
      'Testimonial section',
      'CTA optimization',
      '2x revisi',
    ],
    ctaLabel: 'Pilih Business',
    waMessage: 'Halo SatuLaman, saya tertarik dengan paket BUSINESS (Rp1.250.000) untuk bisnis saya. Bagaimana langkah mulainya?',
  },
  {
    id: 'pro',
    name: 'PRO',
    priceDisplay: 'Mulai Rp1.750.000',
    priceSubtitle: 'Disesuaikan dengan kebutuhan khusus',
    description: 'Untuk bisnis dengan kebutuhan informasi dan katalog yang lebih kompleks.',
    features: [
      'Semua fitur Business',
      'Katalog produk lebih besar',
      'Custom layout khusus',
      'Advanced sections',
      'Custom interaction & flow',
      'Additional CTA flow',
      'Analytics setup',
      '3x revisi',
    ],
    ctaLabel: 'Diskusikan Kebutuhan Saya',
    waMessage: 'Halo SatuLaman, saya ingin mendiskusikan kebutuhan paket PRO (mulai Rp1.750.000) untuk bisnis saya.',
  },
];

export const ADD_ONS = [
  'WhatsApp automation & auto-reply pesan order',
  'Katalog produk dengan varian dan filter yang lebih banyak',
  'Form pemesanan mandiri dengan rekap otomatis',
  'Pengukuran statistik pengunjung (analytics)',
  'Integrasi konten promosi dan update berkala',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Ceritakan Bisnis Anda',
    description: 'Kami memahami produk, target pelanggan, dan kebutuhan website bisnis Anda lewat obrolan santai di WhatsApp.',
  },
  {
    number: '02',
    title: 'Tentukan Struktur',
    description: 'Kami menyusun alur halaman dan informasi apa saja yang paling penting ditampilkan kepada calon pembeli.',
  },
  {
    number: '03',
    title: 'Kami Bangun',
    description: 'Tim kami mengerjakan desain, penataan copy teks, development teknis, dan setting agar website siap online.',
  },
  {
    number: '04',
    title: 'Anda Review',
    description: 'Anda mencoba membuka website langsung dari HP, memeriksa informasi, dan memberikan masukan bila ada yang perlu disesuaikan.',
  },
  {
    number: '05',
    title: 'Go Live',
    description: 'Website resmi siap digunakan, dapat ditaruh di bio Instagram, link status WhatsApp, dan dibagikan ke pelanggan.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Apakah saya harus punya domain?',
    answer: 'Tidak harus. Kami bisa membantu menjelaskan opsi domain dan hosting yang sesuai dengan kebutuhan dan anggaran bisnis Anda.',
  },
  {
    question: 'Apakah website bisa dibuka dari HP?',
    answer: 'Ya. Semua landing page dirancang responsive untuk smartphone, tablet, dan desktop. Mayoritas pelanggan UMKM membuka lewat HP, jadi ini prioritas utama kami.',
  },
  {
    question: 'Apakah saya harus punya materi sendiri?',
    answer: 'Tidak perlu semuanya lengkap dari awal. Kami akan membantu menentukan informasi dan struktur yang dibutuhkan. Materi yang sudah Anda miliki seperti foto produk dari HP, logo sederhana, daftar harga, dan info alamat toko sudah sangat cukup untuk mulai.',
  },
  {
    question: 'Apakah bisa langsung terhubung ke WhatsApp?',
    answer: 'Ya. Tombol WhatsApp akan ditempatkan di beberapa bagian penting halaman, lengkap dengan teks pesan awal yang otomatis terisi sehingga pelanggan tinggal klik kirim.',
  },
  {
    question: 'Apakah saya bisa meminta revisi?',
    answer: 'Ya. Setiap paket memiliki kuota revisi sesuai dengan scope pekerjaan untuk memastikan hasil akhir sesuai dengan kesepakatan.',
  },
  {
    question: 'Berapa lama pengerjaannya?',
    answer: 'Estimasi pengerjaan rata-rata 3–7 hari kerja tergantung paket yang dipilih dan kelengkapan materi. Setelah sesi brief singkat, kami akan memberikan jadwal estimasi yang pasti.',
  },
  {
    question: 'Apakah setelah selesai website langsung online?',
    answer: 'Ya. Pengaturan deployment dan setup online sudah termasuk dalam paket sesuai scope, sehingga Anda tinggal menerima link yang sudah aktif dan bisa langsung dipakai.',
  },
  {
    question: 'Bisa dibuat untuk bisnis apa saja?',
    answer: 'Bisa untuk berbagai bisnis kecil seperti kuliner (cafe, kedai kopi, katering), toko kelontong & retail, toko fashion, jasa lokal (laundry, bengkel, cuci sepatu), agen sembako, dan bisnis rumahan lainnya.',
  },
];
