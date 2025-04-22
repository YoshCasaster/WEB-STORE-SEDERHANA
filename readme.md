Berikut README kamu yang sudah **dirapikan di editor markdown style** — siap langsung di-*copy* dan dipakai di GitHub atau editor lainnya:

```markdown
# 📱💳 WEB STORE SEDERHANA

![Preview Website](https://github.com/YoshCasaster/Web-payment-list/blob/master/webnya.png?raw=true)  
*Gambarnya keren kan? Ini preview websitenya!*

---

## 🚀 Apa Ini?

Ini adalah Website Store Sederhana keren buat nampilin metode pembayaran lu, bahkan produk lu, pake **HTML, CSS, JS semua dalam 1 file** doang! Fiturnya:

- 🎥 Hero section dengan video background keren  
- 🌓 Tema terang/gelap (dark/light mode)  
- 📋 Daftar payment method (DANA, OVO, GOPAY, PayPal, QRIS)  
- 📋 Kartu Produk  
- 📋 Tombol copy nomor rekening otomatis  
- 📱 Responsive (tampilan oke di HP & laptop)  
- ✨ Animasi-animasi keren  

---

## 🛠 Cara Pakai

Gampang banget! Tinggal:

1. **Edit nomor rekening** di bagian HTML (cari aja `08123456789`, ganti semua)
2. **Ganti logo** (cari `<img src="https://pomf2.lain.la/f/b4k5if9w.png"` lalu ganti link-nya)
3. **Ganti QRIS** (cari `<img src="https://encrypted-tbn0...` dan ubah link-nya)

---

## 🎨 Customisasi

### 🖼 Ganti Gambar

#### Testimonial:
```js
{
    id: "t1",
    name: "Client 1",
    image: "https://i.pinimg.com/736x/e1/a4/82/e1a482b455245e791b7c5626b12a9ecc.jpg",
    alt: "Testimonial Client 1"
}
```

#### Produk:
```js
{
    id: "c1p1",
    name: "Premium Web Hosting",
    price: "Rp 899.000",
    description: "High-performance web hosting with unlimited bandwidth and storage. Perfect for business websites.",
    image: "https://i.pinimg.com/736x/3c/8a/27/3c8a27d019100decf195df07f2f6406f.jpg",
    checkoutUrl: "https://wa.me/6288980818668?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Premium%20Web%20Hosting%20dengan%20harga%20Rp%20899.000.%20Berikut%20bukti%20pembayarannya."
}
```

#### Logo & QRIS:
```html
<!-- Logo -->
<img src="LINK-LOGO-LU" alt="Company Logo">

<!-- QRIS -->
<img src="LINK-QRIS-LU" alt="QRIS Code">
```

### 🎥 Ganti Video Background
```html
<source src="LINK-VIDEO-LU" type="video/mp4">
```

### 🌈 Ganti Warna (CSS)
```css
background: linear-gradient(to right, #a78bfa, #60a5fa);
```
Ganti kode warnanya sesuai selera!

---

## 💡 Fitur Keren

- **Dark/Light Mode** – Pencet tombol bulan di pojok kanan atas  
- **Auto Copy** – Klik icon copy untuk otomatis salin nomor  
- **Typing Effect** – Teks di hero section berubah-ubah sendiri  

---

## 📝 Catatan Penting

1. **Untuk video background**, bisa pakai link dari [Pexels](https://www.pexels.com/) atau upload sendiri  
2. **Logo payment** udah include, tapi kalo mau ganti tinggal ubah link gambarnya  
3. **Kalo mau nambah payment method**, tinggal duplikat salah satu bagian `<div class="payment-row">` dan edit isinya  

---

## 👨‍💻 Author

Dibuat sama [YoshCasaster](https://github.com/YoshCasaster) dengan ❤️

---

**Gampang kan?** Tinggal edit dikit, deploy, dan langsung bisa dipake!  
Keren kan single file doang tapi fiturnya lengkap? 😎
```

Kalau kamu mau, aku juga bisa bantu generate file `README.md`-nya langsung. Mau sekalian?