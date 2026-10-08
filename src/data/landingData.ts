import {
  BetaOfferData,
  DeliverableFeature,
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
  const text =
    customText ||
    'Halo SatuLaman, saya ingin cek kuota Beta (Rp499.000) dan konsultasi landing page untuk bisnis saya.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Penawaran Beta', href: '#penawaran' },
  { label: 'Contoh Nyata', href: '#contoh' },
  { label: 'FAQ', href: '#faq' },
];

export const TRUST_INDICATORS = [
  { label: 'Mobile-First Design', desc: 'Nyaman dibuka di semua jenis HP' },
  { label: 'WhatsApp Ready', desc: 'Langsung terhubung ke chat jualan' },
  { label: 'WA Sales Kit', desc: 'Termasuk script follow up & closing' },
  { label: 'Siap Online', desc: 'Terima beres & langsung siap tayang' },
];

export const MASTER_COPY = {
  hero: {
    kicker: 'Sistem Halaman Jualan Digital untuk UMKM & Bisnis Lokal',
    headline:
      'Bisnis Anda Sudah Jalan. Sekarang Bikin Pelanggan Lebih Mudah Memahami dan Menghubungi Anda.',
    subHeadline:
      'Satu halaman khusus untuk menjelaskan bisnis Anda, menampilkan katalog produk, dan mengarahkan calon pembeli dari Instagram/TikTok langsung ke WhatsApp. Tanpa ribet.',
    buttonCtaPrimary: 'Cek Kuota Beta (Sisa 5 Slot)',
    microcopy: 'Konsultasi gratis. Tidak ada paksaan untuk langsung bayar.',
  },
  problemAgitation: {
    headline: 'Traffic dari Sosmed Sudah Ada, Tapi Kenapa Banyak yang Batal Beli?',
    intro:
      'Calon pembeli datang dari Instagram atau TikTok, tapi mereka sering bingung karena:',
    painPoints: [
      'Harus scroll feed jauh ke bawah hanya untuk mencari harga.',
      'Katalog dan menu tersebar di mana-mana.',
      'Cara pesan tidak jelas.',
      'Malas DM untuk tanya-tanya hal dasar.',
    ],
    conclusion:
      'Akibatnya: Pelanggan lelah dan pindah ke kompetitor sebelum sempat menghubungi Anda.',
  },
  valueProposition: {
    headline: 'SatuLaman: Titik Kumpul untuk Semua Informasi Bisnis Anda.',
    subHeadline:
      'Kami mengubah keribetan di atas menjadi satu alur pemesanan yang rapi, profesional, dan cepat.',
    flowText:
      'Instagram/TikTok ➔ SatuLaman Page (Katalog & Info) ➔ Langsung Chat WhatsApp',
    flowSteps: [
      {
        channel: 'Instagram / TikTok / Bio Link',
        desc: 'Pengunjung datang dari konten & media sosial',
      },
      {
        channel: 'SatuLaman Digital Page',
        desc: 'Katalog, harga, info toko & peta tersaji rapi dalam 1 tautan',
      },
      {
        channel: 'Langsung Chat WhatsApp',
        desc: 'Pembeli klik langsung bawa format pemesanan siap kirim',
      },
    ],
  },
  demo: {
    headline: 'Lihat Bagaimana SatuLaman Bekerja di Dunia Nyata',
    bodyCopy:
      'Ini adalah sistem SatuLaman yang digunakan oleh Toko Beras Pak Kadi. Pelanggan bisa melihat stok beras, harga transparan, mengecek titik Google Maps, dan menekan tombol pesan yang langsung berisi format order di WhatsApp.',
    buttonText: 'Buka Demo Interaktif Toko Beras',
  },
  deliverables: {
    headline: 'Bukan Sekadar Landing Page. Ini adalah "SatuLaman Starter System".',
    bodyCopy:
      'Yang Anda dapatkan dari kami bukan sekadar desain, tapi sebuah sistem komunikasi penjualan.',
    features: [
      {
        title: 'Mobile-First Sales Page',
        description:
          'Halaman yang dirancang khusus untuk kenyamanan layar HP pelanggan Anda.',
      },
      {
        title: 'Katalog Produk/Jasa',
        description:
          'Tampilan rapi untuk menu, produk, atau layanan beserta harganya.',
      },
      {
        title: 'WhatsApp CTA Terintegrasi',
        description:
          'Tombol order yang mengarahkan pembeli langsung ke chat Anda.',
      },
      {
        title: 'Google Maps & Social Link',
        description:
          'Integrasi lokasi fisik dan seluruh akun sosmed bisnis Anda.',
      },
      {
        title: 'Basic Copywriting & FAQ',
        description:
          'Kami bantu tuliskan penjelasan bisnis dan jawaban pertanyaan yang sering diajukan pelanggan.',
      },
    ] as DeliverableFeature[],
    bonus: {
      badge: '[BONUS] WhatsApp Sales Kit',
      title: 'WhatsApp Sales Kit Siap Pakai',
      description:
        'Anda juga akan mendapatkan kumpulan template/script teruji untuk membalas chat pelanggan—mulai dari sapaan awal, cara follow-up, hingga cross-selling, agar closing di WhatsApp makin mudah.',
    },
  },
  offer: {
    headline: 'SatuLaman Starter — Program Beta Terbatas',
    bodyCopy:
      'Saat ini, SatuLaman sedang membuka 5 slot Beta untuk menguji coba sistem Digital Sales Page khusus untuk bisnis kecil. Peserta Beta akan mendapatkan harga khusus yang jauh lebih hemat sebagai imbalan atas feedback dan izin penggunaan hasil website sebagai portfolio/case study kami ke depannya.',
    normalPrice: 'Rp799.000',
    betaPrice: 'Rp499.000',
    priceNote: 'Pembayaran satu kali, terima beres.',
    remainingSlotsText: 'Sisa Slot Tersedia: 5 Bisnis.',
    slotsRemaining: 5,
    totalSlots: 5,
    buttonCta: 'AMBIL SLOT BETA SAYA',
    waMessage:
      'Halo SatuLaman, saya mau AMBIL SLOT BETA SAYA (Rp499.000) untuk bisnis saya. Masih tersedia slotnya?',
  },
  workflow: {
    headline: 'Prosesnya Cepat. Anda Tidak Perlu Pusing Urusan Teknis.',
    steps: [
      {
        number: '1',
        title: 'Pilih Slot & Pembayaran',
        description: 'Amankan posisi Anda di program Beta.',
      },
      {
        number: '2',
        title: 'Isi Formulir (Intake Form)',
        description:
          'Cukup isi formulir data bisnis, produk, dan kontak yang kami sediakan.',
      },
      {
        number: '3',
        title: 'Kami Bangun Sistemnya',
        description:
          'Tim SatuLaman memproses desain, copy, dan setup halaman Anda (termasuk merakit WA Sales Kit).',
      },
      {
        number: '4',
        title: 'Review & Revisi',
        description: 'Cek hasilnya langsung dari HP Anda.',
      },
      {
        number: '5',
        title: 'Go Live & Handoff',
        description:
          'Sistem siap digunakan di bio Instagram dan WhatsApp Anda!',
      },
    ] as ProcessStep[],
  },
  faq: {
    items: [
      {
        question: 'Apakah saya harus langganan hosting/domain sendiri?',
        answer:
          'Tidak perlu pusing. Setup teknis kami yang urus agar tautan Anda langsung bisa dipakai.',
      },
      {
        question: 'Bisnis saya baru mulai, apakah cocok?',
        answer:
          'Sangat cocok. SatuLaman justru dibuat agar Anda terlihat kredibel dan profesional sejak awal tanpa biaya jutaan rupiah.',
      },
      {
        question: 'Berapa lama proses pembuatannya?',
        answer:
          'Sekitar 3–5 hari kerja setelah Anda mengisi Formulir Informasi Bisnis (Intake Form).',
      },
      {
        question: 'Apakah ada biaya bulanan tersembunyi?',
        answer:
          'Tidak ada. Harga Beta Rp499.000 adalah pembayaran satu kali di awal untuk setup sistem Anda.',
      },
      {
        question: 'Bagaimana jika saya butuh update menu/harga di masa depan?',
        answer:
          'Kami menyediakan dokumentasi/cara ganti materi yang mudah, atau Anda bisa menggunakan jasa update cepat kami jika dibutuhkan.',
      },
    ] as FAQItem[],
  },
  finalCta: {
    headline: 'Amankan 1 dari 5 Slot Beta Sebelum Ditutup.',
    subHeadline:
      'Jadikan bisnis Anda lebih mudah ditemukan, dipahami, dan dihubungi pelanggan hari ini juga.',
    buttonCta: 'KONSULTASI VIA WHATSAPP SEKARANG',
    microcopy:
      'Tanya-tanya dulu diperbolehkan (kami akan lihat apakah kebutuhan bisnis Anda cocok dengan sistem kami).',
    waMessage:
      'Halo SatuLaman, saya ingin amankan 1 slot Beta (Rp499.000) dan konsultasi via WhatsApp sekarang.',
  },
};

export const DEMO_DATA: DemoItem = {
  id: 'toko-beras-pak-kadi',
  title: 'Toko Beras Pak Kadi',
  category: 'Toko Retail / Beras Medium Hingga Premium',
  description: MASTER_COPY.demo.bodyCopy,
  badge: 'Studi Kasus Bisnis Nyata',
  location: 'Jalan Raya Garuda, Bendo, Pakisaji, Kab. Malang, Jawa Timur',
  highlights: [
    'Katalog beras medium hingga premium & harga per sak/kg',
    'Lokasi tepat di Jalan Raya Garuda, Bendo, Pakisaji, Malang',
    'Tombol pesan WhatsApp terhubung langsung ke 088217872159',
  ],
};
