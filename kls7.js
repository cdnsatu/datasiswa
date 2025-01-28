        // Simulasi data siswa lebih dari 200 data
        const dataSiswa = [
            
        { "No": 1, "Nama": "Abdullah Multazam", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 2, "Nama": "Aditiya Dwi Prayoga", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 3, "Nama": "Aditya Surya Darmasaputra", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 4, "Nama": "Afiqah Nia Zahrayni", "JK": "P", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        { "No": 5, "Nama": "Agung Budiono", "JK": "L", "Kelas": "7 A", "NISN": "0000000000", "NIPD": "0000" },
        
          ];

        // Elemen HTML
        const tableBody = document.getElementById('dataSiswa');
        const cardContainer = document.getElementById('cardSiswa');
        const paginationContainer = document.getElementById('paginationContainer');

        // Konfigurasi pagination
        const itemsPerPage = 30;
        let currentPage = 1;

        // Fungsi untuk menampilkan data pada halaman tertentu
        function displayData(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageData = dataSiswa.slice(startIndex, endIndex);

            // Generate tabel
            generateTableRows(pageData);

            // Generate kartu (untuk mobile)
            generateCards(pageData);

            // Update tombol pagination
            generatePaginationButtons(page);
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
        function generatePaginationButtons(activePage) {
            const totalPages = Math.ceil(dataSiswa.length / itemsPerPage);
            let buttons = '';

            for (let i = 1; i <= totalPages; i++) {
                buttons += `
                    <button class="${i === activePage ? 'active' : ''}" onclick="displayData(${i})">${i}</button>
                `;
            }

            paginationContainer.innerHTML = buttons;
        }

        // Inisialisasi
        document.addEventListener('DOMContentLoaded', () => {
            displayData(currentPage);
        });