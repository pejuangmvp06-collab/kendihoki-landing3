import React, { useEffect } from "react";
import kendihokiGif from './assets/kendihoki.gif';

export default function LandingPage() {
  // Encode Base64 supaya link tidak langsung kelihatan di Inspect
  const encodedLink = "aHR0cHM6Ly9rZW5kaWhva2kuY29tL3JlZ2lzdGVyP3JlZj1CRVJUR0FCMDAwMTI=";

  useEffect(() => {
    const handleClick = () => {
      const decodedLink = atob(encodedLink);
      window.location.href = decodedLink;
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000, #1a1a1a)",
        color: "#fff",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
        textAlign: "justify",
        cursor: "pointer",
      }}
    >
      {/* Placeholder GIF */}
      <div style={{ marginBottom: "40px" }}>
        <div
          style={{
            width: "400px",
            height: "111px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            color: "#aaa",
          }}
        >
          <img src={kendihokiGif} alt="Kendihoki" style={{ width: "400px", borderRadius: "12px" }} />
        </div>
      </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <button
          style={{
            padding: "12px 30px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFB800",
            color: "#000",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={(e) => e.stopPropagation()} // supaya tombol bisa diatur sendiri jika mau
        >
          Login
        </button>

        <button
          style={{
            padding: "12px 30px",
            borderRadius: "8px",
            border: "2px solid #FFB800",
            backgroundColor: "transparent",
            color: "#FFB800",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          Daftar
        </button>
      </div>

      <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
        Kendihoki: Dunia Hiburan Digital dan Fenomena Slot Online di Era Modern
      </h1>

      <div style={{ maxWidth: "900px", lineHeight: "1.7", fontSize: "16px" }}>
        <p>
          Di tengah pesatnya perkembangan teknologi digital, dunia hiburan online terus mengalami transformasi besar. Salah satu fenomena yang semakin banyak dibicarakan adalah <strong>Kendihoki</strong>, sebuah nama yang identik dengan keberuntungan dan sensasi permainan digital modern. Di kalangan penggemar hiburan daring, <strong>Kendihoki</strong> dikenal sebagai simbol keseruan, strategi, dan pengalaman bermain yang seru — terutama di kategori permainan slot online yang kini mendominasi ranah hiburan digital global.
        </p>
      </div>

      <h2 style={{fontSize: "25px", fontWeight: "700", marginBottom: "20px"}}>
        Apa Itu Kendihoki?
      </h2>

       <div style={{ maxWidth: "900px", lineHeight: "1.7", fontSize: "16px" }}>
        <p>
            Secara sederhana, <strong>Kendihoki</strong> bisa diartikan sebagai perpaduan antara dua hal: “kendi” yang melambangkan wadah keberuntungan, dan “hoki” yang berarti keberuntungan itu sendiri. Nama ini kemudian berkembang menjadi identitas unik di dunia hiburan online, di mana para pemain dapat menikmati beragam permainan bertema keberuntungan, tantangan, dan strategi.
        </p>
        <p>
            Banyak orang menganggap Kendihoki sebagai lebih dari sekadar nama — melainkan simbol dari bagaimana hiburan modern kini tidak lagi terbatas pada tontonan pasif, tapi juga memberikan pengalaman interaktif yang menyenangkan. Dengan visual yang menarik, efek suara yang imersif, dan sistem permainan yang mudah dipahami, slot online yang diusung oleh konsep Kendihoki menjadi pilihan favorit banyak kalangan muda hingga dewasa.
        </p>
      </div>

      <h2 style={{fontSize: "25px", fontWeight: "700", marginBottom: "20px"}}>
        Fenomena Slot Online dalam Dunia Hiburan Digital
      </h2>

       <div style={{ maxWidth: "900px", lineHeight: "1.7", fontSize: "16px" }}>
        <p>
            Slot online sendiri merupakan bentuk hiburan digital yang sangat populer dalam beberapa tahun terakhir. Berawal dari mesin slot tradisional di kasino, kini versi digitalnya telah berevolusi menjadi permainan dengan ribuan tema menarik — mulai dari petualangan, mitologi, hingga budaya pop modern.
Kehadiran teknologi HTML5, sistem random number generator (RNG), dan integrasi grafis 3D membuat permainan slot kini jauh lebih menarik secara visual dan terasa realistis.
        </p>
        <p>
            Kendihoki memanfaatkan tren ini dengan menghadirkan konsep hiburan yang segar, di mana pemain dapat menikmati pengalaman slot digital dengan tampilan modern dan fitur yang mudah diakses kapan pun dan di mana pun. Elemen keberuntungan tetap menjadi inti, namun dikombinasikan dengan aspek seni visual, animasi, serta teknologi yang membuat setiap sesi permainan terasa seperti pengalaman sinematik interaktif.
        </p>
      </div>

      <h2 style={{fontSize: "25px", fontWeight: "700", marginBottom: "20px"}}>
        Tanggung Jawab dalam Bermain
      </h2>

       <div style={{ maxWidth: "900px", lineHeight: "1.7", fontSize: "16px" }}>
        <p>
            Meski permainan slot online sering dikaitkan dengan keberuntungan, Kendihoki selalu menekankan pentingnya tanggung jawab dalam menikmati hiburan digital.
Konsep “hiburan sehat” menjadi pondasi utamanya — artinya permainan seharusnya dijalani dengan kesadaran, bukan sebagai alat untuk mencari keuntungan semata.
        </p>
        <p>
            Bermain secara bijak, mengatur waktu, dan menganggapnya sebagai hiburan ringan adalah cara terbaik untuk menikmati pengalaman seperti yang ditawarkan Kendihoki. Pendekatan ini sejalan dengan prinsip responsible gaming yang kini banyak digaungkan oleh platform hiburan digital di seluruh dunia.
        </p>
      </div>

      <p style={{ marginTop: "40px", fontSize: "14px", color: "#777" }}>
        Sentuh di mana saja untuk melanjutkan...
      </p>
    </div>
  );
}
