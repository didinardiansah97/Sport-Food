"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [formData, setFormData] = useState<{
    nama: string;
    usia: string;
    emosi: string;
    terakhirMakan: string;
  }>({
    nama: "",
    usia: "",
    emosi: "",
    terakhirMakan: "",
  });

  const [rekomendasi, setRekomendasi] = useState<JSX.Element | null>(null);

  const [submittedData, setSubmittedData] = useState<{
    nama: string;
    usia: string;
    emosi: string;
    terakhirMakan: string;
  } | null>(null);

  const rekomendasiMakanan: Record<string, JSX.Element> = {
       "Olahraga Aerobik": (
        <div className="mb-4">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">Lari / Lari Jarak Jauh</span>
              <ul className="ps-3">
                <li>➢ Sebelum Lari: Oatmeal, pisang, roti gandum, atau granola bar.</li>
                <li>➢ Selama Lari: Minuman isotonik atau bar energi.</li>
                <li>➢ Setelah Lari: Ayam dengan quinoa, telur, atau smoothie protein dengan buah-buahan.</li>
              </ul>
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Renang</span>
              <ul className="ps-3">
                <li>➢ Sebelum Renang: Oatmeal, roti gandum, alpukat, dan telur.</li>
                <li>➢ Selama Renang: Air atau minuman elektrolit.</li>
                <li>➢ Setelah Renang: Salmon, kentang manis, smoothie protein, dan buah.</li>
              </ul>
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Cycling / Bersepeda</span>
              <ul className="ps-3">
                <li>➢ Sebelum Bersepeda: Roti panggang dengan selai kacang atau pasta.</li>
                <li>➢ Selama Bersepeda: Minuman isotonik atau gel energi.</li>
                <li>➢ Setelah Bersepeda: Smoothie dengan protein whey, atau ayam dengan quinoa.</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
      "Olahraga Anaerobik": (
        <div className="mb-4">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">Angkat Beban (Strength Training)</span>
              <ul className="ps-3">
                <li>➢ Sebelum Latihan: Roti gandum dengan selai kacang, yogurt buah.</li>
                <li>➢ Selama Latihan: Protein bar atau kacang almond.</li>
                <li>➢ Setelah Latihan: Dada ayam dengan nasi atau smoothie protein.</li>
              </ul>
            </li>
            <li className="list-group-item">
              <span className="fw-bold">CrossFit / HIIT (High-Intensity Interval Training)</span>
              <ul className="ps-3">
                <li>➢ Sebelum Latihan: Pisang dengan selai kacang atau smoothie buah.</li>
                <li>➢ Selama Latihan: Air, minuman isotonik, atau bar energi.</li>
                <li>➢ Setelah Latihan: Telur rebus, roti gandum, atau smoothie protein dengan buah-buahan dan sayuran.</li>
              </ul>
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Olahraga Berbasis Kekuatan (Bodybuilding, Powerlifting)</span>
              <ul className="ps-3">
                <li>➢ Sebelum Latihan: Oatmeal dengan protein whey atau ayam dengan ubi jalar.</li>
                <li>➢ Selama Latihan: Pisang dan air.</li>
                <li>➢ Setelah Latihan: Steak dengan nasi atau smoothie protein dengan tambahan sayuran.</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
      "Olahraga Tim": (
        <div className="mb-4">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">Sepak Bola</span>
              <ul className="ps-3">
                <li>➢ Sebelum Pertandingan/Latihan: Pasta, roti gandum, nasi merah, telur rebus, atau pisang.</li>
                <li>➢ Selama Pertandingan/Latihan: Minuman elektrolit, bar energi, atau buah kering.</li>
                <li>➢ Setelah Pertandingan/Latihan: Dada ayam, cokelat susu, atau telur.</li>
              </ul>
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Bola Basket</span>
              <ul className="ps-3">
                <li>➢ Sebelum Pertandingan/Latihan: Air atau minuman isotonik.</li>
                <li>➢ Selama Pertandingan/Latihan: Pisang atau kismis.</li>
                <li>➢ Setelah Pertandingan/Latihan: Tuna, dada ayam, nasi merah, atau telur.</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
      "Olahraga Ketangkasan & Keseimbangan": (
        <div className="mb-4">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">Yoga / Pilates</span>
              <ul className="ps-3">
                <li>➢ Sebelum Yoga/Pilates: Apel dengan kacang almond atau yogurt dengan granola.</li>
                <li>➢ Selama Yoga/Pilates: Pisang, apel, atau kismis.</li>
                <li>➢ Setelah Yoga/Pilates: Roti gandum, tempe, tahu, atau ayam.</li>
              </ul>
            </li>
          </ul>
        </div>
      ),

    // Tambahkan opsi olahraga lainnya dengan format yang sama.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.emosi) {
      setRekomendasi(rekomendasiMakanan[formData.emosi]);
      setSubmittedData(formData);
    }
  };

  return (
    <div className="container py-2">
      <h1 className="text-center font-semibold mb-0 container mt-4">Web Panduan Lengkap Nutrisi untuk Setiap Jenis Olahraga</h1>
      <img
        src="/image/olahraga.png"
        alt="Biodata Icon"  
        className="d-block mx-auto mb-4"
        style={{ maxWidth: "300px", height: "auto" }}
      />
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            type="text"
            name="nama"
            placeholder="Masukkan Nama"
            value={formData.nama}
            onChange={handleChange}
            className="form-control"
            autoComplete="off"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Umur</label>
          <input
            type="number"
            name="usia"
            placeholder="Masukkan Umur"
            value={formData.usia}
            onChange={handleChange}
            className="form-control"
            autoComplete="off"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Olahraga yang ingin dilakukan</label>
          <input
            type="text"
            name="terakhirMakan"
            placeholder="Olahraga yang diminati"
            value={formData.terakhirMakan}
            onChange={handleChange}
            className="form-control"
            autoComplete="off"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Pilih Olahraga</label>
          <select
            name="emosi"
            value={formData.emosi}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Pilih Jenis Olahraga</option>
            <option value="Olahraga Aerobik">Olahraga Aerobik (Daya Tahan)</option>
            <option value="Olahraga Anaerobik">Olahraga Anaerobik (Kekuatan dan Kecepatan)</option>
            <option value="Olahraga Tim">Olahraga Tim</option>
            <option value="Olahraga Ketangkasan & Keseimbangan">
              Olahraga Ketangkasan dan Keseimbangan
            </option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-4 bg-success text-white p-4 rounded shadow">
          <h2>Biodata</h2>
          <p>
            <strong>Nama:</strong> {submittedData.nama}
          </p>
          <p>
            <strong>Umur:</strong> {submittedData.usia}
          </p>
          <p>
            <strong>Olahraga yang Diminati:</strong> {submittedData.terakhirMakan}
          </p>
        </div>
      )}

      {rekomendasi && (
        <div className="mt-4 bg-info text-dark p-4 rounded shadow">
          <h2>Rekomendasi Makanan</h2>
          <p>
            <strong>Untuk {formData.emosi}:</strong>
          </p>
          {rekomendasi}
        </div>
      )}
    </div>
  );
}
