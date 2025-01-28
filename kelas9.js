// Simulasi data siswa lebih dari 200 data
        const dataSiswa = [
        { "No": 1, "Nama": "Adinda Sifa Nur Aisyah", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 2, "Nama": "Alfiana Qisqil Hamidatul Ilmi", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 3, "Nama": "Angga Dwi Saputra", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 4, "Nama": "Anggun Sahdavania Azzahra", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 5, "Nama": "Bilqis Salsa Miftakul Jannah", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 6, "Nama": "Chika Ayu Lestari", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 7, "Nama": "Dava Mufti Alfaruq", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 8, "Nama": "Destina Dwi Cahyani", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 9, "Nama": "Dewi Ayun Maharani", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 10, "Nama": "Dwi Yulia Lestari", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 11, "Nama": "Elvida Syifa Zain", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 12, "Nama": "Elvira Anggun Ibrahim", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 13, "Nama": "Evelyn Ramadhani Lesmana Putri", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 14, "Nama": "Fithrotin Nuuril Jannah", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 15, "Nama": "Frenda Permana", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 16, "Nama": "Jiesen Arya Sakti", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 17, "Nama": "Lensi Ardiana", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 18, "Nama": "M. Hanif Hibatullah", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 19, "Nama": "Maulana Abimanyu Kamajaya", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 20, "Nama": "Moh. Faza Fauzan Adhima", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 21, "Nama": "Mohamad Fajar Nur Rifiansyah", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 22, "Nama": "Muhammad Fahmi Faruq Zawawi", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 23, "Nama": "Muhammad Kevin Raditya", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 24, "Nama": "Muhammad Muchtar Yamin", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 25, "Nama": "Nico Bayu Aditiya", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 26, "Nama": "Okta Dwi Kurniawati", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 27, "Nama": "Panggah Hendra Permana", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 28, "Nama": "Rahayu", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 29, "Nama": "Refan Satria Efendi", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 30, "Nama": "Riftalina Puspitasari", "JK": "P", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 31, "Nama": "Ugik Bagus Ardiyansyah", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 32, "Nama": "Yogi Andrianto", "JK": "L", "Kelas": "9 A", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 33, "Nama": "Abdul Rafi Dzaka Mubarok", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 34, "Nama": "Ahlan Sahdan Faridzi", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 35, "Nama": "Aldo Firnando", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 36, "Nama": "Anisa Uswatun Khasanah", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 37, "Nama": "Aurelya Queen Sonya", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 38, "Nama": "Avin Bayu Kurniawan", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 39, "Nama": "Azkia Yamada Putri", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 40, "Nama": "Baharina Magani H", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 41, "Nama": "Dahlia Hamidah", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 42, "Nama": "Dewi Nur Aini", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 43, "Nama": "Elsa Nur Aini", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 44, "Nama": "Fajar Ahmat Rul Aji", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 45, "Nama": "Gandis Intan Maharesa", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 46, "Nama": "Iftita", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 47, "Nama": "Katharina Prameswari Haryoko", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 48, "Nama": "Langgeng Prayitno", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 49, "Nama": "Laurents Abdillah Tenaz Rahmatizza", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 50, "Nama": "Mohammad Farid Ahsan", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 51, "Nama": "Mohammad Rafli Maulana", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 52, "Nama": "Muchammad Fajar Fahreza", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 53, "Nama": "Muhammad Faizal Dwi Akbar", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 54, "Nama": "Nando Surya Bintang", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 55, "Nama": "Neta Eka Putri Elsafira", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 56, "Nama": "Nurul Azizah", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 57, "Nama": "Rachmad Vino Aditya", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 58, "Nama": "Rafa Hisyam Hidayat", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 59, "Nama": "Rafi Akbar Putra Ramadhan", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 60, "Nama": "Risky Imam Safi'i", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 61, "Nama": "Rohan Bagus Kurniawan", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 62, "Nama": "Salma Tsaniatul Ula", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 63, "Nama": "Zahra Maulida'idah Fitri", "JK": "P", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 64, "Nama": "Zendyka Dandy Giotama", "JK": "L", "Kelas": "9 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 65, "Nama": "Adam Bagus Aditia", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 66, "Nama": "Ahmad Rafi", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 67, "Nama": "Aqila Zahrotus Shita", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 68, "Nama": "Arianti Agustina", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 69, "Nama": "Ata Maria", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 70, "Nama": "Cantika Almira Sandi Agustin", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 71, "Nama": "Desty Setia Ningrum", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 72, "Nama": "Dyah Ayu Rara", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 73, "Nama": "Fais Alromadlon", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 74, "Nama": "Fauzan Lubis Aulia", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 75, "Nama": "Jihan Elyana Putri", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 76, "Nama": "M. Ilham Aditiya Saputra", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 77, "Nama": "Moch. Bashor Nuri Al Maliki", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 78, "Nama": "Mochamad Aditya Dwi Putra", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 79, "Nama": "Mohammad Robiyansah", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 80, "Nama": "Mufida Madina Mahardika", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 81, "Nama": "Muhammad Amirul Mu'minin", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 82, "Nama": "Muhammad Rizki Asfiyak", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 83, "Nama": "Muhammad Rizqi Aditya", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 84, "Nama": "Mutiara Sukmawati", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 85, "Nama": "Nabila Febria Rahma", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 86, "Nama": "Nafsiyah Nuraini", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 87, "Nama": "Rama Gutama", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 88, "Nama": "Rasya Dwi Kurniawan", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 89, "Nama": "Rehan Fio Apriliantana", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 90, "Nama": "Rosyida Khurun 'ain", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 91, "Nama": "Safina Nur Afifah", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 92, "Nama": "Virli Novianti", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 93, "Nama": "Wahyuni Refina Anggraeni", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 94, "Nama": "Zahrotus Sitaningrum", "JK": "P", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 95, "Nama": "Zainal Fanani", "JK": "L", "Kelas": "9 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 96, "Nama": "Achmat Denis Firlanda", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 97, "Nama": "Agung Sulistyono", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 98, "Nama": "Aira Fitri Amalia", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 99, "Nama": "Aldo Pranata Cahyono", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 100, "Nama": "Alfian Putra Adiguna", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 101, "Nama": "Anggraini Tricahya", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 102, "Nama": "Anisa Nurhidayati", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 103, "Nama": "Aureana Cinta Aiyoko", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 104, "Nama": "Bachtiar Miftahul Hidayat", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 105, "Nama": "Daniel Noval Adi Pratama", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 106, "Nama": "Dimas Aditya Prayoga", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 107, "Nama": "Dwi Nur Aini Bunga Lestari", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 108, "Nama": "Farhan Juni Pratama Putra", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 109, "Nama": "Firda Adelian Wahyu Rahmadani", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 110, "Nama": "Galih Satrio", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 111, "Nama": "Helmy Atman Fadhilah", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 112, "Nama": "Maheswari Nathania Sani", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 113, "Nama": "Maretta Ellen Yudita Putri", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 114, "Nama": "Mochammad Arya Irfandani", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 115, "Nama": "Muhammad Alif Alfarizi", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 116, "Nama": "Muhammad Aris Syafiudin", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 117, "Nama": "Muhammad Reza", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 118, "Nama": "Muhammad Rizky Khoirulloh", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 119, "Nama": "Neza Ulvatia", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 120, "Nama": "Ragil Aprilia Tri Cahyani", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 121, "Nama": "Rekzy Kenzha Levi`s Andhie Amri", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 122, "Nama": "Reva Reza Pratama Putra", "JK": "L", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 123, "Nama": "Sabria Naila Azizah", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 124, "Nama": "Safna Fatimah Azzahro", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 125, "Nama": "Tamamiyatul Khikmah", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 126, "Nama": "Umil Nur Wakhidah", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 127, "Nama": "Yulia Floura Ari", "JK": "P", "Kelas": "9 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 128, "Nama": "Aldi Pranata Cahyono", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 129, "Nama": "Alvin Cahyo Pratama", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 130, "Nama": "Avian Prasetio", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 131, "Nama": "Ayu Cahyati", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 132, "Nama": "Kyescella Septiara Firdaus", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 133, "Nama": "Luky Dwi Pratama", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 134, "Nama": "M. Avisal Adam Apriliano", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 135, "Nama": "Moh. Fariz Albab Mubaroq", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 136, "Nama": "Moh. Faufta Fabianrianto", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 137, "Nama": "Mohamad Akbar Nasrulloh", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 138, "Nama": "Mohammad Fajar", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 139, "Nama": "Mohammad Ridwan Azis", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 140, "Nama": "Mufidah Nurul Laili", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 141, "Nama": "Muhammad Dimas Andhika Putra", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 142, "Nama": "Muhammad Fathan Atallah Rais", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 143, "Nama": "Muhammad Rifqi Ismu Mubarrok", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 144, "Nama": "Muhammad Ubaidillah", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 145, "Nama": "Muhdiyatu Nida'", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 146, "Nama": "Nabila Rahmatul Izah", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 147, "Nama": "Nafisa Oktavia", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 148, "Nama": "Najwa Aulia Saputri", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 149, "Nama": "Puspita Dewi Rani", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 150, "Nama": "Putri Melati Sukma", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 151, "Nama": "Resky Maulana Ramadhan", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 152, "Nama": "Revalia Damayanti", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 153, "Nama": "Rifki Nur Afif", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 154, "Nama": "Satria Nakula Mulya", "JK": "L", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 155, "Nama": "Siti Miftakur Rohmah", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 156, "Nama": "Siti Nur Faizah", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 157, "Nama": "Syafa Azizna Zahwa", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 158, "Nama": "Yustikha Niken Putri Firdaus", "JK": "P", "Kelas": "9 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 159, "Nama": "Ahmad Riza Firmansyah", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 160, "Nama": "Aksel Maulana Putra", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 161, "Nama": "Alfiano Bonanza Maulana", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 162, "Nama": "Alif Putra Febian", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 163, "Nama": "Ananda Rizky Putera", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 164, "Nama": "Aqmal Ar Rahim", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 165, "Nama": "Arul Zulia Rahmawati", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 166, "Nama": "Astariana Indah Mutiara Hati", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 167, "Nama": "Bagas Adi Syahputra", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 168, "Nama": "Biki Mauzin Azzuhru", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 169, "Nama": "Bryan Erlangga", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 170, "Nama": "Dimas Aditia", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 171, "Nama": "Dinda Nihayatul Maghfiroh", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 172, "Nama": "Ega Dwi Putra", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 173, "Nama": "Faril Arya Pratama", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 174, "Nama": "Fransiska Dwi Anggraini", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 175, "Nama": "Julian Bagus Mahadiron", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 176, "Nama": "Meysarotul Ludvia", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 177, "Nama": "Mochamad Dwi Noval Aguista", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 178, "Nama": "Mohammad Abidin", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 179, "Nama": "Muhammad Daffa Yuma Syahputra", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 180, "Nama": "Muhammad Yusril Dwi Cahyo", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 181, "Nama": "Nasywa Azahrini", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 182, "Nama": "Nilam Fajar Aini", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 183, "Nama": "Nur Aini Fatma Yusdiana", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 184, "Nama": "Nurisma Aprillian", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 185, "Nama": "Octa Andiana Silvi", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 186, "Nama": "Rafli Arianto", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 187, "Nama": "Regina Anas Tasya", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 188, "Nama": "Shella Nur Rahma", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 189, "Nama": "Siti Halimaisaroh", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 190, "Nama": "Sofi Maharani Dwi Cahyani", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 191, "Nama": "Syifa Nuraini", "JK": "P", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 192, "Nama": "Vino Andrenata", "JK": "L", "Kelas": "9 F", "NISN": "0000000000", "NIPD": "0000" }
          ];

       // Elemen HTML
        const tableBody = document.getElementById('dataSiswa');
        const cardContainer = document.getElementById('cardSiswa');
        const paginationContainer = document.getElementById('paginationContainer');
        const searchInput = document.getElementById('searchSiswa');

        // Konfigurasi pagination
        const itemsPerPage = 30;
        let currentPage = 1;
        let filteredData = [];

        // Fungsi untuk menampilkan data pada halaman tertentu
        function displayData(page, searchQuery = '') {
            let dataToDisplay = dataSiswa; // Data default adalah semua siswa

            if (searchQuery) {
                const normalizedQuery = searchQuery.toLowerCase().trim();
                dataToDisplay = dataSiswa.filter(siswa => {
                    const normalizedName = siswa.Nama.toLowerCase();
                    const normalizedKelas = siswa.Kelas.toLowerCase();
                    return normalizedName.includes(normalizedQuery) || normalizedKelas.includes(normalizedQuery);
                });
            }
             filteredData = dataToDisplay;
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = dataToDisplay.slice(startIndex, endIndex);

            // Generate tabel
            generateTableRows(pageData);
            // Generate kartu (untuk mobile)
            generateCards(pageData);

            // Update tombol pagination
            generatePaginationButtons(page, searchQuery);
        }

        // Fungsi untuk membuat baris tabel
        function generateTableRows(data) {
            const rows = data.map(siswa => `
                <tr class="siswa">
                    <td class="siswa" data-label="No">${siswa.No}</td>
                    <td class="siswa" data-label="Nama">${siswa.Nama}</td>
                    <td class="siswa" data-label="JK">${siswa.JK}</td>
                    <td class="siswa" data-label="Kelas">${siswa.Kelas}</td>
                    <td class="siswa" data-label="NISN">${siswa.NISN}</td>
                    <td class="siswa" data-label="NIPD">${siswa.NIPD}</td>
                </tr>
            `).join('');
            tableBody.innerHTML = rows;
        }

        // Fungsi untuk membuat kartu data
        function generateCards(data) {
            const cards = data.map(siswa => `
                <div class="siswa-card" aria-label="Kartu informasi siswa">
                    <div class="siswa-card-header"> Nama :  <span>${siswa.Nama}</span></div>
                    <div class="siswa-card-body">
                        <div class="siswa-card-row"><strong>JK:</strong> <span>${siswa.JK === 'L' ? 'Laki-laki' : 'Perempuan'}</span></div>
                        <div class="siswa-card-row"><strong>Kelas:</strong> <span>${siswa.Kelas}</span></div>
                        <div class="siswa-card-row"><strong>NISN:</strong> <span>${siswa.NISN}</span></div>
                        <div class="siswa-card-row"><strong>NIPD:</strong> <span>${siswa.NIPD}</span></div>
                    </div>
                </div>
            `).join('');
            cardContainer.innerHTML = cards;
        }

        // Fungsi untuk membuat tombol pagination
        function generatePaginationButtons(activePage, searchQuery = '') {
            let totalPages;

            if (searchQuery) {
                totalPages = Math.ceil(filteredData.length / itemsPerPage);
            } else {
                totalPages = Math.ceil(dataSiswa.length / itemsPerPage);
            }

            let buttons = '';

            for (let i = 1; i <= totalPages; i++) {
                buttons += `
                    <button class="${i === activePage ? 'active' : ''}" onclick="displayData(${i}, '${searchQuery}')">${i}</button>
                `;
            }

            paginationContainer.innerHTML = buttons;
        }

        // function untuk mengaktifkan function displayData
        function performSearch() {
            const searchQuery = searchInput.value;
            displayData(1, searchQuery);
        }

        // Inisialisasi
        document.addEventListener('DOMContentLoaded', () => {
            displayData(currentPage);
        });