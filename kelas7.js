// Simulasi data siswa lebih dari 200 data
        const dataSiswa = [
        { "No": 1, "Nama": "Abdullah Multazam", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 2, "Nama": "Aditiya Dwi Prayoga", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 3, "Nama": "Aditya Surya Darmasaputra", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 4, "Nama": "Afiqah Nia Zahrayni", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 5, "Nama": "Agung Budiono", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 6, "Nama": "Ahmad Reyvano Saputra", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 7, "Nama": "Akbar Nugroho", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 8, "Nama": "Angga Lesmana Firdaus", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 9, "Nama": "Ashafirul Nuril Ain", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 10, "Nama": "Auliya Nazura Putri", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 11, "Nama": "Ayla Puspita Dwi Qatrunnada", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 12, "Nama": "Azyan Nur Avara", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 13, "Nama": "Devita Dwi Andini", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 14, "Nama": "Ega Sakhi Alzidanur", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 15, "Nama": "Farid Mauludin Fahri", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 16, "Nama": "Fitriani Latifatul Baroroh", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 17, "Nama": "Ilma Agil", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 18, "Nama": "Mithyan Arga Salvano", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 19, "Nama": "Moch. Muhaimin Saputra", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 20, "Nama": "Mochammad Safi'ul Umam", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 21, "Nama": "Mohamad Rendi Pratama", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 22, "Nama": "Nikken Ayu Kusnul Patimah", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 23, "Nama": "Nurlintang Binti Qonitasari", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 24, "Nama": "Pasha Radhinka Kevin", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 25, "Nama": "Putri Velove Pinky Aurely", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 26, "Nama": "Raditya Putra Alfhasya", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 27, "Nama": "Revan Ghani Ashaka Kurniawan", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 28, "Nama": "Reza Indriana", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 29, "Nama": "Sischa Ayu Ramadhani", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 30, "Nama": "Titania Najwa Putri Aira", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 31, "Nama": "Zahra Oktaviana", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 32, "Nama": "Zeni Robiatunnisa", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 33, "Nama": "Alfian Risqi Syahputra", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 34, "Nama": "Amanda Ramadani", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 35, "Nama": "Aprilia Bilqis Isnaini", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 36, "Nama": "Athaya Dewi Nurmala", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 37, "Nama": "Aura Vely Ananda", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 38, "Nama": "Azarenka Alva Azzahra'", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 39, "Nama": "Bilqis Nafisyah Zahra", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 40, "Nama": "Cantika April Tina", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 41, "Nama": "Danish Azfar Faeyza Wahyudi", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 42, "Nama": "Dava Satria Purnama", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 43, "Nama": "Dhenis Ramadhan Dwi Wijaya", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 44, "Nama": "Dimas Maulana Lubis Almubarok", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 45, "Nama": "Dimas Permana", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 46, "Nama": "Erista Putri Salmah", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 47, "Nama": "Faiza Aqila Oktaviana", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 48, "Nama": "Fatikhatul Isnaini", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 49, "Nama": "Ferdi Ardiyansah", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 50, "Nama": "Jessika Fitri Nur Aini", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 51, "Nama": "Mohamad Dwi Eka Saputra", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 52, "Nama": "Mohammad Diar Putra Septiawan", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 53, "Nama": "Muhammad Abrisam Azka Amani", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 54, "Nama": "Muhammad Azzam Aliffian Putra", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 55, "Nama": "Muhammad Farid", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 56, "Nama": "Regina Salsa Billa Putri", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 57, "Nama": "Rino Ardiansah", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 58, "Nama": "Royan Agustino Ramdhani Auliya", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 59, "Nama": "Sahila Putri Anantha", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 60, "Nama": "Siti Nur Afika", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 61, "Nama": "Tegar Nur Saputra", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 62, "Nama": "Tri Aliya Fitriani", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 63, "Nama": "Wishnu Erlangga", "JK": "L", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 64, "Nama": "Zahira Nurul Magfiroh", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 65, "Nama": "Zaskia Sabila Firdaus", "JK": "P", "Kelas": "7 B", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 66, "Nama": "Ahmad Dana Nur Baiki", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 67, "Nama": "Akmal Fadil Zanuar", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 68, "Nama": "Aldi Fairuz", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 69, "Nama": "Bayu Setya Surya Waskhita", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 70, "Nama": "Cika Setia Agustina Ramadani", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 71, "Nama": "Dandi Dwi Ananta", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 72, "Nama": "Deni Trio Saputra", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 73, "Nama": "Dewi Meisya Dingga", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 74, "Nama": "Eka Putri Anjariani", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 75, "Nama": "Evelyn Azza Navilla", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 76, "Nama": "Khanza Nabila", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 77, "Nama": "Khoirun Nisa'", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 78, "Nama": "Kholila Maulidia", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 79, "Nama": "M. Khasif Asfiani", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 80, "Nama": "M. Vicky Setiawan", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 81, "Nama": "Moh. Andrian", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 82, "Nama": "Moh. Delva Azril Maulana", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 83, "Nama": "Muchamad Iqbal Al-azzam", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 84, "Nama": "Muhamad Rifad Fernandez", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 85, "Nama": "Muhammad Aljabar Rafiud Ainun Prihastono", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 86, "Nama": "Muhammad Faisal", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 87, "Nama": "Muhammad Kafa Khoirun Nazmi", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 88, "Nama": "Muhammad Wahyu Saputro", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 89, "Nama": "Neila Azka Amelia", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 90, "Nama": "Nindy Azka Diva Az Zahra", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 91, "Nama": "Nur Farisa Irdina", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 92, "Nama": "Qonita Nova Febriyanti", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 93, "Nama": "Rea Kemilau Lois Layla Amri", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 94, "Nama": "Revana Sari Rahmawati", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 95, "Nama": "Saskia Sasabella", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 96, "Nama": "Sintya Nara Avriliya", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 97, "Nama": "Yulfikar Umar", "JK": "L", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 98, "Nama": "Zifara Aisyah Fania", "JK": "P", "Kelas": "7 C", "NISN": "0000000000", "NIPD": "0000" },
       { "No": 99, "Nama": "Adiska Melati", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 100, "Nama": "Aliyatul Khusna", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 101, "Nama": "Almira Nadya Tungga Dewi", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 102, "Nama": "Andien Safa Rahmadhani", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 103, "Nama": "Angelica Farah Fariska", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 104, "Nama": "Aprilia Sari Ainur Ridho", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 105, "Nama": "Arreta Tabina Prasasti", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 106, "Nama": "Artita Dyan Prianisa", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 107, "Nama": "Arzalia Vanyviranza", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 108, "Nama": "Aurasyifa Ramadani", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 109, "Nama": "Basyirotul Azzalul Azzmi Fadilah", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 110, "Nama": "Bilqis Rizki Auliya' Hasanah", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 111, "Nama": "Galih Putra Saktiawan", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 112, "Nama": "Ihsan Nihan Arrisyat", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 113, "Nama": "Jessica Valentino Rossy", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 114, "Nama": "Jessico Victorio Roy Safa'at", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 115, "Nama": "M. Ilham Yanuar Deniel", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 116, "Nama": "Moh. Aldo Febrina Abidin", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 117, "Nama": "Muhammad Farikh Abi Hasan", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 118, "Nama": "Muhammad Nazarrouf", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 119, "Nama": "Muhammad Zidan Maulana", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 120, "Nama": "Nayottama Yofanda Dwi Andono", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 121, "Nama": "Putra Luhur Prabawa", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 122, "Nama": "Rafi Maulana Ramadhan", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
       { "No": 123, "Nama": "Rava Ardila Putra", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 124, "Nama": "Rendi Ardiyansyah", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 125, "Nama": "Rino Dika Prasetyo", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 126, "Nama": "Sabrina Anugrah Ramadan", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 127, "Nama": "Siti Nurchadijah", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 128, "Nama": "Valentcia Putri Anggraini", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 129, "Nama": "Verdiang Gebi Ravael", "JK": "L", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
       { "No": 130, "Nama": "Vika Barokah Rahma", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 131, "Nama": "Yuanita Silvia Sari", "JK": "P", "Kelas": "7 D", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 132, "Nama": "Aditiya Pratama", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 133, "Nama": "Ahmad Buchori", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 134, "Nama": "Ahmad Rezza", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 135, "Nama": "Ahmada Sulaiman", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 136, "Nama": "Alya Mukhbita", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 137, "Nama": "Annisa Alifathus Zahra", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 138, "Nama": "Annisa Muzdalifah", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 139, "Nama": "Arum Melati Putri", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 140, "Nama": "Aurel Dwi Lestari", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 141, "Nama": "Dania Eka Fitri", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 142, "Nama": "Duwi Ratna Sari", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 143, "Nama": "Faza Rizki Saputra", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 144, "Nama": "Fellish Aditya Pratama", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 145, "Nama": "Geisha Maya Habiba", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 146, "Nama": "Gisella Zahra Anggraini Putri", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 147, "Nama": "Hasan Fatih", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 148, "Nama": "Intan Nur Aini", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 149, "Nama": "Kevin Galih Syaputra", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 150, "Nama": "Kusuma Putri Setiyawati", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 151, "Nama": "Maulana Priya Natakusuma Zulkarnain", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 152, "Nama": "Moh. Alvan Ikhsan Pratama", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 153, "Nama": "Moh. Hafis Fahrezza Putra", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 154, "Nama": "Moh. Nizam Azhari", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 155, "Nama": "Mohamad Mujiburrohman", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 156, "Nama": "Muhammad Naufal Jabbar Cholik", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 157, "Nama": "Poppy Nurika Harmaji", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 158, "Nama": "Rafa Julianto Saputra", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 159, "Nama": "Reihan Ahmad Prasetio", "JK": "L", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 160, "Nama": "Siti Ade Aurel", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 161, "Nama": "Suci Indriani", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 162, "Nama": "Taqia Tawang Adini", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 163, "Nama": "Wulan Dwi Efinda", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 164, "Nama": "Zahra Maharani", "JK": "P", "Kelas": "7 E", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 165, "Nama": "Afika Nur Laily", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 166, "Nama": "Ahmad Faaizin", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 167, "Nama": "Ahmad Imaduddin", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 168, "Nama": "Alecya Putri Ariana", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 169, "Nama": "Alfiano Bayu Febrian", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 170, "Nama": "Bilqis Hanik Hanifah", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 171, "Nama": "Derian Alvaro Keysafani", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 172, "Nama": "Devita Amanda Virlya", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 173, "Nama": "Dian Dewi Purwanti", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 174, "Nama": "Dimas Saputra", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 175, "Nama": "Dirly Yudhistira", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 176, "Nama": "Husnul Khotimah", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 177, "Nama": "Karina Noviyanti", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 178, "Nama": "Kelvin Dwi Maulana", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 179, "Nama": "M. Fatqur Rozi", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 180, "Nama": "Marshanda Dewi Ratna", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 181, "Nama": "Miftaqul Putri Handayani", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 182, "Nama": "Moh. Maula Nazhar Annaufall", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 183, "Nama": "Muhamad Akbar", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 184, "Nama": "Muhammad Affan Ali", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 185, "Nama": "Muhammad Khoirul Ikhwan", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 186, "Nama": "Muhammad Reza Afandy", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 187, "Nama": "Nataliya Agnes", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 188, "Nama": "Nawang Wulan Indah Anggun Melati Putri", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
       { "No": 189, "Nama": "Nazza Ahsyani Aisyah", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 190, "Nama": "Nisrina Rohmatul Aqilah", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 191, "Nama": "Nur Elvia Sari", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 192, "Nama": "Putri Virna Safira", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 193, "Nama": "Rafcha Daniel Saputra", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 194, "Nama": "Rahayu Putri Lestari", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 195, "Nama": "Rendytian Firmansyah", "JK": "L", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
         { "No": 196, "Nama": "Syafa Ganezha Lubis", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 197, "Nama": "Widyanata Tutut Asari", "JK": "P", "Kelas": "7 F", "NISN": "0000000000", "NIPD": "0000" }
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