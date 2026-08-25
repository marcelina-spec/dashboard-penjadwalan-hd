/* ==========================================
   DATA SINTETIS PASIEN
   ========================================== */

const dataPasien = [

    {
        kode: "P001",
        sesi: "Pagi",
        mesin: "HD-01",
        mulai: "07:00",
        selesai: "11:00",
        status: "Selesai",
        catatan: "Selesai sesuai jadwal"
    },

    {
        kode: "P002",
        sesi: "Pagi",
        mesin: "HD-02",
        mulai: "07:00",
        selesai: "11:00",
        status: "Berlangsung",
        catatan: "Pelayanan berlangsung"
    },

    {
        kode: "P003",
        sesi: "Pagi",
        mesin: "HD-03",
        mulai: "07:30",
        selesai: "11:30",
        status: "Terlambat",
        catatan: "Pasien terlambat"
    },

    {
        kode: "P004",
        sesi: "Pagi",
        mesin: "HD-04",
        mulai: "08:00",
        selesai: "12:00",
        status: "Menunggu",
        catatan: "Menunggu sesi"
    },

    {
        kode: "P005",
        sesi: "Pagi",
        mesin: "HD-05",
        mulai: "08:00",
        selesai: "12:00",
        status: "Batal",
        catatan: "Sesi dibatalkan"
    },

    {
        kode: "P006",
        sesi: "Pagi",
        mesin: "HD-06",
        mulai: "08:30",
        selesai: "12:30",
        status: "Menunggu",
        catatan: "Menunggu sesi"
    },

    {
        kode: "P007",
        sesi: "Siang",
        mesin: "HD-01",
        mulai: "13:00",
        selesai: "17:00",
        status: "Menunggu",
        catatan: "Sesi siang"
    },

    {
        kode: "P008",
        sesi: "Siang",
        mesin: "HD-02",
        mulai: "13:00",
        selesai: "17:00",
        status: "Menunggu",
        catatan: "Sesi siang"
    },

    {
        kode: "P009",
        sesi: "Siang",
        mesin: "HD-03",
        mulai: "13:30",
        selesai: "17:30",
        status: "Menunggu",
        catatan: "Sesi siang"
    },

    {
        kode: "P010",
        sesi: "Siang",
        mesin: "HD-04",
        mulai: "13:30",
        selesai: "17:30",
        status: "Menunggu",
        catatan: "Sesi siang"
    },

    {
        kode: "P011",
        sesi: "Siang",
        mesin: "HD-05",
        mulai: "14:00",
        selesai: "18:00",
        status: "Menunggu",
        catatan: "Mesin perlu diperhatikan"
    },

    {
        kode: "P012",
        sesi: "Siang",
        mesin: "HD-06",
        mulai: "14:00",
        selesai: "18:00",
        status: "Menunggu",
        catatan: "Sesi siang"
    },

    {
        kode: "P013",
        sesi: "Siang",
        mesin: "HD-07",
        mulai: "14:30",
        selesai: "18:30",
        status: "Menunggu",
        catatan: "Sesi siang"
    },

    {
        kode: "P014",
        sesi: "Siang",
        mesin: "HD-08",
        mulai: "15:00",
        selesai: "19:00",
        status: "Menunggu",
        catatan: "Sesi siang"
    }

];


/* ==========================================
   DATA MESIN HD
   ========================================== */

const dataMesin = [

    {
        nama: "HD-01",
        status: "Tersedia"
    },

    {
        nama: "HD-02",
        status: "Digunakan"
    },

    {
        nama: "HD-03",
        status: "Digunakan"
    },

    {
        nama: "HD-04",
        status: "Digunakan"
    },

    {
        nama: "HD-05",
        status: "Maintenance"
    },

    {
        nama: "HD-06",
        status: "Digunakan"
    },

    {
        nama: "HD-07",
        status: "Digunakan"
    },

    {
        nama: "HD-08",
        status: "Tersedia"
    }

];


/* ==========================================
   MENAMPILKAN TANGGAL
   ========================================== */

const tanggal = new Date();

document.getElementById("tanggal").innerHTML =
    tanggal.toLocaleDateString(
        "id-ID",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );


/* ==========================================
   RINGKASAN DASHBOARD
   ========================================== */

function tampilkanRingkasan() {

    document.getElementById("totalPasien").innerText =
        dataPasien.length;


    document.getElementById("selesai").innerText =
        dataPasien.filter(
            pasien => pasien.status === "Selesai"
        ).length;


    document.getElementById("berlangsung").innerText =
        dataPasien.filter(
            pasien => pasien.status === "Berlangsung"
        ).length;


    document.getElementById("menunggu").innerText =
        dataPasien.filter(
            pasien => pasien.status === "Menunggu"
        ).length;


    document.getElementById("terlambat").innerText =
        dataPasien.filter(
            pasien => pasien.status === "Terlambat"
        ).length;


    document.getElementById("batal").innerText =
        dataPasien.filter(
            pasien => pasien.status === "Batal"
        ).length;

}


/* ==========================================
   FILTER MESIN
   ========================================== */

function buatFilterMesin() {

    const filterMesin =
        document.getElementById("filterMesin");


    dataMesin.forEach(mesin => {

        const option =
            document.createElement("option");

        option.value = mesin.nama;

        option.textContent = mesin.nama;

        filterMesin.appendChild(option);

    });

}


/* ==========================================
   TABEL JADWAL
   ========================================== */

function tampilkanTabel() {

    const tabel =
        document.getElementById("tabelJadwal");


    const filterSesi =
        document.getElementById("filterSesi").value;


    const filterStatus =
        document.getElementById("filterStatus").value;


    const filterMesin =
        document.getElementById("filterMesin").value;


    const hasil =
        dataPasien.filter(pasien => {

            const cocokSesi =
                filterSesi === "Semua" ||
                pasien.sesi === filterSesi;


            const cocokStatus =
                filterStatus === "Semua" ||
                pasien.status === filterStatus;


            const cocokMesin =
                filterMesin === "Semua" ||
                pasien.mesin === filterMesin;


            return (
                cocokSesi &&
                cocokStatus &&
                cocokMesin
            );

        });


    tabel.innerHTML = "";


    hasil.forEach((pasien, index) => {

        const baris =
            document.createElement("tr");


        const kelasStatus =
            pasien.status
                .toLowerCase()
                .replace(" ", "");


        baris.innerHTML = `

            <td>${index + 1}</td>

            <td>
                <strong>${pasien.kode}</strong>
            </td>

            <td>${pasien.sesi}</td>

            <td>${pasien.mesin}</td>

            <td>${pasien.mulai}</td>

            <td>${pasien.selesai}</td>

            <td>
                <span class="status ${kelasStatus}">
                    ${pasien.status}
                </span>
            </td>

            <td>${pasien.catatan}</td>

        `;


        tabel.appendChild(baris);

    });


    if (hasil.length === 0) {

        tabel.innerHTML = `

            <tr>

                <td colspan="8">

                    Tidak ada jadwal yang sesuai
                    dengan filter.

                </td>

            </tr>

        `;

    }

}


/* ==========================================
   STATUS MESIN
   ========================================== */

function tampilkanMesin() {

    const daftarMesin =
        document.getElementById("daftarMesin");


    daftarMesin.innerHTML = "";


    dataMesin.forEach(mesin => {

        const div =
            document.createElement("div");


        div.classList.add("mesin");


        let kelas = "";


        if (mesin.status === "Tersedia") {

            kelas = "tersedia";

        }

        else if (mesin.status === "Digunakan") {

            kelas = "digunakan";

        }

        else {

            kelas = "maintenance";

        }


        div.innerHTML = `

            <h3>${mesin.nama}</h3>

            <p class="${kelas}">
                ${mesin.status}
            </p>

        `;


        daftarMesin.appendChild(div);

    });

}


/* ==========================================
   PERINGATAN OTOMATIS
   ========================================== */

function tampilkanPeringatan() {

    const warningText =
        document.getElementById("warningText");


    const mesinMaintenance =
        dataMesin.filter(
            mesin => mesin.status === "Maintenance"
        );


    const pasienTerlambat =
        dataPasien.filter(
            pasien => pasien.status === "Terlambat"
        );


    let pesan = "";


    if (mesinMaintenance.length > 0) {

        pesan +=
            "Mesin " +
            mesinMaintenance
                .map(m => m.nama)
                .join(", ") +
            " sedang maintenance. ";

    }


    if (pasienTerlambat.length > 0) {

        pesan +=
            pasienTerlambat.length +
            " pasien tercatat terlambat.";

    }


    if (pesan === "") {

        pesan =
            "Tidak ada peringatan.";

    }


    warningText.innerText = pesan;

}


/* ==========================================
   EVENT FILTER
   ========================================== */

document
    .getElementById("filterSesi")
    .addEventListener(
        "change",
        tampilkanTabel
    );


document
    .getElementById("filterStatus")
    .addEventListener(
        "change",
        tampilkanTabel
    );


document
    .getElementById("filterMesin")
    .addEventListener(
        "change",
        tampilkanTabel
    );


/* ==========================================
   MENJALANKAN DASHBOARD
   ========================================== */

tampilkanRingkasan();

buatFilterMesin();

tampilkanTabel();

tampilkanMesin();

tampilkanPeringatan();
