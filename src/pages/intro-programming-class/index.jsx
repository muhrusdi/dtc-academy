import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import useJquery from "react-use-jquery"
import "../../styles/styles.css"
import logoDtc from "../../images/logo-dtc.svg"
import repeatReactGrid from "../../images/Repeat Grid 1.svg"
import logoFb from "../../images/logo-fb.svg"
import logoIg from "../../images/logo-ig.svg"
import logoTw from "../../images/logo-tw.svg"

const Index = () => {
  const jQuery = useJquery()
  useEffect(() => {
    let $ = jQuery
    if (typeof $ !== "undefined") {
      var overview = document.querySelector("#overview")
      var program = document.querySelector("#tentangProgram")
      var peluang = document.querySelector("#peluangKarir")
      var silabus = document.querySelector("#silabus")
      var biaya = document.querySelector("#biaya")
      var jadwal = document.querySelector("#jadwal")
      var faq = document.querySelector("#faq")
      var isInViewport = function(elem) {
        var distance = elem.getBoundingClientRect()
        return (
          distance.top >= 0 &&
          distance.left >= 0 &&
          distance.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          distance.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        )
      }
      // console.log(isInViewport(program))
      window.addEventListener(
        "scroll",
        function() {
          if (isInViewport(overview)) {
            $(".overview-menu").addClass("active")
            $(".tentang-menu").removeClass("active")
            $(".peluang-menu").removeClass("active")
            $(".silabus-menu").removeClass("active")
            $(".biaya-menu").removeClass("active")
            $(".jadwal-menu").removeClass("active")
            $(".faq-menu").removeClass("active")
            $("#navbar-id").removeClass("navbar-active")
          }
          if (isInViewport(program)) {
            $(".tentang-menu").addClass("active")
            $(".overview-menu").removeClass("active")
            $(".peluang-menu").removeClass("active")
            $(".silabus-menu").removeClass("active")
            $(".biaya-menu").removeClass("active")
            $(".jadwal-menu").removeClass("active")
            $(".faq-menu").removeClass("active")
            $("#navbar-id").addClass("navbar-active")
          }
          if (isInViewport(peluang)) {
            $(".peluang-menu").addClass("active")
            $(".overview-menu").removeClass("active")
            $(".tentang-menu").removeClass("active")
            $(".silabus-menu").removeClass("active")
            $(".biaya-menu").removeClass("active")
            $(".jadwal-menu").removeClass("active")
            $(".faq-menu").removeClass("active")
          }
          if (isInViewport(silabus)) {
            $(".silabus-menu").addClass("active")
            $(".overview-menu").removeClass("active")
            $(".tentang-menu").removeClass("active")
            $(".peluang-menu").removeClass("active")
            $(".biaya-menu").removeClass("active")
            $(".jadwal-menu").removeClass("active")
            $(".faq-menu").removeClass("active")
          }
          if (isInViewport(biaya)) {
            $(".biaya-menu").addClass("active")
            $(".overview-menu").removeClass("active")
            $(".tentang-menu").removeClass("active")
            $(".peluang-menu").removeClass("active")
            $(".silabus-menu").removeClass("active")
            $(".jadwal-menu").removeClass("active")
            $(".faq-menu").removeClass("active")
          }
          if (isInViewport(jadwal)) {
            $(".jadwal-menu").addClass("active")
            $(".overview-menu").removeClass("active")
            $(".tentang-menu").removeClass("active")
            $(".peluang-menu").removeClass("active")
            $(".silabus-menu").removeClass("active")
            $(".biaya-menu").removeClass("active")
            $(".faq-menu").removeClass("active")
          }
          if (isInViewport(faq)) {
            $(".faq-menu").addClass("active")
            $(".overview-menu").removeClass("active")
            $(".tentang-menu").removeClass("active")
            $(".peluang-menu").removeClass("active")
            $(".silabus-menu").removeClass("active")
            $(".biaya-menu").removeClass("active")
            $(".jadwal-menu").removeClass("active")
          }
        },
        false
      )
    }
  }, [jQuery])

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Document</title>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        />
      </Helmet>
      <div className="menu">
        <ul>
          <li>
            <a className="overview-menu active " href="#overview">
              OVERVIEW
            </a>
          </li>
          <li>
            <a className="tentang-menu" href="#tentangProgram">
              TENTANG PROGRAM
            </a>
          </li>
          <li>
            <a className="peluang-menu" href="#peluangKarir">
              PELUANG KARIR
            </a>
          </li>
          <li>
            <a className="silabus-menu" href="#silabus">
              SILABUS
            </a>
          </li>
          <li>
            <a className="biaya-menu" href="#biaya">
              BIAYA
            </a>
          </li>
          <li>
            <a className="jadwal-menu" href="#jadwal">
              JADWAL
            </a>
          </li>
          <li>
            <a className="faq-menu" href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <nav
        id="navbar-id"
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      >
        <div className="container">
          <div className="wrapLogo">
            <a className="navbar-brand" href="#">
              <img src={logoDtc} width="50" height="50" />
            </a>

            <p>
              Be a UI Designer and Create a <br /> great product.
            </p>
          </div>

          <button type="button" className="btn btn-primary">
            Daftar Sekarang
          </button>
        </div>
      </nav>

      <div className="container-fluid wrapMc" id="overview">
        <div className="container">
          <div className="row">
            <div className="col-md-12 main-content">
              <h1>
                How to be a UI <br />
                Designer and Make a great product.
              </h1>
              <p>
                Belajar mendesain aplikasi web dan mobil yang sesuai dengan
                kebutuhan User sehingga dapat meningkatkan traffic dan konversi.
              </p>
              <button type="button" className="btn btn-primary">
                LIHAT JADWAL
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container wrapFirstContent">
        <div className="container first-content">
          <div className="row" id="tentangProgram">
            <div className="col-md-8 wrapTitle">
              <h5>TENTANG PROGRAM</h5>
              <h2>
                Kelas User Interface (UI) Design akan mengajarkan Kamu tentang
                prinsip-prinsip mendesain sebuah tampilan aplikasi digital.
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 wrapTP">
              <h5>Tentang Program</h5>
              <p>
                UI Design adalah elemen yang sangat penting dalam menentukan
                keberhasilan sebuah aplikasi Web atau Mobile. Bayangkan apabila
                sebuah aplikasi tidak nyaman dilihat oleh penggunanya, maka
                aplikasi tersebut akan mulai ditinggalkan. Itulah mengapa Anda
                perlu belajar bagaimana menciptakan Design yang baik, sekarang.
                Melalui training ini Anda akan belajar bagaimana membuat
                wireframing hingga akhirnya mendesain aplikasi Web atau Mobile
                Anda dengan interaktif.
              </p>
            </div>

            <div className="col-md-6 wrapPO">
              <h5>Program Output</h5>
              <p>
                Membuat sebuah tampilan aplikasi berdasarkan Study Case yang
                diberikan dan dapat di persentasikan, serta sesuai dengan
                kebutuhan user.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container wrapTc" id="peluangKarir">
        <div className="container twoContent">
          <div className="row">
            <div className="col wrapTitle">
              <h5>Peluang Karir</h5>
              <h2>
                Saatnya menjadi UI Desainer yang handal dan berkarir di industri
                digital.
              </h2>
              <p>
                Kebutuhan akan aplikasi yang menarik dan sesuai dengan kebutuhan
                user menjadi sangat penting untuk perusahaan sehingga peluang
                kerja seorang UI Designer sangat di butuhkan. Anda dapat bekerja
                di perusahaan start up, perusahaan besar, ataupun memulai
                membuat produk digitalmu sendiri. Kesempatan ini ada di depan
                anda jangan sampai anda melewatkan kesempatan baik ini.
              </p>
              <p>
                DTC Academy bekerja sama dengan banyak perusahaan baik start up
                ataupun perusahaan besar untuk dukungan karir mu kedepan. Anda
                dapat memulai karir sebagai UI Designer di perusahaan rekan
                kami.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid wrapSillabus">
        <div className="container treeContent">
          <div className="row">
            <div className="col-md-10 wrapTitle" id="silabus">
              <h5>SILABUS KELAS</h5>
              <h2>
                Bahan ajar yang disajikan telah disusun sesuai kebutuhan
                industri digital saat ini.
              </h2>
            </div>
          </div>

          <div className="col wrapStep">
            <div className="row">
              <div className="wrapNt">
                <div className="number">01</div>
                <div className="title">INTRODUCTION</div>
              </div>

              <div className="wrapContentStep">
                <h5>Pengenalan Tentang User Interface</h5>
                <p>
                  Modul Ini akan memberikan kamu pengetahuan tentang apa itu
                  design dan element apa saja yang diperluakn
                </p>
              </div>
            </div>

            <div className="row">
              <div className="wrapNt">
                <div className="number">02</div>
                <div className="title">UI FUNDAMENTALS</div>
              </div>

              <div className="wrapContentStep">
                <h5>Mengenal prinsip-prinsip dalam mendesain UI</h5>
                <p>
                  Pada modul ini, Kamu diharapkan mengerti dan mampu menerapkan
                  prinsip UI dalam sebuah desain produk.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="wrapNt">
                <div className="number">03</div>
                <div className="title">UI COLORING</div>
              </div>

              <div className="wrapContentStep">
                <h5>Membuat kombinasi warna berdasarkan Brand</h5>
                <p>
                  Pada modul ini, kamu akan membuat sebuah kombinasi warna yang
                  baik dalam membangun sebuah produk digital berdasarkan brand
                  image.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="wrapNt">
                <div className="number">04</div>
                <div className="title">UI TYPOGRAPHY</div>
              </div>

              <div className="wrapContentStep">
                <h5>Bagaimana kombinasi typeface (font) bekerja dalam UI</h5>
                <p>
                  Pada modul ini, kamu belajar bagaimana membuat sebuah
                  kombinasi typography yang baik dalam membangun sebuah produk
                  digital berdasarkan brand image.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="wrapNt">
                <div className="number">05</div>
                <div className="title">UI COMPONENT</div>
              </div>

              <div className="wrapContentStep">
                <h5>Membuat UI Guidline</h5>
                <p>
                  Pada modul ini, kamu akan membuat UI component mu sendiri agar
                  produk memiliki konsistensi, baik dari sisi warna, typography,
                  ukuran dan lain sebagainya.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="wrapNt">
                <div className="number last">06</div>
                <div className="title">FINAL PRESENTATION</div>
              </div>

              <div className="wrapContentStep">
                <h5>Persentase tahap akhir</h5>
                <p>
                  Pada tahap ini, kamu akan di perhadapkan pada study kasus
                  untuk menyeelasaikan masalah tampilan atau User Interface
                  sebuah produk yang kemudian akan di persentasekan sebagai
                  syarat kelulusan di kelas ini.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="container-fluid wrapCost">
        <div className="container fourContent">
          <div className="row">
            <div className="col-md-10 wrapTitle" id="biaya">
              <h5>BIAYA KELAS</h5>
              <h2>Rincihan Biaya Pendidikan.</h2>
            </div>

            <div className="col-md-10 colCost">
              <div className="cosTitle">Biaya Pebdidikan</div>

              <div className="wrapCosList">
                <div className="titleList">Biaya Kelas</div>
                <div className="listCost">
                  <div className="discount">
                    <u>Rp. 5.000.000,-</u>(save 50%)
                  </div>
                  <div className="price">Rp. 2.5.00.000,-</div>
                </div>
              </div>

              <hr />

              <div className="wrapCosList">
                <div className="titleList">Biaya Registrasi</div>
                <div className="listCost">Rp. 1.00.000,-</div>
              </div>

              <hr />

              <div className="wrapCosList">
                <div className="titleList">Total Harga</div>
                <div className="listCost">Rp. 2.6.00.000,-</div>
              </div>

              <hr />
              <br />
              <br />
            </div>

            <div className="col-md-10 colCost2">
              <div className="cosTitle">Promo Pendaftaran (Early Bird)</div>

              <div className="wrapCosList">
                <div className="titleList">
                  <div className="titleDicount">Biaya Kelas ( Promo awal )</div>
                  <div className="titleInfo">
                    Pembayaran dilakukan upfront 100%
                  </div>
                </div>

                <div className="listCost">Rp. 1.000.000,-</div>
              </div>

              <hr />

              <div className="wrapCosList">
                <div className="titleList">Biaya Registrasi</div>
                <div className="listCost">Rp. 1.00.000,-</div>
              </div>

              <hr />

              <div className="wrapCosList">
                <div className="titleList">
                  <div className="titleDicount">Biaya Kelas ( Promo awal )</div>
                  <div className="titleInfo">
                    Promo ini hanya terbatas untuk 15 pendaftar pertama sampai
                    dengan tanggal yang ditentukan.
                  </div>
                </div>

                <div className="listCost">Rp. 1.1.00.000,-</div>
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid wrapFive">
        <div className="container fiveContent">
          <div className="row">
            <div className="col-md-10 wrapTitle" id="jadwal">
              <h5>JADWAL</h5>
              <h2>Jadwal Kelas Intensive UI Master Class.</h2>
              <p>
                Silahkan pilih jadwal, sesuai schedule yang telah di tentukan.
              </p>
            </div>
          </div>

          <div className="row rowSchedule container">
            <div className="col-md-12 wrapTglTitle">
              <div className="tglTitle">tanggal pelaksanaan</div>
              <div className="tglTitle">tanggal pelaksanaan</div>
              <div className="tglTitle">tanggal pelaksanaan</div>
            </div>

            <div className="col-md-12 wrapSubTitle">
              <div className="subTitle">
                30 September 2019 s/d <br /> 21 Oktober 2019
              </div>
              <div className="subTitle">
                Sabtu & Minggu <br /> 10.00 - 12.00 WITA
              </div>
              <div className="subTitle">
                Bikin-bikin Creative Hub, <br /> Nipah Mall Lt. 5 Makassar.
              </div>
            </div>

            <div className="col-md-12 ket">
              Ket : Promo early bird berlaku sampai tanggal 27 Sep 2019
            </div>

            <div className="col-md-12 info">
              <p>Untuk info selengkapnya silahkan</p>
              <button type="button" className="btn btn-primary">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid wrapSix">
        <div className="container sixContent">
          <div className="row">
            <div className="col-md-10 wrapTitle" id="faq">
              <h5>FAQ PROGRAM</h5>
              <h2>Frequently Ask Question</h2>
              <p>
                Pertanyaan yang sering diajukan kepada kami, akan kami jawab
                disini.
              </p>
            </div>

            <div className="col-md-10 wrapFaq">
              <h5>
                Mengapa program UX Design sangat penting dan relevan untuk saya
                saat ini?
              </h5>
              <p>
                Apabila Anda memiliki produk digital seperti aplikasi web atau
                mobile, bekerja di Startup Digital, seorang Graphic Designer ,
                atau siapa saja yang ingin mendalami UI Design dan berkarir
                sebagai UI Designer, course UI Design ini akan sangat bermanfaat
                untuk Anda. User Interface Design atau lebih dikenal dengan
                istilah UI Design bukan hanya sekedar menciptakan estetika
                design yang Indah untuk aplikasi web atau mobile Anda.{" "}
              </p>

              <p>
                UI Design adalah tentang bagaimana pengguna aplikasi memiliki
                keterikatan secara emosional dan memiliki pengalaman yang mudah,
                menyenangkan dan tepat sasaran dalam menggunakan sebuah aplikasi
                web atau mobile. UI Design yang baik akan sangat mempengaruhi
                customer loyalty dalam menggunakan aplikasi web atau mobile
                Anda.
              </p>

              <p>
                Program training UI Design kami akan mempelajari prinsip-prinsip
                yang perlu Anda kuasai dalam menciptakan UI Design yang terbaik
                untuk aplikasi web atau mobile Anda.
              </p>

              <h5>
                Apakah saya harus memiliki background design untuk mengikuti
                course ini?
              </h5>
              <p>
                Apabila Anda memiliki background design sebelumnya akan jauh
                lebih baik. Tapi course ini terbuka untuk siapa saja yang tidak
                memiliki background design sama sekali karena course ini akan
                lebih banyak mendalami tentang karakteristik user untuk
                menciptakan produk digital maupun desain yang dapat diterima
                oleh masyarakat luas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid wrapFooterFirst">
        <img src={repeatReactGrid} className="img1" />
        <img src={repeatReactGrid} className="img2" />
        <div className="container footerFirst">
          <div className="row">
            <div className="col">
              <h1>Anda tertarik dengan program intensive kelas kami?</h1>

              <button type="button" className="btn btn-primary">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid wrapFooterLast">
        <div className="container footerLast">
          <div className="row">
            <div className="col-md-3 wrapLogoFooter">
              <img src={logoDtc} />
              <div>&copy; DTC Academy 2019</div>
            </div>

            <div className="col-md-3 wrapInfoFooter">
              <div className="title">INFO</div>
              <div>Jl.Hertasning 1 No. 30,</div>
              <div>Makassar, Indonesia</div>
              <div>info@dtcacademy.co.id</div>
            </div>

            <div className="col-md-3 wrapKelasFooter">
              <div className="title">KELAS</div>
              <div>UI / UX</div>
              <div>Frontend Developer</div>
              <div>Backen Developer</div>
            </div>

            <div className="col-md-3 wrapSosmedFooter">
              <div className="title">SOSIAL MEDIA</div>
              <div className="wrapSosmed">
                <a href="">
                  <img src={logoFb} alt="" />
                  DTC Academy
                </a>
              </div>
              <div className="wrapSosmed">
                <a href="">
                  <img src={logoTw} alt="" />
                  dtc-academy
                </a>
              </div>
              <div className="wrapSosmed">
                <a href="">
                  <img src={logoIg} alt="" />
                  dtcacademy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
